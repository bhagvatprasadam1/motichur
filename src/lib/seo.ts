import { siteConfig } from '../data/siteConfig';
import { motichurLadduProduct } from '../data/products';
import { faqsData } from '../data/faqs';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bhagvat Prasadam - Motichur Laddu',
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo.webp`,
    description: siteConfig.subTagline,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Gujarati', 'Hindi'],
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
    ],
  };
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Motichur Laddu | मोतीचूर लड्डू | Traditional Sweet | Bhagvat Prasadam',
    alternateName: [
      'Motichoor Ladoo',
      'Motichoor Laddu',
      'मोतीचूर लड्डू',
      'મોતીચૂર લાડુ',
      'Pure Premium Ghee Motichur Laddu',
      'Premium Ghee Motichoor Ladoo',
      'Gujarati Motichur Laddu',
    ],
    image: `${siteConfig.siteUrl}${motichurLadduProduct.imageUrl}`,
    description: motichurLadduProduct.description,
    brand: {
      '@type': 'Brand',
      name: motichurLadduProduct.vendor,
    },
    category: 'Food & Beverage > Sweets & Desserts > Traditional Indian Sweets',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1680',
      bestRating: '5',
      worstRating: '1',
    },
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '100g (Approx. 2-3 Laddus)',
      calories: '395 calories',
      proteinContent: '5.8g',
      fatContent: '16.5g',
      carbohydrateContent: '58.0g',
      fiberContent: '2.4g',
      sugarContent: '38.0g',
    },
    suitableForDiet: [
      'https://schema.org/VegetarianDiet',
      'https://schema.org/GlutenFreeDiet',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '118.00',
      highPrice: '472.00',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
      url: motichurLadduProduct.productUrl,
      seller: {
        '@type': 'Organization',
        name: motichurLadduProduct.vendor,
      },
    },
  };
}

export function getFAQPageSchema(category?: string) {
  const items = category
    ? faqsData.filter((f) => f.category === category)
    : faqsData.filter((f) => f.featuredOnHome);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.brandName,
    image: `${siteConfig.siteUrl}${motichurLadduProduct.imageUrl}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.2389',
      longitude: '72.8427',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    priceRange: '₹₹',
  };
}
