export type Venue = {
  id: number;
  city: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  tag: string | null;
  tagColor?: string;
  tagBg?: string;
  description?: string;
  img: string;
  layout: "tall" | "wide";
};

export const DEFAULT_CITY = "Delhi NCR";

export const cityAliases: Record<string, string[]> = {
  "Delhi NCR": ["Delhi", "Delhi NCR", "Gurgaon", "Noida"],
};

export const venues: Venue[] = [
  {
    id: 1,
    city: "Delhi",
    name: "The Royal Heritage Palace",
    location: "Chanakyapuri, New Delhi",
    price: "Rs. 2,40,000",
    rating: 4.9,
    tag: "PREMIUM ELITE",
    tagColor: "#b8860b",
    tagBg: "#fff8e1",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80",
    layout: "tall",
  },
  {
    id: 2,
    city: "Delhi",
    name: "Lakeside Manor & Gardens",
    location: "Sohna Road, Gurgaon",
    price: "Rs. 1,75,000",
    rating: 4.7,
    tag: null,
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80",
    layout: "tall",
  },
  {
    id: 3,
    city: "Delhi",
    name: "Imperial Palms Banquet",
    location: "Noida Sector 150",
    price: "Rs. 3,50,000",
    rating: 4.8,
    tag: "NEW OPENING",
    tagColor: "#C8102E",
    tagBg: "#fff0f0",
    description:
      "Experience unparalleled luxury at the Imperial Palms with a pillarless hall and catering curated for grand wedding weekends.",
    img: "https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=900&q=80",
    layout: "wide",
  },
  {
    id: 4,
    city: "Mumbai",
    name: "The Sea Pearl Ballroom",
    location: "Worli Sea Face, Mumbai",
    price: "Rs. 3,10,000",
    rating: 4.8,
    tag: "SEA VIEW",
    tagColor: "#0f766e",
    tagBg: "#ecfdf5",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80",
    layout: "tall",
  },
  {
    id: 5,
    city: "Mumbai",
    name: "Aurum Grand Pavilion",
    location: "Bandra Kurla Complex, Mumbai",
    price: "Rs. 2,85,000",
    rating: 4.6,
    tag: null,
    description:
      "A polished city venue with refined interiors, high-touch hospitality, and flexible spaces for ceremonies and receptions.",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=80",
    layout: "wide",
  },
  {
    id: 6,
    city: "Jaipur",
    name: "Rajwada Courtyard Palace",
    location: "Amer Road, Jaipur",
    price: "Rs. 2,65,000",
    rating: 4.9,
    tag: "PALACE",
    tagColor: "#b8860b",
    tagBg: "#fff8e1",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
    layout: "tall",
  },
  {
    id: 7,
    city: "Udaipur",
    name: "Lake Aurelia Resort",
    location: "Lake Pichola, Udaipur",
    price: "Rs. 4,20,000",
    rating: 4.9,
    tag: "DESTINATION",
    tagColor: "#7c2d12",
    tagBg: "#fff7ed",
    description:
      "A destination wedding address with lake views, sunset pheras, and multi-day celebration spaces.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=900&q=80",
    layout: "wide",
  },
  {
    id: 8,
    city: "Goa",
    name: "Casa Marigold Beach Estate",
    location: "Candolim, Goa",
    price: "Rs. 2,20,000",
    rating: 4.7,
    tag: "BEACHFRONT",
    tagColor: "#0369a1",
    tagBg: "#eff6ff",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    layout: "tall",
  },
  {
    id: 9,
    city: "Bangalore",
    name: "The Gardenia Conservatory",
    location: "Whitefield, Bangalore",
    price: "Rs. 1,95,000",
    rating: 4.6,
    tag: "GARDEN",
    tagColor: "#166534",
    tagBg: "#f0fdf4",
    img: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=900&q=80",
    layout: "tall",
  },
  {
    id: 10,
    city: "Hyderabad",
    name: "Nawab Sapphire Halls",
    location: "Banjara Hills, Hyderabad",
    price: "Rs. 2,30,000",
    rating: 4.7,
    tag: "HERITAGE",
    tagColor: "#b8860b",
    tagBg: "#fff8e1",
    img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&q=80",
    layout: "tall",
  },
  {
    id: 11,
    city: "Chennai",
    name: "Coromandel Grand",
    location: "ECR, Chennai",
    price: "Rs. 1,80,000",
    rating: 4.5,
    tag: null,
    description:
      "A warm coastal venue for traditional ceremonies, formal receptions, and elegant family gatherings.",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
    layout: "wide",
  },
];
