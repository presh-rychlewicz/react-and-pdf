import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { FC } from "react"
import { ExerciseWithVariantData } from "../../../../types"
import ExercisePageTemplate from "./_shared/ExercisePageTemplate"
import { Icon } from "../../../../components"
import { fontSizes } from "../../../../styles/fontSizes"
import { getPx } from "../../../../utils"
import capitalize from "lodash.capitalize"

export type GameExerciseProps = {
  type: "GAME_EXERCISE"
  data: ExerciseWithVariantData
}

const GameExercise: FC<GameExerciseProps> = ({ data: { elements } }) => {
  return (
    <ExercisePageTemplate>
      <View style={styles.container}>
        {elements.map(({ name, out, variant1, variant2, variant3 }) => {
          const variants = [name, variant1, variant2, variant3]

          return (
            <View key={name} style={styles.row}>
              <Icon out={out} size={96} />

              <View style={styles.rowContent}>
                {variants.map((a, index) => (
                  <View key={index} style={styles.rowContentElement}>
                    <Text
                      style={{
                        ...styles.rowContentElementText,
                        fontSize: fontSizes[index ? "small" : "medium"],
                      }}
                    >
                      {index ? capitalize(a) : a}
                    </Text>

                    <View style={styles.rowContentElementCheckboxWrapper}>
                      <CheckboxStartOrEndElement content="START" />

                      {[...new Array(CHECKBOX_COUNT)].map((_, index) => (
                        <View
                          key={index}
                          style={styles.rowContentElementCheckbox}
                        />
                      ))}

                      <CheckboxStartOrEndElement content="KONIEC" />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )
        })}
      </View>
    </ExercisePageTemplate>
  )
}

type CheckboxStartOrEndElementProps = {
  content: string
}
const CheckboxStartOrEndElement: FC<CheckboxStartOrEndElementProps> = ({
  content,
}) => (
  <View style={styles.rowContentElementCheckboxStartOrEnd}>
    <Text>{content}</Text>
  </View>
)

const CHECKBOX_COUNT = 3

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: getPx(5),
  },
  row: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: getPx(5),
  },

  rowContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rowContentElement: {
    // border: "2px solid red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: getPx(20),
    justifyContent: "space-between",
  },
  rowContentElementText: {},

  rowContentElementCheckboxWrapper: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    gap: getPx(5),
  },
  rowContentElementCheckboxStartOrEnd: {
    border: "1px solid black",
    width: getPx(30),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: getPx(6),
  },
  rowContentElementCheckbox: {
    border: "1px dashed black",
    width: getPx(60),
    height: getPx(20),
  },
})

export default GameExercise
