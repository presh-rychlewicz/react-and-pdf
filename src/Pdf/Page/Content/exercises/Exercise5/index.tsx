import { StyleSheet, View } from "@react-pdf/renderer";
import { FC } from "react";
import { Exercise5Data } from "../../../../../types";
import ExercisePageTemplate from "../_shared/ExercisePageTemplate";
import { Row } from "./Row";

type Props = {
  data: Exercise5Data;
};

const Exercise5: FC<Props> = ({ data: { elements } }) => (
  <ExercisePageTemplate>
    <View style={styles.container}>
      {elements.map((row) => (
        <Row key={row.name} {...row} />
      ))}
    </View>
  </ExercisePageTemplate>
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default Exercise5;
