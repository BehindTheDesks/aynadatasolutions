import React, { useState, useRef, useEffect } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

interface FAQItemProps {
  question: string;
  answer: any;
  defaultOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="bg-[#1a1a2e] rounded-md overflow-hidden shadow-md mb-4 transition-all duration-300 ease-in-out">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-xl px-4 py-3 flex justify-between items-center text-left bg-brand-yellow text-data-dark-bg font-semibold focus:outline-none"
      >
        <span>{question}</span>
        <span>{isOpen ? <FiMinus /> : <FiPlus />}</span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="transition-all  duration-500 ease-in-out overflow-hidden bg-[#000000] border-t border-black"
      >
        <div className="px-4 py-3  text-gray-200 text-base">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
