export interface Review {
  author: string;
  rating: number;
  source: "Google";
  text: string;
}

export const reviews: Review[] = [
  {
    author: "Debbie Seaman",
    rating: 5,
    source: "Google",
    text: "We could not be happier with the service! Holly took care of everything while we were still in Auckland — before and after photos gave us complete peace of mind, and the house was absolutely spotless.",
  },
  {
    author: "Natalie Crosby",
    rating: 5,
    source: "Google",
    text: "Holly fitted us in at very short notice and completely transformed the house with a full deep clean — professional, particular, and they noticed things we hadn't even spotted yet. Highly recommend!",
  },
  {
    author: "Info Papa Mo's",
    rating: 5,
    source: "Google",
    text: 'One of our guests just left a 5 star review mentioning that the venue was "spotlessly clean" - massive thanks for all of your hard work over the past few months.',
  },
  {
    author: "Te Puke Sports and Recreation Club",
    rating: 5,
    source: "Google",
    text: "Thanks for taking care of Te Puke Sports this past season — the club rooms haven't looked this clean in a long time!",
  },
  {
    author: "Pauline Demarco",
    rating: 5,
    source: "Google",
    text: "It is very hard to find service or tradespeople in this day and age who have a good work ethic - Holly has this by the bucketload. I am delighted to have my expectations exceeded week after week.",
  },
  {
    author: "PC HUB",
    rating: 5,
    source: "Google",
    text: "Highly recommend — Holly is friendly, professional, and does an incredible job! The team go that extra mile every week, and communication has been excellent from the start.",
  },
  {
    author: "Ale",
    rating: 5,
    source: "Google",
    text: "What an amazing team! Attention to details is second to none, excellent communication and very fair prices for what you get. I highly recommend this company.",
  },
];

/** Matches the live Google Business rating (5.0, 7 reviews as of Sep 2026). */
export const aggregateRating = {
  ratingValue: 5.0,
  reviewCount: 7,
};
