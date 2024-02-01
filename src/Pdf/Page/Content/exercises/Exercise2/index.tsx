import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { FC } from "react"
import ExercisePageTemplate from "../_shared/ExercisePageTemplate"
import { Exercise2Data } from "../../../../../types"

type Props = {
  data: Exercise2Data
}

const Exercise2: FC<Props> = ({ data }) => (
  <ExercisePageTemplate>
    <View style={styles.container}>
      <Text style={styles.text}>Exercise2</Text>
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

export default Exercise2
