// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getLinkPreview } from 'link-preview-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const fetchLinkData = async (url: string) => {
  const data = await getLinkPreview(Array.isArray(url) ? url[0] : url, {
    timeout: 6000,
    headers: {
      'user-agent': 'googlebot',
    },
    followRedirects: 'follow',
  });

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  try {
    const data = await fetchLinkData(url as string);
    res.json(data);
  } catch {
    res.status(400).json({ msg: 'err' });
  }
}
