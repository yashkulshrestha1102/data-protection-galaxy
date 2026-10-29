"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, CheckCircle } from "lucide-react";

const translations = {
  title: {
    en: "Give Consent", hi: "सहमति दें", bn: "সম্মতি দিন", mr: "संमती द्या", te: "సమ్మతి ఇవ్వండి", ta: "ஒப்புதல் அளிக்கவும்", gu: "સંમતિ આપો", ur: "رضامندی دیں", kn: "ಸಮ್ಮತಿ ನೀಡಿ", ml: "സമ്മതം നൽകുക", or: "ସମ୍ମତି ଦିଅନ୍ତୁ", pa: "ਸਹਿਮਤੀ ਦਿਓ", as: "সন্মতি দিয়ক", mai: "सहमति दियौ", sat: "ᱥᱚᱢᱢᱚᱛᱤ ᱮᱢ ᱢᱮ", sd: "رضامندی ڏيو", ne: "सहमति दिनुहोस्", brx: "सहमति दिन", doi: "सहमति दियो", kok: "संमती दिव्च", mni: "ꯑꯌꯥꯕ ꯄꯤꯕꯤꯌꯨ", sa: "सहमतिं ददातु"
  },
  desc: {
    en: "I have read this Consent Notice and I consent to the processing of my personal data as described above.",
    hi: "मैंने इस सहमति सूचना को पढ़ लिया है और मैं अपने व्यक्तिगत डेटा के प्रसंस्करण के लिए सहमति देता/देती हूं।",
    bn: "আমি এই সম্মতি বিজ্ঞপ্তিটি পড়েছি এবং আমি আমার ব্যক্তিগত ডেটা প্রক্রিয়াকরণে সম্মতি দিচ্ছি।",
    mr: "मी ही संमती सूचना वाचली आहे आणि मी माझ्या वैयक्तिक डेटाच्या प्रक्रियेस संमती देतो/देते.",
    te: "నేను ఈ సమ్మతి నోటీసును చదివాను మరియు నా వ్యక్తిగత డేటా ప్రాసెసింగ్‌కు సమ్మతిని ఇస్తున్నాను.",
    ta: "நான் இந்த ஒப்புதல் அறிவிப்பை படித்துள்ளேன் மற்றும் எனது தனிப்பட்ட தரவு செயலாக்கத்திற்கு ஒப்புதல் அளிக்கிறேன்.",
    gu: "મેં આ સંમતિ સૂચના વાંચી છે અને હું મારા વ્યક્તિગત ડેટાની પ્રક્રિયા માટે સંમતિ આપું છું.",
    ur: "میں نے یہ رضامندی نوٹس پڑھ لیا ہے اور میں اپنے ذاتی ڈیٹا کی پروسیسنگ کے لیے رضامندی دیتا/دیتی ہوں۔",
    kn: "ನಾನು ಈ ಸಮ್ಮತಿ ಸೂಚನೆಯನ್ನು ಓದಿದ್ದೇನೆ ಮತ್ತು ನನ್ನ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಸಂಸ್ಕರಣೆಗೆ ಸಮ್ಮತಿಸುತ್ತೇನೆ.",
    ml: "ഞാൻ ഈ സമ്മത വിജ്ഞാപനം വായിച്ചിട്ടുണ്ട്, എന്റെ വ്യക്തിഗത ഡാറ്റ പ്രോസസ്സിംഗിന് ഞാൻ സമ്മതിക്കുന്നു.",
    or: "ମୁଁ ଏହି ସମ୍ମତି ସୂଚନା ପଢ଼ିଛି ଏବଂ ମୋର ବ୍ୟକ୍ତିଗତ ଡାଟା ପ୍ରୋସେସିଂ ପାଇଁ ସମ୍ମତି ଦେଉଛି।",
    pa: "ਮੈਂ ਇਹ ਸਹਿਮਤੀ ਨੋਟਿਸ ਪੜ੍ਹ ਲਿਆ ਹੈ ਅਤੇ ਮੈਂ ਆਪਣੇ ਨਿੱਜੀ ਡੇਟਾ ਦੀ ਪ੍ਰੋਸੈਸਿੰਗ ਲਈ ਸਹਿਮਤੀ ਦਿੰਦਾ/ਦਿੰਦੀ ਹਾਂ।",
    as: "মই এই সন্মতি জাননী পঢ়িছোঁ আৰু মোৰ ব্যক্তিগত ডেটা প্ৰক্ৰিয়াকৰণলৈ সন্মতি দিওঁ।",
    mai: "हम ई सहमति सूचना पढ़लियै आ मो अपन व्यक्तिगत डेटा के प्रसंस्करण लेल सहमति दै छी।",
    sat: "ᱤᱧ ᱱᱚᱶᱟ ᱥᱚᱢᱢᱚᱛᱤ ᱱᱚᱴᱤᱥ ᱯᱟᱲᱦᱟᱣ ᱠᱮᱫᱟᱹᱧ ᱟᱨ ᱤᱧᱟᱜ ᱱᱤᱡᱮᱨᱟᱜ ᱰᱮᱴᱟ ᱯᱨᱚᱥᱮᱥᱤᱝ ᱞᱟᱹᱜᱤᱫ ᱥᱚᱢᱢᱚᱛᱤ ᱮᱢᱮᱫᱟᱹᱧ।",
    sd: "مون هي رضامندی نوٽيس پڙهي ورتي آهي ۽ مان پنهنجي ذاتي ڊيٽا جي پروسيسنگ لاءِ رضامندي ڏيان ٿو/ٿي.",
    ne: "मैले यो सहमति सूचना पढेको छु र म मेरो व्यक्तिगत डेटाको प्रशोधनको लागि सहमति दिन्छु।",
    brx: "आं बे सहमति सूचना पारिजाबो आरो आं आंनि मोनसे लैसोगोनां डेटा प्रोसेसिंगनि थाखाय सहमति होनाय।",
    doi: "मैं एह् सहमति सूचना पढ़ी ऐ ते मैं अपने निजी डेटा दे प्रोसेसिंग लेई सहमति देना आं।",
    kok: "हांव ही संमती सूचना वाचली आनी हांव म्हज्या वैयक्तीक डेटाच्या प्रक्रियेक संमती दितां।",
    mni: "ꯑꯩꯅ ꯃꯁꯤꯒꯤ ꯑꯌꯥꯕ ꯄꯥꯎꯆꯦ ꯄꯥꯕꯤꯔꯦ ꯑꯃꯁꯨꯡ ꯑꯩꯒꯤ ꯃꯤꯑꯣꯏꯕꯒꯤ ꯗꯦꯇꯥ ꯄ꯭ꯔꯣꯁꯦꯁꯤꯡꯒꯤꯗꯃꯛ ꯑꯌꯥꯕ ꯄꯤꯔꯦ꯫",
    sa: "अहं सहमतिसूचनां पठितवान् अस्मि तथा च मम व्यक्तिगतदत्तांशस्य प्रक्रियायै सहमतिं ददामि।"
  },
  agree: {
    en: "I Agree", hi: "मैं सहमत हूं", bn: "আমি সম্মত", mr: "मी संमती देतो/देते", te: "నేను సమ్మతిస్తున్నాను", ta: "நான் ஒப்புக்கொள்கிறேன்", gu: "હું સંમત છું", ur: "میں رضامند ہوں", kn: "ನಾನು ಸಮ್ಮತಿಸುತ್ತೇನೆ", ml: "ഞാൻ സമ്മതിക്കുന്നു", or: "ମୁଁ ସମ୍ମତ", pa: "ਮੈਂ ਸਹਿਮਤ ਹਾਂ", as: "মই সন্মত", mai: "हम सहमत छी", sat: "ᱤᱧ ᱥᱚᱢᱢᱚᱛ", sd: "مان رضامند آهيان", ne: "म सहमत छु", brx: "आं सहमति", doi: "मैं सहमत आं", kok: "हांव संमती दितां", mni: "ꯑꯩ ꯑꯌꯥꯕ ꯄꯤꯔꯦ", sa: "अहं सहमतः अस्मि"
  },
  back: {
    en: "Back to Form →", hi: "फॉर्म पर वापस जाएं →", bn: "ফর্মে ফিরে যান →", mr: "फॉर्मवर परत जा →", te: "ఫారమ్‌కు తిరిగి వెళ్లండి →", ta: "படிவத்திற்குத் திரும்பு →", gu: "ફોર્મ પર પાછા જાઓ →", ur: "فارم پر واپس جائیں →", kn: "ಫಾರ್ಮ್‌ಗೆ ಹಿಂತಿರುಗಿ →", ml: "ഫോമിലേക്ക് മടങ്ങുക →", or: "ଫର୍ମକୁ ଫେରନ୍ତୁ →", pa: "ਫਾਰਮ 'ਤੇ ਵਾਪਸ ਜਾਓ →", as: "ফৰ্মলৈ উভতি যাওক →", mai: "फॉर्म पर वापस जाउ →", sat: "ᱯᱷᱚᱨᱢ ᱛᱮ ᱨᱩᱣᱟᱹᱲ ᱢᱮ →", sd: "فارم ڏانهن واپس وڃو →", ne: "फारममा फर्कनुहोस् →", brx: "फर्मआव फिरनि →", doi: "फॉर्म पर वापस जाओ →", kok: "फॉर्मार परत वच्चे →", mni: "ꯐꯣꯔꯝꯗ ꯍꯜꯂꯨ →", sa: "प्रपत्रं प्रति गच्छतु →"
  },
  toast: {
    en: "✅ Consent recorded. You can now proceed to the form.",
    hi: "✅ सहमति दर्ज की गई। अब आप फॉर्म पर आगे बढ़ सकते हैं।",
    bn: "✅ সম্মতি রেকর্ড করা হয়েছে। এখন আপনি ফর্মে এগিয়ে যেতে পারেন।",
    mr: "✅ संमती नोंदवली गेली. आता तुम्ही फॉर्मवर जाऊ शकता.",
    te: "✅ సమ్మతి నమోదు చేయబడింది. ఇప్పుడు మీరు ఫారమ్‌కు కొనసాగవచ్చు.",
    ta: "✅ ஒப்புதல் பதிவு செய்யப்பட்டது. இப்போது நீங்கள் படிவத்திற்குச் செல்லலாம்."
  }
};

