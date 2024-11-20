export type DestinationTypes = {
  thumbnail: string;
  slug: string;
  name: string;
  location: string;
  [key: string]: any;
};

export type Instruction = {
  icon: React.ReactNode;
  title: string;
  description: string;
  [key: string]: any;
};

export type Testimonial = {
  name: string;
  location: string;
  description: string;
  rating: number;
  className?: string;
  [key: string]: any;
};

export type ListingItemTypes = {
  slides: string[];
  time: string;
  caption: string;
  title: string;
  slug: string;
  location: string;
  price: string;
  rating?: number;
  ratingCount?: string;
  userAvatar?: string;
  [key: string]: any;
};

export type VendorTypes = {
  name: string;
  img: string;
  memberSince: string;
  languages: string[];
  responseRate: number;
  responseTime: string;
  location: string;
  boatName: string;
  boatGuests: number;
  boatCabins: number;
  boatBathrooms: number;
  totalReview: number;
};

export type EquipmentsTypes = {
  img: string;
  name: string;
}[];

export type SpecificationTypes = {
  name: string;
  details: string;
}[];

export type ReviewTypes = {
  avatar: string;
  name: string;
  date: string;
  rating: number;
  location: string;
  review: string;
};

export type ReviewStatsTypes = {
  totalReview: number;
  averageRating: number;
  stars: ReviewBarTypes[];
};

export type ReviewBarTypes = {
  count: number;
  percent: number;
};

export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;
