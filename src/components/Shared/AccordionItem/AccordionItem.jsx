import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export default function AccordionItem({ question, isOpen, onClick }) {
  return (
    <div className="mb-4">
      <button
        className={cn(
          "w-full flex items-center justify-between p-5 text-left transition-colors duration-200 rounded-lg",
          "bg-[#f6f7f9] cursor-pointer"
        )}
        onClick={onClick}
      >
        <span className="text-gray-600 MuiTypography-body1">{question}</span>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform duration-200", 
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-5 pt-2 text-gray-600 leading-relaxed text-sm">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}