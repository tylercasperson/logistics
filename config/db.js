import Sequelize from 'sequelize';

const connectDB = async () => {
  try {
    const sequelize = await new Sequelize(
      process.env.database,
      process.env.username,
      process.env.password,
      {
        host: process.env.host,
        dialect: process.env.dialect,
      }
    );

    console.log(
      `Database Connected: ${sequelize.config.database} on ${sequelize.options.host}`
        .cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
