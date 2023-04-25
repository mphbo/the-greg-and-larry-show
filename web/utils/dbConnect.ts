import keys from "./keys";
import { Pool } from "pg";

export const db = new Pool({
  user: keys.pgUser,
  password: keys.pgPassword,
  host: keys.pgHost,
  port: Number(keys.pgPort),
  database: keys.pgDatabase,
  ssl: true,
});

db.on("connect", (client) => {
  // client.query("DROP TABLE users").catch((error) => console.error(error));
  client
    .query(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255), firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), passwordhash VARCHAR(255))"
    )
    .catch((error) => console.error(error));
  //   .catch((error) => console.error("drop table error =====>", error));
});
