import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { WhatsAppButton } from "../common/WhatsAppButton";
import { Check, ExternalLink } from "lucide-react";
import { motichurLadduProduct } from "../../data/products";

export const GiftingTeaser: React.FC = () => {
  const occasions = [
    "Diwali & New Year",
    "Ganesh Chaturthi",
    "Weddings & Favors",
    "Raksha Bandhan",
    "Puja & Deity Bhog",
    "Corporate Gifting",
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="gifting-teaser">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CELEBRATIONS & GIFTS"
          title="Made For Auspicious Moments"
          subtitle="Packaged in rigid keepsake festive gift boxes with gold foil embossing, our Motichur Laddu makes a memorable and divine impression for life's most meaningful celebrations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-gold/40 bg-white">
              <img
                src="/motichur-laddu/motichur-laddu-gift-box.jpg"
                alt="Royal Festive Motichur Laddu Keepsake Gift Box Handcrafted in Pure Premium Ghee for Diwali and Wedding Favors by Bhagvat Prasadam"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="mt-3 text-center text-xs text-muted-text italic">
              Available in budget-friendly 250gm (₹118), 500gm (₹236), and 1kg (₹472) gift boxes
            </div>
          </div>

          {/* Details & Occasions */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-primary font-serif font-bold text-xl sm:text-2xl">
              The Quintessential Auspicious Festival Gift
            </h3>

            <p className="text-muted-text text-base sm:text-lg leading-relaxed">
              Move beyond ordinary sweets. Gifting authentic, freshly handcrafted Motichur Laddu honors your loved ones, colleagues, and deity offerings with the pure fragrance of 100% pure premium ghee, golden boondi pearls, royal saffron, and timeless Gujarati craftsmanship.
            </p>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-3">
                Celebrated Across Auspicious Occasions:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {occasions.map((occ, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-light-beige text-xs font-medium text-dark-text"
                  >
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="truncate">{occ}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <WhatsAppButton context="gifting" size="md">
                Enquire About Gifting
              </WhatsAppButton>

              <a
                href={motichurLadduProduct.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                <span>Order on Bhagvat Prasadam</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingTeaser;
