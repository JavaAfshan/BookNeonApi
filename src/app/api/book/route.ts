import { NextRequest, NextResponse } from "next/server";
import Books from "@/database/schema";
import {db} from "../../../database/index";
import {eq} from "drizzle-orm"


export async function GET(request:NextRequest)
{
  const res = await fetch(`${'http://localhost:3000/api/bookDetail'}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Something went Wrong");
  }
  return res.json();
  // const data=await db.select().from(Books)
  // return NextResponse.json(data)
}

export async function POST(request:Request){
  const req=await request.json();
  const title=req.title;
  const id=req.id;
  const author=req.author;
  const data=await db.insert(Books).values({author,id,title});
  return NextResponse.json(data)
}

export async function PUT(request:Request){
  const req=await request.json();
  const id=req.id;
  const data=await db.update(Books).set({title:'The Pakistani'}).where(eq(Books.id,2));
  return NextResponse.json(data);
}

export async function DELETE(request:Request){
  const req=await request.json();
  const id=req.id;
  const data=await db.delete(Books).where(eq(Books.id,4));
}  



//Get
// export async function GET(request: NextRequest) {
//     return NextResponse.json({
//       From: "Zia",
//       Message: "Greetings from Pakistan",
//       RequestType: "GET"
//     });
// }

//Post
// export async function POST(request: NextRequest) {
//     const req = await request.json();
//     if(req.name){
//       return NextResponse.json({
//         To: "Zia",
//         Message: "All well here",
//         RequestType: "POST"
//       });
//     }
//     else {
//       return new NextResponse('Please include your name in the POST request');
//     }
//   }

// export async function PUT(request: NextRequest) {
//     const req = await request.json();
//     if(req.name){
//       return NextResponse.json({
//         To: "Zia",
//         Message: "This is a updated greeting",
//         RequestType: "PUT"
//       });
//     }
//     else {
//       return new NextResponse('Please include your name in the PUT request');
//     }
//   }


// export async function DELETE(request: NextRequest) {
//     const req = await request.json();
//     if(req.name){
//       return NextResponse.json({
//         To: "Zia",
//         Message: "I have deleted the greetings",
//         RequestType: "DELETE"
//       });
//     }
//     else {
//       return new NextResponse('Please include your name in the DELETE request');
//     }
//   }

