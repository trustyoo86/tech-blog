import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getNotionDatabase() {
  console.log(process.env.NOTION_API_KEY);
  const databaseId = 'e59c81aec38e43408cc54180c83ff028';

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    // res.status(200).json(response.results);
    return response.results;
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ error: 'Error fetching database in notion' });
    return [];
  }
}
