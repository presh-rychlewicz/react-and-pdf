import { FC } from "react"
import type { Out as OutType } from "."
import outs from "."

type Props = {
  out: OutType
}

const Out: FC<Props> = ({ out }) => {
  const alfa = outs[out]

  return <>{alfa}</>
}

export default Out
