import { getPool } from './getPool.js';

const pool = getPool();

export const createGuild = async (guildId) => {
  try {
    await pool.query(`INSERT INTO guilds(guildId) VALUES('${guildId}')`);
    await pool.query(
      `CREATE TABLE "${guildId}" ( userId VARCHAR(64) PRIMARY KEY, totalMessages BIGINT`
    );
  } catch (err) {
    return console.error(err);
  }
};

export const deleteGuild = async (guildId) => {
  try {
    await pool.query(`DELETE FROM guilds WHERE guildId = '${guildId}`);
    await pool.query(`DROP TABLE "${guildId}"`);
  } catch (err) {
    return console.error(err);
  }
};

export const getGuild = async (guildId) => {
  try {
    const Guild = await pool.query(`SELECT * FROM guilds WHERE guildId = '${guildId}'`);
    return Guild.rows[0];
  } catch (err) {
    return console.error(err);
  }
}
