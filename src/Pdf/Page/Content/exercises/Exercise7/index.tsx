import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { FC } from "react"
import { Exercise7Data } from "../../../../../types"
import ExercisePageTemplate from "../_shared/ExercisePageTemplate"

type Props = {
  data: Exercise7Data
}

const Exercise7: FC<Props> = ({ data }) => (
  <ExercisePageTemplate>
    <View style={styles.container}>
      <Text style={styles.text}>Exercise7</Text>
    </View>
  </ExercisePageTemplate>
)

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "100px",
  },
})

export default Exercise7
