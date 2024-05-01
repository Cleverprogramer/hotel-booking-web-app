import { RoomsDataType } from "@/types/Rooms";
import Main from "./_components/Main";
import { GetRoomById } from "@/utils/GetRoomById";

interface IRoomDetailLayout {
  data: RoomsDataType;
  error: { error: string };
}

const RoomDetailLayout = async ({
  children,
  params: { RoomId },
}: {
  children: React.ReactNode;
  params: { RoomId: string };
}) => {
  const data: IRoomDetailLayout = await GetRoomById(RoomId);
  return <Main data={data}>{children}</Main>;
};

export default RoomDetailLayout;
