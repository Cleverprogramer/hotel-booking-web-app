import prisma from "@/utils/db";

export const getOrderById = async (orderId: string) => {
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  return order;
};
