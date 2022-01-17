// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../utils/mongodb'

const handler = async(
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const {
    method
  } = req
  
  try {
    switch (method) {
      case 'GET':
        const { db } = await connectToDatabase()
        const data = await db.collection('user').find().toArray()

        res.status(200).json(data)
      break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (err: any) {
    res.status(500).json({statusCode: 500, message: "Method not allowed"})
  }
}

export default handler