import type { NextApiRequest, NextApiResponse } from 'next'

export type TrendingKeyword = number

const TRENDING_KEYWORDS: TrendingKeyword[] = [
  4, 16, 22, 23, 40, 41, 42, 43, 50, 68, 80, 84, 88, 99,
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TrendingKeyword[]>
) {
  res.status(200).json(TRENDING_KEYWORDS)
}