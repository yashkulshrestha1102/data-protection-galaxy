"use client";

import Link from "next/link";
import { ArrowLeft, Shield, FileText, Clock, UserCheck, AlertCircle, Globe } from "lucide-react";
import { useState } from "react";

// Language translations (Short versions for the main intro, so users understand the gist)
const translations: Record<string, any> = {
  en: {
    title: "Consent Notice",
    intro: "This Consent Notice is issued by Businezexcellence StartX LLP, operating the Legal Galaxy platform, in compliance with the DPDP Act 2023 and DPDP Rules 2025.",
    purpose: "We collect your data (Name, Email, Phone) to respond to your inquiries and provide requested documents. You can withdraw consent anytime.",
    grievance: "Grievance Officer: Shilpi Kulshrestha - grievance@businezexcellence.com"
  },
  hi: {
    title: "सहमति सूचना (Consent Notice)",
    intro: "यह सहमति सूचना बिजनेस एक्सीलेंस स्टार्टX LLP द्वारा जारी की गई है, जो DPDP अधिनियम 2023 और DPDP नियम 2025 के अनुपालन में है।",
    purpose: "हम आपकी पूछताछ का जवाब देने और दस्तावेज़ भेजने के लिए आपका डेटा (नाम, ईमेल, फोन) एकत्र करते हैं। आप कभी भी सहमति वापस ले सकते हैं।",
    grievance: "शिकायत अधिकारी: शिल्पी कुलश्रेष्ठ - grievance@businezexcellence.com"
  },
  bn: {
    title: "সম্মতি বিজ্ঞপ্তি (Consent Notice)",
    intro: "এই সম্মতি বিজ্ঞপ্তিটি বিজনেস এক্সিলেন্স স্টার্টএক্স এলএলপি দ্বারা জারি করা হয়েছে, যা DPDP আইন 2023 এবং DPDP বিধি 2025 মেনে চলে।",
    purpose: "আমরা আপনার জিজ্ঞাসার উত্তর দিতে এবং নথি পাঠাতে আপনার ডেটা (নাম, ইমেল, ফোন) সংগ্রহ করি। আপনি যেকোনো সময় সম্মতি প্রত্যাহার করতে পারেন।",
    grievance: "অভিযোগ কর্মকর্তা: শিল্পী কুলশ্রেষ্ঠ - grievance@businezexcellence.com"
  },
  mr: {
    title: "संमती सूचना (Consent Notice)",
    intro: "ही संमती सूचना बिझनेस एक्सलन्स स्टार्टएक्स एलएलपी द्वारे जारी केली आहे, जी DPDP कायदा 2023 आणि DPDP नियम 2025 चे पालन करते.",
    purpose: "आम्ही तुमच्या चौकशीला उत्तर देण्यासाठी आणि कागदपत्रे पाठवण्यासाठी तुमचा डेटा (नाव, ईमेल, फोन) गोळा करतो. तुम्ही कधीही संमती मागे घेऊ शकता.",
    grievance: "तक्रार अधिकारी: शिल्पी कुलश्रेष्ठ - grievance@businezexcellence.com"
  },
  te: {
    title: "సమ్మతి నోటీసు (Consent Notice)",
    intro: "ఈ సమ్మతి నోటీసు బిజినెస్ ఎక్సలెన్స్ స్టార్ట్ఎక్స్ LLP ద్వారా జారీ చేయబడింది, ఇది DPDP చట్టం 2023 మరియు DPDP నియమాలు 2025కి అనుగుణంగా ఉంటుంది.",
    purpose: "మేము మీ విచారణలకు సమాధానం ఇవ్వడానికి మరియు పత్రాలను పంపడానికి మీ డేటా (పేరు, ఇమెయిల్, ఫోన్)ని సేకరిస్తాము. మీరు ఎప్పుడైనా సమ్మతిని ఉపసంహరించుకోవచ్చు.",
    grievance: "ఫిర్యాదు అధికారి: శిల్పి కులశ్రేష్ఠ - grievance@businezexcellence.com"
  },
  ta: {
    title: "ஒப்புதல் அறிவிப்பு (Consent Notice)",
    intro: "இந்த ஒப்புதல் அறிவிப்பு பிசினஸ் எக்சலன்ஸ் ஸ்டார்ட்எக்ஸ் LLP ஆல் வழங்கப்பட்டது, இது DPDP சட்டம் 2023 மற்றும் DPDP விதிகள் 2025 இன் படி உள்ளது.",
    purpose: "உங்கள் விசாரணைகளுக்கு பதிலளிக்கவும், ஆவணங்களை அனுப்பவும் உங்கள் தரவை (பெயர், மின்னஞ்சல், தொலைபேசி) நாங்கள் சேகரிக்கிறோம். நீங்கள் எப்போது வேண்டுமானாலும் ஒப்புதலை வாபஸ் பெறலாம்.",
    grievance: "குறைதீர் அதிகாரி: ஷில்பி குல்ஷ்ரேஷ்டா - grievance@businezexcellence.com"
  },
  gu: {
    title: "સંમતિ સૂચના (Consent Notice)",
    intro: "આ સંમતિ સૂચના બિઝનેસ એક્સલન્સ સ્ટાર્ટએક્સ એલએલપી દ્વારા જારી કરવામાં આવી છે, જે DPDP કાયદો 2023 અને DPDP નિયમો 2025નું પાલન કરે છે.",
    purpose: "અમે તમારી પૂછપરછનો જવાબ આપવા અને દસ્તાવેજો મોકલવા માટે તમારો ડેટા (નામ, ઈમેલ, ફોન) એકત્રિત કરીએ છીએ. તમે ગમે ત્યારે સંમતિ પાછી ખેંચી શકો છો.",
    grievance: "ફરિયાદ અધિકારી: શિલ્પી કુલશ્રેષ્ઠ - grievance@businezexcellence.com"
  },
  ur: {
    title: "رضامندی کا نوٹس (Consent Notice)",
    intro: "یہ رضامندی کا نوٹس بزنس ایکسیلنس اسٹارٹ ایکس ایل ایل پی کی طرف سے جاری کیا گیا ہے، جو DPDP ایکٹ 2023 اور DPDP رولز 2025 کی تعمیل کرتا ہے۔",
    purpose: "ہم آپ کے سوالات کا جواب دینے اور دستاویزات بھیجنے کے لیے آپ کا ڈیٹا (نام، ای میل، فون) جمع کرتے ہیں۔ آپ کسی بھی وقت رضامندی واپس لے سکتے ہیں۔",
    grievance: "شکایت افسر: شلپی کلشرشٹھا - grievance@businezexcellence.com"
  },
  kn: {
    title: "ಸಮ್ಮತಿ ಸೂಚನೆ (Consent Notice)",
    intro: "ಈ ಸಮ್ಮತಿ ಸೂಚನೆಯನ್ನು ಬಿಸಿನೆಸ್ ಎಕ್ಸಲೆನ್ಸ್ ಸ್ಟಾರ್ಟ್‌ಎಕ್ಸ್ LLP ನೀಡಿದೆ, ಇದು DPDP ಕಾಯ್ದೆ 2023 ಮತ್ತು DPDP ನಿಯಮಗಳು 2025 ಅನ್ನು ಅನುಸರಿಸುತ್ತದೆ.",
    purpose: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು ಮತ್ತು ದಾಖಲೆಗಳನ್ನು ಕಳುಹಿಸಲು ನಾವು ನಿಮ್ಮ ಡೇಟಾವನ್ನು (ಹೆಸರು, ಇಮೇಲ್, ಫೋನ್) ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. ನೀವು ಯಾವಾಗ ಬೇಕಾದರೂ ಸಮ್ಮತಿಯನ್ನು ಹಿಂಪಡೆಯಬಹುದು.",
    grievance: "ಕುಂದುಕೊರತೆ ಅಧಿಕಾರಿ: ಶಿಲ್ಪಿ ಕುಲಶ್ರೇಷ್ಠ - grievance@businezexcellence.com"
  },
  ml: {
    title: "സമ്മത വിജ്ഞാപനം (Consent Notice)",
    intro: "ഈ സമ്മത വിജ്ഞാപനം ബിസിനസ് എക്സലൻസ് സ്റ്റാർട്ട്എക്സ് LLP നൽകുന്നതാണ്, ഇത് DPDP ആക്ട് 2023, DPDP ചട്ടങ്ങൾ 2025 എന്നിവ പാലിക്കുന്നു.",
    purpose: "നിങ്ങളുടെ ചോദ്യങ്ങൾക്ക് മറുപടി നൽകാനും രേഖകൾ അയയ്ക്കാനും ഞങ്ങൾ നിങ്ങളുടെ ഡാറ്റ (പേര്, ഇമെയിൽ, ഫോൺ) ശേഖരിക്കുന്നു. നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും സമ്മതം പിൻവലിക്കാം.",
    grievance: "പരാതി ഓഫീസർ: ശിൽപി കുൽശ്രേഷ്ഠ - grievance@businezexcellence.com"
  },
  or: {
    title: "ସମ୍ମତି ସୂଚନା (Consent Notice)",
    intro: "ଏହି ସମ୍ମତି ସୂଚନା ବିଜନେସ୍ ଏକ୍ସିଲେନ୍ସ ଷ୍ଟାର୍ଟଏକ୍ସ LLP ଦ୍ୱାରା ଜାରି କରାଯାଇଛି, ଯାହା DPDP ଆଇନ 2023 ଏବଂ DPDP ନିୟମ 2025 ଅନୁସରଣ କରେ।",
    purpose: "ଆମେ ଆପଣଙ୍କ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା ଏବଂ ଦଲିଲ ପଠାଇବା ପାଇଁ ଆପଣଙ୍କ ତଥ୍ୟ (ନାମ, ଇମେଲ, ଫୋନ) ସଂଗ୍ରହ କରୁ। ଆପଣ ଯେକୌଣସି ସମୟରେ ସମ୍ମତି ପ୍ରତ୍ୟାହାର କରିପାରିବେ।",
    grievance: "ଅଭିଯୋଗ ଅଧିକାରୀ: ଶିଲ୍ପୀ କୁଲଶ୍ରେଷ୍ଠ - grievance@businezexcellence.com"
  },
  pa: {
    title: "ਸਹਿਮਤੀ ਨੋਟਿਸ (Consent Notice)",
    intro: "ਇਹ ਸਹਿਮਤੀ ਨੋਟਿਸ ਬਿਜ਼ਨਸ ਐਕਸੀਲੈਂਸ ਸਟਾਰਟਐਕਸ LLP ਦੁਆਰਾ ਜਾਰੀ ਕੀਤਾ ਗਿਆ ਹੈ, ਜੋ DPDP ਐਕਟ 2023 ਅਤੇ DPDP ਨਿਯਮ 2025 ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ।",
    purpose: "ਅਸੀਂ ਤੁਹਾਡੇ ਸਵਾਲਾਂ ਦਾ ਜਵਾਬ ਦੇਣ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਭੇਜਣ ਲਈ ਤੁਹਾਡਾ ਡੇਟਾ (ਨਾਮ, ਈਮੇਲ, ਫੋਨ) ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ। ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਸਹਿਮਤੀ ਵਾਪਸ ਲੈ ਸਕਦੇ ਹੋ।",
    grievance: "ਸ਼ਿਕਾਇਤ ਅਧਿਕਾਰੀ: ਸ਼ਿਲਪੀ ਕੁਲਸ਼੍ਰੇਸ਼ਠ - grievance@businezexcellence.com"
  },
  as: {
    title: "সন্মতি জাননী (Consent Notice)",
    intro: "এই সন্মতি জাননী ব্যৱসায় এক্সিলেন্স ষ্টাৰ্টএক্স LLP-য়ে জাৰি কৰিছে, যি DPDP আইন 2023 আৰু DPDP নিয়ম 2025 মানি চলে।",
    purpose: "আমি আপোনাৰ প্ৰশ্নৰ উত্তৰ দিবলৈ আৰু নথি পঠিয়াবলৈ আপোনাৰ ডেটা (নাম, ইমেইল, ফোন) সংগ্ৰহ কৰোঁ। আপুনি যিকোনো সময়তে সন্মতি প্ৰত্যাহাৰ কৰিব পাৰে।",
    grievance: "অভিযোগ বিষয়া: শিল্পী কুলশ্ৰেষ্ঠ - grievance@businezexcellence.com"
  },
  mai: {
    title: "सहमति सूचना (Consent Notice)",
    intro: "ई सहमति सूचना बिजनेस एक्सीलेंस स्टार्टX LLP द्वारा जारी कएल गेल अछि, जे DPDP अधिनियम 2023 आ DPDP नियम 2025 क पालन करैत अछि।",
    purpose: "हम अहाँक पुछताक जवाब दै आ दस्तावेज पठबाक लेल अहाँक डेटा (नाम, ईमेल, फोन) एकत्र करैत छी। अहाँ कखनो सेहो सहमति वापस ल' सकैत छी।",
    grievance: "शिकायत अधिकारी: शिल्पी कुलश्रेष्ठ - grievance@businezexcellence.com"
  },
  sat: {
    title: "ᱥᱚᱢᱢᱚᱛᱤ ᱱᱚᱴᱤᱥ (Consent Notice)",
    intro: "ᱱᱚᱶᱟ ᱥᱚᱢᱢᱚᱛᱤ ᱱᱚᱴᱤᱥ ᱫᱚ ᱵᱤᱡᱱᱮᱥ ᱮᱠᱥᱤᱞᱮᱱᱥ ᱥᱴᱟᱨᱴᱮᱠᱥ LLP ᱦᱚᱛᱮᱛᱮ ᱮᱢ ᱟᱠᱟᱱᱟ, ᱡᱟᱦᱟᱸ ᱫᱚ DPDP ᱟᱹᱨᱤ 2023 ᱟᱨ DPDP ᱱᱤᱭᱚᱢ 2025 ᱠᱚ ᱯᱟᱞᱚᱱ ᱮᱫᱟ᱾",
    purpose: "ᱟᱞᱮ ᱟᱢᱟᱜ ᱠᱩᱠᱞᱤ ᱨᱮᱱᱟᱜ ᱛᱮᱞᱟ ᱮᱢ ᱟᱨ ᱫᱚᱞᱤᱞ ᱠᱚ ᱠᱩᱞ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱰᱟᱴᱟ (ᱧᱩᱛᱩᱢ, ᱤᱢᱮᱞ, ᱯᱷᱚᱱ) ᱠᱚ ᱡᱟᱣᱨᱟᱭᱮᱫᱟ᱾ ᱟᱢ ᱟᱢᱟᱜ ᱥᱚᱢᱢᱚᱛᱤ ᱡᱟᱦᱟᱸ ᱚᱠᱛᱚ ᱨᱮᱜᱮ ᱨᱩᱣᱟᱹᱲ ᱡᱚᱝ ᱫᱟᱲᱮᱭᱟᱜᱼᱟᱢ᱾",
    grievance: "ᱚᱠᱥᱮᱯ ᱚᱯᱷᱤᱥᱟᱨ: ᱥᱤᱞᱯᱤ ᱠᱩᱞᱥᱨᱮᱥᱴᱷᱟ - grievance@businezexcellence.com"
  },
  sd: {
    title: "رضامندی نوٹس (Consent Notice)",
    intro: "هي رضامندی نوٹس بزنس ايڪسي لينس اسٽارٽ ايڪس ايل ايل پي طرفان جاري ڪيو ويو آهي، جيڪو DPDP ايڪٽ 2023 ۽ DPDP ضابطن 2025 جي تعميل ڪري ٿو.",
    purpose: "اسان توهان جي سوالن جو جواب ڏيڻ ۽ دستاويز موڪلڻ لاءِ توهان جو ڊيٽا (نالو، اي ميل، فون) گڏ ڪريون ٿا. توهان ڪنهن به وقت رضامندي واپس وٺي سگهو ٿا.",
    grievance: "شڪايت آفيسر: شلپي ڪلشرشٺا - grievance@businezexcellence.com"
  },
  ne: {
    title: "सहमति सूचना (Consent Notice)",
    intro: "यो सहमति सूचना बिजनेस एक्सीलेन्स स्टार्टएक्स LLP द्वारा जारी गरिएको हो, जुन DPDP ऐन 2023 र DPDP नियम 2025 को पालना गर्दछ।",
    purpose: "हामी तपाईंको जिज्ञासाको जवाफ दिन र कागजातहरू पठाउन तपाईंको डेटा (नाम, इमेल, फोन) सङ्कलन गर्छौं। तपाईं कुनै पनि समयमा सहमति फिर्ता लिन सक्नुहुन्छ।",
    grievance: "उजुरी अधिकृत: शिल्पी कुलश्रेष्ठ - grievance@businezexcellence.com"
  },
  brx: {
    title: "सहमति सूचना (Consent Notice)",
    intro: "बेबार सहमति सूचना बिजनेस एक्सीलेंस स्टार्टएक्स LLP द्वारा जारी खालामदों, जाय DPDP आइन 2023 आ DPDP नियम 2025 मानिथार।",
    purpose: "जों नोंनि सोंथिनि फिन जाबाब होनो आ बिलाइ हरखायनो नोंनि डेटा (मुं, इमेल, फोन) दाज्लामो। नों जायखिजाया समाव सहमति फिन लानो हायो।",
    grievance: "गुनासो अफिसार: शिल्पी कुलश्रेष्ठ - grievance@businezexcellence.com"
  },
  doi: {
    title: "सहमति सूचना (Consent Notice)",
    intro: "एह् सहमति सूचना बिजनेस एक्सीलेंस स्टार्टएक्स LLP द्वारा जारी कीती गेदी ऐ, जेह्ड़ी DPDP ऐक्ट 2023 ते DPDP नियम 2025 दा पालन करदी ऐ।",
    purpose: "असीं तुंदे सवालें दा जवाब देने ते दस्तावेज भेजने लेई तुंदा डेटा (नां, ईमेल, फोन) इकट्ठा करदे आं। तुस किसे बी बक्ख ते सहमति वापस लैई सकदे ओ।",
    grievance: "शिकायत अधिकारी: शिल्पी कुलश्रेष्ठ - grievance@businezexcellence.com"
  },
  kok: {
    title: "संमती सूचना (Consent Notice)",
    intro: "ही संमती सूचना बिझनेस एक्सलन्स स्टार्टएक्स एलएलपी हाणून जारी केल्या, जी DPDP कायदो 2023 आनी DPDP नियम 2025 पाळटा.",
    purpose: "आमी तुमच्या प्रस्नांचो जाप दिवपाक आनी दस्तऐवज धाडपाक तुमचो डेटा (नांव, ईमेल, फोन) एकठांय करतात. तुमी केन्नाय संमती फाटीं घेवंक शकतात.",
    grievance: "तक्रार अधिकारी: शिल्पी कुलश्रेष्ठ - grievance@businezexcellence.com"
  },
  mni: {
    title: "ꯑꯌꯥꯕ ꯄꯥꯎꯆꯦ (Consent Notice)",
    intro: "ꯃꯁꯤ ꯕꯤꯖꯅꯦꯁ ꯏꯛꯁꯦꯂꯦꯟꯁ ꯁ꯭ꯇꯥꯔꯠ ꯑꯦꯛꯁ LLP ꯅ ꯄꯨꯊꯣꯛꯄ ꯑꯌꯥꯕ ꯄꯥꯎꯆꯦ ꯑꯃꯅꯤ, ꯃꯁꯤ DPDP ꯑꯦꯛꯇ 2023 ꯑꯃꯁꯨꯡ DPDP ꯔꯨꯜ 2025 ꯒꯤ ꯃꯇꯨꯡ ꯏꯟꯅ ꯁꯦꯝꯃꯤ.",
    purpose: "ꯑꯩꯈꯣꯌꯅ ꯅꯍꯥꯛꯀꯤ ꯋꯥꯍꯪꯒꯤ ꯄꯥꯎꯈꯨꯝ ꯄꯤꯅꯕ ꯑꯃꯁꯨꯡ ꯗꯣꯀꯨꯃꯦꯟꯇ ꯄꯨꯊꯣꯛꯅꯕ ꯅꯍꯥꯛꯀꯤ ꯗꯦꯇꯥ (ꯃꯃꯤꯡ, ꯏꯃꯦꯜ, ꯐꯣꯟ) ꯈꯣꯝꯖꯤꯜꯂꯤ. ꯅꯍꯥꯛꯅ ꯃꯇꯝ ꯑꯃꯍꯥꯛꯇ ꯑꯌꯥꯕ ꯂꯧꯊꯣꯛꯅꯔꯝꯒꯅꯤ.",
    grievance: "ꯒ꯭ꯔꯤꯚꯦꯟꯁ ꯑꯣꯐꯤꯁꯔ: ꯁꯤꯜꯄꯤ ꯀꯨꯜꯁ꯭ꯔꯦꯁ꯭ꯊ - grievance@businezexcellence.com"
  }
};

