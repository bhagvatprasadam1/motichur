export interface IngredientItem {
  id: string;
  name: string;
  gujaratiName: string;
  category: string;
  shortDesc: string;
  detailedRole: string;
  sourcing: string;
}

export const ingredientsData: IngredientItem[] = [
  {
    id: 'besan',
    name: 'Fine Stone-Ground Gram Flour (Besan)',
    gujaratiName: 'ઝીણો ચણાનો લોટ',
    category: 'The Foundation of Micro Pearls',
    shortDesc: 'Ultra-fine chickpea flour sieved meticulously to yield perfectly spherical microscopic boondi pearls.',
    detailedRole: 'Forms the delicate structure of each boondi pearl. High-quality unadulterated gram flour ensures the laddus remain light, airy, and melt seamlessly in the mouth without feeling dense or heavy.',
    sourcing: 'Milled from selected premier-grade golden chickpeas sourced from certified Gujarat agricultural grain markets.',
  },
  {
    id: 'ghee',
    name: '100% Pure Clarified Butter (Premium Ghee)',
    gujaratiName: 'શુદ્ધ પ્રીમિયમ ઘી',
    category: 'The Soul of Frying & Aroma',
    shortDesc: 'Traditional golden premium ghee heated to optimal temperature for frying boondi pearls.',
    detailedRole: 'Imparts the authentic royal aroma and rich taste that defines traditional Gujarati sweets. Premium ghee gives the laddus their signature melt-in-mouth mouthfeel without any oily greasy film.',
    sourcing: 'Slow-simmered pure butterfat prepared through time-honored traditional dairy methods.',
  },
  {
    id: 'sugar-syrup',
    name: 'Crystal Sugar Syrup (Ek-Taar Chaashni)',
    gujaratiName: 'એક તારની કેસરિયા ચાસણી',
    category: 'The Sweet Infusion & Moisture Binder',
    shortDesc: 'Slow-cooked crystal sugar syrup clarified and boiled to a precise single-string consistency.',
    detailedRole: 'Infuses each tiny fried boondi pearl with balanced sweetness. The exact temperature and consistency keep the pearls plump and juicy without crystallizing or becoming overly wet.',
    sourcing: 'Refined sulphur-free pharmaceutical grade cane sugar crystals.',
  },
  {
    id: 'cardamom',
    name: 'Stone-Pounded Green Cardamom (Elaichi)',
    gujaratiName: 'લીલી ઈલાયચી પાવડર',
    category: 'Aromatic Festival Harmony',
    shortDesc: 'Fresh green cardamom pods de-seeded and crushed into a fragrant aromatic powder.',
    detailedRole: 'Provides an exquisite floral-spicy aroma that cuts through the sweetness and elevates the rich ghee base, hallmark of authentic Indian festive celebration.',
    sourcing: 'First-harvest green cardamom pods hand-picked from the misty slopes of the Western Ghats.',
  },
  {
    id: 'saffron',
    name: 'Kashmiri Royal Saffron (Kesar)',
    gujaratiName: 'કાશ્મીરી કેસર',
    category: 'Sacred Color & Royal Fragrance',
    shortDesc: 'Deep red saffron stigmas bloomed in warm syrup to release golden hue and floral warmth.',
    detailedRole: 'Gives the Motichur Laddu its iconic warm saffron radiance and a delicate earthy-floral undertone that lingers pleasingly on the palate.',
    sourcing: 'Pure Grade-1 Mongra saffron threads harvested in the valleys of Kashmir.',
  },
  {
    id: 'melon-seeds',
    name: 'Crunchy Melon Seeds (Magajtari / Charmagz)',
    gujaratiName: 'મગજતરીના બી',
    category: 'Signature Delicate Crunch',
    shortDesc: 'Crisp, roasted melon seeds folded through the warm boondi before shaping.',
    detailedRole: 'Adds an essential textural contrast to the soft, juicy boondi pearls, delivering a subtle nutty snap and rich healthy plant lipids in every bite.',
    sourcing: 'Triple-sorted, sun-dried premium white melon seeds carefully toasted to golden perfection.',
  },
  {
    id: 'pistachios',
    name: 'Emerald Green Pistachios (Pista)',
    gujaratiName: 'લીલા પિસ્તાની કતરણ',
    category: 'Royal Garnish & Texture',
    shortDesc: 'Thinly slivered vibrant green pistachio kernels garnishing the laddus.',
    detailedRole: 'Offers visual elegance and a gentle woody richness, making every laddu look and taste like a celebratory gift fit for deity offerings.',
    sourcing: 'Selected high-grade sun-dried green kernel pistachios.',
  },
  {
    id: 'rose-water',
    name: 'Natural Rose Water Essence (Gulab Jal)',
    gujaratiName: 'શુદ્ધ ગુલાબજળ',
    category: 'Temple Prasad Essence',
    shortDesc: 'Pure steam-distilled floral water added to the warm syrup for a sacred whisper of fragrance.',
    detailedRole: 'Infuses the traditional Nilkanthdham temple prasad fragrance that awakens fond memories of sacred Indian festivities and sanctified offerings.',
    sourcing: 'Steam-distilled country rose petals crafted without chemical aroma boosters.',
  },
];
