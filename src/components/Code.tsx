import { useState, useEffect } from "react";

// Define type for a word object
interface Word {
  text: string;
  color: string;
}

// Helper function for indenting text
const indent = (spaces: number): string => " ".repeat(spaces);

// Custom hook for typing animation
function useTypingAnimation(words: Word[], typingSpeedInitial: number = 20) {
  const [typedWords, setTypedWords] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (currentWordIndex >= words.length) return;

    const currentWord = words[currentWordIndex].text;
    let typingTimeout: ReturnType<typeof setTimeout>;

    // Typing effect
    if (text.length < currentWord.length) {
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeedInitial);
    } else {
      // Word fully typed, add to typedWords and move to the next word
      setTypedWords((prev) => [...prev, words[currentWordIndex]]);
      setText(""); // Reset text for the next word
      setCurrentWordIndex((prev) => prev + 1); // Move to the next word
    }

    return () => clearTimeout(typingTimeout);
  }, [text, typingSpeedInitial, currentWordIndex, words]);

  return { typedWords, currentText: text };
}

// Colorful Text Component
function ColorfulText({ words }: { words: Word[] }) {
  return (
    <div>
      {words.map((word, index) => (
        <span key={index} className={word.color}>
          {word.text}
        </span>
      ))}
    </div>
  );
}

export default function Code() {
  const words: Word[] = [
    { text: "const ", color: "text-indigo-400" },
    { text: "aboutMe ", color: "text-gray-300" },
    { text: "= ", color: "text-orange-500" },
    { text: "{\n", color: "text-green-400" },
    { text: indent(4) + "fullName: ", color: "text-sky-400" },
    { text: `"John Adrian Bonto",\n`, color: "text-green-400" },
    { text: indent(4) + "techStack: ", color: "text-sky-400" },
    {
      text: `"["React.js","React Native", \n`,
      color: "text-green-400",
    },
    {
      text: indent(15) + ` "Tailwind CSS", "MERN Stack"],\n`,
      color: "text-green-400",
    },
    { text: indent(4) + "role: ", color: "text-sky-400" },
    { text: `"Software Engineer",\n`, color: "text-green-400" },
    { text: indent(4) + "projects: ", color: "text-sky-400" },
    {
      text: `"20+ public repositories on GitHub &\n`,
      color: "text-green-400",
    },
    {
      text: indent(15) + `portfolio",\n`,
      color: "text-green-400",
    },
    { text: indent(4) + "education: ", color: "text-sky-400" },
    {
      text: `"Bachelor's Degree in Computer Science", \n`,
      color: "text-green-400",
    },
    { text: indent(4) + "workExperience:", color: "text-sky-400" },
    { text: indent(0) + "{\n", color: "text-green-400" },

    {
      text: indent(6) + `company: "Red Ribbon Bakeshop",\n`,
      color: "text-green-400",
    },
    {
      text: indent(6) + `position: "Production Crew",\n`,
      color: "text-green-400",
    },
    {
      text: indent(6) + `year: "2021-2023" \n`,
      color: "text-green-400",
    },
    { text: "}", color: "text-green-400" },
    { text: "};", color: "text-green-400" },
  ];

  const { typedWords, currentText } = useTypingAnimation(words);

  return (
    <div className="relative">
      <div className="flex flex-col items-center transition-all p-4">
        <div className="w-full bg-slate-200 h-7 rounded-tl-lg rounded-tr-lg flex items-center pl-2 gap-1">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <div className="text-lg p-3 bg-slate-900/80 border rounded-bl-lg rounded-br-lg w-full h-full text-slate-100 overflow-hidden ">
          <div className="jetbrains font-jetbrains w-full h-full sm:w-[538px] sm:h-[306px] text-wrap text-sm sm:text-base p-1 whitespace-pre-line sm:whitespace-pre">
            <ColorfulText
              words={[
                ...typedWords,
                { text: currentText, color: "text-sky-600" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
