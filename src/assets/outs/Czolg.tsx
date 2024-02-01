import { Path, Text } from "@react-pdf/renderer"
import { FC } from "react"
import SvgWrapper from "./_shared/SvgWrapper"

const Czolg: FC = () => (
  <SvgWrapper>
    <Path
      d="M 18 23 L 31 23 L 31 15 L 44 15 L 44 19 L 64 19 L 64 20 L 44 20 L 44 23 L 50 23 C 59 25 59 30 50 32 L 18 32 C 11 30 11 25 18 23"
      stroke="black"
    />

    <Text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
      CZOLG
    </Text>
  </SvgWrapper>
)

export default Czolg
