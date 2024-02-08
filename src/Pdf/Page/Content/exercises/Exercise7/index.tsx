import { StyleSheet, View } from "@react-pdf/renderer"
import sample from "lodash.sample"
import { FC } from "react"
import { Icon } from "../../../../../components"
import { Exercise7Data } from "../../../../../types"
import ExercisePageTemplate from "../_shared/ExercisePageTemplate"

type Props = {
  data: Exercise7Data
}

const Exercise7: FC<Props> = ({ data }) => {
  const rows = [...new Array(6)].map(() => [...new Array(5)])

  return (
    <ExercisePageTemplate>
      <View style={styles.container}>
        <View style={styles.column}>
          <Icon size={ICON_SIZE} out="czajka" />
          <Icon size={ICON_SIZE} out="czajka" />
          <Icon size={ICON_SIZE} out="czajka" />
          <Icon size={ICON_SIZE} out="czajka" />
          <Icon size={ICON_SIZE} out="czajka" />
        </View>

        <View style={styles.basket}>
          {rows.map((row, index) => (
            <View
              key={index}
              style={{
                paddingLeft: index % 2 === 0 ? ELEM_SHIFT : 0,
                paddingRight: index % 2 === 0 ? 0 : ELEM_SHIFT,
                ...styles.row,
              }}
            >
              {row.map((_, index) => (
                <View
                  key={index}
                  style={{
                    transform: `rotate(${sample([0, 90, 180, 270])}deg)`,
                  }}
                >
                  <Icon size={ELEM_SIZE} />
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ExercisePageTemplate>
  )
}

const ICON_SIZE = 75
const ELEM_SHIFT = "15px"
const ELEM_SIZE = 35

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  column: {
    height: "100%",
    justifyContent: "space-between",
  },

  basket: {
    border: "1px solid blue",
    borderRadius: "20px",
    width: "300px",
    height: "400px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    gap: ELEM_SHIFT,
    justifyContent: "center",
  },
  row: {
    display: "flex",
    gap: ELEM_SHIFT,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
})

export default Exercise7
