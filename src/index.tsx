import { PDFViewer } from "@react-pdf/renderer"
import React from "react"
import ReactDOM from "react-dom/client"
import Pdf, { PdfProps } from "./Pdf"
import {
  Exercise1Data,
  Exercise2Data,
  Exercise3Data,
  Exercise5Data,
  Exercise6Data,
  Exercise7Data,
  Exercise8Data,
  Page,
} from "./types"

type Chapter = {
  title: string
  exercise1Elements: Exercise1Data["elements"]
  exercise2Elements: Exercise2Data["elements"]
  exercise3Elements: Exercise3Data["elements"]
  exercise5Elements: Exercise5Data["elements"]
  exercise6Elements: Exercise6Data["elements"]
  exercise7Elements: Exercise7Data["elements"]
  exercise8Elements: Exercise8Data["elements"]
}

const chapters: Array<Chapter> = [
  {
    title: "CZ",
    exercise1Elements: [
      { name: "UCZ", out: "unknown" },
      { name: "ECZ", out: "unknown" },
      { name: "YCZ", out: "unknown" },
      { name: "OCZ", out: "unknown" },
      { name: "ACZ", out: "unknown" },
    ],
    exercise2Elements: [
      { name: "MIECZ", out: "unknown" },
      { name: "MLECZ", out: "unknown" },
      { name: "KLUCZ", out: "unknown" },
      { name: "BIEGACZ", out: "unknown" },
      { name: "WARKOCZ", out: "unknown" },
      { name: "KLACZ", out: "unknown" },
    ],
    exercise3Elements: [
      { name: "CZA", out: "czajka" },
      { name: "CZO", out: "czolg" },
      { name: "CZE", out: "czepek" },
      { name: "CZY", out: "czytanka" },
      { name: "CZU", out: "unknown" },
    ],
    exercise5Elements: [
      {
        name: "czekolada",
        variant1: "lubie czekolade",
        variant2: "dobra czekolada",
        variant3: "Julek je czekolade",
        out: "czekolada",
      },
      {
        name: "czepek",
        variant1: "ladny czepek",
        variant2: "pod czepkiem",
        variant3: "mama kupila czepek",
        out: "czepek",
      },
      {
        name: "czolg",
        variant1: "na czolgu",
        variant2: "obok czolgu",
        variant3: "tomek bawi sie czolgiem",
        out: "czolg",
      },
      {
        name: "czajka",
        variant1: "ladna czajka",
        variant2: "obok czajki",
        variant3: "na dachu siedzi czajka",
        out: "czajka",
      },
      {
        name: "czajnik",
        variant1: "bialy czajnik",
        variant2: "obok czajnika",
        variant3: "tata kupil nowy czajnik",
        out: "czajnik",
      },
      {
        name: "czytanka",
        variant1: "nowa czytanka",
        variant2: "nad czytanka",
        variant3: "Julia ma czytanke",
        out: "czytanka",
      },
    ],
    exercise6Elements: [
      {
        name: "kaczka",
        out: "kaczka",
      },
      {
        name: "kolczyki",
        out: "kolczyki",
      },
      {
        name: "buleczka",
        out: "buleczka",
      },
      {
        name: "paczka",
        out: "paczka",
      },
      {
        name: "doniczka",
        out: "doniczka",
      },
      {
        name: "wnuczka",
        out: "wnuczka",
      },
    ],
    exercise7Elements: [
      { name: "ACZA", out: "unknown" },
      { name: "OCZO", out: "unknown" },
      { name: "ECZE", out: "unknown" },
      { name: "YCZY", out: "unknown" },
      { name: "UCZU", out: "unknown" },
    ],
    exercise8Elements: [
      { name: "TĘCZA", out: "tecza" },
      { name: "OCZY", out: "oczy" },
      { name: "UCZEŃ", out: "uczen" },
      { name: "KONICZYNA", out: "koniczyna" },
      { name: "PAJĘCZYNA", out: "pajeczyna" },
      { name: "MACZUGA", out: "maczuga" },
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
        {
          type: "CHAPTER",
          data: {
            title: `Chapter ${chapter.title}`,
          },
        },

        {
          type: "EXERCISE4",
          pageTitle: "Głoska w izolacji",
          data: undefined,
        },

        {
          type: "EXERCISE3",
          pageTitle: "?Głoska w sylabach",
          data: {
            elements: chapter.exercise3Elements,
          },
        },

        {
          type: "EXERCISE5",
          pageTitle: "Głoska w nagłosie",
          data: {
            elements: chapter.exercise5Elements,
          },
        },

        {
          type: "EXERCISE7",
          pageTitle: "Głoska w środku sylaby",
          data: {
            elements: chapter.exercise7Elements,
          },
        },

        {
          type: "EXERCISE8",
          pageTitle: "Głoska w śródgłosie",
          data: {
            elements: chapter.exercise8Elements,
          },
        },

        {
          type: "EXERCISE6",
          pageTitle: "Głoska w śródgłosie (trudne slowa)",
          data: {
            elements: chapter.exercise6Elements,
          },
        },

        {
          type: "EXERCISE1",
          pageTitle: "Powtarzanie sylab na końcu",
          data: {
            elements: chapter.exercise1Elements,
          },
        },

        {
          type: "EXERCISE2",
          pageTitle: "Wygłos",
          data: {
            elements: chapter.exercise2Elements,
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
