import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { FC } from "react"
import { Icon } from "../../../../../components"
import { fontSizes } from "../../../../../styles/fontSizes"
import { Exercise5Data } from "../../../../../types"
import { getPx } from "../../../../../utils"

type Props = Exercise5Data["elements"][number]

export const Row: FC<Props> = ({ out, name, variant1, variant2, variant3 }) => {
  const parts = [
    [name, variant1],
    [variant2, variant3],
  ]

  return (
    <View style={styles.container}>
      <Icon out={out} size={70} />

      {parts.map((elements, index) => (
        <View key={index} style={styles.sideWrapper}>
          {elements.map((element) => (
            <View key={element} style={styles.elementWrapper}>
              <Text style={styles.variants}>{element}</Text>

              <View style={styles.checkboxesWrapper}>
                {[...new Array(COUNT)].map((_, index) => (
                  <View
                    key={index}
                    style={{
                      ...styles.checkbox,
                      width: getPx(CHECKBOX_SIZE),
                      height: getPx(CHECKBOX_SIZE),
                    }}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

const COUNT = 3
const CHECKBOX_SIZE = 25

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },

  sideWrapper: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  elementWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  variants: {
    fontSize: fontSizes.small,
  },

  checkboxesWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
  },

  checkbox: {
    border: "1px solid black",
  },
})
