import { Text } from "@react-pdf/renderer"
import { FC } from "react"
import SvgWrapper from "./_shared/SvgWrapper"

const Uczen: FC = () => (
  <SvgWrapper>
    <Text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
      UCZEN
    </Text>
  </SvgWrapper>
)

export default Uczen
