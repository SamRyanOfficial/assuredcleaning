export interface Review {
  author: string;
  rating: number;
  source: "Google";
  text: string;
}

export const reviews: Review[] = [
  {
    author: "Christine Hughes",
    rating: 5,
    source: "Google",
    text: "Holly and her team have done an absolutely fantastic job for the final exit clean of my house for the new owner. I highly recommend Holly and the team to any future owners or tenants looking for a professional exit clean. Thank you all very much.",
  },
  {
    author: "Martin Gibson",
    rating: 5,
    source: "Google",
    text: "We've used many cleaning companies, but Holly and her team at Assured Cleaning Services is at a whole other level in terms of service, professionalism and attention to detail. They're a happy, hard-working team who seem to take a genuine pride in how great my property looks, smells and feels when they leave – everything absolutely spotless and polished. The only cleaning company I'll use.",
  },
  {
    author: "Tania Collins",
    rating: 5,
    source: "Google",
    text: "Faultless from start to finish! Bringing these guys in was the best decision we made. Their attention to detail is next-level—real perfectionists who genuinely care about their clients. They went the extra mile for us, and we couldn't be happier with the result!",
  },
  {
    author: "Natalie Crosby",
    rating: 5,
    source: "Google",
    text: "We had just moved into our new home, finally, after a long settlement, and unfortunately, it had been left in a real state with years of built-up dust and dirt. We couldn't properly unpack or put things away until it was thoroughly cleaned. Holly was amazing enough to fit us in at very short notice and completely transformed the house with a full deep clean. Holly and her team were incredibly professional, friendly, particular and hardworking. They noticed and cleaned things that we hadn't even spotted yet, and didn't just do a quick surface clean, they really took the time to get everything properly cleaned. The difference was honestly incredible, and it was so good being able to finish unpacking and have our new home feeling like it was fresh, clean and ours. Thank you so much Holly and her team for going above and beyond. We are so grateful! Highly recommend!",
  },
  {
    author: "Ale",
    rating: 5,
    source: "Google",
    text: "What an amazing team! Attention to details is second to none, excellent communication and very fair prices for what you get. I highly recommend this company.",
  },
  {
    author: "Debbie Seaman",
    rating: 5,
    source: "Google",
    text: "We could not be happier with the service! Holly took care of everything while we were still in Auckland — before and after photos gave us complete peace of mind, and the house was absolutely spotless.",
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
];

/** Matches the live Google Business rating (5.0; update count when the profile changes). */
export const aggregateRating = {
  ratingValue: 5.0,
  reviewCount: 10,
};
