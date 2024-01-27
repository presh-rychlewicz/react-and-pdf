import { Outs } from "./assets/outs";

export type Page = {
  pageTitle?: string;
} & (
  | {
      type: "COVER";
      data: CoverData;
    }
  | {
      type: "COVER_WHITE";
      data: CoverWhiteData;
    }
  | {
      type: "META";
      data: MetaData;
    }
  | {
      type: "INTRODUCTION";
      data: IntroductionData;
    }
  | {
      type: "CHAPTER";
      data: ChapterData;
    }
  | {
      type: "EXERCISE1";
      data: Exercise1Data;
    }
  | {
      type: "EXERCISE2";
      data: Exercise2Data;
    }
  | {
      type: "EXERCISE3";
      data: Exercise3Data;
    }
  | {
      type: "EXERCISE4";
      data: Exercise4Data;
    }
  | {
      type: "EXERCISE5";
      data: Exercise5Data;
    }
  | {
      type: "EXERCISE6";
      data: Exercise6Data;
    }
);

export type CoverData = undefined;

export type CoverWhiteData = undefined;

export type MetaData = undefined;

export type IntroductionData = {
  heading: string;
  content: string;
  ending: string;
};

export type ChapterData = {
  title: string;
};

export type Exercise1Data = {
  title?: string;
  substring: string;
  elements: {
    word: string;
    examples: string[];
  }[];
};

export type Exercise2Data = {
  elements: string[];
};

export type Exercise3Data = {
  elements: Array<Element>;
};

export type Exercise4Data = undefined;

export type Exercise5Data = {
  elements: Array<
    Element & {
      variant1: string;
      variant2: string;
      variant3: string;
    }
  >;
};

export type Exercise6Data = {
  elements: Array<Element>;
};

export type Config = {
  author: string;
  title: string;
  year: number;
  place: string;
  copyright: string;
};

type Element = { name: string; out: Outs };
