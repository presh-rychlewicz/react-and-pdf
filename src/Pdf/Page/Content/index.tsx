import { Text } from "@react-pdf/renderer"
import { FC } from "react"
import { Page } from "../../../types"
import {
  Exercise1,
  Exercise2,
  Exercise3Old,
  Exercise4,
  Exercise3,
  Exercise6,
  Exercise7,
  Exercise8,
  StubExercise,
} from "./exercises"
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

    case "EXERCISE1":
      return <Exercise1 data={page.data} />

    case "EXERCISE2":
      return <Exercise2 data={page.data} />

    case "EXERCISE3OLD":
      return <Exercise3Old data={page.data} />

    case "EXERCISE4":
      return <Exercise4 data={page.data} />

    case "EXERCISE3":
      return <Exercise3 data={page.data} />

    case "EXERCISE6":
      return <Exercise6 data={page.data} />

    case "EXERCISE7":
      return <Exercise7 data={page.data} />

    case "EXERCISE8":
      return <Exercise8 data={page.data} />

    case "STUB_EXERCISE":
      return <StubExercise data={page.data} />

    default:
      return <Text>TODO</Text>
  }
}

export default Content
