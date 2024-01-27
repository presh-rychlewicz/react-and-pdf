import { Svg, Text } from "@react-pdf/renderer";

const Czajka = () => (
  <Svg
    width="100%"
    height="100%"
    style={{
      border: "2px solid blue",
    }}
  >
    <Text
      textAnchor="middle"
      dominantBaseline="middle"
      y="100%"
      x="100%"
      fill="#000000"
    >
      CZAJKA
    </Text>

    {/* <Rect stroke="#ff0000" height="100%" width="100%" y="0" x="0" /> */}
  </Svg>
);

export default Czajka;
