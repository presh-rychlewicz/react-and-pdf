import { Text, View } from "@react-pdf/renderer";
import { FC } from "react";

type Props = {
  size?: Size;
};

const Logo: FC<Props> = ({ size = "large" }) => (
  <View
    style={{
      ...sizeMapping[size],
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid black",
      fontSize: "10px",
    }}
  >
    <Text>LOGO</Text>
  </View>
);

const sizeMapping: Record<
  Size,
  {
    width: string;
    height: string;
  }
> = {
  small: {
    width: "40px",
    height: "20px",
  },
  large: {
    width: "130px",
    height: "65px",
  },
};

type Size = "small" | "large";

export default Logo;
