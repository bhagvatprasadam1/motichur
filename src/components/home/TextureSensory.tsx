import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const TextureSensory: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream relative overflow-hidden" id="texture-sensory">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Macro Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold/40 bg-white">
              <img
                src="/motichur-laddu/motichur-laddu-macro-texture.jpg"
                alt="Macro Texture of Melt-in-the-Mouth Motichur Laddu with Microscopic Boondi Pearls, Melon Seeds, and Pure Premium Ghee"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-primary text-white p-3.5 rounded-2xl border border-gold/40 hidden sm:block max-w-[220px]">
              <span className="font-serif font-bold text-sm block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                Melt-In-Mouth
              </span>
              <span className="text-[11px] text-white/90">Never dry, never hard. Juicy micro pearls steeped in 100% pure premium ghee and saffron.</span>
            </div>
          </div>

          {/* Right: Dramatic Sensory Copy */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="font-jost text-primary font-bold text-xs uppercase tracking-[0.22em] flex items-center gap-2">
              <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
              THE SENSORY DISTINCTION
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-deep-brown tracking-tight leading-tight">
              The Signature <span className="text-primary italic font-serif">Melt-in-the-Mouth Boondi Pearls</span>
            </h2>

            <blockquote className="border-l-2 border-primary pl-4 text-primary font-serif italic text-base sm:text-lg">
              "Soft, juicy, and delicately aromatic, the sensation of tiny boondi pearls gently dissolving on your tongue is the hallmark of authentic Motichur Laddu."
            </blockquote>

            <p className="text-muted-text text-sm sm:text-base leading-relaxed">
              When you gently part a laddu, you reveal a glistening constellation of microscopic golden boondi droplets drenched in fragrant saffron-infused sugar syrup. The moment it touches your tongue, the delicate pearls dissolve effortlessly with the rich warmth of 100% pure premium ghee, elevated by the floral spice of green cardamom and the crisp, nutty surprise of toasted melon seeds.
            </p>

            <div className="pt-2">
              <Button
                to="/process"
                variant="outline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Discover Our Craft
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
