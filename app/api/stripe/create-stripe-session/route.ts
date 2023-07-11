import { live_url } from "@/utils";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});


export async function POST(req: Request) {
  const { items } = await req.json();
  const item = items[0];
  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        description: item.description,
        images: [item.image],
        metadata: {},

      },
      unit_amount: item.price * 100,

    },
    quantity: item.quantity,

  };
  
  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : live_url;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '/payment/success',
    cancel_url: redirectURL + '/payment/fail',
    metadata: {
      images: item.image,
      name: item.name,
      task: "Khurram created a task"
    },
  });

  //    console.log("response-------------------",await session);
  return new Response(JSON.stringify({session:session?.id}));
};
