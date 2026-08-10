import { NextResponse } from "next/server";
import { getOrders, saveOrder, updateOrder, type OrderStatus } from "@/lib/orders";
export async function GET(){ return NextResponse.json(await getOrders()); }
export async function POST(request:Request){ const body=await request.json(); return NextResponse.json(await saveOrder(body),{status:201}); }
export async function PATCH(request:Request){ const {id,status}=await request.json() as {id:string;status:OrderStatus}; return NextResponse.json(await updateOrder(id,status)); }
