import { Circle, G, Line, StyleSheet, Svg, View } from "@react-pdf/renderer"
import * as hierarchy from "d3-hierarchy"
import { FC } from "react"
import { ExerciseWithOutData } from "../../../../types"
import ExercisePageTemplate from "./_shared/ExercisePageTemplate"

export type WheelExerciseProps = {
  type: "WHEEL_EXERCISE"
  data: ExerciseWithOutData
}

const WheelExercise: FC<WheelExerciseProps> = ({ data: { elements } }) => {
  const svgSize = 100
  const radius = svgSize / 2

  const p1x = radius
  const p1y = 0
  const p2x = p1x + (radius * Math.sqrt(3)) / 2
  const p2y = p1y + radius / 2

  const p3x = p2x
  const p3y = svgSize - p2y
  const p4x = p1x
  const p4y = 2 * radius

  const p5x = p4x - (radius * Math.sqrt(3)) / 2
  const p5y = p4y - radius / 2
  const p6x = p5x
  const p6y = svgSize - p5y

  const points = [
    {
      x: p1x,
      y: p1y,
    },
    {
      x: p2x,
      y: p2y,
    },
    {
      x: p3x,
      y: p3y,
    },
    {
      x: p4x,
      y: p4y,
    },
    {
      x: p5x,
      y: p5y,
    },
    {
      x: p6x,
      y: p6y,
    },
  ].map((coords, index, aray) => {
    const color = posibleColors[index % posibleColors.length]
    const nextCoords = aray[index + 1] ?? aray[0]

    const ax = radius
    const ay = radius

    const bx = coords.x
    const by = coords.y

    const cx = nextCoords.x
    const cy = nextCoords.y

    const lineToCenterX1 = bx
    const lineToCenterX2 = ax
    const lineToCenterY1 = by
    const lineToCenterY2 = ay

    const lineToPreviousPointX1 = bx
    const lineToPreviousPointX2 = cx
    const lineToPreviousPointY1 = by
    const lineToPreviousPointY2 = cy

    const abMidX = (ax + bx) / 2
    const abMidY = (ay + by) / 2
    const bcMidX = (bx + cx) / 2
    const bcMidY = (by + cy) / 2
    const caMidX = (cx + ax) / 2
    const caMidY = (cy + ay) / 2

    const lineFromAToBCMidX1 = ax
    const lineFromAToBCMidX2 = bcMidX
    const lineFromAToBCMidY1 = ay
    const lineFromAToBCMidY2 = bcMidY

    const lineFromBToCAMidX1 = bx
    const lineFromBToCAMidX2 = caMidX
    const lineFromBToCAMidY1 = by
    const lineFromBToCAMidY2 = caMidY

    const lineFromCToABMidX1 = cx
    const lineFromCToABMidX2 = abMidX
    const lineFromCToABMidY1 = cy
    const lineFromCToABMidY2 = abMidY

    const aDiffX = bcMidX - bx
    const aDiffY = bcMidY - by

    const a = Math.sqrt(Math.pow(aDiffX, 2) + Math.pow(aDiffY, 2))

    const b = a / Math.sqrt(3)
    const c = b / 2

    const hDiffx = c
    const hDiffy = c * Math.sqrt(3)

    let hx = 0
    let hy = 0
    if (index === 0 || index === 5) {
      hy = bcMidY + hDiffy
    } else if (index === 1 || index === 4) {
      hy = bcMidY
    } else if (index === 2 || index === 3) {
      hy = bcMidY - hDiffy
    }

    if (index === 0 || index === 2) {
      hx = bcMidX - hDiffx
    } else if (index === 1) {
      hx = bcMidX - b
    } else if (index === 3 || index === 5) {
      hx = bcMidX + hDiffx
    } else if (index === 4) {
      hx = bcMidX + b
    }

    const hToBcMidLength = Math.sqrt(
      Math.pow(hx - bcMidX, 2) + Math.pow(hy - bcMidY, 2)
    )

    // NEW
    // @ts-ignore
    const pack = (data) =>
      hierarchy
        .pack()
        .size([hToBcMidLength * 2, hToBcMidLength * 2])
        .padding(3)(hierarchy.hierarchy(data).sum((d) => d.value))
    const data = {
      name: "Eve",
      children: [
        { name: "Cain", value: 1 },
        { name: "Seth", value: 1 },
        { name: "Abel", value: 1 },
        { name: "Awan", value: 1 },
        { name: "Azura", value: 1 },
      ],
    }
    const root = pack(data)

    const descendants = root.descendants()
    console.log({
      descendants,
    })

    //

    return {
      cx: coords.x,
      cy: coords.y,

      color,

      lineToCenter: {
        x1: lineToCenterX1,
        x2: lineToCenterX2,
        y1: lineToCenterY1,
        y2: lineToCenterY2,
      },

      lineToPreviousPoint: {
        x1: lineToPreviousPointX1,
        x2: lineToPreviousPointX2,
        y1: lineToPreviousPointY1,
        y2: lineToPreviousPointY2,
      },

      abMid: {
        cx: abMidX,
        cy: abMidY,
      },

      bcMid: {
        cx: bcMidX,
        cy: bcMidY,
      },

      caMid: {
        cx: caMidX,
        cy: caMidY,
      },

      lineFromAToBCMid: {
        x1: lineFromAToBCMidX1,
        x2: lineFromAToBCMidX2,
        y1: lineFromAToBCMidY1,
        y2: lineFromAToBCMidY2,
      },

      lineFromBToCAMid: {
        x1: lineFromBToCAMidX1,
        x2: lineFromBToCAMidX2,
        y1: lineFromBToCAMidY1,
        y2: lineFromBToCAMidY2,
      },

      lineFromCToABMid: {
        x1: lineFromCToABMidX1,
        x2: lineFromCToABMidX2,
        y1: lineFromCToABMidY1,
        y2: lineFromCToABMidY2,
      },

      h: {
        cx: hx,
        cy: hy,
      },

      hToBcMidLength,

      descendants: descendants.slice(0),
    }
  })

  return (
    <ExercisePageTemplate>
      <View style={styles.container}>
        <Svg viewBox={`0 0 ${svgSize} ${svgSize}`} style={styles.svg}>
          <Circle
            strokeWidth={0.2}
            stroke="black"
            r={radius}
            cx={radius}
            cy={radius}
          />

          {points.map(
            (
              {
                lineToCenter,
                lineToPreviousPoint,
                lineFromAToBCMid,
                lineFromBToCAMid,
                lineFromCToABMid,
                abMid,
                bcMid,
                caMid,
                color,
                h,
                hToBcMidLength,
                descendants,
                ...coords
              },
              index
            ) => (
              <G key={index}>
                <Line strokeWidth={0.1} stroke={color} {...lineToCenter} />

                <Line
                  strokeWidth={0.1}
                  stroke={color}
                  {...lineToPreviousPoint}
                />

                {descendants.slice(0).map((data) => (
                  <Circle
                    key={index}
                    r={data.r}
                    cx={data.x}
                    cy={data.y}
                    stroke="blue"
                    strokeWidth={0.1}
                    transform={`translate(${h.cx - 14.5}px, ${h.cy - 14.5}px)`}
                  />
                ))}
              </G>
            )
          )}
        </Svg>
      </View>
    </ExercisePageTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    border: "1px solid red",
  },

  svg: {
    width: "100%",
    height: "100%",
    border: "1px solid red",
  },
})

const posibleColors = ["red", "blue", "green"]

export default WheelExercise
