import { TableExerciseProps } from "./Pdf/Page/Content/exercises/TableExercise"
import { WheelExerciseProps } from "./Pdf/Page/Content/exercises/WheelExercise"
import { Out } from "./assets/outs"

export type Page = {
  pageTitle?: string
} & (
  | {
      type: "COVER"
      data: CoverData
    }
  | {
      type: "COVER_WHITE"
      data: CoverWhiteData
    }
  | {
      type: "META"
      data: MetaData
    }
  | {
      type: "INTRODUCTION"
      data: IntroductionData
    }
  | {
      type: "CHAPTER"
      data: ChapterData
    }
  | WheelExerciseProps
  | TableExerciseProps
)

export type CoverData = undefined
export type CoverWhiteData = undefined
export type MetaData = undefined
export type IntroductionData = {
  heading: string
  content: string
  ending: string
}
export type ChapterData = {
  title: string
}

export type Config = {
  author: string
  title: string
  year: number
  place: string
  copyright: string
}

type ExerciseWithName = { name: string }
type ExerciseWithOut = ExerciseWithName & { out: Out }
type ExerciseWithVariant = ExerciseWithOut & {
  variant1: string
  variant2: string
  variant3: string
}

type ExerciseData<T> = { elements: Array<T> }

export type ExerciseWithNameData = ExerciseData<ExerciseWithName>
export type ExerciseWithOutData = ExerciseData<ExerciseWithOut>
export type ExerciseWithVariantData = ExerciseData<ExerciseWithVariant>
