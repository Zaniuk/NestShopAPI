import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    database: {
      name: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
    },
    jwt: {
      secret: process.env.TOKEN_SECRET,
    },
  };
});
