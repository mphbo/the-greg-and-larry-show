interface IKeys {
  pgUser: string;
  pgHost: string;
  pgDatabase: string;
  pgPassword: string;
  pgPort: number | undefined;
  pgConnectionString: string;
  // cloudName: string;
  // cloudApiKey: string;
  // cloudApiSecret: string;

  // nextAuthSecret: string;

  // appId: string;
  // key: string;
  // secret: string;
  // cluster: string;
}

export default <IKeys>{
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT,
  pgConnectionString: process.env.PGCONNECTIONSTRING,

  // cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
  // cloudApiKey: process.env.CLOUD_API_KEY,
  // cloudApiSecret: process.env.CLOUD_API_SECRET,

  // nextAuthSecret: process.env.NEXTAUTH_SECRET,

  // appId: process.env.APP_ID,
  // key: process.env.KEY,
  // secret: process.env.SECRET,
  // cluster: process.env.CLUSTER,
};
