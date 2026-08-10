import { promises as fs } from "fs";
import path from "path";

export type OrderStatus = "New" | "Contacted" | "In Design" | "Completed";
export type Order = { id: string; createdAt: string; status: OrderStatus; category: string; product: string; name: string; phone: string; email?: string; city: string; recipient?: string; occasion?: string; quote?: string; colours?: string; date?: string; budget?: string; notes?: string };
const file = path.join(process.cwd(), "data", "orders.json");
export async function getOrders(): Promise<Order[]> { try { return JSON.parse(await fs.readFile(file,"utf8")); } catch { return []; } }
export async function saveOrder(order: Omit<Order,"id"|"createdAt"|"status">) { const orders=await getOrders(); const item: Order={...order,id:crypto.randomUUID(),createdAt:new Date().toISOString(),status:"New"}; await fs.writeFile(file,JSON.stringify([item,...orders],null,2)); return item; }
export async function updateOrder(id:string,status:OrderStatus) { const orders=await getOrders(); const next=orders.map(o=>o.id===id?{...o,status}:o); await fs.writeFile(file,JSON.stringify(next,null,2)); return next.find(o=>o.id===id); }
