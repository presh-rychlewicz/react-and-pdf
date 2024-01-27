import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import Highlighter from "react-highlight-words";
import { Exercise1Data } from "../../../../../../../types";
import { fontSizes } from "../../../../../../../styles/fontSizes";

type Props = Pick<Exercise1Data["elements"][number], "examples"> & {
  substring: string;
};

const Examples: FC<Props> = ({ examples, substring }) => (
  <View style={styles.container}>
    {examples.map((example) => (
      <Text
        key={example}
        render={() => (
          <Highlighter
            highlightStyle={{
              color: "blue",
              fontSize: fontSizes.small,
            }}
            unhighlightStyle={{
              color: "black",
              fontSize: fontSizes.small,
            }}
            searchWords={[new RegExp(substring)]}
            textToHighlight={example}
          />
        )}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: "5px",
  },
});

export default Examples;
