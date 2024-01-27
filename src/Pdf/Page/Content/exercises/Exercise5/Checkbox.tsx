import { StyleSheet, View } from "@react-pdf/renderer";
import { FC } from "react";
import { getPx } from "../../../../../utils";

type Props = {
  size: number;
};

const Checkbox: FC<Props> = ({ size }) => (
  <View
    style={{
      ...styles.checkbox,
      width: getPx(size),
      height: getPx(size),
    }}
  />
);

const styles = StyleSheet.create({
  checkbox: {
    border: "1px solid black",
  },
});

export default Checkbox;
