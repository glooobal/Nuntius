import { getClient } from '../getClient.js';
import { getServerRanking } from './serverRanking.js';

export async function getUserRanking(guildId, userId) {
  const pgClient = await getClient();

  const userData = await pgClient.query(
    `SELECT * FROM "${guildId}" WHERE userId = '${userId}'`
  );

  const user = userData.rows[0];

  if (user) {
    const ranking = await getServerRanking(guildId);
    return ranking.find((rank) => rank.userid === userId).ranking;
  } else return 0;
}
