import 'dotenv/config'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found')
}

const config = {
    client: 'sqlite',
    connection: {
      filename: process.env.DATABASE_URL,
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'ts',
      directory: './db/migrations'
    }
};

module.exports = config;
