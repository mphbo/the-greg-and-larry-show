import keys from "./keys";
import { Pool } from "pg";

export const db = new Pool({
  // user: keys.pgUser,
  // password: keys.pgPassword,
  // host: keys.pgHost,
  // port: Number(keys.pgPort),
  // database: keys.pgDatabase,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionString:
    "postgres://vvklnihcpjbbkp:0e5ba9a9fdf970b41fbe6b849f815680125d5ea9fe6cd396c17a2634c105ead2@ec2-34-197-91-131.compute-1.amazonaws.com:5432/ddanennelcknv4",
});

db.on("connect", (client) => {
  // client.query("DROP TABLE users").catch((error) => console.error(error));
  // client
  //   .query(
  //     "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255), firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), passwordhash VARCHAR(255))"
  //   )
  //   .catch((error) => console.error(error));
  //   .catch((error) => console.error("drop table error =====>", error));
});
