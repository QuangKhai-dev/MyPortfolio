"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/experience_1.png",
  "/experience_2.png",
  "/experience_3.png",
  "/aboutme.png",
];

export default function CarouselExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[300px] h-[400px]">
      <AnimatePresence initial={false}>
        {images.map((src, index) => {
          const offset = (index - currentIndex + images.length) % images.length;
          return (
            <motion.div
              key={src}
              className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg"
              initial={{ scale: 0.8, y: 100, opacity: 1 }}
              animate={{
                scale: offset === 0 ? 1 : 0.8,
                y: offset === 0 ? 0 : 50,
                x: offset === 1 ? 150 : offset === images.length - 1 ? -150 : 0,
                zIndex: offset === 0 ? 3 : 1,
                opacity: offset === 0 ? 1 : 0.5,
              }}
              exit={{ scale: 0.8, y: -100, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
