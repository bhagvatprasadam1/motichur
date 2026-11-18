import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../common/Button";

export const ProductIntro: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="what-is-motichur-laddu">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HERITAGE & ESSENCE"
          title="What Is Motichur Laddu (मोतीचूर लड्डू)?"
          subtitle="The iconic traditional festival sweet handcrafted from microscopic golden boondi pearls fried in 100% pure premium ghee."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-gold/30 bg-white">
              <img
                src="/motichur-laddu/motichur-laddu-closeup.webp"
                alt="Authentic Motichur Laddu Close-Up showing Microscopic Golden Boondi Pearls in Pure Premium Ghee and Saffron Syrup"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="2160"
                height="2160"
              />
            </div>
            {/* Cultural caption */}
            <div className="mt-4 p-4 rounded-xl bg-light-beige/70 border border-gold/30 text-xs sm:text-sm text-deep-brown">
              <span className="font-semibold block font-serif text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Temple Tradition & Pure Satvik Sanctity:
              </span>
              <span>
                Inspired by the devotional prasad traditions of Shri Nilkanthdham Poicha, prepared with 100% pure premium ghee, uncompromised hygiene, and spiritual reverence.
              </span>
            </div>
          </div>

          {/* Detailed SEO Storytelling */}
          <div className="lg:col-span-6 space-y-6 text-muted-text text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-deep-brown font-serif">Motichur Laddu</strong>{" "}
              (literally translating to <strong className="text-deep-brown">"Crushed Pearls"</strong> from <em>Moti</em> = pearl and <em>Chur</em> = finely dispersed droplets) is perhaps India’s most celebrated festival sweet. Revered as Lord Ganesha’s sacred favorite and the quintessential blessing for Diwali, weddings, and pujas, it represents prosperity, sweetness, and auspicious beginnings.
            </p>
            <p>
              Unlike ordinary coarse boondi laddus, authentic Motichur Laddu requires master craftsmanship: fine stone-ground gram flour (besan) is whisked into a silky batter and passed through a specialized fine-mesh jhara into bubbling 100% pure premium ghee, creating thousands of microscopic golden pearls. These pearls are immediately steeped in hot saffron and green cardamom sugar syrup, folded with toasted melon seeds (magajtari), and shaped by hand while warm.
            </p>

            <div className="space-y-3 pt-2 text-sm text-dark-text">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  Microscopic golden boondi pearls fried in 100% pure premium ghee (zero dalda or palm oil)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  Steeped in fragrant Kashmiri saffron and stone-pounded green cardamom syrup
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  Folded with crunchy melon seeds (magajtari) and pistachios for the perfect subtle snap
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>
                  Naturally gluten-free stone-ground chana besan with zero artificial preservatives or colors
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button
                to="/ingredients"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View Pure Ingredients
              </Button>
              <Button
                to="/about"
                variant="outline"
              >
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
