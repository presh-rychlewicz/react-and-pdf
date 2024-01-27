import {
  Circle,
  G,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import { FC } from "react";
import { Exercise2Data } from "../../../../../../types";
import { Bezier } from "bezier-js";

type Props = {
  data: Exercise2Data;
};

const Exercise2: FC<Props> = ({ data: { elements } }) => {
  const allElements = [...new Array(elements.length)]
    .map(() => [...elements])
    .flat();
  const elementsData = allElements.map((element, index) => {
    const division = index / ELEMS_IN_ROW;
    const remainder = index % ELEMS_IN_ROW;
    const rowNumber = Math.floor(division) + 1;
    const isEven = rowNumber % 2 === 0;

    const cx =
      MARGIN_LEFT_OR_TOP +
      SHIFT_X_OR_Y * (isEven ? ELEMS_IN_ROW - 1 - remainder : remainder);
    const cy = MARGIN_LEFT_OR_TOP + SHIFT_X_OR_Y * Math.floor(division);

    return {
      element,
      cx,
      cy,
    };
  });

  return (
    <View>
      <Text>Exercise2</Text>

      <Svg style={styles.svg}>
        {elementsData.map(({ cx, cy, element }, index, aray) => {
          let curve = null;
          let curve1 = null;
          let b = null;

          if (
            index === 0
            // index !== aray.length - 1
          ) {
            var p1x = cx;
            var p1y = cy;
            var p2x = aray[index + 1].cx;
            var p2y = aray[index + 1].cy;

            // mid-point of line:
            var mpx = (p2x + p1x) * 0.5;
            var mpy = (p2y + p1y) * 0.5;

            // angle of perpendicular to line:
            var theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;

            // distance of control point from mid-point of line:
            var offset = 30;

            // location of control point:
            var c1x = mpx + offset * Math.cos(theta);
            var c1y = mpy + offset * Math.sin(theta);

            curve =
              "M " +
              p1x +
              " " +
              p1y +
              " Q " +
              c1x +
              " " +
              c1y +
              " " +
              p2x +
              " " +
              p2y;

            b = new Bezier([
              {
                x: cx,
                y: cy,
              },
              {
                x: aray[index + 1].cx,
                y: aray[index + 1].cy,
              },
            ]);

            curve1 = b.toSVG();

            const alfa = {
              "3d": b._3d,
              lut: b._lut,
              t1: b._t1,
              t2: b._t2,
              a: b.arcs(),
              b: b.bbox(),
              c: b.clockwise,
              // d:b.compute(),
              d: b.toSVG(),
            };

            console.log({
              index,
              b,
              alfa,
              curve,
              curve1,
            });
          }

          return (
            <G key={index}>
              {/* {index !== aray.length - 1 && (
              <Line
                stroke="black"
                x1={cx}
                x2={aray[index + 1].cx}
                y1={cy}
                y2={aray[index + 1].cy}
                style={styles.line}
              />
            )} */}

              {curve && <Path stroke="red" d={curve} />}

              <Circle
                style={styles.circle}
                fill="white"
                cx={cx}
                cy={cy}
                r={RADIUS}
                stroke="black"
              />

              <Text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
              >
                {element.toUpperCase()}
              </Text>
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  svg: {
    // border: "1px solid red",
    marginTop: "20px",
  },

  circle: {},
  line: {},
});

const ELEMS_IN_ROW = 5;
const RADIUS = 25;
const MARGIN_LEFT_OR_TOP = 1 * RADIUS;
const SHIFT_X_OR_Y = 126;

export default Exercise2;
