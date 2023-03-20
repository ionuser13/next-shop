import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({
    "id": 13,
    "title": "Recycled Concrete Computer",
    "price": 461,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "images": [
      "https://api.lorem.space/image?w=640&h=480&r=5113",
      "https://api.lorem.space/image?w=640&h=480&r=1115",
      "https://api.lorem.space/image?w=640&h=480&r=6042"
    ],
    "creationAt": "2023-03-20T03:11:37.000Z",
    "updatedAt": "2023-03-20T03:11:37.000Z",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://api.lorem.space/image?w=640&h=480&r=4967",
      "creationAt": "2023-03-20T03:11:37.000Z",
      "updatedAt": "2023-03-20T03:11:37.000Z"
    }
  });
  return <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>{children}</ProductContext.Provider>;
};
