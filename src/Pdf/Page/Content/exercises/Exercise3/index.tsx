import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import outs from "../../../../../assets/outs";
import Icon from "../../../../../assets/outs/Icon";
import { Exercise3Data } from "../../../../../types";
import ExercisePageTemplate from "../_shared/ExercisePageTemplate";

type Props = {
  data: Exercise3Data;
};

const Exercise3: FC<Props> = ({ data: { elements } }) => (
  <ExercisePageTemplate>
    <View style={styles.wrapper}>
      {elements.map(({ name, out }) => (
        <View key={name} style={styles.row}>
          <Text>{name}</Text>

          <View style={styles.attemptsWrapper}>
            {[...new Array(COUNT)].map((_, index) => {
              const out = outs.czajka;

              return <Icon key={index} size={ATTEMPT_SIZE} />;
            })}
          </View>
        </View>
      ))}
    </View>
  </ExercisePageTemplate>
);

const ATTEMPT_SIZE = 75;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  attemptsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
  },
});

const COUNT = 5;

export default Exercise3;
