import { Plant, Review } from "../types";

export const TOP_SELLING_PLANTS: Plant[] = [
  {
    id: "top-1",
    name: "Aglaonema plant",
    category: "Indoor Plant",
    description: "The Aglaonema plant, commonly known as Chinese Evergreen, is known for its attractive foliage and ease of care.",
    price: 300,
    imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600",
    isTopSeller: true,
  },
  {
    id: "top-2",
    name: "Plantain Lilies",
    category: "Indoor Plant",
    description: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600",
    isTopSeller: true,
  },
  {
    id: "top-3",
    name: "Cactus",
    category: "Succulent",
    description: "It is known for their ability to thrive in arid environments with minimal watering and care.",
    price: 259,
    imageUrl: "https://images.unsplash.com/photo-1517256064527-09c53b2d0ec6?auto=format&fit=crop&q=80&w=600",
    isTopSeller: true,
  },
  {
    id: "top-4",
    name: "Swiss cheese Plant",
    category: "Indoor Plant",
    description: "It is a popular tropical houseplant known for its distinctive, perforated leaves and structural elegance.",
    price: 400,
    imageUrl: "https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=600",
    isTopSeller: true,
  },
  {
    id: "top-5",
    name: "Sansevieria plant",
    category: "Indoor Plant",
    description: "It is a popular indoor plant admired for its striking upright appearance and low-maintenance nature.",
    price: 450,
    imageUrl: "https://images.unsplash.com/photo-1508022849419-b7757622e785?auto=format&fit=crop&q=80&w=600",
    isTopSeller: true,
  },
  {
    id: "top-6",
    name: "Agave plant",
    category: "Succulent",
    description: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: 359,
    imageUrl: "https://images.unsplash.com/photo-1612360424412-25ad18c94297?auto=format&fit=crop&q=80&w=600",
    isTopSeller: true,
  },
];

export const TRENDING_PLANTS: Plant[] = [
  {
    id: "trend-1",
    name: "Desk Decoration Plant (Beige)",
    category: "Desk Decoration",
    description: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: 599,
    imageUrl: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=600",
    isTrending: true,
  },
  {
    id: "trend-2",
    name: "Desk Decoration Plant (Blue)",
    category: "Desk Decoration",
    description: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
    price: 399,
    imageUrl: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600",
    isTrending: true,
  },
];

export const O2_PLANTS: Plant[] = [
  {
    id: "o2-1",
    name: "Chinese Evergreen",
    category: "O₂ Air Purifier",
    description: "Oxygen-producing Chinese Evergreen releases active oxygen overnight, purifying formaldehydes.",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "o2-2",
    name: "Snake Plant",
    category: "O₂ Air Purifier",
    description: "Releases oxygen overnight and filters out common household toxins effectively.",
    price: 450,
    imageUrl: "https://images.unsplash.com/photo-1508022849419-b7757622e785?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "o2-3",
    name: "Peace Lily",
    category: "O₂ Air Purifier",
    description: "Cleanses air from trichloroethylene and increases overall humidity levels.",
    price: 340,
    imageUrl: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=600",
  },
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Shelly Russel",
    rating: 5,
    comment: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "rev-2",
    name: "Lula Rolfson",
    rating: 5,
    comment: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "rev-3",
    name: "Carol Huels",
    rating: 5,
    comment: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
];
