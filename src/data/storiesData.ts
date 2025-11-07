export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  location: string;
  date: string;
}

export const storiesData: Story[] = [
  {
    slug: "indonesia",
    title: "Catching the sunrise on Mount Rinjani Indonesia",
    excerpt: "Climbing to the summit of Indonesia's second-highest volcano.",
    image: "/images/indonesia.jpg",
    tags: ["Adventure", "Hiking", "International"],
    location: "Indonesia",
    date: "March 15, 2024"
  },
  {
    slug: "kyoto",
    title: "Visiting ancient shrines in Kyoto",
    excerpt: "Navigating through Japan's ancient capital.",
    image: "/images/kyoto.jpg",
    tags: ["Culture", "International", "Food"],
    location: "Japan",
    date: "February 10, 2024"
  },
  {
    slug: "laos",
    title: "Catching air in Vang Vieng",
    excerpt: "Testing Vang Vieng's reputation as an adventure city.",
    image: "/images/laos.jpg",
    tags: ["Adventure", "Water Sports", "International"],
    location: "Laos",
    date: "January 5, 2024"
  },
    {
    slug: "algonquin-fall",
    title: "Fall Paddling in Algonquin Park",
    excerpt: "A five-day canoe trip through Ontario's wilderness at peak fall colors.",
    image: "/images/at-home-canada.JPG",
    tags: ["Portaging", "Nature", "Adventure", "Canada"],
    location: "Algonquin Park, Ontario",
    date: "October 15, 2023"
  },
    {
    slug: "berg-lake",
    title: "Backpacking to Berg Lake",
    excerpt: "Hiking to one of Canada's most stunning alpine lakes beneath Mount Robson.",
    image: "/images/ab.jpg",
    tags: ["Backpacking", "Mountains", "Adventure", "Canada"],
    location: "Mount Robson Provincial Park, BC",
    date: "August 22, 2023"
  },
];