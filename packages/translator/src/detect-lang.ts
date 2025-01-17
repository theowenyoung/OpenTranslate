import { Language } from "@theowenyoung/languages";
import franc from "franc-min";

// improve accuracy but narrowing down language set
const langMap = new Map<string, Language>([
  // ["afr", "af"],
  // ["amh", "am"],
  // ["arb", "ar"],
  // ["azj", "az"],
  // ["bel", "be"],
  // ["bul", "bg"],
  // ["ben", "bn"],
  // ["bos", "bs"],
  // ["cat", "ca"],
  // ["ceb", "ceb"],
  // ["ces", "cs"],
  // ["dan", "da"],
  // ["deu", "de"],
  // ["ell", "el"],
  ["eng", "en"],
  // ["epo", "eo"],
  // ["spa", "es"],
  // ["est", "et"],
  // ["fas", "fa"],
  // ["fin", "fi"],
  // ["fra", "fr"],
  // ["gax", "ga"],
  // ["glg", "gl"],
  // ["guj", "gu"],
  // ["hau", "ha"],
  // ["heb", "he"],
  // ["hin", "hi"],
  // ["hrv", "hr"],
  // ["hun", "hu"],
  // ["hye", "hy"],
  // ["ind", "id"],
  // ["ibo", "ig"],
  // ["ita", "it"],
  ["jpn", "ja"],
  // ["jav", "jw"],
  // ["kat", "ka"],
  // ["kaz", "kk"],
  // ["khm", "km"],
  // ["kan", "kn"],
  ["kor", "ko"],
  // ["ckb", "ku"],
  // ["lao", "lo"],
  // ["lit", "lt"],
  // ["lav", "lv"],
  // ["min", "mi"],
  // ["mkd", "mk"],
  // ["mal", "ml"],
  // ["mar", "mr"],
  // ["mya", "my"],
  // ["nep", "ne"],
  // ["nld", "nl"],
  // ["nob", "no"],
  // ["nya", "ny"],
  // ["pan", "pa"],
  // ["pol", "pl"],
  // ["pbu", "ps"],
  // ["por", "pt"],
  // ["ron", "ro"],
  // ["rus", "ru"],
  // ["sin", "si"],
  // ["slk", "sk"],
  // ["slv", "sl"],
  // ["sna", "sn"],
  // ["som", "so"],
  // ["als", "sq"],
  // ["srp", "sr"],
  // ["sun", "su"],
  // ["swe", "sv"],
  // ["swh", "sw"],
  // ["tam", "ta"],
  // ["tel", "te"],
  // ["tgk", "tg"],
  // ["tha", "th"],
  // ["toi", "to"],
  // ["tur", "tr"],
  // ["ukr", "uk"],
  // ["urd", "ur"],
  // ["uzn", "uz"],
  // ["vie", "vi"],
  // ["xho", "xh"],
  // ["ydd", "yi"],
  // ["yor", "yo"],
  ["cmn", "zh-CN"],
  // ["zul", "zu"]
]);

const options = { minLength: 1, whitelist: [...langMap.keys()] };

/**
 * Naive fallback language detection
 */
export function detectLang(text: string): Language {
  return langMap.get(franc(text, options)) || "auto";
}
