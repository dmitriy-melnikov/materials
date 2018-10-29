require(`dotenv`).config();

console.log(`Db host address: ${process.env.DB_HOST}`);
console.log(`Db username: ${process.env.DB_USER}`);
console.log(`Db password: ${process.env.DB_PASSWORD}`);
