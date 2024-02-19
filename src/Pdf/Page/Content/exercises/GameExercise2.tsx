import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { FC, Fragment } from "react"
import { ExerciseWithVariantData } from "../../../../types"
import ExercisePageTemplate from "./_shared/ExercisePageTemplate"
import { Icon } from "../../../../components"
import { fontSizes } from "../../../../styles/fontSizes"
import { getPx } from "../../../../utils"
import capitalize from "lodash.capitalize"

export type GameExercise2Props = {
  type: "GAME_EXERCISE_2"
  data: ExerciseWithVariantData
}

const GameExercise2: FC<GameExercise2Props> = ({ data: { elements } }) => (
  <ExercisePageTemplate>
    <View style={styles.container}>
      {elements.map(
        ({ name, out, variant1, variant2, variant3 }, rowIndex, rowArray) => {
          const variants = [name, variant1, variant2, variant3]

          return (
            <View key={name} style={styles.row}>
              <Icon out={out} size={96} />

              <View style={styles.rowContent}>
                {variants.map((a, variantIndex, variantArray) => {
                  const isIndexEven = variantIndex % 2 === 0

                  const isFirstRowIndex = !rowIndex
                  const isLastRowIndex = rowIndex === rowArray.length - 1

                  const isFirstVariantIndex = !variantIndex
                  const isLastVariantIndex =
                    variantIndex === variantArray.length - 1

                  return (
                    <View key={variantIndex} style={styles.rowContentElement}>
                      <Text
                        style={{
                          ...styles.rowContentElementText,
                          fontSize:
                            fontSizes[variantIndex ? "small" : "medium"],
                        }}
                      >
                        {variantIndex ? capitalize(a) : a}
                      </Text>

                      <View style={styles.rowContentElementCheckboxWrapper}>
                        <StartElem
                          isFirstRowIndex={isFirstRowIndex}
                          isFirstVariantIndex={isFirstVariantIndex}
                          isIndexEven={isIndexEven}
                          isLastRowIndex={isLastRowIndex}
                          isLastVariantIndex={isLastVariantIndex}
                        />

                        {[...new Array(CHECKBOX_COUNT)].map(
                          (_, index, aray) => (
                            <Fragment key={index}>
                              <Checkbox index={index} />

                              {index !== aray.length - 1 && <GapElement />}
                            </Fragment>
                          )
                        )}

                        <EndElem isIndexEven={isIndexEven} />
                      </View>
                    </View>
                  )
                })}
              </View>
            </View>
          )
        }
      )}
    </View>
  </ExercisePageTemplate>
)

const CHECKBOX_HEIGHT = 20
const GAP_ELEMENT_WIDTH = CHECKBOX_HEIGHT / 2
const SHIFT_MARGIN = CHECKBOX_HEIGHT / 2
const CHECKBOX_COUNT = 3

const GapElement: FC = () => (
  <View
    style={{
      borderTop: "1px dashed black",
      width: getPx(GAP_ELEMENT_WIDTH),
      height: "1px",
    }}
  />
)

type StartElemProps = {
  isFirstRowIndex: boolean
  isFirstVariantIndex: boolean
  isLastRowIndex: boolean
  isLastVariantIndex: boolean
  isIndexEven: boolean
}
const StartElem: FC<StartElemProps> = ({
  isFirstRowIndex,
  isFirstVariantIndex,
  isLastRowIndex,
  isLastVariantIndex,
  isIndexEven,
}) => {
  if (isFirstRowIndex && isFirstVariantIndex) {
    return (
      <>
        <View style={styles.rowContentElementCheckboxStartOrEnd}>
          <Text>START</Text>
        </View>

        <GapElement />
      </>
    )
  } else if (isLastRowIndex && isLastVariantIndex) {
    return (
      <>
        <View style={styles.rowContentElementCheckboxStartOrEnd}>
          <Text>KONIEC</Text>
        </View>

        <GapElement />
      </>
    )
  } else {
    return (
      <View
        style={{
          marginTop: isIndexEven ? undefined : getPx(SHIFT_MARGIN),
          borderTop: isIndexEven ? undefined : "1px dashed black",

          marginBottom: isIndexEven ? getPx(SHIFT_MARGIN) : undefined,
          borderBottom: isIndexEven ? "1px dashed black" : undefined,

          borderLeft: "1px dashed black",
          width: getPx(GAP_ELEMENT_WIDTH),
          height: getPx(SHIFT_MARGIN),
        }}
      />
    )
  }
}

type EndElemProps = {
  isIndexEven: boolean
}
const EndElem: FC<EndElemProps> = ({ isIndexEven }) => (
  <View
    style={{
      marginTop: isIndexEven ? getPx(SHIFT_MARGIN) : undefined,
      borderTop: isIndexEven ? "1px dashed black" : undefined,

      marginBottom: isIndexEven ? undefined : getPx(SHIFT_MARGIN),
      borderBottom: isIndexEven ? undefined : "1px dashed black",

      borderRight: "1px dashed black",
      marginRight: "15px",
      width: getPx(GAP_ELEMENT_WIDTH),
      height: getPx(SHIFT_MARGIN),
    }}
  />
)

type CheckboxProps = {
  index: number
}
const Checkbox: FC<CheckboxProps> = ({ index }) => (
  <View style={styles.rowContentElementCheckbox}>
    <Text
      style={{
        fontSize: fontSizes.small,
        color: "lightgray",
      }}
    >
      {index + 1}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-evenly",
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
    alignItems: "center",
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
    border: "1px solid black",
    width: getPx(60),
    height: getPx(CHECKBOX_HEIGHT),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default GameExercise2
