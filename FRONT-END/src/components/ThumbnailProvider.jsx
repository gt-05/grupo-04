import React from "react";

export default function Thumbnail() {
  const images = [
    "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/product-thumb-1.jpeg",
    "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/product-thumb-2.jpeg",
    "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/product-thumb-3.jpeg",
    "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/product-thumb-4.jpeg",
    "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/product-thumb-5.jpeg",
  ];

  return (
    <div className="thumbnail-images flex gap-[26px] mt-[10px] mb-[30px] cursor-pointer">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className="border rounded-[5px]"
        />
      ))}
    </div>
  );
}
