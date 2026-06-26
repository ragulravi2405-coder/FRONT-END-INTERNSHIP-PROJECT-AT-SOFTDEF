export interface Plant {
  id: string;
  name: string;
  category?: string;
  description: string;
  price: number;
  imageUrl: string;
  isTrending?: boolean;
  isTopSeller?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}
