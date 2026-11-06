export interface ProductWeightOption {
  weight: string;
  price: string;
  originalPrice: string;
  discount: string;
  pieces: string;
  serving: string;
  idealFor: string;
  popular?: boolean;
}

export interface ProductDetail {
  id: string;
  title: string;
  hindiTitle: string;
  regionalName: string;
  vendor: string;
  productUrl: string;
  tagline: string;
  description: string;
  origin: string;
  textureDescription: string;
  weights: ProductWeightOption[];
  shelfLife: string;
  storage: string;
  packaging: string;
  ingredients: string[];
  allergens: string;
  highlights: string[];
  imageUrl: string;
  galleryImages: string[];
  videoUrl?: string;
}

export const motichurLadduProduct: ProductDetail = {
  id: 'motichur-laddu-traditional-indian-festival-sweet',
  title: 'Motichur Laddu | Traditional Sweet',
  hindiTitle: 'मोतीचूर लड्डू (पारंपरिक गुजराती एवं भारतीय मिठाई)',
  regionalName: 'મોતીચૂર લાડુ (પરંપરાગત સ્વાદ)',
  vendor: 'Bhagvat Prasadam',
  productUrl: 'https://bhagvatprasadam.com/products/motichur-laddu-traditional-indian-festival-sweet?variant=45408622444693',
  tagline: 'Handcrafted Golden Boondi Pearls in 100% Pure Premium Ghee by Bhagvat Prasadam',
  description: 'Savor fresh authentic Motichur Laddu, a pure Gujarati sweet handcrafted with care by Bhagvat Prasadam. Made from golden boondi pearls, 100% pure premium ghee, and aromatic spices, this traditional Gujarati sweet melts in your mouth with authentic flavor. Perfect as festival sweets, Diwali treats, Ganesh Chaturthi puja offerings, wedding return gifts, or corporate gifting. Available in 250gm (₹118), 500gm (₹236), and 1kg (₹472) with express pan-India delivery to Mumbai, Ahmedabad, Surat, Delhi, Bangalore and all major cities.',
  origin: 'Gujarat, India (Inspired by Nilkanthdham Poicha)',
  textureDescription: 'Delicate, juicy microscopic golden boondi pearls that glisten with aromatic saffron syrup, melting effortlessly on your tongue with the gentle crunch of melon seeds and pistachios.',
  weights: [
    {
      weight: '250gm',
      price: '₹118',
      originalPrice: '₹156',
      discount: '24% OFF',
      pieces: '6 - 7 Laddus',
      serving: '2 - 3 Persons',
      idealFor: 'Personal indulgence, daily puja offerings & tea-time delight',
    },
    {
      weight: '500gm',
      price: '₹236',
      originalPrice: '₹313',
      discount: '25% OFF',
      pieces: '12 - 14 Laddus',
      serving: '4 - 6 Persons',
      idealFor: 'Family celebrations, festive gatherings & temple prasad',
      popular: true,
    },
    {
      weight: '1kg',
      price: '₹472',
      originalPrice: '₹625',
      discount: '24% OFF',
      pieces: '24 - 28 Laddus',
      serving: '8 - 12 Persons',
      idealFor: 'Grand festivals, Diwali gifting, weddings & corporate sweet boxes',
    },
  ],
  shelfLife: '15 to 20 days at ambient room temperature; up to 30 days when refrigerated',
  storage: 'Store in a cool, dry place away from direct heat and moisture. Keep in an airtight container after opening. Serve at room temperature for maximum melt-in-the-mouth texture.',
  packaging: 'Hygienically food-grade sealed to lock in moisture and fragrance, presented in a festive keepsake gold-embossed gift box.',
  ingredients: [
    'Fine Stone-Ground Gram Flour (Chana Besan)',
    '100% Pure Clarified Butter (Premium Ghee)',
    'Crystal Sugar Syrup (Chaashni)',
    'Stone-Pounded Green Cardamom (Elaichi)',
    'Aromatic Kashmiri Saffron (Kesar)',
    'Crunchy Melon Seeds (Magajtari / Charmagz)',
    'Slivered Green Pistachios (Pista)',
    'Natural Rose Water Hint (Gulab Jal)',
  ],
  allergens: 'Contains Gram Flour (Besan), Dairy (Premium Ghee), and Tree Nuts / Seeds (Melon Seeds, Pistachios). Prepared in a 100% Satvik kitchen.',
  highlights: [
    'Handcrafted with Devotion by Bhagvat Prasadam',
    'Microscopic Golden Boondi Pearls Fried in 100% Pure Premium Ghee',
    'Melt-in-the-Mouth Texture with Aromatic Cardamom & Saffron',
    'Perfect Sacred Prasad for Diwali, Ganesh Puja & Celebrations',
    'Budget-Friendly Premium Festive Sweet Box',
    'Zero Artificial Preservatives, Palm Oil or Harsh Chemicals',
  ],
  imageUrl: '/motichur-laddu/hero-motichur-laddu.jpg',
  galleryImages: [
    '/motichur-laddu/hero-motichur-laddu.jpg',
    '/motichur-laddu/motichur-laddu-home-banner.jpg',
    '/motichur-laddu/our-story-banner.png',
    '/motichur-laddu/motichur-laddu-festive-banner.jpg',
    '/motichur-laddu/motichur-laddu-gift-box.jpg',
    '/motichur-laddu/motichur-laddu-macro-texture.jpg',
    '/motichur-laddu/motichur-laddu-ingredients-flatlay.jpg',
    '/motichur-laddu/motichur-laddu-process-craft.jpg',
    '/motichur-laddu/motichur-laddu-footer-panorama.jpg',
    '/motichur-laddu/motichur-laddu-product.webp',
  ],
  videoUrl: '',
};

