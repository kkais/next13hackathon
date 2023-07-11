import { headers } from "next/headers";

const headersData = headers();
const protocol = headersData.get("x-forwarded-proto");
const host = headersData.get("host");

export const live_url = `${protocol}://${host}`;