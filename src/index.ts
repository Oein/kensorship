import words from "./words";
import Inko from "inko";

type BadWordData = {
  badword: string;
};

function replaceAll(text: string, search: string, replacement: string) {
  return text.replace(new RegExp(search, "g"), replacement);
}

export default function kensorship(str: string): BadWordData[] {
  let replacer: { [keys: string]: string } = {
    a: "аạąäàáąⒶ",
    b: "βⒷ",
    c: "сƈċč⊂ⅽćℂ匚匸Ⓒㄈ",
    d: "ԁⒹɗ",
    e: "еẹėéèeⒺ",
    f: "Ⓕ",
    g: "ġⒼ",
    h: "һⒽ",
    i: "іíïIⅠⒾ",
    j: "јʝⒿ",
    k: "κķᵏⓀ",
    l: "ӏḷⓁ",
    n: "ոⓃ",
    m: "Ⓜ",
    o: "оοօȯọỏơóòöø0oοоㅇ٥०৹ଠഠO○〇◯อⓄ",
    p: "рⓅ",
    q: "զⓆ",
    r: "Ⓡ",
    s: "ʂsⓈ",
    t: "Ⓣ",
    u: "υսüúⓊᵤบùů",
    v: "νѵⓋ",
    w: "Ⓦ",
    x: "хҳxⓍ",
    y: "уýⓎ",
    z: "ʐżⓏ",
  };

  Object.keys(replacer).forEach((i) => {
    replacer[i].split("").forEach((j) => {
      str = replaceAll(str, j, i);
    });
  });

  str = replaceAll(str, "\n", "");

  str = str.replace(/ /gi, "");
  str = str.replace(/\./gi, "");
  str = str.replace(/-/gi, "");
  str = str.replace(/\+/gi, "");
  str = str.replace(/=/gi, "");
  str = str.replace(/_/gi, "");
  str = str.replace(/`/gi, "");
  str = str.replace(/₩/gi, "");
  str = str.replace(/;/gi, "");
  str = str.replace(/;/gi, "");
  str = str.replace(/ㅤ/gi, "");
  str = str.replace(/ㅤ/gi, "");
  str = str.replace(/឵/gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/ /gi, "");
  str = str.replace(/​/gi, "");

  for (let i = 0; i < 10; i++) str = replaceAll(str, i.toString(), "");

  str = str.toLocaleLowerCase();

  let result: BadWordData[] = [];
  const addWord = (pos: number, word: string) => {
    result.push({
      badword: word,
    });
  };
  words.forEach((bw) => {
    let strindex = str.indexOf(bw);
    if (strindex != -1) return addWord(strindex, bw);
  });

  let oldstr = str;
  str = str.replace(/@/gi, "ㅇ");
  words.forEach((bw) => {
    let strindex = str.indexOf(bw);
    if (strindex != -1) return addWord(strindex, bw);
  });
  str = oldstr;

  oldstr = str;
  str = new Inko().en2ko(str);
  words.forEach((bw) => {
    let strindex = str.indexOf(bw);
    if (strindex != -1) return addWord(strindex, bw);
  });
  str = oldstr;

  oldstr = str;
  str = new Inko().ko2en(str);
  words.forEach((bw) => {
    let strindex = str.indexOf(bw);
    if (strindex != -1) return addWord(strindex, bw);
  });
  str = oldstr;
  return result;
}
