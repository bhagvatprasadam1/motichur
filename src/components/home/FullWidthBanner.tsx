import React from "react";
import { Link } from "react-router-dom";

export const FullWidthBanner: React.FC = () => {
  return (
    <section
      aria-label="Pure Traditional Gujarati Motichur Laddu Banner"
      className="py-6 sm:py-8 lg:py-9 bg-cream"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-light-beige bg-cream-card">
          <Link
            to="/about"
            className="block w-full group relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-label="Explore Authentic Traditional Gujarati Motichur Laddu by Bhagvat Prasadam"
          >
            <img
              src="/motichur-laddu/motichur-laddu-home-banner.webp"
              alt="Traditional Gujarati Motichur Laddu in Pure Premium Ghee - Rich Taste, Pure Tradition, No Preservatives by Bhagvat Prasadam"
              width="1024"
              height="576"
              className="w-full h-auto block select-none transition-transform duration-700 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullWidthBanner;
