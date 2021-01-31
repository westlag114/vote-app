import { NextApiRequest, NextApiResponse } from 'next'
import auth0 from '../../utils/auth0'

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log('通信')
  try {
    await auth0.handleLogin(req, res)
  } catch (error) {
    console.log('通信失敗')
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
