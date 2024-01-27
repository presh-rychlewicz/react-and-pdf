import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { MetaData } from "../../../../types";

type Props = {
  data: MetaData;
};

const Chapter: FC<Props> = ({ data }) => (
  <View style={styles.view}>
    <Text>META</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    marginTop: "auto",
    marginBottom: "auto",
    textAlign: "center",
    gap: "10px",
  },
});

export default Chapter;
