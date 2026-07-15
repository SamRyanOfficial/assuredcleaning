export const premisesTypes = [
  {
    id: "offices",
    title: "Offices & Organisations",
    description:
      "Presentable workspaces for staff, clients and visitors — every day.",
    detail:
      "Professional office cleaning that keeps your workspace presentable for staff, clients and visitors — every day.",
    icon: "building",
  },
  {
    id: "retail",
    title: "Retail Stores",
    description:
      "Spotless floors, fixtures and customer areas that make a strong first impression.",
    detail:
      "First impressions matter. We help retail businesses maintain spotless floors, fixtures and customer areas.",
    icon: "store",
  },
  {
    id: "hospitality",
    title: "Hospitality Venues",
    description:
      "Hygiene and presentation standards that cafés and restaurants demand.",
    detail:
      "From cafés to restaurants, we understand the hygiene and presentation standards hospitality demands.",
    icon: "hospitality",
  },
  {
    id: "medical",
    title: "Medical Practices",
    description:
      "Careful, consistent cleaning where hygiene is non-negotiable.",
    detail:
      "Careful, consistent cleaning for medical and healthcare environments where hygiene is non-negotiable.",
    icon: "medical",
  },
  {
    id: "wellness",
    title: "Health & Wellness",
    description:
      "Welcoming spaces that reflect the care your clients expect.",
    detail:
      "Clean, welcoming spaces that reflect the care your clients expect from your wellness business.",
    icon: "wellness",
  },
  {
    id: "gyms",
    title: "Gyms",
    description:
      "Thorough cleaning of high-traffic workout areas and changerooms.",
    detail:
      "Thorough cleaning of workout areas, changerooms and high-traffic zones to keep members confident.",
    icon: "gym",
  },
  {
    id: "commercial",
    title: "General Commercial",
    description:
      "Whatever your premises, we leave your business looking its absolute best.",
    detail:
      "Whatever your premises, our goal is the same: leave your business looking its absolute best.",
    icon: "commercial",
  },
] as const;

export const specialisedServices = [
  {
    id: "tenancy",
    title: "End of Tenancy Cleans",
    description:
      "Inspection-ready cleans to help tenants, landlords and property managers prepare for handover.",
    icon: "tenancy",
  },
  {
    id: "builders",
    title: "Builders Cleans",
    description:
      "From post-construction dust to final presentation, we prepare new spaces for handover.",
    icon: "builders",
  },
  {
    id: "window",
    title: "Professional Window Cleaning",
    description:
      "Crystal-clear windows that enhance your property's first impression.",
    icon: "window",
  },
  {
    id: "deep",
    title: "Deep Cleans",
    description:
      "Ideal for periodic resets, neglected areas or preparing premises for a fresh start.",
    icon: "deep",
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

export const premisesBeforeAfterMap = {
  offices: {
    title: "Office cleaning",
    before: "/images/before-after/floor-before.jpg",
    after: "/images/before-after/floor-after.jpg",
    alt: "Office and organisation premises cleaning by Assured Cleaning Services",
  },
  retail: {
    title: "Retail cleaning",
    before: "/images/before-after/retail-9183.png",
    after: "/images/before-after/retail-9179.png",
    alt: "Retail store cleaning by Assured Cleaning Services",
  },
  hospitality: {
    title: "Hospitality cleaning",
    before: "/images/before-after/wellness-9192.jpg",
    after: "/images/before-after/wellness-9208.jpg",
    alt: "Hospitality venue cleaning by Assured Cleaning Services",
  },
  medical: {
    title: "Medical practice cleaning",
    before: "/images/before-after/medical-9107.png",
    after: "/images/before-after/medical-9094.png",
    alt: "Medical practice cleaning by Assured Cleaning Services",
  },
  wellness: {
    title: "Health & wellness cleaning",
    before: "/images/before-after/wellness-office.png",
    after: "/images/before-after/wellness-9082.png",
    alt: "Health and wellness premises cleaning by Assured Cleaning Services",
    beforeObjectPosition: "center 20%",
    afterZoom: 1.2,
  },
  gyms: {
    title: "Gym cleaning",
    before: "/images/before-after/gym-9262.jpg",
    after: "/images/before-after/gym-9271.jpg",
    alt: "Gym and sports facility cleaning by Assured Cleaning Services",
  },
} as const;
