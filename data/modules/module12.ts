// data/modules/module12.ts

import { Module } from '@/app/types/course';

export const module12: Module = {
  id: 12,
  title: 'Privacy Engineering',
  description:
    'A technical deep-dive into the engineering controls that make privacy real in software systems. This module covers cryptographic foundations (AES-256, RSA, ECC, bcrypt, Argon2, format-preserving encryption), anonymisation techniques (k-anonymity, l-diversity, differential privacy), Privacy by Design principles, building consent and DSAR APIs, and emerging privacy-preserving technologies including homomorphic encryption, secure multi-party computation, federated learning, zero-knowledge proofs, and confidential computing.',
  duration: '10 Hours',
  icon: 'Code',
  learningObjectives: [
    'Implement AES-256, RSA and ECC encryption with sound key management using KMS and Vault',
    'Apply bcrypt, scrypt and Argon2 password hashing with salting and peppering',
    'Design data masking, tokenisation and anonymisation systems that withstand re-identification attacks',
    'Implement the 7 Privacy by Design principles in code architecture',
    'Build consent and DSAR APIs that satisfy DPDPA Sections 7 and 11',
    'Evaluate emerging privacy-preserving technologies (homomorphic encryption, SMPC, federated learning, ZKPs, confidential computing) for production use',
    'Integrate privacy engineering with DPDPA Section 8(5) reasonable security safeguards',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: TECHNICAL CONTROLS
    // ============================================================
    {
      id: 1,
      title: 'Technical Controls',
      lessons: [
        // -------- LESSON 1 --------
        {
          id: 1,
          title: 'Encryption: AES-256, RSA, ECC, and Key Management',
          duration: '25 min',
          type: 'video',
          description:
            'A technical deep-dive into symmetric encryption (AES-256), asymmetric encryption (RSA, ECC), transport encryption (TLS 1.3), and enterprise key management with AWS KMS, HashiCorp Vault, and Hardware Security Modules.',
          content:
            'Encryption is the foundational control under DPDPA Section 8(5) for "reasonable security safeguards". Without encryption, every other privacy control collapses when an attacker gains access. This lesson covers the technical foundations of modern encryption, the trade-offs between symmetric and asymmetric approaches, the lifecycle of cryptographic keys, and the operational discipline required to use encryption correctly.',
          learningObjectives: [
            'Differentiate symmetric and asymmetric encryption and their use cases',
            'Apply AES-256-GCM for data at rest and TLS 1.3 for data in transit',
            'Design a key management architecture using KMS, Vault, and HSMs',
            'Implement envelope encryption for application-level data protection',
            'Avoid common cryptographic mistakes (ECB mode, hard-coded keys, IV reuse)',
          ],
          keyTakeaways: [
            'AES-256-GCM is the industry standard for data at rest; RSA and ECC for asymmetric use cases; TLS 1.3 for data in transit.',
            'Key management is harder than encryption itself — use KMS or Vault, never hard-code keys.',
            'Envelope encryption separates data encryption keys (DEKs) from key encryption keys (KEKs), enabling scalable and auditable key use.',
            'TLS 1.3 should be enforced everywhere — TLS 1.0 and 1.1 are deprecated and should be disabled.',
            'Encryption is necessary but not sufficient — access controls, audit logging, and key rotation complete the security stack.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Symmetric Encryption: AES-256-GCM',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Advanced Encryption Standard (AES) is the dominant symmetric encryption algorithm. AES operates on 128-bit blocks with key sizes of 128, 192, or 256 bits. For DPDPA compliance, AES-256 is the recommended minimum — it provides 128-bit security against brute-force attacks (2^256 work factor). The mode of operation matters as much as the key size: GCM (Galois/Counter Mode) provides authenticated encryption — confidentiality and integrity — in a single operation. CBC mode is legacy and does not provide authentication; ECB mode is broken and must never be used.',
                },
                {
                  type: 'callout',
                  content:
                    'Never use ECB mode. The famous "ECB penguin" image shows how ECB preserves patterns in ciphertext, leaking structural information. Always use GCM (preferred) or CBC with HMAC for authentication.',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'AES-256-GCM in Code',
                },
                {
                  type: 'paragraph',
                  content:
                    'In Python, use the cryptography library. In Node.js, use the built-in crypto module. In Go, use crypto/aes and crypto/cipher. The key requirement: a unique 96-bit IV (initialisation vector) per encryption operation, never reused with the same key. The authentication tag must be verified before decryption — failure to verify leads to padding oracle attacks.',
                },
                {
                  type: 'example',
                  content:
                    'Encrypting an Aadhaar number (12 digits) in Python: import cryptography; from cryptography.hazmat.primitives.ciphers.aead import AESGCM; key = AESGCM.generate_key(bit_length=256); aesgcm = AESGCM(key); nonce = os.urandom(12); # 96-bit IV; ciphertext = aesgcm.encrypt(nonce, aadhaar.encode(), associated_data=None); Store nonce + ciphertext together. Never store the key alongside the ciphertext — use KMS for key storage.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Asymmetric Encryption: RSA and ECC',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Asymmetric (public-key) encryption uses two keys: a public key for encryption and a private key for decryption. RSA (Rivest-Shamir-Adleman), introduced in 1977, is the most widely used asymmetric algorithm. RSA-2048 provides 112-bit security — adequate for general use; RSA-3072 provides 128-bit security — recommended for sensitive data. Elliptic Curve Cryptography (ECC) achieves the same security with smaller keys — ECC P-256 provides 128-bit security with a 256-bit key, vs RSA\'s 3072-bit key.',
                },
                {
                  type: 'heading',
                  content: 'Use Cases for Asymmetric Encryption',
                },
                {
                  type: 'list',
                  content: 'Common use cases for asymmetric encryption',
                  items: [
                    'TLS / HTTPS handshakes — establish a symmetric session key.',
                    'Digital signatures — verify authenticity and integrity of messages.',
                    'Key exchange — Diffie-Hellman key agreement for forward secrecy.',
                    'Email encryption — PGP, S/MIME.',
                    'Code signing — verify software authenticity.',
                    'JWT signing — RS256 for production (HMAC for development only).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Asymmetric encryption is slow — never use it to encrypt bulk data. Use it to encrypt a symmetric key (envelope encryption) or to sign hashes. Use AES-256 for bulk data.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'TLS 1.3 for Data in Transit',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Transport Layer Security (TLS) encrypts data in transit between client and server. TLS 1.3 (RFC 8446, 2018) is the current standard. Compared to TLS 1.2, TLS 1.3 removes weak algorithms (RC4, SHA-1, MD5, static RSA), reduces handshake RTTs from 2 to 1, mandates forward secrecy, and disables renegotiation. DPDPA Section 8(5) "reasonable security safeguards" should be interpreted as requiring TLS 1.2 minimum, with TLS 1.3 preferred.',
                },
                {
                  type: 'heading',
                  content: 'Practical TLS Configuration',
                },
                {
                  type: 'list',
                  content: 'Practical TLS hardening checklist',
                  items: [
                    'Disable TLS 1.0 and TLS 1.1 — deprecated by IETF in 2020.',
                    'Enable TLS 1.2 and TLS 1.3 — TLS 1.3 should be preferred.',
                    'Use ECDHE for key exchange — provides forward secrecy.',
                    'Use AEAD ciphers only — AES-256-GCM, ChaCha20-Poly1305.',
                    'Disable compression to prevent CRIME attacks.',
                    'Enable HSTS (HTTP Strict Transport Security) header.',
                    'Use modern certificate authorities — Let\'s Encrypt, DigiCert, Sectigo.',
                    'Monitor certificate expiry — automate renewal with ACME.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'For an Nginx server serving an Indian e-commerce site: ssl_protocols TLSv1.2 TLSv1.3; ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305; ssl_prefer_server_ciphers off; add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always; This configuration achieves A+ rating on SSL Labs.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Key Management: KMS, Vault, and HSM',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Key management is the hardest part of encryption. Where do you store the keys? How do you rotate them? Who can access them? How do you audit their use? The three primary solutions are: cloud Key Management Services (AWS KMS, Azure Key Vault, Google Cloud KMS), HashiCorp Vault (open-source secrets management), and Hardware Security Modules (HSMs — physical or cloud). Each has different trade-offs in cost, security, and operational complexity.',
                },
                {
                  type: 'table',
                  headers: ['Solution', 'Strength', 'Cost', 'Use Case'],
                  rows: [
                    ['AWS KMS', 'FIPS 140-2 Level 3 (HSM-backed)', 'Per-key + per-API-call', 'AWS-hosted workloads'],
                    ['Azure Key Vault', 'FIPS 140-2 Level 2/3', 'Per-key + per-operation', 'Azure-hosted workloads'],
                    ['Google Cloud KMS', 'FIPS 140-2 Level 3', 'Per-key + per-operation', 'GCP-hosted workloads'],
                    ['HashiCorp Vault', 'Software (HSM optional)', 'Self-hosted (operational cost)', 'Multi-cloud, on-prem'],
                    ['AWS CloudHSM', 'FIPS 140-2 Level 3 (dedicated)', 'Hourly + per-key', 'High-security regulated workloads'],
                    ['Thales Luna HSM', 'FIPS 140-2 Level 3 (physical)', 'Capital + maintenance', 'Banking, government'],
                  ],
                },
                {
                  type: 'heading',
                  content: 'Envelope Encryption Pattern',
                },
                {
                  type: 'paragraph',
                  content:
                    'Envelope encryption solves the performance and audit problems of using KMS directly for every operation. The pattern: (1) KMS generates a Data Encryption Key (DEK) — both plaintext and encrypted-with-KEK versions; (2) the application encrypts the data with the plaintext DEK in memory; (3) the plaintext DEK is discarded; (4) the encrypted DEK is stored alongside the ciphertext; (5) for decryption, the application sends the encrypted DEK to KMS, which returns the plaintext DEK; (6) the application decrypts the data. This way, KMS is called once per operation (not once per byte), and the DEK is never stored in plaintext outside KMS.',
                },
                {
                  type: 'callout',
                  content:
                    'Envelope encryption is the standard pattern for production applications. Direct KMS encryption should be limited to small data (up to 4 KB for AWS KMS) — typically configuration secrets, not user data.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai fintech uses AWS KMS with envelope encryption for customer KYC documents. Each document is encrypted with a unique DEK. The DEK is encrypted with a master KEK in KMS. The KEK is rotated annually — re-encrypting DEKs against the new KEK without re-encrypting the documents. This achieves key rotation at scale (50 million documents) without operational disruption.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'AES', definition: 'Advanced Encryption Standard — the dominant symmetric block cipher, with key sizes of 128, 192, or 256 bits.' },
            { term: 'GCM', definition: 'Galois/Counter Mode — an authenticated encryption mode for AES that provides both confidentiality and integrity.' },
            { term: 'Envelope Encryption', definition: 'A pattern where a Data Encryption Key (DEK) encrypts data, and a Key Encryption Key (KEK) encrypts the DEK — enabling scalable key management.' },
            { term: 'KMS', definition: 'Key Management Service — a managed service for generating, storing, rotating, and controlling access to encryption keys (e.g., AWS KMS, Azure Key Vault).' },
            { term: 'HSM', definition: 'Hardware Security Module — a dedicated physical or cloud device that generates and protects cryptographic keys, often certified to FIPS 140-2.' },
          ],
          references: [
            { title: 'NIST SP 800-38D — GCM Mode for AES', source: 'National Institute of Standards and Technology', year: '2007' },
            { title: 'RFC 8446 — TLS 1.3', source: 'Internet Engineering Task Force', year: '2018' },
            { title: 'AWS KMS Developer Guide', source: 'Amazon Web Services', year: '2024' },
            { title: 'HashiCorp Vault Documentation', source: 'HashiCorp', year: '2024' },
          ],
        },

        // -------- LESSON 2 --------
        {
          id: 2,
          title: 'Hashing: bcrypt, scrypt, Argon2, Salting, and Peppering',
          duration: '20 min',
          type: 'video',
          description:
            'A technical deep-dive into password hashing — why MD5 and SHA-256 are not enough, and how bcrypt, scrypt, and Argon2id resist brute-force and rainbow table attacks.',
          content:
            'Hashing is the irreversibility counterpart to encryption. For passwords, you cannot use encryption because the key would have to be available at verification time — and if the database is breached, the key is gone too. Instead, passwords are hashed: a one-way function transforms the password into a fixed-length output that cannot be reversed. This lesson covers modern password hashing, salting, peppering, and the trade-offs between bcrypt, scrypt, and Argon2.',
          learningObjectives: [
            'Distinguish hashing from encryption and explain why passwords must be hashed',
            'Apply salt and pepper to defend against rainbow table attacks',
            'Choose between bcrypt, scrypt, and Argon2id based on threat model',
            'Configure hash parameters (work factor, memory, parallelism) appropriately',
            'Implement secure password reset and migration workflows',
          ],
          keyTakeaways: [
            'Never use MD5, SHA-1, or SHA-256 for password hashing — they are too fast and vulnerable to brute-force.',
            'bcrypt with work factor 12+ is the production minimum; Argon2id is the modern recommendation (OWASP).',
            'Salt is unique per password, stored alongside the hash, and prevents rainbow table attacks.',
            'Pepper is a secret value added to all passwords, stored separately (in KMS / config), and adds defence-in-depth.',
            'Hash parameters must be re-tuned as hardware improves — bcrypt work factor 10 was fine in 2015; today 12+ is needed.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Why Not MD5 or SHA-256?',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'MD5 and SHA-256 are cryptographic hash functions designed for speed and verification — not for password storage. Modern GPUs can compute billions of SHA-256 hashes per second, making brute-force of an 8-character password trivial (under a day). For passwords, you need a slow hash function — one designed to be deliberately expensive to compute. This is the fundamental difference between a "hash function" and a "password hash function".',
                },
                {
                  type: 'callout',
                  content:
                    'A modern GPU (NVIDIA RTX 4090) can compute ~22 billion SHA-256 hashes per second. An 8-character password (62^8 combinations) would be cracked in under 11 minutes. The same GPU computes only ~150,000 bcrypt hashes per second — the same password would take ~80 years.',
                  calloutType: 'warning',
                },
                {
                  type: 'table',
                  headers: ['Algorithm', 'Year', 'Type', 'Hashes/sec (RTX 4090)', 'Status'],
                  rows: [
                    ['MD5', '1992', 'Fast hash', '~80 billion', 'Broken — never use'],
                    ['SHA-1', '1995', 'Fast hash', '~25 billion', 'Deprecated'],
                    ['SHA-256', '2001', 'Fast hash', '~22 billion', 'OK for signatures, not passwords'],
                    ['PBKDF2', '2000', 'Password hash', '~1 million', 'Acceptable but dated'],
                    ['bcrypt', '1999', 'Password hash', '~150,000', 'Production minimum'],
                    ['scrypt', '2009', 'Password hash', '~30,000', 'Strong'],
                    ['Argon2id', '2015', 'Password hash (PHC winner)', '~10,000', 'Recommended'],
                  ],
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Salting and Peppering',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A salt is a unique random value added to each password before hashing. The salt is stored alongside the hash (it does not need to be secret). Salting defeats rainbow tables — precomputed tables of common passwords and their hashes — because each password has a unique hash even if the underlying password is the same.',
                },
                {
                  type: 'heading',
                  content: 'Pepper',
                },
                {
                  type: 'paragraph',
                  content:
                    'A pepper is a single secret value added to all passwords in addition to the salt. Unlike the salt, the pepper is secret and stored separately — typically in a KMS, Vault, or environment configuration. If the database is breached but the pepper is not, the attacker cannot brute-force even common passwords. Pepper adds defence-in-depth.',
                },
                {
                  type: 'example',
                  content:
                    'Salt + Pepper hashing workflow: (1) User registers with password "Password123"; (2) Generate random 16-byte salt: e3b0c44298fc1c14...; (3) Combine: "Password123" + pepper_secret + salt; (4) Hash with Argon2id; (5) Store: hash + salt in database; (6) Pepper stays in KMS / env. On login: retrieve salt, combine with input + pepper, hash, compare. If the database is breached, attacker has hashes + salts but no pepper — brute-force requires the pepper too.',
                },
                {
                  type: 'callout',
                  content:
                    'Pepper rotation is hard — if you rotate the pepper, every existing password hash must be re-computed. Design for pepper rotation through a "pepper version" stored alongside each hash, with a migration window during login.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Argon2id Configuration',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Argon2 was the winner of the Password Hashing Competition (PHC) in 2015. Argon2id is the recommended variant — it combines the side-channel resistance of Argon2i with the brute-force resistance of Argon2d. The three key parameters are: memory (m — in KiB), iterations (t — number of passes), and parallelism (p — number of threads). OWASP recommends: m=64 MiB (65536 KiB), t=3, p=4 for typical web applications.',
                },
                {
                  type: 'heading',
                  content: 'Tuning Argon2 for Your Hardware',
                },
                {
                  type: 'list',
                  content: 'Argon2 tuning process',
                  items: [
                    'Step 1: Set parallelism p = number of CPU cores typically available (e.g., 4).',
                    'Step 2: Set memory m = 50–75% of available RAM per concurrent hash (e.g., 65536 KiB).',
                    'Step 3: Set iterations t = 1, then increase until hash takes 0.25–0.5 seconds.',
                    'Step 4: Test under production load — adjust if login latency is unacceptable.',
                    'Step 5: Re-tune annually as hardware improves.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Node.js authentication service on a 4-core server with 8 GB RAM. Argon2id config: m=65536 (64 MiB), t=3, p=4. Hash takes ~250 ms per computation. Server can handle ~16 concurrent logins per second (4 cores × 4 threads × 1 hash/0.25s). For higher throughput, use a dedicated auth worker pool or consider bcrypt with work factor 12.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Password Migration and Reset Workflows',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Migrating from MD5/SHA to bcrypt/Argon2 requires careful planning. The standard pattern is "lazy migration": when a user logs in, verify against the old hash; if correct, re-hash with the new algorithm and store. Until then, the old hash is used. New users always get the new algorithm. After a defined period (e.g., 12 months), force-reset users who have not migrated.',
                },
                {
                  type: 'heading',
                  content: 'Password Reset Workflow',
                },
                {
                  type: 'paragraph',
                  content:
                    'A secure password reset workflow: (1) User requests reset by email; (2) Generate a single-use, time-limited (1 hour) reset token — store the hash of the token, not the token itself; (3) Send the token via email link; (4) User clicks link, enters new password; (5) Server verifies token hash + expiry; (6) Hash new password with Argon2id, store, invalidate the token; (7) Send confirmation email; (8) Log out all existing sessions. Never store the reset token in plaintext — always hash it.',
                },
                {
                  type: 'callout',
                  content:
                    'Never email the password itself. Never store the password in recoverable form (encryption with retrieval) — only hashed form. The whole point of password hashing is that the system cannot recover the password, only verify it.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'An Indian fintech (CRED) migrating from MD5 to Argon2id: Step 1 — deploy Argon2id for new registrations; Step 2 — for logins, first try Argon2id, then fall back to MD5; Step 3 — if MD5 verifies, re-hash with Argon2id and replace; Step 4 — after 6 months, force-reset remaining MD5 users. Total migration: 9 months, no user-visible disruption, no security window where all users were on weak hashes.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Salt', definition: 'A unique random value added to each password before hashing, defeating rainbow table attacks.' },
            { term: 'Pepper', definition: 'A secret value added to all passwords in addition to salt, stored separately from the password database for defence-in-depth.' },
            { term: 'bcrypt', definition: 'A password hashing algorithm based on the Blowfish cipher, with a configurable work factor that makes brute-force expensive.' },
            { term: 'Argon2id', definition: 'The 2015 Password Hashing Competition winner, combining resistance to side-channel and brute-force attacks via tunable memory, iterations, and parallelism.' },
            { term: 'Rainbow Table', definition: 'A precomputed table of password-to-hash mappings used to reverse hashes — defeated by unique per-password salts.' },
          ],
          references: [
            { title: 'OWASP Password Storage Cheat Sheet', source: 'Open Web Application Security Project', year: '2024' },
            { title: 'Argon2 — The Password Hashing Competition Winner', source: 'Password Hashing Competition', year: '2015' },
            { title: 'NIST SP 800-63B — Digital Identity Guidelines', source: 'National Institute of Standards and Technology', year: '2017' },
          ],
        },

        // -------- LESSON 3 --------
        {
          id: 3,
          title: 'Masking: Static, Dynamic, and Format-Preserving',
          duration: '18 min',
          type: 'video',
          description:
            'A technical deep-dive into data masking techniques — static masking, dynamic masking, and format-preserving encryption — for protecting personal data in non-production environments, analytics, and customer support tools.',
          content:
            'Data masking is the technique of obscuring personal data while preserving its utility for legitimate purposes. Masking is essential for non-production environments (development, testing, QA), analytics, and customer support tools where the full data is not needed. This lesson covers static masking (permanent replacement in a copy), dynamic masking (real-time masking on read), and format-preserving encryption (FPE — masking that preserves the format of the original data).',
          learningObjectives: [
            'Distinguish static, dynamic, and on-the-fly masking',
            'Apply format-preserving encryption (FPE) for downstream compatibility',
            'Design masking rules for different data types (PAN, Aadhaar, email, phone)',
            'Implement dynamic masking in database views and APIs',
            'Audit and verify masking effectiveness',
          ],
          keyTakeaways: [
            'Static masking creates a permanently masked copy — used for dev/test environments.',
            'Dynamic masking masks data on read based on the requester\'s role — used for production.',
            'Format-Preserving Encryption (FPE) maintains the format (length, character set) of the original — e.g., a masked Aadhaar is still 12 digits.',
            'Masking is not anonymisation — masked data can often be re-identified, especially if the masking is reversible or partial.',
            'Production databases must use dynamic masking; non-production must use static masking; never expose unmasked production data to non-production environments.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Static vs Dynamic Masking',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Static masking produces a permanently masked copy of a database. Once masked, the copy has no link back to the original — useful for development, testing, and QA environments. Dynamic masking masks data on the fly as it is read, based on the requester\'s role. The underlying data is unchanged; only the response is masked. Useful for customer support, analytics, and reporting where different roles need different views.',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'Static Masking', 'Dynamic Masking'],
                  rows: [
                    ['When applied', 'At ETL time (one-time)', 'At query time (per request)'],
                    ['Storage', 'Masked copy stored separately', 'Original data, masked on read'],
                    ['Reversibility', 'Irreversible', 'Reversible (by authorised users)'],
                    ['Use case', 'Dev / Test / QA environments', 'Production, customer support, analytics'],
                    ['Performance impact', 'Zero (pre-computed)', 'Slight overhead per query'],
                    ['Auditability', 'Limited (copy is fixed)', 'High (per-query audit logs)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Never use dynamic masking as the only control for production data — combine with role-based access control, audit logging, and least-privilege database accounts. Dynamic masking is a defence-in-depth layer, not a primary control.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Format-Preserving Encryption (FPE)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Format-Preserving Encryption (FPE) encrypts data while preserving its original format. A 16-digit credit card number, when FPE-encrypted, remains a 16-digit number. A 12-digit Aadhaar remains a 12-digit number. This is critical when downstream systems (legacy databases, third-party APIs) expect specific formats and cannot handle base64-encoded ciphertext.',
                },
                {
                  type: 'heading',
                  content: 'FPE Algorithms: FF1 and FF3',
                },
                {
                  type: 'paragraph',
                  content:
                    'NIST SP 800-38G specifies two FPE algorithms: FF1 and FF3. FF1 is the recommended algorithm — more secure and flexible than FF3, which has known vulnerabilities for small domains. Both use AES as the underlying primitive. FPE supports domain sizes from 2 to 2^16 characters, making it suitable for digits, alphanumeric, and most structured data.',
                },
                {
                  type: 'example',
                  content:
                    'A bank wants to encrypt credit card numbers in its legacy core banking system, which stores card numbers as 16-digit numeric strings. Standard AES encryption would produce base64 output — incompatible. FPE-FF1 with AES-256 produces a 16-digit numeric output, indistinguishable in format from the original. The system needs no schema changes. Decryption with the FPE key recovers the original.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Masking Rules for Common Data Types',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Different data types require different masking approaches. A consistent set of rules per data type ensures that masking is effective and predictable across the organisation. The table below shows recommended rules for common Indian data types.',
                },
                {
                  type: 'table',
                  headers: ['Data Type', 'Original Example', 'Masked Example', 'Method'],
                  rows: [
                    ['Aadhaar Number', '1234-5678-9012', 'XXXX-XXXX-1234', 'Last 4 visible'],
                    ['PAN', 'ABCDE1234F', 'XXXXX1234F', 'Last 5 visible'],
                    ['Credit Card', '4532-1234-5678-9012', '4532-XXXX-XXXX-9012', 'First 4 + last 4 visible (PCI DSS)'],
                    ['Email', 'john.doe@example.com', 'j***.d**@example.com', 'Partial username visible'],
                    ['Phone', '+91-9876543210', '+91-98XXXX3210', 'First 2 + last 4 visible'],
                    ['Date of Birth', '15/08/1990', 'XX/XX/1990', 'Year visible for age verification'],
                    ['Name', 'Rahul Sharma', 'Rahul S***', 'First name + last initial'],
                    ['Address', '123 MG Road, Bangalore', '1** MG Road, B*******', 'Partial visible'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Aadhaar Masking Rule: Aadhaar Act 2018 mandates that only the last 4 digits of the Aadhaar number be visible. Storing or displaying the full Aadhaar number is punishable under Section 29 of the Aadhaar Act with up to 3 years imprisonment.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Implementing Dynamic Masking in Databases',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Most modern databases support dynamic masking natively. PostgreSQL (with the anon extension), Microsoft SQL Server (Dynamic Data Masking feature), Oracle (Data Masking and Subsetting Pack), and MongoDB (Field Level Encryption with redact) all provide native capabilities. The pattern: define masking rules on columns; assign roles to users; users with the "masked" role see masked data, users with the "unmasked" role see full data.',
                },
                {
                  type: 'heading',
                  content: 'PostgreSQL Example (using anon extension)',
                },
                {
                  type: 'paragraph',
                  content:
                    'In PostgreSQL with anon: SECURITY LABEL FOR anon ON COLUMN customers.aadhaar IS \'MASKED WITH FUNCTION anon.partial(aadhaar, 2, $$**$$, 4)\'; — masks the middle of the Aadhaar number. Users granted the "anon_masked" role see the masked version on SELECT. Users with the "anon_unmasked" role see the full value.',
                },
                {
                  type: 'heading',
                  content: 'API-Level Dynamic Masking',
                },
                {
                  type: 'paragraph',
                  content:
                    'For applications without native database masking, implement masking at the API layer. The pattern: a middleware that intercepts responses, applies masking rules based on the requester\'s role, and returns the masked response. This is slower than database-level masking but more flexible — supports microservices, custom data types, and complex masking rules.',
                },
                {
                  type: 'example',
                  content:
                    'A customer support tool at an Indian telecom. Tier-1 agents see masked phone numbers (+91-98XXXX3210); Tier-2 agents see full numbers after re-authentication; managers see full numbers always. Implemented with PostgreSQL anon extension + a Node.js middleware that overrides masking for authenticated Tier-2 sessions. Audit logs record every unmasking event with timestamp, agent ID, customer ID, and reason code.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Static Masking', definition: 'A one-time masking process that produces a permanently masked copy of data, used for non-production environments.' },
            { term: 'Dynamic Masking', definition: 'Real-time masking of data on read, based on the requester\'s role, with the underlying data unchanged.' },
            { term: 'Format-Preserving Encryption (FPE)', definition: 'An encryption technique (FF1, FF3 algorithms) that preserves the format of the original data — e.g., a 16-digit card number remains a 16-digit number after encryption.' },
            { term: 'Aadhaar Masking', definition: 'A regulatory requirement under the Aadhaar Act to display only the last 4 digits of an Aadhaar number, with the rest obscured.' },
          ],
          references: [
            { title: 'NIST SP 800-38G — Format-Preserving Encryption (FF1, FF3)', source: 'National Institute of Standards and Technology', year: '2016' },
            { title: 'PostgreSQL Anonymisation Extension (anon) Documentation', source: 'PostgreSQL Anonymous', year: '2024' },
            { title: 'Microsoft SQL Server Dynamic Data Masking', source: 'Microsoft', year: '2024' },
            { title: 'Aadhaar Act 2016, Section 29', source: 'Government of India', year: '2016' },
          ],
        },

        // -------- LESSON 4 --------
        {
          id: 4,
          title: 'Tokenization: Vaulted vs Vaultless, HSM Integration',
          duration: '20 min',
          type: 'video',
          description:
            'A technical deep-dive into tokenization — the substitute-value approach that protects sensitive data while preserving business functionality. Covers vaulted and vaultless tokenization, HSM-backed deterministic tokenization, and RBI\'s payment tokenization framework.',
          content:
            'Tokenization replaces a sensitive data element with a non-sensitive surrogate value (token) that has no exploitable meaning outside its specific context. Tokenization differs from encryption: encrypted data can be reversed with the key; tokens can be reversed only through a token vault or deterministic algorithm known to the tokenization system. This lesson covers vaulted and vaultless tokenization, HSM integration, and the RBI payment tokenization framework.',
          learningObjectives: [
            'Differentiate vaulted and vaultless tokenization',
            'Design a tokenization architecture with HSM-backed keys',
            'Apply RBI\'s card-on-file tokenization framework',
            'Implement deterministic vs random tokenization',
            'Audit and rotate tokenization keys',
          ],
          keyTakeaways: [
            'Vaulted tokenization stores a mapping from token to original — simpler but creates a target (the vault).',
            'Vaultless tokenization uses a deterministic algorithm with secret keys — no vault to attack but requires HSM-backed key security.',
            'Deterministic tokens enable searching and joining on tokens — useful for analytics; random tokens prevent this but are more secure.',
            'RBI mandates tokenization for card-on-file storage from 1 October 2022.',
            'Tokenization keys must be rotated annually; rotation requires re-tokenisation of all stored data.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Vaulted Tokenization',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In vaulted tokenization, a central database (the "vault") stores the mapping between tokens and original values. To detokenize, the application queries the vault with the token; the vault returns the original value. The vault is a high-value target — compromising it exposes all originals. Vaulted tokenization is simpler to implement but creates operational overhead and a single point of failure.',
                },
                {
                  type: 'heading',
                  content: 'Architecture of a Token Vault',
                },
                {
                  type: 'list',
                  content: 'Token vault architecture components',
                  items: [
                    'Vault database: encrypted database storing (token, original) pairs. Token is the primary key.',
                    'Token generator: generates random unique tokens, optionally format-preserving.',
                    'Tokenisation API: issues tokens for new originals, detokenises on authorised requests.',
                    'HSM: holds the encryption key for the vault database.',
                    'Access control: API authentication, role-based authorisation, audit logging.',
                    'Replication: synchronous to a DR site for high availability.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A token vault typically stores 10–100 TB for large enterprises. Database choice (PostgreSQL, Cassandra, DynamoDB) depends on read/write patterns. Tokenisation API typically handles 1,000–10,000 TPS.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Vaultless Tokenization',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Vaultless tokenization uses a deterministic algorithm to compute the token from the original — no vault required. The algorithm uses a secret key held in an HSM. To detokenize, the same algorithm cannot be reversed (because the algorithm is one-way), so the vaultless approach typically uses format-preserving encryption (FPE) — the token is the FPE-encrypted original. Detokenisation is FPE-decryption with the HSM key.',
                },
                {
                  type: 'heading',
                  content: 'Vaultless Architecture',
                },
                {
                  type: 'paragraph',
                  content:
                    'Vaultless tokenization eliminates the vault database but introduces an HSM as the critical infrastructure. HSMs handle 1,000–10,000 operations per second — adequate for most workloads. For higher throughput, multiple HSMs in a cluster. The key advantage: no vault to attack — even a full breach of the application database exposes only tokens, not originals. The original can only be recovered through the HSM, which has its own access controls and audit logs.',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'Vaulted', 'Vaultless'],
                  rows: [
                    ['Storage requirement', 'High (vault DB)', 'Low (only tokens)'],
                    ['Detokenisation speed', 'Fast (DB lookup)', 'Slower (HSM call)'],
                    ['Vault attack risk', 'High', 'None'],
                    ['HSM requirement', 'For vault encryption', 'For token generation'],
                    ['Token search/join', 'No (random tokens)', 'Yes (deterministic)'],
                    ['Cost', 'DB + HSM', 'HSM (often more expensive)'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'RBI Card-on-File Tokenization Framework',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'RBI\'s card-on-file (CoF) tokenization framework, effective 1 October 2022, requires merchants and payment aggregators to replace stored card numbers with issuer-generated tokens. The framework: (1) the customer consents to tokenization at checkout; (2) the merchant requests a token from the card network (Visa, Mastercard, RuPay); (3) the card network generates a token specific to the card, merchant, and device; (4) the merchant stores only the token; (5) for subsequent transactions, the merchant submits the token, which the network translates to the actual card number for the issuer.',
                },
                {
                  type: 'heading',
                  content: 'Benefits of CoF Tokenization',
                },
                {
                  type: 'list',
                  content: 'Benefits of RBI CoF tokenization',
                  items: [
                    'Security: a breach of the merchant exposes only tokens — useless outside the specific merchant-card pair.',
                    'Localisation: tokens are stored in India; actual card numbers stay with the issuer (in India for Indian cards).',
                    'Customer trust: one-click checkout preserved without storing actual card numbers.',
                    'Reduced PCI DSS scope: merchants storing only tokens have a smaller PCI scope.',
                    'RBI compliance: satisfies the April 2018 storage circular.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A CoF token is merchant-specific — Amazon\'s token for your card is different from Flipkart\'s token for the same card. A breach at Amazon exposes only Amazon\'s tokens, which cannot be used at Flipkart.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Key Rotation and Tokenisation Audit',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Tokenisation keys must be rotated periodically — typically annually. Rotation requires re-tokenisation of all stored data: for each original, generate a new token with the new key and replace the old token. This is operationally complex — schedule during low-traffic periods, batch the re-tokenisation, and use a "key version" tag to route detokenisation to the correct key version during the transition.',
                },
                {
                  type: 'heading',
                  content: 'Audit Requirements',
                },
                {
                  type: 'list',
                  content: 'Tokenisation audit requirements',
                  items: [
                    'Every tokenisation and detokenisation operation logged with timestamp, requester, original (hashed), token, and reason.',
                    'Logs retained for minimum 1 year (RBI), 7 years (SEBI), or per DPDPA retention.',
                    'Anomalous detokenisation patterns trigger alerts — e.g., bulk detokenisation by a single user.',
                    'Quarterly review of detokenisation access rights.',
                    'Annual third-party audit of tokenisation controls.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A payment aggregator (Razorpay) implements vaultless tokenisation with AWS CloudHSM. Tokens are FF1-format-preserving for card numbers. HSM keys are rotated annually — re-tokenisation runs over a weekend, processing 500 million tokens in 8 hours using 10 parallel workers. Audit logs are stored in AWS CloudTrail with 7-year retention. Anomaly detection alerts on any detokenisation exceeding 1,000 per hour per user.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Tokenization', definition: 'The substitution of a sensitive data element with a non-sensitive surrogate value (token) that has no exploitable meaning outside its specific context.' },
            { term: 'Vaulted Tokenization', definition: 'A tokenization approach where a central database stores the mapping between tokens and original values.' },
            { term: 'Vaultless Tokenization', definition: 'A tokenization approach using a deterministic algorithm with HSM-backed keys, requiring no vault database.' },
            { term: 'Card-on-File (CoF) Tokenization', definition: 'RBI\'s framework requiring merchants to replace stored card numbers with issuer-generated tokens, effective 1 October 2022.' },
            { term: 'HSM', definition: 'Hardware Security Module — a dedicated physical or cloud device for cryptographic key generation, storage, and use.' },
          ],
          references: [
            { title: 'RBI Tokenisation Guidelines (7 January 2019, extended through 2022)', source: 'Reserve Bank of India', year: '2022' },
            { title: 'PCI DSS Tokenization Product Security Guidelines', source: 'PCI Security Standards Council', year: '2022' },
            { title: 'NIST SP 800-38G — Format-Preserving Encryption', source: 'National Institute of Standards and Technology', year: '2016' },
          ],
        },

        // -------- LESSON 5 --------
        {
          id: 5,
          title: 'Anonymization vs Pseudonymization: k-anonymity and l-diversity',
          duration: '22 min',
          type: 'reading',
          description:
            'A technical deep-dive into anonymization and pseudonymization — the formal definitions, the re-identification risks, and the mathematical models (k-anonymity, l-diversity, t-closeness) that quantify anonymity.',
          content:
            'Anonymization and pseudonymization are often confused but have very different legal and technical meanings. Under DPDPA Section 2(j), "anonymisation" means "such irreversible process of transforming or converting personal data to a form in which a Data Principal cannot be identified through any means reasonably likely to be used". Pseudonymization is reversible — the original can be recovered with additional information. This lesson covers the formal definitions, the re-identification risks of naive anonymisation, and the mathematical models that quantify anonymity.',
          learningObjectives: [
            'Distinguish anonymisation from pseudonymization under DPDPA',
            'Identify the re-identification risks of naive anonymisation',
            'Apply k-anonymity, l-diversity, and t-closeness as anonymity models',
            'Design anonymisation workflows that withstand re-identification attacks',
          ],
          keyTakeaways: [
            'Anonymised data falls outside DPDPA — pseudonymised data remains personal data.',
            'Removing direct identifiers (name, Aadhaar) is insufficient — quasi-identifiers (DOB, pincode, gender) can re-identify 87% of the population with 3 attributes (Sweeney 2000).',
            'k-anonymity ensures each record is indistinguishable from at least k-1 others; l-diversity ensures diversity of sensitive attributes within each k-anonymous group.',
            'Anonymisation is a process, not a state — re-evaluate periodically as new datasets and techniques emerge.',
            'Differential privacy is the modern gold standard for anonymisation — covered in the next lesson.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'DPDPA Definitions and Legal Implications',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 2(j) defines "anonymisation" as "the irreversible process of transforming or converting personal data to a form in which a Data Principal cannot be identified through any means reasonably likely to be used by a reasonably likely person". The key word is "irreversible" — once anonymised, the data cannot be re-identified, even by the anonymiser. This is what takes the data outside DPDPA\'s scope.',
                },
                {
                  type: 'heading',
                  content: 'Pseudonymisation — Not Anonymisation',
                },
                {
                  type: 'paragraph',
                  content:
                    'Pseudonymisation replaces direct identifiers with pseudonyms (e.g., hashing names with a salt, encrypting with a key held separately). The original can be recovered by the holder of the salt or key. Pseudonymised data remains personal data under DPDPA — it is still within the Act\'s scope. Many organisations mistakenly believe pseudonymisation equals anonymisation — it does not.',
                },
                {
                  type: 'callout',
                  content:
                    'DPDPA Section 2(j) defines "anonymisation" — but DPDPA does not define "pseudonymisation" explicitly. The general legal consensus, following GDPR Article 4(5), is that pseudonymisation is reversible and therefore remains within DPDPA\'s scope.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Sweeney Re-identification Studies',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Latanya Sweeney\'s landmark 2000 study showed that 87% of the US population can be uniquely identified by three quasi-identifiers: date of birth, gender, and 5-digit zip code. Removing names and SSNs from a "de-identified" dataset is insufficient — quasi-identifiers alone re-identify most individuals. Sweeney famously sent then-Massachusetts Governor William Weld\'s medical records to his office, having re-identified him from a "de-identified" public dataset using just these three attributes.',
                },
                {
                  type: 'heading',
                  content: 'Quasi-identifiers',
                },
                {
                  type: 'list',
                  content: 'Common quasi-identifiers and their re-identification power',
                  items: [
                    'Date of birth + gender + pincode: uniquely identifies ~87% of population.',
                    'Date of birth + pincode alone: ~50% uniqueness.',
                    'Gender + pincode: ~10% uniqueness.',
                    'Hospital admission date + gender + age band: ~30% uniqueness.',
                    'Movie ratings + timestamps (Netflix Prize 2007): uniquely identified specific users when cross-referenced with IMDB.',
                    'Aadhaar last 4 digits + gender + pincode: ~95% uniqueness.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Netflix Prize 2007 dataset was "anonymised" by removing usernames. Researchers re-identified specific users by correlating movie ratings with public IMDB reviews — leading to a class-action lawsuit and cancellation of the second Netflix Prize.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'k-anonymity, l-diversity, and t-closeness',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'k-anonymity is a formal anonymity model. A dataset is k-anonymous if, for every record, there are at least k-1 other records with the same values for all quasi-identifiers. k-anonymity is achieved by generalisation (replacing specific values with broader categories — e.g., DOB with year of birth) and suppression (removing rare values). For k=5, every record is indistinguishable from at least 4 others — an attacker cannot narrow down to fewer than 5 candidates.',
                },
                {
                  type: 'heading',
                  content: 'l-diversity',
                },
                {
                  type: 'paragraph',
                  content:
                    'k-anonymity has a weakness: if all k records in a group have the same sensitive value (e.g., all 5 patients with the same DOB/gender/pincode have HIV), then knowing the quasi-identifiers reveals the sensitive value. l-diversity addresses this by requiring that each k-anonymous group has at least l distinct values for the sensitive attribute. For l=3, each group has at least 3 different sensitive values.',
                },
                {
                  type: 'heading',
                  content: 't-closeness',
                },
                {
                  type: 'paragraph',
                  content:
                    'l-diversity has its own weakness: even with l distinct values, if the distribution within a group is skewed (e.g., 90% HIV+ in a group), an attacker can infer a high probability. t-closeness addresses this by requiring that the distribution of the sensitive attribute within each k-anonymous group is within distance t of the overall distribution. For t=0.1, the group distribution is within 10% of the overall.',
                },
                {
                  type: 'table',
                  headers: ['Model', 'Year', 'Protects Against', 'Weakness'],
                  rows: [
                    ['k-anonymity', '2000 (Sweeney)', 'Linkage attacks via quasi-identifiers', 'Homogeneity of sensitive values'],
                    ['l-diversity', '2006 (Machanavajjhala)', 'Skewness and similarity attacks', 'Does not prevent distribution leakage'],
                    ['t-closeness', '2007 (Li)', 'Distribution leakage', 'Reduces data utility'],
                    ['Differential Privacy', '2006 (Dwork)', 'All linkage attacks (probabilistic)', 'Reduces data utility; requires noise'],
                  ],
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Building an Anonymisation Pipeline',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A production anonymisation pipeline should produce data that meets at least k=5 anonymity, l=3 diversity, and ideally differential privacy. The pipeline: (1) identify direct identifiers and quasi-identifiers; (2) remove or hash direct identifiers; (3) generalise quasi-identifiers to achieve k-anonymity (e.g., DOB → year of birth, pincode → first 3 digits); (4) verify l-diversity on sensitive attributes; (5) add noise for differential privacy if appropriate; (6) measure utility loss; (7) audit and re-evaluate quarterly.',
                },
                {
                  type: 'heading',
                  content: 'Tools for Anonymisation',
                },
                {
                  type: 'list',
                  content: 'Production anonymisation tools',
                  items: [
                    'ARX (open-source Java): k-anonymity, l-diversity, t-closeness, risk analysis.',
                    'Microsoft Presidio (open-source): PII detection and anonymisation for text and structured data.',
                    'Google Differential Privacy Library: open-source DP implementation.',
                    'Tumult Analytics: Python library for differential privacy.',
                    'OpenDiffix: open-source DP-based anonymisation.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru hospital wants to share patient discharge data with researchers. The pipeline: (1) Remove name, Aadhaar, phone; (2) Replace DOB with year of birth (generalisation); (3) Replace pincode with first 3 digits; (4) Verify k-anonymity with k=10 (each patient is indistinguishable from at least 9 others); (5) Verify l-diversity with l=3 on diagnosis (each group has at least 3 different diagnoses); (6) Add Laplace noise to numerical fields (age, LOS) for differential privacy with ε=1.0; (7) Document the pipeline for DPDPA audit.',
                },
                {
                  type: 'callout',
                  content:
                    'Anonymisation is not a one-time activity. New datasets (e.g., a new voter list) may enable re-identification of previously anonymised data. Re-evaluate the anonymisation against new datasets at least annually.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Anonymisation', definition: 'An irreversible process of transforming personal data so that the Data Principal cannot be identified — takes data outside DPDPA scope (Section 2(j)).' },
            { term: 'Pseudonymisation', definition: 'A reversible process of replacing direct identifiers with pseudonyms — data remains personal data under DPDPA.' },
            { term: 'k-anonymity', definition: 'A formal anonymity model requiring each record to be indistinguishable from at least k-1 others on quasi-identifiers.' },
            { term: 'l-diversity', definition: 'An extension of k-anonymity requiring at least l distinct values of the sensitive attribute within each k-anonymous group.' },
            { term: 't-closeness', definition: 'An anonymity model requiring the distribution of sensitive attributes within each group to be within distance t of the overall distribution.' },
            { term: 'Quasi-identifier', definition: 'A data attribute that, alone or in combination, can re-identify individuals — e.g., date of birth, pincode, gender.' },
          ],
          references: [
            { title: 'Sweeney, L. — Simple Demographics Often Identify People Uniquely', source: 'Carnegie Mellon University', year: '2000' },
            { title: 'Machanavajjhala et al. — l-diversity: Privacy Beyond k-anonymity', source: 'ICDE 2006', year: '2006' },
            { title: 'Li et al. — t-closeness: Privacy Beyond k-anonymity and l-diversity', source: 'ICDE 2007', year: '2007' },
            { title: 'DPDPA 2023 Section 2(j) — Anonymisation Definition', source: 'Government of India', year: '2023' },
          ],
        },

        // -------- LESSON 6 --------
        {
          id: 6,
          title: 'Differential Privacy for Analytics',
          duration: '22 min',
          type: 'reading',
          description:
            'A technical deep-dive into differential privacy — the modern gold standard for anonymisation — including the Laplace and Gaussian mechanisms, composition theorems, and practical implementation in analytics pipelines.',
          content:
            'Differential privacy (DP), introduced by Cynthia Dwork in 2006, is the modern gold standard for anonymisation. Unlike k-anonymity, DP provides a mathematical guarantee: the addition or removal of any single individual does not significantly change the output of an analysis. This lesson covers the formal definition, the Laplace and Gaussian mechanisms, composition theorems, and practical implementation in analytics pipelines.',
          learningObjectives: [
            'State the formal definition of ε-differential privacy',
            'Apply the Laplace and Gaussian mechanisms',
            'Compute privacy loss under sequential and parallel composition',
            'Implement differentially private analytics in practice',
            'Compare local DP and central DP architectures',
          ],
          keyTakeaways: [
            'Differential privacy provides a mathematical guarantee against re-identification, not just a heuristic.',
            'Smaller ε = stronger privacy but more noise; ε=1.0 is a typical production value.',
            'Composition theorems quantify the privacy loss when running multiple DP queries — ε values add up.',
            'Local DP (noise added at the data source) is stronger but noisier; Central DP (noise added at the aggregator) is more accurate but trusts the aggregator.',
            'Apple, Google, and the US Census Bureau use differential privacy in production.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Formal Definition of ε-Differential Privacy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A randomised algorithm M satisfies ε-differential privacy if, for any two datasets D and D\' differing in at most one record, and for any output S: Pr[M(D) ∈ S] ≤ e^ε × Pr[M(D\') ∈ S]. In plain English: the probability of any output is essentially the same whether or not any individual\'s data is in the dataset. ε (epsilon) is the "privacy budget" — smaller ε = stronger privacy. ε=0 means perfect privacy (useless output); ε=∞ means no privacy (exact output).',
                },
                {
                  type: 'heading',
                  content: 'Interpreting ε',
                },
                {
                  type: 'list',
                  content: 'Typical ε values and their interpretation',
                  items: [
                    'ε=0.1: very strong privacy, high noise (typical for high-stakes health data).',
                    'ε=1.0: strong privacy, moderate noise (typical for production analytics).',
                    'ε=5: moderate privacy, low noise (used by Apple for some metrics).',
                    'ε=10: weak privacy, very low noise (use sparingly).',
                    'Apple uses ε=1–8 for various metrics; US Census 2020 used ε=19.61 for the redistricting data.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'There is no "right" ε — it depends on the sensitivity of the data, the volume of queries, and the acceptable utility loss. Document the ε choice and rationale.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Laplace Mechanism',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The Laplace mechanism is the most common DP mechanism for numerical data. For a function f with sensitivity Δf (the maximum change in f\'s output when one record is added or removed), the Laplace mechanism adds noise drawn from a Laplace distribution with scale b = Δf/ε. The output is f(D) + Lap(b). For example, a count query (how many users have HIV) has sensitivity Δf=1 (adding one user changes the count by at most 1). With ε=1, the noise scale is 1 — adding noise of ±1–2 to the count.',
                },
                {
                  type: 'heading',
                  content: 'Worked Example — HIV Patient Count',
                },
                {
                  type: 'paragraph',
                  content:
                    'A hospital wants to publish the count of HIV+ patients in a region without revealing any individual\'s status. True count = 247. Sensitivity = 1 (one record change). Choose ε=1.0. Noise = Lap(0, 1) — a random draw from the Laplace distribution with mean 0 and scale 1. Say the draw is +0.7. Published count = 247 + 0.7 = 247.7 → rounded to 248. An attacker who knows the patient list cannot determine if any specific individual is HIV+ — the published count is consistent with both their inclusion and exclusion.',
                },
                {
                  type: 'example',
                  content:
                    'In Python: import numpy as np; epsilon = 1.0; sensitivity = 1.0; true_count = 247; noise = np.random.laplace(0, sensitivity/epsilon); published_count = true_count + noise; # 247 + ~0.7 → 247.7. Repeat the query and the noise changes — different published counts each time. This is by design: an attacker cannot average multiple queries to recover the true count because the privacy budget accumulates (composition theorem).',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Composition Theorems',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Composition theorems quantify the privacy loss when multiple DP queries are run on the same data. Sequential composition: if k queries each with ε_i are run on the same data, the total privacy loss is ε_total = Σ ε_i. So 10 queries with ε=0.1 each gives ε_total=1.0. Parallel composition: if k queries are run on disjoint subsets of the data, the privacy loss is the maximum of any individual query — ε_total = max(ε_i).',
                },
                {
                  type: 'heading',
                  content: 'Privacy Budget Management',
                },
                {
                  type: 'paragraph',
                  content:
                    'In production, the privacy budget is finite and must be managed. A typical approach: allocate a yearly budget (e.g., ε=10), allocate per-query budgets to analysts (e.g., ε=0.5 each), and track cumulative use. Once the budget is exhausted, no further queries are allowed until the next year. This forces analysts to think carefully about queries and prevents budget exhaustion through carelessness.',
                },
                {
                  type: 'callout',
                  content:
                    'The privacy budget is the single most important operational concept in DP. Without budget management, DP degrades to no privacy at all — every additional query leaks more.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Local DP vs Central DP',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Differential privacy comes in two architectural flavours. Central DP (also called "trusted curator") collects raw data centrally and adds noise at the aggregator. Local DP (no trusted curator) adds noise at the data source, on each user\'s device, before transmission. Local DP is stronger (no central database of raw data) but requires more noise for the same ε — typically 10–100x more.',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'Central DP', 'Local DP'],
                  rows: [
                    ['Noise location', 'At the aggregator', 'At the data source'],
                    ['Trust model', 'Trusts the aggregator', 'No trust required'],
                    ['Noise level', 'Lower (better accuracy)', 'Higher (10–100x more)'],
                    ['Implementation complexity', 'Lower', 'Higher'],
                    ['Production examples', 'US Census, hospital analytics', 'Apple telemetry, Google RAPPOR'],
                  ],
                },
                {
                  type: 'heading',
                  content: 'Production Implementations',
                },
                {
                  type: 'list',
                  content: 'Notable production differential privacy deployments',
                  items: [
                    'Apple iOS: usage metrics (emoji, keyboard, Safari) with local DP, ε=1–8.',
                    'Google Chrome: crash reports and feature usage with local DP (RAPPOR).',
                    'Google Maps: traffic data aggregation with central DP.',
                    'US Census Bureau: 2020 Census redistricting data with central DP, ε=19.61.',
                    'Microsoft: telemetry with central DP.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru fintech wants to publish aggregate statistics on customer spending habits without revealing individual transactions. Central DP architecture: collect raw transactions in a secure data warehouse; analyst queries via a DP-enabled query engine (e.g., Tumult Analytics) that adds Laplace noise per query; budget ε=10 per year per analyst; published statistics have ε=1.0 each. Researchers can run up to 10 such queries per year against the full budget.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Differential Privacy (DP)', definition: 'A mathematical privacy model guaranteeing that the addition or removal of any single record does not significantly change the output of an analysis.' },
            { term: 'ε (Epsilon)', definition: 'The privacy budget parameter in differential privacy — smaller ε means stronger privacy but more noise.' },
            { term: 'Laplace Mechanism', definition: 'A common DP mechanism that adds Laplace-distributed noise to a function\'s output, scaled by the function\'s sensitivity divided by ε.' },
            { term: 'Sensitivity', definition: 'The maximum change in a function\'s output when one record is added or removed — used to scale DP noise.' },
            { term: 'Composition Theorem', definition: 'A theorem quantifying how privacy loss accumulates across multiple DP queries — sequentially (sum) or in parallel (max).' },
            { term: 'Local DP', definition: 'A DP architecture where noise is added at the data source, requiring no trusted aggregator — stronger but noisier.' },
          ],
          references: [
            { title: 'Dwork, C. — Differential Privacy (ICALP 2006)', source: 'International Colloquium on Automata, Languages and Programming', year: '2006' },
            { title: 'NIST SP 800-188 — De-Identification of Personal Information', source: 'National Institute of Standards and Technology', year: '2023' },
            { title: 'Google Differential Privacy Library', source: 'Google', year: '2024' },
            { title: 'US Census Bureau 2020 Disclosure Avoidance System', source: 'United States Census Bureau', year: '2020' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: PRIVACY BY DESIGN IN CODE
    // ============================================================
    {
      id: 2,
      title: 'Privacy by Design in Code',
      lessons: [
        // -------- LESSON 7 --------
        {
          id: 7,
          title: 'Privacy by Design: The 7 Foundational Principles (Ann Cavoukian)',
          duration: '20 min',
          type: 'reading',
          description:
            'Ann Cavoukian\'s 7 foundational principles of Privacy by Design — the framework adopted by GDPR Article 25 and reflected in DPDPA Section 8(2).',
          content:
            'Privacy by Design (PbD) is a framework developed by Ann Cavoukian, then-Information and Privacy Commissioner of Ontario, in the 1990s. It was adopted by the International Conference of Data Protection and Privacy Commissioners in 2010 and is reflected in GDPR Article 25 ("Data protection by design and by default"). DPDPA Section 8(2) embodies PbD principles through the general obligations of data fiduciaries. This lesson covers the 7 foundational principles and their practical implementation in code.',
          learningObjectives: [
            'Recite the 7 foundational principles of Privacy by Design',
            'Map PbD principles to DPDPA Section 8 obligations',
            'Implement PbD in code architecture',
            'Audit existing systems against PbD principles',
          ],
          keyTakeaways: [
            'Privacy by Design is proactive not reactive — privacy is built in from the start, not bolted on.',
            'The 7 principles cover: proactive, privacy as default, embedded, full functionality, end-to-end security, visibility, respect for user privacy.',
            'DPDPA Section 8(2) embodies PbD through the duty to comply with all DPDPA obligations in a manner that secures personal data.',
            'GDPR Article 25 explicitly requires "data protection by design and by default" — a stronger formulation than DPDPA but functionally equivalent.',
            'PbD audit should be part of every new project\'s design phase, not an afterthought.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The 7 Foundational Principles',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Ann Cavoukian articulated 7 foundational principles of Privacy by Design. They form the international standard for privacy engineering and have been adopted by GDPR and reflected in DPDPA.',
                },
                {
                  type: 'list',
                  content: 'The 7 Foundational Principles of Privacy by Design',
                  items: [
                    '1. Proactive not Reactive: Anticipate and prevent privacy-invasive events before they happen, not after.',
                    '2. Privacy as the Default: Personal data is automatically protected — no action by the user is required.',
                    '3. Privacy Embedded into Design: Privacy is an essential component of the system, not an add-on.',
                    '4. Full Functionality (Positive-Sum): Privacy and other interests (security, usability, business) are not zero-sum — both can be achieved.',
                    '5. End-to-End Security: Privacy is protected throughout the entire data lifecycle, from collection to deletion.',
                    '6. Visibility and Transparency: Privacy practices are visible, transparent, and verifiable by independent audit.',
                    '7. Respect for User Privacy: User-centric design — keep the user\'s interests front and centre.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The most often-violated principle is #2 — "Privacy as the Default". Many systems default to data collection unless the user opts out, when PbD requires defaulting to no collection unless the user opts in.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Mapping PbD to DPDPA Section 8',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA does not explicitly adopt the PbD terminology, but Section 8 embodies its principles. Mapping each PbD principle to DPDPA helps engineers see how compliance is achieved through good engineering, not just legal review.',
                },
                {
                  type: 'table',
                  headers: ['PbD Principle', 'DPDPA Section', 'Implementation'],
                  rows: [
                    ['Proactive not Reactive', 'Section 8(1) — compliance is ongoing', 'Threat modelling, security review at design phase'],
                    ['Privacy as Default', 'Section 7 — consent required for processing', 'Default to no collection; opt-in not opt-out'],
                    ['Embedded into Design', 'Section 8(5) — reasonable security safeguards', 'Architecture reviews; privacy threat modelling'],
                    ['Full Functionality', 'Section 7 — purpose limitation', 'Achieve business purpose with minimal data'],
                    ['End-to-End Security', 'Section 8(7) — data retention and deletion', 'Lifecycle management; secure deletion'],
                    ['Visibility and Transparency', 'Section 8(4) — privacy policy', 'Public privacy policy; audit logs'],
                    ['Respect for User Privacy', 'Section 11 — rights of Data Principals', 'DSAR APIs; consent withdrawal; grievance redressal'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Implementing PbD in Code Architecture',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'PbD in code architecture translates principles into concrete engineering practices. The following practices implement each principle in a typical web application.',
                },
                {
                  type: 'heading',
                  content: 'Practical Engineering Practices',
                },
                {
                  type: 'list',
                  content: 'Practical PbD engineering practices',
                  items: [
                    'Data minimisation at the schema level — every column must have a documented purpose.',
                    'Default privacy settings — opt-in checkboxes for marketing; default to no third-party sharing.',
                    'Encrypted by default — all PII columns encrypted at rest; all traffic TLS 1.3.',
                    'Purpose-tagged data — each data element tagged with the purpose it was collected for.',
                    'Retention automation — automated deletion cron jobs for expired data.',
                    'Audit logs — every access to personal data logged with user, time, purpose.',
                    'Privacy threat modelling — STRIDE/LINDDUN methodology at design phase.',
                    'Privacy impact assessment — before deployment of high-risk features.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru e-commerce site implements PbD in its checkout flow: (1) default shipping option does not store card data — uses UPI or tokenised cards; (2) marketing emails require opt-in checkbox unchecked by default; (3) guest checkout available without account creation; (4) address book entries are encrypted at column level; (5) abandoned cart data is auto-deleted after 30 days; (6) every customer service access to a customer record logs the agent ID, timestamp, and reason code.',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Auditing Existing Systems Against PbD',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A PbD audit reviews an existing system against the 7 principles, identifies gaps, and recommends remediations. The audit should be conducted annually and before any major feature release.',
                },
                {
                  type: 'heading',
                  content: 'Audit Checklist',
                },
                {
                  type: 'list',
                  content: 'PbD audit checklist (sample questions)',
                  items: [
                    'Proactive: Is privacy threat modelling conducted at design phase? Are privacy requirements in PRDs?',
                    'Default: Are there any default-opt-in features? Are there default-on cookies beyond strictly necessary?',
                    'Embedded: Are encryption, masking, and access controls designed in from day one, not added later?',
                    'Full Functionality: Does the system achieve business purpose with minimum personal data?',
                    'End-to-End: Is there a documented retention schedule with automated deletion? Is deletion secure?',
                    'Visibility: Is the privacy policy public? Are audit logs accessible to DPO?',
                    'User Respect: Can users easily access, correct, delete their data? Can they withdraw consent?',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'A PbD audit typically takes 1–2 weeks for a medium-sized application. Document findings in a PbD Audit Report with severity ratings (high/medium/low) and remediation timelines.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Privacy by Design (PbD)', definition: 'A framework developed by Ann Cavoukian that embeds privacy into the design and operation of systems, rather than bolting it on as an afterthought.' },
            { term: 'Privacy as Default', definition: 'A PbD principle requiring personal data to be automatically protected — opt-in, not opt-out.' },
            { term: 'Privacy Threat Modelling', definition: 'A structured analysis (e.g., STRIDE, LINDDUN) identifying privacy threats at the design phase of a system.' },
            { term: 'Privacy Impact Assessment (PIA)', definition: 'A systematic assessment of privacy risks in a new system or feature, recommended before deployment of high-risk features.' },
          ],
          references: [
            { title: 'Cavoukian, A. — Privacy by Design: The 7 Foundational Principles', source: 'Information and Privacy Commissioner of Ontario', year: '2010' },
            { title: 'GDPR Article 25 — Data Protection by Design and by Default', source: 'European Union', year: '2016' },
            { title: 'DPDPA 2023 Section 8 — General Obligations of Data Fiduciary', source: 'Government of India', year: '2023' },
            { title: 'LINDDUN Privacy Threat Modeling Methodology', source: 'LINDDUN Community', year: '2024' },
          ],
        },

        // -------- LESSON 8 --------
        {
          id: 8,
          title: 'Implementing Consent in Code: API Design',
          duration: '22 min',
          type: 'exercise',
          description:
            'Hands-on exercise in designing a consent API that satisfies DPDPA Section 7 — including consent capture, storage, withdrawal, versioning, and audit trails.',
          content:
            'Consent under DPDPA Section 7 is more than a checkbox — it is a structured data object with version, timestamp, purpose, and audit trail. This lesson walks through the design of a Consent API that captures, stores, and enforces consent, supports withdrawal at any time, and maintains an audit trail for DPDPA compliance.',
          learningObjectives: [
            'Design a consent data model with versioning and audit trail',
            'Build a consent API for capture, retrieval, withdrawal',
            'Implement consent enforcement in business logic',
            'Handle consent versioning and re-consent flows',
          ],
          keyTakeaways: [
            'Consent must be captured as a structured object — purpose, scope, timestamp, version, IP, user agent.',
            'Consent is freely revocable — withdrawal must be as easy as giving consent.',
            'Consent versioning is critical — if the privacy policy changes, re-consent is required.',
            'Every consent event (grant, withdraw, re-consent) must be logged for audit.',
            'Business logic must check consent before processing — never assume prior consent.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Consent Data Model',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A robust consent data model has the following fields: consent_id (UUID), data_principal_id (FK to user), purpose (string, reference to a defined purpose list), scope (which data elements: ["email", "phone", "location"]), status (granted / withdrawn / expired), granted_at (timestamp), withdrawn_at (timestamp), expires_at (timestamp for time-bound consent), policy_version (string, e.g., "v2.3"), collection_method (web_form / mobile_app / api / verbal), collection_evidence (screenshot URL, signed JWT, recording URL), ip_address, user_agent.',
                },
                {
                  type: 'heading',
                  content: 'Schema Example (PostgreSQL)',
                },
                {
                  type: 'paragraph',
                  content:
                    'CREATE TABLE consents (consent_id UUID PRIMARY KEY, data_principal_id UUID NOT NULL REFERENCES users(id), purpose VARCHAR(100) NOT NULL, scope JSONB NOT NULL, status VARCHAR(20) NOT NULL CHECK (status IN (\'granted\', \'withdrawn\', \'expired\')), granted_at TIMESTAMPTZ NOT NULL, withdrawn_at TIMESTAMPTZ, expires_at TIMESTAMPTZ, policy_version VARCHAR(20) NOT NULL, collection_method VARCHAR(20) NOT NULL, collection_evidence JSONB, ip_address INET, user_agent TEXT, created_at TIMESTAMPTZ DEFAULT NOW(), INDEX idx_dp_purpose (data_principal_id, purpose)); — and a separate consent_audit table for every consent event.',
                },
                {
                  type: 'callout',
                  content:
                    'Never update a consent record in place. Insert a new record with the new status, leaving the old record intact. This preserves a full audit trail.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Consent API Endpoints',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A RESTful Consent API has five core endpoints: POST /consents (grant consent), GET /consents?data_principal_id={id} (list consents), GET /consents/{consent_id} (retrieve specific consent), PATCH /consents/{consent_id} (withdraw consent — sets status to withdrawn), GET /consents/check?data_principal_id={id}&purpose={purpose} (check if consent is currently granted). All endpoints require authentication and authorisation.',
                },
                {
                  type: 'heading',
                  content: 'POST /consents — Grant Consent',
                },
                {
                  type: 'paragraph',
                  content:
                    'Request: { "purpose": "marketing_emails", "scope": ["email", "first_name"], "expires_at": "2025-12-31T23:59:59Z", "policy_version": "v2.3", "collection_method": "web_form", "collection_evidence": { "screenshot_url": "s3://...", "signed_jwt": "..." } }. Response: { "consent_id": "uuid", "status": "granted", "granted_at": "2024-..." }. Server validates: purpose is in the defined list, scope elements are in the permitted scope for that purpose, policy_version is current, user is authenticated.',
                },
                {
                  type: 'example',
                  content:
                    'A user registers on an Indian e-commerce site. The form has separate opt-in checkboxes for: (1) Order processing — required, no checkbox (implied under Section 7(2)(c) contractual necessity); (2) Marketing emails — optional, unchecked by default; (3) Personalised recommendations — optional, unchecked by default; (4) Sharing with partners — optional, unchecked by default. Each checkbox submission triggers a POST /consents call with the relevant purpose. The user can later view and withdraw consents from their account settings.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Consent Enforcement in Business Logic',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Consent is not just stored — it must be enforced. Every business logic path that processes personal data must check consent before proceeding. The pattern: a consent_check() function called at the start of every processing operation, returning a boolean. If false, processing is skipped or aborted.',
                },
                {
                  type: 'heading',
                  content: 'Enforcement Pattern (Python example)',
                },
                {
                  type: 'paragraph',
                  content:
                    'def send_marketing_email(user_id, email_content): if not consent_service.check(user_id, "marketing_emails"): raise ConsentNotGrantedError("User has not granted consent for marketing emails"); # Proceed with email send... This pattern must be applied everywhere personal data is processed — every email send, every analytics event, every third-party share, every personalisation decision. The enforcement must be in the application layer, not just the API layer — direct database queries from internal tools must also respect consent.',
                },
                {
                  type: 'callout',
                  content:
                    'A common mistake: caching consent in a long-lived cache (e.g., Redis with 24-hour TTL). If a user withdraws consent, the cache may still serve "granted" for hours. Use short TTLs (5 minutes) or invalidate cache on withdrawal.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Consent Versioning and Re-consent',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'When the privacy policy changes, existing consents may no longer cover the new practices. The pattern: bump the policy_version (e.g., v2.3 → v2.4); on the next interaction with each affected user, check if their consent\'s policy_version is current; if not, present the new policy and require re-consent before continuing. Track re-consent in the audit log.',
                },
                {
                  type: 'heading',
                  content: 'Re-consent Flow',
                },
                {
                  type: 'list',
                  content: 'Re-consent flow on policy change',
                  items: [
                    'Step 1: Draft new policy; bump version; identify purposes with material changes.',
                    'Step 2: Notify affected users by email — "We\'ve updated our privacy policy. Please review and re-consent by [date]."',
                    'Step 3: On next login or interaction, redirect to consent screen showing only the changed purposes.',
                    'Step 4: Capture re-consent (or denial) with new policy_version.',
                    'Step 5: For users who do not re-consent by the deadline, suspend processing under the new purposes (do not delete data — that requires a separate deletion request).',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A fintech changes its privacy policy to add a new purpose "credit_score_check" (was previously not collected). Affected consents: all users with marketing_emails consent, since the new policy touches them. The DPO notifies 50 lakh users by email. Of these, 35 lakh re-consent within 30 days; 15 lakh do not. For the non-re-consenting users, marketing emails stop; their data is preserved but not used for the new purpose. The original marketing_emails consent for these users is set to "expired" status.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Consent Record', definition: 'A structured database record capturing a Data Principal\'s consent for a specific purpose, including scope, timestamp, version, and audit trail.' },
            { term: 'Consent Withdrawal', definition: 'The right of a Data Principal to revoke consent at any time under DPDPA Section 7(4) — must be as easy as granting consent.' },
            { term: 'Policy Versioning', definition: 'A version identifier (e.g., v2.3) tracked on each consent record, enabling re-consent flows when the privacy policy changes.' },
            { term: 'Consent Enforcement', definition: 'The practice of checking consent status in business logic before processing personal data — not just storing consent, but acting on it.' },
          ],
          references: [
            { title: 'DPDPA 2023 Section 7 — Consent', source: 'Government of India', year: '2023' },
            { title: 'IAPP Consent Management Vendor Comparison', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'OneTrust Consent Vault Documentation', source: 'OneTrust', year: '2024' },
          ],
        },

        // -------- LESSON 9 --------
        {
          id: 9,
          title: 'Building DSAR (Data Subject Access Request) APIs',
          duration: '22 min',
          type: 'exercise',
          description:
            'Hands-on exercise in building the DSAR APIs that satisfy DPDPA Section 11 — including the right to access, correct, complete, update, erase, nominate, and grievance redressal.',
          content:
            'DPDPA Section 11 grants Data Principals the right to access, correct, complete, update, erase, and nominate their personal data, plus the right to grievance redressal. A production DSAR API must support all of these rights through structured endpoints, with identity verification, audit trails, and SLA tracking. This lesson covers the design and implementation of DSAR APIs.',
          learningObjectives: [
            'Design a DSAR API covering all Section 11 rights',
            'Implement identity verification for DSAR requests',
            'Build a data retrieval pipeline that aggregates personal data across systems',
            'Implement SLA tracking and escalation',
          ],
          keyTakeaways: [
            'DPDPA Section 11 grants 6 rights: access, correct, complete, update, erase, nominate — plus grievance redressal.',
            'Identity verification is mandatory before fulfilling a DSAR — to prevent unauthorised access to personal data.',
            'Data retrieval often requires aggregating from multiple systems (database, SaaS, backups) — design for federated retrieval.',
            'SLA tracking is required — DPDPA does not specify a timeline, but grievance redressal must be responded to within "the period specified" (likely 30 days per the Rules).',
            'DSAR fulfillment must be logged for audit, with evidence retained for the data retention period.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Section 11 Rights',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DPDPA Section 11 grants the following rights to Data Principals: (1) Right to access information about personal data processed; (2) Right to correct and complete personal data; (3) Right to update personal data; (4) Right to erase personal data; (5) Right to nominate (in case of death or incapacity); (6) Right to grievance redressal. Each right requires a corresponding API endpoint and operational workflow.',
                },
                {
                  type: 'table',
                  headers: ['Right', 'DPDPA Section', 'API Endpoint', 'Method'],
                  rows: [
                    ['Access', 'Section 11(2)', '/dsar/access', 'POST'],
                    ['Correct / Complete', 'Section 11(3)', '/dsar/correct', 'POST'],
                    ['Update', 'Section 11(3)', '/dsar/update', 'POST'],
                    ['Erase', 'Section 11(4)', '/dsar/erase', 'POST'],
                    ['Nominate', 'Section 11(5)', '/dsar/nominate', 'POST'],
                    ['Grievance', 'Section 11(6)', '/dsar/grievance', 'POST'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'DPDPA does not specify a fixed timeline (like GDPR\'s 30 days), but the Rules are expected to specify a "reasonable period" — likely 30 days for most requests and shorter for grievance redressal. Design your SLA conservatively.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'DSAR Intake and Identity Verification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'DSAR requests must be initiated through a verified channel. The standard pattern: (1) User logs into their account and submits the request through the DSAR portal; (2) Identity is automatically verified (the user is already authenticated); (3) For unauthenticated requests (e.g., email to DPO), a manual verification flow is triggered — typically a one-time passcode sent to the registered email/phone; (4) Once verified, the request is logged with a unique DSAR ID and SLA clock starts.',
                },
                {
                  type: 'heading',
                  content: 'DSAR Intake API',
                },
                {
                  type: 'paragraph',
                  content:
                    'POST /dsar { "type": "access" | "correct" | "update" | "erase" | "nominate" | "grievance", "details": { ... }, "identity_verification": { "method": "logged_in_session" | "otp_email" | "otp_phone", "otp_value": "..." } }. Response: { "dsar_id": "uuid", "status": "received", "expected_completion_by": "2024-...T...Z", "tracking_url": "/dsar/track/{dsar_id}" }.',
                },
                {
                  type: 'example',
                  content:
                    'A user wants to access all personal data held by an Indian fintech. They log into the app, navigate to "Privacy → Access My Data", and submit an access request. The app verifies the logged-in session, creates a DSAR record, and queues a data retrieval job. The user receives an email confirming receipt with the DSAR ID and expected completion date (30 days out). The job runs over the next 2–4 hours, aggregating data from multiple systems; the result is reviewed by a privacy analyst; the final data export is sent to the user via a secure download link.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Federated Data Retrieval',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A typical user\'s personal data is spread across multiple systems: primary database (PostgreSQL), CRM (Salesforce), marketing (HubSpot), support (Zendesk), analytics (Snowflake), backups (S3 Glacier), logs (CloudWatch). DSAR access requires aggregating from all of these. The pattern: a DSAR orchestrator that dispatches parallel retrieval jobs to each system, collects the results, normalises into a standard format, and packages for delivery.',
                },
                {
                  type: 'heading',
                  content: 'Federated Retrieval Architecture',
                },
                {
                  type: 'list',
                  content: 'Federated DSAR retrieval architecture components',
                  items: [
                    'DSAR Orchestrator: receives DSAR, dispatches sub-queries to each system.',
                    'System Connectors: per-system modules that query the system for the user\'s data.',
                    'Data Normaliser: converts each system\'s response to a standard JSON schema.',
                    'Aggregator: combines normalised data into a single export package.',
                    'Reviewer: human analyst reviews the package for completeness and redactions.',
                    'Delivery: secure download link (signed URL with expiry) or encrypted email attachment.',
                    'Audit: full log of every retrieval step retained for audit.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Logs (CloudWatch, Splunk) often contain personal data — IP addresses, user IDs in URLs. Don\'t forget to search logs as part of DSAR retrieval. The challenge: logs are typically not indexed by user ID, so retrieval requires log search — slow and resource-intensive.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'SLA Tracking and Escalation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Each DSAR has an SLA — typically 30 days from receipt. The DSAR system must track elapsed time, alert on approaching deadlines (e.g., at 50%, 75%, 90% of SLA), and escalate to the DPO if the SLA is at risk. Missed SLAs are reported to the Data Protection Board and may attract penalties under Section 33 (up to ₹50 crore for failure to respond to Data Principal requests).',
                },
                {
                  type: 'heading',
                  content: 'SLA Tracking Workflow',
                },
                {
                  type: 'list',
                  content: 'DSAR SLA tracking workflow',
                  items: [
                    'Day 0: DSAR received; SLA clock starts.',
                    'Day 7 (25%): Auto-reminder to assigned analyst.',
                    'Day 15 (50%): Status update required from analyst.',
                    'Day 22 (75%): Escalation to team lead.',
                    'Day 27 (90%): Escalation to DPO.',
                    'Day 30 (100%): Deadline; if not complete, escalate to CPO and notify Data Protection Board.',
                    'Day 30+: If completed late, document delay and remedial action in DSAR record.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai fintech implements DSAR SLA tracking using a Jira workflow. Each DSAR creates a Jira ticket with a due date 30 days out. SLA breaches are reported weekly to the DPO. In Q1 2024, the company processed 145 DSARs, of which 142 were completed within SLA and 3 breached (1 due to a Salesforce outage, 2 due to manual review backlog). The DPO presents these metrics quarterly to the Board.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'DSAR', definition: 'Data Subject Access Request — a request by a Data Principal to exercise rights under DPDPA Section 11.' },
            { term: 'Right to Erasure', definition: 'The right under DPDPA Section 11(4) to request erasure of personal data — also called "right to be forgotten".' },
            { term: 'Right to Nominate', definition: 'The right under DPDPA Section 11(5) to nominate another person to exercise rights in case of death or incapacity — unique to DPDPA.' },
            { term: 'Federated Retrieval', definition: 'A DSAR pattern that aggregates personal data from multiple systems through parallel sub-queries, normalises the results, and packages for delivery.' },
          ],
          references: [
            { title: 'DPDPA 2023 Section 11 — Rights of Data Principals', source: 'Government of India', year: '2023' },
            { title: 'IAPP DSAR Operationalisation Guide', source: 'International Association of Privacy Professionals', year: '2024' },
            { title: 'OneTrust DSAR Automation', source: 'OneTrust', year: '2024' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: EMERGING PRIVACY TECHNOLOGIES
    // ============================================================
    {
      id: 3,
      title: 'Emerging Privacy Technologies',
      lessons: [
        // -------- LESSON 10 --------
        {
          id: 10,
          title: 'Homomorphic Encryption and Secure Multi-Party Computation',
          duration: '22 min',
          type: 'reading',
          description:
            'A technical introduction to homomorphic encryption (FHE) and secure multi-party computation (SMPC) — the cryptographic foundations for computing on encrypted data without decryption.',
          content:
            'Homomorphic Encryption (HE) and Secure Multi-Party Computation (SMPC) are cryptographic techniques that allow computation on data without decrypting it. HE enables a third party to compute on encrypted data, returning an encrypted result that only the key holder can decrypt. SMPC enables multiple parties to jointly compute a function over their inputs without revealing those inputs to each other. This lesson covers both technologies, their trade-offs, and production use cases.',
          learningObjectives: [
            'Explain the difference between partial, somewhat, and fully homomorphic encryption',
            'Describe the SMPC threat model and protocols (Yao\'s garbled circuits, GMW, BGW)',
            'Evaluate HE and SMPC for production use cases',
            'Identify the performance overheads and limitations',
          ],
          keyTakeaways: [
            'Fully Homomorphic Encryption (FHE) allows arbitrary computation on encrypted data — but is currently 10,000–100,000x slower than plaintext computation.',
            'Partial HE (e.g., Paillier) supports addition only — useful for voting, aggregation.',
            'Somewhat HE (e.g., BGV, CKKS) supports a limited number of operations — practical for specific use cases.',
            'SMPC enables joint computation without revealing inputs — used by Google for ad conversion measurement, by Boston University for wage equity studies.',
            'Production adoption is currently niche but growing — watch for FHE acceleration hardware.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Homomorphic Encryption Classes',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Homomorphic Encryption has three classes. Partially Homomorphic Encryption (PHE) supports a single operation (e.g., addition) — examples include Paillier and RSA. Somewhat Homomorphic Encryption (SHE) supports both addition and multiplication, but only a limited number of operations before noise overwhelms the ciphertext. Fully Homomorphic Encryption (FHE) supports arbitrary computation — first achieved by Craig Gentry in 2009 using bootstrapping to refresh ciphertext noise.',
                },
                {
                  type: 'table',
                  headers: ['Class', 'Operations', 'Performance', 'Examples'],
                  rows: [
                    ['Partial (PHE)', 'Addition OR multiplication', 'Fast (close to plaintext)', 'Paillier (add), RSA (mul)'],
                    ['Somewhat (SHE)', 'Limited add+mul', 'Moderate (10–100x slower)', 'BGV, CKKS'],
                    ['Fully (FHE)', 'Arbitrary', 'Slow (10,000–100,000x slower)', 'TFHE, FHEW, CKKS'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The performance gap between HE and plaintext computation is the main obstacle to FHE adoption. DARPA\'s DPRIVE programme aims to close this gap by 2027 with dedicated FHE hardware.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'SMPC Protocols and Threat Models',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Secure Multi-Party Computation (SMPC) enables multiple parties to jointly compute a function over their inputs without revealing those inputs. The classic example: two CEOs want to compare salaries without revealing them. SMPC protocol: each CEO\'s input is split into random shares; the computation proceeds on the shares; the final result is reconstructed from the output shares. No CEO sees the other\'s input.',
                },
                {
                  type: 'heading',
                  content: 'SMPC Protocols',
                },
                {
                  type: 'list',
                  content: 'Common SMPC protocols',
                  items: [
                    'Yao\'s Garbled Circuits: 2-party protocol using boolean circuits — efficient for 2 parties, complex for more.',
                    'GMW (Goldreich-Micali-Wigderson): multi-party boolean circuit protocol.',
                    'BGW (Ben-Or-Goldwasser-Wigderson): multi-party arithmetic circuit protocol, secure against semi-honest adversaries.',
                    'SPDZ: state-of-the-art malicious-secure multi-party protocol.',
                    'Shamir Secret Sharing: foundational technique for splitting secrets across parties.',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Threat Models',
                },
                {
                  type: 'paragraph',
                  content:
                    'SMPC protocols differ in their threat models. Semi-honest (a.k.a. "honest-but-curious") — parties follow the protocol but try to learn inputs from messages seen. Malicious — parties may deviate from the protocol. Production deployments typically require malicious security, which is more expensive. The number of corrupt parties tolerated (t) out of n parties (t < n/2 for semi-honest, t < n/3 for malicious in BGW) determines the security threshold.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Production Use Cases',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Despite the performance overhead, HE and SMPC have found production use in specific high-value scenarios where the privacy benefit justifies the cost.',
                },
                {
                  type: 'heading',
                  content: 'Production Examples',
                },
                {
                  type: 'list',
                  content: 'Notable production HE/SMPC deployments',
                  items: [
                    'Boston Women\'s Workforce Council: wage equity study using SMPC across 100+ employers, comparing salaries by gender and race without revealing individual salaries.',
                    'Google Privacy-Preserving Ad Clicks: SMPC for measuring ad conversion rates between Google and advertisers without sharing individual user data.',
                    'Facebook/Meta Private Join: SMPC for ad measurement.',
                    'Microsoft ElectionGuard: end-to-end verifiable voting using HE.',
                    'Apple Face ID: training and inference uses HE-protected biometric data.',
                    'Crypto-asset exchanges: SMPC for splitting private keys across multiple parties (no single party can sign transactions alone).',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For Indian applications: SMPC can enable cross-bank fraud detection (multiple banks share patterns without revealing customer data), cross-hospital medical research, and privacy-preserving Aadhaar-based services.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Practical Implementation and Tools',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Several open-source libraries provide production-ready HE and SMPC implementations. For HE: Microsoft SEAL (CKKS, BFV), PALISADE (multiple schemes), TFHE-rs (fast FHE for boolean circuits), HEAAN (CKKS). For SMPC: MP-SPDZ (multi-party, multiple protocols), Sharemind (commercial), SCALE-MAMBA, Condor Markets.',
                },
                {
                  type: 'heading',
                  content: 'Choosing Between HE and SMPC',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'Homomorphic Encryption', 'SMPC'],
                  rows: [
                    ['Number of parties', '2 (encryptor + evaluator)', 'Multiple (typically 2–10)'],
                    ['Trust model', 'Encryptor trusts no one with raw data', 'Parties trust each other not to collude'],
                    ['Performance', 'Slow (10,000x+ for FHE)', 'Moderate (10–100x slower)'],
                    ['Communication', 'Single transfer of ciphertext', 'Multiple rounds of communication'],
                    ['Use case', 'Outsourced computation (cloud)', 'Joint computation among peers'],
                  ],
                },
                {
                  type: 'example',
                  content:
                    'A consortium of Indian banks wants to detect fraudulent transactions across banks without sharing customer data. They deploy an SMPC platform (MP-SPDZ). Each bank inputs its transaction history (encrypted shares); the SMPC computes fraud patterns (e.g., same IP across multiple banks); the result reveals only the fraud patterns, not individual transactions. Latency: 10–60 minutes per batch, acceptable for daily fraud runs.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Homomorphic Encryption (HE)', definition: 'A cryptographic technique that allows computation on encrypted data without decryption.' },
            { term: 'Fully Homomorphic Encryption (FHE)', definition: 'A class of HE supporting arbitrary computation, first achieved by Craig Gentry in 2009 using bootstrapping.' },
            { term: 'Bootstrapping', definition: 'A technique in FHE that "refreshes" ciphertext noise, enabling unlimited computation — at high performance cost.' },
            { term: 'Secure Multi-Party Computation (SMPC)', definition: 'A cryptographic technique allowing multiple parties to jointly compute a function over their inputs without revealing those inputs to each other.' },
            { term: 'Semi-honest Adversary', definition: 'An adversary that follows the protocol correctly but tries to learn information from messages seen — the weaker SMPC threat model.' },
          ],
          references: [
            { title: 'Gentry, C. — A Fully Homomorphic Encryption Scheme (PhD thesis, Stanford)', source: 'Stanford University', year: '2009' },
            { title: 'Microsoft SEAL Library', source: 'Microsoft Research', year: '2024' },
            { title: 'MP-SPDZ: A Versatile Framework for Multi-Party Computation', source: 'University of Bristol', year: '2024' },
            { title: 'Boston Women\'s Workforce Council Wage Equity Study', source: 'Boston Women\'s Workforce Council', year: '2017' },
          ],
        },

        // -------- LESSON 11 --------
        {
          id: 11,
          title: 'Federated Learning',
          duration: '20 min',
          type: 'reading',
          description:
            'A technical introduction to federated learning — the machine learning approach where training happens on local devices or edge servers, and only model updates are shared centrally, preserving raw data locality.',
          content:
            'Federated Learning (FL) is a machine learning paradigm where the model is trained across multiple decentralised devices or servers holding local data, without exchanging that data. Only model updates (gradients, weights) are shared with the central aggregator. This lesson covers FL architecture, the FedAvg algorithm, secure aggregation, and production use cases from Google (Gboard), Apple (Siri), and Indian healthcare.',
          learningObjectives: [
            'Explain the federated learning architecture',
            'Describe the FedAvg algorithm and its variants',
            'Identify security threats to FL (poisoning, reconstruction)',
            'Apply FL to privacy-preserving ML use cases',
          ],
          keyTakeaways: [
            'Federated Learning keeps raw data on the edge — only model updates are shared centrally.',
            'FedAvg is the foundational algorithm — averaging locally-computed gradients from sampled clients.',
            'Secure aggregation protocols ensure the central aggregator sees only the average, not individual updates.',
            'FL is vulnerable to model poisoning attacks and gradient inversion — combine with DP and SMPC for full protection.',
            'Google Gboard, Apple Siri, and Indian healthcare research all use FL in production.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'FL Architecture',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'In Federated Learning, a central server maintains a global model. In each round: (1) the server selects a subset of clients (devices/servers holding local data); (2) the server sends the current global model to the selected clients; (3) each client trains the model on its local data, computing local gradients; (4) each client sends its local gradients back to the server; (5) the server aggregates the gradients (typically averaging) to update the global model; (6) repeat for many rounds until convergence.',
                },
                {
                  type: 'callout',
                  content:
                    'The key privacy property: raw data never leaves the client. Only model gradients are shared — and even those can be secured through aggregation and differential privacy.',
                  calloutType: 'important',
                },
                {
                  type: 'heading',
                  content: 'Cross-Device vs Cross-Silo FL',
                },
                {
                  type: 'paragraph',
                  content:
                    'FL comes in two flavours. Cross-device FL — many clients (millions of phones, edge devices), each with limited data, unreliable connectivity, and limited compute. Cross-silo FL — few clients (e.g., 5 hospitals, 10 banks), each with substantial data, reliable connectivity, and significant compute. The two have different requirements: cross-device emphasises client selection, fault tolerance, and communication efficiency; cross-silo emphasises security, auditability, and accountability.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The FedAvg Algorithm',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'FedAvg (Federated Averaging), introduced by Google in 2016, is the foundational FL algorithm. In each round, the server selects K clients out of N. Each client runs E epochs of local training on its data with batch size B, computing the local gradient. The server averages the K gradients weighted by the client\'s data size to produce the new global model. FedAvg typically converges faster than pure SGD on a single device, especially when local data is non-IID.',
                },
                {
                  type: 'heading',
                  content: 'FedAvg Pseudocode',
                },
                {
                  type: 'paragraph',
                  content:
                    'Server: initialise w_0 (global weights). For round t = 1 to T: (1) Select K clients from N. (2) Send w_t to each selected client. (3) Each client k: runs local SGD: w_k = w_t - η ∇L(w_t; D_k) for E epochs. (4) Each client sends w_k back to server. (5) Server: w_{t+1} = Σ (n_k / n) * w_k, where n_k is client k\'s data size, n = Σ n_k. Convergence: typically 100–1000 rounds.',
                },
                {
                  type: 'callout',
                  content:
                    'FedAvg improvements: FedProx (adds proximal term to handle heterogeneity), FedAvgM (momentum), SCAFFOLD (variance reduction). Choose based on data heterogeneity and communication budget.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Security Threats and Defences',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'FL is not automatically private. Two key threats. (1) Gradient inversion: from the gradients a client sends, an attacker may reconstruct the client\'s training data — known to be possible for small batch sizes and certain architectures. (2) Model poisoning: a malicious client sends manipulated gradients to corrupt the global model — could insert backdoors or skew predictions.',
                },
                {
                  type: 'heading',
                  content: 'Defences',
                },
                {
                  type: 'list',
                  content: 'Defences against FL attacks',
                  items: [
                    'Secure aggregation (Bonawitz et al.): server sees only the sum of gradients, not individual — defeats gradient inversion.',
                    'Differential privacy: each client clips gradients and adds noise before sending — limits information leakage.',
                    'Robust aggregation (Krum, Multi-Krum, trimmed mean): filters outlying gradients — defends against poisoning.',
                    'Zero-knowledge proofs: client proves it ran the algorithm correctly without revealing gradients.',
                    'Byzantine-robust protocols: tolerate malicious clients up to a threshold.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For high-stakes applications, combine FL with secure aggregation AND differential privacy. Neither alone is sufficient — gradient inversion can break FL-only, and DP-only leaves poisoning unmitigated.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Production Use Cases',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'FL has been deployed in production by Google, Apple, and others. The common pattern: FL with secure aggregation and DP for consumer-facing applications where millions of devices have small amounts of personal data each.',
                },
                {
                  type: 'heading',
                  content: 'Production FL Deployments',
                },
                {
                  type: 'list',
                  content: 'Notable production FL deployments',
                  items: [
                    'Google Gboard: next-word prediction trained on user typing data, never leaving the phone.',
                    'Apple Siri: voice recognition and "Hey Siri" detection trained on user voice clips locally.',
                    'Apple QuickType: keyboard prediction.',
                    'Google Pixel: adaptive brightness, now playing detection.',
                    'Indian healthcare (AI4Bharat, IIT Madras): cross-hospital medical imaging models trained without sharing patient data.',
                    'Indian banking consortium: cross-bank fraud detection models.',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'An Indian healthcare consortium (3 hospitals) wants to train a diabetic retinopathy detection model on retinal scans without sharing patient images across hospitals. Cross-silo FL deployment: each hospital trains locally on its patient images; only model gradients are shared with the central aggregator; secure aggregation ensures the aggregator sees only the average gradient; DP noise added to gradients (ε=8 per round) limits information leakage. Final model performance: comparable to centralised training, but patient images never leave any hospital.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Federated Learning (FL)', definition: 'A machine learning paradigm where training happens on local devices or servers, with only model updates shared centrally — preserving raw data locality.' },
            { term: 'FedAvg', definition: 'The foundational FL algorithm introduced by Google in 2016 — averages locally-computed gradients from sampled clients.' },
            { term: 'Gradient Inversion', definition: 'An attack that reconstructs a client\'s training data from the gradients it sends — a key threat to FL privacy.' },
            { term: 'Secure Aggregation', definition: 'A cryptographic protocol ensuring the central server sees only the sum of client gradients, not individual ones — defeats gradient inversion.' },
            { term: 'Model Poisoning', definition: 'An attack where a malicious client sends manipulated gradients to corrupt the global model — defended by robust aggregation protocols.' },
          ],
          references: [
            { title: 'McMahan et al. — Communication-Efficient Learning of Deep Networks from Decentralized Data (FedAvg)', source: 'AISTATS 2017', year: '2017' },
            { title: 'Bonawitz et al. — Practical Secure Aggregation for Federated Learning', source: 'CCS 2017', year: '2017' },
            { title: 'Google Federated Learning Documentation', source: 'Google AI', year: '2024' },
            { title: 'Apple Machine Learning Research — Federated Learning', source: 'Apple', year: '2024' },
          ],
        },

        // -------- LESSON 12 --------
        {
          id: 12,
          title: 'Zero-Knowledge Proofs and Confidential Computing',
          duration: '22 min',
          type: 'reading',
          description:
            'A technical introduction to Zero-Knowledge Proofs (zk-SNARKs, zk-STARKs) and Confidential Computing (Intel SGX, AMD SEV-SNP, ARM CCA) — two technologies enabling computation on sensitive data with strong confidentiality guarantees.',
          content:
            'Zero-Knowledge Proofs (ZKPs) and Confidential Computing (CC) are two complementary privacy-preserving technologies. ZKPs enable a prover to convince a verifier that a statement is true, without revealing why. Confidential Computing protects data in use by running computation inside hardware-protected enclaves. This lesson covers both technologies, their trade-offs, and production use cases.',
          learningObjectives: [
            'Explain the three properties of a ZKP (completeness, soundness, zero-knowledge)',
            'Distinguish zk-SNARKs and zk-STARKs',
            'Describe the trusted execution environment (TEE) model',
            'Compare Intel SGX, AMD SEV-SNP, and ARM CCA',
            'Evaluate ZKP and CC for production use cases',
          ],
          keyTakeaways: [
            'ZKPs allow proving a statement is true without revealing the underlying witness — used in blockchain, identity, and authentication.',
            'zk-SNARKs require a trusted setup; zk-STARKs are transparent (no setup) but larger proofs.',
            'Confidential Computing uses hardware enclaves (Intel SGX, AMD SEV-SNP, ARM CCA) to protect data in use.',
            'Enclaves are not immune to side-channel attacks (Spectre, Meltdown, Foreshadow) — combine with other controls.',
            'ZKP + CC combination is the strongest practical privacy guarantee for high-value computation.',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Zero-Knowledge Proofs',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A Zero-Knowledge Proof (ZKP) is a cryptographic protocol where a prover convinces a verifier that a statement is true, without revealing any information beyond the truth of the statement. A ZKP has three properties: (1) Completeness — if the statement is true, an honest prover can convince an honest verifier. (2) Soundness — if the statement is false, no cheating prover can convince an honest verifier (except with negligible probability). (3) Zero-knowledge — the verifier learns nothing beyond the truth of the statement.',
                },
                {
                  type: 'heading',
                  content: 'Classic Example — Ali Baba Cave',
                },
                {
                  type: 'paragraph',
                  content:
                    'The classic ZKP illustration: a cave shaped like a ring with a magic door inside. Peggy (prover) knows the password to the magic door. Victor (verifier) wants to be convinced Peggy knows the password, but Peggy doesn\'t want to reveal it. Peggy enters the cave from one side; Victor arrives at the entrance without seeing which side. Victor shouts "come out the right side" (or left). Peggy, if she knows the password, can come out the requested side — either directly (if she was on that side) or by using the magic door. Repeating 20 times gives Victor 1/2^20 ≈ 1-in-a-million confidence Peggy knows the password, without ever revealing it.',
                },
                {
                  type: 'callout',
                  content:
                    'Modern ZKPs (zk-SNARKs) compress this interactive protocol into a single non-interactive proof — verifiable in milliseconds. This is the foundation of privacy-preserving blockchains (Zcash, Aztec) and is increasingly used in identity and authentication.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'zk-SNARKs vs zk-STARKs',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'zk-SNARK (Zero-Knowledge Succinct Non-interactive ARgument of Knowledge) and zk-STARK (Scalable Transparent ARgument of Knowledge) are the two leading ZKP systems. zk-SNARKs require a trusted setup (a ceremony where participants jointly generate parameters and destroy their secret shares); zk-STARKs are transparent (no setup). zk-SNARK proofs are tiny (~200 bytes); zk-STARK proofs are larger (~50 KB). zk-SNARKs rely on elliptic curve cryptography (post-quantum-vulnerable); zk-STARKs use hash functions (post-quantum-safe).',
                },
                {
                  type: 'table',
                  headers: ['Property', 'zk-SNARK', 'zk-STARK'],
                  rows: [
                    ['Trusted setup', 'Required', 'Not required (transparent)'],
                    ['Proof size', '~200 bytes', '~50 KB'],
                    ['Verification time', 'Milliseconds', 'Milliseconds'],
                    ['Prover time', 'Slower', 'Faster (parallel)'],
                    ['Post-quantum', 'No (elliptic curves)', 'Yes (hash-based)'],
                    ['Maturity', 'More mature (Zcash, 2018)', 'Newer (StarkWare, 2020)'],
                  ],
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Confidential Computing',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Confidential Computing (CC) protects data in use by running computation inside hardware-protected enclaves called Trusted Execution Environments (TEEs). The CPU guarantees that code and data inside the enclave are isolated from the host OS, hypervisor, and other enclaves. CC complements encryption at rest (data in storage) and in transit (data on the network) by protecting data during processing.',
                },
                {
                  type: 'heading',
                  content: 'Major TEE Technologies',
                },
                {
                  type: 'table',
                  headers: ['Technology', 'Vendor', 'Key Features', 'Maturity'],
                  rows: [
                    ['Intel SGX (Software Guard Extensions)', 'Intel', 'Per-process enclaves, attestation, EPC limits (typically 128 MB)', 'Mature (since 2015)'],
                    ['Intel TDX (Trust Domain Extensions)', 'Intel', 'VM-level enclaves (much larger than SGX)', 'Production (2023+)'],
                    ['AMD SEV-SNP (Secure Encrypted Virtualization)', 'AMD', 'VM-level encryption, integrity protection', 'Mature (since 2020)'],
                    ['ARM CCA (Confidential Compute Architecture)', 'ARM', 'Realm-based isolation, hardware root of trust', 'Production (2023+)'],
                    ['NVIDIA Confidential Computing (H100)', 'NVIDIA', 'GPU enclaves for confidential ML', 'Production (2023+)'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Intel SGX has been hit by multiple side-channel attacks (Foreshadow 2018, LVI 2020, SGAxe 2021). AMD SEV-SNP and Intel TDX are designed to be more resistant. Always use the latest generation of TEE hardware and apply security patches.',
                  calloutType: 'warning',
                },
              ],
            },
            {
              id: 'sec-4',
              title: 'Production Use Cases',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'ZKPs and CC have moved from research to production in the last 5 years. Blockchain applications (Zcash, Aztec, Polygon Nightfall) use zk-SNARKs for private transactions. Enterprise applications use CC for cross-organisation analytics, key management, and AI inference on sensitive data.',
                },
                {
                  type: 'heading',
                  content: 'Production Deployments',
                },
                {
                  type: 'list',
                  content: 'Notable production ZKP and CC deployments',
                  items: [
                    'Zcash: shielded transactions using zk-SNARKs since 2016.',
                    'Polygon Nightfall: privacy-preserving Ethereum transactions using zk-SNARKs.',
                    'Microsoft Azure Confidential Computing: VM-level enclaves (SGX, SEV-SNP) for general workloads.',
                    'Google Cloud Confidential Computing: Confidential VMs and Confidential GKE Nodes.',
                    'Meta: privacy-preserving attribution for ad measurement using SMPC + CC.',
                    'Banks (e.g., ING, JPMorgan): cross-institution fraud detection using CC.',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Indian Use Case — Aadhaar-Authenticated Anonymous Service',
                },
                {
                  type: 'paragraph',
                  content:
                    'An Indian fintech wants to provide loans to Aadhaar-verified customers without storing the Aadhaar number. Pattern: the user authenticates via Aadhaar OTP (UIDAI), generating a ZKP that proves "I am a unique Aadhaar-verified user older than 18" without revealing the Aadhaar number. The fintech verifies the ZKP, issues a one-time authentication token, and proceeds with the loan flow. The Aadhaar number never leaves UIDAI; only the ZKP is shared. This pattern is being explored by Indian regulators and fintech startups.',
                },
                {
                  type: 'example',
                  content:
                    'A consortium of Indian banks uses Azure Confidential VMs (SEV-SNP) for cross-bank credit scoring. Each bank inputs customer credit data into its own enclave; the enclaves communicate through attested secure channels; the SMPC protocol computes a credit score across all banks; only the final score is revealed. No bank sees another bank\'s customer data. Audit logs (recorded inside the enclave) are signed with the enclave\'s attestation key — non-repudiable evidence for the regulator.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Zero-Knowledge Proof (ZKP)', definition: 'A cryptographic protocol where a prover convinces a verifier that a statement is true, without revealing why.' },
            { term: 'zk-SNARK', definition: 'Zero-Knowledge Succinct Non-interactive ARgument of Knowledge — a class of ZKP with tiny proofs (200 bytes), requiring a trusted setup.' },
            { term: 'zk-STARK', definition: 'Scalable Transparent ARgument of Knowledge — a class of ZKP with no trusted setup, larger proofs (50 KB), and post-quantum security.' },
            { term: 'Confidential Computing', definition: 'A technology that protects data in use by running computation inside hardware-protected enclaves (TEEs).' },
            { term: 'Trusted Execution Environment (TEE)', definition: 'A hardware-protected enclave isolating code and data from the host OS, hypervisor, and other enclaves — examples include Intel SGX, AMD SEV-SNP, ARM CCA.' },
            { term: 'Attestation', definition: 'A cryptographic mechanism by which a TEE proves its identity and integrity to a remote verifier before any sensitive data is shared.' },
          ],
          references: [
            { title: 'Goldwasser, Micali, Rackoff — The Knowledge Complexity of Interactive Proof Systems', source: 'STOC 1985', year: '1985' },
            { title: 'Ben-Sasson et al. — Scalable, Transparent, and Post-Quantum Secure zk-STARKs', source: 'IACR ePrint 2018/046', year: '2018' },
            { title: 'Confidential Computing Consortium — Technical White Paper', source: 'Confidential Computing Consortium', year: '2024' },
            { title: 'Intel SGX Developer Reference', source: 'Intel Corporation', year: '2024' },
            { title: 'AMD SEV-SNP Technical Documentation', source: 'AMD', year: '2024' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Encryption and Key Management Design',
      description:
        'Design a complete encryption architecture for an Indian fintech storing 50 million customer records, covering data at rest, in transit, key management, and key rotation.',
      deliverables: [
        'Encryption algorithm choices with rationale (AES-256-GCM, TLS 1.3)',
        'Key management architecture (KMS, HSM, envelope encryption)',
        'Key rotation policy and operational plan',
        'Diagram showing data flow and encryption layers',
        'DPDPA Section 8(5) compliance mapping',
      ],
    },
    {
      id: 2,
      title: 'Consent and DSAR API Implementation',
      description:
        'Implement a Consent API and DSAR API in your preferred language/framework. Include data models, API endpoints, consent enforcement, identity verification, and SLA tracking.',
      deliverables: [
        'Database schema for consents and DSAR records',
        'REST API with at least 5 consent endpoints and 6 DSAR endpoints',
        'Consent enforcement pattern in business logic',
        'Identity verification flow',
        'SLA tracking and escalation logic',
        'Unit tests for key flows',
      ],
    },
    {
      id: 3,
      title: 'Privacy Engineering Technology Evaluation',
      description:
        'Evaluate one emerging privacy technology (homomorphic encryption, SMPC, federated learning, ZKPs, or confidential computing) for a specific Indian use case of your choice.',
      deliverables: [
        'Description of the use case and privacy requirement',
        'Technology evaluation against alternatives',
        'Performance and cost analysis',
        'Reference architecture diagram',
        'Recommendation with rationale',
        'Implementation roadmap (3–6 months)',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Which AES mode provides authenticated encryption (both confidentiality and integrity)?',
        options: ['ECB', 'CBC', 'GCM', 'CFB'],
        correct: 2,
        explanation: 'GCM (Galois/Counter Mode) provides both confidentiality and integrity in a single operation. ECB and CBC do not provide authentication; CFB is a stream mode without authentication.',
      },
      {
        question: 'Which password hashing algorithm is the OWASP-recommended modern choice?',
        options: ['MD5', 'SHA-256', 'bcrypt', 'Argon2id'],
        correct: 3,
        explanation: 'OWASP recommends Argon2id (the 2015 Password Hashing Competition winner) as the modern password hashing algorithm. bcrypt is the production minimum.',
      },
      {
        question: 'What does a "pepper" provide that a "salt" does not?',
        options: ['Defence against rainbow tables', 'Defence against database-only breach', 'Faster hashing', 'Smaller storage'],
        correct: 1,
        explanation: 'A pepper is a secret value stored separately from the database. If the database is breached but the pepper is not, the attacker cannot brute-force even common passwords. Salts are stored alongside the hash and do not provide this protection.',
      },
      {
        question: 'RBI card-on-file tokenisation is mandatory from which date?',
        options: ['1 January 2022', '1 July 2022', '1 October 2022', '1 January 2023'],
        correct: 2,
        explanation: 'RBI mandated card-on-file tokenisation effective 1 October 2022 — merchants and payment aggregators cannot store actual card data, only issuer-generated tokens.',
      },
      {
        question: 'Under DPDPA Section 2(j), what makes data fall outside the Act\'s scope?',
        options: ['Encryption', 'Pseudonymisation', 'Anonymisation', 'Tokenisation'],
        correct: 2,
        explanation: 'Anonymisation — the irreversible transformation of personal data such that the Data Principal cannot be identified — takes data outside DPDPA scope.',
      },
      {
        question: 'Latanya Sweeney\'s 2000 study showed what percentage of the US population can be identified by date of birth, gender, and zip code?',
        options: ['50%', '75%', '87%', '95%'],
        correct: 2,
        explanation: 'Sweeney showed that 87% of the US population can be uniquely identified by date of birth, gender, and 5-digit zip code — three quasi-identifiers.',
      },
      {
        question: 'In k-anonymity, what does "k=5" mean?',
        options: ['5 records total', 'Each record is indistinguishable from at least 4 others', '5 sensitive attributes', '5% of records are anonymised'],
        correct: 1,
        explanation: 'k-anonymity with k=5 means each record is indistinguishable from at least 4 (k-1) other records on quasi-identifiers — an attacker cannot narrow down to fewer than 5 candidates.',
      },
      {
        question: 'In differential privacy, what does a smaller ε (epsilon) mean?',
        options: ['Stronger privacy, less noise', 'Weaker privacy, more noise', 'Stronger privacy, more noise', 'No effect on privacy'],
        correct: 2,
        explanation: 'Smaller ε means stronger privacy but more noise. ε=0 is perfect privacy (useless output); larger ε means weaker privacy (more accurate output).',
      },
      {
        question: 'How many foundational principles does Privacy by Design have?',
        options: ['5', '6', '7', '8'],
        correct: 2,
        explanation: 'Ann Cavoukian\'s Privacy by Design framework has 7 foundational principles — adopted by GDPR Article 25 and reflected in DPDPA Section 8.',
      },
      {
        question: 'Under DPDPA Section 11, which right is unique to DPDPA (not in GDPR)?',
        options: ['Right to access', 'Right to erasure', 'Right to nominate', 'Right to grievance redressal'],
        correct: 2,
        explanation: 'The Right to Nominate (Section 11(5)) — allowing a Data Principal to nominate another person to exercise rights in case of death or incapacity — is unique to DPDPA and not present in GDPR.',
      },
      {
        question: 'Which algorithm is the foundational federated learning algorithm introduced by Google in 2016?',
        options: ['FedSGD', 'FedAvg', 'FedProx', 'SCAFFOLD'],
        correct: 1,
        explanation: 'FedAvg (Federated Averaging), introduced by McMahan et al. in 2016, is the foundational FL algorithm — averaging locally-computed gradients from sampled clients.',
      },
      {
        question: 'What is the difference between zk-SNARKs and zk-STARKs?',
        options: ['SNARKs are post-quantum safe, STARKs are not', 'STARKs require trusted setup, SNARKs do not', 'SNARKs have smaller proofs, STARKs are transparent', 'They are identical'],
        correct: 2,
        explanation: 'zk-SNARKs have tiny proofs (~200 bytes) but require a trusted setup; zk-STARKs are transparent (no setup) and post-quantum-safe but have larger proofs (~50 KB).',
      },
      {
        question: 'Which confidential computing technology provides VM-level enclaves (not just process-level)?',
        options: ['Intel SGX', 'Intel TDX', 'AES-NI', 'TPM'],
        correct: 1,
        explanation: 'Intel TDX (Trust Domain Extensions) and AMD SEV-SNP provide VM-level enclaves. Intel SGX provides only process-level enclaves with limited EPC (typically 128 MB).',
      },
      {
        question: 'What does envelope encryption use to encrypt the data encryption key (DEK)?',
        options: ['The user\'s password', 'A key encryption key (KEK) held in KMS', 'A hash of the data', 'A random salt'],
        correct: 1,
        explanation: 'Envelope encryption uses a Key Encryption Key (KEK) held in KMS to encrypt the Data Encryption Key (DEK). The DEK encrypts the data; the encrypted DEK is stored alongside the ciphertext.',
      },
      {
        question: 'Which approach is best for fulfilling a DSAR for personal data stored across multiple SaaS systems (Salesforce, HubSpot, Zendesk)?',
        options: ['Manual export from each system', 'Federated retrieval with system connectors', 'Database dump and filter', 'Ask the user to contact each vendor'],
        correct: 1,
        explanation: 'Federated retrieval — dispatching parallel sub-queries to each system through dedicated connectors, normalising results, and aggregating — is the production pattern for DSAR across multiple systems.',
      },
    ],
    passingScore: 80,
  },
};




