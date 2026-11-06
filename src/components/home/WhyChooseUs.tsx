import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Award, Heart, Droplets, CheckCircle, PackageCheck, Flame } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Flame className="w-6 h-6 text-primary" />,
      title: '100% Pure Premium Ghee',
      description: 'Fried and simmered exclusively in pure clarified premium butter. Zero dalda, zero palm oil, or hydrogenated vegetable fats.',
    },
    {
      icon: <Droplets className="w-6 h-6 text-primary" />,
      title: 'Microscopic Boondi Pearls',
      description: 'Crafted with fine brass jhara into microscopic golden pearls that absorb syrup completely and melt effortlessly in the mouth.',
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: 'Real Saffron & Cardamom',
      description: 'Infused with fragrant Kashmiri saffron (kesar) and freshly stone-pounded green cardamom (elaichi) with zero artificial essences.',
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Toasted Melon Seeds & Nuts',
      description: 'Folded with crisp melon seeds (magajtari) and emerald pistachios, creating a delicate crunch against the tender boondi pearls.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: 'Sacred Satvik Preparation',
      description: 'Handcrafted fresh in small batches inspired by Shri Nilkanthdham Poicha traditions with pristine hygiene and spiritual devotion.',
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-primary" />,
      title: 'Budget-Friendly Festive Joy',
      description: 'Accessible pricing at ₹118 (250g), ₹236 (500g), and ₹472 (1kg) packed in protective sealed festive boxes for pan-India gifting.',
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="why-choose-us">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DISTINCTIVE EXCELLENCE"
          title="Why Choose Our Motichur Laddu?"
          subtitle="Every laddu embodies devotional purity, pure ghee craftsmanship, and authentic melt-in-the-mouth Gujarati tradition."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {reasons.map((item, index) => (
            <Card key={index} className="!p-3.5 sm:!p-6 lg:!p-7 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-light-beige flex items-center justify-center mb-3 sm:mb-4 border border-gold/30 text-primary [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-lg lg:text-xl text-deep-brown mb-1 sm:mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-text text-xs sm:text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
