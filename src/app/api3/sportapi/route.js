import { NextResponse } from "next/server";

export async function GET() {
  // 1. Get the secret key from the server's environment
  const API_KEY = process.env.GNEWS_API_KEY;
  
  // 2. Fetch the data from the real GNews API
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=sport&apikey=${API_KEY}`,
      {
        // Optional: tell the server how long to cache this news (e.g., 1 hour)
        next: { revalidate: 3600 }, 
      }
    );

    const data = await response.json();

    // 3. Return the data to your frontend
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}