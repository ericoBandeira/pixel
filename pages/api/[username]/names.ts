// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {
    method,
    query
  } = req

  try {
    switch (method) {
      case 'GET':
        res.status(200).json([
          { id: 1 , name: 'Erico', method, query: query.username},
          { id: 2 , name: 'Brisa', method, query: query.username},
          { id: 3, name: 'Spock', method, query: query.username },
        ])
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (err: any) {
    res.status(500).json({statusCode: 500, message: "Method not allowed"})
  }
}
