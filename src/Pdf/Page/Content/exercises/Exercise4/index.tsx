import { StyleSheet, View } from "@react-pdf/renderer";
import { FC } from "react";
import Icon from "../../../../../assets/outs/Icon";
import { Exercise4Data } from "../../../../../types";
import ExercisePageTemplate from "../_shared/ExercisePageTemplate";

type Props = {
  data: Exercise4Data;
};

const Exercise4: FC<Props> = ({ data }) => (
  <ExercisePageTemplate>
    <View style={styles.container}>
      <Icon size={500} />
    </View>
  </ExercisePageTemplate>
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Exercise4;
