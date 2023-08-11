import { pgTable, serial, text, varchar } from "../../node_modules/drizzle-orm/pg-core";
 
 const  Books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: text('title'),
  author: text('author'),
});
 export default Books;


