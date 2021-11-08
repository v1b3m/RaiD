import { v4 as uuid4 } from "uuid";
import {
  endOfQuarter,
  endOfWeek,
  endOfYear,
  randomDate,
  startOfQuarter,
  startOfWeek,
  startOfYear,
} from "../../../utils/date";

const starts = [startOfWeek, startOfQuarter, startOfYear];
const ends = [endOfWeek, endOfQuarter, endOfYear];

const randomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const medicalWords = [
  "obdormition",
  "paresthesia",
  "Sphenopalatine ganglioneuralgia",
  "fasciculation",
  "heloma molle",
  "heloma durum",
  "transient lingual papillitis",
  "onychocryptosis",
  "unguis incarnatus",
  "Aphthous stomatitis",
  "morsicatio buccarum",
  "transient diaphragmatic spasm",
  "synchronous diaphragmatic flutter",
  "sternutate",
  "muscae volitantes",
  "nocturnal enuresis",
  "diurnal enuresis",
  "vasovagal syncope",
  "orthostatic hypotension",
  "horripilation",
  "gustatory rhinitis",
  "crepitus",
  "medial tibial stress syndrome",
  "veisalgia",
];

export const data = new Array(20).fill(null).map((data) => ({
  id: uuid4(),
  description: randomItem(medicalWords),
  date: randomDate(randomItem(starts).toDate(), randomItem(ends).toDate()),
}));
