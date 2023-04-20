import keys from "./keys";
import { Pool } from "pg";

export const db = new Pool({
  // user: keys.pgUser,
  // host: keys.pgHost,
  // database: keys.pgDatabase,
  // password: keys.pgPassword,
  // port: Number(keys.pgPort),
  connectionString: keys.pgConnectionString,
});

db.on("connect", (client) => {
  client
    .query(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), passwordhash VARCHAR(255))"
    )
    .catch((error) => console.error(error));
  //   .catch((error) => console.error("drop table error =====>", error));
});
