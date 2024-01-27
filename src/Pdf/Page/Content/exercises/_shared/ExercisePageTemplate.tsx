import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC, ReactNode } from "react";
import { getPx } from "../../../../../utils";
import { config } from "../../../../../styles/config";
import Icon from "../../../../../assets/outs/Icon";

type Props = {
  children: ReactNode;
};

const ExercisePageTemplate: FC<Props> = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.exerciseHeading}>
      <Icon size={100} />

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu augue
        vestibulum, aliquet felis at, semper nulla. Aenean eget dolor convallis,
        euismod ipsum ut.
      </Text>
    </View>

    <View style={styles.exerciseArea}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // border: "1px solid red",
    width: "100%",
    flexBasis: "100%",
    gap: getPx(config.MARGIN_BETWEEN_EXERCISE_PAGE_PARTS),
  },

  exerciseHeading: {
    // border: "1px solid blue",
    height: "100px",
    minHeight: "100px",
    maxHeight: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
  },

  description: {
    width: "100%",
  },

  exerciseArea: {
    // border: "1px solid lightgray",
    height: "100%",
  },
});

export default ExercisePageTemplate;
