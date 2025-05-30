// src/prismaClients.js
import { PrismaClient as MySQLPrismaClient } from '../generated/mysql_client/index.js';
import { PrismaClient as PGPrismaClient } from '../generated/pg_client/index.js';

const mysqlDB = new MySQLPrismaClient();
const pgDB = new PGPrismaClient();

export { mysqlDB, pgDB };