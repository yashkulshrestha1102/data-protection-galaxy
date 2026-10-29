"use client";
import ConsentCapture from "./ConsentCapture";
import Link from "next/link";
import { ArrowLeft, Shield, FileText, Clock, UserCheck, AlertCircle, Globe } from "lucide-react";
import { useState } from "react";

// Dropdown options (All 22 scheduled languages in the list)
const languageOptions = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी (Hindi)" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "mr", label: "मराठी (Marathi)" },
  { code: "te", label: "తెలుగు (Telugu)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
  { code: "gu", label: "ગુજરાતી (Gujarati)" },
  { code: "ur", label: "اردو (Urdu)" },
  { code: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { code: "ml", label: "മലയാളം (Malayalam)" },
  { code: "or", label: "ଓଡ଼ିଆ (Odia)" },
  { code: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "as", label: "অসমীয়া (Assamese)" },
  { code: "mai", label: "मैथिली (Maithili)" },
  { code: "sat", label: "ᱥᱟᱱᱛᱟᱲᱤ (Santali)" },
  { code: "sd", label: "سنڌي (Sindhi)" },
  { code: "ne", label: "नेपाली (Nepali)" },
  { code: "brx", label: "बड़ो (Bodo)" },
  { code: "doi", label: "डोगरी (Dogri)" },
  { code: "kok", label: "कोंकणी (Konkani)" },
  { code: "mni", label: "ꯃꯤꯇꯩ ꯂꯣꯟ (Manipuri)" },
  { code: "sa", label: "संस्कृतम् (Sanskrit)" },
];

export default function ConsentNoticePage() {
  const [language, setLanguage] = useState("en");

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-8">
          
          {/* Header and Language Selector */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-400" />
                                                        <h1 className="text-3xl font-bold text-white">
                {language === "hi" ? "सहमति सूचना (Consent Notice)" : 
                 language === "bn" ? "সম্মতি বিজ্ঞপ্তি (Consent Notice)" : 
                 language === "mr" ? "संमती सूचना (Consent Notice)" : 
                 language === "te" ? "సమ్మతి నోటీసు (Consent Notice)" :
                 language === "ta" ? "ஒப்புதல் அறிவிப்பு (Consent Notice)" :
                 language === "gu" ? "સંમતિ સૂચના (Consent Notice)" :
                 language === "ur" ? "رضامندی کا نوٹس (Consent Notice)" :
                 language === "kn" ? "ಸಮ್ಮತಿ ಸೂಚನೆ (Consent Notice)" :
                 language === "ml" ? "സമ്മത വിജ്ഞാപനം (Consent Notice)" :
                 language === "or" ? "ସମ୍ମତି ସୂଚନା (Consent Notice)" :
                 language === "pa" ? "ਸਹਿਮਤੀ ਨੋਟਿਸ (Consent Notice)" :
                 language === "as" ? "সন্মতি জাননী (Consent Notice)" :
                 language === "mai" ? "सहमति सूचना (Consent Notice)" :
                 language === "sat" ? "ᱥᱚᱢᱢᱚᱛᱤ ᱱᱚᱴᱤᱥ (Consent Notice)" :
                 language === "sd" ? "رضامندی نوٹس (Consent Notice)" :
                 language === "ne" ? "सहमति सूचना (Consent Notice)" :
                 language === "brx" ? "सहमति सूचना (Consent Notice)" :
                 language === "doi" ? "सहमति सूचना (Consent Notice)" :
                 language === "kok" ? "संमती सूचना (Consent Notice)" :
                 language === "mni" ? "ꯑꯌꯥꯕ ꯄꯥꯎꯆꯦ (Consent Notice)" :
                 language === "sa" ? "सहमतिसूचना (Consent Notice)" :
                 "Consent Notice"}
              </h1>
            </div>
            
            <div className="flex items-center gap-2 bg-black/40 border border-white/20 px-3 py-2 rounded-lg">
              <Globe className="w-4 h-4 text-purple-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none cursor-pointer"
              >
                {languageOptions.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-black text-white">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-8">
            Last Updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            
            {/* ==============================================
                ENGLISH CONTENT
            ============================================== */}
            {language === "en" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                  <p>
                    This Consent Notice is issued by <strong className="text-white">Businezexcellence StartX LLP</strong> ("we", "us", "our"),
                    operating the Legal Galaxy platform at <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a>,
                    in compliance with the <strong className="text-white">Digital Personal Data Protection Act, 2023</strong> ("DPDP Act")
                    and the <strong className="text-white">DPDP Rules, 2025</strong>.
                  </p>
                  <p className="mt-3">
                    This notice explains what personal data we collect, why we collect it, how we use it, and how you can withdraw your consent.
                    By providing your consent (by checking the consent checkbox), you agree to the processing of your personal data as described below.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. Personal Data We Collect
                  </h2>
                  <p>When you submit a form on our website, we may collect:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">Identity Data:</strong> First name, last name</li>
                    <li><strong className="text-white">Contact Data:</strong> Work email address, phone number</li>
                    <li><strong className="text-white">Professional Data:</strong> Company name, job title, company size, industry</li>
                    <li><strong className="text-white">Communication Data:</strong> Your message, challenges, or query description</li>
                    <li><strong className="text-white">Technical Data:</strong> IP address, browser type, device information, and cookies (only if you accept analytics cookies)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">Personal Data</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">Specific Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Name</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">To identify you and address you correctly in communications.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Email Address</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">To reply to your inquiry and send requested documents (e.g., generated policies, DPDPA reports).</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Phone Number</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">For urgent compliance-related communication or scheduling consultations.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Company Name & Job Title</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">To understand your organizational requirements and tailor compliance assistance.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Industry & Company Size</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">To analyze the maturity of your compliance program and provide relevant recommendations.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Query/Message</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">To understand and respond to your specific request or issue.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. Purpose of Processing
                  </h2>
                  <p>We process your personal data for the following specific purposes:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">To respond to your inquiries:</strong> Contacting you about your Demo Request or Contact Form submission.</li>
                    <li><strong className="text-white">To provide requested services:</strong> Sending you generated documents via email.</li>
                    <li><strong className="text-white">To improve our services:</strong> Understanding how users interact with our website (only with analytics consent).</li>
                    <li><strong className="text-white">To comply with legal obligations:</strong> Maintaining records as required by law.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ We will NOT use your personal data for any other purpose without obtaining fresh consent from you.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Data Retention</h2>
                  <p>We retain your personal data only for as long as necessary:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">Demo/Contact requests:</strong> 2 years from the date of submission</li>
                    <li><strong className="text-white">Generated documents:</strong> 1 year from the date of generation</li>
                    <li><strong className="text-white">Analytics cookies:</strong> Up to 2 years (or until you withdraw consent)</li>
                  </ul>
                  <p className="mt-3">
                    After the retention period expires, your personal data will be securely deleted or anonymised.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. Your Rights as a Data Principal
                  </h2>
                  <p>Under the DPDP Act 2023, you have the following rights:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">Right to Access:</strong> Request a summary of personal data we process about you.</li>
                    <li><strong className="text-white">Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data.</li>
                    <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw your consent at any time.</li>
                    <li><strong className="text-white">Right to Grievance Redressal:</strong> File a complaint with our Grievance Officer.</li>
                    <li><strong className="text-white">Right to Nominate:</strong> Nominate another individual in case of death or incapacity.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. How to Withdraw Your Consent</h2>
                  <p>You can withdraw your consent at any time by:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Emailing us at <a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> with the subject line "Withdraw Consent".</li>
                    <li>Writing to our Grievance Officer at <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a>.</li>
                    <li>Using the "Cookie Settings" button on our website.</li>
                  </ul>
                  <p className="mt-3">
                    Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal. We will process your request within <strong className="text-white">30 days</strong>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. Grievance Officer</h2>
                  <p>If you have any concerns about how we process your personal data, you can contact our Grievance Officer:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">Name:</strong> Shilpi Kulshrestha</p>
                    <p className="mt-2"><strong className="text-white">Designation:</strong> Grievance Officer & Founder, Businezexcellence StartX LLP</p>
                    <p className="mt-2"><strong className="text-white">Email:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">Phone:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">Response Time:</strong> Acknowledgment within 48 hours; resolution within <strong>7 working days</strong>.</p>
                  </div>
                  <p className="mt-4">
                    If you are not satisfied with our response, you have the right to file a complaint with the <strong className="text-white">Data Protection Board of India</strong>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. Important Notice
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• By checking the consent checkbox, you give us <strong>free, specific, informed, unconditional, and unambiguous</strong> consent to process your personal data.</li>
                      <li>• You can refuse to provide consent, or withdraw it later. However, we may not be able to provide certain services without your consent.</li>
                      <li>• We will not sell, rent, or share your personal data with third parties for marketing purposes.</li>
                      <li>• Your data may be shared with trusted service providers (e.g., Resend for emails, Google Sheets for storage).</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                HINDI CONTENT
            ============================================== */}
            {language === "hi" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. परिचय (Introduction)</h2>
                  <p>
                    यह सहमति सूचना <strong className="text-white">बिजनेस एक्सीलेंस स्टार्टX LLP</strong> ("हम", "हमारा") द्वारा जारी की गई है, जो <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> पर लीगल गैलेक्सी प्लेटफॉर्म संचालित करता है, और <strong className="text-white">डिजिटल पर्सनल डेटा प्रोटेक्शन एक्ट, 2023</strong> ("DPDP Act") तथा <strong className="text-white">DPDP नियम, 2025</strong> के अनुपालन में है।
                  </p>
                  <p className="mt-3">
                    यह सूचना बताती है कि हम कौन सा व्यक्तिगत डेटा एकत्र करते हैं, क्यों एकत्र करते हैं, हम इसका उपयोग कैसे करते हैं, और आप अपनी सहमति कैसे वापस ले सकते हैं। सहमति चेकबॉक्स को चुनकर, आप नीचे वर्णित अनुसार अपने व्यक्तिगत डेटा के प्रसंस्करण के लिए सहमति देते हैं।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. हम कौन सा व्यक्तिगत डेटा एकत्र करते हैं
                  </h2>
                  <p>जब आप हमारी वेबसाइट पर फॉर्म सबमिट करते हैं, तो हम एकत्र कर सकते हैं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पहचान डेटा:</strong> पहला नाम, अंतिम नाम</li>
                    <li><strong className="text-white">संपर्क डेटा:</strong> कार्य ईमेल पता, फ़ोन नंबर</li>
                    <li><strong className="text-white">पेशेवर डेटा:</strong> कंपनी का नाम, नौकरी का शीर्षक, कंपनी का आकार, उद्योग</li>
                    <li><strong className="text-white">संचार डेटा:</strong> आपका संदेश, चुनौतियाँ, या प्रश्न विवरण</li>
                    <li><strong className="text-white">तकनीकी डेटा:</strong> आईपी पता, ब्राउज़र प्रकार, डिवाइस जानकारी, और कुकीज़ (केवल तभी जब आप एनालिटिक्स कुकीज़ स्वीकार करते हैं)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">व्यक्तिगत डेटा</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">विशिष्ट उद्देश्य</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>नाम</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आपकी पहचान करने और संवाद में आपको सही तरीके से संबोधित करने के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ईमेल पता</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आपकी पूछताछ का जवाब देने और अनुरोधित दस्तावेज़ (जैसे जनरेट की गई नीतियां, DPDPA रिपोर्ट) भेजने के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>फ़ोन नंबर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तत्काल अनुपालन-संबंधी संचार या परामर्श शेड्यूल करने के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>कंपनी का नाम और पद</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आपकी संगठनात्मक आवश्यकताओं को समझने और अनुपालन सहायता को अनुकूलित करने के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>उद्योग और कंपनी का आकार</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आपके अनुपालन कार्यक्रम की परिपक्वता का विश्लेषण करने और प्रासंगिक सिफारिशें प्रदान करने के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>संदेश</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आपके विशिष्ट अनुरोध या समस्या को समझने और उसका जवाब देने के लिए।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. प्रसंस्करण का उद्देश्य
                  </h2>
                  <p>हम आपके व्यक्तिगत डेटा को निम्नलिखित विशिष्ट उद्देश्यों के लिए संसाधित करते हैं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">आपकी पूछताछ का जवाब देने के लिए:</strong> आपके डेमो अनुरोध या संपर्क फ़ॉर्म सबमिशन के बारे में आपसे संपर्क करना।</li>
                    <li><strong className="text-white">अनुरोधित सेवाएं प्रदान करने के लिए:</strong> आपको ईमेल के माध्यम से जनरेट किए गए दस्तावेज़ भेजना।</li>
                    <li><strong className="text-white">हमारी सेवाओं को बेहतर बनाने के लिए:</strong> यह समझना कि उपयोगकर्ता हमारी वेबसाइट के साथ कैसे इंटरैक्ट करते हैं (केवल एनालिटिक्स सहमति के साथ)।</li>
                    <li><strong className="text-white">कानूनी दायित्वों का पालन करने के लिए:</strong> कानून द्वारा आवश्यक रिकॉर्ड बनाए रखना।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ हम आपकी नई सहमति प्राप्त किए बिना आपके व्यक्तिगत डेटा का उपयोग किसी अन्य उद्देश्य के लिए नहीं करेंगे।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. डेटा प्रतिधारण (Data Retention)</h2>
                  <p>हम आपके व्यक्तिगत डेटा को केवल आवश्यक अवधि के लिए रखते हैं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">डेमो/संपर्क अनुरोध:</strong> सबमिशन की तारीख से 2 वर्ष</li>
                    <li><strong className="text-white">जनरेट किए गए दस्तावेज़:</strong> जनरेशन की तारीख से 1 वर्ष</li>
                    <li><strong className="text-white">एनालिटिक्स कुकीज़:</strong> 2 वर्ष तक (या जब तक आप सहमति वापस नहीं लेते)</li>
                  </ul>
                  <p className="mt-3">
                    प्रतिधारण अवधि समाप्त होने के बाद, आपका व्यक्तिगत डेटा सुरक्षित रूप से हटा दिया जाएगा या अनाम कर दिया जाएगा।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. डेटा प्रिंसिपल के रूप में आपके अधिकार
                  </h2>
                  <p>DPDP अधिनियम 2023 के तहत, आपके पास निम्नलिखित अधिकार हैं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पहुंच का अधिकार:</strong> हमारे द्वारा संसाधित व्यक्तिगत डेटा का सारांश मांगें।</li>
                    <li><strong className="text-white">सुधार का अधिकार:</strong> गलत या अपूर्ण डेटा में सुधार का अनुरोध करें।</li>
                    <li><strong className="text-white">मिटाने का अधिकार:</strong> अपने व्यक्तिगत डेटा को हटाने का अनुरोध करें।</li>
                    <li><strong className="text-white">सहमति वापस लेने का अधिकार:</strong> किसी भी समय अपनी सहमति वापस लें।</li>
                    <li><strong className="text-white">शिकायत निवारण का अधिकार:</strong> हमारे शिकायत अधिकारी के पास शिकायत दर्ज करें।</li>
                    <li><strong className="text-white">नामांकन का अधिकार:</strong> मृत्यु या अक्षमता की स्थिति में अपने अधिकारों का प्रयोग करने के लिए किसी अन्य व्यक्ति को नामित करें।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. अपनी सहमति कैसे वापस लें?</h2>
                  <p>आप कभी भी अपनी सहमति वापस ले सकते हैं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> पर "Withdraw Consent" विषय के साथ ईमेल करके।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> पर हमारे शिकायत अधिकारी को लिखकर।</li>
                    <li>हमारी वेबसाइट पर "कुकी सेटिंग्स" बटन का उपयोग करके।</li>
                  </ul>
                  <p className="mt-3">
                    सहमति वापस लेने से पहले सहमति के आधार पर प्रसंस्करण की वैधता प्रभावित नहीं होगी। हम <strong className="text-white">30 दिनों</strong> के भीतर आपके अनुरोध पर कार्रवाई करेंगे।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. शिकायत अधिकारी (Grievance Officer)</h2>
                  <p>यदि आपको हमारे डेटा प्रसंस्करण के बारे में कोई चिंता है, तो आप हमारे शिकायत अधिकारी से संपर्क कर सकते हैं:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">नाम:</strong> शिल्पी कुलश्रेष्ठ</p>
                    <p className="mt-2"><strong className="text-white">पदनाम:</strong> शिकायत अधिकारी और संस्थापक, बिजनेस एक्सीलेंस स्टार्टX LLP</p>
                    <p className="mt-2"><strong className="text-white">ईमेल:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">फ़ोन:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">प्रतिक्रिया समय:</strong> 48 घंटे के भीतर पावती; <strong>7 कार्य दिवसों</strong> के भीतर समाधान।</p>
                  </div>
                  <p className="mt-4">
                    यदि आप हमारी प्रतिक्रिया से संतुष्ट नहीं हैं, तो आपके पास <strong className="text-white">भारतीय डेटा संरक्षण बोर्ड</strong> के पास शिकायत दर्ज करने का अधिकार है।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. महत्वपूर्ण सूचना
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• सहमति चेकबॉक्स को चुनकर, आप हमें अपने व्यक्तिगत डेटा को संसाधित करने के लिए <strong>मुक्त, विशिष्ट, सूचित, बिना शर्त और स्पष्ट</strong> सहमति देते हैं।</li>
                      <li>• आप सहमति देने से मना कर सकते हैं, या बाद में इसे वापस ले सकते हैं। हालाँकि, हम आपकी सहमति के बिना कुछ सेवाएँ प्रदान नहीं कर सकते हैं।</li>
                      <li>• हम विपणन उद्देश्यों के लिए तीसरे पक्ष के साथ आपके व्यक्तिगत डेटा को बेच, किराए पर या साझा नहीं करेंगे।</li>
                      <li>• आपका डेटा विश्वसनीय सेवा प्रदाताओं (जैसे, ईमेल के लिए रीसेंड, भंडारण के लिए गूगल शीट्स) के साथ साझा किया जा सकता है।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                BENGALI CONTENT
            ============================================== */}
            {language === "bn" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. ভূমিকা (Introduction)</h2>
                  <p>
                    এই সম্মতি বিজ্ঞপ্তিটি <strong className="text-white">বিজনেস এক্সিলেন্স স্টার্টএক্স এলএলপি</strong> ("আমরা", "আমাদের") দ্বারা জারি করা হয়েছে, যা <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> এ লিগ্যাল গ্যালাক্সি প্ল্যাটফর্ম পরিচালনা করে এবং <strong className="text-white">ডিজিটাল পার্সোনাল ডেটা প্রোটেকশন অ্যাক্ট, ২০২৩</strong> ("DPDP Act") এবং <strong className="text-white">DPDP বিধি, ২০২৫</strong> এর সাথে সম্মত।
                  </p>
                  <p className="mt-3">
                    এই বিজ্ঞপ্তিটি ব্যাখ্যা করে যে আমরা কী ব্যক্তিগত ডেটা সংগ্রহ করি, কেন সংগ্রহ করি, আমরা এটি কীভাবে ব্যবহার করি এবং আপনি কীভাবে আপনার সম্মতি প্রত্যাহার করতে পারেন। সম্মতি চেকবক্স চেক করে, আপনি নীচে বর্ণিত হিসাবে আপনার ব্যক্তিগত ডেটা প্রক্রিয়াকরণে সম্মতি দেন।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. আমরা কী ব্যক্তিগত ডেটা সংগ্রহ করি
                  </h2>
                  <p>যখন আপনি আমাদের ওয়েবসাইটে একটি ফর্ম জমা দেন, আমরা সংগ্রহ করতে পারি:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">পরিচয় ডেটা:</strong> প্রথম নাম, শেষ নাম</li>
                    <li><strong className="text-white">যোগাযোগ ডেটা:</strong> কাজের ইমেল ঠিকানা, ফোন নম্বর</li>
                    <li><strong className="text-white">পেশাদার ডেটা:</strong> কোম্পানির নাম, কাজের শিরোনাম, কোম্পানির আকার, শিল্প</li>
                    <li><strong className="text-white">যোগাযোগ ডেটা:</strong> আপনার বার্তা, চ্যালেঞ্জ, বা প্রশ্নের বিবরণ</li>
                    <li><strong className="text-white">প্রযুক্তিগত ডেটা:</strong> আইপি ঠিকানা, ব্রাউজারের ধরন, ডিভাইসের তথ্য, এবং কুকিজ (শুধুমাত্র যদি আপনি অ্যানালিটিক্স কুকিজ গ্রহণ করেন)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ব্যক্তিগত ডেটা</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">নির্দিষ্ট উদ্দেশ্য</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>নাম</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপনাকে সনাক্ত করতে এবং যোগাযোগে আপনাকে সঠিকভাবে সম্বোধন করতে।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ইমেল ঠিকানা</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপনার জিজ্ঞাসার উত্তর দিতে এবং অনুরোধকৃত নথি (যেমন তৈরি নীতি, DPDPA রিপোর্ট) পাঠাতে।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ফোন নম্বর</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">জরুরি সম্মতি-সম্পর্কিত যোগাযোগ বা পরামর্শ নির্ধারণের জন্য।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>কোম্পানির নাম এবং পদ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপনার সাংগঠনিক প্রয়োজনীয়তা বুঝতে এবং সম্মতি সহায়তা কাস্টমাইজ করতে।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>শিল্প এবং কোম্পানির আকার</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপনার সম্মতি প্রোগ্রামের পরিপক্কতা বিশ্লেষণ করতে এবং প্রাসঙ্গিক সুপারিশ প্রদান করতে।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>বার্তা</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপনার নির্দিষ্ট অনুরোধ বা সমস্যা বুঝতে এবং উত্তর দিতে।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. প্রক্রিয়াকরণের উদ্দেশ্য
                  </h2>
                  <p>আমরা নিম্নলিখিত নির্দিষ্ট উদ্দেশ্যে আপনার ব্যক্তিগত ডেটা প্রক্রিয়া করি:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">আপনার জিজ্ঞাসার উত্তর দিতে:</strong> আপনার ডেমো অনুরোধ বা যোগাযোগ ফর্ম জমা সম্পর্কে আপনার সাথে যোগাযোগ করা।</li>
                    <li><strong className="text-white">অনুরোধকৃত পরিষেবা প্রদান করতে:</strong> ইমেলের মাধ্যমে আপনার কাছে তৈরি নথি পাঠানো।</li>
                    <li><strong className="text-white">আমাদের পরিষেবা উন্নত করতে:</strong> ব্যবহারকারীরা কীভাবে আমাদের ওয়েবসাইটের সাথে ইন্টারঅ্যাক্ট করে তা বোঝা (শুধুমাত্র অ্যানালিটিক্স সম্মতির সাথে)।</li>
                    <li><strong className="text-white">আইনি বাধ্যবাধকতা মেনে চলতে:</strong> আইন অনুসারে রেকর্ড রাখা।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ আমরা আপনার কাছ থেকে নতুন সম্মতি না নিয়ে আপনার ব্যক্তিগত ডেটা অন্য কোনো উদ্দেশ্যে ব্যবহার করব না।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ডেটা ধারণ (Data Retention)</h2>
                  <p>আমরা আপনার ব্যক্তিগত ডেটা শুধুমাত্র প্রয়োজনীয় সময়ের জন্য রাখি:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ডেমো/যোগাযোগের অনুরোধ:</strong> জমা দেওয়ার তারিখ থেকে ২ বছর</li>
                    <li><strong className="text-white">তৈরি নথি:</strong> তৈরি করার তারিখ থেকে ১ বছর</li>
                    <li><strong className="text-white">অ্যানালিটিক্স কুকিজ:</strong> ২ বছর পর্যন্ত (অথবা যতক্ষণ না আপনি সম্মতি প্রত্যাহার করেন)</li>
                  </ul>
                  <p className="mt-3">
                    ধারণ সময়সীমা শেষ হলে, আপনার ব্যক্তিগত ডেটা নিরাপদে মুছে ফেলা হবে বা বেনামী করা হবে।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ডেটা প্রিন্সিপাল হিসাবে আপনার অধিকার
                  </h2>
                  <p>DPDP আইন ২০২৩ এর অধীনে, আপনার নিম্নলিখিত অধিকার রয়েছে:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">অ্যাক্সেসের অধিকার:</strong> আমরা আপনার সম্পর্কে যে ব্যক্তিগত ডেটা প্রক্রিয়া করি তার একটি সারাংশ অনুরোধ করুন।</li>
                    <li><strong className="text-white">সংশোধনের অধিকার:</strong> ভুল বা অসম্পূর্ণ ডেটা সংশোধনের অনুরোধ করুন।</li>
                    <li><strong className="text-white">মুছে ফেলার অধিকার:</strong> আপনার ব্যক্তিগত ডেটা মুছে ফেলার অনুরোধ করুন।</li>
                    <li><strong className="text-white">সম্মতি প্রত্যাহারের অধিকার:</strong> যে কোনো সময় আপনার সম্মতি প্রত্যাহার করুন।</li>
                    <li><strong className="text-white">অভিযোগ নিষ্পত্তির অধিকার:</strong> আমাদের অভিযোগ কর্মকর্তার কাছে অভিযোগ দায়ের করুন।</li>
                    <li><strong className="text-white">মনোনয়নের অধিকার:</strong> মৃত্যু বা অক্ষমতার ক্ষেত্রে আপনার অধিকার প্রয়োগের জন্য অন্য একজনকে মনোনীত করুন।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. কীভাবে আপনার সম্মতি প্রত্যাহার করবেন?</h2>
                  <p>আপনি যে কোনো সময় আপনার সম্মতি প্রত্যাহার করতে পারেন:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> এ "Withdraw Consent" বিষয়ের সাথে ইমেল করে।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> এ আমাদের অভিযোগ কর্মকর্তাকে লিখে।</li>
                    <li>আমাদের ওয়েবসাইটে "কুকি সেটিংস" বোতাম ব্যবহার করে।</li>
                  </ul>
                  <p className="mt-3">
                    সম্মতি প্রত্যাহার প্রত্যাহারের আগে সম্মতির ভিত্তিতে প্রক্রিয়াকরণের বৈধতাকে প্রভাবিত করবে না। আমরা <strong className="text-white">৩০ দিনের</strong> মধ্যে আপনার অনুরোধ প্রক্রিয়া করব।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. অভিযোগ কর্মকর্তা (Grievance Officer)</h2>
                  <p>যদি আপনার আমাদের ডেটা প্রক্রিয়াকরণ সম্পর্কে কোনো উদ্বেগ থাকে, আপনি আমাদের অভিযোগ কর্মকর্তার সাথে যোগাযোগ করতে পারেন:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">নাম:</strong> শিল্পী কুলশ্রেষ্ঠ</p>
                    <p className="mt-2"><strong className="text-white">পদবি:</strong> অভিযোগ কর্মকর্তা এবং প্রতিষ্ঠাতা, বিজনেস এক্সিলেন্স স্টার্টএক্স এলএলপি</p>
                    <p className="mt-2"><strong className="text-white">ইমেল:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ফোন:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">প্রতিক্রিয়া সময়:</strong> ৪৮ ঘণ্টার মধ্যে স্বীকৃতি; <strong>৭ কার্যদিবসের</strong> মধ্যে সমাধান।</p>
                  </div>
                  <p className="mt-4">
                    যদি আপনি আমাদের প্রতিক্রিয়ায় সন্তুষ্ট না হন, তবে আপনার <strong className="text-white">ভারতীয় ডেটা সুরক্ষা বোর্ড</strong> এর কাছে অভিযোগ দায়ের করার অধিকার রয়েছে।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. গুরুত্বপূর্ণ বিজ্ঞপ্তি
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• সম্মতি চেকবক্স চেক করে, আপনি আমাদের আপনার ব্যক্তিগত ডেটা প্রক্রিয়া করার জন্য <strong>মুক্ত, নির্দিষ্ট, সুনির্দিষ্ট, শর্তহীন এবং দ্ব্যর্থহীন</strong> সম্মতি দেন।</li>
                      <li>• আপনি সম্মতি দিতে অস্বীকার করতে পারেন, বা পরে এটি প্রত্যাহার করতে পারেন। তবে, আমরা আপনার সম্মতি ছাড়া কিছু পরিষেবা প্রদান করতে সক্ষম নাও হতে পারি।</li>
                      <li>• আমরা বিপণনের উদ্দেশ্যে তৃতীয় পক্ষের সাথে আপনার ব্যক্তিগত ডেটা বিক্রি, ভাড়া বা ভাগ করব না।</li>
                      <li>• আপনার ডেটা বিশ্বস্ত পরিষেবা প্রদানকারীদের (যেমন, ইমেলের জন্য রিসেন্ড, স্টোরেজের জন্য গুগল শীট) সাথে ভাগ করা হতে পারে।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                MARATHI CONTENT
            ============================================== */}
            {language === "mr" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. प्रस्तावना (Introduction)</h2>
                  <p>
                    ही संमती सूचना <strong className="text-white">बिझनेस एक्सलन्स स्टार्टएक्स एलएलपी</strong> ("आम्ही", "आमचे") द्वारे जारी केली आहे, जी <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> वर लीगल गॅलेक्सी प्लॅटफॉर्म चालवते आणि <strong className="text-white">डिजिटल पर्सनल डेटा प्रोटेक्शन अॅक्ट, २०२३</strong> ("DPDP Act") आणि <strong className="text-white">DPDP नियम, २०२५</strong> चे पालन करते.
                  </p>
                  <p className="mt-3">
                    ही सूचना स्पष्ट करते की आम्ही कोणता वैयक्तिक डेटा गोळा करतो, का गोळा करतो, आम्ही तो कसा वापरतो आणि तुम्ही तुमची संमती कशी मागे घेऊ शकता. संमती चेकबॉक्स चेक करून, तुम्ही खाली वर्णन केल्यानुसार तुमच्या वैयक्तिक डेटाच्या प्रक्रियेस संमती देता.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. आम्ही कोणता वैयक्तिक डेटा गोळा करतो
                  </h2>
                  <p>जेव्हा तुम्ही आमच्या वेबसाइटवर फॉर्म सबमिट करता, तेव्हा आम्ही गोळा करू शकतो:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ओळख डेटा:</strong> पहिले नाव, आडनाव</li>
                    <li><strong className="text-white">संपर्क डेटा:</strong> कामाचा ईमेल पत्ता, फोन नंबर</li>
                    <li><strong className="text-white">व्यावसायिक डेटा:</strong> कंपनीचे नाव, नोकरीचे शीर्षक, कंपनीचा आकार, उद्योग</li>
                    <li><strong className="text-white">संप्रेषण डेटा:</strong> तुमचा संदेश, आव्हाने किंवा प्रश्नाचे वर्णन</li>
                    <li><strong className="text-white">तांत्रिक डेटा:</strong> आयपी पत्ता, ब्राउझर प्रकार, डिव्हाइस माहिती आणि कुकीज (केवळ तेव्हाच जेव्हा तुम्ही अॅनालिटिक्स कुकीज स्वीकारता)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">वैयक्तिक डेटा</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">विशिष्ट उद्देश्य</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>नाव</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमची ओळख पटवण्यासाठी आणि संवादात तुम्हाला योग्यरित्या संबोधण्यासाठी.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ईमेल पत्ता</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमच्या चौकशीला उत्तर देण्यासाठी आणि विनंती केलेली कागदपत्रे (उदा. तयार केलेली धोरणे, DPDPA अहवाल) पाठवण्यासाठी.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>फोन नंबर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तातडीच्या अनुपालन-संबंधित संवादासाठी किंवा सल्ला नियोजित करण्यासाठी.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>कंपनीचे नाव आणि पद</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमच्या संस्थात्मक गरजा समजून घेण्यासाठी आणि अनुपालन सहाय्य सानुकूलित करण्यासाठी.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>उद्योग आणि कंपनीचा आकार</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमच्या अनुपालन कार्यक्रमाची परिपक्वता विश्लेषित करण्यासाठी आणि संबंधित शिफारसी प्रदान करण्यासाठी.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>संदेश</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमची विशिष्ट विनंती किंवा समस्या समजून घेण्यासाठी आणि त्यास प्रतिसाद देण्यासाठी.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. प्रक्रियेचा उद्देश्य
                  </h2>
                  <p>आम्ही तुमचा वैयक्तिक डेटा खालील विशिष्ट उद्देशांसाठी प्रक्रिया करतो:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">तुमच्या चौकशीला उत्तर देण्यासाठी:</strong> तुमच्या डेमो विनंती किंवा संपर्क फॉर्म सबमिशनबद्दल तुमच्याशी संपर्क साधणे.</li>
                    <li><strong className="text-white">विनंती केलेल्या सेवा प्रदान करण्यासाठी:</strong> ईमेलद्वारे तयार केलेली कागदपत्रे तुम्हाला पाठवणे.</li>
                    <li><strong className="text-white">आमच्या सेवा सुधारण्यासाठी:</strong> वापरकर्ते आमच्या वेबसाइटशी कसे संवाद साधतात हे समजून घेणे (केवळ अॅनालिटिक्स संमतीसह).</li>
                    <li><strong className="text-white">कायदेशीर जबाबदाऱ्या पूर्ण करण्यासाठी:</strong> कायद्यानुसार आवश्यक रेकॉर्ड ठेवणे.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ आम्ही तुमची नवीन संमती घेतल्याशिवाय तुमचा वैयक्तिक डेटा इतर कोणत्याही उद्देशासाठी वापरणार नाही.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. डेटा धारणा (Data Retention)</h2>
                  <p>आम्ही तुमचा वैयक्तिक डेटा केवळ आवश्यक तेवढाच काळ ठेवतो:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">डेमो/संपर्क विनंत्या:</strong> सबमिशनच्या तारखेपासून २ वर्षे</li>
                    <li><strong className="text-white">तयार केलेली कागदपत्रे:</strong> निर्मितीच्या तारखेपासून १ वर्ष</li>
                    <li><strong className="text-white">अॅनालिटिक्स कुकीज:</strong> २ वर्षांपर्यंत (किंवा तुम्ही संमती मागे घेईपर्यंत)</li>
                  </ul>
                  <p className="mt-3">
                    धारणा कालावधी संपल्यानंतर, तुमचा वैयक्तिक डेटा सुरक्षितपणे हटवला जाईल किंवा निनावी केला जाईल.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. डेटा प्रिन्सिपल म्हणून तुमचे अधिकार
                  </h2>
                  <p>DPDP कायदा २०२३ अंतर्गत, तुमच्याकडे खालील अधिकार आहेत:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">प्रवेशाचा अधिकार:</strong> आम्ही तुमच्याबद्दल प्रक्रिया करत असलेल्या वैयक्तिक डेटाचा सारांश मागा.</li>
                    <li><strong className="text-white">दुरुस्तीचा अधिकार:</strong> चुकीच्या किंवा अपूर्ण डेटामध्ये दुरुस्तीची विनंती करा.</li>
                    <li><strong className="text-white">हटवण्याचा अधिकार:</strong> तुमचा वैयक्तिक डेटा हटवण्याची विनंती करा.</li>
                    <li><strong className="text-white">संमती मागे घेण्याचा अधिकार:</strong> कोणत्याही वेळी तुमची संमती मागे घ्या.</li>
                    <li><strong className="text-white">तक्रार निवारणाचा अधिकार:</strong> आमच्या तक्रार अधिकाऱ्याकडे तक्रार दाखल करा.</li>
                    <li><strong className="text-white">नामनिर्देशनाचा अधिकार:</strong> मृत्यू किंवा अक्षमतेच्या बाबतीत तुमचे अधिकार वापरण्यासाठी दुसऱ्या व्यक्तीची नियुक्ती करा.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. तुमची संमती कशी मागे घ्यावी?</h2>
                  <p>तुम्ही कोणत्याही वेळी तुमची संमती मागे घेऊ शकता:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> वर "Withdraw Consent" या विषयासह ईमेल करून.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> वर आमच्या तक्रार अधिकाऱ्याला लिहून.</li>
                    <li>आमच्या वेबसाइटवर "कुकी सेटिंग्ज" बटण वापरून.</li>
                  </ul>
                  <p className="mt-3">
                    संमती मागे घेण्यामुळे मागे घेण्यापूर्वी संमतीवर आधारित प्रक्रियेच्या वैधतेवर परिणाम होणार नाही. आम्ही <strong className="text-white">३० दिवसांच्या</strong> आत तुमच्या विनंतीवर प्रक्रिया करू.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. तक्रार अधिकारी (Grievance Officer)</h2>
                  <p>तुम्हाला आमच्या डेटा प्रक्रियेबद्दल काही चिंता असल्यास, तुम्ही आमच्या तक्रार अधिकाऱ्याशी संपर्क साधू शकता:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">नाव:</strong> शिल्पी कुलश्रेष्ठ</p>
                    <p className="mt-2"><strong className="text-white">पद:</strong> तक्रार अधिकारी आणि संस्थापक, बिझनेस एक्सलन्स स्टार्टएक्स एलएलपी</p>
                    <p className="mt-2"><strong className="text-white">ईमेल:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">फोन:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">प्रतिसाद वेळ:</strong> ४८ तासांत पोच; <strong>७ कामकाजाच्या दिवसांत</strong> निराकरण.</p>
                  </div>
                  <p className="mt-4">
                    तुम्ही आमच्या प्रतिसादाने समाधानी नसल्यास, तुम्हाला <strong className="text-white">भारतीय डेटा संरक्षण मंडळाकडे</strong> तक्रार दाखल करण्याचा अधिकार आहे.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. महत्त्वाची सूचना
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• संमती चेकबॉक्स चेक करून, तुम्ही आम्हाला तुमचा वैयक्तिक डेटा प्रक्रिया करण्यासाठी <strong>मुक्त, विशिष्ट, माहितीपूर्ण, बिनशर्त आणि स्पष्ट</strong> संमती देता.</li>
                      <li>• तुम्ही संमती देण्यास नकार देऊ शकता किंवा नंतर ती मागे घेऊ शकता. तथापि, तुमच्या संमतीशिवाय आम्ही काही सेवा प्रदान करू शकणार नाही.</li>
                      <li>• आम्ही विपणनाच्या उद्देशाने तृतीय पक्षांसह तुमचा वैयक्तिक डेटा विकणार, भाड्याने देणार किंवा सामायिक करणार नाही.</li>
                      <li>• तुमचा डेटा विश्वासार्ह सेवा प्रदात्यांसह (उदा. ईमेलसाठी रिसेंड, स्टोरेजसाठी गुगल शीट्स) सामायिक केला जाऊ शकतो.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}






            {/* ==============================================
                TELUGU CONTENT
            ============================================== */}
            {language === "te" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. పరిచయం (Introduction)</h2>
                  <p>
                    ఈ సమ్మతి నోటీసు <strong className="text-white">బిజినెస్ ఎక్సలెన్స్ స్టార్ట్ఎక్స్ LLP</strong> ("మేము", "మా") ద్వారా జారీ చేయబడింది, ఇది <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> వద్ద లీగల్ గెలాక్సీ ప్లాట్‌ఫారమ్‌ను నిర్వహిస్తుంది మరియు <strong className="text-white">డిజిటల్ పర్సనల్ డేటా ప్రొటెక్షన్ యాక్ట్, 2023</strong> ("DPDP Act") మరియు <strong className="text-white">DPDP నియమాలు, 2025</strong>కు అనుగుణంగా ఉంది.
                  </p>
                  <p className="mt-3">
                    ఈ నోటీసు మేము ఏ వ్యక్తిగత డేటాను సేకరిస్తాము, ఎందుకు సేకరిస్తాము, మేము దానిని ఎలా ఉపయోగిస్తాము మరియు మీరు మీ సమ్మతిని ఎలా ఉపసంహరించుకోవచ్చో వివరిస్తుంది. సమ్మతి చెక్‌బాక్స్‌ను ఎంచుకోవడం ద్వారా, మీరు క్రింద వివరించిన విధంగా మీ వ్యక్తిగత డేటా ప్రాసెసింగ్‌కు సమ్మతిని ఇస్తారు.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. మేము సేకరించే వ్యక్తిగత డేటా
                  </h2>
                  <p>మీరు మా వెబ్‌సైట్‌లో ఫారమ్‌ను సమర్పించినప్పుడు, మేము సేకరించవచ్చు:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">గుర్తింపు డేటా:</strong> మొదటి పేరు, చివరి పేరు</li>
                    <li><strong className="text-white">సంప్రదింపు డేటా:</strong> పని ఇమెయిల్ చిరునామా, ఫోన్ నంబర్</li>
                    <li><strong className="text-white">వృత్తిపరమైన డేటా:</strong> కంపెనీ పేరు, ఉద్యోగ శీర్షిక, కంపెనీ పరిమాణం, పరిశ్రమ</li>
                    <li><strong className="text-white">కమ్యూనికేషన్ డేటా:</strong> మీ సందేశం, సవాళ్లు లేదా ప్రశ్న వివరణ</li>
                    <li><strong className="text-white">సాంకేతిక డేటా:</strong> IP చిరునామా, బ్రౌజర్ రకం, పరికర సమాచారం మరియు కుకీలు (మీరు అనలిటిక్స్ కుకీలను అంగీకరిస్తే మాత్రమే)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">వ్యక్తిగత డేటా</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">నిర్దిష్ట ప్రయోజనం</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>పేరు</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">మిమ్మల్ని గుర్తించడానికి మరియు కమ్యూనికేషన్‌లలో మిమ్మల్ని సరిగ్గా ఉద్దేశించడానికి.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ఇమెయిల్ చిరునామా</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">మీ విచారణకు ప్రత్యుత్తరం ఇవ్వడానికి మరియు అభ్యర్థించిన పత్రాలను (ఉదా. రూపొందించిన విధానాలు, DPDPA నివేదికలు) పంపడానికి.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ఫోన్ నంబర్</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">అత్యవసర సమ్మతి-సంబంధిత కమ్యూనికేషన్ లేదా సంప్రదింపులను షెడ్యూల్ చేయడానికి.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>కంపెనీ పేరు & ఉద్యోగ శీర్షిక</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">మీ సంస్థాగత అవసరాలను అర్థం చేసుకోవడానికి మరియు సమ్మతి సహాయాన్ని అనుకూలీకరించడానికి.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>పరిశ్రమ & కంపెనీ పరిమాణం</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">మీ సమ్మతి కార్యక్రమం యొక్క పరిపక్వతను విశ్లేషించడానికి మరియు సంబంధిత సిఫార్సులను అందించడానికి.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>సందేశం</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">మీ నిర్దిష్ట అభ్యర్థన లేదా సమస్యను అర్థం చేసుకోవడానికి మరియు ప్రత్యుత్తరం ఇవ్వడానికి.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. ప్రాసెసింగ్ యొక్క ప్రయోజనం
                  </h2>
                  <p>మేము మీ వ్యక్తిగత డేటాను ఈ క్రింది నిర్దిష్ట ప్రయోజనాల కోసం ప్రాసెస్ చేస్తాము:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">మీ విచారణలకు ప్రత్యుత్తరం ఇవ్వడానికి:</strong> మీ డెమో అభ్యర్థన లేదా సంప్రదింపు ఫారమ్ సమర్పణ గురించి మిమ్మల్ని సంప్రదించడం.</li>
                    <li><strong className="text-white">అభ్యర్థించిన సేవలను అందించడానికి:</strong> ఇమెయిల్ ద్వారా రూపొందించిన పత్రాలను మీకు పంపడం.</li>
                    <li><strong className="text-white">మా సేవలను మెరుగుపరచడానికి:</strong> వినియోగదారులు మా వెబ్‌సైట్‌తో ఎలా పరస్పరం సంభాషిస్తారో అర్థం చేసుకోవడం (అనలిటిక్స్ సమ్మతితో మాత్రమే).</li>
                    <li><strong className="text-white">చట్టపరమైన బాధ్యతలను పాటించడానికి:</strong> చట్టం ద్వారా అవసరమైన రికార్డులను నిర్వహించడం.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ మీ నుండి కొత్త సమ్మతిని పొందకుండా మేము మీ వ్యక్తిగత డేటాను ఏ ఇతర ప్రయోజనం కోసం ఉపయోగించము.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. డేటా నిలుపుదల (Data Retention)</h2>
                  <p>మేము మీ వ్యక్తిగత డేటాను అవసరమైన వరకు మాత్రమే ఉంచుతాము:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">డెమో/సంప్రదింపు అభ్యర్థనలు:</strong> సమర్పణ తేదీ నుండి 2 సంవత్సరాలు</li>
                    <li><strong className="text-white">రూపొందించిన పత్రాలు:</strong> రూపొందించిన తేదీ నుండి 1 సంవత్సరం</li>
                    <li><strong className="text-white">అనలిటిక్స్ కుకీలు:</strong> 2 సంవత్సరాల వరకు (లేదా మీరు సమ్మతిని ఉపసంహరించుకునే వరకు)</li>
                  </ul>
                  <p className="mt-3">
                    నిలుపుదల కాలం ముగిసిన తర్వాత, మీ వ్యక్తిగత డేటా సురక్షితంగా తొలగించబడుతుంది లేదా అనామకంగా మార్చబడుతుంది.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. డేటా ప్రిన్సిపాల్‌గా మీ హక్కులు
                  </h2>
                  <p>DPDP చట్టం 2023 ప్రకారం, మీకు ఈ క్రింది హక్కులు ఉన్నాయి:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">యాక్సెస్ హక్కు:</strong> మేము మీ గురించి ప్రాసెస్ చేసే వ్యక్తిగత డేటా యొక్క సారాంశాన్ని అభ్యర్థించండి.</li>
                    <li><strong className="text-white">సవరణ హక్కు:</strong> తప్పు లేదా అసంపూర్ణ డేటా సవరణను అభ్యర్థించండి.</li>
                    <li><strong className="text-white">తొలగింపు హక్కు:</strong> మీ వ్యక్తిగత డేటా తొలగింపును అభ్యర్థించండి.</li>
                    <li><strong className="text-white">సమ్మతిని ఉపసంహరించుకునే హక్కు:</strong> ఎప్పుడైనా మీ సమ్మతిని ఉపసంహరించుకోండి.</li>
                    <li><strong className="text-white">ఫిర్యాదు పరిష్కార హక్కు:</strong> మా ఫిర్యాదు అధికారికి ఫిర్యాదు చేయండి.</li>
                    <li><strong className="text-white">నామినేట్ చేసే హక్కు:</strong> మరణం లేదా అసమర్థత విషయంలో మీ హక్కులను వినియోగించడానికి మరొక వ్యక్తిని నామినేట్ చేయండి.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. మీ సమ్మతిని ఎలా ఉపసంహరించుకోవాలి?</h2>
                  <p>మీరు ఎప్పుడైనా మీ సమ్మతిని ఉపసంహరించుకోవచ్చు:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> కు "Withdraw Consent" అనే విషయంతో ఇమెయిల్ చేయడం ద్వారా.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> వద్ద మా ఫిర్యాదు అధికారికి వ్రాయడం ద్వారా.</li>
                    <li>మా వెబ్‌సైట్‌లో "కుకీ సెట్టింగ్‌లు" బటన్‌ను ఉపయోగించడం ద్వారా.</li>
                  </ul>
                  <p className="mt-3">
                    సమ్మతిని ఉపసంహరించుకోవడం వల్ల ఉపసంహరణకు ముందు సమ్మతి ఆధారంగా ప్రాసెసింగ్ యొక్క చట్టబద్ధతపై ప్రభావం పడదు. మేము <strong className="text-white">30 రోజులలో</strong> మీ అభ్యర్థనను ప్రాసెస్ చేస్తాము.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. ఫిర్యాదు అధికారి (Grievance Officer)</h2>
                  <p>మా డేటా ప్రాసెసింగ్ గురించి మీకు ఏదైనా ఆందోళన ఉంటే, మీరు మా ఫిర్యాదు అధికారిని సంప్రదించవచ్చు:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">పేరు:</strong> శిల్పి కులశ్రేష్ఠ</p>
                    <p className="mt-2"><strong className="text-white">హోదా:</strong> ఫిర్యాదు అధికారి & వ్యవస్థాపకుడు, బిజినెస్ ఎక్సలెన్స్ స్టార్ట్ఎక్స్ LLP</p>
                    <p className="mt-2"><strong className="text-white">ఇమెయిల్:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ఫోన్:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">ప్రతిస్పందన సమయం:</strong> 48 గంటల్లో రసీదు; <strong>7 పని దినాలలో</strong> పరిష్కారం.</p>
                  </div>
                  <p className="mt-4">
                    మా ప్రతిస్పందనతో మీరు సంతృప్తి చెందకపోతే, మీరు <strong className="text-white">భారతీయ డేటా ప్రొటెక్షన్ బోర్డు</strong>కి ఫిర్యాదు చేసే హక్కును కలిగి ఉన్నారు.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. ముఖ్యమైన నోటీసు
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• సమ్మతి చెక్‌బాక్స్‌ను ఎంచుకోవడం ద్వారా, మీరు మీ వ్యక్తిగత డేటాను ప్రాసెస్ చేయడానికి మాకు <strong>ఉచిత, నిర్దిష్ట, సమాచారం ఇచ్చిన, షరతులు లేని మరియు సందిగ్ధత లేని</strong> సమ్మతిని ఇస్తారు.</li>
                      <li>• మీరు సమ్మతిని ఇవ్వడానికి నిరాకరించవచ్చు లేదా తర్వాత ఉపసంహరించుకోవచ్చు. అయితే, మీ సమ్మతి లేకుండా మేము కొన్ని సేవలను అందించలేము.</li>
                      <li>• మేము మార్కెటింగ్ ప్రయోజనాల కోసం మీ వ్యక్తిగత డేటాను మూడవ పక్షాలకు విక్రయించము, అద్దెకు ఇవ్వము లేదా పంచుకోము.</li>
                      <li>• మీ డేటా విశ్వసనీయ సేవా ప్రదాతలతో (ఉదా. ఇమెయిల్ కోసం రీసెండ్, నిల్వ కోసం గూగుల్ షీట్స్) పంచుకోబడవచ్చు.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                TAMIL CONTENT
            ============================================== */}
            {language === "ta" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. அறிமுகம் (Introduction)</h2>
                  <p>
                    இந்த ஒப்புதல் அறிவிப்பு <strong className="text-white">பிசினஸ் எக்சலன்ஸ் ஸ்டார்ட்எக்ஸ் LLP</strong> ("நாங்கள்", "எங்கள்") ஆல் வழங்கப்பட்டது, இது <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> இல் லீகல் கேலக்ஸி தளத்தை இயக்குகிறது மற்றும் <strong className="text-white">டிஜிட்டல் தனிநபர் தரவு பாதுகாப்பு சட்டம், 2023</strong> ("DPDP Act") மற்றும் <strong className="text-white">DPDP விதிகள், 2025</strong> ஆகியவற்றுக்கு இணங்குகிறது.
                  </p>
                  <p className="mt-3">
                    இந்த அறிவிப்பு நாங்கள் எந்த தனிப்பட்ட தரவை சேகரிக்கிறோம், ஏன் சேகரிக்கிறோம், அதை எவ்வாறு பயன்படுத்துகிறோம் மற்றும் உங்கள் ஒப்புதலை எவ்வாறு திரும்பப் பெறுவது என்பதை விளக்குகிறது. ஒப்புதல் பெட்டியைத் தேர்ந்தெடுப்பதன் மூலம், கீழே விவரிக்கப்பட்டுள்ளபடி உங்கள் தனிப்பட்ட தரவைச் செயலாக்க ஒப்புதல் அளிக்கிறீர்கள்.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. நாங்கள் சேகரிக்கும் தனிப்பட்ட தரவு
                  </h2>
                  <p>நீங்கள் எங்கள் இணையதளத்தில் ஒரு படிவத்தைச் சமர்ப்பிக்கும்போது, நாங்கள் சேகரிக்கலாம்:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">அடையாள தரவு:</strong> முதல் பெயர், கடைசி பெயர்</li>
                    <li><strong className="text-white">தொடர்பு தரவு:</strong> வேலை மின்னஞ்சல் முகவரி, தொலைபேசி எண்</li>
                    <li><strong className="text-white">தொழில்முறை தரவு:</strong> நிறுவனத்தின் பெயர், வேலை தலைப்பு, நிறுவனத்தின் அளவு, தொழில்</li>
                    <li><strong className="text-white">தொடர்பு தரவு:</strong> உங்கள் செய்தி, சவால்கள் அல்லது கேள்வி விவரம்</li>
                    <li><strong className="text-white">தொழில்நுட்ப தரவு:</strong> IP முகவரி, உலாவி வகை, சாதன தகவல் மற்றும் குக்கீகள் (நீங்கள் பகுப்பாய்வு குக்கீகளை ஏற்றுக்கொண்டால் மட்டுமே)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">தனிப்பட்ட தரவு</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">குறிப்பிட்ட நோக்கம்</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>பெயர்</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">உங்களை அடையாளம் காணவும், தொடர்புகளில் உங்களை சரியாக உரையாற்றவும்.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>மின்னஞ்சல் முகவரி</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">உங்கள் விசாரணைக்கு பதிலளிக்கவும், கோரப்பட்ட ஆவணங்களை (எ.கா. உருவாக்கப்பட்ட கொள்கைகள், DPDPA அறிக்கைகள்) அனுப்பவும்.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>தொலைபேசி எண்</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">அவசர இணக்க தொடர்பு அல்லது ஆலோசனைகளை திட்டமிட.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>நிறுவனத்தின் பெயர் & வேலை தலைப்பு</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">உங்கள் நிறுவன தேவைகளைப் புரிந்துகொள்ளவும், இணக்க உதவியை வடிவமைக்கவும்.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>தொழில் & நிறுவனத்தின் அளவு</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">உங்கள் இணக்க திட்டத்தின் முதிர்ச்சியை பகுப்பாய்வு செய்யவும், பொருத்தமான பரிந்துரைகளை வழங்கவும்.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>செய்தி</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">உங்கள் குறிப்பிட்ட கோரிக்கை அல்லது சிக்கலைப் புரிந்துகொண்டு பதிலளிக்க.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. செயலாக்கத்தின் நோக்கம்
                  </h2>
                  <p>பின்வரும் குறிப்பிட்ட நோக்கங்களுக்காக உங்கள் தனிப்பட்ட தரவை நாங்கள் செயலாக்குகிறோம்:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">உங்கள் விசாரணைகளுக்கு பதிலளிக்க:</strong> உங்கள் டெமோ கோரிக்கை அல்லது தொடர்பு படிவ சமர்ப்பிப்பு பற்றி உங்களைத் தொடர்புகொள்வது.</li>
                    <li><strong className="text-white">கோரப்பட்ட சேவைகளை வழங்க:</strong> மின்னஞ்சல் வழியாக உருவாக்கப்பட்ட ஆவணங்களை உங்களுக்கு அனுப்புவது.</li>
                    <li><strong className="text-white">எங்கள் சேவைகளை மேம்படுத்த:</strong> பயனர்கள் எங்கள் இணையதளத்துடன் எவ்வாறு தொடர்பு கொள்கிறார்கள் என்பதைப் புரிந்துகொள்வது (பகுப்பாய்வு ஒப்புதலுடன் மட்டுமே).</li>
                    <li><strong className="text-white">சட்ட கடமைகளுக்கு இணங்க:</strong> சட்டத்தால் தேவைப்படும் பதிவுகளை பராமரித்தல்.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ புதிய ஒப்புதலைப் பெறாமல் உங்கள் தனிப்பட்ட தரவை வேறு எந்த நோக்கத்திற்கும் பயன்படுத்த மாட்டோம்.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. தரவு தக்கவைப்பு (Data Retention)</h2>
                  <p>தேவையான காலம் வரை மட்டுமே உங்கள் தனிப்பட்ட தரவை வைத்திருக்கிறோம்:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">டெமோ/தொடர்பு கோரிக்கைகள்:</strong> சமர்ப்பித்த தேதியிலிருந்து 2 ஆண்டுகள்</li>
                    <li><strong className="text-white">உருவாக்கப்பட்ட ஆவணங்கள்:</strong> உருவாக்கிய தேதியிலிருந்து 1 ஆண்டு</li>
                    <li><strong className="text-white">பகுப்பாய்வு குக்கீகள்:</strong> 2 ஆண்டுகள் வரை (அல்லது நீங்கள் ஒப்புதலை திரும்பப் பெறும் வரை)</li>
                  </ul>
                  <p className="mt-3">
                    தக்கவைப்பு காலம் முடிந்ததும், உங்கள் தனிப்பட்ட தரவு பாதுகாப்பாக நீக்கப்படும் அல்லது அநாமதேயமாக்கப்படும்.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. தரவு முதன்மையராக உங்கள் உரிமைகள்
                  </h2>
                  <p>DPDP சட்டம் 2023 இன் கீழ், உங்களுக்கு பின்வரும் உரிமைகள் உள்ளன:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">அணுகல் உரிமை:</strong> உங்களைப் பற்றி நாங்கள் செயலாக்கும் தனிப்பட்ட தரவின் சுருக்கத்தைக் கோரவும்.</li>
                    <li><strong className="text-white">திருத்தம் செய்யும் உரிமை:</strong> தவறான அல்லது முழுமையற்ற தரவைத் திருத்தக் கோரவும்.</li>
                    <li><strong className="text-white">அழிக்கும் உரிமை:</strong> உங்கள் தனிப்பட்ட தரவை நீக்கக் கோரவும்.</li>
                    <li><strong className="text-white">ஒப்புதலை திரும்பப் பெறும் உரிமை:</strong> எப்போது வேண்டுமானாலும் உங்கள் ஒப்புதலைத் திரும்பப் பெறவும்.</li>
                    <li><strong className="text-white">குறைதீர்ப்பு உரிமை:</strong> எங்கள் குறைதீர் அதிகாரியிடம் புகார் அளிக்கவும்.</li>
                    <li><strong className="text-white">பரிந்துரைக்கும் உரிமை:</strong> இறப்பு அல்லது இயலாமை ஏற்பட்டால் உங்கள் உரிமைகளைப் பயன்படுத்த மற்றொரு நபரை நியமிக்கவும்.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. உங்கள் ஒப்புதலை எவ்வாறு திரும்பப் பெறுவது?</h2>
                  <p>எப்போது வேண்டுமானாலும் உங்கள் ஒப்புதலைத் திரும்பப் பெறலாம்:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> க்கு "Withdraw Consent" என்ற தலைப்பில் மின்னஞ்சல் அனுப்புவதன் மூலம்.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> இல் எங்கள் குறைதீர் அதிகாரிக்கு எழுதுவதன் மூலம்.</li>
                    <li>எங்கள் இணையதளத்தில் "குக்கீ அமைப்புகள்" பொத்தானைப் பயன்படுத்துவதன் மூலம்.</li>
                  </ul>
                  <p className="mt-3">
                    ஒப்புதலைத் திரும்பப் பெறுவது திரும்பப் பெறுவதற்கு முன் ஒப்புதலை அடிப்படையாகக் கொண்ட செயலாக்கத்தின் சட்டபூர்வமான தன்மையை பாதிக்காது. <strong className="text-white">30 நாட்களுக்குள்</strong> உங்கள் கோரிக்கையைச் செயல்படுத்துவோம்.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. குறைதீர் அதிகாரி (Grievance Officer)</h2>
                  <p>எங்கள் தரவு செயலாக்கம் குறித்து உங்களுக்கு ஏதேனும் கவலை இருந்தால், எங்கள் குறைதீர் அதிகாரியைத் தொடர்பு கொள்ளலாம்:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">பெயர்:</strong> ஷில்பி குல்ஷ்ரேஷ்டா</p>
                    <p className="mt-2"><strong className="text-white">பதவி:</strong> குறைதீர் அதிகாரி & நிறுவனர், பிசினஸ் எக்சலன்ஸ் ஸ்டார்ட்எக்ஸ் LLP</p>
                    <p className="mt-2"><strong className="text-white">மின்னஞ்சல்:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">தொலைபேசி:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">பதில் நேரம்:</strong> 48 மணி நேரத்தில் ஒப்புகை; <strong>7 வேலை நாட்களுக்குள்</strong> தீர்வு.</p>
                  </div>
                  <p className="mt-4">
                    எங்கள் பதிலில் நீங்கள் திருப்தி அடையவில்லை என்றால், <strong className="text-white">இந்திய தரவு பாதுகாப்பு வாரியத்திடம்</strong> புகார் அளிக்கும் உரிமை உங்களுக்கு உள்ளது.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. முக்கிய அறிவிப்பு
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• ஒப்புதல் பெட்டியைத் தேர்ந்தெடுப்பதன் மூலம், உங்கள் தனிப்பட்ட தரவைச் செயலாக்க <strong>இலவச, குறிப்பிட்ட, தகவலறிந்த, நிபந்தனையற்ற மற்றும் தெளிவான</strong> ஒப்புதலை எங்களுக்கு வழங்குகிறீர்கள்.</li>
                      <li>• நீங்கள் ஒப்புதல் அளிக்க மறுக்கலாம் அல்லது பின்னர் திரும்பப் பெறலாம். இருப்பினும், உங்கள் ஒப்புதல் இல்லாமல் சில சேவைகளை வழங்க முடியாது.</li>
                      <li>• சந்தைப்படுத்தல் நோக்கங்களுக்காக உங்கள் தனிப்பட்ட தரவை மூன்றாம் தரப்பினருடன் விற்க, வாடகைக்கு விட அல்லது பகிர மாட்டோம்.</li>
                      <li>• உங்கள் தரவு நம்பகமான சேவை வழங்குநர்களுடன் (எ.கா. மின்னஞ்சலுக்கு ரீசென்ட், சேமிப்பிற்கு கூகிள் தாள்கள்) பகிரப்படலாம்.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                GUJARATI CONTENT
            ============================================== */}
            {language === "gu" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. પ્રસ્તાવના (Introduction)</h2>
                  <p>
                    આ સંમતિ સૂચના <strong className="text-white">બિઝનેસ એક્સલન્સ સ્ટાર્ટએક્સ એલએલપી</strong> ("અમે", "અમારા") દ્વારા જારી કરવામાં આવી છે, જે <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> પર લીગલ ગેલેક્સી પ્લેટફોર્મ ચલાવે છે અને <strong className="text-white">ડિજિટલ પર્સનલ ડેટા પ્રોટેક્શન એક્ટ, 2023</strong> ("DPDP Act") અને <strong className="text-white">DPDP નિયમો, 2025</strong> નું પાલન કરે છે.
                  </p>
                  <p className="mt-3">
                    આ સૂચના સમજાવે છે કે અમે કયો વ્યક્તિગત ડેટા એકત્રિત કરીએ છીએ, કેમ એકત્રિત કરીએ છીએ, અમે તેનો ઉપયોગ કેવી રીતે કરીએ છીએ અને તમે તમારી સંમતિ કેવી રીતે પાછી ખેંચી શકો છો. સંમતિ ચેકબોક્સને ચેક કરીને, તમે નીચે વર્ણવ્યા મુજબ તમારા વ્યક્તિગત ડેટાની પ્રક્રિયા માટે સંમતિ આપો છો.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. અમે કયો વ્યક્તિગત ડેટા એકત્રિત કરીએ છીએ
                  </h2>
                  <p>જ્યારે તમે અમારી વેબસાઇટ પર ફોર્મ સબમિટ કરો છો, ત્યારે અમે એકત્રિત કરી શકીએ છીએ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ઓળખ ડેટા:</strong> પ્રથમ નામ, છેલ્લું નામ</li>
                    <li><strong className="text-white">સંપર્ક ડેટા:</strong> કાર્ય ઇમેઇલ સરનામું, ફોન નંબર</li>
                    <li><strong className="text-white">વ્યાવસાયિક ડેટા:</strong> કંપનીનું નામ, નોકરીનું શીર્ષક, કંપનીનું કદ, ઉદ્યોગ</li>
                    <li><strong className="text-white">સંચાર ડેટા:</strong> તમારો સંદેશ, પડકારો અથવા પ્રશ્નનું વર્ણન</li>
                    <li><strong className="text-white">ટેકનિકલ ડેટા:</strong> IP સરનામું, બ્રાઉઝર પ્રકાર, ઉપકરણ માહિતી અને કૂકીઝ (ફક્ત ત્યારે જ જ્યારે તમે એનાલિટિક્સ કૂકીઝ સ્વીકારો છો)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">વ્યક્તિગત ડેટા</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ચોક્કસ હેતુ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>નામ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">તમને ઓળખવા અને સંચારમાં તમને યોગ્ય રીતે સંબોધવા માટે.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ઇમેઇલ સરનામું</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">તમારી પૂછપરછનો જવાબ આપવા અને વિનંતી કરેલા દસ્તાવેજો (દા.ત. જનરેટ કરેલી નીતિઓ, DPDPA અહેવાલો) મોકલવા માટે.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ફોન નંબર</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">તાત્કાલિક અનુપાલન-સંબંધિત સંચાર અથવા પરામર્શ નિર્ધારિત કરવા માટે.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>કંપનીનું નામ અને હોદ્દો</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">તમારી સંસ્થાકીય જરૂરિયાતો સમજવા અને અનુપાલન સહાય કસ્ટમાઇઝ કરવા માટે.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ઉદ્યોગ અને કંપનીનું કદ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">તમારા અનુપાલન કાર્યક્રમની પરિપક્વતાનું વિશ્લેષણ કરવા અને સંબંધિત ભલામણો પ્રદાન કરવા માટે.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>સંદેશ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">તમારી ચોક્કસ વિનંતી અથવા સમસ્યા સમજવા અને તેનો જવાબ આપવા માટે.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. પ્રક્રિયાનો હેતુ
                  </h2>
                  <p>અમે તમારા વ્યક્તિગત ડેટાને નીચેના ચોક્કસ હેતુઓ માટે પ્રક્રિયા કરીએ છીએ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">તમારી પૂછપરછનો જવાબ આપવા માટે:</strong> તમારી ડેમો વિનંતી અથવા સંપર્ક ફોર્મ સબમિશન વિશે તમારો સંપર્ક કરવો.</li>
                    <li><strong className="text-white">વિનંતી કરેલી સેવાઓ પ્રદાન કરવા માટે:</strong> ઇમેઇલ દ્વારા જનરેટ કરેલા દસ્તાવેજો તમને મોકલવા.</li>
                    <li><strong className="text-white">અમારી સેવાઓ સુધારવા માટે:</strong> વપરાશકર્તાઓ અમારી વેબસાઇટ સાથે કેવી રીતે ક્રિયાપ્રતિક્રિયા કરે છે તે સમજવું (ફક્ત એનાલિટિક્સ સંમતિ સાથે).</li>
                    <li><strong className="text-white">કાનૂની જવાબદારીઓનું પાલન કરવા માટે:</strong> કાયદા દ્વારા જરૂરી રેકોર્ડ રાખવા.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ અમે તમારી નવી સંમતિ મેળવ્યા વિના તમારા વ્યક્તિગત ડેટાનો ઉપયોગ અન્ય કોઈ હેતુ માટે કરીશું નહીં.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ડેટા જાળવણી (Data Retention)</h2>
                  <p>અમે તમારો વ્યક્તિગત ડેટા ફક્ત જરૂરી સમય માટે જ રાખીએ છીએ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ડેમો/સંપર્ક વિનંતીઓ:</strong> સબમિશનની તારીખથી 2 વર્ષ</li>
                    <li><strong className="text-white">જનરેટ કરેલા દસ્તાવેજો:</strong> જનરેશનની તારીખથી 1 વર્ષ</li>
                    <li><strong className="text-white">એનાલિટિક્સ કૂકીઝ:</strong> 2 વર્ષ સુધી (અથવા જ્યાં સુધી તમે સંમતિ પાછી ન ખેંચો)</li>
                  </ul>
                  <p className="mt-3">
                    જાળવણીનો સમયગાળો પૂરો થયા પછી, તમારો વ્યક્તિગત ડેટા સુરક્ષિત રીતે ડિલીટ કરવામાં આવશે અથવા અનામીકૃત કરવામાં આવશે.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ડેટા પ્રિન્સિપાલ તરીકે તમારા અધિકારો
                  </h2>
                  <p>DPDP કાયદો 2023 હેઠળ, તમારી પાસે નીચેના અધિકારો છે:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">એક્સેસનો અધિકાર:</strong> અમે તમારા વિશે પ્રક્રિયા કરીએ છીએ તે વ્યક્તિગત ડેટાનો સારાંશ માંગો.</li>
                    <li><strong className="text-white">સુધારણાનો અધિકાર:</strong> ખોટા અથવા અધૂરા ડેટામાં સુધારણાની વિનંતી કરો.</li>
                    <li><strong className="text-white">ભૂંસી નાખવાનો અધિકાર:</strong> તમારા વ્યક્તિગત ડેટાને ડિલીટ કરવાની વિનંતી કરો.</li>
                    <li><strong className="text-white">સંમતિ પાછી ખેંચવાનો અધિકાર:</strong> કોઈપણ સમયે તમારી સંમતિ પાછી ખેંચો.</li>
                    <li><strong className="text-white">ફરિયાદ નિવારણનો અધિકાર:</strong> અમારા ફરિયાદ અધિકારી પાસે ફરિયાદ નોંધાવો.</li>
                    <li><strong className="text-white">નામાંકનનો અધિકાર:</strong> મૃત્યુ અથવા અક્ષમતાના કિસ્સામાં તમારા અધિકારોનો ઉપયોગ કરવા માટે અન્ય વ્યક્તિને નામાંકિત કરો.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. તમારી સંમતિ કેવી રીતે પાછી ખેંચવી?</h2>
                  <p>તમે કોઈપણ સમયે તમારી સંમતિ પાછી ખેંચી શકો છો:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> પર "Withdraw Consent" વિષય સાથે ઇમેઇલ કરીને.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> પર અમારા ફરિયાદ અધિકારીને લખીને.</li>
                    <li>અમારી વેબસાઇટ પર "કૂકી સેટિંગ્સ" બટનનો ઉપયોગ કરીને.</li>
                  </ul>
                  <p className="mt-3">
                    સંમતિ પાછી ખેંચવાથી પાછી ખેંચતા પહેલા સંમતિના આધારે પ્રક્રિયાની કાયદેસરતા પર અસર થશે નહીં. અમે <strong className="text-white">30 દિવસની અંદર</strong> તમારી વિનંતી પર પ્રક્રિયા કરીશું.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. ફરિયાદ અધિકારી (Grievance Officer)</h2>
                  <p>જો તમને અમારી ડેટા પ્રક્રિયા વિશે કોઈ ચિંતા હોય, તો તમે અમારા ફરિયાદ અધિકારીનો સંપર્ક કરી શકો છો:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">નામ:</strong> શિલ્પી કુલશ્રેષ્ઠ</p>
                    <p className="mt-2"><strong className="text-white">હોદ્દો:</strong> ફરિયાદ અધિકારી અને સ્થાપક, બિઝનેસ એક્સલન્સ સ્ટાર્ટએક્સ એલએલપી</p>
                    <p className="mt-2"><strong className="text-white">ઇમેઇલ:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ફોન:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">પ્રતિસાદ સમય:</strong> 48 કલાકમાં સ્વીકૃતિ; <strong>7 કાર્યકારી દિવસોમાં</strong> ઉકેલ.</p>
                  </div>
                  <p className="mt-4">
                    જો તમે અમારા પ્રતિસાદથી સંતુષ્ટ ન હોવ, તો તમારી પાસે <strong className="text-white">ભારતીય ડેટા સંરક્ષણ બોર્ડ</strong> પાસે ફરિયાદ નોંધાવવાનો અધિકાર છે.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. મહત્વપૂર્ણ સૂચના
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• સંમતિ ચેકબોક્સને ચેક કરીને, તમે અમને તમારા વ્યક્તિગત ડેટાની પ્રક્રિયા કરવા માટે <strong>મુક્ત, ચોક્કસ, માહિતગાર, શરત વગરની અને સ્પષ્ટ</strong> સંમતિ આપો છો.</li>
                      <li>• તમે સંમતિ આપવાનો ઇનકાર કરી શકો છો, અથવા પછી તેને પાછી ખેંચી શકો છો. જોકે, અમે તમારી સંમતિ વિના અમુક સેવાઓ પ્રદાન કરી શકતા નથી.</li>
                      <li>• અમે માર્કેટિંગ હેતુઓ માટે તૃતીય પક્ષો સાથે તમારો વ્યક્તિગત ડેટા વેચીશું, ભાડે આપીશું અથવા શેર કરીશું નહીં.</li>
                      <li>• તમારો ડેટા વિશ્વસનીય સેવા પ્રદાતાઓ (દા.ત. ઇમેઇલ માટે રીસેન્ડ, સ્ટોરેજ માટે ગૂગલ શીટ્સ) સાથે શેર કરી શકાય છે.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}



                        {/* ==============================================
                URDU CONTENT
            ============================================== */}
            {language === "ur" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. تعارف (Introduction)</h2>
                  <p dir="rtl">
                    یہ رضامندی کا نوٹس <strong className="text-white">بزنس ایکسیلنس اسٹارٹ ایکس ایل ایل پی</strong> ("ہم"، "ہمارا") کی طرف سے جاری کیا گیا ہے، جو <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> پر لیگل گلیکسی پلیٹ فارم چلاتا ہے اور <strong className="text-white">ڈیجیٹل پرسنل ڈیٹا پروٹیکشن ایکٹ، 2023</strong> ("DPDP Act") اور <strong className="text-white">DPDP رولز، 2025</strong> کی تعمیل کرتا ہے۔
                  </p>
                  <p className="mt-3" dir="rtl">
                    یہ نوٹس بتاتا ہے کہ ہم کون سا ذاتی ڈیٹا جمع کرتے ہیں، کیوں جمع کرتے ہیں، ہم اسے کیسے استعمال کرتے ہیں، اور آپ اپنی رضامندی کیسے واپس لے سکتے ہیں۔ رضامندی کے چیک باکس کو چیک کرکے، آپ ذیل میں بیان کردہ اپنے ذاتی ڈیٹا کی کارروائی کے لیے رضامندی دیتے ہیں۔
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. ہم کون سا ذاتی ڈیٹا جمع کرتے ہیں
                  </h2>
                  <p dir="rtl">جب آپ ہماری ویب سائٹ پر فارم جمع کرتے ہیں، تو ہم جمع کر سکتے ہیں:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><strong className="text-white">شناختی ڈیٹا:</strong> پہلا نام، آخری نام</li>
                    <li><strong className="text-white">رابطہ ڈیٹا:</strong> کام کا ای میل پتہ، فون نمبر</li>
                    <li><strong className="text-white">پیشہ ورانہ ڈیٹا:</strong> کمپنی کا نام، نوکری کا عنوان، کمپنی کا سائز، صنعت</li>
                    <li><strong className="text-white">مواصلاتی ڈیٹا:</strong> آپ کا پیغام، چیلنجز، یا سوال کی تفصیل</li>
                    <li><strong className="text-white">تکنیکی ڈیٹا:</strong> آئی پی ایڈریس، براؤزر کی قسم، ڈیوائس کی معلومات، اور کوکیز (صرف اس صورت میں جب آپ اینالیٹکس کوکیز قبول کریں)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-right border border-white/10 rounded-lg" dir="rtl">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ذاتی ڈیٹا</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">مخصوص مقصد</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>نام</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">آپ کی شناخت کرنے اور مواصلات میں آپ کو صحیح طریقے سے مخاطب کرنے کے لیے۔</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ای میل پتہ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">آپ کی استفسار کا جواب دینے اور درخواست کردہ دستاویزات (جیسے تیار کردہ پالیسیاں، DPDPA رپورٹس) بھیجنے کے لیے۔</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>فون نمبر</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ہنگامی تعمیل سے متعلق مواصلات یا مشاورت کے شیڈول کے لیے۔</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>کمپنی کا نام اور عہدہ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">آپ کی تنظیمی ضروریات کو سمجھنے اور تعمیل میں مدد کو حسب ضرورت بنانے کے لیے۔</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>صنعت اور کمپنی کا سائز</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">آپ کے تعمیل پروگرام کی پختگی کا تجزیہ کرنے اور متعلقہ سفارشات فراہم کرنے کے لیے۔</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>پیغام</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">آپ کی مخصوص درخواست یا مسئلہ کو سمجھنے اور جواب دینے کے لیے۔</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. کارروائی کا مقصد
                  </h2>
                  <p dir="rtl">ہم آپ کے ذاتی ڈیٹا کو درج ذیل مخصوص مقاصد کے لیے کارروائی کرتے ہیں:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><strong className="text-white">آپ کی استفسارات کا جواب دینے کے لیے:</strong> آپ کی ڈیمو درخواست یا رابطہ فارم جمع کرانے کے بارے میں آپ سے رابطہ کرنا۔</li>
                    <li><strong className="text-white">درخواست کردہ خدمات فراہم کرنے کے لیے:</strong> ای میل کے ذریعے تیار کردہ دستاویزات آپ کو بھیجنا۔</li>
                    <li><strong className="text-white">ہماری خدمات کو بہتر بنانے کے لیے:</strong> یہ سمجھنا کہ صارفین ہماری ویب سائٹ کے ساتھ کیسے تعامل کرتے ہیں (صرف اینالیٹکس رضامندی کے ساتھ)۔</li>
                    <li><strong className="text-white">قانونی ذمہ داریوں کی تعمیل کے لیے:</strong> قانون کے مطابق ریکارڈ رکھنا۔</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs" dir="rtl">
                    ⚠️ ہم آپ کی نئی رضامندی حاصل کیے بغیر آپ کے ذاتی ڈیٹا کو کسی اور مقصد کے لیے استعمال نہیں کریں گے۔
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ڈیٹا کی برقراری (Data Retention)</h2>
                  <p dir="rtl">ہم آپ کا ذاتی ڈیٹا صرف ضروری وقت تک رکھتے ہیں:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><strong className="text-white">ڈیمو/رابطہ کی درخواستیں:</strong> جمع کرانے کی تاریخ سے 2 سال</li>
                    <li><strong className="text-white">تیار کردہ دستاویزات:</strong> تیاری کی تاریخ سے 1 سال</li>
                    <li><strong className="text-white">اینالیٹکس کوکیز:</strong> 2 سال تک (یا جب تک آپ رضامندی واپس نہ لیں)</li>
                  </ul>
                  <p className="mt-3" dir="rtl">
                    برقراری کی مدت ختم ہونے کے بعد، آپ کا ذاتی ڈیٹا محفوظ طریقے سے حذف یا گمنام کر دیا جائے گا۔
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ڈیٹا پرنسپل کے طور پر آپ کے حقوق
                  </h2>
                  <p dir="rtl">DPDP ایکٹ 2023 کے تحت، آپ کو درج ذیل حقوق حاصل ہیں:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><strong className="text-white">رسائی کا حق:</strong> ہماری طرف سے کارروائی کیے گئے ذاتی ڈیٹا کا خلاصہ طلب کریں۔</li>
                    <li><strong className="text-white">تصحیح کا حق:</strong> غلط یا نامکمل ڈیٹا میں تصحیح کی درخواست کریں۔</li>
                    <li><strong className="text-white">حذف کرنے کا حق:</strong> اپنے ذاتی ڈیٹا کو حذف کرنے کی درخواست کریں۔</li>
                    <li><strong className="text-white">رضامندی واپس لینے کا حق:</strong> کسی بھی وقت اپنی رضامندی واپس لیں۔</li>
                    <li><strong className="text-white">شکایت کے ازالے کا حق:</strong> ہمارے شکایت افسر کے پاس شکایت درج کریں۔</li>
                    <li><strong className="text-white">نامزدگی کا حق:</strong> موت یا معذوری کی صورت میں اپنے حقوق استعمال کرنے کے لیے کسی اور فرد کو نامزد کریں۔</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. اپنی رضامندی کیسے واپس لیں؟</h2>
                  <p dir="rtl">آپ کسی بھی وقت اپنی رضامندی واپس لے سکتے ہیں:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> پر "Withdraw Consent" کے موضوع کے ساتھ ای میل کرکے۔</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> پر ہمارے شکایت افسر کو لکھ کر۔</li>
                    <li>ہماری ویب سائٹ پر "کوکی سیٹنگز" بٹن کا استعمال کرکے۔</li>
                  </ul>
                  <p className="mt-3" dir="rtl">
                    رضامندی واپس لینے سے پہلے رضامندی کی بنیاد پر کارروائی کی قانونی حیثیت متاثر نہیں ہوگی۔ ہم <strong className="text-white">30 دنوں</strong> کے اندر آپ کی درخواست پر کارروائی کریں گے۔
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. شکایت افسر (Grievance Officer)</h2>
                  <p dir="rtl">اگر آپ کو ہماری ڈیٹا کارروائی کے بارے میں کوئی تشویش ہے، تو آپ ہمارے شکایت افسر سے رابطہ کر سکتے ہیں:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4" dir="rtl">
                    <p><strong className="text-white">نام:</strong> شلپی کلشرشٹھا</p>
                    <p className="mt-2"><strong className="text-white">عہدہ:</strong> شکایت افسر اور بانی، بزنس ایکسیلنس اسٹارٹ ایکس ایل ایل پی</p>
                    <p className="mt-2"><strong className="text-white">ای میل:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">فون:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">جواب کا وقت:</strong> 48 گھنٹوں میں رسید; <strong>7 کاروباری دنوں</strong> میں حل۔</p>
                  </div>
                  <p className="mt-4" dir="rtl">
                    اگر آپ ہمارے جواب سے مطمئن نہیں ہیں، تو آپ کو <strong className="text-white">بھارتی ڈیٹا پروٹیکشن بورڈ</strong> کے پاس شکایت درج کرانے کا حق ہے۔
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. اہم نوٹس
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5" dir="rtl">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• رضامندی کے چیک باکس کو چیک کرکے، آپ ہمیں اپنے ذاتی ڈیٹا کی کارروائی کے لیے <strong>آزاد، مخصوص، باخبر، غیر مشروط اور غیر مبہم</strong> رضامندی دیتے ہیں۔</li>
                      <li>• آپ رضامندی دینے سے انکار کر سکتے ہیں، یا بعد میں اسے واپس لے سکتے ہیں۔ تاہم، ہم آپ کی رضامندی کے بغیر کچھ خدمات فراہم نہیں کر سکتے۔</li>
                      <li>• ہم مارکیٹنگ کے مقاصد کے لیے تیسرے فریق کے ساتھ آپ کا ذاتی ڈیٹا فروخت، کرایہ پر یا شیئر نہیں کریں گے۔</li>
                      <li>• آپ کا ڈیٹا قابل اعتماد سروس فراہم کنندگان (جیسے، ای میل کے لیے ریسینڈ، اسٹوریج کے لیے گوگل شیٹس) کے ساتھ شیئر کیا جا سکتا ہے۔</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                KANNADA CONTENT
            ============================================== */}
            {language === "kn" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. ಪರಿಚಯ (Introduction)</h2>
                  <p>
                    ಈ ಸಮ್ಮತಿ ಸೂಚನೆಯನ್ನು <strong className="text-white">ಬಿಸಿನೆಸ್ ಎಕ್ಸಲೆನ್ಸ್ ಸ್ಟಾರ್ಟ್ಎಕ್ಸ್ LLP</strong> ("ನಾವು", "ನಮ್ಮ") ನೀಡಿದೆ, ಇದು <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> ನಲ್ಲಿ ಲೀಗಲ್ ಗೆಲಾಕ್ಸಿ ಪ್ಲಾಟ್ಫಾರ್ಮ್ ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ ಮತ್ತು <strong className="text-white">ಡಿಜಿಟಲ್ ಪರ್ಸನಲ್ ಡೇಟಾ ಪ್ರೊಟೆಕ್ಷನ್ ಆಕ್ಟ್, 2023</strong> ("DPDP Act") ಮತ್ತು <strong className="text-white">DPDP ನಿಯಮಗಳು, 2025</strong> ಅನ್ನು ಅನುಸರಿಸುತ್ತದೆ.
                  </p>
                  <p className="mt-3">
                    ಈ ಸೂಚನೆಯು ನಾವು ಯಾವ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ, ಏಕೆ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ, ನಾವು ಅದನ್ನು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ ಮತ್ತು ನೀವು ನಿಮ್ಮ ಸಮ್ಮತಿಯನ್ನು ಹೇಗೆ ಹಿಂಪಡೆಯಬಹುದು ಎಂಬುದನ್ನು ವಿವರಿಸುತ್ತದೆ. ಸಮ್ಮತಿ ಚೆಕ್ಬಾಕ್ಸ್ ಅನ್ನು ಚೆಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ಕೆಳಗೆ ವಿವರಿಸಿದಂತೆ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾದ ಸಂಸ್ಕರಣೆಗೆ ಸಮ್ಮತಿ ನೀಡುತ್ತೀರಿ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. ನಾವು ಸಂಗ್ರಹಿಸುವ ವೈಯಕ್ತಿಕ ಡೇಟಾ
                  </h2>
                  <p>ನೀವು ನಮ್ಮ ವೆಬ್ಸೈಟ್ನಲ್ಲಿ ಫಾರ್ಮ್ ಸಲ್ಲಿಸಿದಾಗ, ನಾವು ಸಂಗ್ರಹಿಸಬಹುದು:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ಗುರುತಿನ ಡೇಟಾ:</strong> ಮೊದಲ ಹೆಸರು, ಕೊನೆಯ ಹೆಸರು</li>
                    <li><strong className="text-white">ಸಂಪರ್ಕ ಡೇಟಾ:</strong> ಕೆಲಸದ ಇಮೇಲ್ ವಿಳಾಸ, ಫೋನ್ ಸಂಖ್ಯೆ</li>
                    <li><strong className="text-white">ವೃತ್ತಿಪರ ಡೇಟಾ:</strong> ಕಂಪನಿಯ ಹೆಸರು, ಉದ್ಯೋಗದ ಶೀರ್ಷಿಕೆ, ಕಂಪನಿಯ ಗಾತ್ರ, ಉದ್ಯಮ</li>
                    <li><strong className="text-white">ಸಂವಹನ ಡೇಟಾ:</strong> ನಿಮ್ಮ ಸಂದೇಶ, ಸವಾಲುಗಳು ಅಥವಾ ಪ್ರಶ್ನೆಯ ವಿವರಣೆ</li>
                    <li><strong className="text-white">ತಾಂತ್ರಿಕ ಡೇಟಾ:</strong> IP ವಿಳಾಸ, ಬ್ರೌಸರ್ ಪ್ರಕಾರ, ಸಾಧನ ಮಾಹಿತಿ ಮತ್ತು ಕುಕೀಗಳು (ನೀವು ಅನಾಲಿಟಿಕ್ಸ್ ಕುಕೀಗಳನ್ನು ಸ್ವೀಕರಿಸಿದರೆ ಮಾತ್ರ)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ವೈಯಕ್ತಿಕ ಡೇಟಾ</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ನಿರ್ದಿಷ್ಟ ಉದ್ದೇಶ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ಹೆಸರು</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ನಿಮ್ಮನ್ನು ಗುರುತಿಸಲು ಮತ್ತು ಸಂವಹನಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸರಿಯಾಗಿ ಸಂಬೋಧಿಸಲು.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ಇಮೇಲ್ ವಿಳಾಸ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ನಿಮ್ಮ ವಿಚಾರಣೆಗೆ ಉತ್ತರಿಸಲು ಮತ್ತು ವಿನಂತಿಸಿದ ದಾಖಲೆಗಳನ್ನು (ಉದಾ. ರಚಿಸಿದ ನೀತಿಗಳು, DPDPA ವರದಿಗಳು) ಕಳುಹಿಸಲು.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ಫೋನ್ ಸಂಖ್ಯೆ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ತುರ್ತು ಅನುಸರಣೆ-ಸಂಬಂಧಿತ ಸಂವಹನ ಅಥವಾ ಸಮಾಲೋಚನೆಗಳನ್ನು ನಿಗದಿಪಡಿಸಲು.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ಕಂಪನಿಯ ಹೆಸರು ಮತ್ತು ಹುದ್ದೆ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ನಿಮ್ಮ ಸಾಂಸ್ಥಿಕ ಅಗತ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಅನುಸರಣೆ ಸಹಾಯವನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಲು.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ಉದ್ಯಮ ಮತ್ತು ಕಂಪನಿಯ ಗಾತ್ರ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ನಿಮ್ಮ ಅನುಸರಣೆ ಕಾರ್ಯಕ್ರಮದ ಪರಿಪಕ್ವತೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಮತ್ತು ಸಂಬಂಧಿತ ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸಲು.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ಸಂದೇಶ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ವಿನಂತಿ ಅಥವಾ ಸಮಸ್ಯೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯಿಸಲು.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. ಸಂಸ್ಕರಣೆಯ ಉದ್ದೇಶ
                  </h2>
                  <p>ನಾವು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಈ ಕೆಳಗಿನ ನಿರ್ದಿಷ್ಟ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಸಂಸ್ಕರಿಸುತ್ತೇವೆ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ನಿಮ್ಮ ವಿಚಾರಣೆಗಳಿಗೆ ಉತ್ತರಿಸಲು:</strong> ನಿಮ್ಮ ಡೆಮೊ ವಿನಂತಿ ಅಥವಾ ಸಂಪರ್ಕ ಫಾರ್ಮ್ ಸಲ್ಲಿಕೆಯ ಬಗ್ಗೆ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುವುದು.</li>
                    <li><strong className="text-white">ವಿನಂತಿಸಿದ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು:</strong> ಇಮೇಲ್ ಮೂಲಕ ರಚಿಸಿದ ದಾಖಲೆಗಳನ್ನು ನಿಮಗೆ ಕಳುಹಿಸುವುದು.</li>
                    <li><strong className="text-white">ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಸುಧಾರಿಸಲು:</strong> ಬಳಕೆದಾರರು ನಮ್ಮ ವೆಬ್ಸೈಟ್ನೊಂದಿಗೆ ಹೇಗೆ ಸಂವಹನ ನಡೆಸುತ್ತಾರೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು (ಅನಾಲಿಟಿಕ್ಸ್ ಸಮ್ಮತಿಯೊಂದಿಗೆ ಮಾತ್ರ).</li>
                    <li><strong className="text-white">ಕಾನೂನು ಬಾಧ್ಯತೆಗಳನ್ನು ಪಾಲಿಸಲು:</strong> ಕಾನೂನಿನಿಂದ ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ ನಿಮ್ಮಿಂದ ಹೊಸ ಸಮ್ಮತಿಯನ್ನು ಪಡೆಯದೆ ನಾವು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಬೇರೆ ಯಾವುದೇ ಉದ್ದೇಶಕ್ಕಾಗಿ ಬಳಸುವುದಿಲ್ಲ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ಡೇಟಾ ಧಾರಣೆ (Data Retention)</h2>
                  <p>ನಾವು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಅಗತ್ಯವಿರುವಷ್ಟು ಕಾಲ ಮಾತ್ರ ಇಡುತ್ತೇವೆ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ಡೆಮೊ/ಸಂಪರ್ಕ ವಿನಂತಿಗಳು:</strong> ಸಲ್ಲಿಸಿದ ದಿನಾಂಕದಿಂದ 2 ವರ್ಷಗಳು</li>
                    <li><strong className="text-white">ರಚಿಸಿದ ದಾಖಲೆಗಳು:</strong> ರಚಿಸಿದ ದಿನಾಂಕದಿಂದ 1 ವರ್ಷ</li>
                    <li><strong className="text-white">ಅನಾಲಿಟಿಕ್ಸ್ ಕುಕೀಗಳು:</strong> 2 ವರ್ಷಗಳವರೆಗೆ (ಅಥವಾ ನೀವು ಸಮ್ಮತಿಯನ್ನು ಹಿಂಪಡೆಯುವವರೆಗೆ)</li>
                  </ul>
                  <p className="mt-3">
                    ಧಾರಣೆ ಅವಧಿ ಮುಗಿದ ನಂತರ, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಅಳಿಸಲಾಗುತ್ತದೆ ಅಥವಾ ಅನಾಮಧೇಯಗೊಳಿಸಲಾಗುತ್ತದೆ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ಡೇಟಾ ಪ್ರಿನ್ಸಿಪಾಲ್ ಆಗಿ ನಿಮ್ಮ ಹಕ್ಕುಗಳು
                  </h2>
                  <p>DPDP ಕಾಯ್ದೆ 2023 ಅಡಿಯಲ್ಲಿ, ನಿಮಗೆ ಈ ಕೆಳಗಿನ ಹಕ್ಕುಗಳಿವೆ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ಪ್ರವೇಶದ ಹಕ್ಕು:</strong> ನಾವು ನಿಮ್ಮ ಬಗ್ಗೆ ಸಂಸ್ಕರಿಸುವ ವೈಯಕ್ತಿಕ ಡೇಟಾದ ಸಾರಾಂಶವನ್ನು ವಿನಂತಿಸಿ.</li>
                    <li><strong className="text-white">ತಿದ್ದುಪಡಿ ಹಕ್ಕು:</strong> ತಪ್ಪಾದ ಅಥವಾ ಅಪೂರ್ಣ ಡೇಟಾದ ತಿದ್ದುಪಡಿಯನ್ನು ವಿನಂತಿಸಿ.</li>
                    <li><strong className="text-white">ಅಳಿಸುವ ಹಕ್ಕು:</strong> ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಅಳಿಸಲು ವಿನಂತಿಸಿ.</li>
                    <li><strong className="text-white">ಸಮ್ಮತಿ ಹಿಂಪಡೆಯುವ ಹಕ್ಕು:</strong> ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸಮ್ಮತಿಯನ್ನು ಹಿಂಪಡೆಯಿರಿ.</li>
                    <li><strong className="text-white">ಕುಂದುಕೊರತೆ ಪರಿಹಾರದ ಹಕ್ಕು:</strong> ನಮ್ಮ ಕುಂದುಕೊರತೆ ಅಧಿಕಾರಿಗೆ ದೂರು ಸಲ್ಲಿಸಿ.</li>
                    <li><strong className="text-white">ನಾಮನಿರ್ದೇಶನದ ಹಕ್ಕು:</strong> ಸಾವು ಅಥವಾ ಅಸಮರ್ಥತೆಯ ಸಂದರ್ಭದಲ್ಲಿ ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಬಳಸಲು ಇನ್ನೊಬ್ಬ ವ್ಯಕ್ತಿಯನ್ನು ನಾಮನಿರ್ದೇಶನ ಮಾಡಿ.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. ನಿಮ್ಮ ಸಮ್ಮತಿಯನ್ನು ಹೇಗೆ ಹಿಂಪಡೆಯುವುದು?</h2>
                  <p>ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸಮ್ಮತಿಯನ್ನು ಹಿಂಪಡೆಯಬಹುದು:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> ಗೆ "Withdraw Consent" ವಿಷಯದೊಂದಿಗೆ ಇಮೇಲ್ ಮಾಡುವ ಮೂಲಕ.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> ನಲ್ಲಿ ನಮ್ಮ ಕುಂದುಕೊರತೆ ಅಧಿಕಾರಿಗೆ ಬರೆಯುವ ಮೂಲಕ.</li>
                    <li>ನಮ್ಮ ವೆಬ್ಸೈಟ್ನಲ್ಲಿ "ಕುಕಿ ಸೆಟ್ಟಿಂಗ್ಗಳು" ಬಟನ್ ಬಳಸುವ ಮೂಲಕ.</li>
                  </ul>
                  <p className="mt-3">
                    ಸಮ್ಮತಿಯನ್ನು ಹಿಂಪಡೆಯುವುದರಿಂದ ಹಿಂಪಡೆಯುವ ಮೊದಲು ಸಮ್ಮತಿಯ ಆಧಾರದ ಮೇಲೆ ಸಂಸ್ಕರಣೆಯ ಕಾನೂನುಬದ್ಧತೆಯ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವುದಿಲ್ಲ. ನಾವು <strong className="text-white">30 ದಿನಗಳೊಳಗೆ</strong> ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತೇವೆ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. ಕುಂದುಕೊರತೆ ಅಧಿಕಾರಿ (Grievance Officer)</h2>
                  <p>ನಮ್ಮ ಡೇಟಾ ಸಂಸ್ಕರಣೆಯ ಬಗ್ಗೆ ನಿಮಗೆ ಯಾವುದೇ ಕಳವಳವಿದ್ದರೆ, ನೀವು ನಮ್ಮ ಕುಂದುಕೊರತೆ ಅಧಿಕಾರಿಯನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">ಹೆಸರು:</strong> ಶಿಲ್ಪಿ ಕುಲಶ್ರೇಷ್ಠ</p>
                    <p className="mt-2"><strong className="text-white">ಹುದ್ದೆ:</strong> ಕುಂದುಕೊರತೆ ಅಧಿಕಾರಿ ಮತ್ತು ಸಂಸ್ಥಾಪಕ, ಬಿಸಿನೆಸ್ ಎಕ್ಸಲೆನ್ಸ್ ಸ್ಟಾರ್ಟ್ಎಕ್ಸ್ LLP</p>
                    <p className="mt-2"><strong className="text-white">ಇಮೇಲ್:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ಫೋನ್:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯ:</strong> 48 ಗಂಟೆಗಳಲ್ಲಿ ಸ್ವೀಕೃತಿ; <strong>7 ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ</strong> ಪರಿಹಾರ.</p>
                  </div>
                  <p className="mt-4">
                    ನಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯಿಂದ ನೀವು ತೃಪ್ತರಾಗದಿದ್ದರೆ, ನೀವು <strong className="text-white">ಭಾರತೀಯ ಡೇಟಾ ಸಂರಕ್ಷಣಾ ಮಂಡಳಿಗೆ</strong> ದೂರು ಸಲ್ಲಿಸುವ ಹಕ್ಕನ್ನು ಹೊಂದಿದ್ದೀರಿ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. ಪ್ರಮುಖ ಸೂಚನೆ
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• ಸಮ್ಮತಿ ಚೆಕ್ಬಾಕ್ಸ್ ಅನ್ನು ಚೆಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಸಂಸ್ಕರಿಸಲು ನಮಗೆ <strong>ಉಚಿತ, ನಿರ್ದಿಷ್ಟ, ಮಾಹಿತಿಪೂರ್ಣ, ಷರತ್ತುರಹಿತ ಮತ್ತು ನಿಸ್ಸಂದಿಗ್ಧ</strong> ಸಮ್ಮತಿಯನ್ನು ನೀಡುತ್ತೀರಿ.</li>
                      <li>• ನೀವು ಸಮ್ಮತಿ ನೀಡಲು ನಿರಾಕರಿಸಬಹುದು ಅಥವಾ ನಂತರ ಅದನ್ನು ಹಿಂಪಡೆಯಬಹುದು. ಆದಾಗ್ಯೂ, ನಿಮ್ಮ ಸಮ್ಮತಿಯಿಲ್ಲದೆ ನಾವು ಕೆಲವು ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ.</li>
                      <li>• ಮಾರ್ಕೆಟಿಂಗ್ ಉದ್ದೇಶಗಳಿಗಾಗಿ ನಾವು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಮೂರನೇ ವ್ಯಕ್ತಿಗಳಿಗೆ ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ, ಬಾಡಿಗೆಗೆ ನೀಡುವುದಿಲ್ಲ ಅಥವಾ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ.</li>
                      <li>• ನಿಮ್ಮ ಡೇಟಾವನ್ನು ವಿಶ್ವಾಸಾರ್ಹ ಸೇವಾ ಪೂರೈಕೆದಾರರೊಂದಿಗೆ (ಉದಾ. ಇಮೇಲ್ಗಾಗಿ ರೀಸೆಂಡ್, ಸಂಗ್ರಹಣೆಗಾಗಿ ಗೂಗಲ್ ಶೀಟ್ಸ್) ಹಂಚಿಕೊಳ್ಳಬಹುದು.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                MALAYALAM CONTENT
            ============================================== */}
            {language === "ml" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. ആമുഖം (Introduction)</h2>
                  <p>
                    ഈ സമ്മത വിജ്ഞാപനം <strong className="text-white">ബിസിനസ് എക്സലൻസ് സ്റ്റാർട്ട്എക്സ് LLP</strong> ("ഞങ്ങൾ", "ഞങ്ങളുടെ") നൽകുന്നതാണ്, ഇത് <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> ൽ ലീഗൽ ഗാലക്സി പ്ലാറ്റ്ഫോം പ്രവർത്തിപ്പിക്കുകയും <strong className="text-white">ഡിജിറ്റൽ പേഴ്സണൽ ഡാറ്റ പ്രൊട്ടക്ഷൻ ആക്ട്, 2023</strong> ("DPDP Act"), <strong className="text-white">DPDP ചട്ടങ്ങൾ, 2025</strong> എന്നിവ പാലിക്കുകയും ചെയ്യുന്നു.
                  </p>
                  <p className="mt-3">
                    ഞങ്ങൾ ഏത് വ്യക്തിഗത ഡാറ്റ ശേഖരിക്കുന്നു, എന്തിന് ശേഖരിക്കുന്നു, ഞങ്ങൾ അത് എങ്ങനെ ഉപയോഗിക്കുന്നു, നിങ്ങൾക്ക് എങ്ങനെ സമ്മതം പിൻവലിക്കാം എന്നിവ ഈ വിജ്ഞാപനം വിശദീകരിക്കുന്നു. സമ്മത ചെക്ക്ബോക്സ് പരിശോധിച്ചുകൊണ്ട്, താഴെ വിവരിച്ചിരിക്കുന്നതുപോലെ നിങ്ങളുടെ വ്യക്തിഗത ഡാറ്റ പ്രോസസ്സ് ചെയ്യാൻ നിങ്ങൾ സമ്മതം നൽകുന്നു.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. ഞങ്ങൾ ശേഖരിക്കുന്ന വ്യക്തിഗത ഡാറ്റ
                  </h2>
                  <p>നിങ്ങൾ ഞങ്ങളുടെ വെബ്സൈറ്റിൽ ഒരു ഫോം സമർപ്പിക്കുമ്പോൾ, ഞങ്ങൾ ശേഖരിച്ചേക്കാം:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ഐഡന്റിറ്റി ഡാറ്റ:</strong> ആദ്യ പേര്, അവസാന പേര്</li>
                    <li><strong className="text-white">കോൺടാക്റ്റ് ഡാറ്റ:</strong> ജോലി ഇമെയിൽ വിലാസം, ഫോൺ നമ്പർ</li>
                    <li><strong className="text-white">പ്രൊഫഷണൽ ഡാറ്റ:</strong> കമ്പനിയുടെ പേര്, ജോലി ശീർഷകം, കമ്പനിയുടെ വലിപ്പം, വ്യവസായം</li>
                    <li><strong className="text-white">ആശയവിനിമയ ഡാറ്റ:</strong> നിങ്ങളുടെ സന്ദേശം, വെല്ലുവിളികൾ അല്ലെങ്കിൽ ചോദ്യ വിവരണം</li>
                    <li><strong className="text-white">സാങ്കേതിക ഡാറ്റ:</strong> IP വിലാസം, ബ്രൗസർ തരം, ഉപകരണ വിവരങ്ങൾ, കൂക്കികൾ (നിങ്ങൾ അനലിറ്റിക്സ് കൂക്കികൾ സ്വീകരിച്ചാൽ മാത്രം)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">വ്യക്തിഗത ഡാറ്റ</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">നിർദ്ദിഷ്ട ഉദ്ദേശ്യം</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>പേര്</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">നിങ്ങളെ തിരിച്ചറിയാനും ആശയവിനിമയങ്ങളിൽ നിങ്ങളെ ശരിയായി അഭിസംബോധന ചെയ്യാനും.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ഇമെയിൽ വിലാസം</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">നിങ്ങളുടെ അന്വേഷണത്തിന് മറുപടി നൽകാനും അഭ്യർത്ഥിച്ച രേഖകൾ (ഉദാ. സൃഷ്ടിച്ച നയങ്ങൾ, DPDPA റിപ്പോർട്ടുകൾ) അയയ്ക്കാനും.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ഫോൺ നമ്പർ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">അടിയന്തര അനുസരണ-ബന്ധപ്പെട്ട ആശയവിനിമയത്തിനോ കൂടിയാലോചനകൾ ഷെഡ്യൂൾ ചെയ്യാനോ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>കമ്പനിയുടെ പേരും ജോലി ശീർഷകവും</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">നിങ്ങളുടെ സ്ഥാപനപരമായ ആവശ്യകതകൾ മനസ്സിലാക്കാനും അനുസരണ സഹായം ഇഷ്ടാനുസൃതമാക്കാനും.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>വ്യവസായവും കമ്പനിയുടെ വലിപ്പവും</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">നിങ്ങളുടെ അനുസരണ പ്രോഗ്രാമിന്റെ പക്വത വിശകലനം ചെയ്യാനും പ്രസക്തമായ ശുപാർശകൾ നൽകാനും.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>സന്ദേശം</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">നിങ്ങളുടെ നിർദ്ദിഷ്ട അഭ്യർത്ഥനയോ പ്രശ്നമോ മനസ്സിലാക്കാനും പ്രതികരിക്കാനും.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. പ്രോസസ്സിംഗിന്റെ ഉദ്ദേശ്യം
                  </h2>
                  <p>ഇനിപ്പറയുന്ന നിർദ്ദിഷ്ട ഉദ്ദേശ്യങ്ങൾക്കായി ഞങ്ങൾ നിങ്ങളുടെ വ്യക്തിഗത ഡാറ്റ പ്രോസസ്സ് ചെയ്യുന്നു:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">നിങ്ങളുടെ അന്വേഷണങ്ങൾക്ക് മറുപടി നൽകാൻ:</strong> നിങ്ങളുടെ ഡെമോ അഭ്യർത്ഥനയെക്കുറിച്ചോ കോൺടാക്റ്റ് ഫോം സമർപ്പണത്തെക്കുറിച്ചോ നിങ്ങളെ ബന്ധപ്പെടുന്നു.</li>
                    <li><strong className="text-white">അഭ്യർത്ഥിച്ച സേവനങ്ങൾ നൽകാൻ:</strong> ഇമെയിൽ വഴി സൃഷ്ടിച്ച രേഖകൾ നിങ്ങൾക്ക് അയയ്ക്കുന്നു.</li>
                    <li><strong className="text-white">ഞങ്ങളുടെ സേവനങ്ങൾ മെച്ചപ്പെടുത്താൻ:</strong> ഉപയോക്താക്കൾ ഞങ്ങളുടെ വെബ്സൈറ്റുമായി എങ്ങനെ സംവദിക്കുന്നു എന്ന് മനസ്സിലാക്കുന്നു (അനലിറ്റിക്സ് സമ്മതത്തോടെ മാത്രം).</li>
                    <li><strong className="text-white">നിയമപരമായ ബാധ്യതകൾ പാലിക്കാൻ:</strong> നിയമം അനുശാസിക്കുന്ന രേഖകൾ സൂക്ഷിക്കുന്നു.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ നിങ്ങളിൽ നിന്ന് പുതിയ സമ്മതം വാങ്ങാതെ ഞങ്ങൾ നിങ്ങളുടെ വ്യക്തിഗത ഡാറ്റ മറ്റേതെങ്കിലും ഉദ്ദേശ്യത്തിനായി ഉപയോഗിക്കില്ല.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ഡാറ്റ നിലനിർത്തൽ (Data Retention)</h2>
                  <p>ആവശ്യമായ കാലയളവ് വരെ മാത്രം ഞങ്ങൾ നിങ്ങളുടെ വ്യക്തിഗത ഡാറ്റ സൂക്ഷിക്കുന്നു:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ഡെമോ/കോൺടാക്റ്റ് അഭ്യർത്ഥനകൾ:</strong> സമർപ്പിച്ച തീയതി മുതൽ 2 വർഷം</li>
                    <li><strong className="text-white">സൃഷ്ടിച്ച രേഖകൾ:</strong> സൃഷ്ടിച്ച തീയതി മുതൽ 1 വർഷം</li>
                    <li><strong className="text-white">അനലിറ്റിക്സ് കൂക്കികൾ:</strong> 2 വർഷം വരെ (അല്ലെങ്കിൽ നിങ്ങൾ സമ്മതം പിൻവലിക്കുന്നത് വരെ)</li>
                  </ul>
                  <p className="mt-3">
                    നിലനിർത്തൽ കാലയളവ് അവസാനിച്ചതിന് ശേഷം, നിങ്ങളുടെ വ്യക്തിഗത ഡാറ്റ സുരക്ഷിതമായി ഇല്ലാതാക്കുകയോ അജ്ഞാതമാക്കുകയോ ചെയ്യും.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ഡാറ്റ പ്രിൻസിപ്പലായി നിങ്ങളുടെ അവകാശങ്ങൾ
                  </h2>
                  <p>DPDP ആക്ട് 2023 പ്രകാരം, നിങ്ങൾക്ക് ഇനിപ്പറയുന്ന അവകാശങ്ങളുണ്ട്:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ആക്സസ് അവകാശം:</strong> ഞങ്ങൾ നിങ്ങളെക്കുറിച്ച് പ്രോസസ്സ് ചെയ്യുന്ന വ്യക്തിഗത ഡാറ്റയുടെ സംഗ്രഹം അഭ്യർത്ഥിക്കുക.</li>
                    <li><strong className="text-white">തിരുത്തൽ അവകാശം:</strong> കൃത്യമല്ലാത്തതോ അപൂർണ്ണമായതോ ആയ ഡാറ്റ തിരുത്താൻ അഭ്യർത്ഥിക്കുക.</li>
                    <li><strong className="text-white">മായ്ക്കൽ അവകാശം:</strong> നിങ്ങളുടെ വ്യക്തിഗത ഡാറ്റ ഇല്ലാതാക്കാൻ അഭ്യർത്ഥിക്കുക.</li>
                    <li><strong className="text-white">സമ്മതം പിൻവലിക്കാനുള്ള അവകാശം:</strong> എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ സമ്മതം പിൻവലിക്കുക.</li>
                    <li><strong className="text-white">പരാതി പരിഹാര അവകാശം:</strong> ഞങ്ങളുടെ പരാതി ഓഫീസറിൽ പരാതി നൽകുക.</li>
                    <li><strong className="text-white">നോമിനേറ്റ് ചെയ്യാനുള്ള അവകാശം:</strong> മരണമോ അശക്തിയോ ഉണ്ടായാൽ നിങ്ങളുടെ അവകാശങ്ങൾ വിനിയോഗിക്കാൻ മറ്റൊരു വ്യക്തിയെ നോമിനേറ്റ് ചെയ്യുക.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. നിങ്ങളുടെ സമ്മതം എങ്ങനെ പിൻവലിക്കാം?</h2>
                  <p>നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ സമ്മതം പിൻവലിക്കാം:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> എന്നതിൽ "Withdraw Consent" എന്ന വിഷയത്തിൽ ഇമെയിൽ ചെയ്യുന്നതിലൂടെ.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> എന്നതിൽ ഞങ്ങളുടെ പരാതി ഓഫീസർക്ക് എഴുതുന്നതിലൂടെ.</li>
                    <li>ഞങ്ങളുടെ വെബ്സൈറ്റിൽ "കൂക്കി ക്രമീകരണങ്ങൾ" ബട്ടൺ ഉപയോഗിക്കുന്നതിലൂടെ.</li>
                  </ul>
                  <p className="mt-3">
                    സമ്മതം പിൻവലിക്കുന്നത് പിൻവലിക്കുന്നതിന് മുമ്പ് സമ്മതത്തെ അടിസ്ഥാനമാക്കിയുള്ള പ്രോസസ്സിംഗിന്റെ നിയമസാധുതയെ ബാധിക്കില്ല. ഞങ്ങൾ <strong className="text-white">30 ദിവസത്തിനുള്ളിൽ</strong> നിങ്ങളുടെ അഭ്യർത്ഥന പ്രോസസ്സ് ചെയ്യും.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. പരാതി ഓഫീസർ (Grievance Officer)</h2>
                  <p>ഞങ്ങളുടെ ഡാറ്റ പ്രോസസ്സിംഗിനെക്കുറിച്ച് നിങ്ങൾക്ക് എന്തെങ്കിലും ആശങ്കയുണ്ടെങ്കിൽ, നിങ്ങൾക്ക് ഞങ്ങളുടെ പരാതി ഓഫീസറെ ബന്ധപ്പെടാം:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">പേര്:</strong> ശിൽപി കുൽശ്രേഷ്ഠ</p>
                    <p className="mt-2"><strong className="text-white">പദവി:</strong> പരാതി ഓഫീസർ & സ്ഥാപകൻ, ബിസിനസ് എക്സലൻസ് സ്റ്റാർട്ട്എക്സ് LLP</p>
                    <p className="mt-2"><strong className="text-white">ഇമെയിൽ:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ഫോൺ:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">പ്രതികരണ സമയം:</strong> 48 മണിക്കൂറിനുള്ളിൽ സ്വീകരണം; <strong>7 പ്രവൃത്തി ദിവസങ്ങൾക്കുള്ളിൽ</strong> പരിഹാരം.</p>
                  </div>
                  <p className="mt-4">
                    ഞങ്ങളുടെ പ്രതികരണത്തിൽ നിങ്ങൾ തൃപ്തനല്ലെങ്കിൽ, <strong className="text-white">ഇന്ത്യൻ ഡാറ്റ സംരക്ഷണ ബോർഡിൽ</strong> പരാതി നൽകാനുള്ള അവകാശം നിങ്ങൾക്കുണ്ട്.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. പ്രധാന അറിയിപ്പ്
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• സമ്മത ചെക്ക്ബോക്സ് പരിശോധിച്ചുകൊണ്ട്, നിങ്ങളുടെ വ്യക്തിഗത ഡാറ്റ പ്രോസസ്സ് ചെയ്യാൻ നിങ്ങൾ ഞങ്ങൾക്ക് <strong>സ്വതന്ത്രവും നിർദ്ദിഷ്ടവും അറിവുള്ളതും വ്യവസ്ഥയില്ലാത്തതും അവ്യക്തതയില്ലാത്തതുമായ</strong> സമ്മതം നൽകുന്നു.</li>
                      <li>• നിങ്ങൾക്ക് സമ്മതം നൽകാൻ വിസമ്മതിക്കാം, അല്ലെങ്കിൽ പിന്നീട് അത് പിൻവലിക്കാം. എന്നിരുന്നാലും, നിങ്ങളുടെ സമ്മതമില്ലാതെ ഞങ്ങൾക്ക് ചില സേവനങ്ങൾ നൽകാൻ കഴിയില്ല.</li>
                      <li>• മാർക്കറ്റിംഗ് ആവശ്യങ്ങൾക്കായി ഞങ്ങൾ നിങ്ങളുടെ വ്യക്തിഗത ഡാറ്റ മൂന്നാം കക്ഷികൾക്ക് വിൽക്കുകയോ വാടകയ്ക്ക് നൽകുകയോ പങ്കിടുകയോ ഇല്ല.</li>
                      <li>• നിങ്ങളുടെ ഡാറ്റ വിശ്വസ്ത സേവന ദാതാക്കളുമായി (ഉദാ. ഇമെയിലിനായി റീസെൻഡ്, സംഭരണത്തിനായി ഗൂഗിൾ ഷീറ്റുകൾ) പങ്കിട്ടേക്കാം.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}


                        {/* ==============================================
                ODIA CONTENT
            ============================================== */}
            {language === "or" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. ପରିଚୟ (Introduction)</h2>
                  <p>
                    ଏହି ସମ୍ମତି ସୂଚନା <strong className="text-white">ବିଜନେସ୍ ଏକ୍ସିଲେନ୍ସ ଷ୍ଟାର୍ଟଏକ୍ସ LLP</strong> ("ଆମେ", "ଆମର") ଦ୍ୱାରା ଜାରି କରାଯାଇଛି, ଯାହା <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> ରେ ଲିଗାଲ ଗାଲାକ୍ସି ପ୍ଲାଟଫର୍ମ ପରିଚାଳନା କରେ ଏବଂ <strong className="text-white">ଡିଜିଟାଲ ପର୍ସନାଲ ଡାଟା ପ୍ରୋଟେକ୍ସନ ଆକ୍ଟ, 2023</strong> ("DPDP Act") ଏବଂ <strong className="text-white">DPDP ନିୟମ, 2025</strong> ଅନୁସରଣ କରେ।
                  </p>
                  <p className="mt-3">
                    ଏହି ସୂଚନା ବ୍ୟାଖ୍ୟା କରେ ଯେ ଆମେ କେଉଁ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ସଂଗ୍ରହ କରୁ, କାହିଁକି ସଂଗ୍ରହ କରୁ, ଆମେ ଏହାକୁ କିପରି ବ୍ୟବହାର କରୁ ଏବଂ ଆପଣ କିପରି ଆପଣଙ୍କର ସମ୍ମତି ପ୍ରତ୍ୟାହାର କରିପାରିବେ। ସମ୍ମତି ଚେକବକ୍ସ ଚେକ୍ କରି, ଆପଣ ତଳେ ବର୍ଣ୍ଣିତ ଅନୁଯାୟୀ ଆପଣଙ୍କର ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ପ୍ରକ୍ରିୟାକରଣ ପାଇଁ ସମ୍ମତି ଦିଅନ୍ତି।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. ଆମେ କେଉଁ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ସଂଗ୍ରହ କରୁ
                  </h2>
                  <p>ଯେତେବେଳେ ଆପଣ ଆମର ୱେବସାଇଟରେ ଏକ ଫର୍ମ ଦାଖଲ କରନ୍ତି, ଆମେ ସଂଗ୍ରହ କରିପାରିବା:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ପରିଚୟ ତଥ୍ୟ:</strong> ପ୍ରଥମ ନାମ, ଶେଷ ନାମ</li>
                    <li><strong className="text-white">ଯୋଗାଯୋଗ ତଥ୍ୟ:</strong> କାର୍ଯ୍ୟ ଇମେଲ ଠିକଣା, ଫୋନ ନମ୍ବର</li>
                    <li><strong className="text-white">ବୃତ୍ତିଗତ ତଥ୍ୟ:</strong> କମ୍ପାନୀ ନାମ, ଚାକିରି ଶୀର୍ଷକ, କମ୍ପାନୀ ଆକାର, ଶିଳ୍ପ</li>
                    <li><strong className="text-white">ଯୋଗାଯୋଗ ତଥ୍ୟ:</strong> ଆପଣଙ୍କ ସନ୍ଦେଶ, ଚ୍ୟାଲେଞ୍ଜ କିମ୍ବା ପ୍ରଶ୍ନ ବର୍ଣ୍ଣନା</li>
                    <li><strong className="text-white">ଟେକ୍ନିକାଲ ତଥ୍ୟ:</strong> IP ଠିକଣା, ବ୍ରାଉଜର ପ୍ରକାର, ଉପକରଣ ସୂଚନା ଏବଂ କୁକିଜ୍ (କେବଳ ଯଦି ଆପଣ ଆନାଲିଟିକ୍ସ କୁକିଜ୍ ଗ୍ରହଣ କରନ୍ତି)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ନିର୍ଦ୍ଦିଷ୍ଟ ଉଦ୍ଦେଶ୍ୟ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ନାମ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ଆପଣଙ୍କୁ ଚିହ୍ନଟ କରିବା ଏବଂ ଯୋଗାଯୋଗରେ ଆପଣଙ୍କୁ ସଠିକ୍ ଭାବରେ ସମ୍ବୋଧନ କରିବା ପାଇଁ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ଇମେଲ ଠିକଣା</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ଆପଣଙ୍କ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା ଏବଂ ଅନୁରୋଧିତ ଦଲିଲ (ଯେପରି ଉତ୍ପାଦିତ ନୀତି, DPDPA ରିପୋର୍ଟ) ପଠାଇବା ପାଇଁ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ଫୋନ ନମ୍ବର</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ଜରୁରୀ ଅନୁପାଳନ-ସମ୍ବନ୍ଧୀୟ ଯୋଗାଯୋଗ କିମ୍ବା ପରାମର୍ଶ ନିର୍ଧାରଣ ପାଇଁ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>କମ୍ପାନୀ ନାମ ଏବଂ ପଦବୀ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ଆପଣଙ୍କ ସାଂଗଠନିକ ଆବଶ୍ୟକତା ବୁଝିବା ଏବଂ ଅନୁପାଳନ ସହାୟତା କଷ୍ଟମାଇଜ୍ କରିବା ପାଇଁ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ଶିଳ୍ପ ଏବଂ କମ୍ପାନୀ ଆକାର</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ଆପଣଙ୍କ ଅନୁପାଳନ କାର୍ଯ୍ୟକ୍ରମର ପରିପକ୍ୱତା ବିଶ୍ଳେଷଣ କରିବା ଏବଂ ପ୍ରାସଙ୍ଗିକ ସୁପାରିଶ ପ୍ରଦାନ କରିବା ପାଇଁ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ସନ୍ଦେଶ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ଆପଣଙ୍କ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁରୋଧ କିମ୍ବା ସମସ୍ୟା ବୁଝିବା ଏବଂ ପ୍ରତିକ୍ରିୟା ଦେବା ପାଇଁ।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. ପ୍ରକ୍ରିୟାକରଣର ଉଦ୍ଦେଶ୍ୟ
                  </h2>
                  <p>ଆମେ ନିମ୍ନଲିଖିତ ନିର୍ଦ୍ଦିଷ୍ଟ ଉଦ୍ଦେଶ୍ୟ ପାଇଁ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ପ୍ରକ୍ରିୟା କରୁ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ଆପଣଙ୍କ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା ପାଇଁ:</strong> ଆପଣଙ୍କ ଡେମୋ ଅନୁରୋଧ କିମ୍ବା ଯୋଗାଯୋଗ ଫର୍ମ ଦାଖଲ ବିଷୟରେ ଆପଣଙ୍କୁ ଯୋଗାଯୋଗ କରିବା।</li>
                    <li><strong className="text-white">ଅନୁରୋଧିତ ସେବା ପ୍ରଦାନ କରିବା ପାଇଁ:</strong> ଇମେଲ ମାଧ୍ୟମରେ ଉତ୍ପାଦିତ ଦଲିଲ ଆପଣଙ୍କୁ ପଠାଇବା।</li>
                    <li><strong className="text-white">ଆମର ସେବା ଉନ୍ନତ କରିବା ପାଇଁ:</strong> ଉପଭୋକ୍ତାମାନେ ଆମର ୱେବସାଇଟ ସହିତ କିପରି ଇଣ୍ଟରାକ୍ଟ କରନ୍ତି ତାହା ବୁଝିବା (କେବଳ ଆନାଲିଟିକ୍ସ ସମ୍ମତି ସହିତ)।</li>
                    <li><strong className="text-white">ଆଇନଗତ ଦାୟିତ୍ୱ ପାଳନ କରିବା ପାଇଁ:</strong> ଆଇନ ଅନୁଯାୟୀ ରେକର୍ଡ ରଖିବା।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ ଆମେ ଆପଣଙ୍କଠାରୁ ନୂତନ ସମ୍ମତି ନ ନେଇ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ଅନ୍ୟ କୌଣସି ଉଦ୍ଦେଶ୍ୟ ପାଇଁ ବ୍ୟବହାର କରିବୁ ନାହିଁ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ଡାଟା ଧାରଣ (Data Retention)</h2>
                  <p>ଆମେ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟକୁ କେବଳ ଆବଶ୍ୟକ ସମୟ ପର୍ଯ୍ୟନ୍ତ ରଖୁ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ଡେମୋ/ଯୋଗାଯୋଗ ଅନୁରୋଧ:</strong> ଦାଖଲ ତାରିଖରୁ 2 ବର୍ଷ</li>
                    <li><strong className="text-white">ଉତ୍ପାଦିତ ଦଲିଲ:</strong> ଉତ୍ପାଦନ ତାରିଖରୁ 1 ବର୍ଷ</li>
                    <li><strong className="text-white">ଆନାଲିଟିକ୍ସ କୁକିଜ୍:</strong> 2 ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ (କିମ୍ବା ଆପଣ ସମ୍ମତି ପ୍ରତ୍ୟାହାର ନ କରିବା ପର୍ଯ୍ୟନ୍ତ)</li>
                  </ul>
                  <p className="mt-3">
                    ଧାରଣ ଅବଧି ସମାପ୍ତ ହେବା ପରେ, ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ସୁରକ୍ଷିତ ଭାବରେ ବିଲୋପ କିମ୍ବା ଅନାମକରଣ କରାଯିବ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ଡାଟା ପ୍ରିନ୍ସିପାଲ ଭାବରେ ଆପଣଙ୍କର ଅଧିକାର
                  </h2>
                  <p>DPDP ଆଇନ 2023 ଅଧୀନରେ, ଆପଣଙ୍କର ନିମ୍ନଲିଖିତ ଅଧିକାର ଅଛି:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ପ୍ରବେଶ ଅଧିକାର:</strong> ଆମେ ଆପଣଙ୍କ ବିଷୟରେ ପ୍ରକ୍ରିୟା କରୁଥିବା ବ୍ୟକ୍ତିଗତ ତଥ୍ୟର ସାରାଂଶ ମାଗନ୍ତୁ।</li>
                    <li><strong className="text-white">ସଂଶୋଧନ ଅଧିକାର:</strong> ଭୁଲ କିମ୍ବା ଅସମ୍ପୂର୍ଣ୍ଣ ତଥ୍ୟର ସଂଶୋଧନ ଅନୁରୋଧ କରନ୍ତୁ।</li>
                    <li><strong className="text-white">ବିଲୋପ ଅଧିକାର:</strong> ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ବିଲୋପ ପାଇଁ ଅନୁରୋଧ କରନ୍ତୁ।</li>
                    <li><strong className="text-white">ସମ୍ମତି ପ୍ରତ୍ୟାହାର ଅଧିକାର:</strong> ଯେକୌଣସି ସମୟରେ ଆପଣଙ୍କ ସମ୍ମତି ପ୍ରତ୍ୟାହାର କରନ୍ତୁ।</li>
                    <li><strong className="text-white">ଅଭିଯୋଗ ନିବାରଣ ଅଧିକାର:</strong> ଆମର ଅଭିଯୋଗ ଅଧିକାରୀଙ୍କ ନିକଟରେ ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ।</li>
                    <li><strong className="text-white">ନାମାଙ୍କନ ଅଧିକାର:</strong> ମୃତ୍ୟୁ କିମ୍ବା ଅକ୍ଷମତା କ୍ଷେତ୍ରରେ ଆପଣଙ୍କ ଅଧିକାର ପ୍ରୟୋଗ ପାଇଁ ଅନ୍ୟ ଜଣେ ବ୍ୟକ୍ତିଙ୍କୁ ନାମିତ କରନ୍ତୁ।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. ଆପଣଙ୍କ ସମ୍ମତି କିପରି ପ୍ରତ୍ୟାହାର କରିବେ?</h2>
                  <p>ଆପଣ ଯେକୌଣସି ସମୟରେ ଆପଣଙ୍କ ସମ୍ମତି ପ୍ରତ୍ୟାହାର କରିପାରିବେ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> କୁ "Withdraw Consent" ବିଷୟ ସହିତ ଇମେଲ କରି।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> ରେ ଆମର ଅଭିଯୋଗ ଅଧିକାରୀଙ୍କୁ ଲେଖି।</li>
                    <li>ଆମର ୱେବସାଇଟରେ "କୁକି ସେଟିଂସ" ବଟନ ବ୍ୟବହାର କରି।</li>
                  </ul>
                  <p className="mt-3">
                    ସମ୍ମତି ପ୍ରତ୍ୟାହାର ପ୍ରତ୍ୟାହାର ପୂର୍ବରୁ ସମ୍ମତି ଉପରେ ଆଧାରିତ ପ୍ରକ୍ରିୟାକରଣର ବୈଧତାକୁ ପ୍ରଭାବିତ କରିବ ନାହିଁ। ଆମେ <strong className="text-white">30 ଦିନ ମଧ୍ୟରେ</strong> ଆପଣଙ୍କ ଅନୁରୋଧ ଉପରେ ପ୍ରକ୍ରିୟା କରିବୁ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. ଅଭିଯୋଗ ଅଧିକାରୀ (Grievance Officer)</h2>
                  <p>ଯଦି ଆମର ଡାଟା ପ୍ରକ୍ରିୟାକରଣ ବିଷୟରେ ଆପଣଙ୍କର କୌଣସି ଚିନ୍ତା ଅଛି, ଆପଣ ଆମର ଅଭିଯୋଗ ଅଧିକାରୀଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରିପାରିବେ:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">ନାମ:</strong> ଶିଲ୍ପୀ କୁଲଶ୍ରେଷ୍ଠ</p>
                    <p className="mt-2"><strong className="text-white">ପଦବୀ:</strong> ଅଭିଯୋଗ ଅଧିକାରୀ ଏବଂ ପ୍ରତିଷ୍ଠାତା, ବିଜନେସ୍ ଏକ୍ସିଲେନ୍ସ ଷ୍ଟାର୍ଟଏକ୍ସ LLP</p>
                    <p className="mt-2"><strong className="text-white">ଇମେଲ:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ଫୋନ:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">ପ୍ରତିକ୍ରିୟା ସମୟ:</strong> 48 ଘଣ୍ଟା ମଧ୍ୟରେ ସ୍ୱୀକୃତି; <strong>7 କାର୍ଯ୍ୟଦିବସ ମଧ୍ୟରେ</strong> ସମାଧାନ।</p>
                  </div>
                  <p className="mt-4">
                    ଯଦି ଆପଣ ଆମର ପ୍ରତିକ୍ରିୟାରେ ସନ୍ତୁଷ୍ଟ ନୁହଁନ୍ତି, ତେବେ ଆପଣଙ୍କର <strong className="text-white">ଭାରତୀୟ ଡାଟା ସୁରକ୍ଷା ବୋର୍ଡ</strong> ନିକଟରେ ଅଭିଯୋଗ ଦାଖଲ କରିବାର ଅଧିକାର ଅଛି।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. ମହତ୍ୱପୂର୍ଣ୍ଣ ସୂଚନା
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• ସମ୍ମତି ଚେକବକ୍ସ ଚେକ୍ କରି, ଆପଣ ଆମକୁ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ପ୍ରକ୍ରିୟା କରିବା ପାଇଁ <strong>ମୁକ୍ତ, ନିର୍ଦ୍ଦିଷ୍ଟ, ସୂଚିତ, ଅଣସର୍ତ୍ତୀୟ ଏବଂ ଅସ୍ପଷ୍ଟ</strong> ସମ୍ମତି ଦିଅନ୍ତି।</li>
                      <li>• ଆପଣ ସମ୍ମତି ଦେବାକୁ ମନା କରିପାରିବେ, କିମ୍ବା ପରେ ଏହା ପ୍ରତ୍ୟାହାର କରିପାରିବେ। ତଥାପି, ଆମେ ଆପଣଙ୍କ ସମ୍ମତି ବିନା କିଛି ସେବା ପ୍ରଦାନ କରିପାରିବୁ ନାହିଁ।</li>
                      <li>• ଆମେ ମାର୍କେଟିଂ ଉଦ୍ଦେଶ୍ୟ ପାଇଁ ତୃତୀୟ ପକ୍ଷ ସହିତ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ବିକ୍ରୟ, ଭାଡ଼ା କିମ୍ବା ସେୟାର କରିବୁ ନାହିଁ।</li>
                      <li>• ଆପଣଙ୍କ ତଥ୍ୟ ବିଶ୍ୱସ୍ତ ସେବା ପ୍ରଦାନକାରୀଙ୍କ ସହିତ (ଯେପରି, ଇମେଲ ପାଇଁ ରିସେଣ୍ଡ, ଷ୍ଟୋରେଜ ପାଇଁ ଗୁଗଲ ଶୀଟ) ସେୟାର କରାଯାଇପାରେ।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                PUNJABI CONTENT
            ============================================== */}
            {language === "pa" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. ਜਾਣ-ਪਛਾਣ (Introduction)</h2>
                  <p>
                    ਇਹ ਸਹਿਮਤੀ ਨੋਟਿਸ <strong className="text-white">ਬਿਜ਼ਨਸ ਐਕਸੀਲੈਂਸ ਸਟਾਰਟਐਕਸ LLP</strong> ("ਅਸੀਂ", "ਸਾਡਾ") ਦੁਆਰਾ ਜਾਰੀ ਕੀਤਾ ਗਿਆ ਹੈ, ਜੋ <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> 'ਤੇ ਲੀਗਲ ਗੈਲੈਕਸੀ ਪਲੇਟਫਾਰਮ ਚਲਾਉਂਦਾ ਹੈ ਅਤੇ <strong className="text-white">ਡਿਜੀਟਲ ਪਰਸਨਲ ਡੇਟਾ ਪ੍ਰੋਟੈਕਸ਼ਨ ਐਕਟ, 2023</strong> ("DPDP Act") ਅਤੇ <strong className="text-white">DPDP ਨਿਯਮ, 2025</strong> ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ।
                  </p>
                  <p className="mt-3">
                    ਇਹ ਨੋਟਿਸ ਦੱਸਦਾ ਹੈ ਕਿ ਅਸੀਂ ਕਿਹੜਾ ਨਿੱਜੀ ਡੇਟਾ ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ, ਕਿਉਂ ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ, ਅਸੀਂ ਇਸਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਤੁਸੀਂ ਆਪਣੀ ਸਹਿਮਤੀ ਕਿਵੇਂ ਵਾਪਸ ਲੈ ਸਕਦੇ ਹੋ। ਸਹਿਮਤੀ ਚੈੱਕਬਾਕਸ ਨੂੰ ਚੈੱਕ ਕਰਕੇ, ਤੁਸੀਂ ਹੇਠਾਂ ਦੱਸੇ ਅਨੁਸਾਰ ਆਪਣੇ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਪ੍ਰੋਸੈਸਿੰਗ ਲਈ ਸਹਿਮਤੀ ਦਿੰਦੇ ਹੋ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. ਅਸੀਂ ਕਿਹੜਾ ਨਿੱਜੀ ਡੇਟਾ ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ
                  </h2>
                  <p>ਜਦੋਂ ਤੁਸੀਂ ਸਾਡੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਫਾਰਮ ਜਮ੍ਹਾਂ ਕਰਦੇ ਹੋ, ਤਾਂ ਅਸੀਂ ਇਕੱਠਾ ਕਰ ਸਕਦੇ ਹਾਂ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ਪਛਾਣ ਡੇਟਾ:</strong> ਪਹਿਲਾ ਨਾਮ, ਆਖਰੀ ਨਾਮ</li>
                    <li><strong className="text-white">ਸੰਪਰਕ ਡੇਟਾ:</strong> ਕੰਮ ਦਾ ਈਮੇਲ ਪਤਾ, ਫ਼ੋਨ ਨੰਬਰ</li>
                    <li><strong className="text-white">ਪੇਸ਼ੇਵਰ ਡੇਟਾ:</strong> ਕੰਪਨੀ ਦਾ ਨਾਮ, ਨੌਕਰੀ ਦਾ ਸਿਰਲੇਖ, ਕੰਪਨੀ ਦਾ ਆਕਾਰ, ਉਦਯੋਗ</li>
                    <li><strong className="text-white">ਸੰਚਾਰ ਡੇਟਾ:</strong> ਤੁਹਾਡਾ ਸੁਨੇਹਾ, ਚੁਣੌਤੀਆਂ, ਜਾਂ ਪ੍ਰਸ਼ਨ ਦਾ ਵੇਰਵਾ</li>
                    <li><strong className="text-white">ਤਕਨੀਕੀ ਡੇਟਾ:</strong> IP ਪਤਾ, ਬ੍ਰਾਊਜ਼ਰ ਕਿਸਮ, ਡਿਵਾਈਸ ਜਾਣਕਾਰੀ, ਅਤੇ ਕੂਕੀਜ਼ (ਸਿਰਫ਼ ਜੇਕਰ ਤੁਸੀਂ ਐਨਾਲਿਟਿਕਸ ਕੂਕੀਜ਼ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ਨਿੱਜੀ ਡੇਟਾ</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ਖਾਸ ਉਦੇਸ਼</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ਨਾਮ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ਤੁਹਾਨੂੰ ਪਛਾਣਨ ਅਤੇ ਸੰਚਾਰਾਂ ਵਿੱਚ ਤੁਹਾਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਸੰਬੋਧਨ ਕਰਨ ਲਈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ਈਮੇਲ ਪਤਾ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ਤੁਹਾਡੀ ਪੁੱਛਗਿੱਛ ਦਾ ਜਵਾਬ ਦੇਣ ਅਤੇ ਬੇਨਤੀ ਕੀਤੇ ਦਸਤਾਵੇਜ਼ (ਜਿਵੇਂ ਕਿ ਤਿਆਰ ਕੀਤੀਆਂ ਨੀਤੀਆਂ, DPDPA ਰਿਪੋਰਟਾਂ) ਭੇਜਣ ਲਈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ਫ਼ੋਨ ਨੰਬਰ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ਐਮਰਜੈਂਸੀ ਅਨੁਪਾਲਨ-ਸੰਬੰਧੀ ਸੰਚਾਰ ਜਾਂ ਸਲਾਹ ਦਾ ਸਮਾਂ ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ਕੰਪਨੀ ਦਾ ਨਾਮ ਅਤੇ ਅਹੁਦਾ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ਤੁਹਾਡੀਆਂ ਸੰਸਥਾਗਤ ਲੋੜਾਂ ਨੂੰ ਸਮਝਣ ਅਤੇ ਅਨੁਪਾਲਨ ਸਹਾਇਤਾ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰਨ ਲਈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ਉਦਯੋਗ ਅਤੇ ਕੰਪਨੀ ਦਾ ਆਕਾਰ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ਤੁਹਾਡੇ ਅਨੁਪਾਲਨ ਪ੍ਰੋਗਰਾਮ ਦੀ ਪਰਿਪੱਕਤਾ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਅਤੇ ਸੰਬੰਧਿਤ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ਸੁਨੇਹਾ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ਤੁਹਾਡੀ ਖਾਸ ਬੇਨਤੀ ਜਾਂ ਸਮੱਸਿਆ ਨੂੰ ਸਮਝਣ ਅਤੇ ਜਵਾਬ ਦੇਣ ਲਈ।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. ਪ੍ਰੋਸੈਸਿੰਗ ਦਾ ਉਦੇਸ਼
                  </h2>
                  <p>ਅਸੀਂ ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਨੂੰ ਹੇਠਾਂ ਦਿੱਤੇ ਖਾਸ ਉਦੇਸ਼ਾਂ ਲਈ ਪ੍ਰੋਸੈਸ ਕਰਦੇ ਹਾਂ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ਤੁਹਾਡੀਆਂ ਪੁੱਛਗਿੱਛਾਂ ਦਾ ਜਵਾਬ ਦੇਣ ਲਈ:</strong> ਤੁਹਾਡੀ ਡੈਮੋ ਬੇਨਤੀ ਜਾਂ ਸੰਪਰਕ ਫਾਰਮ ਜਮ੍ਹਾਂ ਕਰਨ ਬਾਰੇ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨਾ।</li>
                    <li><strong className="text-white">ਬੇਨਤੀ ਕੀਤੀਆਂ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ:</strong> ਈਮੇਲ ਰਾਹੀਂ ਤਿਆਰ ਕੀਤੇ ਦਸਤਾਵੇਜ਼ ਤੁਹਾਨੂੰ ਭੇਜਣਾ।</li>
                    <li><strong className="text-white">ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ:</strong> ਇਹ ਸਮਝਣਾ ਕਿ ਵਰਤੋਂਕਾਰ ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਨਾਲ ਕਿਵੇਂ ਇੰਟਰੈਕਟ ਕਰਦੇ ਹਨ (ਸਿਰਫ਼ ਐਨਾਲਿਟਿਕਸ ਸਹਿਮਤੀ ਨਾਲ)।</li>
                    <li><strong className="text-white">ਕਾਨੂੰਨੀ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਦੀ ਪਾਲਣਾ ਕਰਨ ਲਈ:</strong> ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਰਿਕਾਰਡ ਰੱਖਣਾ।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ ਅਸੀਂ ਤੁਹਾਡੀ ਨਵੀਂ ਸਹਿਮਤੀ ਪ੍ਰਾਪਤ ਕੀਤੇ ਬਿਨਾਂ ਤੁਹਾਡੇ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਕਿਸੇ ਹੋਰ ਉਦੇਸ਼ ਲਈ ਨਹੀਂ ਕਰਾਂਗੇ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ਡੇਟਾ ਰੱਖ-ਰਖਾਅ (Data Retention)</h2>
                  <p>ਅਸੀਂ ਤੁਹਾਡਾ ਨਿੱਜੀ ਡੇਟਾ ਸਿਰਫ਼ ਲੋੜੀਂਦੇ ਸਮੇਂ ਲਈ ਹੀ ਰੱਖਦੇ ਹਾਂ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ਡੈਮੋ/ਸੰਪਰਕ ਬੇਨਤੀਆਂ:</strong> ਜਮ੍ਹਾਂ ਕਰਨ ਦੀ ਮਿਤੀ ਤੋਂ 2 ਸਾਲ</li>
                    <li><strong className="text-white">ਤਿਆਰ ਕੀਤੇ ਦਸਤਾਵੇਜ਼:</strong> ਤਿਆਰੀ ਦੀ ਮਿਤੀ ਤੋਂ 1 ਸਾਲ</li>
                    <li><strong className="text-white">ਐਨਾਲਿਟਿਕਸ ਕੂਕੀਜ਼:</strong> 2 ਸਾਲ ਤੱਕ (ਜਾਂ ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਸਹਿਮਤੀ ਵਾਪਸ ਨਹੀਂ ਲੈਂਦੇ)</li>
                  </ul>
                  <p className="mt-3">
                    ਰੱਖ-ਰਖਾਅ ਦੀ ਮਿਆਦ ਖਤਮ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਡਾ ਨਿੱਜੀ ਡੇਟਾ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਮਿਟਾ ਦਿੱਤਾ ਜਾਵੇਗਾ ਜਾਂ ਅਗਿਆਤ ਕਰ ਦਿੱਤਾ ਜਾਵੇਗਾ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ਡੇਟਾ ਪ੍ਰਿੰਸੀਪਲ ਵਜੋਂ ਤੁਹਾਡੇ ਅਧਿਕਾਰ
                  </h2>
                  <p>DPDP ਐਕਟ 2023 ਦੇ ਤਹਿਤ, ਤੁਹਾਡੇ ਕੋਲ ਹੇਠਾਂ ਦਿੱਤੇ ਅਧਿਕਾਰ ਹਨ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ਪਹੁੰਚ ਦਾ ਅਧਿਕਾਰ:</strong> ਸਾਡੇ ਦੁਆਰਾ ਪ੍ਰੋਸੈਸ ਕੀਤੇ ਗਏ ਨਿੱਜੀ ਡੇਟਾ ਦਾ ਸਾਰ ਮੰਗੋ।</li>
                    <li><strong className="text-white">ਸੋਧ ਦਾ ਅਧਿਕਾਰ:</strong> ਗਲਤ ਜਾਂ ਅਧੂਰੇ ਡੇਟਾ ਵਿੱਚ ਸੋਧ ਦੀ ਬੇਨਤੀ ਕਰੋ।</li>
                    <li><strong className="text-white">ਮਿਟਾਉਣ ਦਾ ਅਧਿਕਾਰ:</strong> ਆਪਣੇ ਨਿੱਜੀ ਡੇਟਾ ਨੂੰ ਮਿਟਾਉਣ ਦੀ ਬੇਨਤੀ ਕਰੋ।</li>
                    <li><strong className="text-white">ਸਹਿਮਤੀ ਵਾਪਸ ਲੈਣ ਦਾ ਅਧਿਕਾਰ:</strong> ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀ ਸਹਿਮਤੀ ਵਾਪਸ ਲਓ।</li>
                    <li><strong className="text-white">ਸ਼ਿਕਾਇਤ ਨਿਵਾਰਣ ਦਾ ਅਧਿਕਾਰ:</strong> ਸਾਡੇ ਸ਼ਿਕਾਇਤ ਅਧਿਕਾਰੀ ਕੋਲ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰੋ।</li>
                    <li><strong className="text-white">ਨਾਮਜ਼ਦਗੀ ਦਾ ਅਧਿਕਾਰ:</strong> ਮੌਤ ਜਾਂ ਅਸਮਰੱਥਾ ਦੀ ਸਥਿਤੀ ਵਿੱਚ ਆਪਣੇ ਅਧਿਕਾਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਕਿਸੇ ਹੋਰ ਵਿਅਕਤੀ ਨੂੰ ਨਾਮਜ਼ਦ ਕਰੋ।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. ਆਪਣੀ ਸਹਿਮਤੀ ਕਿਵੇਂ ਵਾਪਸ ਲੈਣੀ ਹੈ?</h2>
                  <p>ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀ ਸਹਿਮਤੀ ਵਾਪਸ ਲੈ ਸਕਦੇ ਹੋ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> 'ਤੇ "Withdraw Consent" ਵਿਸ਼ੇ ਨਾਲ ਈਮੇਲ ਕਰਕੇ।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> 'ਤੇ ਸਾਡੇ ਸ਼ਿਕਾਇਤ ਅਧਿਕਾਰੀ ਨੂੰ ਲਿਖ ਕੇ।</li>
                    <li>ਸਾਡੀ ਵੈੱਬਸਾਈਟ 'ਤੇ "ਕੂਕੀ ਸੈਟਿੰਗਾਂ" ਬਟਨ ਦੀ ਵਰਤੋਂ ਕਰਕੇ।</li>
                  </ul>
                  <p className="mt-3">
                    ਸਹਿਮਤੀ ਵਾਪਸ ਲੈਣ ਨਾਲ ਵਾਪਸ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਸਹਿਮਤੀ ਦੇ ਅਧਾਰ 'ਤੇ ਪ੍ਰੋਸੈਸਿੰਗ ਦੀ ਵੈਧਤਾ 'ਤੇ ਅਸਰ ਨਹੀਂ ਪਵੇਗਾ। ਅਸੀਂ <strong className="text-white">30 ਦਿਨਾਂ</strong> ਦੇ ਅੰਦਰ ਤੁਹਾਡੀ ਬੇਨਤੀ 'ਤੇ ਕਾਰਵਾਈ ਕਰਾਂਗੇ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. ਸ਼ਿਕਾਇਤ ਅਧਿਕਾਰੀ (Grievance Officer)</h2>
                  <p>ਜੇਕਰ ਤੁਹਾਨੂੰ ਸਾਡੀ ਡੇਟਾ ਪ੍ਰੋਸੈਸਿੰਗ ਬਾਰੇ ਕੋਈ ਚਿੰਤਾ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਸਾਡੇ ਸ਼ਿਕਾਇਤ ਅਧਿਕਾਰੀ ਨਾਲ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">ਨਾਮ:</strong> ਸ਼ਿਲਪੀ ਕੁਲਸ਼੍ਰੇਸ਼ਠ</p>
                    <p className="mt-2"><strong className="text-white">ਅਹੁਦਾ:</strong> ਸ਼ਿਕਾਇਤ ਅਧਿਕਾਰੀ ਅਤੇ ਸੰਸਥਾਪਕ, ਬਿਜ਼ਨਸ ਐਕਸੀਲੈਂਸ ਸਟਾਰਟਐਕਸ LLP</p>
                    <p className="mt-2"><strong className="text-white">ਈਮੇਲ:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ਫ਼ੋਨ:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">ਜਵਾਬ ਸਮਾਂ:</strong> 48 ਘੰਟਿਆਂ ਵਿੱਚ ਪ੍ਰਾਪਤੀ; <strong>7 ਕੰਮਕਾਜੀ ਦਿਨਾਂ</strong> ਵਿੱਚ ਹੱਲ।</p>
                  </div>
                  <p className="mt-4">
                    ਜੇਕਰ ਤੁਸੀਂ ਸਾਡੇ ਜਵਾਬ ਤੋਂ ਸੰਤੁਸ਼ਟ ਨਹੀਂ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ <strong className="text-white">ਭਾਰਤੀ ਡੇਟਾ ਸੁਰੱਖਿਆ ਬੋਰਡ</strong> ਕੋਲ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਹੈ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. ਮਹੱਤਵਪੂਰਨ ਨੋਟਿਸ
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• ਸਹਿਮਤੀ ਚੈੱਕਬਾਕਸ ਨੂੰ ਚੈੱਕ ਕਰਕੇ, ਤੁਸੀਂ ਸਾਨੂੰ ਆਪਣੇ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਪ੍ਰੋਸੈਸਿੰਗ ਲਈ <strong>ਮੁਫ਼ਤ, ਖਾਸ, ਜਾਣਕਾਰੀ ਭਰਪੂਰ, ਬਿਨਾਂ ਸ਼ਰਤ ਅਤੇ ਸਪਸ਼ਟ</strong> ਸਹਿਮਤੀ ਦਿੰਦੇ ਹੋ।</li>
                      <li>• ਤੁਸੀਂ ਸਹਿਮਤੀ ਦੇਣ ਤੋਂ ਇਨਕਾਰ ਕਰ ਸਕਦੇ ਹੋ, ਜਾਂ ਬਾਅਦ ਵਿੱਚ ਇਸਨੂੰ ਵਾਪਸ ਲੈ ਸਕਦੇ ਹੋ। ਹਾਲਾਂਕਿ, ਅਸੀਂ ਤੁਹਾਡੀ ਸਹਿਮਤੀ ਤੋਂ ਬਿਨਾਂ ਕੁਝ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਨਹੀਂ ਕਰ ਸਕਦੇ।</li>
                      <li>• ਅਸੀਂ ਮਾਰਕੀਟਿੰਗ ਉਦੇਸ਼ਾਂ ਲਈ ਤੀਜੇ ਪੱਖਾਂ ਨਾਲ ਤੁਹਾਡਾ ਨਿੱਜੀ ਡੇਟਾ ਵੇਚ, ਕਿਰਾਏ 'ਤੇ ਜਾਂ ਸਾਂਝਾ ਨਹੀਂ ਕਰਾਂਗੇ।</li>
                      <li>• ਤੁਹਾਡਾ ਡੇਟਾ ਭਰੋਸੇਮੰਦ ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ (ਜਿਵੇਂ ਕਿ, ਈਮੇਲ ਲਈ ਰੀਸੈਂਡ, ਸਟੋਰੇਜ ਲਈ ਗੂਗਲ ਸ਼ੀਟਸ) ਨਾਲ ਸਾਂਝਾ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                ASSAMESE CONTENT
            ============================================== */}
            {language === "as" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. পৰিচয় (Introduction)</h2>
                  <p>
                    এই সন্মতি জাননী <strong className="text-white">ব্যৱসায় এক্সিলেন্স ষ্টাৰ্টএক্স LLP</strong> ("আমি", "আমাৰ")-য়ে জাৰি কৰিছে, যি <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> ত লিগেল গেলে‍ক্সি প্লেটফৰ্ম পৰিচালনা কৰে আৰু <strong className="text-white">ডিজিটেল পাৰ্চনেল ডেটা প্ৰটেক্সন আইন, 2023</strong> ("DPDP Act") আৰু <strong className="text-white">DPDP নিয়ম, 2025</strong> মানি চলে।
                  </p>
                  <p className="mt-3">
                    এই জাননীয়ে ব্যাখ্যা কৰে যে আমি কি ব্যক্তিগত ডেটা সংগ্ৰহ কৰোঁ, কিয় সংগ্ৰহ কৰোঁ, আমি ইয়াক কেনেকৈ ব্যৱহাৰ কৰোঁ আৰু আপুনি কেনেকৈ আপোনাৰ সন্মতি প্ৰত্যাহাৰ কৰিব পাৰে। সন্মতি চেকবক্স চেক কৰি, আপুনি তলত বৰ্ণনা কৰা অনুসৰি আপোনাৰ ব্যক্তিগত ডেটা প্ৰক্ৰিয়াকৰণৰ বাবে সন্মতি দিয়ে।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. আমি কি ব্যক্তিগত ডেটা সংগ্ৰহ কৰোঁ
                  </h2>
                  <p>যেতিয়া আপুনি আমাৰ ৱেবছাইটত এটা ফৰ্ম দাখিল কৰে, আমি সংগ্ৰহ কৰিব পাৰোঁ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">পৰিচয় ডেটা:</strong> প্ৰথম নাম, শেষ নাম</li>
                    <li><strong className="text-white">যোগাযোগ ডেটা:</strong> কৰ্ম ইমেইল ঠিকনা, ফোন নম্বৰ</li>
                    <li><strong className="text-white">পেছাদাৰী ডেটা:</strong> কোম্পানীৰ নাম, চাকৰিৰ শিৰোনাম, কোম্পানীৰ আকাৰ, উদ্যোগ</li>
                    <li><strong className="text-white">যোগাযোগ ডেটা:</strong> আপোনাৰ বাৰ্তা, প্ৰত্যাহ্বান, বা প্ৰশ্নৰ বিৱৰণ</li>
                    <li><strong className="text-white">কাৰিকৰী ডেটা:</strong> IP ঠিকনা, ব্ৰাউজাৰ প্ৰকাৰ, ডিভাইচ তথ্য, আৰু কুকি (কেৱল যদি আপুনি এনালিটিক্স কুকি গ্ৰহণ কৰে)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ব্যক্তিগত ডেটা</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">নিৰ্দিষ্ট উদ্দেশ্য</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>নাম</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপোনাক চিনাক্ত কৰিবলৈ আৰু যোগাযোগত আপোনাক সঠিকভাৱে সম্বোধন কৰিবলৈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ইমেইল ঠিকনা</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপোনাৰ প্ৰশ্নৰ উত্তৰ দিবলৈ আৰু অনুৰোধ কৰা নথি (যেনে উৎপাদিত নীতি, DPDPA প্ৰতিবেদন) পঠিয়াবলৈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ফোন নম্বৰ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">জৰুৰী অনুসৰণ-সম্পৰ্কীয় যোগাযোগ বা পৰামৰ্শৰ সময় নিৰ্ধাৰণ কৰিবলৈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>কোম্পানীৰ নাম আৰু পদ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপোনাৰ সাংগঠনিক প্ৰয়োজনীয়তা বুজিবলৈ আৰু অনুসৰণ সহায় কাষ্টমাইজ কৰিবলৈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>উদ্যোগ আৰু কোম্পানীৰ আকাৰ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপোনাৰ অনুসৰণ কাৰ্যসূচীৰ পৰিপক্বতা বিশ্লেষণ কৰিবলৈ আৰু প্ৰাসংগিক পৰামৰ্শ প্ৰদান কৰিবলৈ।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>বাৰ্তা</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">আপোনাৰ নিৰ্দিষ্ট অনুৰোধ বা সমস্যা বুজিবলৈ আৰু প্ৰতিক্ৰিয়া দিবলৈ।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. প্ৰক্ৰিয়াকৰণৰ উদ্দেশ্য
                  </h2>
                  <p>আমি তলত দিয়া নিৰ্দিষ্ট উদ্দেশ্যৰ বাবে আপোনাৰ ব্যক্তিগত ডেটা প্ৰক্ৰিয়া কৰোঁ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">আপোনাৰ প্ৰশ্নৰ উত্তৰ দিবলৈ:</strong> আপোনাৰ ডেমো অনুৰোধ বা যোগাযোগ ফৰ্ম দাখিলৰ বিষয়ে আপোনাৰ সৈতে যোগাযোগ কৰা।</li>
                    <li><strong className="text-white">অনুৰোধ কৰা সেৱা প্ৰদান কৰিবলৈ:</strong> ইমেইলৰ জৰিয়তে উৎপাদিত নথি আপোনাক পঠিওৱা।</li>
                    <li><strong className="text-white">আমাৰ সেৱা উন্নত কৰিবলৈ:</strong> ব্যৱহাৰকাৰীয়ে আমাৰ ৱেবছাইটৰ সৈতে কেনেকৈ যোগাযোগ কৰে বুজা (কেৱল এনালিটিক্স সন্মতিৰ সৈতে)।</li>
                    <li><strong className="text-white">আইনী বাধ্যবাধকতা মানি চলিবলৈ:</strong> আইন অনুসৰি ৰেকৰ্ড ৰখা।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ আমি আপোনাৰ পৰা নতুন সন্মতি নোলোৱাকৈ আপোনাৰ ব্যক্তিগত ডেটা অন্য কোনো উদ্দেশ্যৰ বাবে ব্যৱহাৰ নকৰোঁ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ডেটা ধাৰণ (Data Retention)</h2>
                  <p>আমি আপোনাৰ ব্যক্তিগত ডেটা কেৱল প্ৰয়োজনীয় সময়ৰ বাবে ৰাখোঁ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ডেমো/যোগাযোগ অনুৰোধ:</strong> দাখিলৰ তাৰিখৰ পৰা 2 বছৰ</li>
                    <li><strong className="text-white">উৎপাদিত নথি:</strong> উৎপাদনৰ তাৰিখৰ পৰা 1 বছৰ</li>
                    <li><strong className="text-white">এনালিটিক্স কুকি:</strong> 2 বছৰলৈকে (বা যেতিয়ালৈকে আপুনি সন্মতি প্ৰত্যাহাৰ নকৰে)</li>
                  </ul>
                  <p className="mt-3">
                    ধাৰণৰ সময়সীমা শেষ হোৱাৰ পিছত, আপোনাৰ ব্যক্তিগত ডেটা সুৰক্ষিতভাৱে মচা বা নামহীন কৰা হ'ব।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ডেটা প্ৰিন্সিপাল হিচাপে আপোনাৰ অধিকাৰ
                  </h2>
                  <p>DPDP আইন 2023 ৰ অধীনত, আপোনাৰ তলত দিয়া অধিকাৰ আছে:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">প্ৰৱেশৰ অধিকাৰ:</strong> আমি আপোনাৰ বিষয়ে প্ৰক্ৰিয়া কৰা ব্যক্তিগত ডেটাৰ সাৰাংশ বিচাৰক।</li>
                    <li><strong className="text-white">সংশোধনৰ অধিকাৰ:</strong> ভুল বা অপূৰ্ণ ডেটা সংশোধনৰ অনুৰোধ কৰক।</li>
                    <li><strong className="text-white">মচাৰ অধিকাৰ:</strong> আপোনাৰ ব্যক্তিগত ডেটা মচাৰ অনুৰোধ কৰক।</li>
                    <li><strong className="text-white">সন্মতি প্ৰত্যাহাৰৰ অধিকাৰ:</strong> যিকোনো সময়ত আপোনাৰ সন্মতি প্ৰত্যাহাৰ কৰক।</li>
                    <li><strong className="text-white">অভিযোগ নিষ্পত্তিৰ অধিকাৰ:</strong> আমাৰ অভিযোগ বিষয়াৰ ওচৰত অভিযোগ দাখিল কৰক।</li>
                    <li><strong className="text-white">মনোনয়নৰ অধিকাৰ:</strong> মৃত্যু বা অক্ষমতাৰ ক্ষেত্ৰত আপোনাৰ অধিকাৰ প্ৰয়োগৰ বাবে আন এজন ব্যক্তিক মনোনীত কৰক।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. আপোনাৰ সন্মতি কেনেকৈ প্ৰত্যাহাৰ কৰিব?</h2>
                  <p>আপুনি যিকোনো সময়ত আপোনাৰ সন্মতি প্ৰত্যাহাৰ কৰিব পাৰে:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> লৈ "Withdraw Consent" বিষয়ৰ সৈতে ইমেইল কৰি।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> ত আমাৰ অভিযোগ বিষয়াক লিখি।</li>
                    <li>আমাৰ ৱেবছাইটত "কুকি ছেটিংছ" বুটাম ব্যৱহাৰ কৰি।</li>
                  </ul>
                  <p className="mt-3">
                    সন্মতি প্ৰত্যাহাৰে প্ৰত্যাহাৰৰ আগতে সন্মতিৰ আধাৰত প্ৰক্ৰিয়াকৰণৰ বৈধতাক প্ৰভাৱিত নকৰে। আমি <strong className="text-white">30 দিনৰ</strong> ভিতৰত আপোনাৰ অনুৰোধ প্ৰক্ৰিয়া কৰিম।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. অভিযোগ বিষয়া (Grievance Officer)</h2>
                  <p>যদি আমাৰ ডেটা প্ৰক্ৰিয়াকৰণৰ বিষয়ে আপোনাৰ কোনো চিন্তা আছে, আপুনি আমাৰ অভিযোগ বিষয়াৰ সৈতে যোগাযোগ কৰিব পাৰে:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">নাম:</strong> শিল্পী কুলশ্ৰেষ্ঠ</p>
                    <p className="mt-2"><strong className="text-white">পদ:</strong> অভিযোগ বিষয়া আৰু প্ৰতিষ্ঠাপক, ব্যৱসায় এক্সিলেন্স ষ্টাৰ্টএক্স LLP</p>
                    <p className="mt-2"><strong className="text-white">ইমেইল:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ফোন:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">প্ৰতিক্ৰিয়া সময়:</strong> 48 ঘণ্টাৰ ভিতৰত স্বীকৃতি; <strong>7 কৰ্মদিৱসৰ</strong> ভিতৰত সমাধান।</p>
                  </div>
                  <p className="mt-4">
                    যদি আপুনি আমাৰ প্ৰতিক্ৰিয়াত সন্তুষ্ট নহয়, তেন্তে আপোনাৰ <strong className="text-white">ভাৰতীয় ডেটা সুৰক্ষা বৰ্ড</strong>ৰ ওচৰত অভিযোগ দাখিল কৰাৰ অধিকাৰ আছে।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. গুৰুত্বপূৰ্ণ জাননী
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• সন্মতি চেকবক্স চেক কৰি, আপুনি আমাক আপোনাৰ ব্যক্তিগত ডেটা প্ৰক্ৰিয়া কৰিবলৈ <strong>মুক্ত, নিৰ্দিষ্ট, সূচিত, চৰ্তহীন আৰু অস্পষ্ট</strong> সন্মতি দিয়ে।</li>
                      <li>• আপুনি সন্মতি দিবলৈ অস্বীকাৰ কৰিব পাৰে, বা পিছত ইয়াক প্ৰত্যাহাৰ কৰিব পাৰে। তথাপিও, আমি আপোনাৰ সন্মতি অবিহনে কিছুমান সেৱা প্ৰদান কৰিব নোৱাৰোঁ।</li>
                      <li>• আমি বিপণন উদ্দেশ্যৰ বাবে তৃতীয় পক্ষৰ সৈতে আপোনাৰ ব্যক্তিগত ডেটা বিক্ৰী, ভাড়া বা ভাগ নকৰোঁ।</li>
                      <li>• আপোনাৰ ডেটা বিশ্বস্ত সেৱা প্ৰদানকাৰীৰ সৈতে (যেনে, ইমেইলৰ বাবে ৰিচেণ্ড, সংৰক্ষণৰ বাবে গুগল শ্বীট) ভাগ কৰা হ'ব পাৰে।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                MAITHILI CONTENT
            ============================================== */}
            {language === "mai" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. परिचय (Introduction)</h2>
                  <p>
                    ई सहमति सूचना <strong className="text-white">बिजनेस एक्सीलेंस स्टार्टX LLP</strong> ("हम", "हमर") द्वारा जारी कएल गेल अछि, जे <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> पर लीगल गैलेक्सी प्लेटफ़ॉर्म चलाबैत अछि आ <strong className="text-white">डिजिटल पर्सनल डेटा प्रोटेक्शन एक्ट, 2023</strong> ("DPDP Act") आ <strong className="text-white">DPDP नियम, 2025</strong> क पालन करैत अछि।
                  </p>
                  <p className="mt-3">
                    ई सूचना बताबैत अछि जे हम कोन व्यक्तिगत डेटा एकत्र करैत छी, कोना एकत्र करैत छी, हम एकर उपयोग कोना करैत छी, आ अहाँ अपन सहमति कोना वापस ल' सकैत छी। सहमति चेकबॉक्स क चयन करि, अहाँ नीचाँ वर्णित अनुसार अपन व्यक्तिगत डेटा क प्रसंस्करण लेल सहमति देल जाइत अछि।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. हम कोन व्यक्तिगत डेटा एकत्र करैत छी
                  </h2>
                  <p>जखन अहाँ हमर वेबसाइट पर फॉर्म सबमिट करैत छी, तखन हम एकत्र क' सकैत छी:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पहचान डेटा:</strong> पहिल नाम, अंतिम नाम</li>
                    <li><strong className="text-white">संपर्क डेटा:</strong> कार्य ईमेल पता, फोन नंबर</li>
                    <li><strong className="text-white">पेशेवर डेटा:</strong> कंपनी क नाम, नौकरी क शीर्षक, कंपनी क आकार, उद्योग</li>
                    <li><strong className="text-white">संचार डेटा:</strong> अहाँक संदेश, चुनौती, वा प्रश्न विवरण</li>
                    <li><strong className="text-white">तकनीकी डेटा:</strong> आईपी पता, ब्राउज़र प्रकार, डिवाइस जानकारी, आ कुकीज़ (केवल तखन जखन अहाँ एनालिटिक्स कुकीज़ स्वीकार करैत छी)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">व्यक्तिगत डेटा</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">विशिष्ट उद्देश्य</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>नाम</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">अहाँक पहचान करबाक आ संवाद में अहाँक सही तरीका सं बोधित करबाक लेल।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ईमेल पता</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">अहाँक पुछताक जवाब दै आ अनुरोधित दस्तावेज (जेना जनरेट कएल नीति, DPDPA रिपोर्ट) पठबाक लेल।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>फोन नंबर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तत्काल अनुपालन-संबंधी संचार या परामर्श शेड्यूल करबाक लेल।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>कंपनी क नाम आ पद</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">अहाँक संगठनात्मक आवश्यकता बुझबाक आ अनुपालन सहायता कस्टमाइज़ करबाक लेल।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>उद्योग आ कंपनी क आकार</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">अहाँक अनुपालन कार्यक्रम क परिपक्वता विश्लेषण करबाक आ प्रासंगिक सिफारिश प्रदान करबाक लेल।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>संदेश</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">अहाँक विशिष्ट अनुरोध या समस्या बुझबाक आ जवाब देबाक लेल।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. प्रसंस्करण क उद्देश्य
                  </h2>
                  <p>हम अहाँक व्यक्तिगत डेटा कें निम्नलिखित विशिष्ट उद्देश्य लेल प्रसंस्करण करैत छी:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">अहाँक पुछताक जवाब दै लेल:</strong> अहाँक डेमो अनुरोध या संपर्क फॉर्म सबमिशन कें बारे में अहाँ सं संपर्क करब।</li>
                    <li><strong className="text-white">अनुरोधित सेवा प्रदान करबाक लेल:</strong> ईमेल क माध्यम सं जनरेट कएल दस्तावेज अहाँकेँ पठब।</li>
                    <li><strong className="text-white">हमर सेवा बेहतर करबाक लेल:</strong> ई बुझब जे उपयोगकर्ता हमर वेबसाइट क संग कोना इंटरैक्ट करैत छथि (केवल एनालिटिक्स सहमति क संग)।</li>
                    <li><strong className="text-white">कानूनी दायित्व पालन करबाक लेल:</strong> कानून द्वारा आवश्यक रिकॉर्ड रखब।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ हम अहाँक नव सहमति प्राप्त कएल बिना अहाँक व्यक्तिगत डेटा क उपयोग कुनो अन्य उद्देश्य लेल नहि करब।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. डेटा प्रतिधारण (Data Retention)</h2>
                  <p>हम अहाँक व्यक्तिगत डेटा कें केवल आवश्यक अवधि धरि रखैत छी:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">डेमो/संपर्क अनुरोध:</strong> सबमिशन क तिथि सं 2 वर्ष</li>
                    <li><strong className="text-white">जनरेट कएल दस्तावेज:</strong> जनरेशन क तिथि सं 1 वर्ष</li>
                    <li><strong className="text-white">एनालिटिक्स कुकीज़:</strong> 2 वर्ष धरि (या जाबत अहाँ सहमति वापस नहि लैत छी)</li>
                  </ul>
                  <p className="mt-3">
                    प्रतिधारण अवधि समाप्त भेलाक बाद, अहाँक व्यक्तिगत डेटा सुरक्षित रूप सं हटा देल जाएत या अनाम क' देल जाएत।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. डेटा प्रिंसिपल क रूप में अहाँक अधिकार
                  </h2>
                  <p>DPDP अधिनियम 2023 क अंतर्गत, अहाँकँ निम्नलिखित अधिकार अछि:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पहुँच क अधिकार:</strong> हमर द्वारा प्रसंस्करण कएल गेल व्यक्तिगत डेटा क सारांश माँगू।</li>
                    <li><strong className="text-white">सुधार क अधिकार:</strong> गलत या अपूर्ण डेटा में सुधार क अनुरोध करू।</li>
                    <li><strong className="text-white">मिटाबाक अधिकार:</strong> अपन व्यक्तिगत डेटा हटाबाक अनुरोध करू।</li>
                    <li><strong className="text-white">सहमति वापस लेबाक अधिकार:</strong> कुनो समय अपन सहमति वापस लिअ।</li>
                    <li><strong className="text-white">शिकायत निवारण क अधिकार:</strong> हमर शिकायत अधिकारी कें ओहिठाम शिकायत दर्ज करू।</li>
                    <li><strong className="text-white">नामांकन क अधिकार:</strong> मृत्यु या अक्षमता क स्थिति में अपन अधिकार क प्रयोग करबाक लेल कोनो अन्य व्यक्ति कें नामित करू।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. अपन सहमति कोना वापस लेब?</h2>
                  <p>अहाँ कुनो समय अपन सहमति वापस ल' सकैत छी:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> पर "Withdraw Consent" विषय क संग ईमेल करि।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> पर हमर शिकायत अधिकारी कें लिखि।</li>
                    <li>हमर वेबसाइट पर "कुकी सेटिंग्स" बटन क उपयोग करि।</li>
                  </ul>
                  <p className="mt-3">
                    सहमति वापस लेबाक सं पहिने सहमति क आधार पर प्रसंस्करण क वैधता पर प्रभाव नहि पड़त। हम <strong className="text-white">30 दिन</strong> क भीतर अहाँक अनुरोध पर कार्रवाई करब।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. शिकायत अधिकारी (Grievance Officer)</h2>
                  <p>यदि अहाँकँ हमर डेटा प्रसंस्करण क बारे में कोनो चिंता अछि, त अहाँ हमर शिकायत अधिकारी सं संपर्क क' सकैत छी:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">नाम:</strong> शिल्पी कुलश्रेष्ठ</p>
                    <p className="mt-2"><strong className="text-white">पदनाम:</strong> शिकायत अधिकारी आ संस्थापक, बिजनेस एक्सीलेंस स्टार्टX LLP</p>
                    <p className="mt-2"><strong className="text-white">ईमेल:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">फोन:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">प्रतिक्रिया समय:</strong> 48 घंटा में पावती; <strong>7 कार्य दिवस</strong> में समाधान।</p>
                  </div>
                  <p className="mt-4">
                    यदि अहाँ हमर प्रतिक्रिया सं संतुष्ट नहि छी, त अहाँकँ <strong className="text-white">भारतीय डेटा संरक्षण बोर्ड</strong> कें ओहिठाम शिकायत दर्ज करबाक अधिकार अछि।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. महत्वपूर्ण सूचना
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• सहमति चेकबॉक्स क चयन करि, अहाँ हमरा अपन व्यक्तिगत डेटा क प्रसंस्करण लेल <strong>मुक्त, विशिष्ट, सूचित, बिना शर्त आ स्पष्ट</strong> सहमति दैत छी।</li>
                      <li>• अहाँ सहमति देबा सं मना क' सकैत छी, या बाद में एकरा वापस ल' सकैत छी। हालाँकि, हम अहाँक सहमति क बिना किछु सेवा प्रदान नहि क' सकैत छी।</li>
                      <li>• हम विपणन उद्देश्य लेल तीसरा पक्ष क संग अहाँक व्यक्तिगत डेटा बेच, किराए पर या साझा नहि करब।</li>
                      <li>• अहाँक डेटा विश्वसनीय सेवा प्रदाता (जेना, ईमेल लेल रीसेंड, भंडारण लेल गूगल शीट्स) क संग साझा क' सकैत अछि।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                SANTALI CONTENT
            ============================================== */}
            {language === "sat" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. ᱮᱛᱚᱦᱚᱵ (Introduction)</h2>
                  <p>
                    ᱱᱚᱶᱟ ᱥᱚᱢᱢᱚᱛᱤ ᱱᱚᱴᱤᱥ ᱫᱚ <strong className="text-white">ᱵᱤᱡᱱᱮᱥ ᱮᱠᱥᱤᱞᱮᱱᱥ ᱥᱴᱟᱨᱴᱮᱠᱥ LLP</strong> ("ᱟᱞᱮ", "ᱟᱞᱮᱭᱟᱜ") ᱦᱚᱛᱮᱛᱮ ᱮᱢ ᱟᱠᱟᱱᱟ, ᱡᱟᱦᱟᱸ ᱫᱚ <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> ᱨᱮ ᱞᱤᱜᱟᱞ ᱜᱟᱞᱟᱠᱥᱤ ᱯᱞᱮᱴᱯᱷᱚᱨᱢ ᱪᱟᱞᱟᱭᱮᱫᱟ ᱟᱨ <strong className="text-white">ᱰᱤᱡᱤᱴᱟᱞ ᱯᱟᱨᱥᱚᱱᱟᱞ ᱰᱟᱴᱟ ᱯᱨᱚᱴᱮᱠᱥᱚᱱ ᱟᱹᱨᱤ, 2023</strong> ("DPDP Act") ᱟᱨ <strong className="text-white">DPDP ᱱᱤᱭᱚᱢ, 2025</strong> ᱠᱚ ᱯᱟᱞᱚᱱ ᱮᱫᱟ᱾
                  </p>
                  <p className="mt-3">
                    ᱱᱚᱶᱟ ᱱᱚᱴᱤᱥ ᱫᱚ ᱵᱟᱰᱟᱭᱮᱫᱟ ᱡᱮ ᱟᱞᱮ ᱪᱮᱫ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱡᱟᱣᱨᱟᱭᱮᱫᱟ, ᱪᱮᱫᱟᱜ ᱡᱟᱣᱨᱟᱭᱮᱫᱟ, ᱟᱞᱮ ᱚᱱᱟᱭ ᱪᱮᱫ ᱞᱮᱠᱟ ᱵᱮᱵᱷᱟᱨᱮᱫᱟ, ᱟᱨ ᱟᱢ ᱪᱮᱫ ᱞᱮᱠᱟ ᱟᱢᱟᱜ ᱥᱚᱢᱢᱚᱛᱤ ᱨᱩᱣᱟᱹᱲ ᱦᱟᱛᱟᱣ ᱫᱟᱲᱮᱭᱟᱜᱼᱟᱢ᱾ ᱥᱚᱢᱢᱚᱛᱤ ᱪᱮᱠᱵᱚᱠᱥ ᱪᱮᱠ ᱠᱟᱛᱮ, ᱟᱢ ᱞᱟᱛᱟᱨ ᱨᱮ ᱚᱞ ᱟᱠᱟᱱ ᱞᱮᱠᱟᱛᱮ ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱯᱨᱚᱥᱮᱥ ᱞᱟᱹᱜᱤᱫ ᱥᱚᱢᱢᱚᱛᱤ ᱮᱢᱮᱫᱟᱢ᱾
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. ᱟᱞᱮ ᱪᱮᱫ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱡᱟᱣᱨᱟᱭᱮᱫᱟ
                  </h2>
                  <p>ᱡᱚᱠᱷᱚᱱ ᱟᱢ ᱟᱞᱮᱭᱟᱜ ᱣᱮᱵᱥᱟᱭᱤᱴ ᱨᱮ ᱯᱷᱚᱨᱢ ᱡᱚᱢᱟᱭᱮᱫᱟᱢ, ᱟᱞᱮ ᱡᱟᱣᱨᱟ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ᱩᱨᱩᱯ ᱰᱟᱴᱟ:</strong> ᱯᱩᱭᱞᱩ ᱧᱩᱛᱩᱢ, ᱢᱩᱪᱟᱹᱫ ᱧᱩᱛᱩᱢ</li>
                    <li><strong className="text-white">ᱡᱚᱜᱟᱣ ᱰᱟᱴᱟ:</strong> ᱠᱟᱹᱢᱤ ᱤᱢᱮᱞ ᱴᱷᱤᱠᱟᱹᱱᱟ, ᱯᱷᱚᱱ ᱱᱚᱢᱵᱚᱨ</li>
                    <li><strong className="text-white">ᱠᱟᱹᱢᱤ ᱰᱟᱴᱟ:</strong> ᱠᱚᱢᱯᱟᱱᱤ ᱧᱩᱛᱩᱢ, ᱪᱟᱹᱠᱨᱤ ᱠᱷᱚᱱᱟᱜ, ᱠᱚᱢᱯᱟᱱᱤ ᱢᱟᱯ, ᱤᱱᱰᱚᱥᱴᱨᱤ</li>
                    <li><strong className="text-white">ᱡᱚᱜᱟᱣ ᱰᱟᱴᱟ:</strong> ᱟᱢᱟᱜ ᱠᱷᱚᱵᱚᱨ, ᱮᱴᱠᱮᱴᱚᱬᱮ, ᱥᱮ ᱠᱩᱠᱞᱤ ᱵᱤᱵᱨᱚᱬ</li>
                    <li><strong className="text-white">ᱴᱮᱠᱱᱤᱠᱟᱞ ᱰᱟᱴᱟ:</strong> IP ᱴᱷᱤᱠᱟᱹᱱᱟ, ᱵᱽᱨᱟᱣᱡᱚᱨ ᱞᱮᱠᱟᱱ, ᱰᱤᱣᱟᱭᱤᱥ ᱠᱷᱚᱵᱚᱨ, ᱟᱨ ᱠᱩᱠᱤ (ᱥᱩᱢᱩᱝ ᱡᱚᱠᱷᱚᱱ ᱟᱢ ᱮᱱᱟᱞᱤᱴᱤᱠᱥ ᱠᱩᱠᱤ ᱠᱚ ᱦᱟᱛᱟᱣᱮᱫᱟᱢ)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ᱵᱤᱥᱮᱥ ᱡᱚᱥ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ᱧᱩᱛᱩᱢ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ᱟᱢᱟᱜ ᱩᱨᱩᱯ ᱵᱟᱰᱟᱭ ᱟᱨ ᱡᱚᱜᱟᱣ ᱨᱮ ᱟᱢ ᱴᱷᱮᱱ ᱥᱚᱫᱚᱨ ᱞᱟᱹᱜᱤᱫ᱾</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ᱤᱢᱮᱞ ᱴᱷᱤᱠᱟᱹᱱᱟ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ᱟᱢᱟᱜ ᱠᱩᱠᱞᱤ ᱨᱮᱭᱟᱜ ᱛᱮᱞᱟ ᱮᱢ ᱟᱨ ᱠᱩᱠᱞᱤ ᱟᱠᱟᱱ ᱫᱚᱞᱤᱞ (ᱡᱮᱞᱮᱠᱟ ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱ ᱱᱤᱛᱤ, DPDPA ᱨᱤᱯᱚᱴ) ᱠᱩᱞ ᱞᱟᱹᱜᱤᱫ᱾</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ᱯᱷᱚᱱ ᱱᱚᱢᱵᱚᱨ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ᱡᱚᱨᱩᱨᱤ ᱯᱟᱞᱚᱱ-ᱥᱟᱹᱜᱟᱹᱭᱟᱱ ᱡᱚᱜᱟᱣ ᱥᱮ ᱯᱚᱨᱟᱢᱚᱨᱥ ᱚᱠᱛᱚ ᱛᱷᱤᱨ ᱞᱟᱹᱜᱤᱫ᱾</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ᱠᱚᱢᱯᱟᱱᱤ ᱧᱩᱛᱩᱢ ᱟᱨ ᱯᱚᱫᱚ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ᱟᱢᱟᱜ ᱜᱟᱶᱛᱟ ᱞᱟᱹᱠᱛᱤ ᱵᱟᱰᱟᱭ ᱟᱨ ᱯᱟᱞᱚᱱ ᱜᱚᱲᱚ ᱠᱚᱥᱴᱚᱢᱟᱭᱤᱡᱽ ᱞᱟᱹᱜᱤᱫ᱾</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ᱤᱱᱰᱚᱥᱴᱨᱤ ᱟᱨ ᱠᱚᱢᱯᱟᱱᱤ ᱢᱟᱯ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ᱟᱢᱟᱜ ᱯᱟᱞᱚᱱ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ ᱨᱮᱭᱟᱜ ᱯᱟᱨᱤᱯᱚᱠᱠᱷᱚᱛᱟ ᱵᱤᱥᱞᱮᱥᱚᱱ ᱟᱨ ᱥᱟᱹᱜᱟᱹᱭᱟᱱ ᱥᱚᱞᱦᱟ ᱮᱢ ᱞᱟᱹᱜᱤᱫ᱾</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ᱠᱷᱚᱵᱚᱨ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ᱟᱢᱟᱜ ᱵᱤᱥᱮᱥ ᱠᱩᱠᱞᱤ ᱥᱮ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱵᱟᱰᱟᱭ ᱟᱨ ᱛᱮᱞᱟ ᱮᱢ ᱞᱟᱹᱜᱤᱫ᱾</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. ᱯᱨᱚᱥᱮᱥ ᱨᱮᱭᱟᱜ ᱡᱚᱥ
                  </h2>
                  <p>ᱟᱞᱮ ᱞᱟᱛᱟᱨ ᱨᱮ ᱚᱞ ᱟᱠᱟᱱ ᱵᱤᱥᱮᱥ ᱡᱚᱥ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱯᱨᱚᱥᱮᱥ ᱞᱮᱫᱟᱭ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ᱟᱢᱟᱜ ᱠᱩᱠᱞᱤ ᱨᱮᱭᱟᱜ ᱛᱮᱞᱟ ᱮᱢ ᱞᱟᱹᱜᱤᱫ:</strong> ᱟᱢᱟᱜ ᱰᱮᱢᱳ ᱠᱩᱠᱞᱤ ᱥᱮ ᱡᱚᱜᱟᱣ ᱯᱷᱚᱨᱢ ᱡᱚᱢᱟ ᱵᱟᱵᱚᱛ ᱟᱢ ᱥᱟᱞᱟᱜ ᱡᱚᱜᱟᱣ᱾</li>
                    <li><strong className="text-white">ᱠᱩᱠᱞᱤ ᱟᱠᱟᱱ ᱥᱮᱣᱟ ᱮᱢ ᱞᱟᱹᱜᱤᱫ:</strong> ᱤᱢᱮᱞ ᱦᱚᱛᱮᱛᱮ ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱ ᱫᱚᱞᱤᱞ ᱟᱢ ᱠᱩᱞ᱾</li>
                    <li><strong className="text-white">ᱟᱞᱮᱭᱟᱜ ᱥᱮᱣᱟ ᱥᱚᱲᱚᱢ ᱞᱟᱹᱜᱤᱫ:</strong> ᱵᱮᱵᱷᱟᱨᱤᱭᱟᱹ ᱠᱚ ᱟᱞᱮᱭᱟᱜ ᱣᱮᱵᱥᱟᱭᱤᱴ ᱥᱟᱞᱟᱜ ᱪᱮᱫ ᱞᱮᱠᱟ ᱡᱚᱯᱚᱲᱟᱣᱮᱫᱟ ᱵᱟᱰᱟᱭ (ᱥᱩᱢᱩᱝ ᱮᱱᱟᱞᱤᱴᱤᱠᱥ ᱥᱚᱢᱢᱚᱛᱤ ᱥᱟᱞᱟᱜ)᱾</li>
                    <li><strong className="text-white">ᱟᱹᱨᱤ ᱞᱟᱹᱠᱛᱤ ᱯᱟᱞᱚᱱ ᱞᱟᱹᱜᱤᱫ:</strong> ᱟᱹᱨᱤ ᱞᱮᱠᱟᱛᱮ ᱞᱟᱹᱠᱛᱤ ᱨᱮᱠᱚᱨᱰ ᱫᱚᱦᱚᱭ᱾</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ ᱟᱞᱮ ᱟᱢ ᱴᱷᱮᱱ ᱠᱷᱚᱱ ᱱᱟᱶᱟ ᱥᱚᱢᱢᱚᱛᱤ ᱵᱮᱜᱚᱨ ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱮᱴᱟᱜ ᱡᱟᱦᱟᱸ ᱡᱚᱥ ᱞᱟᱹᱜᱤᱫ ᱵᱮᱵᱷᱟᱨᱟ ᱟᱞᱮᱭᱟ᱾
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ᱰᱟᱴᱟ ᱫᱚᱦᱚ (Data Retention)</h2>
                  <p>ᱟᱞᱮ ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱥᱩᱢᱩᱝ ᱞᱟᱹᱠᱛᱤ ᱚᱠᱛᱚ ᱫᱷᱟᱹᱵᱤᱡ ᱫᱚᱦᱚᱭᱮᱫᱟᱭ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ᱰᱮᱢᱳ/ᱡᱚᱜᱟᱣ ᱠᱩᱠᱞᱤ:</strong> ᱡᱚᱢᱟ ᱚᱠᱛᱚ ᱠᱷᱚᱱ 2 ᱥᱮᱨᱢᱟ</li>
                    <li><strong className="text-white">ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱ ᱫᱚᱞᱤᱞ:</strong> ᱵᱮᱱᱟᱣ ᱚᱠᱛᱚ ᱠᱷᱚᱱ 1 ᱥᱮᱨᱢᱟ</li>
                    <li><strong className="text-white">ᱮᱱᱟᱞᱤᱴᱤᱠᱥ ᱠᱩᱠᱤ:</strong> 2 ᱥᱮᱨᱢᱟ ᱫᱷᱟᱹᱵᱤᱡ (ᱥᱮ ᱡᱟᱦᱟᱸ ᱫᱷᱟᱹᱵᱤᱡ ᱟᱢ ᱥᱚᱢᱢᱚᱛᱤ ᱨᱩᱣᱟᱹᱲ ᱵᱟᱢ ᱦᱟᱛᱟᱣᱮᱫᱟ)</li>
                  </ul>
                  <p className="mt-3">
                    ᱫᱚᱦᱚ ᱚᱠᱛᱚ ᱢᱩᱪᱟᱹᱫ ᱛᱟᱭᱚᱢ, ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱨᱟᱠᱷᱟ ᱛᱮ ᱚᱪᱚᱜ ᱥᱮ ᱵᱟᱝ ᱵᱟᱰᱟᱭ ᱠᱚᱜᱼᱟ᱾
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ᱰᱟᱴᱟ ᱯᱨᱤᱱᱥᱤᱯᱟᱞ ᱞᱮᱠᱟᱛᱮ ᱟᱢᱟᱜ ᱟᱹᱭᱫᱟᱹᱨ
                  </h2>
                  <p>DPDP ᱟᱹᱨᱤ 2023 ᱞᱟᱛᱟᱨ ᱨᱮ, ᱟᱢᱟᱜ ᱞᱟᱛᱟᱨ ᱨᱮ ᱚᱞ ᱟᱠᱟᱱ ᱟᱹᱭᱫᱟᱹᱨ ᱢᱮᱱᱟᱜᱼᱟ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ᱥᱮᱴᱮᱨ ᱟᱹᱭᱫᱟᱹᱨ:</strong> ᱟᱞᱮ ᱟᱢ ᱵᱟᱵᱚᱛ ᱯᱨᱚᱥᱮᱥ ᱟᱠᱟᱫ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱨᱮᱭᱟᱜ ᱥᱟᱨᱟᱝᱥ ᱠᱩᱠᱞᱤᱭᱟᱢ᱾</li>
                    <li><strong className="text-white">ᱥᱩᱫᱷᱨᱟᱹᱣ ᱟᱹᱭᱫᱟᱹᱨ:</strong> ᱵᱷᱩᱞ ᱥᱮ ᱵᱟᱝ ᱯᱩᱨᱟᱹ ᱰᱟᱴᱟ ᱥᱩᱫᱷᱨᱟᱹᱣ ᱞᱟᱹᱜᱤᱫ ᱠᱩᱠᱞᱤᱭᱟᱢ᱾</li>
                    <li><strong className="text-white">ᱚᱪᱚᱜ ᱟᱹᱭᱫᱟᱹᱨ:</strong> ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱚᱪᱚᱜ ᱞᱟᱹᱜᱤᱫ ᱠᱩᱠᱞᱤᱭᱟᱢ᱾</li>
                    <li><strong className="text-white">ᱥᱚᱢᱢᱚᱛᱤ ᱨᱩᱣᱟᱹᱲ ᱦᱟᱛᱟᱣ ᱟᱹᱭᱫᱟᱹᱨ:</strong> ᱡᱟᱦᱟᱸ ᱚᱠᱛᱚ ᱟᱢᱟᱜ ᱥᱚᱢᱢᱚᱛᱤ ᱨᱩᱣᱟᱹᱲ ᱦᱟᱛᱟᱣᱢ᱾</li>
                    <li><strong className="text-white">ᱚᱠᱥᱮᱯ ᱛᱮᱞᱟ ᱟᱹᱭᱫᱟᱹᱨ:</strong> ᱟᱞᱮᱭᱟᱜ ᱚᱠᱥᱮᱯ ᱚᱯᱷᱤᱥᱟᱨ ᱴᱷᱮᱱ ᱚᱠᱥᱮᱯ ᱮᱢᱢ᱾</li>
                    <li><strong className="text-white">ᱧᱩᱛᱩᱢ ᱮᱢ ᱟᱹᱭᱫᱟᱹᱨ:</strong> ᱜᱚᱡ ᱥᱮ ᱵᱟᱝ ᱫᱟᱲᱮᱭᱟᱜ ᱚᱵᱚᱥᱛᱟ ᱨᱮ ᱟᱢᱟᱜ ᱟᱹᱭᱫᱟᱹᱨ ᱵᱮᱵᱷᱟᱨ ᱞᱟᱹᱜᱤᱫ ᱮᱴᱟᱜ ᱦᱚᱲ ᱧᱩᱛᱩᱢ ᱮᱢᱢ᱾</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. ᱟᱢᱟᱜ ᱥᱚᱢᱢᱚᱛᱤ ᱪᱮᱫ ᱞᱮᱠᱟ ᱨᱩᱣᱟᱹᱲ ᱦᱟᱛᱟᱣᱢ?</h2>
                  <p>ᱟᱢ ᱡᱟᱦᱟᱸ ᱚᱠᱛᱚ ᱟᱢᱟᱜ ᱥᱚᱢᱢᱚᱛᱤ ᱨᱩᱣᱟᱹᱲ ᱦᱟᱛᱟᱣ ᱫᱟᱲᱮᱭᱟᱜᱼᱟᱢ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> ᱛᱮ "Withdraw Consent" ᱠᱷᱚᱵᱚᱨ ᱥᱟᱞᱟᱜ ᱤᱢᱮᱞ ᱠᱟᱛᱮ᱾</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> ᱨᱮ ᱟᱞᱮᱭᱟᱜ ᱚᱠᱥᱮᱯ ᱚᱯᱷᱤᱥᱟᱨ ᱴᱷᱮᱱ ᱚᱞ ᱠᱟᱛᱮ᱾</li>
                    <li>ᱟᱞᱮᱭᱟᱜ ᱣᱮᱵᱥᱟᱭᱤᱴ ᱨᱮ "ᱠᱩᱠᱤ ᱥᱮᱴᱤᱝᱥ" ᱵᱚᱴᱚᱱ ᱵᱮᱵᱷᱟᱨ ᱠᱟᱛᱮ᱾</li>
                  </ul>
                  <p className="mt-3">
                    ᱥᱚᱢᱢᱚᱛᱤ ᱨᱩᱣᱟᱹᱲ ᱦᱟᱛᱟᱣ ᱫᱚ ᱨᱩᱣᱟᱹᱲ ᱦᱟᱛᱟᱣ ᱞᱟᱦᱟ ᱥᱚᱢᱢᱚᱛᱤ ᱞᱮᱠᱟᱛᱮ ᱯᱨᱚᱥᱮᱥ ᱨᱮᱭᱟᱜ ᱟᱹᱨᱤ ᱵᱟᱹᱲᱤᱡ ᱵᱟᱝ ᱮᱥᱮᱨᱟᱭᱟ᱾ ᱟᱞᱮ <strong className="text-white">30 ᱢᱟᱦᱟ</strong> ᱞᱟᱛᱟᱨ ᱨᱮ ᱟᱢᱟᱜ ᱠᱩᱠᱞᱤ ᱯᱨᱚᱥᱮᱥ ᱞᱮᱫᱟᱭ᱾
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. ᱚᱠᱥᱮᱯ ᱚᱯᱷᱤᱥᱟᱨ (Grievance Officer)</h2>
                  <p>ᱡᱩᱫᱤ ᱟᱞᱮᱭᱟᱜ ᱰᱟᱴᱟ ᱯᱨᱚᱥᱮᱥ ᱵᱟᱵᱚᱛ ᱟᱢᱟᱜ ᱡᱟᱦᱟᱸ ᱪᱤᱱᱛᱟ ᱢᱮᱱᱟᱜᱼᱟ, ᱟᱢ ᱟᱞᱮᱭᱟᱜ ᱚᱠᱥᱮᱯ ᱚᱯᱷᱤᱥᱟᱨ ᱥᱟᱞᱟᱜ ᱡᱚᱯᱚᱲᱟᱣ ᱫᱟᱲᱮᱭᱟᱜᱼᱟᱢ:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">ᱧᱩᱛᱩᱢ:</strong> ᱥᱤᱞᱯᱤ ᱠᱩᱞᱥᱨᱮᱥᱴᱷᱟ</p>
                    <p className="mt-2"><strong className="text-white">ᱯᱚᱫᱚ:</strong> ᱚᱠᱥᱮᱯ ᱚᱯᱷᱤᱥᱟᱨ ᱟᱨ ᱛᱷᱟᱯᱚᱱᱤᱭᱟᱹ, ᱵᱤᱡᱱᱮᱥ ᱮᱠᱥᱤᱞᱮᱱᱥ ᱥᱴᱟᱨᱴᱮᱠᱥ LLP</p>
                    <p className="mt-2"><strong className="text-white">ᱤᱢᱮᱞ:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ᱯᱷᱚᱱ:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">ᱛᱮᱞᱟ ᱚᱠᱛᱚ:</strong> 48 ᱴᱟᱲᱟᱝ ᱞᱟᱛᱟᱨ ᱨᱮ ᱥᱣᱤᱠᱨᱤᱛᱤ; <strong>7 ᱠᱟᱹᱢᱤ ᱢᱟᱦᱟ</strong> ᱞᱟᱛᱟᱨ ᱨᱮ ᱥᱚᱢᱟᱫᱷᱟᱱ᱾</p>
                  </div>
                  <p className="mt-4">
                    ᱡᱩᱫᱤ ᱟᱢ ᱟᱞᱮᱭᱟᱜ ᱛᱮᱞᱟ ᱛᱮ ᱥᱚᱱᱛᱩᱥᱴᱚ ᱵᱟᱢ ᱠᱟᱱᱟ, ᱛᱚᱵᱮ ᱟᱢᱟᱜ <strong className="text-white">ᱵᱷᱟᱨᱚᱛᱤᱭᱚ ᱰᱟᱴᱟ ᱥᱩᱨᱚᱠᱠᱷᱟ ᱵᱚᱨᱰ</strong> ᱴᱷᱮᱱ ᱚᱠᱥᱮᱯ ᱮᱢ ᱨᱮᱭᱟᱜ ᱟᱹᱭᱫᱟᱹᱨ ᱢᱮᱱᱟᱜᱼᱟ᱾
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. ᱢᱟᱦᱟᱱ ᱱᱚᱴᱤᱥ
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• ᱥᱚᱢᱢᱚᱛᱤ ᱪᱮᱠᱵᱚᱠᱥ ᱪᱮᱠ ᱠᱟᱛᱮ, ᱟᱢ ᱟᱞᱮᱭᱟ ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱯᱨᱚᱥᱮᱥ ᱞᱟᱹᱜᱤᱫ <strong>ᱯᱷᱨᱤ, ᱵᱤᱥᱮᱥ, ᱵᱟᱰᱟᱭᱟᱱ, ᱵᱤᱱ ᱥᱚᱨᱛᱚ ᱟᱨ ᱥᱯᱚᱥᱴᱚ</strong> ᱥᱚᱢᱢᱚᱛᱤ ᱮᱢᱮᱫᱟᱢ᱾</li>
                      <li>• ᱟᱢ ᱥᱚᱢᱢᱚᱛᱤ ᱮᱢ ᱠᱷᱚᱱ ᱢᱟᱱᱟ ᱫᱟᱲᱮᱭᱟᱜᱼᱟᱢ, ᱥᱮ ᱛᱟᱭᱚᱢ ᱱᱚᱶᱟ ᱨᱩᱣᱟᱹᱲ ᱦᱟᱛᱟᱣ ᱫᱟᱲᱮᱭᱟᱜᱼᱟᱢ᱾ ᱛᱚᱵᱮ, ᱟᱢᱟᱜ ᱥᱚᱢᱢᱚᱛᱤ ᱵᱮᱜᱚᱨ ᱟᱞᱮ ᱛᱤᱱᱟᱹᱜ ᱥᱮᱣᱟ ᱮᱢ ᱵᱟᱞᱮ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ᱾</li>
                      <li>• ᱟᱞᱮ ᱢᱟᱨᱠᱮᱴᱤᱝ ᱡᱚᱥ ᱞᱟᱹᱜᱤᱫ ᱛᱮᱥᱟᱨ ᱯᱟᱦᱴᱟ ᱥᱟᱞᱟᱜ ᱟᱢᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱟᱴᱟ ᱟᱠᱷᱨᱤ, ᱵᱷᱟᱰᱟ ᱥᱮ ᱦᱟᱹᱴᱤᱧ ᱟᱞᱮᱭᱟ᱾</li>
                      <li>• ᱟᱢᱟᱜ ᱰᱟᱴᱟ ᱯᱟᱛᱤᱭᱟᱹᱨ ᱥᱮᱣᱟ ᱮᱢᱚᱜᱤᱡ ᱠᱚ (ᱡᱮᱞᱮᱠᱟ, ᱤᱢᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱨᱤᱥᱮᱱᱰ, ᱫᱚᱦᱚ ᱞᱟᱹᱜᱤᱫ ᱜᱩᱜᱚᱞ ᱥᱤᱴ) ᱥᱟᱞᱟᱜ ᱦᱟᱹᱴᱤᱧ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ᱾</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                SINDHI CONTENT
            ============================================== */}
            {language === "sd" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. تعارف (Introduction)</h2>
                  <p dir="rtl">
                    هي رضامندی نوٹس <strong className="text-white">بزنس ايڪسي لينس اسٽارٽ ايڪس ايل ايل پي</strong> ("اسان"، "اسان جو") طرفان جاري ڪيو ويو آهي، جيڪو <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> تي ليجل گليڪسي پليٽ فارم هلائي ٿو ۽ <strong className="text-white">ڊجيٽل پرسنل ڊيٽا پروٽيڪشن ايڪٽ، 2023</strong> ("DPDP Act") ۽ <strong className="text-white">DPDP ضابطن، 2025</strong> جي تعميل ڪري ٿو.
                  </p>
                  <p className="mt-3" dir="rtl">
                    هي نوٽس بيان ڪري ٿو ته اسان ڪهڙو ذاتي ڊيٽا گڏ ڪريون ٿا، ڇو گڏ ڪريون ٿا، اسان ان کي ڪيئن استعمال ڪريون ٿا، ۽ توهان پنهنجي رضامندي ڪيئن واپس وٺي سگهو ٿا. رضامندي جي چيڪ باڪس کي چيڪ ڪرڻ سان، توهان هيٺ بيان ڪيل مطابق پنهنجي ذاتي ڊيٽا جي پروسيسنگ لاءِ رضامندي ڏيو ٿا.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. اسان ڪهڙو ذاتي ڊيٽا گڏ ڪريون ٿا
                  </h2>
                  <p dir="rtl">جڏهن توهان اسان جي ويب سائيٽ تي فارم جمع ڪريو ٿا، اسان گڏ ڪري سگهون ٿا:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><strong className="text-white">سڃاڻپ ڊيٽا:</strong> پهريون نالو، آخري نالو</li>
                    <li><strong className="text-white">رابطي ڊيٽا:</strong> ڪم جو اي ميل پتو، فون نمبر</li>
                    <li><strong className="text-white">پيشيوراڻو ڊيٽا:</strong> ڪمپني جو نالو، نوڪري جو عنوان، ڪمپني جو سائز، صنعت</li>
                    <li><strong className="text-white">رابطي ڊيٽا:</strong> توهان جو پيغام، چيلينجز، يا سوال جي تفصيل</li>
                    <li><strong className="text-white">ٽيڪنيڪل ڊيٽا:</strong> آئي پي ايڊريس، برائوزر جو قسم، ڊيوائس جي معلومات، ۽ ڪوڪيز (صرف ان صورت ۾ جڏهن توهان اينالٽڪس ڪوڪيز قبول ڪريو ٿا)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-right border border-white/10 rounded-lg" dir="rtl">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ذاتي ڊيٽا</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">مخصوص مقصد</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>نالو</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">توهان جي سڃاڻپ ڪرڻ ۽ رابطي ۾ توهان کي صحيح طريقي سان مخاطب ڪرڻ لاءِ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>اي ميل پتو</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">توهان جي پڇاڙيءَ جو جواب ڏيڻ ۽ درخواست ڪيل دستاويز (جهڙوڪ ٺاهيل پاليسيون، DPDPA رپورٽون) موڪلڻ لاءِ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>فون نمبر</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">هنگامي تعميل سان لاڳاپيل رابطي يا صلاح جي شيڊول لاءِ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ڪمپني جو نالو ۽ عهدو</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">توهان جي تنظيمي گهرجن کي سمجهڻ ۽ تعميل ۾ مدد کي حسب ضرورت بڻائڻ لاءِ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>صنعت ۽ ڪمپني جو سائز</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">توهان جي تعميل پروگرام جي پختگي جو تجزيو ڪرڻ ۽ لاڳاپيل سفارشون مهيا ڪرڻ لاءِ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>پيغام</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">توهان جي مخصوص درخواست يا مسئلي کي سمجهڻ ۽ جواب ڏيڻ لاءِ.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. پروسيسنگ جو مقصد
                  </h2>
                  <p dir="rtl">اسان توهان جي ذاتي ڊيٽا کي هيٺين مخصوص مقصدن لاءِ پروسيس ڪريون ٿا:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><strong className="text-white">توهان جي پڇاڙين جا جواب ڏيڻ لاءِ:</strong> توهان جي ڊيمو درخواست يا رابطي فارم جمع ڪرڻ بابت توهان سان رابطو ڪرڻ.</li>
                    <li><strong className="text-white">درخواست ڪيل خدمتون مهيا ڪرڻ لاءِ:</strong> اي ميل ذريعي ٺاهيل دستاويز توهان کي موڪلڻ.</li>
                    <li><strong className="text-white">اسان جي خدمتن کي بهتر بڻائڻ لاءِ:</strong> اهو سمجهڻ ته صارفين اسان جي ويب سائيٽ سان ڪيئن رابطو ڪن ٿا (صرف اينالٽڪس رضامندي سان).</li>
                    <li><strong className="text-white">قانوني ذميواريون پوريون ڪرڻ لاءِ:</strong> قانون جي مطابق رڪارڊ رکڻ.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs" dir="rtl">
                    ⚠️ اسان توهان کان نئين رضامندي حاصل ڪرڻ کان سواءِ توهان جي ذاتي ڊيٽا کي ڪنهن ٻئي مقصد لاءِ استعمال نه ڪنداسين.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ڊيٽا جي برقراري (Data Retention)</h2>
                  <p dir="rtl">اسان توهان جي ذاتي ڊيٽا کي صرف ضروري وقت تائين رکون ٿا:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><strong className="text-white">ڊيمو/رابطي جون درخواستون:</strong> جمع ڪرڻ جي تاريخ کان 2 سال</li>
                    <li><strong className="text-white">ٺاهيل دستاويز:</strong> تياري جي تاريخ کان 1 سال</li>
                    <li><strong className="text-white">اينالٽڪس ڪوڪيز:</strong> 2 سالن تائين (يا جيستائين توهان رضامندي واپس نه وٺو)</li>
                  </ul>
                  <p className="mt-3" dir="rtl">
                    برقراري جي مدت ختم ٿيڻ کان پوءِ، توهان جي ذاتي ڊيٽا کي محفوظ طريقي سان ختم يا گمنام ڪيو ويندو.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ڊيٽا پرنسپل جي حيثيت سان توهان جا حق
                  </h2>
                  <p dir="rtl">DPDP ايڪٽ 2023 تحت، توهان کي هيٺين حقن حاصل آهن:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><strong className="text-white">رسائي جو حق:</strong> اسان جي طرفان پروسيس ڪيل ذاتي ڊيٽا جو خلاصو طلب ڪريو.</li>
                    <li><strong className="text-white">اصلاح جو حق:</strong> غلط يا اڻپوري ڊيٽا ۾ اصلاح جي درخواست ڪريو.</li>
                    <li><strong className="text-white">ڊاهڻ جو حق:</strong> پنهنجي ذاتي ڊيٽا کي ڊاهڻ جي درخواست ڪريو.</li>
                    <li><strong className="text-white">رضامندي واپس وٺڻ جو حق:</strong> ڪنهن به وقت پنهنجي رضامندي واپس وٺو.</li>
                    <li><strong className="text-white">شڪايت جي ازالي جو حق:</strong> اسان جي شڪايت آفيسر وٽ شڪايت داخل ڪريو.</li>
                    <li><strong className="text-white">نامزدگي جو حق:</strong> موت يا معذوري جي صورت ۾ پنهنجن حقن کي استعمال ڪرڻ لاءِ ڪنهن ٻئي فرد کي نامزد ڪريو.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. پنهنجي رضامندي ڪيئن واپس وٺجي؟</h2>
                  <p dir="rtl">توهان ڪنهن به وقت پنهنجي رضامندي واپس وٺي سگهو ٿا:</p>
                  <ul className="list-disc pr-6 mt-3 space-y-2" dir="rtl">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> تي "Withdraw Consent" جي موضوع سان اي ميل ڪري.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> تي اسان جي شڪايت آفيسر کي لکي.</li>
                    <li>اسان جي ويب سائيٽ تي "ڪوڪي سيٽنگون" بٽڻ استعمال ڪري.</li>
                  </ul>
                  <p className="mt-3" dir="rtl">
                    رضامندي واپس وٺڻ سان واپس وٺڻ کان اڳ رضامندي جي بنياد تي پروسيسنگ جي قانوني حيثيت متاثر نه ٿيندي. اسان <strong className="text-white">30 ڏينهن</strong> اندر توهان جي درخواست تي ڪارروائي ڪنداسين.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. شڪايت آفيسر (Grievance Officer)</h2>
                  <p dir="rtl">جيڪڏهن توهان کي اسان جي ڊيٽا پروسيسنگ بابت ڪا به ڳڻتي آهي، ته توهان اسان جي شڪايت آفيسر سان رابطو ڪري سگهو ٿا:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4" dir="rtl">
                    <p><strong className="text-white">نالو:</strong> شلپي ڪلشرشٺا</p>
                    <p className="mt-2"><strong className="text-white">عهدو:</strong> شڪايت آفيسر ۽ باني، بزنس ايڪسي لينس اسٽارٽ ايڪس ايل ايل پي</p>
                    <p className="mt-2"><strong className="text-white">اي ميل:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">فون:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">جواب جو وقت:</strong> 48 ڪلاڪن ۾ رسيد; <strong>7 ڪاروباري ڏينهن</strong> ۾ حل.</p>
                  </div>
                  <p className="mt-4" dir="rtl">
                    جيڪڏهن توهان اسان جي جواب کان مطمئن نه آهيو، ته توهان کي <strong className="text-white">ڀارتي ڊيٽا پروٽيڪشن بورڊ</strong> وٽ شڪايت داخل ڪرڻ جو حق آهي.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. اهم نوٽيس
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5" dir="rtl">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• رضامندي جي چيڪ باڪس کي چيڪ ڪرڻ سان، توهان اسان کي پنهنجي ذاتي ڊيٽا جي پروسيسنگ لاءِ <strong>آزاد، مخصوص، ڄاڻو، اڻ شرطي ۽ اڻ مبهم</strong> رضامندي ڏيو ٿا.</li>
                      <li>• توهان رضامندي ڏيڻ کان انڪار ڪري سگهو ٿا، يا بعد ۾ ان کي واپس وٺي سگهو ٿا. تنهن هوندي به، اسان توهان جي رضامندي کان سواءِ ڪجهه خدمتون مهيا نه ڪري سگهنداسين.</li>
                      <li>• اسان مارڪيٽنگ جي مقصدن لاءِ ٽئين پارٽين سان توهان جي ذاتي ڊيٽا کي وڪڻ، ڀاڙي يا شيئر نه ڪنداسين.</li>
                      <li>• توهان جي ڊيٽا کي قابل اعتماد سروس فراهم ڪندڙن (جهڙوڪ، اي ميل لاءِ ريسينڊ، اسٽوريج لاءِ گوگل شيٽس) سان شيئر ڪيو وڃي سگهي ٿو.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                NEPALI CONTENT
            ============================================== */}
            {language === "ne" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. परिचय (Introduction)</h2>
                  <p>
                    यो सहमति सूचना <strong className="text-white">बिजनेस एक्सीलेन्स स्टार्टएक्स LLP</strong> ("हामी", "हाम्रो") द्वारा जारी गरिएको हो, जुन <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> मा लीगल ग्यालेक्सी प्लेटफर्म सञ्चालन गर्दछ र <strong className="text-white">डिजिटल पर्सनल डेटा प्रोटेक्शन ऐन, 2023</strong> ("DPDP Act") र <strong className="text-white">DPDP नियम, 2025</strong> को पालना गर्दछ।
                  </p>
                  <p className="mt-3">
                    यो सूचनाले हामी कुन व्यक्तिगत डेटा सङ्कलन गर्छौं, किन सङ्कलन गर्छौं, हामी यसलाई कसरी प्रयोग गर्छौं, र तपाईंले आफ्नो सहमति कसरी फिर्ता लिन सक्नुहुन्छ भनेर व्याख्या गर्दछ। सहमति चेकबक्स जाँच गरेर, तपाईं तल वर्णन गरिए अनुसार आफ्नो व्यक्तिगत डेटाको प्रशोधनको लागि सहमति दिनुहुन्छ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. हामी कुन व्यक्तिगत डेटा सङ्कलन गर्छौं
                  </h2>
                  <p>जब तपाईं हाम्रो वेबसाइटमा फारम पेश गर्नुहुन्छ, हामी सङ्कलन गर्न सक्छौं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पहिचान डेटा:</strong> पहिलो नाम, अन्तिम नाम</li>
                    <li><strong className="text-white">सम्पर्क डेटा:</strong> काम इमेल ठेगाना, फोन नम्बर</li>
                    <li><strong className="text-white">व्यावसायिक डेटा:</strong> कम्पनीको नाम, जागिर शीर्षक, कम्पनीको आकार, उद्योग</li>
                    <li><strong className="text-white">सञ्चार डेटा:</strong> तपाईंको सन्देश, चुनौतीहरू, वा प्रश्न विवरण</li>
                    <li><strong className="text-white">प्राविधिक डेटा:</strong> IP ठेगाना, ब्राउजर प्रकार, उपकरण जानकारी, र कुकीहरू (केवल यदि तपाईंले एनालिटिक्स कुकीहरू स्वीकार गर्नुहुन्छ)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">व्यक्तिगत डेटा</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">विशिष्ट उद्देश्य</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>नाम</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तपाईंलाई पहिचान गर्न र सञ्चारमा तपाईंलाई सही रूपमा सम्बोधन गर्न।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>इमेल ठेगाना</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तपाईंको जिज्ञासाको जवाफ दिन र अनुरोध गरिएका कागजातहरू (जस्तै उत्पन्न नीतिहरू, DPDPA रिपोर्टहरू) पठाउन।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>फोन नम्बर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आपतकालीन अनुपालन-सम्बन्धी सञ्चार वा परामर्श तालिका बनाउन।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>कम्पनीको नाम र पद</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तपाईंको संगठनात्मक आवश्यकताहरू बुझ्न र अनुपालन सहायता अनुकूलन गर्न।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>उद्योग र कम्पनीको आकार</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तपाईंको अनुपालन कार्यक्रमको परिपक्वता विश्लेषण गर्न र सान्दर्भिक सिफारिसहरू प्रदान गर्न।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>सन्देश</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तपाईंको विशिष्ट अनुरोध वा समस्या बुझ्न र प्रतिक्रिया दिन।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. प्रशोधनको उद्देश्य
                  </h2>
                  <p>हामी तपाईंको व्यक्तिगत डेटा निम्न विशिष्ट उद्देश्यहरूको लागि प्रशोधन गर्छौं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">तपाईंको जिज्ञासाहरूको जवाफ दिन:</strong> तपाईंको डेमो अनुरोध वा सम्पर्क फारम पेश गर्ने बारे तपाईंलाई सम्पर्क गर्ने।</li>
                    <li><strong className="text-white">अनुरोध गरिएका सेवाहरू प्रदान गर्न:</strong> इमेल मार्फत उत्पन्न कागजातहरू तपाईंलाई पठाउने।</li>
                    <li><strong className="text-white">हाम्रा सेवाहरू सुधार्न:</strong> प्रयोगकर्ताहरूले हाम्रो वेबसाइटसँग कसरी अन्तरक्रिया गर्छन् भनेर बुझ्ने (केवल एनालिटिक्स सहमतिसँग)।</li>
                    <li><strong className="text-white">कानूनी दायित्वहरूको पालना गर्न:</strong> कानूनद्वारा आवश्यक रेकर्डहरू राख्ने।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ हामी तपाईंबाट नयाँ सहमति नलिई तपाईंको व्यक्तिगत डेटा अन्य कुनै उद्देश्यको लागि प्रयोग गर्ने छैनौं।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. डेटा प्रतिधारण (Data Retention)</h2>
                  <p>हामी तपाईंको व्यक्तिगत डेटा आवश्यक समयसम्म मात्र राख्छौं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">डेमो/सम्पर्क अनुरोधहरू:</strong> पेश गरिएको मितिबाट 2 वर्ष</li>
                    <li><strong className="text-white">उत्पन्न कागजातहरू:</strong> उत्पादन मितिबाट 1 वर्ष</li>
                    <li><strong className="text-white">एनालिटिक्स कुकीहरू:</strong> 2 वर्षसम्म (वा तपाईंले सहमति फिर्ता नलिएसम्म)</li>
                  </ul>
                  <p className="mt-3">
                    प्रतिधारण अवधि समाप्त भएपछि, तपाईंको व्यक्तिगत डेटा सुरक्षित रूपमा मेटाइने वा अनाम गरिनेछ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. डेटा प्रिन्सिपलको रूपमा तपाईंका अधिकारहरू
                  </h2>
                  <p>DPDP ऐन 2023 अन्तर्गत, तपाईंसँग निम्न अधिकारहरू छन्:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पहुँचको अधिकार:</strong> हामीले तपाईंको बारेमा प्रशोधन गरेको व्यक्तिगत डेटाको सारांश अनुरोध गर्नुहोस्।</li>
                    <li><strong className="text-white">सुधारको अधिकार:</strong> गलत वा अपूर्ण डेटामा सुधारको अनुरोध गर्नुहोस्।</li>
                    <li><strong className="text-white">मेटाउने अधिकार:</strong> आफ्नो व्यक्तिगत डेटा मेटाउन अनुरोध गर्नुहोस्।</li>
                    <li><strong className="text-white">सहमति फिर्ता लिने अधिकार:</strong> कुनै पनि समय आफ्नो सहमति फिर्ता लिनुहोस्।</li>
                    <li><strong className="text-white">उजुरी निवारणको अधिकार:</strong> हाम्रो उजुरी अधिकृतलाई उजुरी दर्ता गर्नुहोस्।</li>
                    <li><strong className="text-white">नामांकनको अधिकार:</strong> मृत्यु वा अक्षमताको अवस्थामा आफ्ना अधिकारहरू प्रयोग गर्न अर्को व्यक्तिलाई नामांकन गर्नुहोस्।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. आफ्नो सहमति कसरी फिर्ता लिने?</h2>
                  <p>तपाईं कुनै पनि समय आफ्नो सहमति फिर्ता लिन सक्नुहुन्छ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> मा "Withdraw Consent" विषयको साथ इमेल गरेर।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> मा हाम्रो उजुरी अधिकृतलाई लेखेर।</li>
                    <li>हाम्रो वेबसाइटमा "कुकी सेटिङहरू" बटन प्रयोग गरेर।</li>
                  </ul>
                  <p className="mt-3">
                    सहमति फिर्ता लिनुले फिर्ता लिनु अघि सहमतिमा आधारित प्रशोधनको वैधतालाई असर गर्दैन। हामी <strong className="text-white">30 दिनभित्र</strong> तपाईंको अनुरोधमा कारबाही गर्नेछौं।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. उजुरी अधिकृत (Grievance Officer)</h2>
                  <p>यदि हाम्रो डेटा प्रशोधनको बारेमा तपाईंलाई कुनै चिन्ता छ भने, तपाईं हाम्रो उजुरी अधिकृतसँग सम्पर्क गर्न सक्नुहुन्छ:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">नाम:</strong> शिल्पी कुलश्रेष्ठ</p>
                    <p className="mt-2"><strong className="text-white">पद:</strong> उजुरी अधिकृत र संस्थापक, बिजनेस एक्सीलेन्स स्टार्टएक्स LLP</p>
                    <p className="mt-2"><strong className="text-white">इमेल:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">फोन:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">प्रतिक्रिया समय:</strong> 48 घण्टामा प्राप्ति; <strong>7 कार्य दिनभित्र</strong> समाधान।</p>
                  </div>
                  <p className="mt-4">
                    यदि तपाईं हाम्रो प्रतिक्रियाबाट सन्तुष्ट हुनुहुन्न भने, तपाईंसँग <strong className="text-white">भारतीय डेटा संरक्षण बोर्ड</strong> मा उजुरी दर्ता गर्ने अधिकार छ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. महत्त्वपूर्ण सूचना
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• सहमति चेकबक्स जाँच गरेर, तपाईं हामीलाई आफ्नो व्यक्तिगत डेटा प्रशोधन गर्न <strong>स्वतन्त्र, विशिष्ट, सूचित, बिना सर्त र स्पष्ट</strong> सहमति दिनुहुन्छ।</li>
                      <li>• तपाईं सहमति दिन इन्कार गर्न सक्नुहुन्छ, वा पछि यसलाई फिर्ता लिन सक्नुहुन्छ। यद्यपि, हामी तपाईंको सहमति बिना केही सेवाहरू प्रदान गर्न सक्दैनौं।</li>
                      <li>• हामी मार्केटिङ उद्देश्यका लागि तेस्रो पक्षहरूसँग तपाईंको व्यक्तिगत डेटा बेच्ने, भाडामा दिने वा साझा गर्ने छैनौं।</li>
                      <li>• तपाईंको डेटा विश्वसनीय सेवा प्रदाताहरूसँग (जस्तै, इमेलको लागि रिसेन्ड, भण्डारणको लागि गुगल शीटहरू) साझा गर्न सकिन्छ।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                BODO CONTENT
            ============================================== */}
            {language === "brx" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. परिचय (Introduction)</h2>
                  <p>
                    बेबार सहमति सूचना <strong className="text-white">बिजनेस एक्सीलेंस स्टार्टएक्स LLP</strong> ("जों", "जोंनि") द्वारा जारी खालामदों, जाय <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> आव लिगेल ग्यालेक्सी प्लेटफर्म चलायो आरो <strong className="text-white">डिजिटल पर्सनल डेटा प्रोटेक्शन आइन, 2023</strong> ("DPDP Act") आरो <strong className="text-white">DPDP नियम, 2025</strong> मानिथार।
                  </p>
                  <p className="mt-3">
                    बेबार सूचनाया बाथरा होयो जे जों मा मानसि डेटा दाज्लामो, मानो दाज्लामो, जों बेखौ माबोरै बाहायो आरो नों माबोरै नोंनि सहमति फिन लानो हायो। सहमति चेकबक्स चेक खालामनानै, नों गाहायाव बुंखांनाय बादि नोंनि मानसि डेटा प्रोसेसिंगनि थाखाय सहमति होयो।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. जों मा मानसि डेटा दाज्लामो
                  </h2>
                  <p>जखन नों जोंनि वेबसाइटआव फर्म जमा खालामो, जों दाज्लानो हागौ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">परिचय डेटा:</strong> गिबि मुं, जोबथा मुं</li>
                    <li><strong className="text-white">जगाजग डेटा:</strong> खामानि इमेल थिखाना, फन नम्बर</li>
                    <li><strong className="text-white">खामानि डेटा:</strong> कम्पानि मुं, चाकिरि मुं, कम्पानि महर, इन्डस्ट्रि</li>
                    <li><strong className="text-white">जगाजग डेटा:</strong> नोंनि खौरां, जेंना, एबा सोंथि बिबरन</li>
                    <li><strong className="text-white">टेक्निकेल डेटा:</strong> IP थिखाना, ब्राउजार महर, डिभाइस खौरां, आरो कुकि (जेब्लाबो नों एनालिटिक्स कुकि लानो)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">मानसि डेटा</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">बिसेस थार</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>मुं</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">नोंखौ मिथिनो आरो जगाजगआव नोंखौ थार खालामनो।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>इमेल थिखाना</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">नोंनि सोंथिनि फिन जाबाब होनो आरो बिजिरनाय बिलाइ (जेब्लाबो बानायनाय नीति, DPDPA रिपर्ट) हरखानो।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>फन नम्बर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">गोख्रों अनुपालन-सोमोन्दै जगाजग एबा परामर्श समाव थाखानो।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>कम्पानि मुं आरो पद</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">नोंनि सङ्गठननि गोनांथि बुजिनो आरो अनुपालन हेल्प कस्टमाइज खालामनो।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>इन्डस्ट्रि आरो कम्पानि महर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">नोंनि अनुपालन खामानिनि गोदान बिजिरनो आरो सोमोन्दो गोनां सुफारिस होनो।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>खौरां</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">नोंनि बिसेस खौरां एबा जेंनाखौ बुजिनो आरो फिन जाबाब होनो।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. प्रोसेसिंगनि थार
                  </h2>
                  <p>जों गाहायनि बिसेस थारनि थाखाय नोंनि मानसि डेटा प्रोसेस खालामो:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">नोंनि सोंथिनि फिन जाबाब होनो:</strong> नोंनि डेमो खौरां एबा जगाजग फर्म जमा खालामनायनि सोमोन्दै नोंजों जगाजग खालामनो।</li>
                    <li><strong className="text-white">बिजिरनाय सेवा होनो:</strong> इमेल हादोरै बानायनाय बिलाइ नोंखौ हरखानो।</li>
                    <li><strong className="text-white">जोंनि सेवा सुधार खालामनो:</strong> बाहायग्रा सुबुंफोर जोंनि वेबसाइटजों माबोरै जगाजग खालामो बुजिनो (जेब्लाबो एनालिटिक्स सहमतिजों)।</li>
                    <li><strong className="text-white">आइननि गोनांथि मानिनो:</strong> आइन बादि रेकर्ड राखनो।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ जों नोंनिफ्राय गोदान सहमति लानानै नोंनि मानसि डेटाखौ एबा माबा थारनि थाखाय बाहायोनो।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. डेटा दोहोर (Data Retention)</h2>
                  <p>जों नोंनि मानसि डेटाखौ जेब्लाबो गोनां समाव दोहोरो:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">डेमो/जगाजग खौरां:</strong> जमा खालामनाय साननिफ्राय 2 बोसोर</li>
                    <li><strong className="text-white">बानायनाय बिलाइ:</strong> बानायनाय साननिफ्राय 1 बोसोर</li>
                    <li><strong className="text-white">एनालिटिक्स कुकि:</strong> 2 बोसोरसम (एबा नों सहमति फिन लानोसोम)</li>
                  </ul>
                  <p className="mt-3">
                    दोहोरनि समाव जोबथा खालामनायनि उनाव, नोंनि मानसि डेटा रक्खा हादोरै मुखायनाय एबा मुं थानाय जागोन।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. डेटा प्रिन्सिपल हिसाबै नोंनि अधिकार
                  </h2>
                  <p>DPDP आइन 2023 नि सायाव, नोंनि गाहायनि अधिकार दं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">हाबनानो अधिकार:</strong> जों नोंनि सोमोन्दै प्रोसेस खालामनाय मानसि डेटानि सारांश सोंनो।</li>
                    <li><strong className="text-white">सुधार खालामनो अधिकार:</strong> गोरोन एबा जोबथा मानसि डेटा सुधार खालामनो सोंनो।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. नोंनि सहमति माबोरै फिन लानो?</h2>
                  <p>नों जेब्लाबो नोंनि सहमति फिन लानो हागौ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> आव "Withdraw Consent" बुंनानै इमेल खालामनानै।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> आव जोंनि खौरां अफिसारखौ लिरनानै।</li>
                  </ul>
                  <p className="mt-3">
                    सहमति फिन लानाया सहमति फिन लानोसोम सहमतिनि सायाव प्रोसेसिंगनि आइनगोनांथिखौ असर खालामोनो। जों <strong className="text-white">30 साननि</strong> उनाव नोंनि खौरांआव खामानि लानो।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. खौरां अफिसार (Grievance Officer)</h2>
                  <p>जुदि जोंनि डेटा प्रोसेसिंगनि सोमोन्दै नोंनि माबा चिन्ता दं, नों जोंनि खौरां अफिसारजों जगाजग खालामनो हागौ:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">मुं:</strong> शिल्पी कुलश्रेष्ठ</p>
                    <p className="mt-2"><strong className="text-white">पद:</strong> खौरां अफिसार आरो स्थापक, बिजनेस एक्सीलेंस स्टार्टएक्स LLP</p>
                    <p className="mt-2"><strong className="text-white">इमेल:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">फन:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">फिन जाबाब सम:</strong> 48 घन्टायाव मोनथाय; <strong>7 खामानि साननि</strong> उनाव समाधान।</p>
                  </div>
                  <p className="mt-4">
                    जुदि नों जोंनि फिन जाबाबजों सन्तुष्ट जाया, नोंनि <strong className="text-white">भारतीय डेटा सुरक्षा बोर्ड</strong> आव खौरां होनो अधिकार दं।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. गोनां सूचना
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• सहमति चेकबक्स चेक खालामनानै, नों जोंखौ नोंनि मानसि डेटा प्रोसेस खालामनो <strong>मुक्त, बिसेस, खौरांगिरि, सर्त हिगिरि आरो स्पष्ट</strong> सहमति होयो।</li>
                      <li>• नों सहमति होनो मोनाया, एबा उनाव बेखौ फिन लानो हागौ। जेखौबो, जों नोंनि सहमति हिगिरि मोनसेबो सेवा होनो हायोनो।</li>
                      <li>• जों मार्केटिंग थारनि थाखाय थामफोरजों नोंनि मानसि डेटा फानो, भाड़ा होनो एबा शेयर खालामोनो।</li>
                      <li>• नोंनि डेटा गोनां सेवा होग्रा (जेब्लाबो, इमेलनि थाखाय रिसेन्ड, स्टोरेजनि थाखाय गुगल शीट) जों शेयर खालामनो हागौ।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                DOGRI CONTENT
            ============================================== */}
            {language === "doi" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. परिचय (Introduction)</h2>
                  <p>
                    एह् सहमति सूचना <strong className="text-white">बिजनेस एक्सीलेंस स्टार्टएक्स LLP</strong> ("असीं", "साढ़ा") द्वारा जारी कीती गेदी ऐ, जेह्ड़ा <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> उप्पर लीगल गैलेक्सी प्लेटफॉर्म चलांदा ऐ ते <strong className="text-white">डिजिटल पर्सनल डेटा प्रोटेक्शन ऐक्ट, 2023</strong> ("DPDP Act") ते <strong className="text-white">DPDP नियम, 2025</strong> दा पालन करदा ऐ।
                  </p>
                  <p className="mt-3">
                    एह् सूचना दस्सदी ऐ कि असीं कीह् निजी डेटा इकट्ठा करदे आं, कीओं इकट्ठा करदे आं, असीं इसदा किस्सै इस्तेमाल करदे आं, ते तुस अपनी सहमति किस्सै वापस लैई सकदे ओ। सहमति चेकबॉक्स चेक करियै, तुस थल्लह् दित्ते दे मताबक अपने निजी डेटे दी प्रोसेसिंग लेई सहमति देई कन्ने ओ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. असीं कीह् निजी डेटा इकट्ठा करदे आं
                  </h2>
                  <p>जदूं तुस साढ़ी वेबसाइट उप्पर फॉर्म जमा करदे ओ, असीं इकट्ठा करी सकदे आं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पछाण डेटा:</strong> पैह्ला नां, आखरी नां</li>
                    <li><strong className="text-white">संपर्क डेटा:</strong> कम्मां दा ईमेल पता, फोन नंबर</li>
                    <li><strong className="text-white">पेशेवर डेटा:</strong> कंपनी दा नां, नौकरी दा टाइटल, कंपनी दा आकार, उद्योग</li>
                    <li><strong className="text-white">संचार डेटा:</strong> तुंदा संदेश, चुनौतियां, जां सवाल दा ब्यौरा</li>
                    <li><strong className="text-white">तकनीकी डेटा:</strong> आईपी पता, ब्राउज़र किस्म, डिवाइस जानकारी, ते कुकीज़ (सिर्फ तदूं जदूं तुस एनालिटिक्स कुकीज़ कबूल करदे ओ)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">निजी डेटा</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">खास मकसद</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>नां</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुसां गी पछाण करने ते संचार च तुसां गी सही ढंगै सं बुलाने लेई।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ईमेल पता</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुंदे सवाल दा जवाब देने ते मंगे गेदे दस्तावेज (जि'यां बनाए गेदे नीति, DPDPA रिपोर्ट) भेजने लेई।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>फोन नंबर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">जरूरी अनुपालन-संबंधी संचार जां सलाह दा समां तै करने लेई।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>कंपनी दा नां ते ओहदा</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुंदी संगठनात्मक लोड़ियां गी समझने ते अनुपालन सहायता गी कस्टमाइज़ करने लेई।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>उद्योग ते कंपनी दा आकार</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुंदे अनुपालन कार्यक्रम दी परिपक्वता दा विश्लेषण करने ते संबंधित सिफारिशां देना लेई।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>संदेश</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुंदी खास बिनती जां समस्या गी समझने ते जवाब देने लेई।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. प्रोसेसिंग दा मकसद
                  </h2>
                  <p>असीं थल्लह् दित्ते गेदे खास मकसदां लेई तुंदा निजी डेटा प्रोसेस करदे आं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">तुंदे सवालां दा जवाब देने लेई:</strong> तुंदी डेमो बिनती जां संपर्क फॉर्म जमा करने दे बारे च तुंदे कन्नै संपर्क करना।</li>
                    <li><strong className="text-white">मंगी गेदियां सेवां देना लेई:</strong> ईमेल राहीं बनाए गेदे दस्तावेज तुसां गी भेजने।</li>
                    <li><strong className="text-white">साढ़ी सेवां गी बेहतर करने लेई:</strong> एह् समझना कि बरतूनकर्ता साढ़ी वेबसाइट कन्नै किस्सै इंटरैक्ट करदे न। (सिर्फ एनालिटिक्स सहमति कन्नै)।</li>
                    <li><strong className="text-white">कानूनी जिम्मेवारियां दा पालन करने लेई:</strong> कानून दे मताबक रिकॉर्ड रखना।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ असीं तुंदी नमीं सहमति लैने बगैर तुंदा निजी डेटा कुसै होर मकसद लेई इस्तेमाल नेईं करगे।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. डेटा रखना (Data Retention)</h2>
                  <p>असीं तुंदा निजी डेटा सिर्फ लोड़ींदे समां तगर रखदे आं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">डेमो/संपर्क बिनतियां:</strong> जमा करने दी तारीख तों 2 साल</li>
                    <li><strong className="text-white">बनाए गेदे दस्तावेज:</strong> बनाने दी तारीख तों 1 साल</li>
                    <li><strong className="text-white">एनालिटिक्स कुकीज़:</strong> 2 साल तगर (जां जदूं तगर तुस सहमति वापस नेईं लैंदे)</li>
                  </ul>
                  <p className="mt-3">
                    रखने दी म्याद खत्म होने दे बाद, तुंदा निजी डेटा सुरक्षित ढंगै कन्नै मिटाया जाग या अनाम करी दित्ता जाग।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. डेटा प्रिंसिपल दे तौर पर तुंदे हक्क
                  </h2>
                  <p>DPDP ऐक्ट 2023 दे तहत, तुसां गी थल्लह् दित्ते हक्क होंदे न:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पहुंच दा हक्क:</strong> असीं तुंदे बारे च जेह्ड़ा निजी डेटा प्रोसेस करदे आं, ओह्दा सार मंगो।</li>
                    <li><strong className="text-white">सुधार दा हक्क:</strong> गलत जां अधूरे डेटा च सुधार दी बिनती करो।</li>
                    <li><strong className="text-white">मिटाने दा हक्क:</strong> अपने निजी डेटा गी मिटाने दी बिनती करो।</li>
                    <li><strong className="text-white">सहमति वापस लैने दा हक्क:</strong> कुसै बी समें अपनी सहमति वापस लैओ।</li>
                    <li><strong className="text-white">शिकायत निवारण दा हक्क:</strong> साढ़े शिकायत अधिकारी कन्नै शिकायत दर्ज करो।</li>
                    <li><strong className="text-white">नामांकन दा हक्क:</strong> मौत जां अक्षमता दी हालत च अपने हक्कां दा इस्तेमाल करने लेई कुसै होर बंदे गी नामित करो।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. अपनी सहमति किस्सै वापस लैनी ऐ?</h2>
                  <p>तुस कुसै बी समें अपनी सहमति वापस लैई सकदे ओ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> उप्पर "Withdraw Consent" विषय कन्नै ईमेल करियै।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> उप्पर साढ़े शिकायत अधिकारी गी लिखियै।</li>
                    <li>साढ़ी वेबसाइट उप्पर "कुकी सेटिंग्स" बटन दा इस्तेमाल करियै।</li>
                  </ul>
                  <p className="mt-3">
                    सहमति वापस लैने कन्नै वापस लैने तों पैह्लें सहमति दे आधार उप्पर प्रोसेसिंग दी वैधता उप्पर असर नेईं पौग। असीं <strong className="text-white">30 दिनें</strong> दे अंदर तुंदी बिनती उप्पर कार्रवाई करगे।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. शिकायत अधिकारी (Grievance Officer)</h2>
                  <p>जेकर तुसां गी साढ़ी डेटा प्रोसेसिंग दे बारे च कोई चिंता ऐ, तुस साढ़े शिकायत अधिकारी कन्नै संपर्क करी सकदे ओ:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">नां:</strong> शिल्पी कुलश्रेष्ठ</p>
                    <p className="mt-2"><strong className="text-white">ओहदा:</strong> शिकायत अधिकारी ते संस्थापक, बिजनेस एक्सीलेंस स्टार्टएक्स LLP</p>
                    <p className="mt-2"><strong className="text-white">ईमेल:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">फोन:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">जवाब दा समां:</strong> 48 घैंटें च प्राप्ति; <strong>7 कम्मकाजी दिनें</strong> च हल।</p>
                  </div>
                  <p className="mt-4">
                    जेकर तुस साढ़े जवाब कन्नै संतुष्ट नेईं ओ, तुसां गी <strong className="text-white">भारतीय डेटा सुरक्षा बोर्ड</strong> कन्नै शिकायत दर्ज करने दा हक्क ऐ।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. जरूरी सूचना
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• सहमति चेकबॉक्स चेक करियै, तुस असां गी अपने निजी डेटा दी प्रोसेसिंग लेई <strong>मुफ्त, खास, जानकारी भरी, बिना शर्त ते स्पष्ट</strong> सहमति देई कन्ने ओ।</li>
                      <li>• तुस सहमति देने तों इनकार करी सकदे ओ, जां बाद च इसी वापस लैई सकदे ओ। पर, असीं तुंदी सहमति दे बगैर किश सेवां देई नेईं सकदे।</li>
                      <li>• असीं मार्केटिंग मकसदां लेई तीजे पक्ष कन्नै तुंदा निजी डेटा बेचने, किराए उप्पर देने जां साझा नेईं करगे।</li>
                      <li>• तुंदा डेटा भरोसेमंद सेवा देवालियां कन्नै (जि'यां, ईमेल लेई रीसेंड, स्टोरेज लेई गूगल शीट्स) साझा कीता जाई सकदा ऐ।</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                KONKANI CONTENT
            ============================================== */}
            {language === "kok" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. प्रस्तावना (Introduction)</h2>
                  <p>
                    ही संमती सूचना <strong className="text-white">बिझनेस एक्सलन्स स्टार्टएक्स एलएलपी</strong> ("आमी", "आमचें") हाणून जारी केल्या, जी <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> वयर लीगल गॅलेक्सी प्लॅटफॉर्म चलयता आनी <strong className="text-white">डिजिटल पर्सनल डेटा प्रोटेक्शन अॅक्ट, 2023</strong> ("DPDP Act") आनी <strong className="text-white">DPDP नियम, 2025</strong> पाळटा.
                  </p>
                  <p className="mt-3">
                    ही सूचना सांगता की आमी खंयचो वैयक्तीक डेटा एकठांय करतात, खंयच्या खातीर करतात, आमी ताचो कसो वापर करतात, आनी तुमी तुमची संमती कशी परत घेवंक शकतात. संमती चेकबॉक्स चेक करून, तुमी सकयल सांगल्या प्रमाणे तुमच्या वैयक्तीक डेटाच्या प्रक्रियेक संमती दितात.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. आमी खंयचो वैयक्तीक डेटा एकठांय करतात
                  </h2>
                  <p>जेन्ना तुमी आमच्या वेबसायटीचेर फॉर्म सबमिट करतात, तेन्ना आमी एकठांय करूं येतात:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ओळख डेटा:</strong> पयलें नांव, निमाणें नांव</li>
                    <li><strong className="text-white">संपर्क डेटा:</strong> कामाचो ईमेल पत्तो, फोन नंबर</li>
                    <li><strong className="text-white">व्यावसायीक डेटा:</strong> कंपनीचें नांव, नोकरेचो शीर्षक, कंपनीचो आकार, उद्देग</li>
                    <li><strong className="text-white">संचार डेटा:</strong> तुमचो संदेश, आव्हानां वा प्रश्नाचें वर्णन</li>
                    <li><strong className="text-white">तांत्रीक डेटा:</strong> आयपी पत्तो, ब्राउझर प्रकार, डिव्हायस म्हायती, आनी कुकीज (फक्त तेन्नाच जेन्ना तुमी अॅनालिटिक्स कुकीज स्वीकारतात)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">वैयक्तीक डेटा</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">विशिश्ट उद्देश</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>नांव</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमची ओळख पटोवपाक आनी संवादांत तुमकां योग्य रितीन संबोधपाक.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ईमेल पत्तो</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमच्या चौकशीक जबाब दिवपाक आनी मागील्लीं दस्तावेजां (उदा. तयार केल्लीं धोरणां, DPDPA अहवाल) धाडपाक.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>फोन नंबर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तातडीच्या अनुपालन-संबंदीत संचाराक वा सल्लो नियोजीत करपाक.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>कंपनीचें नांव आनी पद</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमच्यो संस्थात्मक गरजो समजून घेवपाक आनी अनुपालन मदत सानुकूल करपाक.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>उद्देग आनी कंपनीचो आकार</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमच्या अनुपालन कार्यक्रमाची परिपक्वताय विश्लेषीत करपाक आनी संबंदीत शिफारसी दिवपाक.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>संदेश</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तुमची विशिश्ट विनंती वा समस्या समजून घेवपाक आनी तिका जबाब दिवपाक.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. प्रक्रियेचो उद्देश
                  </h2>
                  <p>आमी तुमचो वैयक्तीक डेटा सकयल दिल्ल्या विशिश्ट उद्देशां खातीर प्रक्रिया करतात:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">तुमच्या चौकशींक जबाब दिवपाक:</strong> तुमच्या डेमो विनंती वा संपर्क फॉर्म सबमिशन विशीं तुमचे कडेन संपर्क सादप.</li>
                    <li><strong className="text-white">मागील्ल्यो सेवा दिवपाक:</strong> ईमेल द्वारा तयार केल्लीं दस्तावेजां तुमकां धाडप.</li>
                    <li><strong className="text-white">आमच्यो सेवा सुदारपाक:</strong> वापरपी आमच्या वेबसायटी कडेन कसो संवाद सादतात तें समजून घेवप (फक्त अॅनालिटिक्स संमती वांगडा).</li>
                    <li><strong className="text-white">कायदेशीर जबाबदाऱ्यो पाळपाक:</strong> कायद्याप्रमाणे रेकॉर्ड दवरप.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ आमी तुमची नवी संमती घेतल्या बगर तुमचो वैयक्तीक डेटा हेर खंयच्याय उद्देशा खातीर वापरणार नात.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. डेटा दवरप (Data Retention)</h2>
                  <p>आमी तुमचो वैयक्तीक डेटा फक्त गरजेच्या काळा खातीर दवरतात:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">डेमो/संपर्क विनंती:</strong> सबमिशनाच्या तारखे सावन 2 वर्सां</li>
                    <li><strong className="text-white">तयार केल्लीं दस्तावेजां:</strong> तयार करपाच्या तारखे सावन 1 वर्स</li>
                    <li><strong className="text-white">अॅनालिटिक्स कुकीज:</strong> 2 वर्सां मेरेन (वा तुमी संमती परत घेवचे मेरेन)</li>
                  </ul>
                  <p className="mt-3">
                    दवरपाचो काळ सोंपल्या उपरांत, तुमचो वैयक्तीक डेटा सुरक्षीतपणान काडून उडयलो वा निनावी केल्लो जातलो.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. डेटा प्रिन्सिपल म्हणून तुमचे हक्क
                  </h2>
                  <p>DPDP कायदो 2023 अंतर्गत, तुमकां सकयल दिल्ले हक्क आसात:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">प्रवेशाचो हक्क:</strong> आमी तुमच्या विशीं प्रक्रिया करतात त्या वैयक्तीक डेटाचो सारांश मागा.</li>
                    <li><strong className="text-white">सुदारणेचो हक्क:</strong> चुकीच्या वा अपुर्ण डेटांत सुदारणेची विनंती करा.</li>
                    <li><strong className="text-white">काडून उडोवपाचो हक्क:</strong> तुमचो वैयक्तीक डेटा काडून उडोवपाची विनंती करा.</li>
                    <li><strong className="text-white">संमती परत घेवपाचो हक्क:</strong> खंयच्याय वेळार तुमची संमती परत घे.</li>
                    <li><strong className="text-white">तक्रार निवारणाचो हक्क:</strong> आमच्या तक्रार अधिकाऱ्याकडेन तक्रार दाखल करा.</li>
                    <li><strong className="text-white">नामनिर्देशनाचो हक्क:</strong> मरण वा अक्षमतेच्या बाबतींत तुमचे हक्क वापरपाक दुसऱ्या व्यक्तीची नेमणूक करा.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. तुमची संमती कशी परत घेवची?</h2>
                  <p>तुमी खंयच्याय वेळार तुमची संमती परत घेवंक शकतात:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> चेर "Withdraw Consent" विशय घेवन ईमेल करून.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> चेर आमच्या तक्रार अधिकाऱ्याक बरोवन.</li>
                    <li>आमच्या वेबसायटीचेर "कुकी सेटिंग्स" बटण वापरून.</li>
                  </ul>
                  <p className="mt-3">
                    संमती परत घेवपान परत घेवपाच्या पयलीं संमतीचे आदाराचेर प्रक्रियेच्या वैधतायेचेर परिणाम जावंचो ना. आमी <strong className="text-white">30 दिसां</strong> भितर तुमच्या विनंतीचेर कार्यवाही करतले.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. तक्रार अधिकारी (Grievance Officer)</h2>
                  <p>जर तुमकां आमच्या डेटा प्रक्रिये विशीं खंयचीय काळजी आसा, तुमी आमच्या तक्रार अधिकाऱ्या कडेन संपर्क सादूं येतात:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">नांव:</strong> शिल्पी कुलश्रेष्ठ</p>
                    <p className="mt-2"><strong className="text-white">पद:</strong> तक्रार अधिकारी आनी संस्थापक, बिझनेस एक्सलन्स स्टार्टएक्स एलएलपी</p>
                    <p className="mt-2"><strong className="text-white">ईमेल:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">फोन:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">जबाबाचो वेळ:</strong> 48 वरां भितर पावती; <strong>7 कामाच्या दिसां</strong> भितर निवारण.</p>
                  </div>
                  <p className="mt-4">
                    जर तुमी आमच्या जबाबान समाधानी नात, तर तुमकां <strong className="text-white">भारतीय डेटा संरक्षण मंडळा</strong> कडेन तक्रार दाखल करपाचो हक्क आसा.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. महत्वाची सूचना
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• संमती चेकबॉक्स चेक करून, तुमी आमकां तुमचो वैयक्तीक डेटा प्रक्रिया करपाक <strong>मुक्त, विशिश्ट, म्हायतीपूर्ण, बिनशर्त आनी स्पश्ट</strong> संमती दितात.</li>
                      <li>• तुमी संमती दिवपाक नाका करूं येतात, वा उपरांत ती परत घेवंक येतात. तरी, आमी तुमच्या संमती बगर कांय सेवा दिवंक शकनात.</li>
                      <li>• आमी मार्केटिंगाच्या उद्देशा खातीर तिसऱ्या पक्षा वांगडा तुमचो वैयक्तीक डेटा विकणार, भाड्यान दिवपार वा वांटपार नात.</li>
                      <li>• तुमचो डेटा विस्वासू सेवा पुरवपी (उदा. ईमेलाक रिसेंड, स्टोरेजाक गुगल शीट्स) वांगडा वांटलो जावं येता.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                MANIPURI CONTENT
            ============================================== */}
            {language === "mni" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. ꯃꯔꯤ ꯂꯥꯛꯄ (Introduction)</h2>
                  <p>
                    ꯃꯁꯤ ꯑꯌꯥꯕ ꯄꯥꯎꯆꯦ ꯑꯁꯤ <strong className="text-white">ꯕꯤꯖꯅꯦꯁ ꯏꯛꯁꯦꯂꯦꯟꯁ ꯁ꯭ꯇꯥꯔꯠ ꯑꯦꯛꯁ LLP</strong> ("ꯑꯩꯈꯣꯌ", "ꯑꯩꯈꯣꯌꯒꯤ") ꯅ ꯄꯨꯊꯣꯛꯄ ꯑꯃꯅꯤ, ꯃꯁꯤ <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> ꯗ ꯂꯤꯒꯦꯜ ꯒꯦꯂꯛꯁꯤ ꯄ꯭ꯂꯦꯠꯐꯣꯔꯝ ꯊꯧꯕꯤꯔꯤ ꯑꯃꯁꯨꯡ <strong className="text-white">ꯗꯤꯖꯤꯇꯦꯜ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯄ꯭ꯔꯣꯇꯦꯛꯁꯟ ꯑꯦꯛꯇ, 2023</strong> ("DPDP Act") ꯑꯃꯁꯨꯡ <strong className="text-white">DPDP ꯔꯨꯜ, 2025</strong> ꯒꯤ ꯃꯇꯨꯡ ꯏꯟꯅ ꯏꯪ.
                  </p>
                  <p className="mt-3">
                    ꯄꯥꯎꯆꯦ ꯑꯁꯤꯅ ꯇꯥꯛꯂꯤ ꯃꯗꯨꯗꯤ ꯑꯩꯈꯣꯌꯅ ꯀꯔꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯈꯣꯝꯖꯤꯜꯂꯤ, ꯀꯔꯤꯒꯤꯗꯃꯛ ꯈꯣꯝꯖꯤꯜꯂꯤ, ꯑꯩꯈꯣꯌꯅ ꯃꯁꯤ ꯀꯔꯝꯅ ꯁꯤꯖꯤꯟꯅꯒꯅꯤ, ꯑꯃꯁꯨꯡ ꯅꯍꯥꯛꯅ ꯑꯗꯨꯒꯤ ꯑꯌꯥꯕ ꯀꯔꯝꯅ ꯂꯧꯊꯣꯛꯀꯗꯒꯦ. ꯑꯌꯥꯕ ꯆꯦꯛꯕꯣꯛꯁ ꯆꯦꯛ ꯇꯧꯗꯨꯅ, ꯅꯍꯥꯛꯅ ꯃꯈꯥꯗ ꯁꯟꯗꯣꯛꯂꯤꯕꯒꯤ ꯃꯇꯨꯡ ꯏꯟꯅ ꯅꯍꯥꯛꯀꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯄ꯭ꯔꯣꯁꯦꯁ ꯇꯧꯅꯕ ꯑꯌꯥꯕ ꯄꯤꯖꯔꯤ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. ꯑꯩꯈꯣꯌꯅ ꯀꯔꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯈꯣꯝꯖꯤꯜꯂꯤ
                  </h2>
                  <p>ꯅꯍꯥꯛꯅ ꯑꯩꯈꯣꯌꯒꯤ ꯋꯦꯕꯁꯥꯏꯠ ꯗ ꯐꯣꯔꯝ ꯄꯤꯔꯛꯄ ꯃꯇꯝꯗ, ꯑꯩꯈꯣꯌꯅ ꯈꯣꯝꯖꯤꯟꯕ ꯌꯥꯏ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ꯏꯗꯦꯟꯇꯤꯇꯤ ꯗꯦꯇꯥ:</strong> ꯑꯍꯥꯟꯕ ꯃꯃꯤꯡ, ꯑꯔꯣꯏꯕ ꯃꯃꯤꯡ</li>
                    <li><strong className="text-white">ꯀꯣꯟꯇꯦꯛꯇ ꯗꯦꯇꯥ:</strong> ꯊꯕꯛꯀꯤ ꯏꯃꯦꯜ ꯑꯦꯗ꯭ꯔꯦꯁ, ꯐꯣꯟ ꯅꯝꯕꯔ</li>
                    <li><strong className="text-white">ꯄ꯭ꯔꯣꯐꯦꯁ꯭ꯅꯦꯜ ꯗꯦꯇꯥ:</strong> ꯀꯝꯄꯅꯤꯒꯤ ꯃꯃꯤꯡ, ꯊꯕꯛꯀꯤ ꯃꯃꯤꯡ, ꯀꯝꯄꯅꯤꯒꯤ ꯆꯥꯎꯕ, ꯏꯟꯗꯁ꯭ꯠꯔꯤ</li>
                    <li><strong className="text-white">ꯀꯣꯃꯨꯅꯤꯀꯦꯁꯟ ꯗꯦꯇꯥ:</strong> ꯅꯍꯥꯛꯀꯤ ꯃꯦꯁꯦꯖ, ꯁꯤꯟꯀꯥꯏꯕ, ꯅꯠꯇ꯭ꯔꯒ ꯋꯥꯍꯪꯒꯤ ꯃꯔꯝ</li>
                    <li><strong className="text-white">ꯇꯦꯛꯅꯤꯀꯦꯜ ꯗꯦꯇꯥ:</strong> IP ꯑꯦꯗ꯭ꯔꯦꯁ, ꯕ꯭ꯔꯥꯎꯖꯔ ꯃꯈꯜ, ꯗꯤꯚꯥꯏꯁ ꯏꯟꯐꯣꯔꯃꯦꯁꯟ, ꯑꯃꯁꯨꯡ ꯀꯨꯀꯤ (ꯅꯍꯥꯛꯅ ꯑꯦꯅꯥꯂꯤꯇꯤꯛꯁ ꯀꯨꯀꯤ ꯌꯥꯕ ꯄꯤꯔꯛꯄ ꯃꯇꯝꯗ ꯈꯛꯇꯃꯛ)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">ꯃꯈꯥ ꯄꯥꯟꯕ ꯃꯔꯝ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ꯃꯃꯤꯡ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ꯅꯍꯥꯛꯄꯨ ꯈꯪꯅꯕ ꯑꯃꯁꯨꯡ ꯀꯣꯃꯨꯅꯤꯀꯦꯁꯟ ꯗ ꯃꯔꯥꯡ ꯑꯣꯏꯅ ꯀꯧꯅꯕ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ꯏꯃꯦꯜ ꯑꯦꯗ꯭ꯔꯦꯁ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ꯅꯍꯥꯛꯀꯤ ꯋꯥꯍꯪꯒꯤ ꯄꯥꯎꯈꯨꯝ ꯄꯤꯅꯕ ꯑꯃꯁꯨꯡ ꯍꯥꯏꯖꯔꯛꯄ ꯗꯣꯀꯨꯃꯦꯟꯇ (ꯈꯨꯗꯝ ꯑꯣꯏꯅ ꯁꯦꯝꯂꯛꯄ ꯄꯣꯂꯤꯁꯤ, DPDPA ꯔꯤꯄꯣꯔꯠ) ꯄꯤꯅꯕ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ꯐꯣꯟ ꯅꯝꯕꯔ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ꯑꯥꯏꯕ ꯐꯤꯕꯝ ꯂꯩꯕ ꯀꯣꯃꯨꯅꯤꯀꯦꯁꯟ ꯅꯠꯇ꯭ꯔꯒ ꯀꯟꯁꯜꯇꯦꯁꯟ ꯁꯦꯗ꯭ꯌꯨꯜ ꯇꯧꯅꯕ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ꯀꯝꯄꯅꯤꯒꯤ ꯃꯃꯤꯡ ꯑꯃꯁꯨꯡ ꯊꯕꯛ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ꯅꯍꯥꯛꯀꯤ ꯑꯣꯔꯒꯅꯥꯏꯖꯦꯁꯅꯦꯜ ꯃꯊꯧꯁꯤꯡ ꯈꯪꯅꯕ ꯑꯃꯁꯨꯡ ꯀꯝꯞꯂꯥꯏꯑꯦꯟꯁ ꯃꯇꯦꯡ ꯀꯁ꯭ꯇꯝꯃꯥꯏꯖ ꯇꯧꯅꯕ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ꯏꯟꯗꯁ꯭ꯠꯔꯤ ꯑꯃꯁꯨꯡ ꯀꯝꯄꯅꯤꯒꯤ ꯆꯥꯎꯕ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ꯅꯍꯥꯛꯀꯤ ꯀꯝꯞꯂꯥꯏꯑꯦꯟꯁ ꯄ꯭ꯔꯣꯒ꯭ꯔꯥꯝꯒꯤ ꯃꯇꯝ ꯆꯥꯗꯕ ꯌꯦꯡꯅꯕ ꯑꯃꯁꯨꯡ ꯃꯔꯤ ꯂꯩꯅꯕ ꯑꯄꯥꯝꯕ ꯄꯤꯅꯕ.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ꯃꯦꯁꯦꯖ</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">ꯅꯍꯥꯛꯀꯤ ꯈꯔꯥꯛꯄ ꯍꯥꯏꯖꯔꯛꯄ ꯅꯠꯇ꯭ꯔꯒ ꯑꯋꯥꯕ ꯈꯪꯅꯕ ꯑꯃꯁꯨꯡ ꯄꯥꯎꯈꯨꯝ ꯄꯤꯅꯕ.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. ꯄ꯭ꯔꯣꯁꯦꯁꯤꯡꯒꯤ ꯃꯔꯝ
                  </h2>
                  <p>ꯑꯩꯈꯣꯌꯅ ꯃꯈꯥꯗ ꯄꯤꯔꯤꯕ ꯃꯈꯥ ꯄꯥꯟꯕ ꯃꯔꯝꯁꯤꯡꯒꯤꯗꯃꯛ ꯅꯍꯥꯛꯀꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯄ꯭ꯔꯣꯁꯦꯁ ꯇꯧꯏ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ꯅꯍꯥꯛꯀꯤ ꯋꯥꯍꯪꯁꯤꯡꯒꯤ ꯄꯥꯎꯈꯨꯝ ꯄꯤꯅꯕ:</strong> ꯅꯍꯥꯛꯀꯤ ꯗꯦꯃꯣ ꯍꯥꯏꯖꯔꯛꯄ ꯅꯠꯇ꯭ꯔꯒ ꯀꯣꯟꯇꯦꯛꯇ ꯐꯣꯔꯝ ꯄꯤꯔꯛꯄꯒꯤ ꯃꯇꯥꯡꯗ ꯅꯍꯥꯛꯄꯨ ꯀꯣꯟꯇꯦꯛꯇ ꯇꯧꯅꯕ.</li>
                    <li><strong className="text-white">ꯍꯥꯏꯖꯔꯛꯄ ꯁꯔꯚꯤꯁ ꯄꯤꯅꯕ:</strong> ꯏꯃꯦꯜ ꯗꯒꯤ ꯁꯦꯝꯂꯛꯄ ꯗꯣꯀꯨꯃꯦꯟꯇ ꯅꯍꯥꯛꯄꯨ ꯊꯥꯅꯕ.</li>
                    <li><strong className="text-white">ꯑꯩꯈꯣꯌꯒꯤ ꯁꯔꯚꯤꯁ ꯐꯥꯏꯗꯣꯛꯍꯟꯅꯕ:</strong> ꯁꯤꯖꯤꯟꯅꯔꯤꯕꯁꯤꯡꯅ ꯑꯩꯈꯣꯌꯒꯤ ꯋꯦꯕꯁꯥꯏꯠ ꯀꯝꯄꯨꯇꯔ ꯀꯔꯝꯅ ꯁꯤꯖꯤꯟꯅꯔꯤꯕ ꯈꯪꯅꯕ (ꯑꯦꯅꯥꯂꯤꯇꯤꯛꯁ ꯑꯌꯥꯕ ꯈꯛꯇꯒ ꯫).</li>
                    <li><strong className="text-white">ꯂꯥꯏꯅꯤꯡꯒꯤ ꯊꯧꯁꯤꯡ ꯇꯧꯅꯕ:</strong> ꯂꯥꯏꯅꯤꯡꯒꯤ ꯃꯇꯨꯡ ꯏꯟꯅ ꯔꯦꯀꯣꯔꯗ ꯊꯝꯅꯕ.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ ꯑꯩꯈꯣꯌꯅ ꯅꯍꯥꯛꯗꯒꯤ ꯑꯅꯧꯕ ꯑꯌꯥꯕ ꯂꯧꯗꯅ ꯅꯍꯥꯛꯀꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯑꯇꯣꯞꯄ ꯃꯔꯝ ꯑꯃꯍꯥꯛꯇ ꯁꯤꯖꯤꯟꯅꯔꯣꯏ.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. ꯗꯦꯇꯥ ꯊꯝꯕ (Data Retention)</h2>
                  <p>ꯑꯩꯈꯣꯌꯅ ꯅꯍꯥꯛꯀꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯃꯊꯧ ꯇꯥꯕ ꯃꯇꯝ ꯈꯛꯇꯃꯛ ꯊꯝꯏ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ꯗꯦꯃꯣ/ꯀꯣꯟꯇꯦꯛꯇ ꯍꯥꯏꯖꯔꯛꯄ:</strong> ꯄꯤꯔꯛꯄ ꯅꯨꯃꯤꯠꯗꯒꯤ 2 ꯆꯍꯤ</li>
                    <li><strong className="text-white">ꯁꯦꯝꯂꯛꯄ ꯗꯣꯀꯨꯃꯦꯟꯇ:</strong> ꯁꯦꯝꯂꯛꯄ ꯅꯨꯃꯤꯠꯗꯒꯤ 1 ꯆꯍꯤ</li>
                    <li><strong className="text-white">ꯑꯦꯅꯥꯂꯤꯇꯤꯛꯁ ꯀꯨꯀꯤ:</strong> 2 ꯆꯍꯤ ꯐꯥꯎꯕ (ꯅꯠꯇ꯭ꯔꯒ ꯅꯍꯥꯛꯅ ꯑꯌꯥꯕ ꯂꯧꯊꯣꯛꯄ ꯐꯥꯎꯕ)</li>
                  </ul>
                  <p className="mt-3">
                    ꯊꯝꯕ ꯃꯇꯝ ꯂꯣꯏꯔꯛꯄ ꯃꯇꯨꯡꯗ, ꯅꯍꯥꯛꯀꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯃꯉꯥꯜ ꯂꯩꯅ ꯀꯛꯊꯠꯀꯅꯤ ꯅꯠꯇ꯭ꯔꯒ ꯃꯃꯤꯡ ꯂꯩꯇꯅ ꯇꯧꯒꯅꯤ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. ꯗꯦꯇꯥ ꯄ꯭ꯔꯤꯟꯁꯤꯄꯜ ꯑꯣꯏꯅ ꯅꯍꯥꯛꯀꯤ ꯍꯀꯁꯤꯡ
                  </h2>
                  <p>DPDP ꯑꯦꯛꯇ 2023ꯒꯤ ꯃꯈꯥꯗ, ꯅꯍꯥꯛꯇ ꯃꯈꯥꯗ ꯄꯤꯔꯤꯕ ꯍꯀꯁꯤꯡ ꯂꯩ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">ꯑꯦꯛꯁꯦꯁ ꯍꯀ:</strong> ꯑꯩꯈꯣꯌꯅ ꯅꯍꯥꯛꯀꯤ ꯃꯇꯥꯡꯗ ꯄ꯭ꯔꯣꯁꯦꯁ ꯇꯧꯔꯤꯕ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥꯒꯤ ꯁꯥꯔꯥꯡꯁ ꯍꯥꯏꯖꯧ.</li>
                    <li><strong className="text-white">ꯁꯦꯝꯗꯣꯛꯄ ꯍꯀ:</strong> ꯁꯣꯏꯗꯅ ꯂꯩꯇꯕ ꯅꯠꯇ꯭ꯔꯒ ꯑꯄꯨꯟꯕ ꯂꯩꯇꯕ ꯗꯦꯇꯥ ꯁꯦꯝꯗꯣꯛꯄ ꯍꯥꯏꯖꯧ.</li>
                    <li><strong className="text-white">ꯀꯛꯊꯠꯄ ꯍꯀ:</strong> ꯅꯍꯥꯛꯀꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯀꯛꯊꯠꯄ ꯍꯥꯏꯖꯧ.</li>
                    <li><strong className="text-white">ꯑꯌꯥꯕ ꯂꯧꯊꯣꯛꯄ ꯍꯀ:</strong> ꯀꯔꯝꯕ ꯃꯇꯝꯗ ꯑꯃꯥꯏ ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕ ꯂꯧꯊꯣꯛꯧ.</li>
                    <li><strong className="text-white">ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯔꯤꯗ꯭ꯔꯦꯁꯜ ꯍꯀ:</strong> ꯑꯩꯈꯣꯌꯒꯤ ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯑꯣꯐꯤꯁꯔꯗ ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯄꯤꯅꯕ.</li>
                    <li><strong className="text-white">ꯅꯣꯃꯤꯅꯦꯠ ꯇꯧꯕ ꯍꯀ:</strong> ꯁꯤꯕ ꯅꯠꯇ꯭ꯔꯒ ꯁꯦꯝꯗꯕ ꯃꯇꯝꯗ ꯅꯍꯥꯛꯀꯤ ꯍꯀꯁꯤꯡ ꯁꯤꯖꯤꯟꯅꯅꯕ ꯑꯇꯣꯞꯄ ꯃꯤꯁꯤꯡ ꯅꯣꯃꯤꯅꯦꯠ ꯇꯧꯧ.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕ ꯀꯔꯝꯅ ꯂꯧꯊꯣꯛꯀꯗꯒꯦ?</h2>
                  <p>ꯅꯍꯥꯛꯅ ꯀꯔꯝꯕ ꯃꯇꯝꯗ ꯑꯃꯥꯏ ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕ ꯂꯧꯊꯣꯛꯕ ꯌꯥꯏ:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> ꯗ "Withdraw Consent" ꯍꯥꯏꯕ ꯋꯥꯐꯝꯒ ꯏꯃꯦꯜ ꯊꯥꯗꯨꯅ.</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> ꯗ ꯑꯩꯈꯣꯌꯒꯤ ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯑꯣꯐꯤꯁꯔꯗ ꯏꯗꯨꯅ.</li>
                    <li>ꯑꯩꯈꯣꯌꯒꯤ ꯋꯦꯕꯁꯥꯏꯠ ꯗ "ꯀꯨꯀꯤ ꯁꯦꯇꯤꯡꯁ" ꯕꯇꯟ ꯁꯤꯖꯤꯟꯅꯗꯨꯅ.</li>
                  </ul>
                  <p className="mt-3">
                    ꯑꯌꯥꯕ ꯂꯧꯊꯣꯛꯄꯅ ꯂꯧꯊꯣꯛꯄꯒꯤ ꯃꯃꯥꯡꯗ ꯑꯌꯥꯕꯒꯤ ꯃꯇꯨꯡ ꯏꯟꯅ ꯄ꯭ꯔꯣꯁꯦꯁꯤꯡꯒꯤ ꯂꯥꯏꯅꯤꯡꯒꯤ ꯃꯇꯤꯛ ꯑꯗꯨꯗ ꯁꯣꯛꯍꯟꯂꯣꯏ. ꯑꯩꯈꯣꯌꯅ <strong className="text-white">30 ꯅꯨꯃꯤꯠ</strong> ꯃꯅꯨꯡꯗ ꯅꯍꯥꯛꯀꯤ ꯍꯥꯏꯖꯔꯛꯄꯗ ꯊꯧꯒꯠꯂꯛꯀꯅꯤ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯑꯣꯐꯤꯁꯔ (Grievance Officer)</h2>
                  <p>ꯅꯍꯥꯛꯇ ꯑꯩꯈꯣꯌꯒꯤ ꯗꯦꯇꯥ ꯄ꯭ꯔꯣꯁꯦꯁꯤꯡꯒꯤ ꯃꯇꯥꯡꯗ ꯋꯥꯈꯜ ꯋꯥꯕ ꯂꯩꯔꯕꯗꯤ, ꯅꯍꯥꯛꯅ ꯑꯩꯈꯣꯌꯒꯤ ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯑꯣꯐꯤꯁꯔꯗ ꯀꯣꯟꯇꯦꯛꯇ ꯇꯧꯕ ꯌꯥꯏ:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">ꯃꯃꯤꯡ:</strong> ꯁꯤꯜꯄꯤ ꯀꯨꯜꯁ꯭ꯔꯦꯁ꯭ꯊ</p>
                    <p className="mt-2"><strong className="text-white">ꯊꯕꯛ:</strong> ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯑꯣꯐꯤꯁꯔ ꯑꯃꯁꯨꯡ ꯐꯥꯎꯟꯗꯔ, ꯕꯤꯖꯅꯦꯁ ꯏꯛꯁꯦꯂꯦꯟꯁ ꯁ꯭ꯇꯥꯔꯠ ꯑꯦꯛꯁ LLP</p>
                    <p className="mt-2"><strong className="text-white">ꯏꯃꯦꯜ:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">ꯐꯣꯟ:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">ꯄꯥꯎꯈꯨꯝ ꯄꯤꯕ ꯃꯇꯝ:</strong> 48 ꯑꯋꯥꯡ ꯃꯅꯨꯡꯗ ꯑꯦꯀꯅꯣꯂꯦꯖ; <strong>7 ꯊꯕꯛ ꯅꯨꯃꯤꯠ</strong> ꯃꯅꯨꯡꯗ ꯁꯣꯜꯚ ꯇꯧꯕ.</p>
                  </div>
                  <p className="mt-4">
                    ꯅꯍꯥꯛꯅ ꯑꯩꯈꯣꯌꯒꯤ ꯄꯥꯎꯈꯨꯝꯗ ꯁꯥꯠꯂꯣꯏꯗꯕꯗꯤ, ꯅꯍꯥꯛꯇ <strong className="text-white">ꯚꯥꯔꯇꯤꯌꯥ ꯗꯦꯇꯥ ꯄ꯭ꯔꯣꯇꯦꯛꯁꯟ ꯕꯣꯔꯗ</strong> ꯗ ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯄꯤꯕ ꯍꯀ ꯂꯩ.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. ꯃꯔꯨꯑꯣꯏꯕ ꯄꯥꯎꯆꯦ
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• ꯑꯌꯥꯕ ꯆꯦꯛꯕꯣꯛꯁ ꯆꯦꯛ ꯇꯧꯗꯨꯅ, ꯅꯍꯥꯛꯅ ꯑꯩꯈꯣꯌꯗ ꯅꯍꯥꯛꯀꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯄ꯭ꯔꯣꯁꯦꯁ ꯇꯧꯅꯕ <strong>ꯐ꯭ꯔꯤ, ꯁ꯭ꯄꯦꯁꯤꯐꯤꯛ, ꯏꯅꯐꯣꯔꯃꯗ, ꯑꯅꯦꯁ꯭ꯇꯦꯗ ꯑꯃꯁꯨꯡ ꯑꯅꯦꯝꯕꯤꯒꯨꯑꯦꯁ</strong> ꯑꯌꯥꯕ ꯄꯤꯔꯤ.</li>
                      <li>• ꯅꯍꯥꯛꯅ ꯑꯌꯥꯕ ꯄꯤꯕ ꯌꯥꯗꯅ ꯌꯥꯏ, ꯅꯠꯇ꯭ꯔꯒ ꯃꯇꯨꯡꯗ ꯂꯧꯊꯣꯛꯄ ꯌꯥꯏ. ꯑꯗꯨꯕꯨ, ꯅꯍꯥꯛꯀꯤ ꯑꯌꯥꯕ ꯂꯩꯗꯅ ꯑꯩꯈꯣꯌꯅ ꯊꯔꯤꯕ ꯁꯔꯚꯤꯁ ꯈꯔ ꯄꯤꯕ ꯌꯥꯔꯣꯏ.</li>
                      <li>• ꯑꯩꯈꯣꯌꯅ ꯃꯥꯔꯀꯦꯇꯤꯡꯒꯤ ꯃꯔꯝꯗꯒꯤ ꯑꯇꯣꯞꯄ ꯃꯤꯁꯤꯡꯒ ꯅꯍꯥꯛꯀꯤ ꯄꯔꯁꯣꯅꯦꯜ ꯗꯦꯇꯥ ꯌꯣꯟꯗꯨꯅ, ꯂꯦꯡꯗꯨꯅ ꯅꯠꯇ꯭ꯔꯒ ꯁꯦꯌꯔ ꯇꯧꯔꯣꯏ.</li>
                      <li>• ꯅꯍꯥꯛꯀꯤ ꯗꯦꯇꯥ ꯊꯥꯖꯔꯕ ꯁꯔꯚꯤꯁ ꯄ꯭ꯔꯣꯚꯥꯏꯗꯔ (ꯈꯨꯗꯝ ꯑꯣꯏꯅ, ꯏꯃꯦꯜꯒꯤꯗꯃꯛ ꯔꯤꯁꯦꯟꯗ, ꯁ꯭ꯇꯣꯔꯦꯖꯒꯤꯗꯃꯛ ꯒꯨꯒꯜ ꯁꯤꯠ) ꯀꯝꯄꯨꯇꯔ ꯁꯦꯌꯔ ꯇꯧꯕ ꯌꯥꯏ.</li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {/* ==============================================
                SANSKRIT CONTENT
            ============================================== */}
            {language === "sa" && (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">1. प्रास्ताविकम् (Introduction)</h2>
                  <p>
                    इयं सहमतिसूचना <strong className="text-white">बिजनेस एक्सीलेंस स्टार्टX LLP</strong> ("वयम्", "अस्माकम्") द्वारा जारी कृता अस्ति, यः <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a> इति स्थाने लीगल गैलेक्सी मञ्चं चालयति तथा च <strong className="text-white">डिजिटल पर्सनल डेटा प्रोटेक्शन अधिनियमः, 2023</strong> ("DPDP Act") तथा <strong className="text-white">DPDP नियमाः, 2025</strong> इत्येतयोः अनुपालनं करोति।
                  </p>
                  <p className="mt-3">
                    इयं सूचना स्पष्टीकरोति यत् वयं किं व्यक्तिगतं डेटां सङ्गृह्णीमः, किमर्थं सङ्गृह्णीमः, वयं तत् कथं प्रयुञ्ज्महे, तथा च भवान् स्वसहमतिं कथं प्रत्याहर्तुं शक्नोति। सहमतिपेटिकां चित्वा, भवान् अधः वर्णितानुसारं स्वव्यक्तिगतडेटाप्रक्रियायै सहमतिं ददाति।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    2. वयं किं व्यक्तिगतं डेटां सङ्गृह्णीमः
                  </h2>
                  <p>यदा भवान् अस्माकं जालस्थाने पत्रकं समर्पयति, तदा वयं सङ्ग्रहीतुं शक्नुमः:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">अभिज्ञानडेटा:</strong> प्रथमं नाम, अन्तिमं नाम</li>
                    <li><strong className="text-white">सम्पर्कडेटा:</strong> कार्यस्य ईमेल-पता, दूरभाषसङ्ख्या</li>
                    <li><strong className="text-white">व्यावसायिकडेटा:</strong> संस्थायाः नाम, कार्यशीर्षकम्, संस्थायाः आकारः, उद्योगः</li>
                    <li><strong className="text-white">सञ्चारडेटा:</strong> भवतः सन्देशः, आह्वानानि, अथवा प्रश्नविवरणम्</li>
                    <li><strong className="text-white">तान्त्रिकडेटा:</strong> IP-पता, ब्राउज़रप्रकारः, उपकरणसूचना, तथा च कुकीज़् (केवलं यदा भवान् विश्लेषणकुकीज़् स्वीकरोति)</li>
                  </ul>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border border-white/10 rounded-lg">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">व्यक्तिगतं डेटा</th>
                          <th className="px-4 py-3 text-white text-sm font-semibold border-b border-white/10">विशिष्टः उद्देश्यः</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>नाम</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">भवन्तं अभिज्ञातुं तथा च सञ्चारे भवन्तं सम्यक् सम्बोधयितुम्।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>ईमेल-पता</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">भवतः प्रश्नस्य उत्तरं दातुं तथा च अनुरोधितानि दस्तावेजानि (यथा निर्मिताः नीतयः, DPDPA-विवरणानि) प्रेषयितुम्।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>दूरभाषसङ्ख्या</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आत्ययिक-अनुपालन-सम्बन्धि-सञ्चाराय अथवा परामर्शस्य समयं निर्धारयितुम्।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>संस्थायाः नाम तथा पदम्</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">भवतः संस्थागत-आवश्यकताः अवगन्तुं तथा च अनुपालन-सहायतां अनुकूलयितुम्।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>उद्योगः तथा संस्थायाः आकारः</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">भवतः अनुपालन-कार्यक्रमस्य परिपक्वतां विश्लेषयितुं तथा च सान्दर्भिकानि सुझावानि प्रदातुम्।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>सन्देशः</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">भवतः विशिष्टं अनुरोधं समस्यां वा अवगन्तुं तथा च उत्तरं दातुम्।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    3. प्रक्रियायाः उद्देश्यम्
                  </h2>
                  <p>वयं भवतः व्यक्तिगतं डेटां निम्नलिखित-विशिष्ट-उद्देश्येभ्यः प्रक्रिययामः:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">भवतः प्रश्नानाम् उत्तरं दातुम्:</strong> भवतः प्रात्यक्षिक-अनुरोधस्य अथवा सम्पर्क-पत्रक-समर्पणस्य विषये भवता सह सम्पर्कं कर्तुम्।</li>
                    <li><strong className="text-white">अनुरोधिताः सेवाः प्रदातुम्:</strong> ईमेल-माध्यमेन निर्मितानि दस्तावेजानि भवते प्रेषयितुम्।</li>
                    <li><strong className="text-white">अस्माकं सेवाः सुधारयितुम्:</strong> उपयोक्तारः अस्माकं जालस्थानेन सह कथं व्यवहरन्ति इति अवगन्तुम् (केवलं विश्लेषण-सहमत्या सह)।</li>
                    <li><strong className="text-white">विधिक-दायित्वानि पालयितुम्:</strong> विधि-अनुसारं अभिलेखान् रक्षितुम्।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ वयं भवतः नवीनां सहमतिं प्राप्य, भवतः व्यक्तिगतं डेटां किमपि अन्यं उद्देश्यं प्रति न प्रयोक्ष्यामः।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">4. डेटा-धारणम् (Data Retention)</h2>
                  <p>वयं भवतः व्यक्तिगतं डेटां केवलं आवश्यकं कालं यावत् रक्षामः:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">प्रात्यक्षिक-सम्पर्क-अनुरोधाः:</strong> समर्पण-दिनाङ्कात् २ वर्षाणि</li>
                    <li><strong className="text-white">निर्मितानि दस्तावेजानि:</strong> निर्माण-दिनाङ्कात् १ वर्षम्</li>
                    <li><strong className="text-white">विश्लेषण-कुकीज़्:</strong> २ वर्षाणि यावत् (अथवा यावत् भवान् सहमतिं न प्रत्याहरति)</li>
                  </ul>
                  <p className="mt-3">
                    धारण-अवधौ समाप्तायाम्, भवतः व्यक्तिगतं डेटां सुरक्षितरूपेण विलोपितं वा अनामीकृतं भविष्यति।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                    5. डेटा-प्रधानरूपेण भवतः अधिकाराः
                  </h2>
                  <p>DPDP-अधिनियमस्य 2023 अन्तर्गतं, भवते निम्नलिखिताः अधिकाराः सन्ति:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">प्रवेशाधिकारः:</strong> वयं भवता विषये यत् व्यक्तिगतं डेटां प्रक्रिययामः तस्य सारांशं याचतु।</li>
                    <li><strong className="text-white">संशोधनाधिकारः:</strong> अशुद्धस्य अथवा अपूर्णस्य डेटायाः संशोधनं याचतु।</li>
                    <li><strong className="text-white">विलोपनाधिकारः:</strong> स्वव्यक्तिगत-डेटायाः विलोपनं याचतु।</li>
                    <li><strong className="text-white">सहमतिप्रत्याहाराधिकारः:</strong> कस्मिंश्चित् अपि समये स्वसहमतिं प्रत्याहरतु।</li>
                    <li><strong className="text-white">शिकायतनिवारणाधिकारः:</strong> अस्माकं शिकायत-अधिकारिणि शिकायतं दातु।</li>
                    <li><strong className="text-white">नामाङ्कनाधिकारः:</strong> मृत्यौ अशक्ततायां वा स्वअधिकाराणां प्रयोगाय अन्यं जनं नामाङ्कयतु।</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. स्वसहमतिं कथं प्रत्याहर्तुम्?</h2>
                  <p>भवान् कस्मिंश्चित् अपि समये स्वसहमतिं प्रत्याहर्तुं शक्नोति:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> इत्यत्र "Withdraw Consent" इति विषयेण ईमेलं प्रेषयित्वा।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> इत्यत्र अस्माकं शिकायत-अधिकारिणं लिखित्वा।</li>
                    <li>अस्माकं जालस्थाने "कुकी-सेटिङ्ग्स्" इति बटनं प्रयुज्य।</li>
                  </ul>
                  <p className="mt-3">
                    सहमतेः प्रत्याहारः प्रत्याहारात् पूर्वं सहमतिम् आधारीकृत्य प्रक्रियायाः वैधतां न प्रभावयिष्यति। वयं <strong className="text-white">३० दिनानाम्</strong> अन्तः भवतः अनुरोधं प्रक्रिययिष्यामः।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">7. शिकायत-अधिकारी (Grievance Officer)</h2>
                  <p>यदि भवते अस्माकं डेटा-प्रक्रियायाः विषये काचित् चिन्ता अस्ति, तर्हि भवान् अस्माकं शिकायत-अधिकारिणा सह सम्पर्कं कर्तुं शक्नोति:</p>
                  <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                    <p><strong className="text-white">नाम:</strong> शिल्पी कुलश्रेष्ठ</p>
                    <p className="mt-2"><strong className="text-white">पदम्:</strong> शिकायत-अधिकारी तथा संस्थापकः, बिजनेस एक्सीलेंस स्टार्टX LLP</p>
                    <p className="mt-2"><strong className="text-white">ईमेल:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                    <p className="mt-2"><strong className="text-white">दूरभाषः:</strong> +91 8800138008</p>
                    <p className="mt-2"><strong className="text-white">प्रतिक्रिया-समयः:</strong> ४८ होरासु स्वीकृतिः; <strong>७ कार्यदिवसेषु</strong> समाधानम्।</p>
                  </div>
                  <p className="mt-4">
                    यदि भवान् अस्माकं प्रतिक्रियया सन्तुष्टः नास्ति, तर्हि भवते <strong className="text-white">भारतीय-डेटा-संरक्षण-मण्डलस्य</strong> समीपे शिकायतं दातुम् अधिकारः अस्ति।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    8. महत्त्वपूर्णा सूचना
                  </h2>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                    <ul className="space-y-2 text-yellow-200">
                      <li>• सहमतिपेटिकां चित्वा, भवान् अस्मभ्यं स्वव्यक्तिगत-डेटा-प्रक्रियायै <strong>स्वतन्त्रां, विशिष्टां, सूचितां, शर्तरहितां तथा च स्पष्टां</strong> सहमतिं ददाति।</li>
                      <li>• भवान् सहमतिं दातुं निराकर्तुं शक्नोति, अथवा पश्चात् तां प्रत्याहर्तुं शक्नोति। परन्तु, वयं भवतः सहमतिं विना कांश्चित् सेवाः प्रदातुं न शक्नुमः।</li>
                      <li>• वयं विपणन-उद्देश्येभ्यः तृतीय-पक्षैः सह भवतः व्यक्तिगतं डेटां विक्रीणीमः, भाटकं दद्मः, अथवा साझां कर्तुं न शक्नुमः।</li>
                      <li>• भवतः डेटां विश्वस्तैः सेवा-प्रदातृभिः (यथा, ईमेल-कृते रिसेण्ड्, सङ्ग्रहण-कृते गूगल-शीट्स्) सह साझां कर्तुं शक्यते।</li>
                    </ul>
                  </div>
                </section>

               

               
              </>
            )}

<ConsentCapture language={language} />
            {/* ==============================================
                FALLBACK FOR OTHER LANGUAGES
            ============================================== */}
                        {language !== "en" && language !== "hi" && language !== "bn" && language !== "mr" && language !== "te" && language !== "ta" && language !== "gu" && language !== "ur" && language !== "kn" && language !== "ml" && language !== "or" && language !== "pa" && language !== "as" && language !== "mai" && language !== "sat" && language !== "sd" && language !== "ne" && language !== "brx" && language !== "doi" && language !== "kok" && language !== "mni" && language !== "sa" && (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">This language is coming soon. Detailed legal sections are currently available in English, Hindi, and 20 other Indian languages.</p>
                <button 
                  onClick={() => setLanguage("en")}
                  className="px-6 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-all"
                >
                  View in English
                </button>
              </div>
            )}
          </div>

          {/* Back to Home */}
          <div className="mt-10 pt-6 border-t border-white/20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}