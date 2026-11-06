export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  gujaratiTitle: string;
  summary: string;
  details: string;
  duration: string;
  craftSecret: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    number: 'Step 01',
    title: 'Besan Sifting & Micro-Boondi Batter Whisking',
    gujaratiTitle: 'ચણાનો લોટ ચાળવો અને બેટર બનાવવું',
    summary: 'Sifting ultra-fine gram flour and whisking into a smooth, free-flowing silky batter.',
    details: 'Stone-ground chickpea flour (besan) is sifted twice through fine brass sieves to eliminate all lumps. It is then whisked with pure water and a touch of saffron until an airy, ribbon-like consistency is achieved—critical for dropping microscopic boondi pearls without tails.',
    duration: '25 mins',
    craftSecret: 'Precise batter fluidity is the secret. Too thick and the pearls become heavy; too thin and they lose their spherical pearl shape.',
  },
  {
    step: '02',
    number: 'Step 02',
    title: '100% Pure Premium Ghee Frying of Microscopic Pearls',
    gujaratiTitle: 'શુદ્ધ પ્રીમિયમ ઘીમાં મોતી જેવી બુંદી તળવી',
    summary: 'Dropping micro-batter through a fine perforated jhara into bubbling 100% pure premium ghee.',
    details: 'The batter is gently tapped through a traditional fine-holed Motichur jhara held at a measured height above a kadai of 100% pure premium ghee. Hundreds of tiny golden pearls instantly sizzle and float up, frying in seconds to a delicate, soft crispness before being scooped out.',
    duration: '35 mins',
    craftSecret: 'Premium ghee temperature must be maintained at a steady medium heat. Frying takes only 30-40 seconds to prevent over-browning while retaining softness inside.',
  },
  {
    step: '03',
    number: 'Step 03',
    title: 'Saffron & Green Cardamom Syrup Simmering',
    gujaratiTitle: 'કેસર-ઈલાયચી એક-તાર ચાસણી તૈયાર કરવી',
    summary: 'Boiling pure sugar crystals with crushed cardamom pods and Kashmiri saffron threads.',
    details: 'Refined sugar is boiled with water and milk-clarified to remove impurities. Freshly crushed green cardamom pods and bloomed Kashmiri saffron are stirred in until the syrup reaches a delicate one-string (ek-taar) stage, glossy and brimming with royal fragrance.',
    duration: '20 mins',
    craftSecret: 'Achieving the exact one-string consistency ensures the pearls soak up just enough syrup to become juicy and succulent without collapsing.',
  },
  {
    step: '04',
    number: 'Step 04',
    title: 'Warm Boondi Steep & Deep Syrup Absorption',
    gujaratiTitle: 'બુંદીને ચાસણીમાં પલાળી રસદાર બનાવવી',
    summary: 'Plunging freshly fried warm pearls directly into warm saffron syrup.',
    details: 'The hot boondi pearls are gently folded into the simmering saffron-cardamom syrup. The kadai is covered and rested on low embers, allowing the microscopic pearls to drink in the fragrant nectar until they become uniformly juicy, plump, and translucent.',
    duration: '20 mins',
    craftSecret: 'Both boondi and syrup must be warm during blending so the syrup penetrates right to the core of every pearl droplet.',
  },
  {
    step: '05',
    number: 'Step 05',
    title: 'Folding Roasted Melon Seeds & Pistachios',
    gujaratiTitle: 'મગજતરી અને પિસ્તાનું સંયોજન',
    summary: 'Folding golden-toasted melon seeds (magajtari) and sliced pistachios into the warm boondi.',
    details: 'Toasted melon seeds (magajtari / charmagz), crushed pistachio slivers, and a hint of natural rose water are delicately folded into the glossy boondi mixture. This imparts the signature nutty contrast against the melt-in-the-mouth boondi pearls.',
    duration: '15 mins',
    craftSecret: 'Melon seeds are toasted lightly beforehand so they stay crisp and aromatic even after being enveloped in warm, sweet boondi.',
  },
  {
    step: '06',
    number: 'Step 06',
    title: 'Artisanal Hand-Shaping & Natural Setting',
    gujaratiTitle: 'હાથથી મુલાયમ લાડુ વાળવા અને ઠરવા દેવા',
    summary: 'Carefully shaping warm boondi into glistening round spheres by master sweet artisans.',
    details: 'While the boondi remains gently warm and pliable, master artisans grease their palms with pure ghee and lovingly compress precise portions into seamless, glowing spheres. The laddus are placed on marble trays to cool naturally and achieve their perfect festive form.',
    duration: '45 mins',
    craftSecret: 'Gentle pressure is key. Compressing too firmly crushes the delicate boondi pearls; shaping with just the right touch preserves the tiny pearl mosaic.',
  },
];
