import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { fontSizes } from "../../../styles/fontSizes";
import { Page } from "../../../types";

type Props = Pick<Page, "pageTitle">;

const PageHeading: FC<Props> = ({ pageTitle }) => {
  if (!pageTitle) {
    return null;
  }

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{pageTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: fontSizes.large,
    lineHeight: 1,
  },
});

export default PageHeading;
