import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { FC } from "react";
import { CoverData } from "../../../../types";
import { useConfigContext } from "../../../../contexts/configContext";
import { fontSizes } from "../../../../styles/fontSizes";

type Props = {
  data: CoverData;
};

const Cover: FC<Props> = () => {
  const { title, author } = useConfigContext();

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: "auto",
    marginBottom: "auto",
    gap: "10px",
  },
  title: {
    fontSize: fontSizes.huge,
    textAlign: "center",
  },
  author: {
    fontSize: fontSizes.large,
    textAlign: "center",
  },
});

export default Cover;
