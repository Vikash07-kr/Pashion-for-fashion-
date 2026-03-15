export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  hoverImage?: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Oversized Cotton T-Shirt',
    price: 45,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    description: 'A premium oversized cotton t-shirt for everyday comfort and style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Beige']
  },
  {
    id: '2',
    name: 'Classic Denim Jacket',
    price: 120,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=800',
    description: 'Timeless denim jacket with a relaxed fit and vintage wash.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black']
  },
  {
    id: '3',
    name: 'Pleated Wide-Leg Trousers',
    price: 85,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0c500ba14174?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant wide-leg trousers featuring front pleats and a high waist.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Navy', 'Khaki', 'Black']
  },
  {
    id: '4',
    name: 'Ribbed Knit Sweater',
    price: 95,
    category: 'Knitwear',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    description: 'Cozy ribbed knit sweater made from a soft wool blend.',
    sizes: ['S', 'M', 'L'],
    colors: ['Cream', 'Grey', 'Olive']
  },
  {
    id: '5',
    name: 'Linen Blend Blazer',
    price: 150,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800',
    description: 'Lightweight linen blend blazer perfect for smart-casual occasions.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Sand', 'Navy']
  },
  {
    id: '6',
    name: 'Silk Slip Dress',
    price: 180,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant silk slip dress with a cowl neckline and adjustable straps.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Champagne', 'Emerald']
  },
  {
    id: '7',
    name: 'Leather Crossbody Bag',
    price: 210,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist leather crossbody bag with adjustable strap and gold-tone hardware.',
    sizes: ['One Size'],
    colors: ['Black', 'Tan', 'Burgundy']
  },
  {
    id: '8',
    name: 'Chunky Leather Loafers',
    price: 165,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800',
    description: 'Modern chunky loafers crafted from polished calf leather.',
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    colors: ['Black', 'Oxblood']
  },
  {
    id: '9',
    name: 'Cat-Eye Sunglasses',
    price: 85,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800',
    description: 'Vintage-inspired cat-eye sunglasses with UV400 protection.',
    sizes: ['One Size'],
    colors: ['Tortoise', 'Black']
  },
  {
    id: '10',
    name: 'Tailored Wool Vest',
    price: 110,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800',
    description: 'Sartorial wool vest that can be worn alone or layered.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Charcoal', 'Camel']
  },
  {
    id: '11',
    name: 'Cashmere Beanie',
    price: 65,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-soft 100% cashmere beanie for ultimate winter warmth.',
    sizes: ['One Size'],
    colors: ['Grey', 'Black', 'Oatmeal']
  },
  {
    id: '12',
    name: 'Silk Square Scarf',
    price: 55,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1608060434407-253306ee1c17?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&q=80&w=800',
    description: 'Printed silk square scarf, perfect for the neck, hair, or bag.',
    sizes: ['One Size'],
    colors: ['Geometric Print', 'Floral Print']
  },
  {
    id: '13',
    name: 'Oversized Trench Coat',
    price: 245,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591369822096-114085e187a4?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800',
    description: 'A modern take on the classic trench coat, featuring an oversized fit and water-resistant fabric.',
    sizes: ['S', 'M', 'L'],
    colors: ['Beige', 'Olive']
  },
  {
    id: '14',
    name: 'High-Waisted Mom Jeans',
    price: 98,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=800',
    description: 'Vintage-inspired high-waisted jeans with a relaxed, tapered leg.',
    sizes: ['24', '25', '26', '27', '28', '29', '30'],
    colors: ['Light Wash', 'Medium Wash', 'Black']
  },
  {
    id: '15',
    name: 'Minimalist Leather Sneakers',
    price: 135,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800',
    description: 'Clean and simple leather sneakers that pair perfectly with any outfit.',
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10'],
    colors: ['White', 'Black']
  },
  {
    id: '16',
    name: 'Satin Midi Skirt',
    price: 78,
    category: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&q=80&w=800',
    description: 'A fluid satin midi skirt that drapes beautifully.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Champagne', 'Black', 'Olive']
  }
];
