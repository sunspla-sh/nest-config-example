export const configurationFactory = () => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD,
  },
});
