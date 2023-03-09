import words from "./words";

type BadWordData = {
  badword: string;
};

function replaceAll(text: string, search: string, replacement: string) {
  return text.replace(new RegExp(search, "g"), replacement);
}

export default function kensorship(str: string): BadWordData[] {
  str = str.replace(/ /gi, "");
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

  let replacer: { [keys: string]: string } = {
    a: "аạąäàáą",
    b: "β",
    c: "сƈċ",
    d: "ԁɗ",
    e: "еẹėéèe",
    g: "ġ",
    h: "һ",
    i: "іíï",
    j: "јʝ",
    k: "κ",
    l: "ӏḷ",
    n: "ո",
    o: "оοօȯọỏơóòö",
    p: "р",
    q: "զ",
    s: "ʂs",
    u: "υսüúù",
    v: "νѵ",
    x: "хҳx",
    y: "уý",
    z: "ʐż",
  };

  Object.keys(replacer).forEach((i) => {
    replacer[i].split("").forEach((j) => {
      str = replaceAll(str, j, i);
    });
  });

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
