import { NextApiRequest, NextApiResponse } from 'next'
import FormData from 'form-data'
import qs from 'query-string'

import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body
  const data = { grant_type: 'password', username: body.username, password: body.password }
  const response = await axios.post('http://crm-api.e21.co.kr/oauth/token', qs.stringify(data), {
    headers: {
      Authorization: 'Basic cXVhbHNvbjpxdWFsc29u',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(response.data))
}
