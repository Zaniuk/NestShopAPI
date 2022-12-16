import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    database: {
      name: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    jwt: {
      secret: process.env.TOKEN_SECRET,
    },
  };
});
