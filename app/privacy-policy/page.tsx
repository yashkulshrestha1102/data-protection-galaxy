
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
        applicable rules, to the extent in force and applicable.
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
          Where consent is the basis for processing, we will seek it through
          an appropriate notice or affirmative action before the relevant
          processing begins. The notice should explain the data involved,
          the purpose of processing and how you can exercise your choices.
          Submitting an inquiry form does not, by itself, mean that you have
          consented to unrelated marketing or optional analytics.
        </p>
        <p className="mt-3">
          Where our website uses optional analytics cookies, you can accept
          or reject them through the cookie banner. You can reopen Cookie
          settings using the control displayed on the website and change
          your choice. Optional analytics should not load before the required
          consent has been obtained.
        </p>
        <p className="mt-3">
          You may also request withdrawal of consent for processing based on
          consent by emailing{" "}
          <a
            href="mailto:privacy@businezexcellence.com"
            className="text-purple-400 underline"
          >
            privacy@businezexcellence.com
          </a>{" "}
          with the subject "Consent Withdrawal". We will take appropriate
          steps to stop the relevant processing, subject to applicable law.
          Withdrawal does not affect the lawfulness of processing carried out
          before withdrawal.
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
          Our website and services are intended primarily for businesses and
          professionals, not children. We do not knowingly seek to collect
          personal data from children through features intended for adults.
        </p>
        <p className="mt-3">
          Where processing children's personal data is applicable and
          permitted, we will follow the requirements of applicable law,
          including obtaining verifiable parental or lawful guardian consent
          where required and observing applicable restrictions on tracking,
          behavioural monitoring and targeted advertising.
        </p>
        <p className="mt-3">
          If you believe a child has provided personal data to us
          inappropriately, contact us using the details in the Grievance
          Redressal section so we can assess and address the request.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Retention and Deletion",
    content: (
      <>
        <p>
          We retain personal data only for as long as reasonably necessary
          for its stated purpose, subject to applicable legal obligations,
          dispute resolution and legitimate record-keeping requirements.
          The applicable retention period depends on the type of data and
          the reason it was collected.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Marketing and inquiry records:</strong> Our stated
            retention period is up to 2 years after the last interaction,
            unless consent is withdrawn earlier or a different period is
            required or permitted by applicable law.
          </li>
          <li>
            <strong>Customer and business records:</strong> Our stated
            retention period is for the business relationship and up to
            7 years thereafter where required for legal, accounting or tax
            purposes. Records not subject to such requirements should not
            automatically be kept for the full period.
          </li>
          <li>
            <strong>Website analytics:</strong> Our stated retention period
            is up to 26 months, subject to the analytics configuration and
            the provider's actual retention settings.
          </li>
          <li>
            <strong>Grievance and legal records:</strong> Retained as needed
            to investigate, respond to and document requests, comply with
            applicable law and resolve disputes.
          </li>
        </ul>
        <p className="mt-3">
          When the applicable retention period ends, we will delete or
          anonymise personal data, unless continued retention is required
          or permitted by law. Backup copies may remain until removed through
          the relevant backup lifecycle.
        </p>
      </>
    ),
  },
  {
    title: "7. Data Sharing and Recipients",
    content: (
      <>
        <p>
          We do not sell personal data. Where necessary for the purposes
          described in this policy, we may disclose data to the following
          categories of recipients:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Hosting and infrastructure providers:</strong> To host
            the website, store information and maintain service availability.
          </li>
          <li>
            <strong>Analytics providers:</strong> Google Analytics may be
            used to understand website usage, subject to the site's consent
            controls and applicable requirements.
          </li>
          <li>
            <strong>Email and communication providers:</strong> To respond
            to inquiries and deliver requested service communications.
          </li>
          <li>
            <strong>Professional advisers or authorities:</strong> Where
            disclosure is necessary for legal compliance, the establishment
            or defence of legal claims, or a lawful request from a competent
            authority.
          </li>
        </ul>
        <p className="mt-3">
          We aim to limit disclosures to what is necessary for the relevant
          purpose. The actual providers used, the information shared with
          them and their contractual arrangements must match our current
          operations. Providers may process data under their own terms where
          they act as independent controllers.
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
          personal data outside India. The location of processing depends
          on the provider, service configuration and the data involved.
        </p>
        <p className="mt-3">
          Where personal data is transferred outside India, we will comply
          with applicable Indian law and any restrictions or requirements
          imposed by the competent authorities. We will assess the relevant
          providers and transfers and implement safeguards where required.
        </p>
        <p className="mt-3">
          This policy does not guarantee that all data remains in India.
          Please contact us if you require further information about a
          particular processing activity or recipient.
        </p>
      </>
    ),
  },
  {
    title: "9. Security Measures",
    content: (
      <>
        <p>
          We use appropriate technical and organisational measures designed
          to protect personal data against unauthorised access, disclosure,
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
          A personal data breach may include unauthorised access to,
          disclosure of, alteration of, loss of access to or destruction
          of personal data. If we become aware of a suspected incident,
          we will assess it and take appropriate steps to contain,
          investigate and remediate it.
        </p>
        <p className="mt-3">
          Where a personal data breach is established, we will provide
          notifications to affected individuals and the relevant authorities,
          including the Data Protection Board of India where required, in
          accordance with the applicable legal requirements and time limits.
          We will maintain appropriate incident records and take steps to
          reduce the risk of recurrence.
        </p>
      </>
    ),
  },
  {
    title: "11. Grievance Redressal and Privacy Contact",
    content: (
      <>
        <p>
          You may contact us to raise a concern about personal data
          processing, request correction or erasure, seek information about
          your data or exercise a right available under applicable law.
          Please include enough information to help us identify and assess
          your request, but do not send passwords or unnecessary sensitive
          information.
        </p>
        <div className="mt-4 p-5 bg-white/5 border border-white/10 rounded-xl space-y-2">
          <p>
            <strong>Grievance Officer:</strong> Shilpi Kulshrestha
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
            <strong>Additional contact:</strong>{" "}
            <a
              href="mailto:shilpi.kulshrestha@businezexcellence.com"
              className="text-purple-400 underline"
            >
              shilpi.kulshrestha@businezexcellence.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91-8800138008
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Our stated service target is to acknowledge grievances within
            48 hours and aim to resolve them within 30 days. Applicable
            statutory timelines and procedures take precedence where they
            differ.
          </p>
        </div>
        <p className="mt-4">
          If you are not satisfied with the handling of a grievance, you may
          pursue the remedies available under applicable law, including
          approaching the competent authority where the relevant legal
          conditions are met.
        </p>
      </>
    ),
  },
  {
    title: "12. Your Rights",
    content: (
      <>
        <p>
          Subject to applicable law and its conditions, you may have the
          right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Obtain information about personal data being processed.</li>
          <li>Request correction or completion of inaccurate or incomplete data.</li>
          <li>Request erasure of personal data where applicable.</li>
          <li>Withdraw consent for processing based on consent.</li>
          <li>Nominate another individual where permitted by law.</li>
          <li>
            Raise a grievance with us and pursue available statutory remedies.
          </li>
        </ul>
        <p className="mt-3">
          To exercise a right, email{" "}
          <a
            href="mailto:privacy@businezexcellence.com"
            className="text-purple-400 underline"
          >
            privacy@businezexcellence.com
          </a>
          . We may need to verify your identity and clarify your request
          before responding.
        </p>
      </>
    ),
  },
  {
    title: "13. Cookies and Similar Technologies",
    content: (
      <>
        <p>
          Our website may use essential technologies needed to operate the
          site and optional analytics technologies to understand traffic
          and usage. Optional analytics are intended to remain disabled
          unless the required consent has been provided.
        </p>
        <p className="mt-3">
          You can change your analytics choice through the Cookie settings
          control on our website. Blocking or deleting cookies in your
          browser may affect certain website features. Your browser controls
          are separate from the website's consent settings.
        </p>
      </>
    ),
  },
  {
    title: "14. Changes to This Policy",
    content: (
      <p>
        We may update this policy when our services, processing practices
        or legal requirements change. The revised version will be published
        on this page with an updated revision date. Where required, we will
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
            <strong>Last Updated:</strong> 19 October 2026
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

