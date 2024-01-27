import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { IntroductionData } from "../../../../types";
import { fontSizes } from "../../../../styles/fontSizes";

type Props = {
  data: IntroductionData;
};

const Introduction: FC<Props> = ({ data }) => (
  <View style={styles.view}>
    <Text style={styles.heading}>{data.heading}</Text>

    <Text style={styles.content}>{data.content}</Text>

    <Text style={styles.ending}>{data.ending}</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    marginTop: "auto",
    marginBottom: "auto",
    gap: "10px",
  },
  heading: {
    textAlign: "center",
  },
  content: {
    fontSize: fontSizes.medium,
    textAlign: "center",
  },
  ending: {
    fontSize: fontSizes.medium,
    textAlign: "center",
  },
});

export default Introduction;
