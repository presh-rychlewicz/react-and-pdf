import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { FC } from "react"
import ExercisePageTemplate from "../_shared/ExercisePageTemplate"
import { ExerciseStubData } from "../../../../../types"

type Props = {
  data: ExerciseStubData
}

const StubExercise: FC<Props> = ({ data }) => (
  <ExercisePageTemplate>
    <View style={styles.container}>
      <Text style={styles.text}>?</Text>
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

export default StubExercise
