import { pgTable, serial, text } from "drizzle-orm/pg-core";

const  BookDetail = pgTable('bookdetail', {
    id: serial('id').primaryKey(),
    title: text('title'),
    author: text('author'),
    isbn: text('isbn'),
  lang: text('lang'),
  });
   export default BookDetail;