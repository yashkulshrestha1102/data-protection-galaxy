// components/chat/VoiceAgent.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export function VoiceAgent() {
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Web Speech API setup (Chrome/Edge only)
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Browser voice not supported. Use Chrome.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = async (event: any) => {
      const userText = event.results[0][0].transcript;
      setIsListening(false);
      setIsProcessing(true);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userText }),
        });
        const data = await response.json();

        // Bolo AI ka jawab
        if (data.reply) {
          const utterance = new SpeechSynthesisUtterance(data.reply);
          utterance.rate = 1;
          utterance.pitch = 1;
          window.speechSynthesis.speak(utterance);
        }

        // Navigate if AI said so
        if (data.type === 'navigate' && data.route) {
          router.push(data.route);
        }
      } catch (error) {
        console.error('Chat failed:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, [router]);

  const startListening = () => {
    if (isListening || isProcessing) return;
    setIsListening(true);
    recognitionRef.current?.start();
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9999] flex flex-col items-end gap-4">
      {isProcessing ? (
        <div className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
          <span className="w-2 h-2 bg-white rounded-full animate-ping" />
          Thinking...
        </div>
      ) : isListening ? (
        <div className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Listening...
        </div>
      ) : (
        <button
          onClick={startListening}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 font-medium"
        >
          🎙️ Talk to AI
        </button>
      )}
    </div>
  );
}
