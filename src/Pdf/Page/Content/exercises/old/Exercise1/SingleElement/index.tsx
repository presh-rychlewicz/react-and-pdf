import { StyleSheet, View } from "@react-pdf/renderer";
import { FC } from "react";
import { Exercise1Data } from "../../../../../../../types";
import Examples from "./Examples";
import Heading from "./Heading";

type Props = {
  element: Exercise1Data["elements"][number];
  substring: string;
};

const SingleElement: FC<Props> = ({
  element: { word, examples },
  substring,
}) => (
  <View key={word} style={styles.element}>
    <View style={styles.left}>
      <Heading substring={substring} word={word} />

      <Examples substring={substring} examples={examples} />
    </View>

    <View style={styles.hr} />

    <View style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  element: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },

  left: {
    width: "100%",
    gap: "10px",
  },

  hr: {
    border: "0.5px solid black",
  },

  image: {
    backgroundColor: "lightgray",
    width: "100%",
    height: "100%",
  },
});

export default SingleElement;