// Dropdown options
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
  { code: "sa", label: "संस्कृतम् (Sanskrit)" } // (Sanskrit added for completeness, though not heavily used in legal)
];


export default function ConsentNoticePage() {
  const [language, setLanguage] = useState("en");

  const t = translations[language] || translations["en"];

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
              <h1 className="text-3xl font-bold text-white">{t.title}</h1>
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
            {/* Translated Intro Section */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <p className="text-white font-medium mb-2">{t.intro}</p>
              <p className="text-gray-300">{t.purpose}</p>
              <p className="text-gray-400 mt-4 text-xs">{t.grievance}</p>
            </div>

            {/* Detailed Sections (English + Hindi only, because translations of legal text are huge) */}
            {language === "en" ? (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    1. Personal Data We Collect
                  </h2>
                  <p>When you submit a form on our website, we may collect:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">Identity Data:</strong> First name, last name</li>
                    <li><strong className="text-white">Contact Data:</strong> Work email address, phone number</li>
                    <li><strong className="text-white">Professional Data:</strong> Company name, job title, company size, industry</li>
                    <li><strong className="text-white">Communication Data:</strong> Your message, challenges, or query description</li>
                  </ul>

                  {/* Itemised Table */}
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
                          <td className="px-4 py-3 text-gray-300 text-sm">To reply to your inquiry and send requested documents.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Phone Number</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">For urgent compliance-related communication.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Company Name & Job Title</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">To understand your organizational requirements.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Industry & Company Size</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">To analyze compliance program maturity.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>Query/Message</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">To understand and respond to your specific request.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    2. Purpose of Processing
                  </h2>
                  <p>We process your personal data for the following specific purposes:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">To respond to your inquiries:</strong> Contacting you about your Demo Request or Contact Form submission.</li>
                    <li><strong className="text-white">To provide requested services:</strong> Sending you generated documents (Privacy Policy, Consent Notice, DPAs, etc.) via email.</li>
                    <li><strong className="text-white">To improve our services:</strong> Understanding how users interact with our website (only with analytics consent).</li>
                    <li><strong className="text-white">To comply with legal obligations:</strong> Maintaining records as required by law.</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ We will NOT use your personal data for any other purpose without obtaining fresh consent from you.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Data Retention</h2>
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
                    4. Your Rights as a Data Principal
                  </h2>
                  <p>Under the DPDP Act 2023, you have the following rights:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">Right to Access:</strong> Request a summary of personal data we process about you.</li>
                    <li><strong className="text-white">Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
                    <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw your consent at any time.</li>
                    <li><strong className="text-white">Right to Grievance Redressal:</strong> File a complaint with our Grievance Officer.</li>
                    <li><strong className="text-white">Right to Nominate:</strong> Nominate another individual to exercise your rights in case of death or incapacity.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">5. How to Withdraw Your Consent</h2>
                  <p>You can withdraw your consent at any time by:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Emailing us at <a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> with the subject line "Withdraw Consent".</li>
                    <li>Writing to our Grievance Officer at <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a>.</li>
                  </ul>
                  <p className="mt-3">
                    Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal. We will process your request within <strong className="text-white">30 days</strong>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. Grievance Officer</h2>
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
                    7. Important Notice
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
            ) : language === "hi" ? (
              // HINDI CONTENT
              <>
                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    1. हम कौन सा डेटा एकत्र करते हैं?
                  </h2>
                  <p>जब आप हमारी वेबसाइट पर फॉर्म सबमिट करते हैं, तो हम एकत्र कर सकते हैं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">पहचान डेटा:</strong> पहला नाम, अंतिम नाम</li>
                    <li><strong className="text-white">संपर्क डेटा:</strong> कार्य ईमेल पता, फ़ोन नंबर</li>
                    <li><strong className="text-white">पेशेवर डेटा:</strong> कंपनी का नाम, नौकरी का शीर्षक, कंपनी का आकार, उद्योग</li>
                    <li><strong className="text-white">संचार डेटा:</strong> आपका संदेश, चुनौतियाँ, या प्रश्न विवरण</li>
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
                          <td className="px-4 py-3 text-gray-300 text-sm">आपकी पूछताछ का जवाब देने और अनुरोधित दस्तावेज़ भेजने के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>फ़ोन नंबर</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">तत्काल अनुपालन-संबंधी संचार के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>कंपनी का नाम और पद</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आपकी संगठनात्मक आवश्यकताओं को समझने के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>उद्योग और कंपनी का आकार</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">अनुपालन कार्यक्रम की परिपक्वता का विश्लेषण करने के लिए।</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-300 text-sm"><strong>संदेश</strong></td>
                          <td className="px-4 py-3 text-gray-300 text-sm">आपके विशिष्ट अनुरोध को समझने और उसका जवाब देने के लिए।</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    2. प्रसंस्करण का उद्देश्य
                  </h2>
                  <p>हम आपके व्यक्तिगत डेटा को निम्नलिखित विशिष्ट उद्देश्यों के लिए संसाधित करते हैं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><strong className="text-white">आपकी पूछताछ का जवाब देने के लिए:</strong> आपके डेमो अनुरोध या संपर्क फ़ॉर्म सबमिशन के बारे में आपसे संपर्क करना।</li>
                    <li><strong className="text-white">अनुरोधित सेवाएं प्रदान करने के लिए:</strong> आपको ईमेल के माध्यम से जनरेट किए गए दस्तावेज़ (गोपनीयता नीति, सहमति सूचना, डीपीए, आदि) भेजना।</li>
                    <li><strong className="text-white">हमारी सेवाओं को बेहतर बनाने के लिए:</strong> यह समझना कि उपयोगकर्ता हमारी वेबसाइट के साथ कैसे इंटरैक्ट करते हैं (केवल एनालिटिक्स सहमति के साथ)।</li>
                    <li><strong className="text-white">कानूनी दायित्वों का पालन करने के लिए:</strong> कानून द्वारा आवश्यक रिकॉर्ड बनाए रखना।</li>
                  </ul>
                  <p className="mt-3 text-yellow-400 text-xs">
                    ⚠️ हम आपकी नई सहमति प्राप्त किए बिना आपके व्यक्तिगत डेटा का उपयोग किसी अन्य उद्देश्य के लिए नहीं करेंगे।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">3. डेटा प्रतिधारण (Data Retention)</h2>
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
                    4. डेटा प्रिंसिपल के रूप में आपके अधिकार
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
                  <h2 className="text-xl font-semibold text-white mb-3">5. अपनी सहमति कैसे वापस लें?</h2>
                  <p>आप कभी भी अपनी सहमति वापस ले सकते हैं:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li><a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> पर "Withdraw Consent" विषय के साथ ईमेल करके।</li>
                    <li><a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> पर हमारे शिकायत अधिकारी को लिखकर।</li>
                  </ul>
                  <p className="mt-3">
                    सहमति वापस लेने से पहले सहमति के आधार पर प्रसंस्करण की वैधता प्रभावित नहीं होगी। हम <strong className="text-white">30 दिनों</strong> के भीतर आपके अनुरोध पर कार्रवाई करेंगे।
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white mb-3">6. शिकायत अधिकारी (Grievance Officer)</h2>
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
                    7. महत्वपूर्ण सूचना
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
            ) : (
              // FALLBACK FOR OTHER LANGUAGES (Showing English detailed text with a note)
              <div className="text-center py-8">
                <p className="text-gray-400">Detailed legal sections are currently available in English and Hindi.</p>
                <button 
                  onClick={() => setLanguage("en")}
                  className="mt-4 px-6 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-all"
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