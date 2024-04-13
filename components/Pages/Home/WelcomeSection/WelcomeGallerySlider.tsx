"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { variants } from "@/utils/animationVariants";
import Link from "next/link";

export interface WelcomeGallerySliderProps {
  className?: string;
  galleryImgs: (StaticImageData | string)[];
  ratioClass?: string;
  uniqueID: string;
  href?: string;
  imageClass?: string;
  galleryClass?: string;
  navigation?: boolean;
}

export default function WelcomeGallerySlider({
  className = "",
  galleryImgs,
  ratioClass = "",
  imageClass = "",
  uniqueID = "uniqueID",
  galleryClass = "rounded-xl",
  href = "/listing-stay-detail",
  navigation = true,
}: WelcomeGallerySliderProps) {
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const images = galleryImgs;
  console.log(images[index]);
  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  let currentImage = images[index];

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      <div className={` ${className}`}>
        {/* Main image */}
        <div className={`w-full ${galleryClass}`}>
          <Link href={href}>
            <AnimatePresence initial={true} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants(340, 1)}
                initial="center"
                animate=""
                exit="exit">
                <Image
                  src={galleryImgs[index]}
                  fill
                  alt="listing card gallery"
                  className={` ${imageClass}`}
                  onLoadingComplete={() => setLoaded(false)}
                  sizes="(max-width: 10025px) 1000vw, 9000px"
                />
              </motion.div>
            </AnimatePresence>
          </Link>
        </div>

        <>
          {/* Buttons */}
          {loaded && navigation && (
            <div className="opacity-0 group-hover/cardGallerySlider:opacity-100 transition-opacity ">
              {index > 0 && (
                <button
                  className="absolute w-8 h-8 left-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  onClick={() => changePhotoId(index - 1)}>
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
              )}
              {index + 1 < images.length && (
                <button
                  className="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  onClick={() => changePhotoId(index + 1)}>
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              )}
            </div>
          )}

          {/* Bottom Nav bar */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-neutral-900 opacity-50 rounded-b-lg"></div>
          <div className="flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5">
            {images.map((_, i) => (
              <button
                className={`w-1.5 h-1.5 rounded-full ${
                  i === index ? "bg-white" : "bg-white/60 "
                }`}
                onClick={() => changePhotoId(i)}
                key={i}
              />
            ))}
          </div>
        </>
      </div>
    </MotionConfig>
  );
}
