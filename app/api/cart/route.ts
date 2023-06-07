import { db, cartTable } from "@/lib/drizzle/drizzle"
import { v4 as uuidv4 } from 'uuid';
import { cookies } from 'next/headers';

export const GET = async (request: Request) => {
  try {
    const result = await db.select().from(cartTable);
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

  const user_id = cookieStore.get("user_id")
  console.log(user_id);

  if(!user_id) {
    cookieStore.set("user_id", uid);

  }

  try {
    const result = await db.insert(cartTable).values({
      user_id: cookieStore.get("user_id")?.value as string,
      product_id: requestData.product_id,
      quantity: 1,
    }).returning();

    return new Response(JSON.stringify(result));

  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({message: "Something went wrong"}));

  }
}
