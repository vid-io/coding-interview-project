export type CompetitionScore = 'low' | 'medium' | 'high' | 'very high'

export type Keyword = {
  id: number
  keyword: string
  search_volume: number
  competition: CompetitionScore
  overall_score: number
}

export type TrendingKeyword = number

export type Column =
  | 'keyword'
  | 'search_volume'
  | 'competition'
  | 'overall_score'

export type SortDirection = 'asc' | 'desc'
