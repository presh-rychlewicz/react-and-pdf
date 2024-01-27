import Czajka from "./Czajka";

const outs = {
  czajka: <Czajka />,
  czolg: false,
  czepek: false,
  czytanka: false,
  czekolada: false,
  czajnik: false,
  unknown: false,
};

export type Outs = keyof typeof outs;

export default outs;
