import words from "./words";

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

  let fromTo: { [keys: string]: string } = {
    ɅɅ: "ㅆ",
    ʌʌ: "ㅆ",
    "◠◠": "ㅆ",
    Ʌ: "ㅅ",
    ʌ: "ㅅ",
    "◠": "ㅅ",
    ᚢᚢ: "ㅆ",
    ᚢ: "ㅅ",
  };

  Object.keys(replacer).forEach((i) => {
    replacer[i].split("").forEach((j) => {
      str = replaceAll(str, j, i);
    });
  });
  Object.keys(fromTo).forEach((i) => {
    str = replaceAll(str, i, fromTo[i]);
  });
  str = replaceAll(str, "\n", "");
  str = replaceAll(str, "人人", "ㅆ");
  str = str.replace(/ /gi, "");
  str = str.replace(/./gi, "");
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
  return result;
}
