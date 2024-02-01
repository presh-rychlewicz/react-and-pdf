import Buleczka from "./Buleczka"
import Czajka from "./Czajka"
import Czajnik from "./Czajnik"
import Czekolada from "./Czekolada"
import Czepek from "./Czepek"
import Czolg from "./Czolg"
import Czytanka from "./Czytanka"
import Doniczka from "./Doniczka"
import Kaczka from "./Kaczka"
import Kolczyki from "./Kolczyki"
import Koniczyna from "./Koniczyna"
import Maczuga from "./Maczuga"
import Oczy from "./Oczy"
import Paczka from "./Paczka"
import Pajeczyna from "./Pajeczyna"
import Tecza from "./Tecza"
import Uczen from "./Uczen"
import Unknown from "./Unknown"
import Wnuczka from "./Wnuczka"

const outs = {
  unknown: <Unknown />,

  buleczka: <Buleczka />,
  czajka: <Czajka />,
  czajnik: <Czajnik />,
  czekolada: <Czekolada />,
  czepek: <Czepek />,
  czolg: <Czolg />,
  czytanka: <Czytanka />,
  doniczka: <Doniczka />,
  kaczka: <Kaczka />,
  kolczyki: <Kolczyki />,
  koniczyna: <Koniczyna />,
  maczuga: <Maczuga />,
  oczy: <Oczy />,
  paczka: <Paczka />,
  pajeczyna: <Pajeczyna />,
  tecza: <Tecza />,
  uczen: <Uczen />,
  wnuczka: <Wnuczka />,
}

export type Out = keyof typeof outs

export default outs
