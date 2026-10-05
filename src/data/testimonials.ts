export type Testimonial = {
  text: string
  name: string
  role: string
  logo: string
  rating: number
  service?: string
}

/** Verified client feedback displayed on the website (also published as Review schema). */
export const TESTIMONIALS: Testimonial[] = [
  {
    text: 'I’ve had a great experience working with them. The team really knows what they’re doing — they understood our needs, stayed in touch throughout the process, and delivered exactly what we were hoping for.',
    name: 'Nabeesh R',
    role: 'Introis Technologies',
    logo: '/images/clients/introis.png',
    rating: 5,
    service: 'Software Development',
  },
  {
    text: 'Super happy with Right Serve Infotech System Pvt. Ltd.! The team is talented, friendly, and always delivers quality work on time. Highly recommend them.',
    name: 'Shreyans Bhandari',
    role: 'Aanand Computers',
    logo: '/images/clients/anand-computers.png',
    rating: 5,
    service: 'Inventory Management',
  },
  {
    text: 'Right Serve Infotech transformed our business with their custom software solutions. Their team is professional, responsive, and truly understands client needs.',
    name: 'Aman Kewalramani',
    role: 'BlueLadder EPC Solution Pvt. Ltd.',
    logo: '/images/clients/blue-ladder.png',
    rating: 5,
    service: 'Construction Software',
  },
  {
    text: 'Right Serve Infotech System impressed us with their creativity and technical skills. They built a solution that not only looks great but also works flawlessly.',
    name: 'Harish Zade',
    role: 'Vidyacure Solution',
    logo: '/images/clients/vidyacure.png',
    rating: 5,
    service: 'Healthcare App',
  },
  {
    text: 'The team was awesome to work with. They listened to what we needed, gave great suggestions, and made sure everything ran smoothly. I’d definitely work with them again!',
    name: 'Kashish Jariye',
    role: 'Kashish Enterprises',
    logo: '/images/clients/kashish.png',
    rating: 5,
    service: 'Business Portal',
  },
  {
    text: 'Thanks to them, our workflow has become so much easier. Their software is intuitive, and the support team is always quick to respond. It’s been a really positive experience overall!',
    name: 'Ashish Londhe',
    role: 'Ashish Construction',
    logo: '/images/clients/ashish-construction.png',
    rating: 5,
    service: 'Document Automation',
  },
  {
    text: 'Right Serve is a genuine company. They did exactly what I requested and delivered it perfectly. I have no disappointment with them.',
    name: 'Akshay Bawane',
    role: 'Sky Enterprises',
    logo: '/images/clients/sky-enterprises.jpg',
    rating: 5,
    service: 'Website Development',
  },
  {
    text: 'Highly recommend Right Serve Infotech System Pvt. Ltd.! Reliable, creative, and always on time.',
    name: 'Krishnakant Giri',
    role: 'Gaurav Infra',
    logo: '/images/clients/gaurav-infra.png',
    rating: 5,
    service: 'Website & SEO',
  },
  {
    text: 'Loved the experience! Right Serve Infotech System understood exactly what we needed and delivered perfectly.',
    name: 'Nitish Ghadge',
    role: 'Live Pro Software Solution',
    logo: '/images/clients/livepro.png',
    rating: 5,
    service: 'Digital Marketing',
  },
]

export const AGGREGATE_RATING = {
  value: 4.9,
  count: TESTIMONIALS.length,
}
