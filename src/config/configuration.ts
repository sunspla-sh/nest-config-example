export interface DatabaseConfig {
  user: string;
  pass: string;
}

export interface Config {
  port: number;
  database: DatabaseConfig;
}

export const configurationFactory = (): Config => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD,
  },
});
