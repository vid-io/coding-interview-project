type Props = {
  score: number
}

function getBadgeColor(score: number): string {
  if (score < 20) return '#ff0000'
  if (score < 40) return '#ff9b3f'
  if (score < 60) return '#ffc71c'

  return '#8fe04e'
}

export default function Badge({ score = 0 }: Props) {
  return (
    <span
      className="inline-block text-white text-center rounded-full py-1 px-2 w-10"
      style={{ backgroundColor: getBadgeColor(score) }}
    >
      {score}
    </span>
  )
}
