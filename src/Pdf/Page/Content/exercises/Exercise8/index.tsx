import { StyleSheet, View } from "@react-pdf/renderer"
import { FC } from "react"
import { Exercise8Data } from "../../../../../types"
import ExercisePageTemplate from "../_shared/ExercisePageTemplate"
import { Icon } from "../../../../../components"
import { getPx } from "../../../../../utils"

type Props = {
  data: Exercise8Data
}

const Exercise8: FC<Props> = ({ data: { elements } }) => (
  <ExercisePageTemplate>
    <View style={styles.container}>
      {elements.map(({ name, out }) => (
        <View key={name} style={styles.row}>
          {[...new Array(COUNT)].map((_, index) => (
            <View key={index} style={styles.alfa}>
              <Icon out={out} size={ROW_HEIGHT} />
            </View>
          ))}
        </View>
      ))}
    </View>
  </ExercisePageTemplate>
)

const COUNT = 5
const ROW_HEIGHT = 80

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: getPx(ROW_HEIGHT),
    alignItems: "center",
    justifyContent: "space-between",
  },
  alfa: {
    width: getPx(ROW_HEIGHT),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Exercise8
