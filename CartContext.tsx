import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromCart: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, quantity: number, size: string, color: string) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItemIndex >= 0) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...prevItems, { ...product, quantity, selectedSize: size, selectedColor: color }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, size: string, color: string) => {
    setItems(prevItems => prevItems.filter(
      item => !(item.id === id && item.selectedSize === size && item.selectedColor === color)
    ));
  };

  const updateQuantity = (id: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color);
      return;
    }
    setItems(prevItems => prevItems.map(item => 
      (item.id === id && item.selectedSize === size && item.selectedColor === color)
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
