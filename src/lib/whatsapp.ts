import { siteConfig } from '../data/siteConfig';

export type WhatsAppContext = 'general' | 'hero' | 'product' | 'product_weight' | 'gifting' | 'bulk' | 'contact';

export interface WhatsAppOptions {
  context?: WhatsAppContext;
  weight?: string;
  customMessage?: string;
}

export function getWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const phone = siteConfig.whatsappNumber;
  let message = 'Hello! I would like to know more about your authentic Gujarati Motichur Laddu by Bhagvat Prasadam.';

  if (options.customMessage) {
    message = options.customMessage;
  } else if (options.context === 'hero') {
    message = 'Hello! I would like to enquire about ordering your fresh pure ghee Motichur Laddu.';
  } else if (options.context === 'product') {
    message = 'Hello! I am interested in your Traditional Gujarati Motichur Laddu. Please share pricing and dispatch availability.';
  } else if (options.context === 'product_weight') {
    message = `Hello! I am interested in ordering the ${options.weight || '500gm'} pack of your Traditional Pure Ghee Motichur Laddu. Please share delivery details.`;
  } else if (options.context === 'gifting') {
    message = 'Hello! I am interested in Motichur Laddu festive gift boxes for an upcoming festival / celebration. Please share gift box options.';
  } else if (options.context === 'bulk') {
    message = 'Hello! I am looking to place a bulk Motichur Laddu order for a wedding / corporate festive celebration. Please share details and pricing.';
  } else if (options.context === 'contact') {
    message = 'Hello! I would like to enquire about your fresh Motichur Laddu sweets from Bhagvat Prasadam.';
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
