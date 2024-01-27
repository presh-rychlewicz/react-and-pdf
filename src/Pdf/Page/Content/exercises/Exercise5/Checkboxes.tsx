import { FC } from "react";
import Checkbox from "./Checkbox";
import { StyleSheet, View } from "@react-pdf/renderer";

export const Checkboxes: FC = () => (
  <View style={styles.container}>
    {[...new Array(COUNT)].map((_, index) => (
      <Checkbox key={index} size={25} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
  },
});

const COUNT = 3;
