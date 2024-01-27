import { Image, StyleSheet, View } from "@react-pdf/renderer";
import { FC } from "react";
import { getPx } from "../../utils";
import pngExample from "../png-sample.png";

type Props = {
  size: number;
};

const Icon: FC<Props> = ({ size }) => (
  <View
    style={{
      ...styles.icon,
      minWidth: getPx(size),
      maxWidth: getPx(size),
      minHeight: getPx(size),
      maxHeight: getPx(size),
    }}
  >
    <Image style={styles.image} src={pngExample} />
  </View>
);

const styles = StyleSheet.create({
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export default Icon;
