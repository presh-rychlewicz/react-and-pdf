import { Path, StyleSheet, Svg, Text, View } from "@react-pdf/renderer"
import { FC, Fragment } from "react"
import { Icon } from "../../../../../components"
import { Exercise3Data } from "../../../../../types"
import { getPx } from "../../../../../utils"
import ExercisePageTemplate from "../_shared/ExercisePageTemplate"
import { fontSizes } from "../../../../../styles/fontSizes"

type Props = {
  data: Exercise3Data
}

const Exercise3: FC<Props> = ({ data: { elements } }) => {
  return (
    <ExercisePageTemplate>
      <View style={styles.container}>
        {elements.map((row) => {
          const variants = [row.variant1, row.variant2, row.variant3]

          return (
            <View key={row.name} style={styles.row}>
              <Icon out={row.out} size={ICON_SIZE} />

              {variants.map((variant) => (
                <Fragment key={variant}>
                  <Svg style={styles.arrow}>
                    <Path
                      d="m 0 11 h 50 v -11 l 25 20 l -25 20 l 0 -11 l -50 0 l 0 -18"
                      stroke="black"
                      strokeDasharray="4, 4"
                    />
                  </Svg>

                  <View style={styles.variant}>
                    <Text style={styles.variantText}>{variant}</Text>
                  </View>
                </Fragment>
              ))}
            </View>
          )
        })}
      </View>
    </ExercisePageTemplate>
  )
}

const ICON_SIZE = 80

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  arrow: {
    width: "75px",
    height: "40px",
  },

  variant: {
    width: getPx(ICON_SIZE),
    height: getPx(ICON_SIZE),
    border: "1px solid black",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
  },
  variantText: {
    textAlign: "center",
    fontSize: fontSizes.small,
    width: "100%",
  },
})

export default Exercise3
