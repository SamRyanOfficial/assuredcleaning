export interface Review {
  author: string;
  rating: number;
  source: "Google";
  text: string;
}

export const reviews: Review[] = [
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
    text: "Highly recommend, Holly is friendly, professional, and does an incredible job! The Team go that extra mile every week making sure that our business is spick and span. Communication has been excellent from the start.",
  },
];

export const aggregateRating = {
  ratingValue: 5.0,
  reviewCount: reviews.length,
};
