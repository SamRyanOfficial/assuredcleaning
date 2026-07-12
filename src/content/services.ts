export const premisesTypes = [
  {
    id: "offices",
    title: "Offices",
    description:
      "Professional office cleaning that keeps your workspace presentable for staff, clients and visitors — every day.",
    icon: "building",
  },
  {
    id: "retail",
    title: "Retail Stores",
    description:
      "First impressions matter. We help retail businesses maintain spotless floors, fixtures and customer areas.",
    icon: "store",
  },
  {
    id: "hospitality",
    title: "Hospitality Venues",
    description:
      "From cafés to restaurants, we understand the hygiene and presentation standards hospitality demands.",
    icon: "utensils",
  },
  {
    id: "medical",
    title: "Medical Practices",
    description:
      "Careful, consistent cleaning for medical and healthcare environments where hygiene is non-negotiable.",
    icon: "medical",
  },
  {
    id: "wellness",
    title: "Health & Wellness Centres",
    description:
      "Clean, welcoming spaces that reflect the care your clients expect from your wellness business.",
    icon: "wellness",
  },
  {
    id: "gyms",
    title: "Gyms",
    description:
      "Thorough cleaning of workout areas, changerooms and high-traffic zones to keep members confident.",
    icon: "gym",
  },
  {
    id: "commercial",
    title: "General Commercial Premises",
    description:
      "Whatever your premises, our goal is the same: leave your business looking its absolute best.",
    icon: "commercial",
  },
] as const;

export const serviceExpectations = [
  "Reliable & consistent service",
  "Attention to detail",
  "Friendly, professional communication",
  "Flexible cleaning schedules",
  "Fully insured",
  "Satisfaction guaranteed",
] as const;

export const beforeAfterPairs = [
  {
    title: "Wall restoration",
    before: "/images/before-after/wall-before.jpg",
    after: "/images/before-after/wall-after.jpg",
    alt: "Commercial wall cleaning in Tauranga — before and after",
  },
  {
    title: "Floor cleaning",
    before: "/images/before-after/floor-before.jpg",
    after: "/images/before-after/floor-after.jpg",
    alt: "Commercial floor cleaning in Mt Maunganui — before and after",
  },
  {
    title: "Bathroom deep clean",
    before: "/images/before-after/bathroom-before.jpg",
    after: "/images/before-after/bathroom-after.jpg",
    alt: "Commercial bathroom cleaning in Papamoa — before and after",
  },
  {
    title: "Stairwell cleaning",
    before: "/images/before-after/stairs-before.jpg",
    after: "/images/before-after/stairs-after.jpg",
    alt: "Commercial stairwell cleaning in Te Puke — before and after",
  },
] as const;
