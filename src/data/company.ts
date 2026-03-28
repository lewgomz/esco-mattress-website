export const COMPANY = {
  name: 'Esco Mattress Manufacturing Inc.',
  shortName: 'Esco Mattress',
  tagline: 'Quality You Can Feel on Both Sides',
  description:
    'Esco Mattress specializes in manufacturing high-quality "Double Sided" mattresses — from Traditional Innerspring to Double Pillow Top, Latex, and Memory Foam.',
  phone: '877-240-5375',
  address: {
    street: '800 S Milliken Ave',
    city: 'Ontario',
    state: 'CA',
    zip: '91761',
    full: '800 S Milliken Ave, Ontario, CA 91761',
    mapsUrl:
      'https://www.google.com/maps/place/800+S+Milliken+Ave,+Ontario,+CA+91761',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2!2d-117.578!3d34.058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c33c7f0000001%3A0x1!2s800+S+Milliken+Ave%2C+Ontario%2C+CA+91761!5e0!3m2!1sen!2sus!4v1',
  },
  hours: [
    { day: 'Monday – Friday', time: '10:00 am – 6:00 pm' },
    { day: 'Saturday', time: '11:00 am – 4:00 pm' },
    { day: 'Sunday', time: 'Closed' },
  ],
} as const

export const PRODUCTS = [
  {
    id: 'innerspring',
    name: 'Traditional Innerspring',
    icon: '🌀',
    summary: 'Classic coil support with excellent breathability and durability.',
    description:
      'Our Traditional Innerspring mattresses deliver reliable, time-tested support through a network of tempered steel coils. Ideal for sleepers who prefer a firmer, more responsive feel with outstanding airflow.',
  },
  {
    id: 'pillow-top',
    name: 'Double Pillow Top',
    icon: '☁️',
    summary: 'Luxurious cushioning on both sides for extended mattress life.',
    description:
      'Our signature Double Pillow Top features plush comfort layers sewn on both sides of the mattress. Flipping the mattress extends its life and keeps the feel consistent over the years.',
  },
  {
    id: 'latex',
    name: 'Latex',
    icon: '🌿',
    summary: 'Natural resilience with pressure relief and hypoallergenic properties.',
    description:
      'Latex mattresses provide a buoyant, responsive feel with natural cooling properties. Great for those with allergies, latex resists dust mites and mold while delivering consistent pressure relief.',
  },
  {
    id: 'memory-foam',
    name: 'Memory Foam',
    icon: '🛏️',
    summary: 'Contouring comfort that adapts to your body shape.',
    description:
      'Our Memory Foam mattresses use high-density viscoelastic foam to cradle your body, reduce motion transfer, and relieve pressure points. Perfect for couples and side sleepers.',
  },
] as const

export const VALUES = [
  {
    icon: '🔄',
    title: 'Double-Sided Construction',
    description:
      'Every mattress we make is flippable. Double-sided design means twice the usable surface and a longer lifespan for your investment.',
  },
  {
    icon: '🏭',
    title: 'Manufactured Locally',
    description:
      'We build every mattress right here in Ontario, CA. Local manufacturing means tighter quality control and faster delivery to your door.',
  },
  {
    icon: '✅',
    title: 'Quality You Can Trust',
    description:
      'From the coils to the cover, every component is selected for durability and comfort. We stand behind every mattress we ship.',
  },
] as const
