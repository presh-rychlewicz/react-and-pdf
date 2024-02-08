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
  | {
      type: "EXERCISE1"
      data: Exercise1Data
    }
  | {
      type: "EXERCISE2"
      data: Exercise2Data
    }
  | {
      type: "EXERCISE3OLD"
      data: Exercise3OldData
    }
  | {
      type: "EXERCISE4"
      data: Exercise4Data
    }
  | {
      type: "EXERCISE3"
      data: Exercise3Data
    }
  | {
      type: "EXERCISE6"
      data: Exercise6Data
    }
  | {
      type: "EXERCISE7"
      data: Exercise7Data
    }
  | {
      type: "EXERCISE8"
      data: Exercise8Data
    }
  | {
      type: "STUB_EXERCISE"
      data: ExerciseStubData
    }
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

export type Exercise3OldData = {
  elements: Array<Element>
}

export type Exercise4Data = undefined

export type Exercise3Data = {
  elements: Array<
    Element & {
      variant1: string
      variant2: string
      variant3: string
    }
  >
}

export type Exercise6Data = {
  elements: Array<Element>
}

export type Exercise7Data = {
  elements: Array<Element>
}

export type Exercise8Data = {
  elements: Array<Element>
}

export type Exercise1Data = {
  elements: Array<Element>
}
export type Exercise2Data = {
  elements: Array<Element>
}

export type ExerciseStubData = undefined

export type Config = {
  author: string
  title: string
  year: number
  place: string
  copyright: string
}

type Element = {
  name: string
  out: Out
}
