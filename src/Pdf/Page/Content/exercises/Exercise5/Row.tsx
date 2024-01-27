import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import Icon from "../../../../../assets/outs/Icon";
import { fontSizes } from "../../../../../styles/fontSizes";
import { Exercise5Data } from "../../../../../types";
import { Checkboxes } from "./Checkboxes";

type Props = Exercise5Data["elements"][number] & {};

export const Row: FC<Props> = ({ name, variant1, variant2, variant3 }) => {
  const elements = [name, variant1, variant2, variant3];
  const parts = [elements.slice(0, 2), elements.slice(2, 4)];

  return (
    <View style={styles.container}>
      <View style={styles.alfa}>
        {parts[0].map((element) => (
          <View key={element} style={styles.elementWrapper}>
            <Text style={styles.variants}>{element}</Text>

            <Checkboxes />
          </View>
        ))}
      </View>

      <Icon size={70} />

      <View style={styles.alfa}>
        {parts[1].map((element) => (
          <View key={element} style={styles.elementWrapper}>
            <Text style={styles.variants}>{element}</Text>

            <Checkboxes />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },

  leftSide: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    gap: "5px",
  },

  alfa: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  elementWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  name: {
    fontSize: fontSizes.large,
  },

  variants: {
    fontSize: fontSizes.small,
  },
});
