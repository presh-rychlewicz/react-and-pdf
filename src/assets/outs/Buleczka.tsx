import { Path, Text } from "@react-pdf/renderer"
import { FC } from "react"
import SvgWrapper from "./_shared/SvgWrapper"

// TEMP
type BuleczkaProps = {
  showWrapper?: boolean
}

const Buleczka: FC<BuleczkaProps> = ({ showWrapper = true }) => {
  const content = (
    <>
      <Text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
        BULECZKA
      </Text>
      <Path
        d="M 0 0 L 10 17 L 22 5 L 36 17 L 51 7 L 64 18 L 84 16 L 79 28 L 98 38 L 70 51 L 51 34 L 36 52 L 6 37 L 5 23"
        stroke="blue"
      />
    </>
  )

  if (showWrapper) {
    return <SvgWrapper>{content}</SvgWrapper>
  }

  return <>{content}</>
}

export default Buleczka
