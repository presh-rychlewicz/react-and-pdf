import { Font, Page as PageNative, StyleSheet } from "@react-pdf/renderer";
import { FC } from "react";
import { config } from "../../styles/config";
import { Page as PageType } from "../../types";
import { getPx } from "../../utils";
import Content from "./Content";
import { PageFooter, PageHeading } from "./pageElements";

type Props = {
  page: PageType;
};

const Page: FC<Props> = ({ page }) => {
  const shouldShowPageFooter = ![
    "COVER",
    "COVER_WHITE",
    "META",
    "INTRODUCTION",
  ].includes(page.type);

  return (
    <PageNative size="A4" style={styles.page}>
      <PageHeading {...page} />

      <Content page={page} />

      {shouldShowPageFooter && <PageFooter />}
    </PageNative>
  );
};

Font.register({
  family: "Roboto",
  src: "http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto",
    gap: getPx(config.MARGIN_BETWEEN_PAGE_PARTS),
    position: "relative",
  },
});

export default Page;
