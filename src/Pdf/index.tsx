import { Document, Font } from "@react-pdf/renderer"
import { FC } from "react"
import configContext from "../contexts/configContext"
import { Config, Page as PageType } from "../types"
import Page from "./Page"

export type PdfProps = {
  pages: PageType[]
  config: Config
}

const Pdf: FC<PdfProps> = ({ config, pages }) => (
  <configContext.Provider value={config}>
    <Document>
      {pages.map((page, index) => (
        <Page key={index} page={page} />
      ))}
    </Document>
  </configContext.Provider>
)

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
  //   src: "http://fonts.gstatic.com/s/roboto/v15/zN7GBFwfMP4uA6AR0HCoLQ.ttf",
})

export default Pdf
