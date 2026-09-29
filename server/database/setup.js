require("dotenv").config();

const { Client } = require("pg");

const adminUrl = process.env.POSTGRES_ADMIN_URL;
if (!adminUrl) {
  throw new Error("POSTGRES_ADMIN_URL must be set to create the database.");
}

const dbUser = "hnitsolutions";
const dbPassword = "hnitsolutions";
const dbName = "HNitSolutions";

async function setup() {
  const admin = new Client({ connectionString: adminUrl });
  await admin.connect();

  const userExists = await admin.query("SELECT 1 FROM pg_roles WHERE rolname = $1", [dbUser]);
  if (!userExists.rowCount) {
    await admin.query(`CREATE USER ${dbUser} WITH PASSWORD '${dbPassword}'`);
    console.info(`Created user ${dbUser}`);
  } else {
    await admin.query(`ALTER USER ${dbUser} WITH PASSWORD '${dbPassword}'`);
    console.info(`User ${dbUser} already exists. Password updated.`);
  }

  const dbExists = await admin.query("SELECT 1 FROM pg_database WHERE datname = $1", [dbName]);
  if (!dbExists.rowCount) {
    await admin.query(`CREATE DATABASE "${dbName}" OWNER ${dbUser}`);
    console.info(`Created database ${dbName}`);
  } else {
    console.info(`Database ${dbName} already exists.`);
  }

  await admin.query(`GRANT ALL PRIVILEGES ON DATABASE "${dbName}" TO ${dbUser}`);
  await admin.end();

  const db = new Client({
    connectionString: `postgresql://${dbUser}:${dbPassword}@localhost:5432/${dbName}`,
  });
  await db.connect();
  await db.query(`GRANT ALL ON SCHEMA public TO ${dbUser}`);
  await db.end();

  console.info("PostgreSQL setup complete.");
}

setup().catch((error) => {
  console.error(error);
  process.exit(1);
});
