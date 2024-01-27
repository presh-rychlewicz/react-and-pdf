import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ReactDOM from "react-dom/client";
import Pdf, { PdfProps } from "./Pdf";
import { Page } from "./types";

const chapters = [
  {
    title: "A",
  },
];

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

        {
          type: "EXERCISE4",
          pageTitle: "Gloska w izolacji",
          data: undefined,
        },

        {
          type: "EXERCISE3",
          pageTitle: "Gloska w sylabach",
          data: {
            elements: [
              { name: "CZA", out: "czajka" },
              { name: "CZO", out: "czolg" },
              { name: "CZE", out: "czepek" },
              { name: "CZY", out: "czytanka" },
              { name: "CZU", out: "unknown" },
            ],
          },
        },

        {
          type: "EXERCISE5",
          pageTitle: "Gloska w naglosie",
          data: {
            elements: [
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
          },
        },

        {
          type: "EXERCISE6",
          pageTitle: "Gloska w srodglosie (trudne slowa)",
          data: {
            elements: [
              {
                name: "kaczka",
                out: "unknown",
              },
              {
                name: "kolczyki",
                out: "unknown",
              },
              {
                name: "buleczka",
                out: "unknown",
              },
              {
                name: "paczka",
                out: "unknown",
              },
              {
                name: "doniczka",
                out: "unknown",
              },
              {
                name: "wnuczka",
                out: "unknown",
              },
            ],
          },
        },
      ])
      .flat(),
  ],

  config: {
    author: "J. K. Rowling",
    title: "Harry Potter and the Goblet of Fire",
    year: 1992,
    place: "Lyon-on-Sea",
    copyright: "Neque porro quisquam est qui dolorem",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PDFViewer height="800px" width="1000px" showToolbar={false}>
      <Pdf {...pdfData} />
    </PDFViewer>
  </React.StrictMode>
);
