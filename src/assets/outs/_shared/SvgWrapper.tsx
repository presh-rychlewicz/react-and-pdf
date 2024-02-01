import { StyleSheet, Svg } from "@react-pdf/renderer"
import { FC, PropsWithChildren } from "react"

type Props = PropsWithChildren

const SvgWrapper: FC<Props> = ({ children }) => (
  <Svg style={styles.svg} viewBox="0 0 100% 100%">
    {children}
  </Svg>
)

const styles = StyleSheet.create({
  svg: {
    border: "3px solid red",
    width: "100%",
    height: "100%",
  },
})

export default SvgWrapper
