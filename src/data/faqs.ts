export interface FAQItem {
  id: string;
  category: 'Product' | 'Ingredients' | 'Preparation' | 'Storage' | 'Delivery' | 'Gifting' | 'Bulk Orders';
  question: string;
  answer: string;
  featuredOnHome?: boolean;
}

export const faqsData: FAQItem[] = [
  {
    id: 'what-is-motichur-laddu',
    category: 'Product',
    question: 'What is Motichur Laddu and why is it so beloved?',
    answer: 'Motichur Laddu (often spelled Motichoor Ladoo or मोतीचूर लड्डू) is one of India and Gujarat’s most cherished traditional festive sweets. The name comes from "Moti" (pearl) and "Chur" (crushed or dispersed), describing the microscopic golden boondi pearls fried in pure ghee, steeped in fragrant saffron and cardamom sugar syrup, and tenderly shaped by hand into melt-in-the-mouth spheres.',
    featuredOnHome: true,
  },
  {
    id: 'is-it-made-in-pure-ghee',
    category: 'Ingredients',
    question: 'Is Bhagvat Prasadam Motichur Laddu prepared in 100% pure premium ghee?',
    answer: 'Yes! Our Motichur Laddus are fried and crafted exclusively using 100% pure clarified butter (Premium Ghee). We never use commercial palm oil, dalda, or hydrogenated vegetable fats. Premium ghee gives the laddus their signature rich aroma, luscious melt-in-the-mouth texture, and authentic temple-style richness.',
    featuredOnHome: true,
  },
  {
    id: 'what-ingredients-used',
    category: 'Ingredients',
    question: 'What ingredients are used in this Motichur Laddu?',
    answer: 'Our laddus are made with pure, authentic ingredients: fine stone-ground chickpea flour (chana besan), 100% pure premium ghee, refined sugar syrup cooked to one-string consistency, freshly crushed green cardamom (elaichi), royal Kashmiri saffron (kesar), crunchy melon seeds (magajtari / charmagz), pistachio slivers, and a gentle whisper of rose water. No chemical preservatives, palm oil, or synthetic flavorings are used.',
    featuredOnHome: true,
  },
  {
    id: 'taste-and-texture',
    category: 'Product',
    question: 'What does Motichur Laddu taste and feel like?',
    answer: 'It delivers a luscious, melt-in-the-mouth sensation. The microscopic boondi pearls are tender and plump with saffron-infused sweetness, bursting gently with every bite. The deep richness of 100% pure premium ghee is balanced by the refreshing citrusy warmth of green cardamom and the delightful light crunch of roasted melon seeds.',
    featuredOnHome: true,
  },
  {
    id: 'shelf-life-and-storage',
    category: 'Storage',
    question: 'What is the shelf life and how should it be stored?',
    answer: 'Motichur Laddu stays fresh for 15 to 20 days at ambient room temperature, and up to 30 days when refrigerated. Store it in a cool, dry place away from direct heat or humidity, and keep it sealed in an airtight box after opening. If refrigerated, let the laddus sit at room temperature for 15 minutes before serving so they regain their soft, melt-in-the-mouth consistency.',
    featuredOnHome: true,
  },
  {
    id: 'difference-from-boondi-laddu',
    category: 'Product',
    question: 'What is the difference between Motichur Laddu and Boondi Laddu?',
    answer: 'The primary difference lies in the size of the boondi pearls. Traditional Boondi Laddu is made from larger, pea-sized fried batter droplets, resulting in a firmer, crunchier bite. Motichur Laddu is made using an artisanal fine-mesh jhara to create microscopic, pinhead-sized pearls (moti) that absorb syrup completely and melt effortlessly in the mouth.',
    featuredOnHome: true,
  },
  {
    id: 'difference-from-market-laddu',
    category: 'Product',
    question: 'How is Bhagvat Prasadam Motichur Laddu different from regular market sweet shops?',
    answer: 'Commercial sweet shops often use industrial palm oil or vanaspati dalda to cut costs, artificial chemical food colors for neon orange hues, and chemical preservatives to artificially extend shelf life. Bhagvat Prasadam Motichur Laddus are crafted with 100% pure premium ghee, premium stone-ground besan, natural Kashmiri saffron for authentic golden color, and prepared in a sanctified, 100% Satvik kitchen inspired by Nilkanthdham Poicha.',
    featuredOnHome: true,
  },
  {
    id: 'festivals-and-gifting',
    category: 'Gifting',
    question: 'Can I order Motichur Laddu for Diwali, Ganesh Chaturthi, and festive gifting?',
    answer: 'Absolutely! Motichur Laddu is Lord Ganesha’s favorite sacred offering (modak & laddu) and an indispensable sweet for Diwali, Raksha Bandhan, Janmashtami, Navratri, weddings, and housewarming pujas. Bhagvat Prasadam offers exquisite festive gift boxes in 250gm, 500gm, and 1kg sizes that make heartfelt gifts for family, friends, and corporate clients.',
    featuredOnHome: true,
  },
  {
    id: 'pan-india-delivery',
    category: 'Delivery',
    question: 'Do you deliver Motichur Laddu across India, including Mumbai, Ahmedabad & Delhi?',
    answer: 'Yes! We ship across India through express courier services with doorstep delivery across Mumbai, Ahmedabad, Surat, Vadodara, Pune, Delhi NCR, Bengaluru, Hyderabad, Kolkata, and 20,000+ pin codes. Each box is carefully sealed with food-grade protective inner blister trays and sturdy outer packaging to ensure your laddus arrive moist, intact, and fresh.',
    featuredOnHome: true,
  },
  {
    id: 'available-pack-sizes-and-prices',
    category: 'Product',
    question: 'What pack sizes and prices are available for Motichur Laddu?',
    answer: 'Our Motichur Laddu is available in three convenient, budget-friendly sizes on Bhagvat Prasadam: 250gm at ₹118 (Original ₹156), 500gm at ₹236 (Original ₹313), and 1kg at ₹472 (Original ₹625). All options offer 100% pure premium ghee craftsmanship at an accessible festival price.',
    featuredOnHome: false,
  },
  {
    id: 'bulk-and-corporate-orders',
    category: 'Bulk Orders',
    question: 'How can I place bulk orders for weddings or corporate events?',
    answer: 'We provide specialized bulk packaging and customized corporate sweet hampers for Diwali, corporate anniversaries, and wedding celebrations. You can easily reach our team via WhatsApp at +91-8850011652 or our website inquiry form to receive dedicated bulk pricing and scheduling.',
    featuredOnHome: false,
  },
  {
    id: 'is-motichur-laddu-gluten-free',
    category: 'Ingredients',
    question: 'Is Motichur Laddu naturally gluten-free and 100% pure vegetarian?',
    answer: 'Yes! Motichur Laddu is made primarily from pure stone-ground chickpea flour (chana besan), which is naturally 100% gluten-free. Fried in 100% pure premium ghee and combined with sugar, saffron, cardamom, and melon seeds, it contains zero wheat, zero maida, and zero artificial additives. It is prepared in a strictly vegetarian and Satvik kitchen.',
    featuredOnHome: false,
  },
  {
    id: 'lord-ganesha-and-puja-bhog',
    category: 'Product',
    question: 'Why is Motichur Laddu the foremost prasad for Lord Ganesha, Hanumanji, and Diwali Puja?',
    answer: 'In Hindu Vedic tradition, Motichur Laddu is revered as Lord Ganesha’s supreme favorite sweet (Modakpriya), symbolizing fulfillment and divine sweetness. It is also traditionally offered as Tuesday & Saturday bhog to Lord Hanuman and as sacred prasad for Satyanarayan Katha, Diwali Lakshmi Puja, Navratri, and wedding rituals.',
    featuredOnHome: false,
  },
  {
    id: 'puja-and-temple-prasad',
    category: 'Product',
    question: 'Can this Motichur Laddu be used for sacred temple bhog and deity offerings?',
    answer: 'Yes, 100%! Prepared with deep devotional reverence in our pristine Satvik kitchen inspired by Shri Nilkanthdham Poicha, Bhagvat Prasadam sweets adhere to the highest codes of cleanliness, vegetarian purity, and sacred tradition, making them ideal for deity bhog and sacred prasad.',
    featuredOnHome: false,
  },
];
