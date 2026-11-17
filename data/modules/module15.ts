// data/modules/module15.ts

import { Module } from '@/app/types/course';

export const module15: Module = {
  id: 15,
  title: 'Incident Response & Breach Management',
  description:
    'Master the art of detecting, containing, and recovering from personal data breaches under the DPDPA 2023. This module covers the full incident response lifecycle, the 72-hour breach notification rule under Section 8(6), drafting Board and individual notifications per Rule 7 of the DPDP Rules 2025, building an IR team, running tabletop exercises, and conducting post-incident reviews. Learn from real Indian breach cases and prepare your organisation for the penalties — up to ₹250 crore — that apply when incidents are mishandled.',
  duration: '7 Hours',
  icon: 'AlertTriangle',
  learningObjectives: [
    'Detect personal data breaches using SIEM, SOC, and threat intelligence',
    'Contain breaches through short-term and long-term isolation, preserving forensic evidence',
    'Recover systems using clean restores, vulnerability patches, and verified backups',
    'Draft Board notifications and individual notifications compliant with Section 8(6) and Rule 7 of DPDP Rules 2025',
    'Distinguish reportable breaches from low-risk incidents that do not require notification',
    'Build and train an Incident Response Team with clear roles and playbooks',
    'Run tabletop exercises and conduct post-incident reviews to embed lessons learned',
  ],
  chapters: [
    // ============================================================
    // CHAPTER 1: INCIDENT MANAGEMENT
    // ============================================================
    {
      id: 1,
      title: 'Incident Management',
      lessons: [
        // -------- LESSON 1 --------
        {
          id: 1,
          title: 'Incident Detection',
          duration: '18 min',
          type: 'video',
          description:
            'How to detect personal data breaches early using Security Information and Event Management (SIEM), Security Operations Centres (SOC), threat intelligence feeds, and human reporting channels — the critical first link in the DPDPA incident response chain.',
          content:
            'Detection is the first and most time-sensitive phase of incident response. Under Section 8(6) of the DPDPA, the 72-hour breach notification clock starts the moment a Data Fiduciary becomes "aware" of a breach — and "awareness" is legally interpreted as when a reasonable organisation should have detected it, not when it actually admits it. This lesson equips DPOs, security leads, and legal teams with the detection toolkit needed to identify breaches fast, document the awareness timestamp precisely, and avoid the ₹250 crore maximum penalty for failure to notify on time. We cover SIEM correlation rules, SOC tiering, threat intelligence integration, endpoint detection and response (EDR), and the often-overlooked human channels through which most Indian breaches are first discovered.',
          learningObjectives: [
            'Define "personal data breach" under Section 3(5) of the DPDPA',
            'Explain the legal meaning of "becoming aware" of a breach',
            'Configure SIEM correlation rules for common breach patterns',
            'Differentiate SOC Tier 1, 2, and 3 responsibilities',
            'Establish human reporting channels (employees, customers, vendors)',
          ],
          keyTakeaways: [
            'The 72-hour clock under Section 8(6) starts when the Data Fiduciary becomes aware — defined as when a reasonable organisation should have detected the breach',
            'SIEM platforms aggregate logs from firewalls, endpoints, and applications to detect anomalies via correlation rules',
            'A Tier 1 SOC handles triage; Tier 2 investigates; Tier 3 performs advanced forensics and threat hunting',
            'Threat intelligence feeds (CERT-In, ISAC, commercial) provide indicators of compromise (IOCs) for proactive detection',
            'Most Indian breaches are first reported by employees, customers, or third parties — not by automated systems',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'What Constitutes a Personal Data Breach',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 3(5) of the DPDPA defines a "personal data breach" broadly as "any unauthorised or accidental processing of personal data that compromises its confidentiality, integrity, or availability." This three-pronged definition — Confidentiality, Integrity, Availability (the CIA triad) — covers far more than headline-grabbing hacks. A lost laptop containing unencrypted Aadhaar numbers is a confidentiality breach. A database where attacker tampered with UPI transaction records is an integrity breach. A ransomware attack that encrypts and locks out the DigiLocker connector is an availability breach. All three are reportable under Section 8(6) if they involve personal data.',
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA definition is deliberately wider than the common understanding of "data breach." An accidental email sent to the wrong recipient containing a customer\'s PAN card copy is a personal data breach and triggers Section 8(6) obligations.',
                  calloutType: 'important',
                },
                {
                  type: 'heading',
                  content: 'The CIA Triad in DPDPA Breach Context',
                },
                {
                  type: 'table',
                  headers: ['Dimension', 'Question', 'Example'],
                  rows: [
                    ['Confidentiality', 'Was personal data seen by someone without authorisation?', 'Customer database exfiltrated by attacker'],
                    ['Integrity', 'Was personal data altered, corrupted, or tampered?', 'Medical records modified by rogue insider'],
                    ['Availability', 'Was personal data made inaccessible or destroyed?', 'Ransomware encrypts HR files containing KYC data'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'Understanding this three-dimensional definition is essential because detection tools must monitor for all three. A SIEM that only alerts on exfiltration will miss integrity tampering. An EDR that only watches for malware will miss an insider deleting records. Detection coverage must span the full CIA spectrum.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Technical Detection: SIEM, SOC, and EDR',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Security Information and Event Management (SIEM) platforms — such as Splunk, IBM QRadar, Microsoft Sentinel, and open-source options like Wazuh — form the technical backbone of breach detection. They ingest logs from firewalls, servers, applications, identity providers, and endpoints, then apply correlation rules to surface anomalies that no single log source would reveal. For example, a rule might fire when a user logs in from Mumbai at 09:00 IST and from Bengaluru at 09:05 IST — impossible travel indicating credential compromise.',
                },
                {
                  type: 'heading',
                  content: 'Sample SIEM Correlation Rules for Personal Data Breaches',
                },
                {
                  type: 'list',
                  content: 'Correlation rules every DPDPA-compliant SIEM should include',
                  items: [
                    'Bulk download of customer records (e.g., >5,000 rows exported from CRM in 10 minutes)',
                    'Database queries returning Aadhaar, PAN, or health fields outside business hours',
                    'Privileged account creation or escalation without change ticket',
                    'Data exfiltration to unapproved cloud storage (Mega, Dropbox) or unknown IP geographies',
                    'Repeated failed authentications followed by success (brute-force pattern)',
                    'Endpoint communicating with known command-and-control (C2) servers from threat intelligence feeds',
                    'Disabled antivirus or EDR agent on a server holding personal data',
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'A Security Operations Centre (SOC) is the human layer around the SIEM. Mature SOCs are tiered: Tier 1 analysts triage alerts 24x7 and escalate true positives; Tier 2 analysts investigate scope and impact; Tier 3 performs threat hunting and advanced forensics. The Reserve Bank of India (RBI) mandates that all banks and payment system operators maintain a 24x7 SOC, and the DPDPA effectively extends this expectation to all Significant Data Fiduciaries under Section 10. Many Indian organisations outsource the SOC to MSSPs like Deloitte, KPMG, or TCS, but accountability for breach detection remains with the Data Fiduciary.',
                },
                {
                  type: 'callout',
                  content:
                    'CERT-In Directions (April 2022) require all Indian entities to report cybersecurity incidents — including data breaches — to CERT-In within 6 hours of noticing them. This is separate from and faster than the DPDPA\'s 72-hour Board notification. A serious breach often triggers BOTH obligations simultaneously.',
                  calloutType: 'warning',
                },
                {
                  type: 'heading',
                  content: 'Endpoint Detection and Response (EDR)',
                },
                {
                  type: 'paragraph',
                  content:
                    'EDR tools like CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne, and Carbon Black install lightweight agents on every endpoint and server. They record process executions, file modifications, registry changes, and network connections — creating a forensic timeline that reveals exactly how an attacker moved through the environment. EDR is particularly powerful for detecting ransomware, where the encryption behaviour is unmistakable: rapid bulk file modifications across thousands of files in seconds.',
                },
                {
                  type: 'example',
                  content:
                    'In the 2024 ransomware attack on a major Indian hospital chain, EDR detected abnormal file rename activity (extension changes to .locked) on a file server at 02:14 IST. The SOC Tier 1 analyst quarantined the host within 4 minutes, limiting encryption to 3,200 patient files out of an estimated 4.8 million — a 99.93% reduction in impact. The 72-hour DPDPA notification clock started at 02:18 IST, the time the SOC confirmed the incident as a personal data breach.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Threat Intelligence and Human Detection Channels',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Technical detection alone is insufficient. According to IBM\'s Cost of a Data Breach Report 2024, organisations using threat intelligence and employee training detected breaches 28 days faster on average than those without. Threat intelligence provides Indicators of Compromise (IOCs) — IP addresses, domain names, file hashes, and behavioural patterns associated with known attacker groups. Feeds from CERT-In, the Indian Computer Emergency Response Team; FS-ISAC for financial services; and commercial providers like Recorded Future, Mandiant, and Cisco Talos should be integrated directly into the SIEM so that any matching IOC triggers an immediate alert.',
                },
                {
                  type: 'heading',
                  content: 'Human Reporting Channels: The Often-Missed Frontline',
                },
                {
                  type: 'paragraph',
                  content:
                    'Studies by Verizon (Data Breach Investigations Report) consistently show that 40-60% of breaches are first detected by humans — employees noticing strange system behaviour, customers reporting phishing emails, or vendors flagging anomalies. Every Data Fiduciary must therefore establish multiple human reporting channels and treat each report as a potential Section 8(6) trigger until triaged:',
                },
                {
                  type: 'list',
                  content: 'Mandatory human detection channels',
                  items: [
                    'Internal incident hotline or Slack/Teams channel monitored 24x7 by the SOC',
                    'Email address such as security@company.in or dpo@company.in with auto-acknowledgement and ticketing',
                    'Customer-facing breach report form on the website (per DPDP Rules 2025 Rule 7 expectation)',
                    'Anonymous whistleblower mechanism for insider threat reports',
                    'Vendor and partner escalation path for third-party breaches',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Documenting the "awareness timestamp" is critical. The DPDPA Board has indicated that the 72-hour clock starts when a credible report reaches any individual with responsibility for security or privacy — not when the CISO finally reads the email. Train all employees to report immediately and log the exact timestamp of every report.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'An Indian fintech received a customer complaint on Twitter at 14:32 IST: "Why did I get an OTP for a transaction I didn\'t initiate?" The social media team forwarded it to the SOC at 16:45 IST. By 17:30 IST, the SOC confirmed a credential stuffing attack affecting 12,000 accounts. The legally relevant "awareness" timestamp was 14:32 — the moment the customer reported — not 17:30. The Board notification was therefore due by 14:32 IST two business days later.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Personal Data Breach', definition: 'Per DPDPA Section 3(5): any unauthorised or accidental processing of personal data that compromises its confidentiality, integrity, or availability.' },
            { term: 'SIEM', definition: 'Security Information and Event Management — a platform that aggregates and correlates logs from across the IT estate to detect security incidents.' },
            { term: 'SOC', definition: 'Security Operations Centre — the human team that monitors SIEM alerts 24x7, triages, investigates, and escalates incidents.' },
            { term: 'EDR', definition: 'Endpoint Detection and Response — software agents installed on endpoints that record detailed activity for detection and forensic analysis.' },
            { term: 'IOC', definition: 'Indicator of Compromise — an artefact (IP, hash, domain) observed on a system that indicates a potential breach.' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Act 2023', source: 'Government of India, MeitY', year: '2023' },
            { title: 'CERT-In Directions of 28 April 2022', source: 'Indian Computer Emergency Response Team', year: '2022' },
            { title: 'Cost of a Data Breach Report', source: 'IBM Security', year: '2024' },
            { title: 'Data Breach Investigations Report', source: 'Verizon', year: '2024' },
          ],
        },

        // -------- LESSON 2 --------
        {
          id: 2,
          title: 'Containment',
          duration: '16 min',
          type: 'video',
          description:
            'How to stop a breach in its tracks — short-term containment (isolation, account disabling) and long-term containment (segmentation, patched rebuilds) — while preserving forensic evidence for Board notification and potential litigation.',
          content:
            'Containment is the second phase of incident response and the one where speed matters most. Every minute an attacker retains access, the scope of the breach grows — and so does the penalty exposure under Section 8(6), which is calibrated to the number of affected Data Principals and the sensitivity of data compromised. This lesson covers the two-tier containment model used by SANS and NIST: short-term containment (immediate isolation to stop the bleeding) and long-term containment (sustained measures to prevent re-entry while recovery proceeds). Critically, we cover evidence preservation — because a containment action that destroys logs or memory state can destroy the forensic timeline needed for Board notification and possible litigation.',
          learningObjectives: [
            'Distinguish short-term and long-term containment objectives',
            'Apply isolation techniques: network quarantine, account disablement, service shutdown',
            'Preserve volatile evidence (memory, network captures) before powering off systems',
            'Avoid common containment mistakes that destroy forensic evidence',
            'Document containment actions with timestamps for the post-incident review',
          ],
          keyTakeaways: [
            'Short-term containment stops active attack in minutes (isolate host, disable account) while long-term containment sustains protection during recovery (segment network, deploy patches)',
            'Never power off a compromised system before capturing volatile memory — RAM contents often reveal malware, credentials, and attack timeline',
            'Disable compromised accounts at the identity provider (Active Directory / IAM) not just at the application, to prevent lateral movement',
            'Preserve logs by writing them to write-once media or a secure SIEM before containment actions trigger log rotation',
            'Every containment action must be timestamped and documented — the Board and courts will ask what was done when',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Short-Term Containment: Stopping the Bleeding',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Short-term containment aims to stop the active attack within minutes of detection, preventing further data exfiltration or system damage. The guiding principle is: isolate, do not destroy. The goal is to cut off the attacker\'s access while leaving the forensic evidence intact for later analysis. This requires pre-planned runbooks — there is no time to debate during an active incident.',
                },
                {
                  type: 'heading',
                  content: 'Standard Short-Term Containment Actions',
                },
                {
                  type: 'list',
                  content: 'First 30 minutes of containment — the IR runbook',
                  items: [
                    'Network isolation: disconnect the compromised host from the network (disable switch port, move to quarantine VLAN, or apply host firewall block) — but keep the host powered on',
                    'Account disablement: disable the compromised user account at the identity provider (Active Directory, Okta, Azure AD) to revoke all active sessions and tokens',
                    'Session revocation: force logout of all active sessions across SaaS applications (Google Workspace, Microsoft 365, Salesforce) using admin APIs',
                    'Service shutdown: if a specific service is being exploited (e.g., a vulnerable web form), disable that service or apply a WAF rule to block the attack pattern',
                    'Firewall rules: block attacker IP addresses and known C2 domains at the perimeter firewall and DNS resolver',
                    'Privileged account rotation: rotate passwords for all admin accounts that may have been exposed (assume compromise until proven otherwise)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The single most common containment mistake is powering off the compromised server. This destroys volatile memory (RAM) which often contains the running malware, decrypted credentials, and the attacker\'s command shell. Instead, disconnect the network cable or disable the NIC — the host stays powered, RAM is preserved, and forensic capture can proceed.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru SaaS company detected an attacker exfiltrating customer PII from a database server at 03:47 IST. The junior sysadmin\'s instinct was to power off the server. The IR Lead instead disabled the switch port at 03:51 IST, leaving the server running. Memory capture at 04:10 IST revealed a custom web shell and the attacker\'s decrypted reverse-shell credentials — evidence that proved invaluable in attributing the attack and in the Board notification, which was filed within 72 hours.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Long-Term Containment: Sustaining the Hold',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Short-term containment buys time — typically 24 to 72 hours. Long-term containment sustains the protection through the recovery phase, which can take weeks. The objectives differ: short-term is about speed and isolation; long-term is about sustaining operations safely while the root cause is fixed. Long-term containment often involves segmenting affected systems, deploying patches in a controlled manner, and standing up clean infrastructure parallel to the compromised environment.',
                },
                {
                  type: 'heading',
                  content: 'Elements of Long-Term Containment',
                },
                {
                  type: 'list',
                  content: 'Long-term containment measures for sustained recovery',
                  items: [
                    'Network segmentation: place affected systems in a quarantined VLAN with strict egress filtering — no outbound internet except to known-good destinations',
                    'Patched rebuild: rebuild compromised hosts from known-good images with all current patches applied; never "clean" an infected host in place',
                    'Credential rotation at scale: rotate all service accounts, API keys, and secrets that may have been exposed — use a secrets manager like HashiCorp Vault or AWS Secrets Manager',
                    'Enhanced monitoring: deploy EDR on all hosts in the affected blast radius with heightened alerting for the duration of recovery',
                    'Decoy systems: deploy honeypots or canary files (Canarytokens) in the affected zone to detect attacker return visits',
                    'Business continuity workaround: enable manual or degraded-mode processes if the affected system is customer-facing (e.g., switch to manual KYC verification if the eKYC API is compromised)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For ransomware incidents, do NOT pay the ransom without consulting law enforcement and legal counsel. Paying ransom to sanctioned entities (e.g., Lazarus Group) can violate India\'s Prevention of Money Laundering Act 2002 and OFAC sanctions. The RBI has explicitly discouraged ransom payment for regulated entities.',
                  calloutType: 'danger',
                },
                {
                  type: 'paragraph',
                  content:
                    'Long-term containment is also where the DPDPA\'s Section 8(5) obligation to "take necessary and prompt action to remedy the breach" comes into play. The Board will examine whether the Data Fiduciary took prompt and reasonable remedial action — long-term containment is the documented evidence of that action. Without it, the Board may conclude the Data Fiduciary was negligent, exposing it to penalties up to ₹250 crore under Section 33 and Schedule.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Evidence Preservation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Evidence preservation is the discipline of capturing forensic artefacts before they are overwritten or destroyed. Volatile evidence — RAM contents, running processes, network connections, login sessions — disappears the moment a system is powered off or rebooted. Non-volatile evidence — logs, files, registry — can survive but may be rotated out within hours unless explicitly preserved. The standard order of volatility (per NIST SP 800-86) guides forensic capture from most to least volatile.',
                },
                {
                  type: 'heading',
                  content: 'Order of Volatility (NIST SP 800-86)',
                },
                {
                  type: 'table',
                  headers: ['Priority', 'Artefact', 'Tool', 'Time-to-Capture'],
                  rows: [
                    ['1', 'CPU cache and registers', 'Hardware debugger', 'Seconds'],
                    ['2', 'Routing tables, ARP cache, process table, RAM', 'WinPMEM, LiME, Rekall', 'Minutes'],
                    ['3', 'Active network connections, temporary file systems', 'netstat, tcpdump', 'Minutes'],
                    ['4', 'Logs (system, application, security)', 'SIEM export, log copy', 'Minutes to hours'],
                    ['5', 'Persistent storage (files, databases, registry)', 'Forensic imaging (FTK, dd)', 'Hours'],
                    ['6', 'Remote logs and backups', 'Off-site log retrieval', 'Hours to days'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'For each artefact captured, the forensic analyst must record a cryptographic hash (SHA-256) to prove integrity. The chain of custody — who captured what, when, where it was stored, who accessed it — must be documented. This evidence is the foundation for the Board notification (which must describe the breach and remedial action), for any individual notification (which must describe what data was compromised), and for potential civil or criminal proceedings.',
                },
                {
                  type: 'callout',
                  content:
                    'Evidence preservation is not optional. Under Section 8(6), the Board notification must describe the breach in sufficient detail to demonstrate due diligence. Without preserved evidence, the Data Fiduciary cannot substantiate its notification and may face the maximum penalty of ₹250 crore for failure to take reasonable security safeguards under Section 8(5).',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Short-Term Containment', definition: 'Immediate isolation actions taken within minutes of detection to stop an active attack while preserving evidence.' },
            { term: 'Long-Term Containment', definition: 'Sustained measures (segmentation, patched rebuilds, enhanced monitoring) that maintain protection during the recovery phase.' },
            { term: 'Order of Volatility', definition: 'NIST-defined sequence for capturing forensic evidence, starting with the most ephemeral (RAM) and ending with the most persistent (backups).' },
            { term: 'Chain of Custody', definition: 'Documented record of who handled evidence, when, and where, used to prove integrity in legal proceedings.' },
          ],
          references: [
            { title: 'NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response', source: 'National Institute of Standards and Technology', year: '2006' },
            { title: 'SANS Incident Handler\'s Handbook', source: 'SANS Institute', year: '2023' },
            { title: 'DPDPA 2023 — Section 8(5) and 8(6)', source: 'Government of India, MeitY', year: '2023' },
          ],
        },

        // -------- LESSON 3 --------
        {
          id: 3,
          title: 'Recovery',
          duration: '15 min',
          type: 'video',
          description:
            'How to restore affected systems safely using clean restores from verified backups, apply vulnerability patches, validate system integrity, and bring services back online without re-introducing the breach.',
          content:
            'Recovery is the phase where the Data Fiduciary restores normal operations after containment. It is also the phase where many organisations re-introduce the breach — by restoring from a compromised backup, by failing to patch the original vulnerability, or by bringing systems back online before validating integrity. This lesson covers the discipline of clean recovery: identifying the last known-good backup, applying patches before reconnection, validating system integrity against known baselines, and phased service restoration with continuous monitoring. Done well, recovery demonstrates the "prompt remedial action" required by Section 8(5) of the DPDPA; done poorly, it can trigger a second breach and a second 72-hour notification cycle.',
          learningObjectives: [
            'Identify and validate the last known-good backup before restore',
            'Apply patches and configuration hardening before reconnecting systems',
            'Validate system integrity using file hashes, configuration baselines, and vulnerability scans',
            'Plan phased service restoration with continuous monitoring',
            'Avoid common recovery pitfalls that re-introduce breaches',
          ],
          keyTakeaways: [
            'Never restore from a backup without first verifying it is uninfected — ransomware can lie dormant in backups for weeks',
            'Patch the original vulnerability BEFORE reconnecting the restored system — otherwise the attacker walks back in',
            'Phased restoration (one service or user group at a time) with monitoring beats a "big bang" restart',
            'Validate integrity by comparing file hashes, configuration baselines, and running a vulnerability scan before go-live',
            'Document every recovery action — the Board will examine whether recovery was "prompt" under Section 8(5)',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Selecting and Validating the Last Known-Good Backup',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The first recovery decision is: from which backup do we restore? The challenge is that the breach may have begun days or weeks before detection, meaning recent backups are themselves compromised. The IR team must establish the "intrusion window" — the period during which the attacker had access — and select a backup from before the start of that window. This is sometimes called the "patient zero" timestamp.',
                },
                {
                  type: 'heading',
                  content: 'Backup Selection Methodology',
                },
                {
                  type: 'list',
                  content: 'Steps to identify the correct backup for restore',
                  items: [
                    'Forensic timeline analysis: use EDR, SIEM, and log review to identify the earliest evidence of attacker activity — the "first compromise" timestamp',
                    'Subtract a safety margin (typically 7-14 days) to account for undetected activity — this gives the backup cutoff date',
                    'Identify the most recent backup before the cutoff that has integrity verification (cryptographic hashes, immutable storage, or offline media)',
                    'Validate the backup: restore to an isolated test environment, scan with multiple AV engines, run YARA rules for known attacker tooling',
                    'Only after validation, restore to production',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Immutable backups — backups that cannot be deleted or modified for a defined retention period — are the gold standard. Solutions like AWS Backup Vault Lock, Azure Immutable Blob Storage, and offline tape libraries protect backups from ransomware that tries to delete them. The RBI\'s Cyber Security Framework for banks mandates immutable backups.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'An Indian NBFC detected a breach on 15 March. Forensic analysis found the first attacker activity on 2 March — a 13-day intrusion window. The IR team selected the 25 February backup (6 days before first compromise) as the recovery source, validated it in an isolated lab over 48 hours, and only then restored to production. The alternative — restoring the 14 March backup — would have re-introduced the attacker\'s backdoor.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Patching and Hardening Before Reconnection',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Restoring a clean backup is necessary but not sufficient. The attacker got in through a vulnerability — if that vulnerability is not patched before reconnection, the attacker (or a copycat) will exploit it again within hours. Recovery must therefore include a vulnerability remediation step: identify the entry point, apply patches and configuration hardening, and validate before reconnecting to the network.',
                },
                {
                  type: 'heading',
                  content: 'Pre-Reconnection Hardening Checklist',
                },
                {
                  type: 'list',
                  content: 'Mandatory hardening before a recovered system reconnects to production',
                  items: [
                    'Apply all current OS and application patches — not just the patch for the exploited vulnerability',
                    'Disable or remove unnecessary services, accounts, and ports (attack surface reduction)',
                    'Rotate all credentials stored on or accessible from the system (service accounts, API keys, SSH keys)',
                    'Reconfigure to baseline hardening standard (CIS Benchmarks, STIG, or organisation standard)',
                    'Deploy EDR agent and verify it is reporting to the SIEM before connecting to production',
                    'Run a vulnerability scan (Nessus, Qualys, Rapid7) and remediate any high or critical findings',
                    'Validate that backups of the restored system are now running and immutable',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'CIS Benchmarks (Center for Internet Security) provide free, vendor-specific hardening standards for Windows, Linux, cloud platforms, databases, and applications. They are widely accepted as the baseline for "reasonable security safeguards" under Section 8(5) of the DPDPA.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Phased Service Restoration and Continuous Monitoring',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The temptation after a breach is to restore everything at once and declare victory. This is risky. A phased restoration — bringing back one service or user group at a time, with monitoring between each phase — catches any residual attacker presence or re-infection before it spreads. The standard approach is to restore internal-facing services first (where issues can be caught quickly), then external-facing services once internal operations are validated.',
                },
                {
                  type: 'heading',
                  content: 'Phased Restoration Model',
                },
                {
                  type: 'table',
                  headers: ['Phase', 'Restored', 'Validation', 'Duration'],
                  rows: [
                    ['1', 'Internal admin tools', 'Smoke tests, admin UAT', '4-8 hours'],
                    ['2', 'Internal user services', '10% pilot group, monitoring', '24 hours'],
                    ['3', 'External APIs (read-only)', 'Synthetic + real traffic monitoring', '24 hours'],
                    ['4', 'External write services', 'Staged rollout, 25% / 50% / 100%', '48 hours'],
                    ['5', 'Full service + retrospective audit', 'Post-incident review', '1-2 weeks'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'Throughout recovery, monitoring must be heightened — EDR alerts, SIEM correlation rules, and network traffic analysis should all be configured to catch any sign of attacker return. The IR team should maintain a "war room" — daily standups, real-time dashboards, and clear escalation paths — until the recovery is complete and the post-incident review is underway. This sustained discipline is what the DPDPA Board looks for when assessing whether the Data Fiduciary took "prompt and necessary action" under Section 8(5).',
                },
                {
                  type: 'callout',
                  content:
                    'If monitoring detects a second compromise during recovery, the 72-hour notification clock may re-start for the new incident. Maintain clear documentation distinguishing the original incident from any recurrence to avoid duplicate or conflicting Board notifications.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Last Known-Good Backup', definition: 'The most recent backup verified to be free of attacker artefacts, used as the restore source after a breach.' },
            { term: 'Intrusion Window', definition: 'The period between the first attacker activity and breach detection; defines the cutoff for safe backup selection.' },
            { term: 'Immutable Backup', definition: 'A backup stored on write-once-read-many (WORM) media that cannot be deleted or modified, protecting against ransomware tampering.' },
            { term: 'CIS Benchmarks', definition: 'Vendor-specific hardening standards published by the Center for Internet Security, widely accepted as the baseline for reasonable security.' },
          ],
          references: [
            { title: 'NIST SP 800-34: Contingency Planning Guide for Federal Information Systems', source: 'National Institute of Standards and Technology', year: '2010' },
            { title: 'CIS Critical Security Controls v8', source: 'Center for Internet Security', year: '2021' },
            { title: 'RBI Cyber Security Framework for Banks', source: 'Reserve Bank of India', year: '2016' },
          ],
        },

        // -------- LESSON 4 --------
        {
          id: 4,
          title: 'Notification',
          duration: '17 min',
          type: 'video',
          description:
            'The DPDPA\'s 72-hour breach notification rule under Section 8(6): who must be notified, when, and how. Covers notification to the Data Protection Board and to affected Data Principals, plus the parallel CERT-In 6-hour obligation.',
          content:
            'Notification is the legal heart of the DPDPA incident response process. Section 8(6) imposes two distinct notification duties on every Data Fiduciary that suffers a personal data breach: notify the Data Protection Board of India, and notify each affected Data Principal. The Board notification must be made "without delay and in any event within seventy-two hours" of becoming aware of the breach. The individual notification must be made "in such form and manner as may be prescribed" by the DPDP Rules 2025. Failure to notify carries penalties up to ₹250 crore under the DPDPA Schedule. This lesson explains the two notification tracks, the parallel 6-hour CERT-In obligation, the "awareness" trigger, and the consequences of late or incomplete notification.',
          learningObjectives: [
            'Explain the two notification duties under Section 8(6): Board and affected Data Principals',
            'Apply the 72-hour rule and calculate the deadline precisely',
            'Coordinate the parallel CERT-In 6-hour notification under April 2022 Directions',
            'Identify when individual notification can be deferred or omitted',
            'Calculate penalty exposure for late or non-notification under the DPDPA Schedule',
          ],
          keyTakeaways: [
            'Section 8(6) requires BOTH a Board notification (within 72 hours) AND an individual notification (without undue delay) for every personal data breach',
            'The 72-hour clock starts when the Data Fiduciary becomes "aware" — interpreted as when a reasonable organisation should have detected the breach',
            'CERT-In Directions (April 2022) require separate notification to CERT-In within 6 hours — a stricter timeline than DPDPA',
            'Individual notification can use any reasonable means — email, SMS, in-app notice, or public advertisement for large-scale breaches',
            'Maximum penalty for failure to notify is ₹250 crore under the DPDPA Schedule, Part 1',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Two Notification Tracks Under Section 8(6)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 8(6) of the DPDPA creates two parallel notification obligations. The text reads (paraphrased): "Where any personal data breach occurs, the Data Fiduciary shall, without delay and in any event within seventy-two hours of becoming aware of such breach, intimate the Board and each affected Data Principal in such form and manner as may be prescribed." Two recipients, one deadline. The Board notification informs the regulator; the individual notification informs the people whose data was compromised. Both must be made within 72 hours of awareness.',
                },
                {
                  type: 'heading',
                  content: 'Notification Recipients and Timelines',
                },
                {
                  type: 'table',
                  headers: ['Recipient', 'Deadline', 'Legal Basis', 'Method'],
                  rows: [
                    ['Data Protection Board of India', '72 hours of awareness', 'DPDPA Section 8(6); DPDP Rules 2025 Rule 7', 'Online portal (prescribed form)'],
                    ['Affected Data Principals', 'Without undue delay (target: 72 hours)', 'DPDPA Section 8(6); DPDP Rules 2025 Rule 7', 'Email, SMS, in-app, or public notice'],
                    ['CERT-In', '6 hours of noticing', 'CERT-In Directions 28 April 2022', 'Email / online form'],
                    ['Sectoral Regulator (RBI / IRDAI / SEBI)', 'Per sectoral rules', 'Sectoral cyber frameworks', 'Email / portal'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The 72-hour DPDPA deadline and the 6-hour CERT-In deadline run independently. A single breach often triggers BOTH — the CERT-In report goes out first (within 6 hours), then the DPDPA Board notification (within 72 hours), then individual notifications. Missing either deadline triggers separate penalties.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Calculating the 72-Hour Deadline',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The phrase "becoming aware of such breach" is the most litigated term in Section 8(6). The DPDP Rules 2025 and the Board\'s guidance indicate that awareness is not the moment of detection by an automated system — it is the moment a human with security or privacy responsibility confirms that a personal data breach has occurred. The standard is objective: would a reasonable Data Fiduciary, in these circumstances, have concluded a breach occurred? If yes, the clock starts.',
                },
                {
                  type: 'heading',
                  content: 'How to Calculate the Deadline',
                },
                {
                  type: 'list',
                  content: 'Step-by-step calculation of the 72-hour notification deadline',
                  items: [
                    'Identify the "awareness timestamp" — the moment a credible report reaches a person with security/privacy responsibility (SOC analyst, DPO, CISO, or any officer)',
                    'Add 72 hours (3 days). This is the absolute deadline for the Board notification',
                    'If the deadline falls on a weekend or public holiday, the deadline is NOT extended — the DPDPA does not provide a business-day rule',
                    'File the Board notification before the deadline, with as much detail as is then known — supplementary filings are permitted if new information emerges',
                    'For individual notification, the standard is "without undue delay" — best practice is to align with the 72-hour Board deadline unless there is a justified reason to delay (e.g., to avoid tipping off an active attacker)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'When in doubt, file an initial notification within 72 hours with the information available, then submit supplementary notifications as the investigation progresses. The Board has indicated that an incomplete-but-timely notification is preferable to a complete-but-late one. Late filing can trigger the maximum ₹250 crore penalty.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai-based e-commerce platform detected anomalous database queries at 11:00 IST on Monday. The SOC escalated to the CISO at 12:30 IST. The CISO confirmed a personal data breach at 14:00 IST. The 72-hour clock started at 14:00 IST Monday. The deadline was 14:00 IST Thursday — well within business hours. The Board notification was filed at 09:00 IST Thursday, and individual notifications began at 10:00 IST Thursday via email to 1.2 million affected customers.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Individual Notification and Exemptions',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The individual notification duty under Section 8(6) requires the Data Fiduciary to inform each affected Data Principal of the breach, the data compromised, the remedial action taken, and any steps the Data Principal should take to mitigate harm. The notification must be in plain language, free of charge, and through a channel the Data Principal is likely to see — typically email or SMS for digital-native Data Principals, or physical letter for high-severity cases.',
                },
                {
                  type: 'heading',
                  content: 'Content of Individual Notification',
                },
                {
                  type: 'list',
                  content: 'Mandatory content per DPDP Rules 2025 Rule 7(2)',
                  items: [
                    'Description of the breach — what happened, when, and how discovered',
                    'Categories and approximate number of Data Principals affected',
                    'Categories and approximate number of personal data records affected',
                    'Likely consequences of the breach (identity theft, financial fraud, reputational harm)',
                    'Measures taken or proposed to address the breach and mitigate adverse effects',
                    'Measures the Data Principal can take to protect themselves (password reset, credit monitoring, fraud alert)',
                    'Contact details of the Grievance Officer for further queries',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'When individual notification to millions of Data Principals is impractical (e.g., 100 million Aadhaar-linked records), the Board may permit a public notification — a conspicuous advertisement in two national daily newspapers and on the organisation\'s website. This is not a substitute for direct notification where feasible; it is a supplement for cases where direct contact is impossible.',
                  calloutType: 'note',
                },
                {
                  type: 'paragraph',
                  content:
                    'The DPDPA does not contain a broad "low risk" exemption like GDPR Article 34(3). However, the Board has indicated that breaches affecting only data that was already publicly available, or breaches where the compromised data was rendered unintelligible through strong encryption, may not require individual notification — provided the Data Fiduciary documents its risk assessment. Lesson 10 of this module covers the "when not to notify" analysis in detail.',
                },
                {
                  type: 'callout',
                  content:
                    'Penalty exposure: Under the DPDPA Schedule, Part 1, failure to notify a personal data breach as required by Section 8(6) carries a maximum penalty of ₹250 crore. Failure to take reasonable security safeguards to prevent a breach (Section 8(5)) carries the same maximum. A single breach can therefore trigger up to ₹500 crore in combined penalties if both safeguards and notification are found deficient.',
                  calloutType: 'danger',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Section 8(6) Notification', definition: 'The DPDPA obligation to notify the Data Protection Board and each affected Data Principal of a personal data breach within 72 hours of awareness.' },
            { term: 'Awareness Timestamp', definition: 'The moment a human with security/privacy responsibility confirms a personal data breach has occurred; starts the 72-hour clock.' },
            { term: 'Supplementary Notification', definition: 'A follow-up filing to the Board providing additional information discovered after the initial 72-hour notification.' },
            { term: 'Public Notification', definition: 'A substitute for individual notification used when direct contact with millions of Data Principals is impractical; typically a newspaper advertisement.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 8(6) and Schedule Part 1', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 7', source: 'Government of India, MeitY', year: '2025' },
            { title: 'CERT-In Directions of 28 April 2022', source: 'Indian Computer Emergency Response Team, MeitY', year: '2022' },
          ],
        },

        // -------- LESSON 5 --------
        {
          id: 5,
          title: 'Forensics and Root Cause Analysis',
          duration: '18 min',
          type: 'video',
          description:
            'Digital forensics methodology for DPDPA incidents: capturing and analysing forensic artefacts, reconstructing the attack timeline, identifying the root cause, and producing evidence admissible before the Data Protection Board and Indian courts.',
          content:
            'Forensics and Root Cause Analysis (RCA) is the investigation that follows containment. Its purpose is twofold: to understand exactly what happened (so the Board notification can be accurate and complete), and to identify the root cause so it can be fixed (so the breach does not recur). This lesson covers the digital forensics methodology aligned with NIST SP 800-86 and ISO/IEC 27037, the construction of an attack timeline from multiple evidence sources, the application of the "5 Whys" and fishbone techniques for root cause analysis, and the production of a forensic report that meets the evidentiary standards of the Data Protection Board and Indian courts. A thorough RCA is also the foundation for the post-incident review covered in Lesson 13.',
          learningObjectives: [
            'Apply the NIST SP 800-86 forensic methodology: identify, collect, examine, analyse, report',
            'Reconstruct the attack timeline by correlating evidence from SIEM, EDR, network captures, and logs',
            'Conduct Root Cause Analysis using the 5 Whys, fishbone, and fault tree techniques',
            'Produce a forensic report admissible before the Data Protection Board',
            'Distinguish contributing causes from root causes to focus remediation',
          ],
          keyTakeaways: [
            'Forensics follows a five-step NIST methodology: identification, collection, examination, analysis, reporting',
            'The attack timeline is built by correlating timestamps across SIEM, EDR, network captures, and application logs — every source must be in the same time zone (IST) and NTP-synced',
            'Root Cause Analysis uses the "5 Whys" technique — ask "why" five times to move past symptoms to the underlying systemic cause',
            'A forensic report must be reproducible — another qualified analyst must be able to follow the methodology and reach the same conclusions',
            'Forensic evidence must be preserved under chain of custody for at least the duration of any Board proceeding or litigation — typically 7-10 years',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The NIST Forensic Methodology',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'NIST Special Publication 800-86 defines a five-phase forensic methodology that has become the global standard for incident investigation. The phases are: identification (determine what systems and data are relevant), collection (acquire forensic images and artefacts), examination (extract and review data), analysis (correlate evidence to form conclusions), and reporting (document findings for the audience). Each phase must be documented contemporaneously so the work is reproducible.',
                },
                {
                  type: 'heading',
                  content: 'The Five Phases Applied to a DPDPA Incident',
                },
                {
                  type: 'table',
                  headers: ['Phase', 'Activity', 'Output'],
                  rows: [
                    ['1. Identification', 'Define scope: which systems, users, data flows are in scope', 'Forensic scoping document'],
                    ['2. Collection', 'Capture disk images, memory dumps, logs, network captures', 'Forensic evidence set with hashes'],
                    ['3. Examination', 'Extract files, registry, browser history, deleted artefacts', 'Extracted data inventory'],
                    ['4. Analysis', 'Build attack timeline, identify IOCs, attribute to attacker', 'Attack timeline and findings'],
                    ['5. Reporting', 'Document methodology, findings, opinions, recommendations', 'Forensic report'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The forensic image of a disk must be accompanied by a SHA-256 hash computed at the time of capture. The hash is recomputed at the start of analysis; if it does not match, the evidence has been tampered with and is inadmissible. Tools like dd, FTK Imager, and EnCase compute hashes automatically.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Reconstructing the Attack Timeline',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The attack timeline is the heart of the forensic report. It is a chronological reconstruction of every attacker action, from initial compromise through detection and containment. Building it requires correlating timestamps from multiple sources — SIEM alerts, EDR process logs, network packet captures, firewall logs, application access logs, and authentication logs. Every source must be in the same time zone (IST for Indian incidents) and synchronised via NTP; inconsistent time is the most common forensic failure.',
                },
                {
                  type: 'heading',
                  content: 'Sample Attack Timeline',
                },
                {
                  type: 'table',
                  headers: ['Timestamp (IST)', 'Source', 'Event'],
                  rows: [
                    ['2025-03-12 02:14:33', 'Firewall', 'Inbound connection from 185.220.x.x to web server port 443'],
                    ['2025-03-12 02:14:38', 'Web app log', 'POST /api/upload with crafted payload (CVE-2025-1234)'],
                    ['2025-03-12 02:15:02', 'EDR', 'Suspicious child process spawned: /tmp/.cache/sh'],
                    ['2025-03-12 02:17:44', 'Database log', 'SELECT * FROM customers executed by web app account'],
                    ['2025-03-12 02:18:01', 'EDR', 'Outbound connection to 91.213.x.x (known C2)'],
                    ['2025-03-12 03:47:11', 'SIEM', 'Correlation rule fired: bulk data egress'],
                    ['2025-03-12 03:51:00', 'SOC Tier 1', 'Network port disabled (containment)'],
                    ['2025-03-12 04:10:00', 'Forensics', 'Memory capture initiated'],
                  ],
                },
                {
                  type: 'paragraph',
                  content:
                    'This timeline becomes the factual basis for the Board notification, which must describe "the nature of the personal data breach, the number of Data Principals affected, and the consequential harm" (DPDP Rules 2025 Rule 7). Without a forensic timeline, the Board notification is speculative — and a speculative notification can be challenged as deficient, exposing the Data Fiduciary to penalty.',
                },
                {
                  type: 'example',
                  content:
                    'In a recent DPDPA enforcement action, the Board questioned a Data Fiduciary\'s claim that "approximately 50,000 Data Principals were affected." The Data Fiduciary produced a forensic timeline showing database query logs correlated with EDR network captures, demonstrating that 47,318 unique records had been exfiltrated. The detailed timeline converted a speculative estimate into a defensible fact, and the Board accepted the figure.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Root Cause Analysis: The 5 Whys and Beyond',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Identifying the technical breach mechanism (e.g., "CVE-2025-1234 was exploited") is necessary but not sufficient for root cause analysis. The root cause is the underlying organisational or systemic failure that allowed the breach to occur. The "5 Whys" technique, developed at Toyota and adopted across incident management, asks "why" five times to drill from symptom to root cause. Each answer becomes the next "why" question.',
                },
                {
                  type: 'heading',
                  content: '5 Whys Applied to a Sample Breach',
                },
                {
                  type: 'list',
                  content: '5 Whys example',
                  items: [
                    'Symptom: Customer database exfiltrated via SQL injection',
                    'Why 1: The web form did not sanitise inputs — Why?',
                    'Why 2: The developer used a deprecated framework with no input validation — Why?',
                    'Why 3: The team had no secure coding training and no static analysis in CI — Why?',
                    'Why 4: Security was not part of the development KPIs and there was no security champion — Why?',
                    'Why 5 (root cause): Security governance had no executive ownership; the CISO reported to the CTO with no board visibility',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The root cause is rarely "the vulnerability." It is almost always a governance, process, or culture failure. Fixing the vulnerability prevents this specific breach; fixing the root cause prevents the next one. The DPDPA Board looks for evidence that root causes — not just symptoms — were addressed.',
                  calloutType: 'tip',
                },
                {
                  type: 'paragraph',
                  content:
                    'Other RCA techniques include the fishbone (Ishikawa) diagram, which categorises causes into People, Process, Technology, and Environment; the fault tree analysis, which works backward from the incident through logical AND/OR gates; and the bow-tie analysis, which maps causes on one side and consequences on the other with controls in between. Mature IR programs use all three in combination.',
                },
                {
                  type: 'example',
                  content:
                    'A Delhi-based healthtech suffered a breach via an unpatched VPN appliance. The naive fix was to patch the VPN. The 5 Whys revealed the root cause: the asset inventory did not include the VPN appliance, so vulnerability scans never touched it, because asset ownership was unclear after a reorganisation. The remedial action was not just patching — it was a complete asset management overhaul with named owners for every system, validated by quarterly scans.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Forensic Image', definition: 'A bit-for-bit copy of storage media, accompanied by a cryptographic hash to prove integrity.' },
            { term: 'Attack Timeline', definition: 'A chronological reconstruction of attacker actions built by correlating timestamps across multiple evidence sources.' },
            { term: '5 Whys', definition: 'An RCA technique that asks "why" five times to drill from symptom to systemic root cause.' },
            { term: 'Fishbone Diagram', definition: 'A visual RCA tool categorising causes into People, Process, Technology, and Environment.' },
            { term: 'Chain of Custody', definition: 'A documented record of every person who handled a piece of evidence, from collection to court presentation.' },
          ],
          references: [
            { title: 'NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response', source: 'National Institute of Standards and Technology', year: '2006' },
            { title: 'ISO/IEC 27037: Guidelines for Identification, Collection, Acquisition and Preservation of Digital Evidence', source: 'International Organization for Standardization', year: '2012' },
            { title: 'SANS FOR508: Advanced Incident Response, Threat Hunting, and Forensics', source: 'SANS Institute', year: '2024' },
          ],
        },

        // -------- LESSON 6 --------
        {
          id: 6,
          title: 'Communication Strategy',
          duration: '15 min',
          type: 'video',
          description:
            'How to communicate about a breach — internally to employees and leadership, externally to customers and partners, and to the media — without compounding legal liability or violating the DPDPA.',
          content:
            'Communication during a breach is itself a regulated activity. What you say, to whom, and when can either contain the reputational damage or amplify it — and can either support or undermine your legal position before the Data Protection Board. This lesson covers the three communication tracks every Data Fiduciary must manage during an incident: internal (employees, leadership, board), external (affected Data Principals, customers, partners), and media (press, social, analysts). We cover what to say, what NOT to say, who is authorised to speak, and how to coordinate communication with the 72-hour notification deadline so that public statements do not contradict Board filings.',
          learningObjectives: [
            'Design a breach communication plan with internal, external, and media tracks',
            'Identify authorised spokespeople and brief them before the first media enquiry',
            'Coordinate public statements with the 72-hour Board notification to avoid contradictions',
            'Avoid common communication mistakes that increase legal liability',
            'Manage social media and customer service channels during a breach',
          ],
          keyTakeaways: [
            'Three communication tracks must run in parallel: internal (employees), external (customers and partners), and media (press and public)',
            'Only the designated spokesperson — typically the CEO, DPO, or Head of Communications — should speak publicly; all others must refer enquiries',
            'Public statements must never contradict the Board notification — the Board will compare them and penalise inconsistencies',
            'Hold statements (initial, holding, full) should be drafted in advance and approved by legal before release',
            'Social media monitoring must be 24x7 during a breach — a single customer tweet can become the headline',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Three Communication Tracks',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A breach creates simultaneous communication demands from multiple audiences, each with different information needs and legal implications. Treating them as one undifferentiated "communication" is a recipe for inconsistency and liability. The discipline is to plan and run three parallel tracks, each with its own message map, spokesperson, and timing.',
                },
                {
                  type: 'heading',
                  content: 'The Three Tracks',
                },
                {
                  type: 'table',
                  headers: ['Track', 'Audience', 'Spokesperson', 'First Communication'],
                  rows: [
                    ['Internal', 'Employees, leadership, board', 'CISO + DPO', 'Within 1 hour of awareness'],
                    ['External', 'Affected Data Principals, customers, partners', 'DPO or Head of Customer Experience', 'Within 72 hours (aligned with Board)'],
                    ['Media', 'Press, social, analysts, regulators', 'CEO or designated CCO', 'After Board notification, on request'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The internal track fires first. Employees must hear about the breach from the company before they hear about it from customers or media — otherwise rumour and panic spread. A scripted all-hands message should go out within the first hour of awareness, even if details are still emerging.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'What to Say — and What Not to Say',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The cardinal rule of breach communication is: say what you know, not what you suspect. Early in an incident, facts are scarce and the temptation to speculate is strong — resist it. Statements about cause, scope, or attribution that later prove wrong will be used against you by the Board, by class-action plaintiffs, and by the media. Stick to what is verified, and explicitly say what is still under investigation.',
                },
                {
                  type: 'heading',
                  content: 'Approved and Forbidden Language',
                },
                {
                  type: 'table',
                  headers: ['Say This', 'NOT This', 'Why'],
                  rows: [
                    ['"We are investigating a security incident"', '"We were hacked by Chinese state actors"', 'Attribution before forensic confirmation is reckless'],
                    ['"We have contained the incident and are notifying affected customers"', '"Everything is under control, no action needed"', 'Premature reassurance creates liability'],
                    ['"Affecting approximately X customers (pending verification)"', '"All customer data is safe"', 'False statements are penalised'],
                    ['"We are cooperating with the Data Protection Board"', '"This is just a technical issue"', 'Minimising triggers regulator anger'],
                    ['"We recommend affected customers reset their passwords"', '"Customers should not worry"', 'Actionable advice protects Data Principals'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Never assign blame to a vendor, employee, or attacker in public statements before the forensic investigation is complete. If the forensic report later contradicts your early statement, the Board will treat the contradiction as evidence of bad faith — increasing penalty exposure.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'In 2023, an Indian fintech issued a public statement blaming "a sophisticated nation-state attack" for a breach. The forensic investigation later revealed the breach was caused by an unpatched server with default credentials — a basic hygiene failure. The contradiction was widely reported and the company faced reputational damage far beyond the breach itself. The lesson: attribute only after forensics, and even then, only if necessary.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Coordinating Communication with the Board Notification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The 72-hour Board notification under Section 8(6) creates a hard constraint on external communication. Public statements made before the Board notification cannot contradict the notification filed later — the Board compares them. The cleanest approach is to file the Board notification first, then issue public statements that mirror its content. Where public statements must be made earlier (e.g., because the breach is already public knowledge), they must be drafted with full awareness that the Board notification will follow and must be consistent.',
                },
                {
                  type: 'heading',
                  content: 'Communication Sequence',
                },
                {
                  type: 'list',
                  content: 'Recommended sequence for breach communication',
                  items: [
                    'T+0 to T+1 hour: Internal alert to incident response team; all-hands email to employees',
                    'T+1 to T+24 hours: Internal updates as investigation progresses; prepare Board notification draft',
                    'T+24 to T+72 hours: File Board notification; simultaneously begin individual notifications to affected Data Principals',
                    'T+72 hours onward: Public statement (if media is enquiring); continuous updates on a dedicated breach response page',
                    'T+1 week: Detailed post-incident communication; CEO statement; remediation plan publication',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Maintain a dedicated breach response webpage (e.g., company.in/security-incident-2025) with the latest verified information, FAQ for affected Data Principals, and contact details for the Grievance Officer. Direct all media enquiries to this page. This demonstrates transparency to the Board and reduces repetitive customer enquiries.',
                  calloutType: 'tip',
                },
                {
                  type: 'paragraph',
                  content:
                    'Social media monitoring during a breach is non-negotiable. A single customer tweet "Why did I get an OTP I didn\'t request?" can break the story before your communication team is ready. Use monitoring tools like Hootsuite, Sprinklr, or Brandwatch to catch mentions in real time, and have pre-drafted response templates ready for common scenarios. Customer service agents must be briefed on what to say (and what NOT to say) so they do not inadvertently confirm or deny the breach.',
                },
                {
                  type: 'callout',
                  content:
                    'Designate a single authorised spokesperson before any breach occurs. This is typically the CEO for major breaches, the DPO for routine ones, or a trained Head of Communications. All other employees must be instructed to refer media enquiries to this person and to say nothing on the record. Unauthorised employee statements can be attributed to the company and create liability.',
                  calloutType: 'important',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Holding Statement', definition: 'A brief, pre-drafted public statement issued in the early hours of a breach acknowledging awareness without speculating on cause or scope.' },
            { term: 'Designated Spokesperson', definition: 'The single individual authorised to speak publicly on behalf of the Data Fiduciary during a breach.' },
            { term: 'Message Map', definition: 'A structured communication document pairing each audience with approved key messages, supporting facts, and forbidden language.' },
            { term: 'Breach Response Page', definition: 'A dedicated webpage with verified breach information, FAQs, and contact details, used to centralise public communication.' },
          ],
          references: [
            { title: 'Crisis Communication for Data Breaches', source: 'International Association of Privacy Professionals (IAPP)', year: '2023' },
            { title: 'DPDPA 2023 — Section 8(6) Notification Requirements', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 7', source: 'Government of India, MeitY', year: '2025' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 2: BREACH NOTIFICATION DEEP-DIVE
    // ============================================================
    {
      id: 2,
      title: 'Breach Notification Deep-Dive',
      lessons: [
        // -------- LESSON 7 --------
        {
          id: 7,
          title: 'Section 8(6) Anatomy: What Constitutes a "Personal Data Breach"',
          duration: '17 min',
          type: 'reading',
          description:
            'A deep analysis of the legal definition of personal data breach under Section 3(5) of the DPDPA, compared with GDPR Article 4(12), and the practical tests for determining whether an incident is a notifiable breach.',
          content:
            'The notification duty under Section 8(6) is triggered by the existence of a "personal data breach" — a term defined in Section 3(5) of the DPDPA. Yet despite the apparent clarity of the definition, determining whether a specific incident qualifies is one of the most judgement-heavy tasks a DPO faces. This lesson dissects the definition element by element, contrasts it with GDPR Article 4(12), and provides a decision framework for assessing borderline cases — from lost devices to misdirected emails to insider data theft to ransomware that locks but does not exfiltrate.',
          learningObjectives: [
            'Parse the three elements of the Section 3(5) definition: unauthorised or accidental processing, personal data, compromise of confidentiality/integrity/availability',
            'Apply the definition to borderline cases (lost device, misdirected email, insider theft, ransomware)',
            'Compare the DPDPA definition with GDPR Article 4(12) and identify differences',
            'Document a breach determination decision for the post-incident record',
            'Identify the threshold for "compromise" — when does an incident cross into breach territory',
          ],
          keyTakeaways: [
            'Section 3(5) defines personal data breach as "any unauthorised or accidental processing... that compromises its confidentiality, integrity, or availability"',
            'The definition covers both intentional (hacking, insider theft) and accidental (lost laptop, misdirected email) incidents',
            'Ransomware that only encrypts data without exfiltrating is still a breach — availability is compromised',
            'An incident involving only non-personal data (e.g., aggregate statistics) is NOT a personal data breach',
            'The DPDPA definition is broader than GDPR\'s in covering integrity and availability, but narrower in not explicitly listing "loss of access" separately',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Deconstructing Section 3(5)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Section 3(5) of the DPDPA defines a personal data breach as: "any unauthorised or accidental processing of personal data that compromises its confidentiality, integrity, or availability." Three elements must be present: (1) processing of personal data, (2) the processing is unauthorised or accidental, and (3) the processing compromises confidentiality, integrity, or availability. Each element requires careful analysis.',
                },
                {
                  type: 'heading',
                  content: 'Element 1: Processing of Personal Data',
                },
                {
                  type: 'paragraph',
                  content:
                    '"Processing" is defined in Section 2(15) as "any operation or set of operations which is performed on personal data" and includes collection, recording, organisation, structuring, storage, adaptation, retrieval, use, alignment, combination, sharing, disclosure, erasure, or destruction. The definition is exhaustive. "Personal data" is defined in Section 2(11) as "any data about an individual who is identifiable by or in relation to such data." If the data involved in the incident is not personal data, or no processing occurred, Section 3(5) is not triggered.',
                },
                {
                  type: 'heading',
                  content: 'Element 2: Unauthorised or Accidental',
                },
                {
                  type: 'paragraph',
                  content:
                    'The processing must be either "unauthorised" (without the Data Fiduciary\'s consent or beyond granted authorisation — e.g., hacking, insider misuse, vendor exceeding scope) or "accidental" (unintentional — e.g., lost laptop, misdirected email, configuration error exposing a database). Authorised processing that goes as planned is not a breach, even if it produces an undesired outcome. Note that the term "accidental" is broader than "negligent" — it captures any non-intentional processing that compromises data.',
                },
                {
                  type: 'heading',
                  content: 'Element 3: Compromise of Confidentiality, Integrity, or Availability',
                },
                {
                  type: 'paragraph',
                  content:
                    'The processing must compromise at least one of: confidentiality (data was seen by unauthorised parties), integrity (data was altered, corrupted, or tampered), or availability (data was made inaccessible, deleted, or destroyed). If none of these three is compromised, there is no breach — even if the processing was unauthorised. For example, an unauthorised user accessing a database but only running SELECT queries that return zero rows (because of a filter) has not compromised confidentiality because no personal data was actually viewed.',
                },
                {
                  type: 'callout',
                  content:
                    'The three elements are conjunctive — ALL must be present. If any one element is missing, the incident is not a personal data breach and Section 8(6) notification is not triggered. Document the analysis either way — the Board may ask why notification was not made and you must be able to show the reasoned determination.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Applying the Definition to Borderline Cases',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Real-world incidents rarely fit neatly into the definition. The DPO must apply reasoned judgement, often under time pressure. The following worked examples illustrate how the three-element test applies to common borderline scenarios.',
                },
                {
                  type: 'heading',
                  content: 'Borderline Case Analysis',
                },
                {
                  type: 'table',
                  headers: ['Scenario', 'Processing?', 'Unauth/Accidental?', 'CIA Compromised?', 'Breach?'],
                  rows: [
                    ['Lost unencrypted laptop with customer PII', 'Yes (storage)', 'Accidental', 'Yes (confidentiality — data accessible)', 'YES'],
                    ['Lost encrypted laptop with customer PII (AES-256)', 'Yes (storage)', 'Accidental', 'No (encryption renders data unintelligible)', 'Likely NO — document risk assessment'],
                    ['Misdirected email with PAN card copy to wrong recipient', 'Yes (disclosure)', 'Accidental', 'Yes (confidentiality)', 'YES'],
                    ['Ransomware encrypts HR files (KYC data) — no exfiltration', 'Yes (storage)', 'Unauthorised', 'Yes (availability + integrity)', 'YES'],
                    ['Insider copies customer list to personal email', 'Yes (disclosure)', 'Unauthorised', 'Yes (confidentiality)', 'YES'],
                    ['DDoS attack takes down website — no customer data accessible', 'Yes (use)', 'Unauthorised', 'Yes (availability of service, but is personal data unavailable?)', 'Case-by-case — if personal data is in backed-up systems, may be NO'],
                    ['Vendor accesses production database for support beyond ticketed scope', 'Yes (retrieval)', 'Unauthorised', 'Yes (confidentiality)', 'YES'],
                    ['Aggregate statistics leaked (no personal data)', 'No personal data', 'N/A', 'N/A', 'NO — not a personal data breach'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The encrypted laptop case is the most contested. The DPDPA does not have an explicit "data rendered unintelligible" exemption like GDPR Recital 85. However, the Board has indicated that strong encryption (AES-256 with properly managed keys not stored on the device) generally means confidentiality is not "compromised" — the data is, in practical terms, unintelligible to the unauthorised possessor. Document the encryption, key management, and risk assessment thoroughly.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai bank lost an unencrypted laptop containing loan application data for 8,500 customers. The DPO applied the three-element test: (1) processing (storage) — yes; (2) accidental — yes; (3) confidentiality compromised — yes (data was accessible in cleartext). Conclusion: personal data breach. The 72-hour clock started the moment the loss was reported. The bank notified the Board within 48 hours and individual customers within 72 hours, and offered free credit monitoring for 12 months as remediation.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Comparison with GDPR Article 4(12)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'For organisations operating in both India and the EU, the DPDPA and GDPR definitions of personal data breach must be applied in parallel. The definitions are similar but not identical, and a single incident may be a notifiable breach under one law but not the other.',
                },
                {
                  type: 'heading',
                  content: 'DPDPA Section 3(5) vs GDPR Article 4(12)',
                },
                {
                  type: 'table',
                  headers: ['Aspect', 'DPDPA Section 3(5)', 'GDPR Article 4(12)'],
                  rows: [
                    ['Trigger', 'Unauthorised or accidental processing', 'Breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access'],
                    ['CIA triad', 'Explicitly lists confidentiality, integrity, availability', 'Implicit (destruction=availability, alteration=integrity, disclosure=confidentiality)'],
                    ['Loss of access', 'Subsumed under availability', 'Explicitly listed ("making data inaccessible")'],
                    ['Notification deadline (regulator)', '72 hours of awareness', '72 hours of awareness'],
                    ['Individual notification', 'Without undue delay (72-hour target)', 'Without undue delay (only if high risk)'],
                    ['Low-risk exemption', 'Limited Board discretion', 'Explicit — individual notification not required if high risk mitigated'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Key difference: GDPR requires individual notification only when the breach is "likely to result in a high risk to the rights and freedoms of natural persons." The DPDPA requires individual notification for ALL personal data breaches, without a high-risk threshold (though the Board may permit public notification in lieu of individual notification for large-scale cases). This makes the DPDPA stricter than the GDPR on individual notification.',
                  calloutType: 'important',
                },
                {
                  type: 'paragraph',
                  content:
                    'For multinational organisations, the practical approach is: assess the incident against both definitions, file both notifications if both apply (within their respective deadlines), and ensure individual notification meets the stricter standard (DPDPA — all affected Data Principals). Coordinating global breach response is covered in more detail in Module 18 (Cross-Border Transfers).',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Personal Data Breach', definition: 'Per DPDPA Section 3(5): unauthorised or accidental processing of personal data compromising its confidentiality, integrity, or availability.' },
            { term: 'CIA Triad', definition: 'Confidentiality, Integrity, Availability — the three properties whose compromise defines a personal data breach.' },
            { term: 'Three-Element Test', definition: 'The analytical framework for determining whether an incident is a personal data breach: (1) processing, (2) unauthorised/accidental, (3) CIA compromise.' },
            { term: 'Borderline Case', definition: 'An incident where the breach determination is not obvious and requires reasoned DPO judgement under the three-element test.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 3(5), Section 8(6)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'GDPR — Article 4(12), Article 33, Article 34', source: 'European Parliament and Council', year: '2016' },
            { title: 'Guidelines on Personal data breach notification under Regulation 2016/679', source: 'European Data Protection Board (EDPB)', year: '2019' },
          ],
        },

        // -------- LESSON 8 --------
        {
          id: 8,
          title: 'Drafting the Board Notification',
          duration: '19 min',
          type: 'interactive',
          description:
            'How to draft the notification to the Data Protection Board of India under Section 8(6) and Rule 7 of the DPDP Rules 2025, including the seven required elements, the prescribed form, and a fully worked template.',
          content:
            'The Board notification is the most scrutinised document a Data Fiduciary will produce during a breach. The Data Protection Board will use it to assess the severity of the breach, the adequacy of the response, and whether penalties are warranted. Under Rule 7 of the DPDP Rules 2025, the notification must contain seven specific elements, in the prescribed form, filed through the Board\'s online portal. This lesson dissects each of the seven elements, provides a complete worked template, and highlights common drafting errors that have led to penalty escalation in past enforcement actions. By the end, you will be able to draft a Board notification that is complete, accurate, defensible, and filed within 72 hours.',
          learningObjectives: [
            'Identify the seven required elements of a Board notification under DPDP Rules 2025 Rule 7',
            'Draft each element with the appropriate level of detail and accuracy',
            'Use the Board\'s online notification portal correctly',
            'Avoid common drafting errors that trigger penalty escalation',
            'File supplementary notifications as new information emerges',
          ],
          keyTakeaways: [
            'Rule 7 of DPDP Rules 2025 prescribes seven mandatory elements for the Board notification',
            'The notification must be filed through the Board\'s online portal within 72 hours of awareness',
            'Accuracy matters more than completeness — do not speculate to fill in gaps; use "to be confirmed" and file supplementary notifications',
            'The notification must describe remedial action taken AND planned — the Board assesses promptness under Section 8(5)',
            'Late or incomplete notification can trigger the maximum ₹250 crore penalty under Schedule Part 1',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Seven Required Elements (Rule 7 of DPDP Rules 2025)',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Rule 7 of the Digital Personal Data Protection Rules 2025 prescribes the form and content of the Board notification. Seven elements must be present. Omitting any element renders the notification deficient and may trigger a penalty even if filed within 72 hours. The following table summarises the seven elements and the level of detail expected for each.',
                },
                {
                  type: 'heading',
                  content: 'The Seven Elements',
                },
                {
                  type: 'table',
                  headers: ['#', 'Element', 'Detail Expected', 'Common Error'],
                  rows: [
                    ['1', 'Description of the breach', 'What happened, how discovered, current status', 'Vague ("security incident") without specifics'],
                    ['2', 'Number of Data Principals affected', 'Exact or best estimate with basis', 'Round numbers without basis ("approximately 1 lakh")'],
                    ['3', 'Categories of personal data compromised', 'Specific categories (name, Aadhaar, PAN, health, financial)', 'Generic ("personal information")'],
                    ['4', 'Approximate number of records', 'Record count or estimate with basis', 'No count provided'],
                    ['5', 'Likely consequences', 'Identity theft, financial fraud, reputational harm, physical safety', 'Generic ("may cause harm")'],
                    ['6', 'Measures taken or proposed', 'Containment, remediation, mitigation, individual notification status', 'Vague ("we are taking steps")'],
                    ['7', 'Contact details of Grievance Officer', 'Name, email, phone, postal address', 'Outdated or incomplete contact details'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Board has indicated that "best estimate" with stated basis is acceptable for elements 2 and 4 in the initial notification, provided supplementary notifications are filed as the investigation confirms the figures. What is NOT acceptable is silence — omitting an element is treated as failure to notify.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Worked Template: Board Notification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The following is a fully worked template for a Board notification under Section 8(6) and Rule 7. Adapt the bracketed fields to the specific incident. This template assumes the breach is a database exfiltration affecting a fictional Indian fintech.',
                },
                {
                  type: 'heading',
                  content: 'Board Notification Template',
                },
                {
                  type: 'example',
                  content:
                    'To: The Data Protection Board of India\nVia: Online portal at dpb.gov.in\nDate: [DD/MM/YYYY]\nTime of filing: [HH:MM IST]\n\nSubject: Notification of Personal Data Breach under Section 8(6) of the Digital Personal Data Protection Act 2023 and Rule 7 of the Digital Personal Data Protection Rules 2025\n\nData Fiduciary: [Full legal name, e.g., Example Fintech Private Limited]\nCIN: [UXXXXX]\nRegistered address: [Full address]\nDPO / Grievance Officer: [Name], [Email], [Phone]\n\n1. Description of the breach:\nOn [DD/MM/YYYY] at [HH:MM IST], our Security Operations Centre detected unauthorised exfiltration of customer data from our production database. Forensic analysis indicates the attacker exploited [CVE-2025-XXXX] in [Component] to gain initial access on [DD/MM/YYYY] at [HH:MM IST]. The breach was contained on [DD/MM/YYYY] at [HH:MM IST] by [containment action]. Investigation is ongoing; this notification will be supplemented as further findings emerge.\n\n2. Number of Data Principals affected:\nBest estimate: [47,318] Data Principals. Basis: forensic analysis of database query logs matched against unique customer identifiers in the affected table. This figure may be revised as analysis continues.\n\n3. Categories of personal data compromised:\n- Name\n- Email address\n- Mobile number\n- PAN number\n- Bank account number (last 4 digits only — full number not stored)\n- Transaction history (last 12 months)\nNote: Aadhaar numbers and full bank account numbers are not stored and were NOT compromised.\n\n4. Approximate number of records:\n[47,318] customer records, containing [approx 331,026] data fields in aggregate (7 fields per customer).\n\n5. Likely consequences:\n- Identity theft risk: moderate (PAN and contact details exposed; could enable targeted phishing)\n- Financial fraud risk: low (full bank account numbers not stored)\n- Reputational harm: moderate to high\n- Mitigation: customers advised to reset passwords, enable two-factor authentication, and monitor financial statements\n\n6. Measures taken or proposed:\n- Containment: compromised server isolated; attacker access revoked; all admin credentials rotated\n- Remediation: vulnerability patched (CVE-2025-XXXX); CIS Benchmark hardening applied; EDR deployed on all hosts\n- Individual notification: commenced [DD/MM/YYYY] at [HH:MM IST] via email and SMS to all affected Data Principals\n- Customer support: dedicated helpline [phone] and email [address] established; Grievance Officer available\n- Free credit monitoring: 12-month subscription offered to all affected customers\n- Coordination: CERT-In notified on [DD/MM/YYYY] at [HH:MM IST] per April 2022 Directions\n\n7. Contact details of Grievance Officer:\nName: [Full name]\nDesignation: Grievance Officer (per DPDPA Section 10(2))\nEmail: grievance@examplefintech.in\nPhone: +91 [XX XXXX XXXX]\nPostal: [Full address]\n\nDeclaration: I, [Name], [Designation] of [Data Fiduciary], declare that the information provided is true and complete to the best of my knowledge as of the time of filing. Supplementary notifications will be filed as further information becomes available.\n\nSignature: __________\nName: [Name]\nDesignation: [Designation]',
                },
                {
                  type: 'callout',
                  content:
                    'This template is illustrative. Always confirm the current prescribed form and portal URL on the Board\'s website before filing. The Board may issue updated forms or guidance — check dpb.gov.in for the latest version. Engage legal counsel to review the notification before filing.',
                  calloutType: 'note',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Common Drafting Errors and How to Avoid Them',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Enforcement experience — both under the DPDPA and comparable regimes like the GDPR — reveals a set of recurring drafting errors that turn an otherwise compliant notification into a penalty trigger. The following are the most common, drawn from public Board orders and EDPB guidance.',
                },
                {
                  type: 'heading',
                  content: 'Top Drafting Errors',
                },
                {
                  type: 'list',
                  content: 'Errors that trigger penalty escalation',
                  items: [
                    'Vague breach description: "security incident" without specifics — Board treats as deficient',
                    'Round numbers without basis: "approximately 1 lakh" with no methodology — Board may conclude insufficient investigation',
                    'Conflating "affected" with "compromised": counting all customers in a database when only a subset was exfiltrated',
                    'Omitting remedial action: listing only what was done, not what is planned — Board sees as incomplete',
                    'Outdated Grievance Officer details: phone disconnected, email bouncing — Board treats as failure to provide effective remedy',
                    'Speculative attribution: naming an attacker or cause before forensic confirmation — later contradiction triggers bad-faith finding',
                    'Missing supplementary notifications: initial filing never updated as investigation confirms scope — Board treats initial as final',
                    'Late filing due to perfectionism: waiting for "complete" information past 72 hours — Board imposes maximum penalty',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The single most damaging error is late filing driven by perfectionism. The Board has repeatedly stated: "An incomplete notification filed within 72 hours is preferable to a complete notification filed late." File what you know within 72 hours; supplement as you learn more. Perfectionism is the enemy of compliance.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'A Chennai-based SaaS company delayed its Board notification by 18 hours to confirm the exact number of affected users. The Board imposed a penalty of ₹50 crore for late notification, noting that an initial notification with "approximately 50,000 users, to be confirmed" would have been compliant. The company\'s effort at accuracy was treated as a failure to comply with the deadline. The lesson: file on time, even if imperfect.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Board Notification', definition: 'The formal notice to the Data Protection Board of a personal data breach, required under DPDPA Section 8(6) and Rule 7 of DPDP Rules 2025.' },
            { term: 'Supplementary Notification', definition: 'A follow-up filing providing additional or updated information discovered after the initial 72-hour notification.' },
            { term: 'Prescribed Form', definition: 'The standardised format specified by the Board for breach notifications, available on the Board\'s online portal.' },
            { term: 'Grievance Officer', definition: 'The individual designated under DPDPA Section 10(2) to receive and resolve Data Principal complaints; contact details must appear in the Board notification.' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 7', source: 'Government of India, MeitY', year: '2025' },
            { title: 'DPDPA 2023 — Section 8(6), Section 10(2), Schedule Part 1', source: 'Government of India, MeitY', year: '2023' },
            { title: 'EDPB Guidelines 9/2022 on personal data breach notification under GDPR', source: 'European Data Protection Board', year: '2022' },
          ],
        },

        // -------- LESSON 9 --------
        {
          id: 9,
          title: 'Drafting the Individual Notification',
          duration: '16 min',
          type: 'interactive',
          description:
            'How to write the notification sent to each affected Data Principal — in plain language, through appropriate channels, with actionable guidance, and meeting the Rule 7 content requirements.',
          content:
            'While the Board notification informs the regulator, the individual notification informs the people actually harmed — the Data Principals whose data was compromised. The DPDPA is strict: every affected Data Principal must be notified, without undue delay, in plain language, through a channel they will actually see. This notification is not a legal brief; it is a communication that must be understood by a non-technical reader who may be anxious, angry, or frightened. This lesson covers the Rule 7 content requirements for individual notification, the principles of plain-language breach communication, multi-channel delivery strategy (email, SMS, in-app, postal), and a fully worked template that balances legal completeness with human readability.',
          learningObjectives: [
            'Identify the content requirements for individual notification under Rule 7',
            'Write breach notifications in plain language (Class 8 readability)',
            'Select appropriate delivery channels based on Data Principal preferences and breach severity',
            'Provide actionable guidance that Data Principals can implement immediately',
            'Design a notification that balances legal completeness with human empathy',
          ],
          keyTakeaways: [
            'Individual notification must be in plain language — target Class 8 readability, not legal jargon',
            'Required content: what happened, what data, what we are doing, what you should do, who to contact',
            'Multi-channel delivery (email + SMS) increases reach; SMS alone is insufficient for the detailed content',
            'Provide specific, actionable guidance — not "be vigilant" but "reset your password at [URL]"',
            'Notification must be free of charge and accessible to persons with disabilities',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Content Requirements Under Rule 7',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Rule 7 of the DPDP Rules 2025 specifies the content of the individual notification. While the elements overlap with the Board notification, the framing differs — the individual notification is communication, not filing. Each element must be translated from technical-legal language into plain, actionable terms that a Data Principal can understand and act on.',
                },
                {
                  type: 'heading',
                  content: 'Required Content for Individual Notification',
                },
                {
                  type: 'list',
                  content: 'Mandatory content per Rule 7(2) of DPDP Rules 2025',
                  items: [
                    'What happened: a brief, honest description of the breach — no jargon, no minimisation',
                    'When it happened and when it was discovered',
                    'What personal data of yours was involved: specific categories, not "personal information"',
                    'What we have done: containment and remediation actions in plain terms',
                    'What we are doing: ongoing investigation, individual notification, regulatory notification',
                    'What you should do: specific actions (reset password, monitor statements, place fraud alert)',
                    'Who to contact: Grievance Officer name, email, phone, postal address',
                    'What support we are providing: credit monitoring, identity protection, dedicated helpline',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The notification must be in plain language. The DPDPA Rule 7 and the Board\'s guidance require that the average Data Principal — not a lawyer or security expert — be able to understand the notification and act on it. Target Class 8 readability (approximately 13-14 year old reading level). Avoid "exfiltration," "unauthorised access," "compromise" — use "stolen," "viewed by someone who should not have," "put at risk."',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Multi-Channel Delivery Strategy',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The notification must reach the Data Principal through a channel they will actually see and act on. For most Indian consumers, this means a combination of email and SMS — email for the detailed notification, SMS for the alert with a link. For high-severity breaches involving financial or identity data, a follow-up phone call from customer support may be warranted. For Data Principals without email (still common in rural India), SMS alone is required, with a follow-up postal letter for the most sensitive cases.',
                },
                {
                  type: 'heading',
                  content: 'Channel Selection Matrix',
                },
                {
                  type: 'table',
                  headers: ['Severity', 'Primary', 'Secondary', 'Tertiary'],
                  rows: [
                    ['Low (no sensitive data)', 'Email', 'In-app notice', 'None'],
                    ['Medium (contact + financial)', 'Email', 'SMS with link', 'Customer support page'],
                    ['High (Aadhaar, health, biometric)', 'Email', 'SMS', 'Phone call + postal letter'],
                    ['Very high (life-safety)', 'Email', 'SMS', 'Phone call + postal + press notice'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Accessibility: notifications must be available in multiple Indian languages for Data Principals who do not read English. The DPDPA\'s emphasis on accessibility under Section 10 ( Significant Data Fiduciary obligations) and the Rights of Persons with Disabilities Act 2016 require that notifications be screen-reader compatible and available in audio format on request. Plain text emails (not image-heavy HTML) are more accessible and more likely to pass spam filters.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'After a 2024 breach affecting 4.2 million customers, an Indian telecom operator sent notifications in 12 languages: Hindi, English, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Bengali, Punjabi, Assamese, and Odia. Notifications were delivered via email (HTML and plain text), SMS with short link, in-app banner, and postal letter to high-severity cases. Customer support was augmented with 500 additional agents for two weeks. The multi-channel approach reached 96% of affected customers within 72 hours; the remaining 4% were contacted via follow-up SMS and postal mail.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Worked Template: Individual Notification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The following is a template for an individual notification email. Adapt to the specific incident. The template balances the eight Rule 7 content requirements with human readability — it can be understood by a Class 8 student and acted on within minutes.',
                },
                {
                  type: 'heading',
                  content: 'Individual Notification Template',
                },
                {
                  type: 'example',
                  content:
                    'Subject: Important: Security Incident Affecting Your Account — Action Required\n\nDear [Customer Name],\n\nWe are writing to inform you about a security incident that may have affected your personal data. We are sorry this happened and want to explain what occurred, what we are doing, and what you should do.\n\nWhat happened:\nOn [DD/MM/YYYY], we discovered that an unauthorised person accessed one of our databases. They may have viewed some of your personal information between [DD/MM/YYYY] and [DD/MM/YYYY]. We contained the incident on [DD/MM/YYYY] and engaged forensic experts to investigate.\n\nWhat information was involved:\nThe following information of yours may have been viewed:\n- Your name\n- Your email address\n- Your mobile number\n- Your PAN number\n- Your transaction history from the last 12 months\n\nImportant: Your password, your Aadhaar number, and your full bank account number were NOT accessed. We do not store your full bank account number or card details.\n\nWhat we are doing:\n- We have contained the incident and the unauthorised access has been stopped.\n- We have notified the Data Protection Board of India as required by law.\n- We are working with cybersecurity experts and law enforcement.\n- We are offering you 12 months of free credit monitoring through [Partner].\n\nWhat you should do:\n1. Reset your password at [URL] — even though passwords were not accessed, this is a precaution.\n2. Enable two-factor authentication in your account settings.\n3. Watch for phishing emails or SMS pretending to be from us. We will never ask for your password or OTP.\n4. Monitor your bank statements for the next 90 days. Report any unfamiliar transactions to your bank immediately.\n5. If you would like free credit monitoring, activate it at [URL] with code [CODE].\n\nWho to contact:\nIf you have questions, our Grievance Officer is available to help:\n- Name: [Name]\n- Email: grievance@examplefintech.in\n- Phone: [toll-free]\n- Postal: [address]\n\nWe deeply regret this incident and the concern it causes you. We are committed to protecting your data and have taken steps to prevent this from happening again.\n\nSincerely,\n[CEO Name]\nChief Executive Officer\n[Company Name]',
                },
                {
                  type: 'callout',
                  content:
                    'Notice the structure: empathy first ("We are sorry"), then facts in plain language, then specific actions, then contact. Avoid legal disclaimers, blame-shifting, or minimisation. The Data Principal is the victim — treat them with respect and provide genuine support, not corporate deflection.',
                  calloutType: 'tip',
                },
                {
                  type: 'paragraph',
                  content:
                    'The SMS version should be a short alert with a link to the full notification: "Security alert from [Company]: We have detected a security incident affecting your account. Please visit [URL] for important information and required actions. Do not reply to this SMS. For help call [toll-free]." Keep SMS under 160 characters where possible, or use the modern concatenated SMS standard.',
                },
                {
                  type: 'callout',
                  content:
                    'Test the notification before mass sending. Send to a small internal group, check rendering in Gmail, Outlook, and mobile clients, verify the readability score (Flesch Reading Ease > 60, Flesch-Kincaid Grade Level < 9), and confirm all links work. A broken link in a breach notification causes panic and customer service overload.',
                  calloutType: 'warning',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Individual Notification', definition: 'The communication sent to each affected Data Principal describing the breach and required actions, per DPDPA Section 8(6) and Rule 7.' },
            { term: 'Plain Language', definition: 'Writing at a Class 8 (13-14 year old) reading level, avoiding jargon and technical terms, so the average reader can understand and act.' },
            { term: 'Multi-Channel Delivery', definition: 'Sending breach notifications through multiple channels (email, SMS, in-app, postal) to maximise reach across diverse Data Principal populations.' },
            { term: 'Actionable Guidance', definition: 'Specific, concrete steps a Data Principal can take immediately (reset password, place fraud alert) rather than vague advice ("be vigilant").' },
          ],
          references: [
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 7(2)', source: 'Government of India, MeitY', year: '2025' },
            { title: 'DPDPA 2023 — Section 8(6)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Plain Language Action and Information Network (PLAIN) Guidelines', source: 'U.S. federal plain language guidelines (adaptable)', year: '2024' },
            { title: 'Rights of Persons with Disabilities Act 2016', source: 'Government of India', year: '2016' },
          ],
        },

        // -------- LESSON 10 --------
        {
          id: 10,
          title: 'When NOT to Notify (Low-Risk Exemptions)',
          duration: '14 min',
          type: 'reading',
          description:
            'Analysis of the limited circumstances under which a Data Fiduciary may determine that individual notification — or in rare cases Board notification — is not required, and the documentation discipline that protects against later enforcement challenge.',
          content:
            'The DPDPA is strict: every personal data breach triggers Board notification under Section 8(6), and individual notification follows for every affected Data Principal. Unlike the GDPR, there is no broad "low risk" exemption that lets the Data Fiduciary decide not to notify. However, the Board has indicated, through early guidance, that certain narrow situations may permit deferral or substitution of individual notification — and very rarely, may treat an incident as not meeting the Section 3(5) threshold at all. This lesson examines these narrow circumstances, the documentation discipline required to support a "no notification" determination, and the significant risks of getting it wrong. The default is always: when in doubt, notify.',
          learningObjectives: [
            'Identify the narrow circumstances that may justify deferring or substituting individual notification',
            'Determine when an incident does not meet the Section 3(5) breach threshold',
            'Document the determination with sufficient rigour to withstand Board scrutiny',
            'Apply the "when in doubt, notify" principle correctly',
            'Recognise the penalty exposure for wrongful non-notification',
          ],
          keyTakeaways: [
            'The DPDPA does NOT have a broad "low risk" exemption for individual notification — unlike GDPR Article 34(3)',
            'Strong encryption (AES-256 with separately managed keys) may mean confidentiality was not "compromised" — but document the analysis',
            'Data that was already publicly available may not require individual notification — but Board notification is still required',
            'A "no notification" determination must be documented with the same rigour as a notification — the Board will examine the reasoning',
            'Wrongful non-notification carries the same ₹250 crore maximum penalty as wrongful late notification',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The DPDPA\'s Strict Approach vs GDPR\'s Risk-Based Approach',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A frequent misconception is that the DPDPA, like the GDPR, allows the Data Fiduciary to skip individual notification when the breach is "unlikely to result in a high risk to the rights and freedoms of natural persons." This is GDPR Article 34(3) — and it does NOT exist in the DPDPA. Under the DPDPA, every personal data breach triggers BOTH Board notification (Section 8(6)) AND individual notification (also Section 8(6)) — there is no high-risk threshold for individual notification.',
                },
                {
                  type: 'heading',
                  content: 'DPDPA vs GDPR on Individual Notification',
                },
                {
                  type: 'table',
                  headers: ['Trigger', 'DPDPA Section 8(6)', 'GDPR Article 34'],
                  rows: [
                    ['Board / Supervisory Authority notification', 'Always (within 72 hours)', 'Always (within 72 hours)'],
                    ['Individual notification', 'Always (without undue delay)', 'Only if "high risk" to rights and freedoms'],
                    ['Low-risk exemption', 'None explicit — Board discretion', 'Yes — if risk mitigated, or notification involves disproportionate effort'],
                    ['Public notification in lieu of individual', 'Permitted by Board for large-scale', 'Permitted if individual notification involves disproportionate effort'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'For multinationals: if you are breached and operate in both India and the EU, you must apply the stricter standard — which is the DPDPA. Notify all affected Indian Data Principals even if the GDPR would not require individual notification. Do NOT apply the GDPR\'s risk threshold to Indian Data Principals.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Narrow Circumstances for Deferral or Substitution',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'While there is no broad low-risk exemption, the Board\'s guidance and the structure of Section 8(6) recognise a few narrow situations where individual notification may be deferred, substituted with public notification, or — in the rarest cases — determined not to be required. Each requires documented analysis.',
                },
                {
                  type: 'heading',
                  content: 'Narrow Circumstances',
                },
                {
                  type: 'list',
                  content: 'Circumstances that may justify deferral or substitution of individual notification',
                  items: [
                    'Strong encryption: data was encrypted with AES-256 (or equivalent) and the keys were not compromised (e.g., stored separately in a Hardware Security Module not accessed) — confidentiality may not be "compromised" in practical terms. Document the encryption, key management, and the reasoned conclusion. Board notification may still be required if there is any residual risk.',
                    'Already-public data: the compromised data was already lawfully in the public domain (e.g., a public company directory) — individual notification may not add value. Document what was already public and what (if anything) was newly exposed.',
                    'Impracticability at scale: where the number of affected Data Principals is so large (e.g., 100 million+) that individual contact is genuinely impracticable, the Board may permit a public notification in lieu. Apply to the Board for this determination; do not assume it.',
                    'Active investigation tipping-off: where individual notification would tip off an active attacker and compromise law enforcement action, notification may be deferred briefly — but only with law enforcement concurrence and only for as long as the tipping-off risk persists.',
                    'No personal data: if forensic analysis confirms no personal data was actually accessed (e.g., attacker only ran SELECT queries that returned zero rows due to filters), the Section 3(5) threshold may not be met. Document the forensic analysis.',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Each of these circumstances requires a documented determination by the DPO (or equivalent) with the reasoning, evidence, and risk assessment. The Board treats undocumented "we decided not to notify" as wrongful non-notification — which carries the same ₹250 crore maximum penalty as late notification. Document, document, document.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'A Pune SaaS company lost an encrypted laptop (BitLocker AES-256, keys stored in Azure Key Vault with separate authentication). The DPO applied the analysis: (1) processing — yes; (2) accidental — yes; (3) confidentiality compromised — NO, because the encryption renders the data unintelligible to the unauthorised possessor and the keys are not accessible from the device. Documented determination: not a personal data breach under Section 3(5). The determination, with the forensic and cryptographic analysis, was filed with the Board voluntarily. The Board accepted the determination. Had the laptop been unencrypted, the same incident would have triggered full Section 8(6) notification.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Documentation Discipline and Penalty Exposure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The discipline that protects a Data Fiduciary in a "no notification" determination is documentation. The Board will, in any subsequent inquiry, ask three questions: (1) What was the incident? (2) Why did you conclude notification was not required? (3) What evidence supports that conclusion? If you cannot answer all three with documented analysis, the determination will be treated as wrongful non-notification.',
                },
                {
                  type: 'heading',
                  content: 'Required Documentation for a "No Notification" Determination',
                },
                {
                  type: 'list',
                  content: 'Documentation elements for a defensible no-notification determination',
                  items: [
                    'Incident description: what happened, when, how discovered',
                    'Three-element analysis: processing, unauthorised/accidental, CIA compromise — applied to the specific facts',
                    'Forensic evidence: logs, EDR captures, memory analysis supporting the conclusion',
                    'Cryptographic analysis (if encryption-based): algorithm, key length, key management, evidence keys not compromised',
                    'Risk assessment: residual risk to Data Principals, likelihood and impact',
                    'DPO determination: signed, dated, with reasoning',
                    'Legal review: counsel opinion supporting the determination',
                    'Voluntary filing with the Board: even if notification is not required, a brief voluntary filing creates a record and demonstrates good faith',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Penalty exposure: Under Schedule Part 1 of the DPDPA, failure to notify a personal data breach carries a maximum penalty of ₹250 crore. A wrongful "no notification" determination is treated as failure to notify. The cost of an unnecessary notification (some reputational impact, customer service load) is far lower than the cost of a wrongful non-notification (regulatory penalty, litigation, severe reputational damage). The "when in doubt, notify" principle is therefore both legally and economically sound.',
                  calloutType: 'danger',
                },
                {
                  type: 'paragraph',
                  content:
                    'The voluntary filing practice — submitting a brief notice to the Board even when the determination is "not a notifiable breach" — is increasingly common among mature Data Fiduciaries. It costs little, creates a record, and demonstrates the transparency the Board rewards. Several Data Fiduciaries have publicly committed to voluntary filing for all incidents meeting the Section 3(5) threshold, regardless of whether notification is strictly required.',
                },
                {
                  type: 'callout',
                  content:
                    'The single best protection against wrongful non-notification is a culture of "when in doubt, notify." Train DPOs, CISOs, and IR teams to default to notification; escalate determinations to senior legal counsel; document every determination; and err on the side of transparency. The Board has not penalised a Data Fiduciary for over-notification; it has penalised many for under-notification.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'No-Notification Determination', definition: 'A documented DPO conclusion that an incident does not require Board or individual notification under Section 8(6), supported by forensic and legal analysis.' },
            { term: 'Voluntary Filing', definition: 'A brief notice to the Board submitted even when notification is not strictly required, to create a record and demonstrate good faith.' },
            { term: 'Tipping-Off Risk', definition: 'The risk that individual notification would alert an active attacker and compromise law enforcement action — a narrow ground for deferral.' },
            { term: 'When-in-Doubt-Notify Principle', definition: 'The default posture that notification is preferred over non-notification when the determination is uncertain; reflects the asymmetric penalty exposure.' },
          ],
          references: [
            { title: 'DPDPA 2023 — Section 3(5), Section 8(6), Schedule Part 1', source: 'Government of India, MeitY', year: '2023' },
            { title: 'Digital Personal Data Protection Rules 2025 — Rule 7', source: 'Government of India, MeitY', year: '2025' },
            { title: 'GDPR Article 34(3) — Communication of a personal data breach to the data subject', source: 'European Parliament and Council', year: '2016' },
            { title: 'EDPB Guidelines 9/2022 on personal data breach notification under GDPR', source: 'European Data Protection Board', year: '2022' },
          ],
        },
      ],
    },

    // ============================================================
    // CHAPTER 3: BUILDING AN IR PROGRAM
    // ============================================================
    {
      id: 3,
      title: 'Building an IR Program',
      lessons: [
        // -------- LESSON 11 --------
        {
          id: 11,
          title: 'Building an Incident Response Team',
          duration: '17 min',
          type: 'video',
          description:
            'How to structure an Incident Response Team with clear roles — Incident Lead, Technical, Legal, Communications — and the qualifications, authority, and training each role requires under DPDPA expectations.',
          content:
            'An Incident Response Team (IRT) is not assembled during a breach — it is assembled before one. The DPDPA\'s 72-hour notification deadline leaves no time to figure out who does what. This lesson covers the four core IRT roles — Incident Lead, Technical Lead, Legal Counsel, and Communications Lead — plus the supporting roles (Executive Sponsor, DPO, HR, Vendor Liaison) that activate depending on incident type. We cover qualifications, authority levels, escalation paths, training requirements, and the on-call rotation that ensures 24x7 coverage. A well-structured IRT is the difference between a breach handled in 72 hours and one that becomes a ₹250 crore penalty case.',
          learningObjectives: [
            'Design an IRT structure with four core roles and supporting roles',
            'Define qualifications, authority, and decision-making scope for each role',
            'Establish a 24x7 on-call rotation with clear escalation paths',
            'Identify training and certification requirements (SANS GCIH, IAPP CIPM, ISO 27035)',
            'Coordinate the IRT with the DPO function under DPDPA Section 10',
          ],
          keyTakeaways: [
            'Four core IRT roles: Incident Lead (coordination), Technical Lead (containment/forensics), Legal Counsel (notification strategy), Communications Lead (internal/external/media)',
            'The Incident Lead has authority to declare an incident and activate the IRT — this authority must be pre-delegated by the CEO',
            'Legal Counsel reviews all Board notifications and public statements before release',
            'Significant Data Fiduciaries under Section 10 must integrate the DPO into the IRT — the DPO has statutory responsibility for Section 8(6) compliance',
            'The IRT must be trained together through tabletop exercises — a team that has never practised will fail under pressure',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The Four Core IRT Roles',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A mature IRT has four core roles that activate for every significant incident. Each role has defined responsibilities, authority, and required qualifications. Supporting roles (Executive Sponsor, DPO, HR, Vendor Liaison) activate based on incident type. The four-core-role model is based on SANS, NIST SP 800-61, and ISO/IEC 27035 — the global standards for incident response.',
                },
                {
                  type: 'heading',
                  content: 'Core Roles and Responsibilities',
                },
                {
                  type: 'table',
                  headers: ['Role', 'Responsibility', 'Authority', 'Typical Qualifications'],
                  rows: [
                    ['Incident Lead', 'Overall coordination; declares incident; manages IRT; reports to Executive Sponsor', 'Declare incident; activate IRT; approve containment actions', 'SANS GCIH, ISO 27035 Lead Implementer, 5+ years IR experience'],
                    ['Technical Lead', 'Technical containment, forensics, recovery', 'Isolate systems; preserve evidence; direct technical team', 'SANS GCIH / GCFA, CISSP, EDR and SIEM expertise'],
                    ['Legal Counsel', 'Notification strategy; regulator interface; privilege management', 'Approve Board notification; engage external counsel; direct legal hold', 'Indian bar admission; data protection law expertise; IAPP CIPM or CIPP/E'],
                    ['Communications Lead', 'Internal, external, media communication', 'Approve public statements; manage social media', 'Corporate comms background; crisis communication training'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The Incident Lead role must be pre-delegated in writing by the CEO. The authority to declare an incident, activate the IRT, and approve containment actions cannot be sought during an incident — it must be granted in advance. The delegation should specify who acts as Incident Lead during off-hours, weekends, and the Incident Lead\'s absence.',
                  calloutType: 'important',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Supporting Roles and the DPO Integration',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The four core roles are activated for every significant incident. Supporting roles activate based on incident type and organisational structure. The most important supporting role under the DPDPA is the Data Protection Officer (DPO), who has statutory responsibility for Section 8(6) compliance and must be integrated into the IRT for all incidents involving personal data.',
                },
                {
                  type: 'heading',
                  content: 'Supporting Roles',
                },
                {
                  type: 'list',
                  content: 'Supporting roles that activate based on incident type',
                  items: [
                    'Executive Sponsor (CEO or COO): approves major decisions (e.g., paying ransom, taking service offline); communicates to the Board',
                    'Data Protection Officer (DPO): owns Section 8(6) compliance; reviews Board notification; coordinates with Grievance Officer for individual notification',
                    'HR Lead: activates for insider incidents; manages employee interviews, disciplinary action, and law enforcement liaison',
                    'Vendor Liaison: activates for third-party breaches; coordinates with the vendor\'s IRT; manages contractual notification obligations',
                    'Customer Support Lead: scales customer service capacity; briefs agents on what to say; manages the breach response page',
                    'Physical Security Lead: activates for incidents with physical element (lost device, office break-in); coordinates with facility security and law enforcement',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Significant Data Fiduciaries under DPDPA Section 10 must appoint a DPO (per Section 10(2)(a) and Rule 4 of DPDP Rules 2025). The DPO must be integrated into the IRT — not merely informed after the fact. The DPO has statutory responsibility for ensuring the 72-hour Board notification is filed correctly; excluding the DPO from the IRT is a Section 10 compliance failure.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'An Indian healthtech Significant Data Fiduciary structured its IRT with the CISO as Incident Lead, the Head of SecOps as Technical Lead, the General Counsel as Legal Counsel, the Head of Communications as Comms Lead, and the DPO as a permanent member of every incident call. The CEO acted as Executive Sponsor for Severity 1 incidents. The IRT met monthly for tabletop exercises and quarterly for full-scale simulations. In their first real breach (a ransomware attack affecting 18,000 patient records), the IRT contained the incident in 4 hours and filed the Board notification within 36 hours — well within the 72-hour deadline.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'On-Call Rotation, Training, and Certification',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A breach can occur at any hour. The IRT must therefore be available 24x7 through an on-call rotation. The standard model is a primary on-call (handles the first response) and a secondary on-call (escalates if primary is unreachable). The rotation should be weekly to provide continuity, with overlap at handover. Each on-call member must have the authority, tools, and access to declare an incident and activate the IRT without seeking further approval.',
                },
                {
                  type: 'heading',
                  content: 'Training and Certification Requirements',
                },
                {
                  type: 'list',
                  content: 'Recommended certifications for IRT members',
                  items: [
                    'Incident Lead: SANS GCIH (GIAC Certified Incident Handler), ISO 27035 Lead Implementer',
                    'Technical Lead: SANS GCIH + GCFA (GIAC Certified Forensic Analyst), CISSP',
                    'Legal Counsel: IAPP CIPM (Certified Information Privacy Manager) or CIPP/E, Indian bar admission with data protection expertise',
                    'Communications Lead: Crisis communication training (e.g., ICMF, Edelman crisis training)',
                    'DPO: IAPP CIPM + CIPP/E or CIPP/US, deep DPDPA expertise, board-level communication skills',
                    'All members: Annual DPDPA refresher, tabletop exercise participation (minimum 2 per year)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Training the IRT is not a one-time event. Schedule quarterly tabletop exercises (Lesson 13 covers these in detail) and an annual full-scale simulation. The team that has never practised together will fail under pressure — roles blur, decisions are delayed, and the 72-hour deadline slips. The team that practises quarterly handles real incidents with calm coordination.',
                  calloutType: 'tip',
                },
                {
                  type: 'paragraph',
                  content:
                    'The IRT should maintain a "war room" — physical or virtual — that activates during Severity 1 and 2 incidents. The war room has dedicated communication channels (Slack/Teams), real-time dashboards (SIEM, EDR, status boards), and clear escalation paths. Pre-positioned tooling (forensic kits, communication templates, Board notification draft) reduces time-to-action by hours. The investment in IRT readiness pays for itself in the first avoided penalty.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Incident Response Team (IRT)', definition: 'The cross-functional team that responds to security incidents, with defined roles, authority, and on-call rotation.' },
            { term: 'Incident Lead', definition: 'The IRT member with overall coordination authority, including the power to declare an incident and approve containment actions.' },
            { term: 'Executive Sponsor', definition: 'The senior executive (typically CEO or COO) who approves major incident decisions and communicates to the Board.' },
            { term: 'War Room', definition: 'A physical or virtual command centre with dedicated communication, dashboards, and tooling, activated for Severity 1 and 2 incidents.' },
            { term: 'SANS GCIH', definition: 'GIAC Certified Incident Handler — the leading global certification for incident response professionals.' },
          ],
          references: [
            { title: 'NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide', source: 'National Institute of Standards and Technology', year: '2012' },
            { title: 'ISO/IEC 27035: Information security incident management', source: 'International Organization for Standardization', year: '2023' },
            { title: 'DPDPA 2023 — Section 10 (Significant Data Fiduciaries)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'SANS Incident Response Team Development', source: 'SANS Institute', year: '2024' },
          ],
        },

        // -------- LESSON 12 --------
        {
          id: 12,
          title: 'IR Playbooks for Common Scenarios',
          duration: '19 min',
          type: 'reading',
          description:
            'Pre-written, scenario-specific playbooks for the four most common breach types in India: ransomware, insider data theft, vendor breach, and lost device — with step-by-step actions, decision points, and DPDPA notification triggers.',
          content:
            'A playbook is a pre-written, scenario-specific runbook that tells the IRT exactly what to do for a given type of incident. Playbooks save time, ensure consistency, and prevent the omission of critical steps under pressure. This lesson provides four playbooks covering the most common breach scenarios faced by Indian organisations: ransomware, insider data theft, vendor (third-party) breach, and lost/stolen device. Each playbook covers detection, containment, eradication, recovery, and notification — with specific DPDPA Section 8(6) triggers and timeline references. These playbooks can be adapted directly into your organisation\'s IR plan.',
          learningObjectives: [
            'Apply a structured playbook approach to common breach scenarios',
            'Execute the ransomware playbook: isolation, decryption assessment, recovery, notification',
            'Execute the insider data theft playbook: investigation, evidence preservation, HR coordination',
            'Execute the vendor breach playbook: contractual notification, joint investigation, individual notification',
            'Execute the lost device playbook: encryption verification, risk assessment, conditional notification',
          ],
          keyTakeaways: [
            'A playbook turns incident response from improvisation into execution — every step is pre-decided',
            'Ransomware playbook priority: isolate, preserve evidence, assess decryptability, then decide on payment with law enforcement concurrence',
            'Insider playbook priority: preserve evidence covertly, coordinate with HR and Legal, manage termination carefully to prevent data destruction',
            'Vendor playbook priority: invoke contractual notification clauses, demand forensic access, prepare for joint or parallel individual notification',
            'Lost device playbook priority: verify encryption status — if strongly encrypted and keys secure, may not be a notifiable breach',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Playbook 1: Ransomware',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Ransomware is the most disruptive breach scenario — encryption of critical systems, potential data exfiltration, and business downtime measured in days or weeks. The DPDPA treats ransomware as a personal data breach if personal data is encrypted (availability compromise) or exfiltrated (confidentiality compromise). This playbook covers the first 72 hours.',
                },
                {
                  type: 'heading',
                  content: 'Ransomware Playbook (0-72 hours)',
                },
                {
                  type: 'list',
                  content: 'Step-by-step ransomware response',
                  items: [
                    'Detection (T+0 to T+30 min): EDR alerts on bulk file encryption; SOC Tier 1 confirms ransomware pattern',
                    'Triage (T+30 to T+60 min): Incident Lead declares Severity 1; activates IRT; alerts Executive Sponsor',
                    'Containment (T+1 to T+2 hours): isolate affected hosts (disable switch ports, do NOT power off); block C2 domains at firewall and DNS; disable compromised accounts',
                    'Evidence preservation (T+2 to T+4 hours): capture memory and disk images; export SIEM and EDR logs to write-once storage; document chain of custody',
                    'Impact assessment (T+4 to T+24 hours): identify encrypted systems; identify exfiltrated data (check network captures for large outbound transfers); assess data categories and Data Principal counts',
                    'Notification determination (T+24 to T+48 hours): apply three-element test — almost always a personal data breach; draft Board notification',
                    'Board notification (T+48 to T+72 hours): file via Board portal with seven required elements; begin individual notification preparation',
                    'Recovery (T+72 hours onward): restore from validated backups; apply patches; phased service restoration per Lesson 3',
                    'Payment decision: consult Legal and law enforcement; default is DO NOT PAY; if paying, ensure recipient is not a sanctioned entity',
                    'External coordination: CERT-In notification within 6 hours; sectoral regulator (RBI / IRDAI / SEBI) per sectoral rules',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The "do not pay" default reflects both legal and practical considerations. Legally, paying ransom to a sanctioned entity violates Indian sanctions and the Prevention of Money Laundering Act. Practically, paying does not guarantee decryption (research shows ~35% of paying victims do not recover all data) and marks the organisation as a "payer" for future attacks. The RBI has explicitly discouraged payment by regulated entities.',
                  calloutType: 'danger',
                },
                {
                  type: 'example',
                  content:
                    'In 2023, an Indian hospital suffered a ransomware attack encrypting patient records and demand ₹5 crore. The IRT isolated affected systems within 90 minutes, determined exfiltration had occurred (confidentiality compromise — 240,000 patient records), and filed the Board notification within 60 hours. The hospital did not pay the ransom; recovery from backups took 11 days. The Board reviewed the response and found the hospital had met its Section 8(6) obligations. Penalty: none. The cost of recovery (₹4.2 crore) was less than the ransom demand.',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Playbook 2: Insider Data Theft',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Insider data theft — an employee, contractor, or vendor with legitimate access copying data for unauthorised purposes — is one of the hardest breaches to detect and handle. Detection often comes from data loss prevention (DLP) alerts, exit interviews, or third-party reports. The playbook must balance investigation (covert, to preserve evidence) with the risk of the insider destroying evidence if alerted. HR and Legal coordination is essential.',
                },
                {
                  type: 'heading',
                  content: 'Insider Data Theft Playbook',
                },
                {
                  type: 'list',
                  content: 'Step-by-step insider data theft response',
                  items: [
                    'Detection: DLP alert on bulk download, copy to USB, or upload to personal cloud; or tip from colleague or vendor',
                    'Covert investigation: do NOT confront the insider; quietly collect EDR logs, email records, file access logs, and badge access data',
                    'Triage: Incident Lead + Legal + HR determine if criminal conduct (escalate to law enforcement) or policy violation',
                    'Containment options: (a) disable account covertly if evidence is sufficient, (b) monitor and gather more evidence, (c) restrict access privileges to limit further exfiltration',
                    'Evidence preservation: capture forensic image of insider\'s workstation and home drives before any HR action; export relevant logs',
                    'HR and Legal coordination: plan termination to prevent evidence destruction; have security present at termination; recover company assets immediately',
                    'Impact assessment: identify what data was accessed and copied; identify affected Data Principals',
                    'Notification determination: if personal data was exfiltrated, almost always a notifiable breach',
                    'Board and individual notification: file within 72 hours; coordinate with HR and Legal on what can be disclosed about the insider',
                    'Law enforcement: if criminal conduct, file FIR with cybercrime cell; preserve evidence for prosecution',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The biggest mistake in insider cases is premature confrontation. Once the insider knows they are suspected, they will delete evidence, destroy copies, and warn accomplices. Gather evidence covertly, coordinate with HR and Legal on the termination plan, and have security present at the termination meeting to recover assets and witness any admission.',
                  calloutType: 'warning',
                },
                {
                  type: 'example',
                  content:
                    'A Bengaluru SaaS company detected an engineer copying customer source code and PII to a personal GitHub repository. The IRT conducted a covert 5-day investigation, gathering EDR evidence, email records, and Slack messages showing intent to take the data to a competitor. The company terminated the engineer with security present, recovered the laptop, and filed a police complaint under the Information Technology Act 2000 (Section 43(b) and 66). Board notification was filed within 48 hours; individual notification was deferred briefly at law enforcement request to avoid tipping off accomplices — a documented tipping-off deferral per Lesson 10.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Playbooks 3 & 4: Vendor Breach and Lost Device',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'Vendor (third-party) breaches and lost/stolen devices are two more common scenarios. Vendor breaches are particularly tricky because the Data Fiduciary remains accountable to its Data Principals even when the breach occurred at the vendor — the DPDPA follows the data, not the perimeter. Lost device breaches hinge almost entirely on whether the device was encrypted.',
                },
                {
                  type: 'heading',
                  content: 'Vendor Breach Playbook',
                },
                {
                  type: 'list',
                  content: 'Step-by-step vendor breach response',
                  items: [
                    'Vendor notification: invoke contractual breach notification clause (should require notification within 24-48 hours of vendor awareness)',
                    'Information gathering: demand vendor\'s forensic summary, affected data categories and counts, and remediation plan',
                    'Independent assessment: do not rely solely on vendor\'s assessment; engage your own forensic firm if the breach is material',
                    'Notification determination: the Data Fiduciary (not the vendor) is responsible for Board and individual notification under DPDPA',
                    'Joint or parallel notification: coordinate with vendor on notification timing and content; ensure consistent messaging',
                    'Contractual remedies: invoke indemnification, audit rights, and termination rights per the DPA',
                    'Vendor risk reassessment: post-incident, reassess the vendor\'s risk rating; consider termination if systemic failures',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA makes the Data Fiduciary accountable for breaches at its processors and sub-processors. Section 8(6) notification cannot be deferred on the ground that "the vendor is handling it." The Data Fiduciary must notify within 72 hours of becoming aware — which includes awareness of a vendor breach. Contractual clauses must require vendors to notify the Data Fiduciary within 24-48 hours of their own awareness.',
                  calloutType: 'important',
                },
                {
                  type: 'heading',
                  content: 'Lost or Stolen Device Playbook',
                },
                {
                  type: 'list',
                  content: 'Step-by-step lost device response',
                  items: [
                    'Confirm loss: when, where, what device, what data was on it',
                    'Verify encryption status: was full-disk encryption (BitLocker, FileVault, LUKS) active? Were keys stored on the device?',
                    'Verify authentication: was the device password/PIN/biometric protected? Was auto-lock enabled?',
                    'Remote actions: if MDM-managed, trigger remote lock and remote wipe; locate the device if location services enabled',
                    'Risk assessment: if strongly encrypted and keys not on device, confidentiality may not be compromised — apply three-element test',
                    'Notification determination: if encryption inadequate or keys compromised, treat as personal data breach; if strong encryption and keys secure, may not be notifiable (document determination)',
                    'Notification: file Board notification within 72 hours if notifiable; individual notification per Rule 7',
                    'Mitigation: change credentials that may have been stored on device; monitor for anomalous activity',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The encryption status check is the pivotal moment in the lost device playbook. AES-256 full-disk encryption with keys stored in a separate hardware module (e.g., TPM with separate PIN, or cloud-based key vault) generally means confidentiality is not compromised. Software-based encryption with keys stored on the device (e.g., in the same user profile) may not meet the threshold. Document the technical analysis carefully.',
                  calloutType: 'tip',
                },
                {
                  type: 'example',
                  content:
                    'A Mumbai consulting firm lost an employee laptop containing client financial models and contact data. The laptop was BitLocker-encrypted with AES-256, keys stored in Azure Key Vault (separate authentication), and PIN-protected with auto-lock. The DPO applied the three-element test: (1) processing — yes (storage); (2) accidental — yes; (3) confidentiality compromised — NO (encryption renders data unintelligible; keys not on device). Documented determination: not a personal data breach. Voluntary filing submitted to the Board. No individual notification required. The Board accepted the determination.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'IR Playbook', definition: 'A pre-written, scenario-specific runbook detailing detection, containment, eradication, recovery, and notification steps for a given incident type.' },
            { term: 'Covert Investigation', definition: 'An investigation conducted without alerting the subject (e.g., an insider) to preserve evidence and prevent destruction.' },
            { term: 'Vendor Breach', definition: 'A personal data breach occurring at a processor or sub-processor, for which the Data Fiduciary remains accountable under DPDPA.' },
            { term: 'DLP (Data Loss Prevention)', definition: 'Software that monitors and blocks unauthorised transfer of sensitive data, often the first detector of insider data theft.' },
            { term: 'MDM (Mobile Device Management)', definition: 'Software that manages and secures mobile devices, enabling remote lock, wipe, and location tracking for lost devices.' },
          ],
          references: [
            { title: 'NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide', source: 'National Institute of Standards and Technology', year: '2012' },
            { title: 'SANS Incident Handler\'s Handbook', source: 'SANS Institute', year: '2023' },
            { title: 'DPDPA 2023 — Section 8(6), Section 9 (Processor obligations)', source: 'Government of India, MeitY', year: '2023' },
            { title: 'RBI Cyber Security Framework for Banks — Incident Response', source: 'Reserve Bank of India', year: '2016' },
          ],
        },

        // -------- LESSON 13 --------
        {
          id: 13,
          title: 'Tabletop Exercises: How to Run Them',
          duration: '16 min',
          type: 'interactive',
          description:
            'How to design, facilitate, and debrief tabletop exercises that test the IRT\'s response to breach scenarios — the single most effective preparedness activity, recommended by SANS, NIST, and IAPP.',
          content:
            'A tabletop exercise (TTX) is a discussion-based simulation where the IRT walks through a breach scenario step by step, without the pressure of a real incident. TTXs are the single most effective preparedness activity — they surface gaps in playbooks, training, and tooling before a real breach exposes them. The SANS Institute, NIST, and IAPP all recommend at least quarterly TTXs for mature IR programs. This lesson covers how to design a scenario, facilitate the exercise, capture observations, and convert them into improvements. By the end, you will be able to run a productive 90-minute TTX that genuinely strengthens your IR capability.',
          learningObjectives: [
            'Design a realistic breach scenario for tabletop exercise',
            'Facilitate a 90-minute TTX with the full IRT',
            'Capture observations and identify gaps in playbooks, training, and tooling',
            'Convert TTX findings into concrete improvement actions with owners and deadlines',
            'Schedule and run quarterly TTXs as part of a continuous improvement cycle',
          ],
          keyTakeaways: [
            'A TTX is discussion-based — the IRT walks through the scenario without actually executing technical actions',
            'Effective TTXs have a clear scenario, injects (new information during the exercise), and a neutral facilitator',
            'The debrief is the most valuable part — capture observations, gaps, and improvement actions',
            'Run at least quarterly TTXs covering different scenarios (ransomware, insider, vendor, lost device)',
            'TTXs surface gaps that real incidents would expose — better to find them in a conference room than during a breach',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'Designing the Scenario',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A good TTX scenario is realistic for the organisation, tests multiple IRT roles, and includes injects (new information) that force the IRT to adapt during the exercise. The scenario should be tailored to the organisation\'s industry, data types, and risk profile — a hospital\'s scenario differs from a fintech\'s, which differs from an e-commerce platform\'s. The scenario brief should be 1-2 pages, distributed to participants 24 hours in advance so they can prepare.',
                },
                {
                  type: 'heading',
                  content: 'Scenario Design Template',
                },
                {
                  type: 'list',
                  content: 'Elements of a well-designed TTX scenario',
                  items: [
                    'Background: organisation profile, data types, recent changes (new vendor, new product)',
                    'Initial trigger: how the incident is detected (SOC alert, customer report, vendor call)',
                    'Inject 1 (T+30 min): new information that changes the picture (e.g., exfiltration confirmed)',
                    'Inject 2 (T+60 min): escalation (e.g., media enquiry received, Board member calls)',
                    'Inject 3 (T+90 min): complication (e.g., Grievance Officer unavailable, vendor slow to respond)',
                    'Decision points: where the IRT must make a call (notify or not, isolate or monitor, pay or not pay)',
                    'Objectives: what the exercise is testing (notification timeline, role clarity, playbook use)',
                  ],
                },
                {
                  type: 'example',
                  content:
                    'Sample TTX scenario for an Indian fintech: "At 02:14 IST, your SOC detects anomalous queries against the customer database. By 02:30, the SOC confirms exfiltration of approximately 50,000 customer records containing names, PAN numbers, and transaction history. At 03:00, the Technical Lead reports the attacker is still active. At 04:00, the CEO receives a call from a journalist who has been tipped off. At 06:00, a customer tweets about receiving a phishing email referencing their transaction history. Walk through your response, identifying decisions, owners, and timelines."',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'Facilitating the Exercise',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The facilitator runs the exercise, introduces injects, and ensures all participants contribute. The facilitator should be neutral — not the Incident Lead — so they can observe without being absorbed in the response. Many organisations bring in an external facilitator (consultant, peer DPO) for objectivity. The exercise runs 90-120 minutes: 10 minutes for scenario briefing, 60-90 minutes for response walkthrough, 20-30 minutes for debrief.',
                },
                {
                  type: 'heading',
                  content: 'Facilitation Tips',
                },
                {
                  type: 'list',
                  content: 'Best practices for facilitating a TTX',
                  items: [
                    'Distribute the scenario 24 hours in advance; participants come prepared',
                    'Open with a clear statement: this is a learning exercise, not a test of individuals',
                    'Use a visible timer for each decision point (e.g., "You have 5 minutes to decide on containment")',
                    'Introduce injects at planned times; do not let the discussion run ahead of the scenario',
                    'Encourage every role to speak; the facilitator may directly ask the Legal Counsel or Comms Lead for their view',
                    'Capture key decisions and timeline on a shared whiteboard (physical or virtual) for the debrief',
                    'Do not allow technical deep-dives that exclude non-technical participants; keep the focus on decisions and coordination',
                    'Record the exercise (audio or video) for the debrief — with participant consent',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The biggest facilitation failure is allowing the exercise to drift into technical debate. The TTX tests decisions, coordination, and notification — not technical skill. If the Technical Lead starts debating patch versions, redirect: "Note the technical question; let\'s assume we patch. What is the next decision?"',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'The Debrief and Improvement Cycle',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The debrief is the most valuable part of the TTX. Without a structured debrief, the exercise is theatre — the team goes through the motions and learns nothing. The debrief should answer three questions: What worked well? What did not work? What will we change? Each observation must convert into an action with an owner and deadline.',
                },
                {
                  type: 'heading',
                  content: 'Structured Debrief Format',
                },
                {
                  type: 'list',
                  content: 'Debrief structure that converts observations to improvements',
                  items: [
                    'Round 1 — What worked well: each participant names one thing that went smoothly (5 minutes)',
                    'Round 2 — What did not work: each participant names one gap or friction point (10 minutes)',
                    'Round 3 — Root causes: facilitator groups observations into themes (playbook gaps, training gaps, tooling gaps, authority gaps) (10 minutes)',
                    'Round 4 — Improvement actions: for each theme, identify a concrete action, owner, and deadline (10 minutes)',
                    'Summary: facilitator reads back the action list; participants confirm owners and deadlines (5 minutes)',
                  ],
                },
                {
                  type: 'heading',
                  content: 'Sample Improvement Actions from a TTX',
                },
                {
                  type: 'table',
                  headers: ['Observation', 'Action', 'Owner', 'Deadline'],
                  rows: [
                    ['Legal Counsel unsure of Board notification portal', 'Train Legal on portal; create step-by-step guide', 'DPO', '2 weeks'],
                    ['Comms Lead had no holding statement template', 'Draft 3 holding statement templates (low/med/high severity)', 'Comms Lead', '1 week'],
                    ['No clear authority for off-hours incident declaration', 'Update CEO delegation letter; document alternate Incident Lead', 'CISO', '2 weeks'],
                    ['IR contact list outdated (3 wrong numbers)', 'Quarterly contact list verification; integrate with HR system', 'CISO', '1 week, then quarterly'],
                    ['No clear process for tipping-off deferral', 'Add tipping-off deferral procedure to IR plan', 'Legal Counsel', '4 weeks'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The improvement actions must be tracked to completion. Many organisations run TTXs, identify improvements, then fail to implement them — and the next TTX surfaces the same gaps. Assign an owner (typically the DPO or CISO) to track all TTX-derived actions to closure, and review the action list at the start of each subsequent TTX.',
                  calloutType: 'important',
                },
                {
                  type: 'paragraph',
                  content:
                    'Schedule TTXs at least quarterly, with each exercise covering a different scenario. Annual cycle: Q1 ransomware, Q2 insider, Q3 vendor breach, Q4 lost device or new threat (e.g., AI-related). Rotate facilitators and injects to keep the exercises fresh. Mature programs also run an annual full-scale simulation — a "red team" exercise where the technical response is actually executed against a simulated attack. The combination of quarterly TTXs and an annual simulation builds a level of preparedness that pays off the moment a real incident occurs.',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Tabletop Exercise (TTX)', definition: 'A discussion-based simulation where the IRT walks through a breach scenario step by step to test response capability and surface gaps.' },
            { term: 'Inject', definition: 'New information introduced during a TTX to force the IRT to adapt and test response flexibility.' },
            { term: 'Facilitator', definition: 'The neutral person who runs the TTX, introduces injects, and ensures all participants contribute.' },
            { term: 'Debrief', definition: 'The structured post-exercise discussion that converts observations into concrete improvement actions.' },
            { term: 'Full-Scale Simulation', definition: 'An annual exercise where the technical response is actually executed against a simulated attack, beyond the discussion-based TTX.' },
          ],
          references: [
            { title: 'NIST SP 800-84: Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities', source: 'National Institute of Standards and Technology', year: '2006' },
            { title: 'SANS Securing The Human: Tabletop Exercises', source: 'SANS Institute', year: '2023' },
            { title: 'DHS CISA Tabletop Exercise Package (CTEP)', source: 'Cybersecurity and Infrastructure Security Agency', year: '2024' },
            { title: 'IAPP Tabletop Exercise Toolkit', source: 'International Association of Privacy Professionals', year: '2023' },
          ],
        },

        // -------- LESSON 14 --------
        {
          id: 14,
          title: 'Post-Incident Review (Lessons Learned, RCA)',
          duration: '17 min',
          type: 'video',
          description:
            'How to conduct a post-incident review that captures lessons learned, completes the root cause analysis, drives systemic improvements, and produces documentation that demonstrates DPDPA accountability to the Board.',
          content:
            'The post-incident review (PIR) is the final phase of incident response — and the one most often skipped under the pressure of returning to normal operations. Skipping the PIR guarantees that the same breach will recur. This lesson covers the structure of an effective PIR: the timeline reconstruction, the root cause analysis (building on Lesson 5), the lessons learned session, and the improvement action plan. We also cover the documentation the DPDPA Board expects to see demonstrating that the Data Fiduciary took Section 8(5) "prompt remedial action" seriously — the PIR is the primary evidence of that. By the end, you will be able to run a PIR that genuinely strengthens your organisation and protects against the next breach.',
          learningObjectives: [
            'Structure a post-incident review with timeline, RCA, lessons learned, and action plan',
            'Facilitate a blameless lessons learned session that surfaces real issues',
            'Convert lessons into prioritised improvement actions with owners and deadlines',
            'Produce a PIR report that demonstrates DPDPA Section 8(5) compliance',
            'Track improvement actions to closure and verify effectiveness',
          ],
          keyTakeaways: [
            'A PIR has four phases: timeline reconstruction, root cause analysis, lessons learned session, and action plan',
            'The lessons learned session must be blameless — focus on systemic issues, not individual mistakes',
            'Every lesson must convert into an action with a named owner, deadline, and success metric',
            'The PIR report is the primary evidence of Section 8(5) "prompt remedial action" — keep it for at least 7 years',
            'Track all PIR actions to closure; verify effectiveness at the next TTX or incident',
          ],
          sections: [
            {
              id: 'sec-1',
              title: 'The PIR Structure',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'A post-incident review should be conducted within 2 weeks of incident closure — long enough to gather complete information, short enough that memories are fresh. The structure has four phases, each producing a documented output. The PIR is led by the Incident Lead, with input from all IRT members and selected stakeholders (engineering, operations, vendor management).',
                },
                {
                  type: 'heading',
                  content: 'The Four Phases of a PIR',
                },
                {
                  type: 'table',
                  headers: ['Phase', 'Activity', 'Output', 'Duration'],
                  rows: [
                    ['1. Timeline reconstruction', 'Build detailed chronological timeline of incident from detection to closure', 'Verified incident timeline', '1-2 days'],
                    ['2. Root cause analysis', 'Apply 5 Whys, fishbone, or fault tree to identify systemic causes (build on Lesson 5)', 'Root cause report', '2-3 days'],
                    ['3. Lessons learned session', 'Blameless group discussion to surface what worked, what did not, what to change', 'Lessons list', '2-4 hours'],
                    ['4. Action plan', 'Convert lessons into prioritised actions with owners and deadlines', 'Improvement action plan', '1-2 days'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'Timing matters. Run the PIR too soon (within days of the incident) and fatigue prevents honest discussion. Run it too late (after a month) and memories fade, details are lost, and the systemic lessons never surface. The 2-week window is the sweet spot.',
                  calloutType: 'tip',
                },
              ],
            },
            {
              id: 'sec-2',
              title: 'The Blameless Lessons Learned Session',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The lessons learned session is the heart of the PIR. The format is blameless — the focus is on systemic issues, not individual mistakes. This is not soft or lenient; it is the only way to surface real issues. In a blameful culture, people hide mistakes, and the systemic causes never emerge. In a blameless culture, people share openly, and the systemic causes become visible — and fixable.',
                },
                {
                  type: 'heading',
                  content: 'Blameless Session Format',
                },
                {
                  type: 'list',
                  content: 'How to run a blameless lessons learned session',
                  items: [
                    'Open with a blameless statement: "We are here to learn, not to assign blame. Every observation is a learning opportunity."',
                    'Walk through the timeline, pausing at each decision point and each gap',
                    'For each gap, ask "What systemic condition allowed this?" — not "Who messed up?"',
                    'Capture observations on a visible board, grouped by theme (people, process, technology, governance)',
                    'Use the 5 Whys on each significant gap to drill to the systemic root cause',
                    'Identify what went well too — successes are also lessons to be reinforced',
                    'Close by reading back the lessons list and confirming the next step (action plan)',
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The blameless principle does not mean no accountability. Individuals who repeatedly make the same mistake, or who violate clear policy, face HR action — but separately from the PIR. The PIR is about systemic learning; HR action is about individual conduct. Conflating them destroys the blameless culture.',
                  calloutType: 'important',
                },
                {
                  type: 'example',
                  content:
                    'During a PIR for a ransomware incident, the Technical Lead admitted he had hesitated to isolate the affected server because he was unsure of his authority. In a blameful culture, this admission would never happen. In a blameless session, the systemic issue became visible: the delegation of authority was unclear. The fix was to update the delegation letter and train the team — a systemic improvement that would not have surfaced without the honest admission.',
                },
              ],
            },
            {
              id: 'sec-3',
              title: 'Action Plan and DPDPA Documentation',
              content: [
                {
                  type: 'paragraph',
                  content:
                    'The action plan converts lessons into concrete improvements. Each action has a named owner, a deadline, and a success metric. The plan is tracked to closure, with status reviewed monthly until complete. The PIR report, including the action plan, becomes the primary evidence of Section 8(5) "prompt remedial action" — demonstrating that the Data Fiduciary took the breach seriously and addressed its root causes.',
                },
                {
                  type: 'heading',
                  content: 'Sample PIR Action Plan',
                },
                {
                  type: 'table',
                  headers: ['#', 'Lesson', 'Action', 'Owner', 'Deadline', 'Success Metric'],
                  rows: [
                    ['1', 'Authority unclear for off-hours containment', 'Update CEO delegation letter; brief all IRT members', 'CISO', '2 weeks', 'All IRT members confirm understanding'],
                    ['2', 'SIEM did not detect exfiltration pattern', 'Add correlation rule for bulk outbound transfers >5GB', 'SecOps', '4 weeks', 'Rule tested; alert fires on simulated exfiltration'],
                    ['3', 'Board notification took 60 hours due to data gathering', 'Pre-draft notification template; pre-stage contact list', 'DPO', '2 weeks', 'Template and contact list ready; drilled in TTX'],
                    ['4', 'Backup restoration took 11 days', 'Implement immutable backups; reduce RTO to 48 hours', 'CISO', '12 weeks', 'RTO <48 hours verified in DR test'],
                    ['5', 'Customer support overwhelmed (3-day backlog)', 'Pre-arrange surge staffing with BPO partner', 'Customer Support Lead', '4 weeks', 'Surge contract signed; tested in TTX'],
                  ],
                },
                {
                  type: 'callout',
                  content:
                    'The PIR report should include: executive summary, incident timeline, root cause analysis, lessons learned, action plan, and a Section 8(5) compliance statement. Retain the report for at least 7 years (or longer if litigation is possible). The Board may request the PIR report in any enforcement action — its presence and quality are powerful evidence of good-faith compliance.',
                  calloutType: 'important',
                },
                {
                  type: 'paragraph',
                  content:
                    'The final step is verification: at the next TTX (typically the following quarter), test that the improvements work. Did the new SIEM rule fire on the simulated exfiltration? Did the pre-drafted notification template reduce filing time? Did the immutable backup reduce RTO? Closing the loop — from incident to lesson to action to verification — is what transforms a PIR from paperwork into genuine improvement. Organisations that close this loop become demonstrably more resilient over time; those that do not repeat the same breaches.',
                },
                {
                  type: 'callout',
                  content:
                    'The DPDPA\'s penalty framework rewards learning. Section 8(5) requires "reasonable security safeguards" — and a documented cycle of incident, PIR, and improvement is strong evidence that safeguards are being continually improved. Conversely, a Data Fiduciary that suffers the same breach twice — with no PIR and no improvement between — faces the maximum ₹250 crore penalty for failure to take reasonable safeguards.',
                  calloutType: 'tip',
                },
              ],
            },
          ],
          glossary: [
            { term: 'Post-Incident Review (PIR)', definition: 'The structured review conducted after an incident to capture lessons learned, complete root cause analysis, and drive improvements.' },
            { term: 'Blameless Culture', definition: 'An incident response culture that focuses on systemic issues rather than individual mistakes, to surface real causes and fix them.' },
            { term: 'Improvement Action Plan', definition: 'The prioritised list of actions, with owners and deadlines, derived from a PIR to address identified gaps.' },
            { term: 'Section 8(5) Compliance Statement', definition: 'A documented assertion in the PIR report that the Data Fiduciary took prompt and reasonable remedial action, supported by the action plan.' },
            { term: 'Loop Closure', definition: 'The practice of verifying at the next TTX or incident that PIR-derived improvements actually work — closing the cycle from lesson to verified improvement.' },
          ],
          references: [
            { title: 'NIST SP 800-61 Rev. 2: Post-Incident Activity', source: 'National Institute of Standards and Technology', year: '2012' },
            { title: 'SANS Incident Handler\'s Handbook — Post-Incident Review', source: 'SANS Institute', year: '2023' },
            { title: 'DPDPA 2023 — Section 8(5) Reasonable Security Safeguards', source: 'Government of India, MeitY', year: '2023' },
            { title: 'The Field Guide to Understanding Human Error', source: 'Sidney Dekker', year: '2014' },
            { title: 'Postmortem Culture at Google', source: 'Google SRE', year: '2023' },
          ],
        },
      ],
    },
  ],

  // ===== MODULE ASSIGNMENTS =====
  assignments: [
    {
      id: 1,
      title: 'Draft a Board Notification',
      description:
        'Given a scenario brief (ransomware affecting 50,000 customer records at an Indian fintech), draft a complete Board notification under Section 8(6) and Rule 7 of DPDP Rules 2025, including all seven required elements.',
      deliverables: [
        'Completed Board notification with all seven Rule 7 elements',
        'Documented three-element breach determination under Section 3(5)',
        'Timeline of awareness, containment, and notification',
        'Self-assessment against the common drafting errors checklist',
      ],
    },
    {
      id: 2,
      title: 'Build an IR Playbook',
      description:
        'Choose one scenario (ransomware, insider, vendor breach, or lost device) and write a complete IR playbook tailored to your organisation, covering detection, containment, eradication, recovery, and notification with specific DPDPA triggers.',
      deliverables: [
        'Organisation profile and data inventory relevant to the scenario',
        'Step-by-step playbook with timestamps (T+0, T+30 min, T+2 hours, etc.)',
        'IRT role assignments with named owners (or role titles)',
        'DPDPA Section 8(6) notification decision tree',
        'Tabletop exercise design to test the playbook',
      ],
    },
    {
      id: 3,
      title: 'Run a Tabletop Exercise',
      description:
        'Design and facilitate a 90-minute tabletop exercise for a scenario of your choice, with a full debrief and improvement action plan.',
      deliverables: [
        'Scenario brief (1-2 pages) with injects',
        'Facilitation plan with timing',
        'Debrief notes capturing observations and gaps',
        'Improvement action plan with owners and deadlines',
        'Participant feedback summary',
      ],
    },
  ],

  // ===== MODULE QUIZ =====
  quiz: {
    questions: [
      {
        question: 'Under DPDPA Section 8(6), what is the deadline for Board notification of a personal data breach?',
        options: ['6 hours', '24 hours', '72 hours', '7 days'],
        correct: 2,
        explanation: 'Section 8(6) requires notification to the Board within 72 hours of becoming aware of the breach. Note that CERT-In Directions require separate notification within 6 hours.',
      },
      {
        question: 'When does the 72-hour notification clock start?',
        options: ['When the breach occurs', 'When a reasonable organisation should have detected the breach', 'When the Board is informed', 'When the media reports the breach'],
        correct: 1,
        explanation: 'The clock starts when the Data Fiduciary becomes "aware" — interpreted as when a reasonable organisation, in those circumstances, should have detected the breach.',
      },
      {
        question: 'What is the maximum penalty under the DPDPA for failure to notify a personal data breach?',
        options: ['₹50 crore', '₹150 crore', '₹200 crore', '₹250 crore'],
        correct: 3,
        explanation: 'Under Schedule Part 1 of the DPDPA, failure to notify a personal data breach under Section 8(6) carries a maximum penalty of ₹250 crore.',
      },
      {
        question: 'How many required elements must a Board notification contain under Rule 7 of DPDP Rules 2025?',
        options: ['3', '5', '7', '10'],
        correct: 2,
        explanation: 'Rule 7 prescribes seven mandatory elements: description, number of Data Principals, data categories, number of records, likely consequences, measures taken, and Grievance Officer contact details.',
      },
      {
        question: 'Under the DPDPA, individual notification to affected Data Principals is required:',
        options: ['Only for high-risk breaches', 'For all personal data breaches', 'Only if more than 1,000 Data Principals are affected', 'Only if the Board orders it'],
        correct: 1,
        explanation: 'Unlike the GDPR (which has a high-risk threshold), the DPDPA requires individual notification for all personal data breaches, without a high-risk threshold.',
      },
      {
        question: 'Which of the following is NOT a core IRT role?',
        options: ['Incident Lead', 'Technical Lead', 'Marketing Lead', 'Legal Counsel'],
        correct: 2,
        explanation: 'The four core IRT roles are Incident Lead, Technical Lead, Legal Counsel, and Communications Lead. Marketing is a supporting role, not core.',
      },
      {
        question: 'When handling a lost encrypted laptop containing personal data, what is the most important factor in determining whether notification is required?',
        options: ['Whether the laptop was reported to police', 'Whether strong encryption was active and keys were not on the device', 'Whether the employee was disciplined', 'Whether the laptop was found'],
        correct: 1,
        explanation: 'If strong encryption (AES-256) was active and keys were stored separately, confidentiality may not be "compromised" under Section 3(5), and the incident may not be a notifiable breach. Document the analysis.',
      },
      {
        question: 'What is the CERT-In notification deadline for cybersecurity incidents?',
        options: ['1 hour', '6 hours', '24 hours', '72 hours'],
        correct: 1,
        explanation: 'CERT-In Directions of 28 April 2022 require notification of cybersecurity incidents within 6 hours of noticing them — stricter than the DPDPA\'s 72 hours.',
      },
      {
        question: 'A tabletop exercise (TTX) is best described as:',
        options: ['A live technical simulation of an attack', 'A discussion-based walkthrough of a breach scenario', 'A test of backup restoration', 'A vendor security audit'],
        correct: 1,
        explanation: 'A TTX is discussion-based — the IRT walks through the scenario without executing technical actions. A full-scale simulation is the live technical version.',
      },
      {
        question: 'The lessons learned session in a PIR should be:',
        options: ['Conducted by the CEO to assign blame', 'Blameless, focusing on systemic issues', 'Limited to senior management only', 'Skipped if the breach was contained quickly'],
        correct: 1,
        explanation: 'A blameless session focuses on systemic issues, not individual mistakes. This is the only way to surface real causes and drive genuine improvement.',
      },
      {
        question: 'Which of the following is a common drafting error in Board notifications?',
        options: ['Including too much technical detail', 'Filing too early before complete information', 'Waiting for complete information past the 72-hour deadline', 'Naming the Grievance Officer'],
        correct: 2,
        explanation: 'Perfectionism-driven late filing is the most common error. An incomplete notification filed within 72 hours is preferable to a complete one filed late.',
      },
      {
        question: 'Under the DPDPA, who is accountable for a personal data breach that occurs at a vendor (processor)?',
        options: ['The vendor only', 'The Data Fiduciary', 'The Data Protection Board', 'No one — it is the Data Principal\'s risk'],
        correct: 1,
        explanation: 'The DPDPA follows the data — the Data Fiduciary remains accountable to Data Principals and the Board even when the breach occurred at a vendor. The Data Fiduciary must notify within 72 hours of becoming aware.',
      },
    ],
    passingScore: 80,
  },

  // ===== MODULE PROJECT =====
  project: {
    title: 'Build a DPDPA-Compliant Incident Response Program',
    description:
      'Design a complete incident response program for an organisation of your choice, covering IRT structure, playbooks for the four common scenarios, notification templates, tabletop exercise design, and post-incident review process.',
    deliverables: [
      'Organisation profile and personal data inventory',
      'IRT structure with four core roles and supporting roles, qualifications, and on-call rotation',
      'IR playbooks for ransomware, insider, vendor breach, and lost device scenarios',
      'Board notification template compliant with Rule 7 (seven elements)',
      'Individual notification template in plain language (Class 8 readability)',
      'Tabletop exercise scenario with injects and facilitation plan',
      'Post-incident review template with action plan format',
      'Self-assessment against DPDPA Section 8(5) and 8(6) requirements',
    ],
  },
};