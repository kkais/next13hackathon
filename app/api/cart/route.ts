import { db, cartTable } from "@/lib/drizzle/drizzle"
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';
import { and, eq, sql } from "drizzle-orm";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('user_id');
  try {
    const result = await db.select({
      id: cartTable.id,
      user_id: cartTable.user_id,
      product_id: cartTable.product_id,
      quantity: sql<number>`sum(${cartTable.quantity})`.mapWith(Number)
     })
    .from(cartTable)
    .where(eq(cartTable.user_id, `${id}`))
    .groupBy(cartTable.id, cartTable.product_id);

    // console.log(result)
    return new Response(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({message: "Something went wrong"}));

  }
}

export const POST = async (request: Request) => {
  const requestData = await request.json();
  const uid = uuidv4();
  const cookieStore = cookies();
  const user_id = cookieStore.get("user_id");
  let result, cartItem;

  if(!user_id) {
    cookieStore.set("user_id", uid);
  }

  try {
    try {
      cartItem = await db.select()
      .from(cartTable)
      .where(
        and(
          eq(cartTable.user_id, cookieStore.get("user_id")?.value as string),
          eq(cartTable.product_id, requestData.product_id),
        )
      );
      // console.log("CartItem", cartItem)
  
    } catch (error) {
      console.log(error);
  
    }
    
    if (cartItem?.length) {
      const qty = parseInt(cartItem[0].quantity) + requestData.quantity
    
      result = await db.update(cartTable).set({
        quantity: qty,
      })
      .where(
        and(
          eq(cartTable.user_id, cookieStore.get("user_id")?.value as string), 
          eq(cartTable.product_id, requestData.product_id)
        )
      )
      .returning();
    
    } else {
      result = await db.insert(cartTable).values({
        user_id: cookieStore.get("user_id")?.value as string,
        product_id: requestData.product_id,
        quantity: requestData.quantity,
      }).returning();
    
    }

    return new Response(JSON.stringify(result));

  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({message: "Something went wrong"}));

  }
}
