import prisma from "@/utils/db";
import { stripe } from "@/utils/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { generateRandomNumber } from "@/utils/GenerateRandomKey";
import { getOrderById } from "@/constants/getOrderById";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");

    if (!signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      if (!event.data.object.customer_details?.email) {
        throw new Error("Missing user email");
      }

      const session = event.data.object as any;

      const isOrderExists = await getOrderById(
        session?.metadata?.orderId as string
      );

      if (isOrderExists) {
        await prisma.order.update({
          where: { id: isOrderExists.id as string },
          data: { isPaid: true, satatus: "shipped" },
        });
      }

      await prisma.booking.create({
        data: {
          userId: session?.metadata?.userId as string,
          checking: session?.metadata?.checking as string,
          checkout: session?.metadata?.checkout as string,
          nights: Number(session?.metadata?.nights),
          guests: Number(session?.metadata?.guests as string),
          price: Number(session?.metadata?.price),
          roomsId: session?.metadata?.roomId as string,
          bookingCode: generateRandomNumber(),
        },
      });
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Something went wrong", ok: false },
      { status: 500 }
    );
  }
}
