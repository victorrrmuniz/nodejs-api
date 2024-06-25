
const config = {
    client: 'sqlite',
    connection: {
      filename: './db/app.db',
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'ts',
      directory: './db/migrations'
    }
};

module.exports = config;
