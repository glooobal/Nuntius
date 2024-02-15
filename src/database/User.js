import { getPool } from './getPool.js';

const pool = getPool();

export const getUser = async (guildId, userId) => {
  try {
    const User = await pool.query(
      `SELECT * FROM "${guildId}" WHERE userId = '${userId}'`
    );

    return User.rows[0];
  } catch (err) {
    return console.error(err);
  }
};

export const createUser = async (guildId, userId) => {
  try {
    await pool.query(
      `INSERT INTO "${guildId}"(userId, totalMessages) VALUES(${userId}, 1)`
    );
  } catch (err) {
    return console.error(err);
  }
};

export const addUserMessage = async (guildId, userId, amount) => {
  try {
    const User = await getUser(guildId, userId);

    if (User) {
      await pool.query(
        `UPDATE "${guildId}" SET totalMessages = totalMessages + ${amount} WHERE userId = '${userId}'`
      );
    } else await createUser(guildId, userId);
  } catch (err) {
    return console.error(err);
  }
};
