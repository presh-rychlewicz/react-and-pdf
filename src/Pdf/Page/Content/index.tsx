import { Text } from "@react-pdf/renderer";
import { FC } from "react";
import { Page } from "../../../types";
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
} from "./exercises";
import { Chapter, Cover, CoverWhite, Introduction, Meta } from "./otherPages";
import { Exercise6 } from "./exercises/Exercise6";

type Props = {
  page: Page;
};

const Content: FC<Props> = ({ page }) => {
  switch (page.type) {
    case "COVER":
      return <Cover data={page.data} />;

    case "COVER_WHITE":
      return <CoverWhite data={page.data} />;

    case "META":
      return <Meta data={page.data} />;

    case "INTRODUCTION":
      return <Introduction data={page.data} />;

    case "CHAPTER":
      return <Chapter data={page.data} />;

    case "EXERCISE1":
      return <Exercise1 data={page.data} />;

    case "EXERCISE2":
      return <Exercise2 data={page.data} />;

    case "EXERCISE3":
      return <Exercise3 data={page.data} />;

    case "EXERCISE4":
      return <Exercise4 data={page.data} />;

    case "EXERCISE5":
      return <Exercise5 data={page.data} />;

    case "EXERCISE6":
      return <Exercise6 data={page.data} />;

    default:
      return <Text>TODO</Text>;
  }
};

export default Content;
