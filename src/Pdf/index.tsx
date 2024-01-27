import { Document } from "@react-pdf/renderer";
import { FC } from "react";
import configContext from "../contexts/configContext";
import { Config, Page as PageType } from "../types";
import Page from "./Page";

export type PdfProps = {
  pages: PageType[];
  config: Config;
};

const Pdf: FC<PdfProps> = ({ config, pages }) => {
  return (
    <configContext.Provider value={config}>
      <Document>
        {pages.map((page, index) => (
          <Page key={index} page={page} />
        ))}
      </Document>
    </configContext.Provider>
  );
};

export default Pdf;
