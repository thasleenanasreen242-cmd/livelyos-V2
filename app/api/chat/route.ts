import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(message);

    const reply = result.response.text();

    return NextResponse.json({
      reply,
    });
  } catch (error: any) {
    console.error("FULL GEMINI ERROR:", error);

    return NextResponse.json(
      {
        reply:
          "⚠️ Lively AI is temporarily unavailable. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}