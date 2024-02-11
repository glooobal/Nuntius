import { getClient } from '../getClient.js';

export async function getServerRanking(guildId) {
  const pgClient = await getClient();

  const rankingData = await pgClient.query(
    `SELECT userId, totalMessages, RANK() OVER (ORDER BY totalMessages DESC) AS ranking FROM "${guildId}"`
  );

  const ranking = rankingData.rows;

  if (ranking) return ranking;
  else return [];
}
