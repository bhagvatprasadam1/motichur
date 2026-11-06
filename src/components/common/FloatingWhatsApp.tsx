import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const url = getWhatsAppUrl({ context: "general" });

  return (
    <aside aria-label="Quick WhatsApp contact">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white" />
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
