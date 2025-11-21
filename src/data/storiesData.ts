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
    slug: "getting-started",
    title: "So You Want to get into the Backcountry... Gear Edition",
    excerpt: "The ultimate guide detailing what you need to get started.",
    image: "/images/GettingStartedGuide/mountmacfarlane2.jpg",
    tags: ["Portaging", "Backpacking", "How to Guides"],
    location: "Canada",
    date: "November 8, 2025"
  },
    {
    slug: "berg-lake",
    title: "Backpacking to Berg Lake",
    excerpt: "Hiking to one of Canada's most stunning alpine lakes beneath Mount Robson.",
    image: "/images/bc.jpg",
    tags: ["Backpacking", "Mountains", "Adventure", "Canada"],
    location: "Mount Robson Provincial Park, BC",
    date: "August 22, 2023"
  },
];