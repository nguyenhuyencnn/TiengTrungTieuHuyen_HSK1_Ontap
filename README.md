# Ôn tập ngữ pháp HSK 1 · 语法训练

Trang luyện tập ngữ pháp **HSK 1 bản 2.0** (bản cũ, 150 từ) cho học viên mới bắt đầu, của **Tiếng Trung Tiểu Huyền · 小玄汉语课堂**.

- 12 nhóm ngữ pháp A–L, mỗi nhóm có đủ 12 mục: mục tiêu, công thức, cách dùng, ví dụ, từ vựng, lỗi thường gặp, bài tập 4 cấp độ, đáp án, ôn nhanh.
- Bài tập tự chấm: chọn đáp án, điền từ, ghép thẻ từ thành câu, dịch Việt – Trung.
- Luyện nghe thanh điệu bằng giọng người thật.
- Ôn tập tổng hợp: nối từ, sửa lỗi, hỏi đáp phản xạ có đếm giờ, hội thoại, bài nói cuối khóa, bảng tự đánh giá.
- Trang đáp án riêng cho giáo viên, trang tra cứu từ vựng, trang nguồn âm thanh.

## Cấu trúc thư mục (10 tệp)

```
hsk1-on-tap/
├── index.html                 ← trang chính (dùng cho GitHub Pages)
├── audio.js                   ← 146 bản ghi giọng người thật, gộp trong 1 tệp
├── hsk1-on-tap-offline.html   ← bản 1 file, âm thanh nhúng sẵn, mở trực tiếp trên máy
├── src/
│   ├── data.js                ← TOÀN BỘ nội dung: từ vựng, ví dụ, bài tập, đáp án
│   └── template.html          ← giao diện (CSS + JavaScript)
├── build.js                   ← ghép src/ + audio.js thành index.html và bản offline
├── docs/de-cuong-yeu-cau.md   ← đề cương yêu cầu gốc
├── AUDIO-LICENSE.md           ← ghi công và giấy phép âm thanh
├── README.md
└── .nojekyll
```

`index.html` cần nằm cùng thư mục với `audio.js` thì mới có âm thanh giọng thật.

## Đưa lên GitHub Pages

**Cách 1 – Kéo thả trên web (không cần cài gì):**

1. Tạo repository mới trên GitHub (ví dụ `hsk1-on-tap`), chọn **Public**.
2. Trong repository, bấm **Add file → Upload files**.
3. Mở thư mục `hsk1-on-tap` trên máy, chọn **tất cả** tệp và thư mục bên trong (gồm cả thư mục `src` và `docs`), kéo thả vào trang GitHub, rồi bấm **Commit changes**.
   - Tệp `.nojekyll` bị ẩn trên Windows/Mac nên có thể không được kéo theo — không sao, trang vẫn chạy.
4. Vào **Settings → Pages**, mục *Source* chọn **Deploy from a branch**, nhánh **main**, thư mục **/ (root)**, bấm **Save**.
5. Sau 1–2 phút, trang có địa chỉ `https://<tên-tài-khoản>.github.io/hsk1-on-tap/`.

**Cách 2 – Dòng lệnh** (thư mục đã có sẵn git và commit):

```bash
cd hsk1-on-tap
git remote add origin https://github.com/<tên-tài-khoản>/hsk1-on-tap.git
git push -u origin main
```

## Sửa nội dung

1. Mở `src/data.js`, sửa câu ví dụ, bài tập hoặc thêm câu dẫn vui (biến `FUN` nằm trong `src/template.html`).
   - Câu tiếng Trung viết **cách nhau từng từ** bằng dấu cách, ví dụ `"我 学习 汉语 。"` — trang dùng cách tách này để tạo thẻ từ và gắn âm thanh cho từng từ.
   - Mỗi từ xuất hiện trong câu cần có trong bảng `VOCAB`.
2. Cài [Node.js](https://nodejs.org) rồi chạy:

```bash
node build.js
```

   Nếu thêm từ mới có tệp MP3 (đặt tên `cmn-<chữ Hán>.mp3`), chạy `node build.js <thư-mục-chứa-mp3>` để tạo lại `audio.js`. Tệp MP3 gốc tải ở thư mục `64k/hsk/` của kho https://github.com/hugolpz/audio-cmn.

3. Kiểm tra `index.html` trên máy, rồi đẩy lên GitHub.

> Mở `index.html` trực tiếp từ ổ đĩa vẫn chạy được ở phần lớn trình duyệt. Nếu âm thanh không phát, dùng bản `hsk1-on-tap-offline.html` hoặc chạy máy chủ cục bộ: `npx serve .`

## Âm thanh

| Loại | Dùng cho | Nguồn |
|---|---|---|
| **Giọng người thật** | 146 từ vựng (trong `audio.js`) | Yue Tan · dự án Shtooka · CC BY-SA (xem `AUDIO-LICENSE.md`) |
| **Giọng máy** | Câu hoàn chỉnh và các từ chưa có bản ghi (北京, 中国, 不客气, 出租车, 打电话, 哪儿, 下雨, 星期一…) | Giọng đọc tiếng Trung có sẵn trên thiết bị (Web Speech API) |

Trạng thái kiểm tra: mỗi tệp được ghép với từ theo tên tệp trong bộ nguồn và đã kiểm tra tự động (phát được, không im lặng, độ dài khớp số âm tiết). **Chưa nghe kiểm tra từng tệp bằng tai.** Các chữ đa âm (都, 好, 会, 看…) được gắn nhãn để giáo viên nghe lại. Các trợ từ thanh nhẹ 的, 吗, 呢, 了 không phát riêng.

## Lưu ý

- **Phạm vi:** bám danh sách 150 từ HSK 1 bản 2.0. 给, 也, 两 thuộc HSK 2 nên được ghi *MỞ RỘNG – KHÔNG BẮT BUỘC*. Tài liệu chưa đối chiếu trực tiếp với giáo trình 《标准教程 HSK 1》.
- **Pinyin:** ghi biến điệu của 不 và 一 như khi nói (bú shì, yí ge); toàn bộ pinyin đã được đối chiếu tự động với thư viện pypinyin.
- **Tiến độ học viên** lưu trong trình duyệt (`localStorage`) của từng máy, không gửi về giáo viên và có thể mất khi xóa dữ liệu trình duyệt.
- **Giấy phép mã nguồn và nội dung bài học:** chưa chọn. Nếu muốn người khác được sao chép, hãy thêm tệp `LICENSE` theo lựa chọn của bạn. Âm thanh trong `audio.js` luôn theo giấy phép CC BY-SA của tác giả gốc.
