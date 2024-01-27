import { StyleSheet, View } from "@react-pdf/renderer";
import { FC } from "react";
import { Exercise1Data } from "../../../../../../types";
import SingleElement from "./SingleElement";

type Props = {
  data: Exercise1Data;
};

const Exercise1: FC<Props> = ({ data: { elements, substring } }) => (
  <View style={styles.container}>
    {elements.map((element) => (
      <SingleElement
        substring={substring}
        key={element.word}
        element={element}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: "30px",
  },
});

export default Exercise1;
