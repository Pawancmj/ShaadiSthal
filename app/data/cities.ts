export type City = {
  name: string;
  venues: string;
  image: string;
  region: string;
  description: string;
};

export const cities: City[] = [
  {
    name: "Delhi",
    venues: "1,200+ Venues",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
    region: "Heritage Capital",
    description: "Regal ballrooms, garden estates, and polished NCR celebrations.",
  },
  {
    name: "Mumbai",
    venues: "980+ Venues",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=900&q=80",
    region: "Coastal Luxury",
    description: "Sea-facing hotels, rooftop vows, and grand urban receptions.",
  },
  {
    name: "Jaipur",
    venues: "760+ Venues",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
    region: "Royal Rajasthan",
    description: "Palace courtyards, sandstone facades, and timeless royal rituals.",
  },
  {
    name: "Udaipur",
    venues: "540+ Venues",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=900&q=80",
    region: "Lake City",
    description: "Lakefront mandaps, destination resorts, and cinematic sunsets.",
  },
  {
    name: "Goa",
    venues: "430+ Venues",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    region: "Beach Ceremonies",
    description: "Sunlit vows, resort lawns, and relaxed luxury by the sea.",
  },
  {
    name: "Bangalore",
    venues: "610+ Venues",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80",
    region: "Garden City",
    description: "Contemporary hotels, breezy lawns, and elegant city celebrations.",
  },
  {
    name: "Hyderabad",
    venues: "490+ Venues",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&q=80",
    region: "Nawabi Grandeur",
    description: "Opulent banquets, heritage halls, and cuisine-led celebrations.",
  },
  {
    name: "Chennai",
    venues: "370+ Venues",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
    region: "Temple Coast",
    description: "Classic hotels, cultural ceremonies, and refined coastal charm.",
  },
];

export const trendingCities = cities.slice(0, 4);
