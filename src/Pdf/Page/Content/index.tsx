import { Text } from "@react-pdf/renderer"
import { FC } from "react"
import { Page } from "../../../types"
import { GameExercise, WheelExercise } from "./exercises"
import { Chapter, Cover, CoverWhite, Introduction, Meta } from "./otherPages"

type Props = {
  page: Page
}

const Content: FC<Props> = ({ page }) => {
  switch (page.type) {
    case "COVER":
      return <Cover data={page.data} />

    case "COVER_WHITE":
      return <CoverWhite data={page.data} />

    case "META":
      return <Meta data={page.data} />

    case "INTRODUCTION":
      return <Introduction data={page.data} />

    case "CHAPTER":
      return <Chapter data={page.data} />

    case "WHEEL_EXERCISE":
      return <WheelExercise type={page.type} data={page.data} />

    case "GAME_EXERCISE":
      return <GameExercise type={page.type} data={page.data} />

    default:
      return <Text>TODO</Text>
  }
}

export default Content
