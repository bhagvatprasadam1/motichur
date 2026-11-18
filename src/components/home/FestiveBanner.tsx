import React from 'react';

export const FestiveBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="festive-banner">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Full-Width Banner Image without text overlay */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-gold/50 bg-deep-brown">
          <div className="relative w-full overflow-hidden">
            <img
              src="/motichur-laddu/motichur-laddu-festive-banner.webp"
              alt="Festive Diwali and Ganesh Chaturthi Motichur Laddu Celebration Platter with Brass Diyas in Pure Premium Ghee by Bhagvat Prasadam"
              width="1376"
              height="768"
              className="w-full h-auto max-h-[560px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-1000 block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestiveBanner;
