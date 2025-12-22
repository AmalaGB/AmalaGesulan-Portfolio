import React, { useState, useEffect } from "react";

const TypewriterText = () => {
  const phrases = [
    "Actively seeking Data Analyst / Data Engineer / GenAI ML roles",
    "Data Analyst & Data Engineering Enthusiast & ML Practitioner",
    "Turning data into actionable insights",
    "Building scalable data pipelines and analytics systems",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [stopped, setStopped] = useState(false); // 🔑 HARD STOP FLAG

  useEffect(() => {
    if (stopped) return; // ⛔ absolutely nothing runs after stop

    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      setText(currentPhrase.slice(0, text.length + 1));

      // when phrase fully typed
      if (text === currentPhrase) {
        // if last phrase → STOP FOREVER
        if (phraseIndex === phrases.length - 1) {
          setStopped(true);
          return;
        }

        // move to next phrase
        setPhraseIndex(phraseIndex + 1);
        setText("");
      }
    }, 75);

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, stopped]);

  return <span className="text-teal-400">{text}</span>;
};

export default TypewriterText;
