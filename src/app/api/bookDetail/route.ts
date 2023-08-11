import { db } from "@/database";
import { NextRequest, NextResponse } from "next/server";
import BookDetail from "@/database/bookDetailschema";
import { eq } from "drizzle-orm";
export async function GETDATA(request: NextRequest) {
    const data = await db.select().from(BookDetail);
    return NextResponse.json(data);
}
export async function POST(request:NextRequest){
    const req=await request.json();
    const title=req.title;
    const id=req.id;
    const author=req.author;
    const isbn=req.isbn;
    const lang=req.lang;
    const data=await db.insert(BookDetail).values({id,title,author,isbn,lang});
return NextResponse.json(data);
}
export async function PUT(request:Request){
    const req=await request.json();
    const id=req.id;
    const data=await db.update(BookDetail).set({author:'Allama Iqbal'}).where(eq(BookDetail.id,5));
    return NextResponse.json(data);
  }

  export async function DELETE(request:Request){
    const req=await request.json();
    const id=req.id;
    const data=await db.delete(BookDetail).where(eq(BookDetail.id,9));
  }  
  


