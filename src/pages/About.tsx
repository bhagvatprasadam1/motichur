import React from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import { getBreadcrumbSchema } from "../lib/seo";
import { SectionHeading } from "../components/common/SectionHeading";
import { Button } from "../components/common/Button";
import { ArrowRight, Heart, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Our Story", path: "/about" },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        canonicalPath={seoData.about.canonicalPath}
        ogImage={seoData.about.ogImage}
        schema={schemas}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Our Story</span>
        </nav>

        {/* Master Our Story Hero Banner */}
        <div className="mb-8 sm:mb-10 lg:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-light-beige bg-cream-card">
          <img
            src="/motichur-laddu/our-story-banner.webp"
            alt="Our Story Banner - Bhagvat Prasadam Traditional Motichur Laddu Heritage Inspired by Nilkanthdham Poicha Gujarat"
            width="1024"
            height="409"
            className="w-full h-auto block select-none transition-transform duration-700 hover:scale-[1.01]"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="font-jost text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-primary flex items-center justify-center gap-2 mb-3">
            DEVOTIONAL CRAFTSMANSHIP & SACRED PURITY
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-deep-brown font-normal tracking-tight leading-tight">
            Preserving Sacred Purity & Authentic Sweet Tradition
          </h1>
          <p className="mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            In an era of commercial sweet shops using industrial palm oils and chemical food dyes, we safeguard the sanctified Gujarati tradition of authentic 100% pure premium ghee Motichur Laddu handcrafted by Bhagvat Prasadam.
          </p>
        </div>

        {/* Narrative Block 1: The Origin */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-light-beige mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                THE SACRED ROOTS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-deep-brown font-bold">
                Why We Champion Authentic 100% Pure Premium Ghee Motichur Laddu
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Most modern confectionery relies on commercial shortcut ingredients—industrial palm oil or vanaspati dalda, artificial yellow and orange dyes, and chemical stabilizers. In this industrial rush, the sacred essence of traditional temple sweets was lost.
              </p>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Inspired by the sanctified prasad traditions of Shri Nilkanthdham Poicha, we dedicated our confectionery to creating the purest festive delight: fine stone-ground gram flour (besan) sieved and drop-fried into microscopic golden boondi pearls in 100% pure premium ghee, steeped deeply in saffron and green cardamom syrup, and folded with toasted melon seeds. 100% pure, budget-friendly, and full of festive joy.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-gold/40">
                <img
                  src="/motichur-laddu/motichur-laddu-closeup.webp"
                  alt="Ancestral Gujarati Motichur Laddu Craftsmanship in Pure Premium Ghee by Bhagvat Prasadam"
                  className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="2160"
                  height="2160"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Three Guiding Philosophies */}
        <div className="mb-8 sm:mb-10 lg:mb-12" id="philosophy">
          <SectionHeading
            eyebrow="OUR FOUNDING PILLARS"
            title="The Philosophy of Craftsmanship"
            subtitle="The uncompromising standards that guide every single batch we prepare."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Ingredient Sanctity
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  100% pure clarified premium ghee, fine stone-ground besan, Kashmiri saffron, stone-pounded green cardamom, and toasted melon seeds. Zero palm oil, zero dalda, and zero artificial colors.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Patience Over Scale
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  Dropping micro-boondi batter through a fine brass jhara into sizzling pure ghee takes steady mastery. We never rush temperature, ensuring every microscopic pearl cooks evenly and absorbs the warm saffron syrup to the core.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Small-Batch Freshness
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  We prepare our Motichur Laddus fresh in small satvik batches. Each laddu is shaped lovingly by hand while warm, cooled naturally on marble trays, and sealed in airtight packaging for express pan-India dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Heritage Grid: 2 columns on all devices */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/40 bg-white">
            <img
              src="/motichur-laddu/motichur-laddu-gift-box.webp"
              alt="Luxury Festive Motichur Laddu Keepsake Gift Box in Pure Premium Ghee with Brass Diyas by Bhagvat Prasadam"
              width="1200"
              height="896"
              className="w-full h-44 sm:h-72 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/40 bg-white">
            <img
              src="/motichur-laddu/motichur-laddu-macro-texture.webp"
              alt="Juicy Melt-in-Mouth Microscopic Boondi Pearl Texture of Pure Premium Ghee Motichur Laddu"
              width="1200"
              height="896"
              className="w-full h-44 sm:h-72 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Modern Presentation & D2C Quality */}
        <div className="bg-deep-brown text-cream rounded-3xl p-8 sm:p-12 border border-gold/40 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-gold font-bold text-xs uppercase tracking-widest">
              HERITAGE MEETS MODERN FESTIVITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Bringing Pure Temple Sweetness to Every Celebration
            </h2>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
              While our recipe draws from sacred Gujarati culinary heritage inspired by Shri Nilkanthdham Poicha, our packaging is designed for modern celebrations and corporate gifting. Sealed in moisture-barrier boxes with gold-foil embossing, our Motichur Laddu reaches homes across India with guaranteed freshness and divine 100% pure premium ghee fragrance.
            </p>
            <div className="pt-4">
              <Button
                to="/"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Experience Our Motichur Laddu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
