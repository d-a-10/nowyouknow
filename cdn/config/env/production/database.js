module.exports = ({ env }) => {
  // Railway provides DATABASE_URL automatically
  if (env('DATABASE_URL')) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: {
            rejectUnauthorized: false,
          },
        },
        debug: false,
      },
    };
  }

  // Fallback for individual database env vars
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};
  
  