export default function ConsentCapture({ language }: { language: string }) {
  const [isChecked, setIsChecked] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const given = localStorage.getItem("dpdpa_consent_given") === "true";
      setIsChecked(given);
    }
  }, []);

  const handleConsent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) {
      const consentData = {
        noticeVersion: new Date().toISOString().split("T")[0],
        consentTimestamp: new Date().toISOString(),
        language: language,
        page: "/consent-notice",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      };
      localStorage.setItem("dpdpa_consent_record", JSON.stringify(consentData));
      localStorage.setItem("dpdpa_consent_given", "true");
      
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      localStorage.removeItem("dpdpa_consent_given");
      localStorage.removeItem("dpdpa_consent_record");
    }
  };

  const getText = (obj: Record<string, string>) => obj[language] || obj["en"];

  return (
    <section className="mt-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 relative">
      <div className="flex items-start gap-3">
        <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-white mb-2">
            {getText(translations.title)}
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            {getText(translations.desc)}
          </p>
          <div className="flex items-start gap-2 mb-4">
            <input
              type="checkbox"
              id="consent-agree-notice"
              checked={isChecked}
              onChange={handleConsent}
              className="w-4 h-4 mt-1 accent-purple-500 cursor-pointer"
            />
            <label htmlFor="consent-agree-notice" className="text-sm text-gray-300 cursor-pointer">
              {getText(translations.agree)}
            </label>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 text-purple-300 text-sm transition-all"
          >
            {getText(translations.back)}
          </Link>
        </div>
      </div>

      {/* Toast Popup */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-medium z-50 animate-bounce">
          <CheckCircle className="w-5 h-5" /> {getText(translations.toast)}
        </div>
      )}
    </section>
  );
}