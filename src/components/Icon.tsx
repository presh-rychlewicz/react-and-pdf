import { Path, StyleSheet, Svg, View } from "@react-pdf/renderer"
import { FC } from "react"
import { Out as OutType } from "../assets/outs"
import Out from "../assets/outs/Out"
import { getPx } from "../utils"

type Props = {
  size: number
  out?: OutType
}

const Icon: FC<Props> = ({ size, out }) => {
  let content
  if (out) {
    content = <Out out={out} />
  } else {
    content = (
      <Svg style={styles.svg} viewBox="0 0 100% 100%">
        <Path
          d="M 0 0 L 10 17 L 22 5 L 36 17 L 51 7 L 64 18 L 84 16 L 79 28 L 98 38 L 70 51 L 51 34 L 36 52 L 6 37 L 5 23"
          fill="#0000aa"
        />
      </Svg>
    )
  }

  return (
    <View
      style={{
        ...styles.icon,
        minWidth: getPx(size),
        maxWidth: getPx(size),
        minHeight: getPx(size),
        maxHeight: getPx(size),
      }}
    >
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    border: "3px solid red",
    width: "100%",
    height: "100%",
  },
})

export default Icon
