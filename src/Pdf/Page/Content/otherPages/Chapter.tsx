import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { ChapterData } from "../../../../types";

type Props = {
  data: ChapterData;
};

const Chapter: FC<Props> = ({ data }) => (
  <View style={styles.view}>
    <Text style={styles.title}>{data.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    marginTop: "auto",
    marginBottom: "auto",
    // border: "1px solid red",
    gap: "10px",
  },
  title: {
    // border: "1px solid blue",
    textAlign: "right",
  },
});

export default Chapter;
