import { NextResponse } from "next/server";
import RoomsData from "@/data/json/rooms.json";

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json(RoomsData, { status: 200 });
};
