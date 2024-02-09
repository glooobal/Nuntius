import { getClient } from '../getClient.js';

export async function addUserMessages(guildId, userId) {
  const pgClient = await getClient();

  const userData = await pgClient.query(
    `SELECT * FROM "${guildId}" WHERE userId = '${userId}'`
  );

  const user = userData.rows[0];

  if (user) {
    await pgClient.query(
      `UPDATE "${guildId}" SET totalMessages = totalMessages + 1 WHERE userId = '${userId}'`
    );
  } else {
    await pgClient.query(
      `INSERT INTO "${guildId}"(userId, totalMessages) VALUES(${userId}, 1)`
    );
  }

  await pgClient.end();
}

export async function getUserMessages(guildId, userId) {
  const pgClient = await getClient();

  const userData = await pgClient.query(
    `SELECT * FROM "${guildId}" WHERE userId = '${userId}'`
  );

  const user = userData.rows[0];

  if (user) return user.totalmessages;
  else return 0;
}
