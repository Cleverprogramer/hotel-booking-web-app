"use client";

import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import SharedModal from "./SharedModal";
import { Route } from "next";
import { getNewParam } from "./ListImageGallery";

export default function Modal({
  images,
  onClose,
}: {
  images: string[];
  onClose?: () => void;
}) {
  let overlayRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const thisPathname = usePathname();
  const photoId = searchParams?.get("photoId");
  let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    onClose && onClose();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    router.push(`${thisPathname}?${getNewParam({ value: newVal })}` as Route);
  }

  return (
    <>
      <Dialog
        static
        open={true}
        onClose={handleClose}
        initialFocus={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center ">
        <Dialog.Overlay
          ref={overlayRef}
          as={motion.div}
          key="backdrop"
          className="fixed inset-0 z-30 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <SharedModal
          index={curIndex}
          direction={direction}
          images={images}
          changePhotoId={changePhotoId}
          closeModal={handleClose}
          navigation={true}
        />
      </Dialog>
    </>
  );
}
