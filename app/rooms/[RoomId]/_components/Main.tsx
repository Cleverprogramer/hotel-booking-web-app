"use client";
import { imageGallery as Photos } from "@/components/Pages/RoomDetail/Page";
import ListingImageGallery from "@/components/Pages/RoomDetail/RoomDetailImages/ListImageGallery";
import { RoomsDataType } from "@/types/Rooms";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface IRoomComponents {
  data: RoomsDataType;
}

const Main = ({
  data,
  children,
}: {
  data: IRoomComponents;
  children: React.ReactNode;
}) => {
  const Router = useRouter();
  const PathName = usePathname();
  const SearchParams = useSearchParams();
  const modal = SearchParams?.get("modal");

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    Router.push(`${PathName}/?${params.toString()}` as string);
  };

  return (
    <div className="ListingDetailPage">
      <ListingImageGallery
        isShowModal={modal === "Room_Photos"}
        onClose={handleCloseModalImageGallery}
        images={data.data.galleryImages}
      />

      <div className="container ListingDetailPage__content">{children}</div>
    </div>
  );
};

export default Main;
