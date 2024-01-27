import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { Logo } from "../../../components";
import { useConfigContext } from "../../../contexts/configContext";
import { fontSizes } from "../../../styles/fontSizes";
import { fontColors } from "../../../styles/fontColors";

const PageFooter: FC = () => {
  const { copyright } = useConfigContext();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo size="small" />
      </View>

      <Text style={styles.copyright}>{copyright}</Text>

      <View style={styles.pageNumberWrapper}>
        <Text
          style={styles.pageNumber}
          render={({ totalPages, pageNumber }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
    height: "20px",
  },

  logoWrapper: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },

  copyright: {
    fontSize: fontSizes.small,
    lineHeight: 1,
    textAlign: "center",
    color: fontColors.caption,
  },

  pageNumber: {
    fontSize: fontSizes.small,
    lineHeight: 1,
    textAlign: "right",
    color: fontColors.caption,
  },
  pageNumberWrapper: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "100px",
  },
});

export default PageFooter;
