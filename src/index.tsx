import { PDFViewer } from "@react-pdf/renderer"
import React from "react"
import ReactDOM from "react-dom/client"
import Pdf, { PdfProps } from "./Pdf"
import {
  ExerciseWithNameData,
  ExerciseWithOutData,
  ExerciseWithVariantData,
  Page,
} from "./types"

type Chapter = {
  title: string
  exerciseWithOutElements: ExerciseWithOutData["elements"]
  exerciseWithNameElements: ExerciseWithNameData["elements"]
  exerciseWithVariantsElements: ExerciseWithVariantData["elements"]
}

const chapters: Array<Chapter> = [
  {
    title: "CZ",
    exerciseWithNameElements: [
      { name: "CZA" },
      { name: "CZO" },
      { name: "CZE" },
      { name: "CZY" },
      { name: "CZU" },
    ],
    exerciseWithOutElements: [
      { name: "CZA", out: "czajka" },
      { name: "CZO", out: "czolg" },
      { name: "CZE", out: "czepek" },
      { name: "CZY", out: "czytanka" },
      { name: "CZU", out: "unknown" },
    ],
    exerciseWithVariantsElements: [
      {
        name: "CZEKOLADA",
        out: "czekolada",
        variant1: "LUBIĘ CZEKOLADĘ",
        variant2: "DOBRA CZEKOLADA",
        variant3: "JULEK JE CZEKOLADĘ.",
      },
      {
        name: "CZOŁG",
        out: "czolg",
        variant1: "NA CZOŁGU",
        variant2: "OBOK CZOŁGU",
        variant3: "TOMEK BAWI SIĘ CZOŁGIEM.",
      },
      {
        name: "CZEPEK",
        out: "czepek",
        variant1: "ŁADNY CZEPEK",
        variant2: "POD CZEPKIEM ",
        variant3: "MAMA KUPIŁA CZEPEK.",
      },
      {
        name: "CZAJKA",
        out: "czajka",
        variant1: "ŁADNA CZAJKA",
        variant2: "OBOK CZAJKI",
        variant3: "NA DACHU SIEDZI CZAJKA.",
      },
      {
        name: "CZAJNIK",
        out: "czajnik",
        variant1: "BIAŁY CZAJNIK",
        variant2: "OBOK CZAJNIKA",
        variant3: "TATA KUPIŁ NOWY CZAJNIK.",
      },
      {
        name: "CZYTANKA",
        out: "czytanka",
        variant1: "NOWA CZYTANKA",
        variant2: "NAD CZYTANKĄ",
        variant3: "JULIA MA CZYTANKĘ.",
      },
    ],
  },
]

const pdfData: PdfProps = {
  pages: [
    // {
    //   type: "COVER",
    //   data: undefined,
    // },
    // {
    //   type: "COVER_WHITE",
    //   data: undefined,
    // },
    // {
    //   type: "META",
    //   data: undefined,
    // },
    // {
    //   type: "INTRODUCTION",
    //   data: {
    //     heading: "Introduction",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tempus nibh.\n\nProin at dolor vel leo rutrum mattis in ut neque. Donec dapibus aliquet lorem, non pretium lorem interdum at. Nulla at tellus quis turpis interdum congue vel ac purus. Curabitur a turpis nec augue porta varius sit amet id augue. Sed vestibulum est commodo venenatis fermentum. Nullam imperdiet gravida sapien placerat sollicitudin. Suspendisse rutrum laoreet tortor, sit amet pharetra eros auctor at. Nullam condimentum quis ligula a scelerisque. Vestibulum fermentum fermentum vestibulum. Pellentesque purus elit, scelerisque vitae fermentum et, posuere eu enim.\n\nVestibulum eget ligula semper, blandit enim a, dignissim dolor. Quisque sed elit nisi. Etiam id orci mattis nisi eleifend elementum eu eget risus.",
    //     ending: "Yours faithfully",
    //   },
    // },

    ...chapters
      .map((chapter): Page[] => [
        // {
        //   type: "CHAPTER",
        //   data: {
        //     title: `Chapter ${chapter.title}`,
        //   },
        // },

        // {
        //   type: "EXERCISE3OLD",
        //   pageTitle: "Page title",
        //   data: {
        //     elements: chapter.exercise3Elements,
        //   },
        // },

        {
          type: "TABLE_EXERCISE",
          pageTitle: "Page title",
          data: {
            elements: chapter.exerciseWithVariantsElements,
          },
        },
        {
          type: "WHEEL_EXERCISE",
          pageTitle: "Page title",
          data: {
            elements: chapter.exerciseWithOutElements,
          },
        },
      ])
      .flat(),
  ],

  config: {
    author: "Lorem ipsum dolor",
    title: "Lorem ipsum dolor sit amet",
    year: 1992,
    place: "Lorem ipsum",
    copyright: "Lorem ipsum dolor sit amet",
  },
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PDFViewer height="800px" width="1000px" showToolbar={false}>
      <Pdf {...pdfData} />
    </PDFViewer>
  </React.StrictMode>
)
