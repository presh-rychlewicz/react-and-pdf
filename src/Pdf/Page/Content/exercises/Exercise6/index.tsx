import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ExercisePageTemplate from "../_shared/ExercisePageTemplate";
import { Exercise6Data } from "../../../../../types";
import { FC } from "react";
import { fontSizes } from "../../../../../styles/fontSizes";
import Icon from "../../../../../assets/outs/Icon";
import { getPx } from "../../../../../utils";

type Props = {
  data: Exercise6Data;
};

export const Exercise6: FC<Props> = ({ data: { elements } }) => (
  <ExercisePageTemplate>
    <View style={styles.container}>
      {elements.map((element, index) => (
        <View
          key={element.name}
          style={{
            ...styles.row,
            borderTop: index ? "1px solid black" : undefined,
          }}
        >
          <View style={styles.cell}>
            <Icon size={60} />

            <Text style={styles.text}>{element.name}</Text>
          </View>

          {[...new Array(5)].map((_, index) => (
            <View
              key={index}
              style={{
                ...styles.cell,
                borderLeft: "1px solid black",
              }}
            />
          ))}
        </View>
      ))}
    </View>
  </ExercisePageTemplate>
);

const CELL_SIZE = 90;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    height: getPx(CELL_SIZE),
    flexDirection: "row",
    justifyContent: "center",
  },

  cell: {
    width: getPx(CELL_SIZE),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
  },

  text: {
    fontSize: fontSizes.medium,
  },
});
