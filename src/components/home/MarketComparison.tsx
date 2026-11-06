import React from 'react';
import { Check, X, Shield, Award } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const MarketComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Cooking Fat & Frying Medium',
      ourSweet: '100% Pure Clarified Butter (Premium Ghee)',
      marketSweet: 'Industrial Palm Oil, Hydrogenated Vanaspati Dalda',
      ourHighlight: true,
    },
    {
      feature: 'Boondi Pearl Size & Texture',
      ourSweet: 'Microscopic Golden Pearls (Moti) that Melt in Mouth',
      marketSweet: 'Coarse, Large Droplets with Chewy or Hard Batter Centers',
      ourHighlight: true,
    },
    {
      feature: 'Coloring & Fragrance',
      ourSweet: 'Natural Kashmiri Saffron (Kesar) & Green Cardamom',
      marketSweet: 'Harsh Synthetic Chemical Dyes & Artificial Essence',
      ourHighlight: true,
    },
    {
      feature: 'Nuts & Seeds Additions',
      ourSweet: 'Roasted Melon Seeds (Magajtari) & Emerald Pistachios',
      marketSweet: 'Zero Seeds or Cheap Fillers / Peanut Fragments',
      ourHighlight: true,
    },
    {
      feature: 'Kitchen Sanctity & Purity',
      ourSweet: '100% Satvik Devotional Preparation by Bhagvat Prasadam',
      marketSweet: 'Mass Commercial Automated Industrial Production',
      ourHighlight: true,
    },
    {
      feature: 'Palate Feel & Aftertaste',
      ourSweet: 'Clean, Aromatic Melt with Zero Oily Film or Clasping Sweetness',
      marketSweet: 'Heavy, Greasy Film on Palate with Heavy Sugar Burn',
      ourHighlight: true,
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-cream" id="market-comparison">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="UNCOMPROMISED EXCELLENCE"
          title="Why Bhagvat Prasadam Stands Apart"
          subtitle="Not all laddus are crafted equal. Discover why our authentic Motichur Laddu represents the golden standard of purity, pure ghee, and traditional craftsmanship."
        />

        <div className="bg-white rounded-3xl border border-light-beige overflow-hidden">
          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-light-beige">
                  <th className="py-4 sm:py-5 px-6 font-jost text-xs uppercase tracking-[0.2em] text-muted-text font-bold w-1/3">
                    Quality Benchmark
                  </th>
                  <th className="py-4 sm:py-5 px-6 bg-primary/5 border-x border-primary/20 text-primary font-serif text-base sm:text-lg font-bold w-1/3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-gold flex-shrink-0" />
                      <span>Bhagvat Prasadam Motichur Laddu</span>
                    </div>
                  </th>
                  <th className="py-4 sm:py-5 px-6 font-serif text-base sm:text-lg text-muted-text/80 font-normal w-1/3">
                    Commercial Market Laddu
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-beige/70 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-deep-brown">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-primary/[0.02] border-x border-primary/10 font-medium text-dark-text">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{row.ourSweet}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-muted-text">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-muted-text/60 flex-shrink-0 mt-0.5" />
                        <span>{row.marketSweet}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Trust Highlight */}
          <div className="bg-deep-brown text-cream p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <div className="font-serif text-base sm:text-lg font-bold text-cream">
                  100% Satvik Quality Guarantee
                </div>
                <div className="text-xs text-cream/80">
                  Crafted exclusively with 100% pure premium ghee, stone-ground besan, and real Kashmiri saffron.
                </div>
              </div>
            </div>

            <span className="text-xs font-jost uppercase tracking-[0.2em] text-gold font-bold bg-white/10 px-3.5 py-1.5 rounded-full border border-gold/40">
              Zero Compromise
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
