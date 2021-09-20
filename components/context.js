import React, { useState, useContext, createContext } from "react";

const productContext = createContext();

export function ProvideProduct({ children }) {
  const product = useProvideProduct();
  return (
    <productContext.Provider value={product}>
      {children}
    </productContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(productContext);
};

function useProvideProduct() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [categoryType, setCategoryType] = useState([
    "people",
    "premium",
    "pets",
    "food",
    "landmarks",
    "cities",
    "nature",
  ]);

  const [sort, setSort] = useState("name");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const onFilterByCategory = (value) => {
    // setCategoryType(newValues);
    const currentIndex = categoryType.indexOf(value);
    const newChecked = [...categoryType];

    // check if box is already checked
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCategoryType(newChecked);
  };

  const onFilterByPrice = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const onSort = (newValues) => {
    setSort(newValues);
  };

  const setCartItem = (item) => {
    setCart([...cart, item]);
  };

  const clearCartItem = () => {
    setCart([]);
    setCartOpen(false);
  };

  return {
    cart,
    categoryType,
    sort,
    minPrice,
    maxPrice,
    cartOpen,
    onFilterByCategory,
    onFilterByPrice,
    onSort,
    setCartItem,
    clearCartItem,
    setCartOpen,
  };
}
