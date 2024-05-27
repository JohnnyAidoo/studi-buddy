import OpenAI from "openai";

const openai = new OpenAI({
  organization: "org-a0sTi9EX67twq8Lmfzt5gaR1",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: any) {
  const requestData = await req.json();
  const prompt = requestData["prompt"];

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4o",
  });

  // console.log(completion.choices[0]);
  return Response.json(completion.choices[0].message.content);
}
