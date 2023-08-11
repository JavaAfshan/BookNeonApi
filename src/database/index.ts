
// postgres://afshan.bsit490:2vUgtMlorTn6@ep-soft-field-90206132.us-east-2.aws.neon.tech/neondb
import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
 
neonConfig.fetchConnectionCache = true;
 
const sql = neon("postgres://afshan.bsit490:2vUgtMlorTn6@ep-soft-field-90206132.us-east-2.aws.neon.tech/neondb");
export const db = drizzle(sql);
 
