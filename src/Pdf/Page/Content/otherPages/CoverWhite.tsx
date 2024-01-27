import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { Logo } from "../../../../components";
import { useConfigContext } from "../../../../contexts/configContext";
import { fontSizes } from "../../../../styles/fontSizes";
import { CoverWhiteData } from "../../../../types";

type Props = {
  data: CoverWhiteData;
};

const CoverWhite: FC<Props> = () => {
  const { author, title, year, place } = useConfigContext();

  return (
    <View style={styles.view}>
      <View style={styles.wrapper1}>
        <Text style={styles.author}>{author}</Text>

        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.qrCode}>
        <Text>QR CODE</Text>
      </View>

      <Logo />

      <Text style={styles.placeAndYear}>
        {place}, {year}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },

  wrapper1: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    gap: "30px",
  },
  author: {
    fontSize: fontSizes.large,
    textAlign: "center",
  },
  title: {
    fontSize: fontSizes.huge,
    textAlign: "center",
  },

  qrCode: {
    border: "1px solid black",
    minWidth: "125px",
    maxWidth: "125px",
    minHeight: "125px",
    maxHeight: "125px",
    alignItems: "center",
    justifyContent: "center",
  },

  placeAndYear: {
    fontSize: fontSizes.small,
  },
});

export default CoverWhite;
