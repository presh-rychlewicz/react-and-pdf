import { Path, StyleSheet, Svg, Text, View } from "@react-pdf/renderer"
import { FC } from "react"
import { Exercise1Data } from "../../../../../types"
import ExercisePageTemplate from "../_shared/ExercisePageTemplate"
import { getPx } from "../../../../../utils"

type Props = {
  data: Exercise1Data
}

const Exercise1: FC<Props> = ({ data }) => {
  console.log(data)

  return (
    <ExercisePageTemplate>
      <View style={styles.container}>
        {data.elements.map((_a, index) => {
          return (
            <View key={index} style={styles.alfa}>
              <Svg style={styles.svg}>
                <Path
                  d={(() => {
                    return [
                      generateBox(1),
                      generateBox(2),
                      generateBox(3),
                      generateBox(4),
                      generateBox(5),
                    ].join(" ")
                  })()}
                  stroke="black"
                />
              </Svg>
            </View>
          )
        })}
      </View>
    </ExercisePageTemplate>
  )
}

const ELEMENT_HEIGHT = 115

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  alfa: {
    width: "100%",
    height: getPx(ELEMENT_HEIGHT),
  },
  svg: {
    border: "1px solid blue",
    width: "100%",
    height: "100%",
  },
})

const generateBox = (multiplier = 1) => {
  const boxWidth = 111
  const boxHeight = multiplier * 15

  const shadowX = 4
  const shadowY = 5

  const initialX = (multiplier - 1) * boxWidth
  const initialY = ELEMENT_HEIGHT - boxHeight

  return `M ${initialX} ${initialY} h ${boxWidth} v ${boxHeight} h -${boxWidth} v -${boxHeight} l ${shadowX} -${shadowY} h ${
    boxWidth - shadowX
  } v ${shadowY}`
}

export default Exercise1
