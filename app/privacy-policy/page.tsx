import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p>
        Legal Galaxy, operated by Businezexcellence StartX LLP ("we", "our",
        or "us"), provides privacy, data protection and AI governance
        information and tools through https://dpdpa.businezexcellence.com.
        This policy explains how we collect, use, disclose, retain and protect
        personal data when you visit our website, contact us or use our
        services. Our processing is subject to applicable data protection
        law, including the Digital Personal Data Protection Act, 2023 and
        the DPDP Rules, 2025, to the extent in force and applicable.
      </p>
    ),
  },
  {
    title: "2. Personal Data We Collect and Why",
    content: (
      <>
        <p>
          We seek to collect only the personal data reasonably required for
          the purposes described below. The information collected depends on
          the features you use and the information you choose to provide.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Contact and identity information:</strong> Name, email
            address, phone number and company name, where provided. We use
            these details to respond to inquiries, arrange consultations,
            provide requested services and communicate about your request.
          </li>
          <li>
            <strong>Professional information:</strong> Job title, industry
            and company size, where provided. We use this information to
            understand your organisation's requirements and tailor relevant
            compliance or governance assistance.
          </li>
          <li>
            <strong>Website and technical information:</strong> Browser and
            device information, IP address, pages visited and diagnostic
            events, where collected. We use this information for website
            security, troubleshooting and, only where permitted and consented
            to when required, website analytics.
          </li>
          <li>
            <strong>Communications and requests:</strong> Messages and
            information you send us. We use them to answer questions, handle
            service requests and grievances, and maintain relevant records.
          </li>
          <li>
            <strong>Assessment and tool inputs:</strong> Information you
            choose to enter into an assessment or other tool. We use it to
            deliver the requested result and operate that feature.
          </li>
        </ul>
        <p className="mt-3">
          Please avoid entering unnecessary personal or sensitive information
          into website forms or tools. The information requested by a feature
          should be explained when you use that feature.
        </p>
      </>
    ),
  },
  {
    title: "3. Consent and How to Withdraw It",
    content: (
      <>
        <p>
          Where consent is the basis for processing, we seek it through a
          standalone{" "}
          <Link href="/consent-notice" className="text-purple-400 underline">
            Consent Notice
          </Link>{" "}
          before the relevant processing begins. The notice explains the
          personal data involved, the specific purpose of processing, the
          retention period, and how you can exercise your choices, including
          withdrawal of consent.
        </p>
        <p className="mt-3">
          Submitting an inquiry form does not, by itself, mean that you have
          consented to unrelated marketing or optional analytics. Each purpose
          requires its own consent where applicable.
        </p>
        <p className="mt-3">
          Where our website uses optional analytics cookies, you can accept or
          reject them through the cookie banner. You can reopen Cookie Settings
          using the control displayed on the website and change your choice.
          Optional analytics do not load before the required consent has been
          obtained.
        </p>
        <p className="mt-3">You may withdraw consent at any time by:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            Emailing{" "}
            <a
              href="mailto:privacy@businezexcellence.com"
              className="text-purple-400 underline"
            >
              privacy@businezexcellence.com
            </a>{" "}
            with the subject line "Consent Withdrawal";
          </li>
          <li>
            Emailing our Grievance Officer at{" "}
            <a
              href="mailto:grievance@businezexcellence.com"
              className="text-purple-400 underline"
            >
              grievance@businezexcellence.com
            </a>;
          </li>
          <li>
            Using the "Cookie Settings" button on our website to change cookie
            preferences.
          </li>
        </ul>
        <p className="mt-3">
          Withdrawal of consent will not affect the lawfulness of processing
          based on consent before its withdrawal. We will process your request
          within <strong>30 days</strong>.
        </p>
      </>
    ),
  },
  {
    title: "4. Grounds for Processing",
    content: (
      <>
        <p>
          We process personal data on the basis applicable to the relevant
          activity, including consent where required and permitted uses under
          section 7 of the DPDP Act, where applicable. We do not treat every
          business purpose as automatically exempt from consent requirements.
        </p>
        <p className="mt-3">
          Depending on the circumstances, processing may be necessary to
          respond to a request you make, provide a requested feature, comply
          with a legal obligation or address security and abuse. Where
          applicable law requires consent or another specific condition, we
          will follow that requirement.
        </p>
      </>
    ),
  },
    {
    title: "5. Children's Personal Data",
    content: (
      <>
        <p>
          Our website and services are strictly intended for businesses and
          professionals who are <strong>18 years of age or older</strong>. We do not
          knowingly seek to collect, use, or disclose personal data from children
          (individuals under 18 years of age).
        </p>
        <p className="mt-3">
          If you are under 18, please do not use this Website or submit any personal
          data through our forms, tools, or assessments. 
        </p>
        <p className="mt-3">
          If we become aware that we have inadvertently collected personal data from
          a child without verifiable parental consent, we will take reasonable steps
          to delete such information from our records promptly. If you believe a child
          has provided personal data to us inappropriately, please contact our
          Grievance Officer immediately.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Retention and Deletion",
    content: (
      <>
        <p>
          We retain personal data only for as long as reasonably necessary for
          its stated purpose, subject to applicable legal obligations, dispute
          resolution and legitimate record-keeping requirements. The applicable
          retention period depends on the type of data and the reason it was
          collected.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Demo Request and Contact Form data:</strong> Up to{" "}
            <strong>2 years</strong> from the date of submission, unless
            consent is withdrawn earlier or a different period is required by
            applicable law.
          </li>
          <li>
            <strong>Generated documents (Privacy Policy, DPA, etc.):</strong>{" "}
            Up to <strong>1 year</strong> from the date of generation.
          </li>
          <li>
            <strong>Customer and business records:</strong> For the duration
            of the business relationship and up to <strong>7 years</strong>{" "}
            thereafter where required for legal, accounting or tax purposes.
          </li>
          <li>
            <strong>Website analytics:</strong> Up to <strong>26 months</strong>
            , subject to the analytics configuration and the provider's actual
            retention settings.
          </li>
          <li>
            <strong>Grievance and legal records:</strong> Retained as needed
            to investigate, respond to and document requests, comply with
            applicable law and resolve disputes.
          </li>
        </ul>
        <p className="mt-3">
          When the applicable retention period ends, we will delete or
          anonymise personal data, unless continued retention is required or
          permitted by law. Backup copies may remain until removed through the
          relevant backup lifecycle.
        </p>
      </>
    ),
  },
    {
    title: "7. Data Sharing and Recipients",
    content: (
      <>
        <p>
          We do not sell or rent personal data. Where necessary for the purposes
          described in this policy, we may disclose data to the following
          specific third-party service providers:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Google (Google Analytics & Google Sheets):</strong> We use
            Google Analytics to understand website traffic (only with your
            consent) and Google Sheets as a secure database to store your
            inquiries and generated documents.
          </li>
          <li>
            <strong>Resend:</strong> We use Resend to deliver transactional
            emails, such as responding to your contact requests, sending
            generated documents, and transmitting assessment reports.
          </li>
          <li>
            <strong>Vercel:</strong> We use Vercel for website hosting,
            infrastructure, and analytics to ensure the Website operates
            securely and efficiently.
          </li>
          <li>
            <strong>Upstash:</strong> We use Upstash (Redis and Vector Database)
            for secure data storage, rate limiting, and enabling search
            functionality on our platform.
          </li>
        </ul>
        <p className="mt-3">
          These providers act as data processors and are bound by their
          respective data processing agreements (DPAs) to ensure your data is
          handled securely and only for the purposes we specify. They may
          process data in locations outside India, subject to appropriate
          safeguards.
        </p>
        <p className="mt-3">
          We may also disclose data to professional advisers or authorities
          where necessary for legal compliance, the establishment or defence of
          legal claims, or a lawful request from a competent authority.
        </p>
      </>
    ),
  },
  {
    title: "8. International Data Transfers",
    content: (
      <>
        <p>
          Some hosting, analytics or communication providers may process
          personal data outside India. The location of processing depends on
          the provider, service configuration and the data involved.
        </p>
        <p className="mt-3">
          Where personal data is transferred outside India, we will comply with
          applicable Indian law and any restrictions or requirements imposed by
          the competent authorities. We will assess the relevant providers and
          transfers and implement safeguards where required.
        </p>
        <p className="mt-3">
          This policy does not guarantee that all data remains in India. Please
          contact us if you require further information about a particular
          processing activity or recipient.
        </p>
      </>
    ),
  },
  {
    title: "9. Security Measures",
    content: (
      <>
        <p>
          We use appropriate technical and organisational measures designed to
          protect personal data against unauthorised access, disclosure,
          alteration, loss or destruction. Measures may include access
          restrictions, secure connections, system monitoring and procedures
          for managing security incidents.
        </p>
        <p className="mt-3">
          No website or electronic transmission can be guaranteed to be
          completely secure. Security measures are reviewed and applied
          according to the nature of the information and the risks involved.
        </p>
      </>
    ),
  },
  {
    title: "10. Data Breach Response",
    content: (
      <>
        <p>
          A personal data breach may include unauthorised access to, disclosure
          of, alteration of, loss of access to or destruction of personal data.
          If we become aware of a suspected incident, we will assess it and take
          appropriate steps to contain, investigate and remediate it.
        </p>
        <p className="mt-3">
          Where a personal data breach is established, we will provide
          notifications to affected individuals and the relevant authorities,
          including the Data Protection Board of India where required, within{" "}
          <strong>72 hours</strong> of becoming aware of the breach, in
          accordance with the applicable legal requirements and time limits. We
          will maintain appropriate incident records and take steps to reduce
          the risk of recurrence.
        </p>
      </>
    ),
  },
  {
    title: "11. Grievance Redressal and Privacy Contact",
    content: (
      <>
        <p>
          If you have any concerns about how we process your personal data, you
          can contact our Grievance Officer. We have also published a dedicated{" "}
          <Link href="/grievance-redressal" className="text-purple-400 underline">
            Grievance Redressal page
          </Link>{" "}
          that explains the complaint process in detail.
        </p>
        <div className="mt-4 p-5 bg-white/5 border border-white/10 rounded-xl space-y-2">
          <p>
            <strong>Grievance Officer:</strong> Shilpi Kulshrestha
          </p>
          <p>
            <strong>Designation:</strong> Grievance Officer & Founder,
            Businezexcellence StartX LLP
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:grievance@businezexcellence.com"
              className="text-purple-400 underline"
            >
              grievance@businezexcellence.com
            </a>
          </p>
          <p>
            <strong>Privacy email:</strong>{" "}
            <a
              href="mailto:privacy@businezexcellence.com"
              className="text-purple-400 underline"
            >
              privacy@businezexcellence.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91-8800138008
          </p>
                    <p className="text-xs text-gray-400 mt-2">
            <strong>Timelines:</strong> Acknowledgment of your grievance within{" "}
            <strong>48 hours</strong>; resolution within{" "}
            <strong>7 working days</strong> from the date of receipt, as required
            under the DPDP Rules, 2025. If resolution requires more time, we will
            communicate the reason for the delay.
          </p>
        </div>
        <p className="mt-4">
          If you are not satisfied with our response, or if we fail to resolve
          your grievance within 90 days, you have the right to file a complaint
          with the <strong>Data Protection Board of India (DPB)</strong>. You
          may also approach the DPB directly if your grievance involves a
          personal data breach.
        </p>
      </>
    ),
  },
  {
    title: "12. Your Rights as a Data Principal",
    content: (
      <>
        <p>
          Under the Digital Personal Data Protection Act, 2023, subject to
          applicable law and its conditions, you have the following rights:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Right to Access:</strong> Request a summary of the personal
            data we process about you and the identity of entities with whom it
            has been shared.
          </li>
          <li>
            <strong>Right to Correction:</strong> Request correction of
            inaccurate or incomplete personal data.
          </li>
          <li>
            <strong>Right to Erasure:</strong> Request deletion of your
            personal data where applicable, subject to legal retention
            requirements.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Withdraw your consent
            at any time (see Section 3).
          </li>
          <li>
            <strong>Right to Grievance Redressal:</strong> File a complaint with
            our Grievance Officer (see Section 11) and, if unsatisfied, with the
            Data Protection Board of India.
          </li>
          <li>
            <strong>Right to Nominate:</strong> Nominate another individual to
            exercise your rights in case of death or incapacity.
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, email{" "}
          <a
            href="mailto:privacy@businezexcellence.com"
            className="text-purple-400 underline"
          >
            privacy@businezexcellence.com
          </a>{" "}
          or{" "}
          <a
            href="mailto:grievance@businezexcellence.com"
            className="text-purple-400 underline"
          >
            grievance@businezexcellence.com
          </a>
          . We may need to verify your identity and clarify your request before
          responding. We will respond within <strong>30 days</strong>.
        </p>
      </>
    ),
  },
  {
    title: "13. Cookies and Similar Technologies",
    content: (
      <>
        <p>
          Our website uses the following categories of cookies and similar
          technologies:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Essential Cookies:</strong> Required for basic website
            functionality, such as remembering your cookie preferences and
            maintaining security. These cannot be disabled.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Google Analytics cookies (e.g.,{" "}
            <code>_ga</code>, <code>_gid</code>) that help us understand how
            visitors use the website. These are only enabled if you click
            "Accept All" in the cookie banner.
          </li>
        </ul>
        <p className="mt-3">
          You can change your analytics choice at any time through the Cookie
          Settings control on our website (bottom-left corner). When you choose
          "Reject Non-Essential", we remove any existing Google Analytics
          cookies from your browser.
        </p>
        <p className="mt-3">
          Blocking or deleting cookies through your browser settings may affect
          certain website features. Browser controls are separate from the
          website's consent settings.
        </p>
      </>
    ),
  },
  {
    title: "14. Changes to This Policy",
    content: (
      <p>
        We may update this policy when our services, processing practices or
        legal requirements change. The revised version will be published on
        this page with an updated revision date. Where required, we will
        provide additional notice or seek consent for changes to processing.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 pt-28 pb-16 text-white md:pt-32">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/home1.jpeg')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <Link
          href="/"
          className="group mb-6 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:p-10">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-8 border-b border-white/10 pb-6 text-sm text-gray-400">
            <strong>Last Updated:</strong> 27 October 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed text-gray-300">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-xl font-semibold text-white">
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}