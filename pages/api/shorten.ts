import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { isAlias, isUrl } from '@/utils/validate';
import { shortId } from '@/utils/shortId';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, alias } = req.query;

  if (req.method === 'POST') {
    if (!isUrl(url as string))
      return res.status(400).json({ message: 'Url is invalid.' });

    if (!isAlias(alias as string))
      return res.status(400).json({ message: 'Alias is invalid.' });

    if (alias) {
      const aliasAlreadyExists = await prisma.url.findFirst({
        where: {
          code: alias as string,
        },
      });
      if (aliasAlreadyExists)
        return res.status(500).json({ message: 'Alias already exists.' });

      const created = await prisma.url.create({
        data: {
          code: alias as string,
          link: url as string,
        },
      });
      return res.status(201).json(created);
    }

    const created = await prisma.url.create({
      data: {
        code: shortId(),
        link: url as string,
      },
    });

    return res.status(201).json(created);
  }

  res.status(403).json({ message: `Method ${req.method} is not allowed` });
}
