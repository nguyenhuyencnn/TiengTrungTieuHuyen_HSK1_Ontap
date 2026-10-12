// Tạo trang từ src/template.html + src/data.js
//   node build.js            →  index.html (dùng cho GitHub Pages, đọc âm thanh từ audio.js)
//                                hsk1-on-tap-offline.html (bản 1 file, âm thanh nhúng sẵn)
//   node build.js <thư-mục-mp3> → tạo lại audio.js từ các tệp cmn-<chữ Hán>.mp3 trong thư mục đó
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;
const { VOCAB } = require("./src/data.js");

// Trợ từ thanh nhẹ: không phát bản ghi đọc tách riêng
const NOPLAY = ["的", "吗", "呢", "了"];
// Chữ đa âm / đọc tách riêng: giáo viên nên nghe lại
const FLAG = ["都", "好", "少", "会", "和", "看", "那", "哪", "喂", "一", "不", "个", "上", "里", "下"];

// Tạo lại audio.js khi có thư mục MP3 nguồn
const mp3Dir = process.argv[2];
if (mp3Dir) {
  const map = {};
  for (const w of Object.keys(VOCAB)) {
    const p = path.join(mp3Dir, `cmn-${w}.mp3`);
    if (!NOPLAY.includes(w) && fs.existsSync(p)) map[w] = "data:audio/mpeg;base64," + fs.readFileSync(p).toString("base64");
  }
  fs.writeFileSync(path.join(ROOT, "audio.js"),
    "// Âm thanh từ vựng: Yue Tan · Shtooka Project · CC BY-SA (xem AUDIO-LICENSE.md)\n// Tạo tự động bằng build.js – không sửa tay.\nwindow.HSK_AUDIO = " + JSON.stringify(map) + ";\n");
  console.log(`Đã tạo audio.js · ${Object.keys(map).length} bản ghi`);
}
// Đọc audio.js
const sandbox = {};
new Function("window", fs.readFileSync(path.join(ROOT, "audio.js"), "utf8"))(sandbox);
const audio = sandbox.HSK_AUDIO || {};
const meta = {};
for (const w of Object.keys(VOCAB)) {
  const file = `cmn-${w}.mp3`;
  if (NOPLAY.includes(w)) { meta[w] = { noplay: 1, note: "Trợ từ thanh nhẹ: đọc tách riêng dễ sai, nên nghe trong câu.", file }; continue; }
  if (audio[w]) { meta[w] = { file }; if (FLAG.includes(w)) meta[w].flag = "Đa âm / đọc tách riêng – GV nên nghe lại"; }
  else meta[w] = { file: "" };
}

const HEAD = `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Ôn tập ngữ pháp HSK 1 (HSK 2.0): 12 nhóm ngữ pháp, bài tập tự chấm, âm thanh từ vựng giọng người thật.">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
`;
const template = fs.readFileSync(path.join(ROOT, "src", "template.html"), "utf8");
const data = fs.readFileSync(path.join(ROOT, "src", "data.js"), "utf8").replace(/if \(typeof module[^\n]*\n/, "");
// Tách <title>, <link>, <style> vào <head>; phần còn lại vào <body>
const cut = template.indexOf("</style>") + "</style>".length;
const headPart = template.slice(0, cut), bodyPart = template.slice(cut);

function page(embed) {
  const body = (embed ? bodyPart : bodyPart.replace("<script>\n/*DATA*/", '<script src="audio.js"></script>\n<script>\n/*DATA*/'))
    .replace("/*DATA*/", () => data)
    .replace("/*AUDIO*/", () => embed ? JSON.stringify(audio) : "(window.HSK_AUDIO || {})")
    .replace("/*META*/", () => JSON.stringify(meta));
  return HEAD + headPart + "\n</head>\n<body>\n" + body + "\n</body>\n</html>\n";
}

fs.writeFileSync(path.join(ROOT, "index.html"), page(false));
fs.writeFileSync(path.join(ROOT, "hsk1-on-tap-offline.html"), page(true));
console.log(`Đã tạo index.html và hsk1-on-tap-offline.html · ${Object.keys(audio).length} từ có giọng người thật`);
