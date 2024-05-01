import Page404 from "@/app/not-found";
import RoomDetailPageComponent from "@/components/Pages/RoomDetail/Page";
import Reviews from "@/components/Pages/RoomDetail/RoomDetailImages/Sections/ReviewComponents/Reviews";
import { RoomsDataType } from "@/types/Rooms";
import { GetRoomById } from "@/utils/GetRoomById";
import React from "react";

interface IRoomDetail {
  data: RoomsDataType;
  error: { error: string };
}

const RoomDetailPage = async ({
  params: { RoomId },
}: {
  params: { RoomId: string };
}) => {
  const data: IRoomDetail = await GetRoomById(RoomId);
  if (data.error) {
    return <Page404 />;
  }
  return (
    <RoomDetailPageComponent data={data.data}>
      <Reviews RoomId={RoomId} />
    </RoomDetailPageComponent>
  );
};

export default RoomDetailPage;
