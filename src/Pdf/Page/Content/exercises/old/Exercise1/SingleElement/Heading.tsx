import { Text } from "@react-pdf/renderer";
import { FC } from "react";
import Highlighter from "react-highlight-words";
import { Exercise1Data } from "../../../../../../../types";
import { fontSizes } from "../../../../../../../styles/fontSizes";

type Props = Pick<Exercise1Data["elements"][number], "word"> & {
  substring: string;
};

const Heading: FC<Props> = ({ word, substring }) => (
  <Text
    render={() => (
      <Highlighter
        highlightStyle={{
          color: "blue",
          fontSize: fontSizes.large,
        }}
        unhighlightStyle={{
          fontSize: fontSizes.large,
        }}
        searchWords={[new RegExp(substring)]}
        textToHighlight={word}
      />
    )}
  />
);

export default Heading;
