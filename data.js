// Dữ liệu học liệu HSK 1 (HSK 2.0). Câu tiếng Trung viết theo từng từ, cách nhau bằng dấu cách.
// Quy ước pinyin: ghi biến điệu của 不 và 一 như khi nói (bú shì, yí ge), theo cách của giáo trình 标准教程;
// không ghi biến điệu thanh 3 + thanh 3 (vẫn viết nǐ hǎo, đọc ní hǎo).

const VOCAB = {
  "爱":["ài","động từ","yêu"],
  "八":["bā","số từ","tám"],
  "爸爸":["bàba","danh từ","bố"],
  "杯子":["bēizi","danh từ","cái cốc"],
  "北京":["Běijīng","danh từ riêng","Bắc Kinh"],
  "本":["běn","lượng từ","quyển (dùng cho sách)"],
  "不":["bù","phó từ","không"],
  "不客气":["bú kèqi","cụm từ","không có gì, đừng khách sáo"],
  "菜":["cài","danh từ","món ăn; rau"],
  "茶":["chá","danh từ","trà"],
  "吃":["chī","động từ","ăn"],
  "出租车":["chūzūchē","danh từ","xe taxi"],
  "打":["dǎ","động từ","đánh; gọi (điện thoại)"],
  "电话":["diànhuà","danh từ","điện thoại"],
  "打电话":["dǎ diànhuà","cụm động từ","gọi điện thoại"],
  "大":["dà","tính từ","to, lớn"],
  "的":["de","trợ từ","của (chỉ sở hữu)"],
  "点":["diǎn","lượng từ","giờ"],
  "电脑":["diànnǎo","danh từ","máy tính"],
  "电视":["diànshì","danh từ","tivi"],
  "电影":["diànyǐng","danh từ","phim"],
  "东西":["dōngxi","danh từ","đồ, đồ vật"],
  "都":["dōu","phó từ","đều"],
  "读":["dú","động từ","đọc"],
  "对不起":["duìbuqǐ","cụm từ","xin lỗi"],
  "多":["duō","tính từ","nhiều"],
  "多少":["duōshao","đại từ nghi vấn","bao nhiêu"],
  "儿子":["érzi","danh từ","con trai"],
  "二":["èr","số từ","hai"],
  "饭店":["fàndiàn","danh từ","nhà hàng; khách sạn"],
  "飞机":["fēijī","danh từ","máy bay"],
  "分钟":["fēnzhōng","danh từ","phút"],
  "高兴":["gāoxìng","tính từ","vui"],
  "个":["gè","lượng từ","cái, chiếc, người (lượng từ chung)"],
  "工作":["gōngzuò","động từ / danh từ","làm việc; công việc"],
  "狗":["gǒu","danh từ","con chó"],
  "汉语":["Hànyǔ","danh từ","tiếng Hán, tiếng Trung"],
  "好":["hǎo","tính từ","tốt, khỏe, hay"],
  "号":["hào","danh từ","ngày (trong tháng)"],
  "喝":["hē","động từ","uống"],
  "和":["hé","liên từ","và"],
  "很":["hěn","phó từ","rất"],
  "后面":["hòumiàn","danh từ phương vị","phía sau"],
  "回":["huí","động từ","về, quay về"],
  "会":["huì","động từ năng nguyện","biết (kỹ năng học được)"],
  "几":["jǐ","đại từ nghi vấn","mấy"],
  "家":["jiā","danh từ","nhà, gia đình"],
  "叫":["jiào","động từ","gọi; tên là"],
  "今天":["jīntiān","danh từ","hôm nay"],
  "九":["jiǔ","số từ","chín"],
  "开":["kāi","động từ","mở; lái (xe)"],
  "看":["kàn","động từ","xem, nhìn, đọc"],
  "看见":["kànjiàn","động từ","nhìn thấy"],
  "块":["kuài","lượng từ","đồng (đơn vị tiền khi nói)"],
  "来":["lái","động từ","đến, tới"],
  "老师":["lǎoshī","danh từ","giáo viên"],
  "了":["le","trợ từ","rồi; dùng trong 太…了"],
  "冷":["lěng","tính từ","lạnh"],
  "里":["lǐ","danh từ phương vị","trong, bên trong"],
  "六":["liù","số từ","sáu"],
  "吗":["ma","trợ từ","trợ từ hỏi (… không?)"],
  "妈妈":["māma","danh từ","mẹ"],
  "买":["mǎi","động từ","mua"],
  "猫":["māo","danh từ","con mèo"],
  "没关系":["méi guānxi","cụm từ","không sao"],
  "没有":["méiyǒu","động từ / phó từ","không có; chưa"],
  "没":["méi","phó từ","không, chưa (phủ định việc đã qua)"],
  "米饭":["mǐfàn","danh từ","cơm"],
  "名字":["míngzi","danh từ","tên"],
  "明天":["míngtiān","danh từ","ngày mai"],
  "哪":["nǎ","đại từ nghi vấn","nào"],
  "哪儿":["nǎr","đại từ nghi vấn","đâu"],
  "那":["nà","đại từ","kia, đó"],
  "呢":["ne","trợ từ","còn … thì sao?"],
  "能":["néng","động từ năng nguyện","có thể"],
  "你":["nǐ","đại từ","bạn"],
  "年":["nián","danh từ","năm"],
  "女儿":["nǚ'ér","danh từ","con gái"],
  "朋友":["péngyou","danh từ","bạn bè"],
  "漂亮":["piàoliang","tính từ","đẹp"],
  "苹果":["píngguǒ","danh từ","quả táo"],
  "七":["qī","số từ","bảy"],
  "前面":["qiánmiàn","danh từ phương vị","phía trước"],
  "钱":["qián","danh từ","tiền"],
  "请":["qǐng","động từ","mời; xin vui lòng"],
  "去":["qù","động từ","đi"],
  "热":["rè","tính từ","nóng"],
  "人":["rén","danh từ","người"],
  "认识":["rènshi","động từ","quen, biết (người)"],
  "三":["sān","số từ","ba"],
  "商店":["shāngdiàn","danh từ","cửa hàng"],
  "上":["shàng","danh từ phương vị","trên"],
  "上午":["shàngwǔ","danh từ","buổi sáng"],
  "少":["shǎo","tính từ","ít"],
  "谁":["shéi","đại từ nghi vấn","ai"],
  "什么":["shénme","đại từ nghi vấn","gì, cái gì"],
  "十":["shí","số từ","mười"],
  "时候":["shíhou","danh từ","lúc, khi"],
  "是":["shì","động từ","là"],
  "书":["shū","danh từ","sách"],
  "水":["shuǐ","danh từ","nước"],
  "水果":["shuǐguǒ","danh từ","hoa quả"],
  "睡觉":["shuìjiào","động từ","ngủ"],
  "说":["shuō","động từ","nói"],
  "四":["sì","số từ","bốn"],
  "岁":["suì","lượng từ","tuổi"],
  "他":["tā","đại từ","anh ấy, ông ấy"],
  "她":["tā","đại từ","cô ấy, bà ấy"],
  "太":["tài","phó từ","quá"],
  "天气":["tiānqì","danh từ","thời tiết"],
  "听":["tīng","động từ","nghe"],
  "同学":["tóngxué","danh từ","bạn học"],
  "喂":["wèi","thán từ","a lô (khi nghe điện thoại thường đọc wéi)"],
  "我":["wǒ","đại từ","tôi"],
  "我们":["wǒmen","đại từ","chúng tôi, chúng ta"],
  "五":["wǔ","số từ","năm"],
  "喜欢":["xǐhuan","động từ","thích"],
  "下":["xià","danh từ phương vị","dưới"],
  "下午":["xiàwǔ","danh từ","buổi chiều"],
  "下雨":["xià yǔ","cụm động từ","mưa"],
  "先生":["xiānsheng","danh từ","ông, ngài"],
  "现在":["xiànzài","danh từ","bây giờ"],
  "想":["xiǎng","động từ năng nguyện","muốn"],
  "小":["xiǎo","tính từ","nhỏ"],
  "小姐":["xiǎojiě","danh từ","cô (cách gọi phụ nữ trẻ)"],
  "些":["xiē","lượng từ","một số, những"],
  "写":["xiě","động từ","viết"],
  "谢谢":["xièxie","động từ","cảm ơn"],
  "星期":["xīngqī","danh từ","tuần; thứ"],
  "星期一":["xīngqīyī","danh từ","thứ Hai"],
  "学生":["xuésheng","danh từ","học sinh"],
  "学习":["xuéxí","động từ","học, học tập"],
  "学校":["xuéxiào","danh từ","trường học"],
  "一":["yī","số từ","một"],
  "一点儿":["yìdiǎnr","số lượng từ","một chút"],
  "衣服":["yīfu","danh từ","quần áo"],
  "医生":["yīshēng","danh từ","bác sĩ"],
  "医院":["yīyuàn","danh từ","bệnh viện"],
  "椅子":["yǐzi","danh từ","cái ghế"],
  "有":["yǒu","động từ","có"],
  "月":["yuè","danh từ","tháng"],
  "在":["zài","động từ / giới từ","ở, tại"],
  "再见":["zàijiàn","động từ","tạm biệt"],
  "怎么":["zěnme","đại từ nghi vấn","thế nào, làm sao (hỏi cách làm)"],
  "怎么样":["zěnmeyàng","đại từ nghi vấn","thế nào (hỏi tình trạng, ý kiến)"],
  "这":["zhè","đại từ","này, đây"],
  "中国":["Zhōngguó","danh từ riêng","Trung Quốc"],
  "中午":["zhōngwǔ","danh từ","buổi trưa"],
  "住":["zhù","động từ","ở, sống"],
  "桌子":["zhuōzi","danh từ","cái bàn"],
  "字":["zì","danh từ","chữ"],
  "昨天":["zuótiān","danh từ","hôm qua"],
  "坐":["zuò","động từ","ngồi; đi (phương tiện)"],
  "做":["zuò","động từ","làm"],
  // Ngoài danh sách 150 từ HSK 1 (2.0)
  "给":["gěi","giới từ / động từ","cho","HSK 2"],
  "也":["yě","phó từ","cũng","HSK 2"],
  "两":["liǎng","số từ","hai (dùng trước lượng từ)","HSK 2"],
  "见":["jiàn","động từ","gặp (trong 明天见)","chữ trong 再见/看见"],
  "越南":["Yuènán","danh từ riêng","Việt Nam","ngoài HSK"],
  "星期天":["xīngqītiān","danh từ","Chủ nhật","星期 + 天"],
  "王方":["Wáng Fāng","tên riêng","Vương Phương (tên người)","tên riêng"],
  "李月":["Lǐ Yuè","tên riêng","Lý Nguyệt (tên người)","tên riêng"]
};

const GROUPS = [
// ───────────────────────── A
{ id:"A", buoi:1, title:"Câu cơ bản: Chủ ngữ + Động từ + Tân ngữ", short:"S + V + O",
  goal:"Nói được câu đơn giản “ai làm gì”: tôi học tiếng Trung, mẹ mua táo; biết nói phủ định và hỏi lại bằng 吗.",
  formulas:[
    {parts:[["S","Chủ ngữ"],["V","Động từ"],["O","Tân ngữ"]], ex:"我 喝 水。"},
    {parts:[["S","Chủ ngữ"],["不","không"],["V","Động từ"],["O","Tân ngữ"]], ex:"我 不 喝 茶。"},
    {parts:[["S","Chủ ngữ"],["V","Động từ"],["O","Tân ngữ"],["吗？","…không?"]], ex:"你 吃 米饭 吗？"}
  ],
  usage:[
    "Trật tự giống tiếng Việt: ai → làm gì → cái gì. Tân ngữ luôn đứng sau động từ.",
    "Muốn nói “không làm”, đặt 不 ngay trước động từ.",
    "Muốn hỏi “có … không?”, giữ nguyên câu và thêm 吗 ở cuối.",
    "Khi trả lời, nói cả câu: 我喝茶。/ 我不喝茶。, không chỉ nói 喝."
  ],
  read:[ {w:["喝","水"], p:"喝水", s:"我 喝 水 。"}, {w:["看","书"], p:"看书", s:"他 看 书 。"}, {w:["学习","汉语"], p:"学习汉语", s:"我 学习 汉语 。"} ],
  examples:[
    {s:"我 学习 汉语 。", py:"Wǒ xuéxí Hànyǔ.", vi:"Tôi học tiếng Trung."},
    {s:"我 喝 水 。", py:"Wǒ hē shuǐ.", vi:"Tôi uống nước."},
    {s:"他 看 书 。", py:"Tā kàn shū.", vi:"Anh ấy đọc sách."},
    {s:"妈妈 买 苹果 。", py:"Māma mǎi píngguǒ.", vi:"Mẹ mua táo."},
    {s:"我 不 喝 茶 。", py:"Wǒ bù hē chá.", vi:"Tôi không uống trà."},
    {s:"她 不 看 电视 。", py:"Tā bú kàn diànshì.", vi:"Cô ấy không xem tivi."},
    {s:"你 吃 米饭 吗 ？", py:"Nǐ chī mǐfàn ma?", vi:"Bạn ăn cơm không?"}
  ],
  vocab:["我","你","他","她","学习","汉语","喝","水","茶","看","书","电视","吃","米饭","买","苹果","妈妈","不","吗"],
  errors:[
    {wrong:"我汉语学习。", right:"我学习汉语。", py:"Wǒ xuéxí Hànyǔ.", why:"Tân ngữ (汉语) phải đứng sau động từ (学习)."},
    {wrong:"我喝不茶。", right:"我不喝茶。", py:"Wǒ bù hē chá.", why:"不 đứng trước động từ, không chen giữa động từ và tân ngữ."},
    {wrong:"你吗吃米饭？", right:"你吃米饭吗？", py:"Nǐ chī mǐfàn ma?", why:"吗 luôn đứng ở cuối câu."}
  ],
  mcq:[
    {q:"Chọn câu đúng cho: “Tôi uống nước.”", o:["我水喝。","我喝水。","喝我水。"], a:1, e:"Trật tự S + V + O: 我 + 喝 + 水."},
    {q:"Trong câu 他看书。, đâu là động từ?", o:["他","看","书"], a:1, e:"看 (xem, đọc) là hành động."},
    {q:"Câu phủ định của 我吃苹果。 là:", o:["我不吃苹果。","我吃不苹果。","不我吃苹果。"], a:0, e:"不 đứng ngay trước động từ 吃."},
    {q:"Biến 你喝茶。 thành câu hỏi:", o:["吗你喝茶？","你吗喝茶？","你喝茶吗？"], a:2, e:"Thêm 吗 vào cuối câu, giữ nguyên trật tự."}
  ],
  order:[
    {s:"妈妈 买 苹果 。", py:"Māma mǎi píngguǒ.", vi:"Mẹ mua táo."},
    {s:"我 学习 汉语 。", py:"Wǒ xuéxí Hànyǔ.", vi:"Tôi học tiếng Trung."},
    {s:"你 看 电视 吗 ？", py:"Nǐ kàn diànshì ma?", vi:"Bạn xem tivi không?"}
  ],
  fill:[
    {s:"我 ___ 喝茶。", hint:"Tôi không uống trà.", o:["不","吗","很"], a:0, full:"我不喝茶。", py:"Wǒ bù hē chá."},
    {s:"你吃米饭 ___？", hint:"Bạn ăn cơm không?", o:["不","吗","是"], a:1, full:"你吃米饭吗？", py:"Nǐ chī mǐfàn ma?"},
    {s:"他 ___ 书。", hint:"Anh ấy đọc sách.", o:["喝","吃","看"], a:2, full:"他看书。", py:"Tā kàn shū."}
  ],
  tr:[
    {vi:"Tôi học tiếng Trung.", t:"我 学习 汉语 。", alt:["我学汉语"], x:["是","吗"], py:"Wǒ xuéxí Hànyǔ."},
    {vi:"Mẹ không xem tivi.", t:"妈妈 不 看 电视 。", x:["吗","喝"], py:"Māma bú kàn diànshì."},
    {vi:"Bạn uống trà không?", t:"你 喝 茶 吗 ？", x:["不","水"], py:"Nǐ hē chá ma?"}
  ],
  speak:[
    {q:"你喝茶吗？", qpy:"Nǐ hē chá ma?", qvi:"Bạn uống trà không?", a:"我喝茶。/ 我不喝茶，我喝水。", apy:"Wǒ hē chá. / Wǒ bù hē chá, wǒ hē shuǐ.", avi:"Tôi uống trà. / Tôi không uống trà, tôi uống nước."},
    {q:"你学习汉语吗？", qpy:"Nǐ xuéxí Hànyǔ ma?", qvi:"Bạn học tiếng Trung không?", a:"我学习汉语。", apy:"Wǒ xuéxí Hànyǔ.", avi:"Tôi học tiếng Trung."},
    {q:"你吃苹果吗？", qpy:"Nǐ chī píngguǒ ma?", qvi:"Bạn ăn táo không?", a:"我吃苹果。/ 我不吃苹果。", apy:"Wǒ chī píngguǒ. / Wǒ bù chī píngguǒ.", avi:"Tôi ăn táo. / Tôi không ăn táo."}
  ],
  review:["Nói 3 câu về những thứ bạn ăn, uống hằng ngày.","Biến 他看书。 thành câu phủ định và câu hỏi.","不 đứng ở đâu trong câu?","吗 đứng ở đâu trong câu?"]
},
// ───────────────────────── B
{ id:"B", buoi:1, title:"Câu với 是", short:"S + 是 + N",
  goal:"Giới thiệu tên, thân phận, nghề nghiệp, quốc tịch và quan hệ: tôi là học sinh, bà ấy là mẹ tôi.",
  formulas:[
    {parts:[["S","Chủ ngữ"],["是","là"],["N","Danh từ"]], ex:"我 是 学生。"},
    {parts:[["S","Chủ ngữ"],["不是","không phải"],["N","Danh từ"]], ex:"他 不是 医生。"},
    {parts:[["S","Chủ ngữ"],["叫","tên là"],["Tên",""]], ex:"我 叫 王方。"}
  ],
  usage:[
    "是 nối hai danh từ: A 是 B = A là B.",
    "Phủ định chỉ dùng 不是 (đọc bú shì), không dùng 没是.",
    "Không đặt 是 trước tính từ: nói 我很高兴, không nói 我是高兴 (xem nhóm C).",
    "Giới thiệu tên thường dùng 我叫…; hỏi tên: 你叫什么名字？"
  ],
  read:[ {w:["学生"], p:"是学生", s:"我 是 学生 。"}, {w:["中国","人"], p:"中国人", s:"你 是 中国 人 吗 ？"}, {w:["朋友"], p:"我的朋友", s:"他 是 我 的 朋友 。"} ],
  examples:[
    {s:"我 是 学生 。", py:"Wǒ shì xuésheng.", vi:"Tôi là học sinh."},
    {s:"她 是 老师 。", py:"Tā shì lǎoshī.", vi:"Cô ấy là giáo viên."},
    {s:"他 不 是 医生 。", py:"Tā bú shì yīshēng.", vi:"Anh ấy không phải bác sĩ."},
    {s:"你 是 中国 人 吗 ？", py:"Nǐ shì Zhōngguó rén ma?", vi:"Bạn là người Trung Quốc phải không?"},
    {s:"她 是 我 妈妈 。", py:"Tā shì wǒ māma.", vi:"Bà ấy là mẹ tôi."},
    {s:"他 是 我 的 朋友 。", py:"Tā shì wǒ de péngyou.", vi:"Anh ấy là bạn của tôi."},
    {s:"这 是 我 的 书 。", py:"Zhè shì wǒ de shū.", vi:"Đây là sách của tôi."}
  ],
  vocab:["是","学生","老师","医生","中国","人","朋友","的","这","叫","名字","同学","爸爸"],
  errors:[
    {wrong:"我是很高兴。", right:"我很高兴。", py:"Wǒ hěn gāoxìng.", why:"高兴 là tính từ, trước tính từ không dùng 是."},
    {wrong:"他没是医生。", right:"他不是医生。", py:"Tā bú shì yīshēng.", why:"是 chỉ đi với 不 khi phủ định."},
    {wrong:"我是越南。", right:"我是越南人。", py:"Wǒ shì Yuènán rén.", why:"Nói quốc tịch cần thêm 人 (người). 越南 là TỪ MỞ RỘNG.", ext:true}
  ],
  mcq:[
    {q:"Chọn câu đúng cho: “Tôi là giáo viên.”", o:["我老师是。","我是老师。","是我老师。"], a:1, e:"S + 是 + N."},
    {q:"Câu nào đúng?", o:["他是不医生。","他没是医生。","他不是医生。"], a:2, e:"Phủ định: 不 đứng trước 是."},
    {q:"Câu nào SAI?", o:["我是学生。","她是我妈妈。","我是很好。"], a:2, e:"好 là tính từ, nói 我很好, không dùng 是."},
    {q:"Trả lời đầy đủ câu 你是中国人吗？ (Không phải):", o:["不是。","我不是中国人。","我没有中国人。"], a:1, e:"Trả lời bằng câu hoàn chỉnh: 我不是中国人。"}
  ],
  order:[
    {s:"她 是 老师 。", py:"Tā shì lǎoshī.", vi:"Cô ấy là giáo viên."},
    {s:"他 不 是 医生 。", py:"Tā bú shì yīshēng.", vi:"Anh ấy không phải bác sĩ."},
    {s:"他 是 我 的 朋友 。", py:"Tā shì wǒ de péngyou.", vi:"Anh ấy là bạn của tôi."}
  ],
  fill:[
    {s:"我 ___ 学生。", hint:"Tôi là học sinh.", o:["是","有","很"], a:0, full:"我是学生。", py:"Wǒ shì xuésheng."},
    {s:"他 ___ 是中国人。", hint:"Anh ấy không phải người Trung Quốc.", o:["没","不","吗"], a:1, full:"他不是中国人。", py:"Tā bú shì Zhōngguó rén."},
    {s:"这是我 ___ 书。", hint:"Đây là sách của tôi.", o:["的","吗","是"], a:0, full:"这是我的书。", py:"Zhè shì wǒ de shū."}
  ],
  tr:[
    {vi:"Tôi là học sinh.", t:"我 是 学生 。", x:["有","很"], py:"Wǒ shì xuésheng."},
    {vi:"Cô ấy không phải bác sĩ.", t:"她 不 是 医生 。", x:["没","吗"], py:"Tā bú shì yīshēng."},
    {vi:"Anh ấy là bạn của bạn phải không?", t:"他 是 你 的 朋友 吗 ？", alt:["他是你朋友吗"], x:["不","我"], py:"Tā shì nǐ de péngyou ma?"}
  ],
  speak:[
    {q:"你叫什么名字？", qpy:"Nǐ jiào shénme míngzi?", qvi:"Bạn tên là gì?", a:"我叫……。", apy:"Wǒ jiào …", avi:"Tôi tên là … (nói tên của bạn)."},
    {q:"你是学生吗？", qpy:"Nǐ shì xuésheng ma?", qvi:"Bạn là học sinh phải không?", a:"我是学生。/ 我不是学生，我是老师。", apy:"Wǒ shì xuésheng. / Wǒ bú shì xuésheng, wǒ shì lǎoshī.", avi:"Tôi là học sinh. / Tôi không phải học sinh, tôi là giáo viên."},
    {q:"你是中国人吗？", qpy:"Nǐ shì Zhōngguó rén ma?", qvi:"Bạn là người Trung Quốc phải không?", a:"我不是中国人，我是越南人。", apy:"Wǒ bú shì Zhōngguó rén, wǒ shì Yuènán rén.", avi:"Tôi không phải người Trung Quốc, tôi là người Việt Nam. (越南: TỪ MỞ RỘNG)"}
  ],
  review:["Giới thiệu tên và nghề nghiệp của bạn bằng 2 câu.","Phủ định của 是 là gì? Đọc thế nào?","Vì sao không nói 我是高兴？","Giới thiệu một người trong ảnh gia đình: 她是我……。"]
},
// ───────────────────────── C
{ id:"C", buoi:1, title:"Câu vị ngữ tính từ", short:"S + 很 + Adj",
  goal:"Miêu tả sức khỏe, thời tiết, cảm xúc, đồ vật: tôi khỏe, hôm nay nóng, cô ấy đẹp; hỏi “thế nào?”.",
  formulas:[
    {parts:[["S","Chủ ngữ"],["很","(rất)"],["Adj","Tính từ"]], ex:"今天 很 热。"},
    {parts:[["S","Chủ ngữ"],["不","không"],["Adj","Tính từ"]], ex:"今天 不 冷。"},
    {parts:[["S","Chủ ngữ"],["怎么样？","thế nào?"]], ex:"天气 怎么样？"},
    {parts:[["太","quá"],["Adj","Tính từ"],["了","!"]], ex:"太 热 了！"}
  ],
  usage:[
    "Tính từ tự làm vị ngữ, không cần 是.",
    "很 trong câu miêu tả thường chỉ giúp câu trọn ý, không nhất thiết dịch là “rất”. 我很好 = Tôi khỏe.",
    "Phủ định: 不 + tính từ, thường bỏ 很: 今天不冷。",
    "Hỏi tình trạng, ý kiến: …怎么样？ Nói “quá …!”: 太 + tính từ + 了。"
  ],
  read:[ {w:["很","热"], p:"很热", s:"今天 很 热 。"}, {w:["天气"], p:"天气怎么样", s:"今天 天气 怎么样 ？"}, {w:["高兴"], p:"很高兴", s:"我 很 高兴 。"} ],
  examples:[
    {s:"我 很 好 。", py:"Wǒ hěn hǎo.", vi:"Tôi khỏe."},
    {s:"今天 很 热 。", py:"Jīntiān hěn rè.", vi:"Hôm nay nóng."},
    {s:"今天 不 冷 。", py:"Jīntiān bù lěng.", vi:"Hôm nay không lạnh."},
    {s:"她 很 漂亮 。", py:"Tā hěn piàoliang.", vi:"Cô ấy đẹp."},
    {s:"我 很 高兴 。", py:"Wǒ hěn gāoxìng.", vi:"Tôi rất vui."},
    {s:"天气 怎么样 ？", py:"Tiānqì zěnmeyàng?", vi:"Thời tiết thế nào?"},
    {s:"太 热 了 ！", py:"Tài rè le!", vi:"Nóng quá!"}
  ],
  note:"Đề cương gợi ý ví dụ 这个菜不贵。 Từ 贵 (guì, đắt) thuộc HSK 2 nên tài liệu đã thay bằng ví dụ dùng từ HSK 1.",
  vocab:["很","好","热","冷","天气","今天","漂亮","高兴","大","小","太","了","怎么样"],
  errors:[
    {wrong:"今天是很热。", right:"今天很热。", py:"Jīntiān hěn rè.", why:"Câu miêu tả bằng tính từ không dùng 是."},
    {wrong:"今天冷不。", right:"今天不冷。", py:"Jīntiān bù lěng.", why:"不 đứng trước tính từ."},
    {wrong:"她漂亮。", right:"她很漂亮。", py:"Tā hěn piàoliang.", why:"Câu miêu tả đơn lẻ thường thêm 很 cho trọn ý; thiếu 很 nghe như đang so sánh."}
  ],
  mcq:[
    {q:"Chọn câu đúng cho: “Hôm nay nóng.”", o:["今天是热。","今天很热。","今天热很。"], a:1, e:"S + 很 + tính từ, không dùng 是."},
    {q:"Phủ định của 天气很冷。 là:", o:["天气不冷。","天气没冷。","天气不是冷。"], a:0, e:"不 + tính từ."},
    {q:"Hỏi “Thời tiết thế nào?”", o:["天气是什么？","天气怎么样？","天气哪儿？"], a:1, e:"怎么样 hỏi tình trạng."},
    {q:"太热了！ nghĩa là:", o:["Không nóng.","Nóng quá!","Hơi nóng."], a:1, e:"太 + Adj + 了 = … quá!"}
  ],
  order:[
    {s:"她 很 漂亮 。", py:"Tā hěn piàoliang.", vi:"Cô ấy đẹp."},
    {s:"今天 不 冷 。", py:"Jīntiān bù lěng.", vi:"Hôm nay không lạnh."},
    {s:"今天 天气 怎么样 ？", py:"Jīntiān tiānqì zěnmeyàng?", vi:"Thời tiết hôm nay thế nào?"}
  ],
  fill:[
    {s:"今天 ___ 热。", hint:"Hôm nay nóng.", o:["是","很","有"], a:1, full:"今天很热。", py:"Jīntiān hěn rè."},
    {s:"我 ___ 高兴。", hint:"Tôi không vui.", o:["不","没","吗"], a:0, full:"我不高兴。", py:"Wǒ bù gāoxìng."},
    {s:"太冷 ___！", hint:"Lạnh quá!", o:["吗","的","了"], a:2, full:"太冷了！", py:"Tài lěng le!"}
  ],
  tr:[
    {vi:"Tôi rất vui.", t:"我 很 高兴 。", x:["是","不"], py:"Wǒ hěn gāoxìng."},
    {vi:"Hôm nay không lạnh.", t:"今天 不 冷 。", x:["是","很"], py:"Jīntiān bù lěng."},
    {vi:"Thời tiết hôm nay thế nào?", t:"今天 天气 怎么样 ？", x:["什么","吗"], py:"Jīntiān tiānqì zěnmeyàng?"}
  ],
  speak:[
    {q:"你好吗？", qpy:"Nǐ hǎo ma?", qvi:"Bạn khỏe không?", a:"我很好，谢谢！", apy:"Wǒ hěn hǎo, xièxie!", avi:"Tôi khỏe, cảm ơn!"},
    {q:"今天天气怎么样？", qpy:"Jīntiān tiānqì zěnmeyàng?", qvi:"Thời tiết hôm nay thế nào?", a:"今天很热。/ 今天不冷。", apy:"Jīntiān hěn rè. / Jīntiān bù lěng.", avi:"Hôm nay nóng. / Hôm nay không lạnh."},
    {q:"你的电脑怎么样？", qpy:"Nǐ de diànnǎo zěnmeyàng?", qvi:"Máy tính của bạn thế nào?", a:"我的电脑很好。/ 我的电脑很小。", apy:"Wǒ de diànnǎo hěn hǎo. / Wǒ de diànnǎo hěn xiǎo.", avi:"Máy tính của tôi tốt. / Máy tính của tôi nhỏ."}
  ],
  review:["Miêu tả thời tiết hôm nay bằng 1 câu.","Vì sao nói 我很好, không nói 我是好？","Nói 2 câu “… quá!” với 太…了.","Phủ định câu 她很高兴。"]
},
// ───────────────────────── D
{ id:"D", buoi:1, title:"Câu hỏi và từ để hỏi", short:"谁 · 什么 · 哪儿 · 几…",
  goal:"Hỏi ai, cái gì, ở đâu, mấy, bao nhiêu, thế nào; trả lời bằng câu hoàn chỉnh.",
  formulas:[
    {parts:[["Câu trần thuật","我 喝 茶。"]], ex:"我 喝 茶 。"},
    {parts:[["Thay phần muốn hỏi","茶 → 什么"]], ex:"你 喝 什么？"}
  ],
  qwords:[["谁","shéi","ai"],["什么","shénme","gì, cái gì"],["哪","nǎ","nào"],["哪儿","nǎr","đâu"],["几","jǐ","mấy (số nhỏ, thường dưới 10)"],["多少","duōshao","bao nhiêu"],["怎么","zěnme","làm thế nào (cách làm)"],["怎么样","zěnmeyàng","thế nào (tình trạng)"]],
  usage:[
    "Từ để hỏi đứng đúng vị trí của thông tin muốn hỏi, không đưa lên đầu câu.",
    "Câu đã có từ để hỏi thì KHÔNG thêm 吗.",
    "几 hỏi số nhỏ và thường đi với lượng từ (几个人); hỏi giá dùng 多少钱.",
    "怎么 + động từ hỏi cách làm (怎么读); 怎么样 hỏi tình trạng."
  ],
  read:[ {w:["什么"], p:"喝什么", s:"你 喝 什么 ？"}, {w:["哪儿"], p:"去哪儿", s:"你 去 哪儿 ？"}, {w:["多少","钱"], p:"多少钱", s:"这 个 杯子 多少 钱 ？"} ],
  examples:[
    {s:"他 是 谁 ？", py:"Tā shì shéi?", vi:"Anh ấy là ai?"},
    {s:"你 喝 什么 ？", py:"Nǐ hē shénme?", vi:"Bạn uống gì?"},
    {s:"你 去 哪儿 ？", py:"Nǐ qù nǎr?", vi:"Bạn đi đâu?"},
    {s:"你 家 有 几 个 人 ？", py:"Nǐ jiā yǒu jǐ ge rén?", vi:"Nhà bạn có mấy người?"},
    {s:"这 个 杯子 多少 钱 ？", py:"Zhège bēizi duōshao qián?", vi:"Cái cốc này bao nhiêu tiền?"},
    {s:"这 个 字 怎么 读 ？", py:"Zhège zì zěnme dú?", vi:"Chữ này đọc thế nào?"},
    {s:"你 叫 什么 名字 ？", py:"Nǐ jiào shénme míngzi?", vi:"Bạn tên là gì?"}
  ],
  vocab:["谁","什么","哪","哪儿","几","多少","怎么","怎么样","去","钱","字","读","个","家","有"],
  errors:[
    {wrong:"你去哪儿吗？", right:"你去哪儿？", py:"Nǐ qù nǎr?", why:"Đã có từ để hỏi 哪儿 thì không thêm 吗."},
    {wrong:"什么你喝？", right:"你喝什么？", py:"Nǐ hē shénme?", why:"什么 đứng ở vị trí tân ngữ, giống câu 我喝茶."},
    {wrong:"你叫名字什么？", right:"你叫什么名字？", py:"Nǐ jiào shénme míngzi?", why:"什么 đứng trước danh từ nó bổ nghĩa: 什么名字 = tên gì."}
  ],
  mcq:[
    {q:"“Anh ấy là ai?”", o:["他是谁？","谁他是？","他是谁吗？"], a:0, e:"谁 ở vị trí tân ngữ, không thêm 吗."},
    {q:"Hỏi giá tiền:", o:["几钱？","多少钱？","什么钱？"], a:1, e:"Hỏi giá dùng 多少钱."},
    {q:"Câu nào đúng?", o:["你喝什么吗？","什么你喝？","你喝什么？"], a:2, e:"Từ để hỏi tại vị trí tân ngữ, không có 吗."},
    {q:"“Chữ này đọc thế nào?”", o:["这个字怎么读？","这个字怎么样读？","这个字读怎么？"], a:0, e:"怎么 + động từ hỏi cách làm."}
  ],
  order:[
    {s:"你 去 哪儿 ？", py:"Nǐ qù nǎr?", vi:"Bạn đi đâu?"},
    {s:"你 叫 什么 名字 ？", py:"Nǐ jiào shénme míngzi?", vi:"Bạn tên là gì?"},
    {s:"苹果 多少 钱 ？", py:"Píngguǒ duōshao qián?", vi:"Táo bao nhiêu tiền?"}
  ],
  fill:[
    {s:"他是 ___？", hint:"Anh ấy là ai?", o:["谁","什么","哪儿"], a:0, full:"他是谁？", py:"Tā shì shéi?"},
    {s:"你家有 ___ 个人？", hint:"Nhà bạn có mấy người?", o:["谁","几","哪儿"], a:1, full:"你家有几个人？", py:"Nǐ jiā yǒu jǐ ge rén?"},
    {s:"你去 ___？", hint:"Bạn đi đâu?", o:["几","谁","哪儿"], a:2, full:"你去哪儿？", py:"Nǐ qù nǎr?"}
  ],
  tr:[
    {vi:"Bạn uống gì?", t:"你 喝 什么 ？", x:["吗","谁"], py:"Nǐ hē shénme?"},
    {vi:"Bạn đi đâu?", t:"你 去 哪儿 ？", x:["吗","在"], py:"Nǐ qù nǎr?"},
    {vi:"Cái này bao nhiêu tiền?", t:"这 个 多少 钱 ？", x:["几","吗"], py:"Zhège duōshao qián?"}
  ],
  speak:[
    {q:"你叫什么名字？", qpy:"Nǐ jiào shénme míngzi?", qvi:"Bạn tên là gì?", a:"我叫……。", apy:"Wǒ jiào …", avi:"Tôi tên là …"},
    {q:"你家有几个人？", qpy:"Nǐ jiā yǒu jǐ ge rén?", qvi:"Nhà bạn có mấy người?", a:"我家有四个人。", apy:"Wǒ jiā yǒu sì ge rén.", avi:"Nhà tôi có bốn người."},
    {q:"你去哪儿？", qpy:"Nǐ qù nǎr?", qvi:"Bạn đi đâu?", a:"我去学校。", apy:"Wǒ qù xuéxiào.", avi:"Tôi đi đến trường."}
  ],
  review:["Đặt 3 câu hỏi với 谁, 什么, 哪儿.","Câu có từ để hỏi có thêm 吗 không?","几 và 多少 khác nhau thế nào khi hỏi giá?","Đổi 我去商店。 thành câu hỏi với 哪儿."]
},
// ───────────────────────── E
{ id:"E", buoi:2, title:"Thời gian, ngày tháng và số lượng", short:"S + Thời gian + V",
  goal:"Nói hôm nay thứ mấy, ngày mấy, bây giờ mấy giờ, bao nhiêu tuổi; nói khi nào làm việc gì.",
  formulas:[
    {parts:[["S","Chủ ngữ"],["Thời gian","khi nào"],["V","Động từ"],["O","Tân ngữ"]], ex:"我 明天 去 学校。"},
    {parts:[["Thời gian","khi nào"],["S","Chủ ngữ"],["V","Động từ"],["O","Tân ngữ"]], ex:"明天 我 去 学校。"},
    {parts:[["今天","Hôm nay"],["星期一","thứ Hai"]], ex:"今天 星期一。"},
    {parts:[["年","năm"],["月","tháng"],["号","ngày"],["星期","thứ"]], ex:"十月十二号 星期一"}
  ],
  usage:[
    "Thời gian đứng TRƯỚC động từ (sau chủ ngữ hoặc đầu câu), không đặt cuối câu như tiếng Việt.",
    "Đơn vị lớn đứng trước: 下午三点 = 3 giờ chiều; 十月十二号 = ngày 12 tháng 10.",
    "Nói ngày, giờ, tuổi thường không cần 是: 今天星期一。现在三点。我二十岁。 Phủ định thì phải dùng 不是: 今天不是星期一。",
    "Hỏi: 今天几号？星期几？现在几点？你女儿几岁了？"
  ],
  read:[ {w:["明天"], p:"明天去学校", s:"我 明天 去 学校 。"}, {w:["现在","点"], p:"三点", s:"现在 三 点 。"}, {w:["下午"], p:"下午三点", s:"我 下午 三 点 看 电影 。"} ],
  examples:[
    {s:"我 明天 去 学校 。", py:"Wǒ míngtiān qù xuéxiào.", vi:"Ngày mai tôi đi học."},
    {s:"今天 星期一 。", py:"Jīntiān xīngqīyī.", vi:"Hôm nay thứ Hai."},
    {s:"现在 三 点 。", py:"Xiànzài sān diǎn.", vi:"Bây giờ ba giờ."},
    {s:"今天 几 月 几 号 ？", py:"Jīntiān jǐ yuè jǐ hào?", vi:"Hôm nay ngày mấy tháng mấy?"},
    {s:"我 女儿 五 岁 。", py:"Wǒ nǚ'ér wǔ suì.", vi:"Con gái tôi năm tuổi."},
    {s:"我 下午 三 点 看 电影 。", py:"Wǒ xiàwǔ sān diǎn kàn diànyǐng.", vi:"Ba giờ chiều tôi xem phim."},
    {s:"昨天 不 是 星期天 。", py:"Zuótiān bú shì xīngqītiān.", vi:"Hôm qua không phải Chủ nhật."}
  ],
  vocab:["今天","明天","昨天","现在","点","上午","中午","下午","星期","月","号","年","岁","几","学校","电影"],
  errors:[
    {wrong:"我去学校明天。", right:"我明天去学校。", py:"Wǒ míngtiān qù xuéxiào.", why:"Thời gian đứng trước động từ, không đứng cuối câu."},
    {wrong:"我三点下午看电影。", right:"我下午三点看电影。", py:"Wǒ xiàwǔ sān diǎn kàn diànyǐng.", why:"Đơn vị thời gian lớn (buổi chiều) đứng trước đơn vị nhỏ (giờ)."},
    {wrong:"今天星期一号。", right:"今天星期一。/ 今天一号。", py:"Jīntiān xīngqīyī. / Jīntiān yī hào.", why:"星期一 là thứ, 一号 là ngày; không ghép lẫn."}
  ],
  mcq:[
    {q:"“Ngày mai tôi đi học.”", o:["我去学校明天。","我明天去学校。","明天去我学校。"], a:1, e:"Thời gian đứng trước động từ."},
    {q:"“Bây giờ ba giờ.”", o:["现在三点。","三点现在。","现在是三。"], a:0, e:"现在 + số + 点."},
    {q:"Trả lời 今天几号？", o:["今天十月。","今天星期十。","今天十号。"], a:2, e:"号 là ngày trong tháng."},
    {q:"“3 giờ chiều”", o:["三点下午","下午三点","三下午点"], a:1, e:"Đơn vị lớn trước, nhỏ sau."}
  ],
  order:[
    {s:"我 明天 去 学校 。", py:"Wǒ míngtiān qù xuéxiào.", vi:"Ngày mai tôi đi học."},
    {s:"现在 几 点 ？", py:"Xiànzài jǐ diǎn?", vi:"Bây giờ mấy giờ?"},
    {s:"我 下午 看 电影 。", py:"Wǒ xiàwǔ kàn diànyǐng.", vi:"Buổi chiều tôi xem phim."}
  ],
  fill:[
    {s:"今天 ___ 号？", hint:"Hôm nay ngày mấy?", o:["几","谁","什么"], a:0, full:"今天几号？", py:"Jīntiān jǐ hào?"},
    {s:"我女儿五 ___。", hint:"Con gái tôi năm tuổi.", o:["年","岁","点"], a:1, full:"我女儿五岁。", py:"Wǒ nǚ'ér wǔ suì."},
    {s:"现在八 ___。", hint:"Bây giờ tám giờ.", o:["号","月","点"], a:2, full:"现在八点。", py:"Xiànzài bā diǎn."}
  ],
  tr:[
    {vi:"Hôm nay thứ Hai.", t:"今天 星期一 。", x:["是","号"], py:"Jīntiān xīngqīyī."},
    {vi:"Ngày mai tôi đi bệnh viện.", t:"我 明天 去 医院 。", alt:["明天我去医院"], x:["在","昨天"], py:"Wǒ míngtiān qù yīyuàn."},
    {vi:"Bây giờ mấy giờ?", t:"现在 几 点 ？", x:["吗","号"], py:"Xiànzài jǐ diǎn?"}
  ],
  speak:[
    {q:"今天星期几？", qpy:"Jīntiān xīngqī jǐ?", qvi:"Hôm nay thứ mấy?", a:"今天星期一。", apy:"Jīntiān xīngqīyī.", avi:"Hôm nay thứ Hai. (nói theo ngày thật)"},
    {q:"现在几点？", qpy:"Xiànzài jǐ diǎn?", qvi:"Bây giờ mấy giờ?", a:"现在八点。", apy:"Xiànzài bā diǎn.", avi:"Bây giờ tám giờ."},
    {q:"你明天去哪儿？", qpy:"Nǐ míngtiān qù nǎr?", qvi:"Ngày mai bạn đi đâu?", a:"我明天去学校。", apy:"Wǒ míngtiān qù xuéxiào.", avi:"Ngày mai tôi đi học."}
  ],
  review:["Nói hôm nay là ngày mấy, thứ mấy.","Đặt thời gian ở đâu trong câu 我看电影 (ngày mai)?","Nói “9 giờ sáng” bằng tiếng Trung.","Hỏi tuổi con của bạn bè."]
},
// ───────────────────────── F
{ id:"F", buoi:2, title:"Câu với 有 – có, tồn tại", short:"S + 有 + O",
  goal:"Nói mình có gì, gia đình có những ai, ở đâu có cái gì; phân biệt 有 và 在.",
  formulas:[
    {parts:[["S","Người"],["有","có"],["O","Vật/người"]], ex:"我 有 一 个 女儿。"},
    {parts:[["S","Người"],["没有","không có"],["O","Vật/người"]], ex:"他 没有 电脑。"},
    {parts:[["Nơi chốn","ở đâu"],["有","có"],["O","cái gì"]], ex:"桌子 上 有 书。"}
  ],
  usage:[
    "有 = có (sở hữu). Nơi chốn + 有 + vật = ở chỗ đó có cái gì.",
    "Phủ định CHỈ dùng 没有, không bao giờ nói 不有.",
    "Hỏi: …有…吗？ Trả lời: 有。/ 没有。, tốt hơn nữa là nói cả câu.",
    "Đếm người/vật cần lượng từ: 三个人, 一本书 (xem nhóm L)."
  ],
  compare:{title:"有 hay 在?", rows:[["桌子上有一本书。","Zhuōzi shang yǒu yì běn shū.","Trên bàn có một quyển sách. → Nói ở chỗ đó CÓ GÌ (nơi chốn đứng đầu)."],["书在桌子上。","Shū zài zhuōzi shang.","Quyển sách ở trên bàn. → Nói vật đã biết Ở ĐÂU (vật đứng đầu)."]]},
  read:[ {w:["有"], p:"有女儿", s:"我 有 一 个 女儿 。"}, {w:["没有"], p:"没有电脑", s:"他 没有 电脑 。"}, {w:["桌子","上"], p:"桌子上", s:"桌子 上 有 一 本 书 。"} ],
  examples:[
    {s:"我 有 一 个 女儿 。", py:"Wǒ yǒu yí ge nǚ'ér.", vi:"Tôi có một con gái."},
    {s:"他 没有 电脑 。", py:"Tā méiyǒu diànnǎo.", vi:"Anh ấy không có máy tính."},
    {s:"你 有 狗 吗 ？", py:"Nǐ yǒu gǒu ma?", vi:"Bạn có chó không?"},
    {s:"我 家 有 三 个 人 。", py:"Wǒ jiā yǒu sān ge rén.", vi:"Nhà tôi có ba người."},
    {s:"桌子 上 有 一 本 书 。", py:"Zhuōzi shang yǒu yì běn shū.", vi:"Trên bàn có một quyển sách."},
    {s:"杯子 里 有 水 。", py:"Bēizi li yǒu shuǐ.", vi:"Trong cốc có nước."}
  ],
  vocab:["有","没有","家","个","本","桌子","上","里","杯子","狗","猫","电脑","儿子","女儿"],
  errors:[
    {wrong:"我不有电脑。", right:"我没有电脑。", py:"Wǒ méiyǒu diànnǎo.", why:"Phủ định của 有 luôn là 没有."},
    {wrong:"有一本书在桌子上。", right:"桌子上有一本书。", py:"Zhuōzi shang yǒu yì běn shū.", why:"Câu tồn tại: nơi chốn đứng đầu, rồi 有, rồi vật."},
    {wrong:"我家是三个人。", right:"我家有三个人。", py:"Wǒ jiā yǒu sān ge rén.", why:"Nói số người trong nhà dùng 有, không dùng 是."}
  ],
  mcq:[
    {q:"“Tôi không có máy tính.”", o:["我不有电脑。","我没有电脑。","我没电脑有。"], a:1, e:"Phủ định của 有 là 没有."},
    {q:"“Trên bàn có sách.”", o:["桌子上有书。","有书桌子上。","书有桌子上。"], a:0, e:"Nơi chốn + 有 + vật."},
    {q:"Chọn từ đúng: 书 ___ 桌子上。 (Sách ở trên bàn)", o:["有","在","是"], a:1, e:"Vật + 在 + nơi chốn."},
    {q:"Trả lời 你有猫吗？ (Không):", o:["我没有猫。","我不有猫。","我不是猫。"], a:0, e:"没有 + danh từ."}
  ],
  order:[
    {s:"我 家 有 三 个 人 。", py:"Wǒ jiā yǒu sān ge rén.", vi:"Nhà tôi có ba người."},
    {s:"他 没有 电脑 。", py:"Tā méiyǒu diànnǎo.", vi:"Anh ấy không có máy tính."},
    {s:"杯子 里 有 水 。", py:"Bēizi li yǒu shuǐ.", vi:"Trong cốc có nước."}
  ],
  fill:[
    {s:"我 ___ 一个儿子。", hint:"Tôi có một con trai.", o:["是","有","在"], a:1, full:"我有一个儿子。", py:"Wǒ yǒu yí ge érzi."},
    {s:"她 ___ 有狗。", hint:"Cô ấy không có chó.", o:["不","没","吗"], a:1, full:"她没有狗。", py:"Tā méiyǒu gǒu."},
    {s:"椅子 ___ 有一只猫？", hint:"(Câu này dùng lượng từ ngoài phạm vi – bỏ qua)", skip:true},
    {s:"桌子上 ___ 书吗？", hint:"Trên bàn có sách không?", o:["在","是","有"], a:2, full:"桌子上有书吗？", py:"Zhuōzi shang yǒu shū ma?"}
  ],
  tr:[
    {vi:"Tôi có một con gái.", t:"我 有 一 个 女儿 。", x:["是","没"], py:"Wǒ yǒu yí ge nǚ'ér."},
    {vi:"Anh ấy không có máy tính.", t:"他 没有 电脑 。", x:["不","有"], py:"Tā méiyǒu diànnǎo."},
    {vi:"Nhà bạn có mèo không?", t:"你 家 有 猫 吗 ？", x:["在","是"], py:"Nǐ jiā yǒu māo ma?"}
  ],
  speak:[
    {q:"你家有几个人？", qpy:"Nǐ jiā yǒu jǐ ge rén?", qvi:"Nhà bạn có mấy người?", a:"我家有四个人：爸爸、妈妈、我和……。", apy:"Wǒ jiā yǒu sì ge rén: bàba, māma, wǒ hé …", avi:"Nhà tôi có bốn người: bố, mẹ, tôi và …"},
    {q:"你有电脑吗？", qpy:"Nǐ yǒu diànnǎo ma?", qvi:"Bạn có máy tính không?", a:"我有电脑。/ 我没有电脑。", apy:"Wǒ yǒu diànnǎo. / Wǒ méiyǒu diànnǎo.", avi:"Tôi có máy tính. / Tôi không có máy tính."},
    {q:"你有狗吗？", qpy:"Nǐ yǒu gǒu ma?", qvi:"Bạn có chó không?", a:"我没有狗，我有一个猫。→ nên nói 我没有狗。", apy:"Wǒ méiyǒu gǒu.", avi:"Tôi không có chó. (Lượng từ của 猫 là 只, ngoài HSK 1, nên chỉ cần nói câu phủ định.)"}
  ],
  review:["Giới thiệu gia đình bạn bằng 有.","Phủ định của 有 là gì?","Nói “Trong cốc không có nước.”","Phân biệt: 桌子上有书 và 书在桌子上."]
},
// ───────────────────────── G
{ id:"G", buoi:3, title:"Câu liên động – đi đâu làm gì", short:"S + 去 + Nơi + V + O",
  goal:"Nói đi đâu để làm gì, đi bằng phương tiện gì: tôi đi cửa hàng mua đồ, tôi đi taxi đến bệnh viện.",
  formulas:[
    {parts:[["S","Chủ ngữ"],["去/来","đi/đến"],["Nơi chốn","đâu"],["V + O","làm gì"]], ex:"我 去 商店 买 东西。"},
    {parts:[["S","Chủ ngữ"],["坐","đi bằng"],["Phương tiện","xe gì"],["去","đi"],["Nơi chốn","đâu"]], ex:"我 坐 出租车 去 医院。"}
  ],
  usage:[
    "Hành động nào xảy ra trước thì nói trước: đi đến đâu → làm gì.",
    "Phương tiện đứng trước 去: 坐飞机去北京 (đi máy bay đến Bắc Kinh).",
    "Phủ định đặt 不 trước động từ thứ nhất: 我不去商店买东西。",
    "Thời gian đặt trước cả cụm: 我明天坐飞机去北京。"
  ],
  read:[ {w:["商店","买"], p:"去商店买东西", s:"我 去 商店 买 东西 。"}, {w:["坐","出租车"], p:"坐出租车", s:"我 坐 出租车 去 医院 。"}, {w:["飞机"], p:"坐飞机去北京", s:"我 明天 坐 飞机 去 北京 。"} ],
  examples:[
    {s:"我 去 商店 买 东西 。", py:"Wǒ qù shāngdiàn mǎi dōngxi.", vi:"Tôi đi cửa hàng mua đồ."},
    {s:"我们 去 饭店 吃 中国 菜 。", py:"Wǒmen qù fàndiàn chī Zhōngguó cài.", vi:"Chúng tôi đi nhà hàng ăn món Trung Quốc."},
    {s:"她 来 中国 学习 汉语 。", py:"Tā lái Zhōngguó xuéxí Hànyǔ.", vi:"Cô ấy đến Trung Quốc học tiếng Trung."},
    {s:"我 坐 出租车 去 医院 。", py:"Wǒ zuò chūzūchē qù yīyuàn.", vi:"Tôi đi taxi đến bệnh viện."},
    {s:"我 明天 坐 飞机 去 北京 。", py:"Wǒ míngtiān zuò fēijī qù Běijīng.", vi:"Ngày mai tôi đi máy bay đến Bắc Kinh."},
    {s:"你 去 商店 买 什么 ？", py:"Nǐ qù shāngdiàn mǎi shénme?", vi:"Bạn đi cửa hàng mua gì?"}
  ],
  vocab:["去","来","商店","买","东西","饭店","菜","坐","出租车","飞机","北京","医院","我们"],
  errors:[
    {wrong:"我买东西去商店。", right:"我去商店买东西。", py:"Wǒ qù shāngdiàn mǎi dōngxi.", why:"Đi đến nơi trước, rồi mới làm việc ở đó."},
    {wrong:"我去北京坐飞机。", right:"我坐飞机去北京。", py:"Wǒ zuò fēijī qù Běijīng.", why:"Phương tiện (坐飞机) đứng trước 去 + nơi đến."}
  ],
  mcq:[
    {q:"“Tôi đi cửa hàng mua đồ.”", o:["我买东西去商店。","我去商店买东西。","我商店去买东西。"], a:1, e:"去 + nơi chốn + làm gì."},
    {q:"“Tôi đi taxi đến bệnh viện.”", o:["我坐出租车去医院。","我去医院坐出租车。","我出租车坐去医院。"], a:0, e:"坐 + phương tiện + 去 + nơi."},
    {q:"Phủ định của 我去饭店吃菜。", o:["我去饭店不吃菜。","我不去饭店吃菜。","我去不饭店吃菜。"], a:1, e:"不 đặt trước động từ thứ nhất."},
    {q:"Câu nào đặt thời gian đúng?", o:["我坐飞机去北京明天。","我坐飞机明天去北京。","我明天坐飞机去北京。"], a:2, e:"Thời gian đứng trước cả cụm động từ."}
  ],
  order:[
    {s:"我 去 商店 买 东西 。", py:"Wǒ qù shāngdiàn mǎi dōngxi.", vi:"Tôi đi cửa hàng mua đồ."},
    {s:"她 来 中国 学习 汉语 。", py:"Tā lái Zhōngguó xuéxí Hànyǔ.", vi:"Cô ấy đến Trung Quốc học tiếng Trung."},
    {s:"我 坐 飞机 去 北京 。", py:"Wǒ zuò fēijī qù Běijīng.", vi:"Tôi đi máy bay đến Bắc Kinh."}
  ],
  fill:[
    {s:"我 ___ 商店买苹果。", hint:"Tôi đi cửa hàng mua táo.", o:["去","在","有"], a:0, full:"我去商店买苹果。", py:"Wǒ qù shāngdiàn mǎi píngguǒ."},
    {s:"他 ___ 出租车去学校。", hint:"Anh ấy đi taxi đến trường.", o:["开","坐","是"], a:1, full:"他坐出租车去学校。", py:"Tā zuò chūzūchē qù xuéxiào."},
    {s:"你去饭店吃 ___？", hint:"Bạn đi nhà hàng ăn gì?", o:["哪儿","谁","什么"], a:2, full:"你去饭店吃什么？", py:"Nǐ qù fàndiàn chī shénme?"}
  ],
  tr:[
    {vi:"Tôi đi cửa hàng mua quần áo.", t:"我 去 商店 买 衣服 。", x:["在","坐"], py:"Wǒ qù shāngdiàn mǎi yīfu."},
    {vi:"Chúng tôi đi nhà hàng ăn cơm.", t:"我们 去 饭店 吃 米饭 。", x:["在","喝"], py:"Wǒmen qù fàndiàn chī mǐfàn."},
    {vi:"Ngày mai mẹ đi taxi đến bệnh viện.", t:"妈妈 明天 坐 出租车 去 医院 。", alt:["明天妈妈坐出租车去医院"], x:["在","开"], py:"Māma míngtiān zuò chūzūchē qù yīyuàn."}
  ],
  speak:[
    {q:"你去商店买什么？", qpy:"Nǐ qù shāngdiàn mǎi shénme?", qvi:"Bạn đi cửa hàng mua gì?", a:"我去商店买水果。", apy:"Wǒ qù shāngdiàn mǎi shuǐguǒ.", avi:"Tôi đi cửa hàng mua hoa quả."},
    {q:"你怎么去学校？", qpy:"Nǐ zěnme qù xuéxiào?", qvi:"Bạn đến trường bằng cách nào?", a:"我坐出租车去学校。", apy:"Wǒ zuò chūzūchē qù xuéxiào.", avi:"Tôi đi taxi đến trường."},
    {q:"你明天去哪儿？做什么？", qpy:"Nǐ míngtiān qù nǎr? Zuò shénme?", qvi:"Ngày mai bạn đi đâu? Làm gì?", a:"我明天去医院看医生。", apy:"Wǒ míngtiān qù yīyuàn kàn yīshēng.", avi:"Ngày mai tôi đi bệnh viện khám bệnh."}
  ],
  review:["Nói 2 câu “đi đâu làm gì” về cuối tuần của bạn.","Phương tiện đứng trước hay sau 去?","Đổi 我去饭店吃中国菜。 sang phủ định.","Hỏi bạn: bạn đi đâu mua sách?"]
},
// ───────────────────────── H
{ id:"H", buoi:3, title:"Câu với 在 – ở đâu, làm gì ở đâu", short:"S + 在 + Nơi (+ V)",
  goal:"Nói ai/cái gì ở đâu, làm việc gì ở đâu, sống ở đâu; hỏi 在哪儿？",
  formulas:[
    {parts:[["S","Người/vật"],["在","ở"],["Nơi chốn","đâu"]], ex:"我 在 家。"},
    {parts:[["S","Người"],["在","ở"],["Nơi chốn","đâu"],["V + O","làm gì"]], ex:"妈妈 在 医院 工作。"},
    {parts:[["S","Người"],["住","sống"],["在","ở"],["Nơi chốn","đâu"]], ex:"我 住 在 北京。"}
  ],
  usage:[
    "在 + nơi chốn đứng TRƯỚC động từ. Tiếng Việt nói “học ở trường”, tiếng Trung nói 在学校学习.",
    "Phủ định: 不在 (đọc bú zài): 爸爸不在家。",
    "Hỏi: …在哪儿？",
    "Vị trí so với vật khác: 在 + vật + 上/里/前面/后面."
  ],
  extNote:{title:"在 chỉ hành động đang diễn ra", body:"Mẫu 他在看电视呢。(Tā zài kàn diànshì ne. – Anh ấy đang xem tivi.) có xuất hiện trong một số giáo trình sơ cấp. Tài liệu chưa đối chiếu được giáo trình nên xếp vào phần MỞ RỘNG – KHÔNG BẮT BUỘC; giáo viên tự quyết định có dạy hay không."},
  read:[ {w:["在","家"], p:"在家", s:"我 在 家 。"}, {w:["医院","工作"], p:"在医院工作", s:"妈妈 在 医院 工作 。"}, {w:["住"], p:"住在北京", s:"我 住 在 北京 。"} ],
  examples:[
    {s:"我 在 家 。", py:"Wǒ zài jiā.", vi:"Tôi ở nhà."},
    {s:"妈妈 在 医院 工作 。", py:"Māma zài yīyuàn gōngzuò.", vi:"Mẹ làm việc ở bệnh viện."},
    {s:"你 在 哪儿 ？", py:"Nǐ zài nǎr?", vi:"Bạn ở đâu?"},
    {s:"我 在 学校 学习 汉语 。", py:"Wǒ zài xuéxiào xuéxí Hànyǔ.", vi:"Tôi học tiếng Trung ở trường."},
    {s:"爸爸 不 在 家 。", py:"Bàba bú zài jiā.", vi:"Bố không có ở nhà."},
    {s:"书 在 桌子 上 。", py:"Shū zài zhuōzi shang.", vi:"Sách ở trên bàn."},
    {s:"商店 在 医院 前面 。", py:"Shāngdiàn zài yīyuàn qiánmiàn.", vi:"Cửa hàng ở phía trước bệnh viện."},
    {s:"我 住 在 北京 。", py:"Wǒ zhù zài Běijīng.", vi:"Tôi sống ở Bắc Kinh."}
  ],
  vocab:["在","家","医院","工作","学校","哪儿","桌子","上","住","北京","爸爸","前面","后面"],
  errors:[
    {wrong:"我学习汉语在学校。", right:"我在学校学习汉语。", py:"Wǒ zài xuéxiào xuéxí Hànyǔ.", why:"在 + nơi chốn đứng trước động từ, không đứng cuối câu."},
    {wrong:"我家有北京。", right:"我家在北京。", py:"Wǒ jiā zài Běijīng.", why:"Nói vật/người ở đâu dùng 在; 有 dùng khi nói ở đâu có gì."},
    {wrong:"爸爸在不家。", right:"爸爸不在家。", py:"Bàba bú zài jiā.", why:"不 đứng trước 在."}
  ],
  mcq:[
    {q:"“Tôi học tiếng Trung ở trường.”", o:["我学习汉语在学校。","我在学校学习汉语。","在学校我汉语学习。"], a:1, e:"在 + nơi + động từ."},
    {q:"“Bạn ở đâu?”", o:["你在哪儿？","你哪儿在？","你是哪儿？"], a:0, e:"S + 在 + 哪儿."},
    {q:"Chọn 有 hay 在: 医院 ___ 商店前面。 (Bệnh viện ở trước cửa hàng)", o:["有","在","是"], a:1, e:"Vật đã biết + 在 + vị trí."},
    {q:"“Bố không có ở nhà.”", o:["爸爸没有家。","爸爸在不家。","爸爸不在家。"], a:2, e:"不在 + nơi chốn."}
  ],
  order:[
    {s:"妈妈 在 医院 工作 。", py:"Māma zài yīyuàn gōngzuò.", vi:"Mẹ làm việc ở bệnh viện."},
    {s:"书 在 桌子 上 。", py:"Shū zài zhuōzi shang.", vi:"Sách ở trên bàn."},
    {s:"你 在 哪儿 学习 汉语 ？", py:"Nǐ zài nǎr xuéxí Hànyǔ?", vi:"Bạn học tiếng Trung ở đâu?"}
  ],
  fill:[
    {s:"我 ___ 家。", hint:"Tôi ở nhà.", o:["在","有","是"], a:0, full:"我在家。", py:"Wǒ zài jiā."},
    {s:"他 ___ 在学校。", hint:"Anh ấy không ở trường.", o:["没","不","吗"], a:1, full:"他不在学校。", py:"Tā bú zài xuéxiào."},
    {s:"我住 ___ 北京。", hint:"Tôi sống ở Bắc Kinh.", o:["在","有","去"], a:0, full:"我住在北京。", py:"Wǒ zhù zài Běijīng."}
  ],
  tr:[
    {vi:"Tôi ở nhà.", t:"我 在 家 。", x:["有","是"], py:"Wǒ zài jiā."},
    {vi:"Bố làm việc ở bệnh viện.", t:"爸爸 在 医院 工作 。", x:["有","去"], py:"Bàba zài yīyuàn gōngzuò."},
    {vi:"Cửa hàng ở phía sau trường học.", t:"商店 在 学校 后面 。", x:["有","前面"], py:"Shāngdiàn zài xuéxiào hòumiàn."}
  ],
  speak:[
    {q:"你家在哪儿？", qpy:"Nǐ jiā zài nǎr?", qvi:"Nhà bạn ở đâu?", a:"我家在……。", apy:"Wǒ jiā zài …", avi:"Nhà tôi ở … (nói tên thành phố)."},
    {q:"你在哪儿学习汉语？", qpy:"Nǐ zài nǎr xuéxí Hànyǔ?", qvi:"Bạn học tiếng Trung ở đâu?", a:"我在学校学习汉语。", apy:"Wǒ zài xuéxiào xuéxí Hànyǔ.", avi:"Tôi học tiếng Trung ở trường."},
    {q:"你妈妈在哪儿工作？", qpy:"Nǐ māma zài nǎr gōngzuò?", qvi:"Mẹ bạn làm việc ở đâu?", a:"我妈妈在医院工作。", apy:"Wǒ māma zài yīyuàn gōngzuò.", avi:"Mẹ tôi làm việc ở bệnh viện."}
  ],
  review:["Nói bạn sống ở đâu và học ở đâu.","在 + nơi chốn đứng trước hay sau động từ?","Đặt 1 câu với 有 và 1 câu với 在 về cái bàn trong lớp.","Hỏi bạn học: bố bạn làm việc ở đâu?"]
},
// ───────────────────────── I
{ id:"I", buoi:3, ext:true, title:"Câu với 给 – làm gì cho ai", short:"S + 给 + Người + V",
  scopeNote:"给 (gěi) không có trong danh sách 150 từ HSK 1 bản 2.0; từ này thuộc HSK 2. Vì vậy toàn bộ nhóm I là MỞ RỘNG – KHÔNG BẮT BUỘC. Nên học khi lớp đã vững các nhóm A–H.",
  goal:"(Mở rộng) Nói gọi điện cho ai, đưa cho ai cái gì, mua cho ai cái gì.",
  formulas:[
    {parts:[["S","Chủ ngữ"],["给","cho"],["Người","ai"],["V + O","làm gì"]], ex:"我 给 你 打 电话。"},
    {parts:[["S","Chủ ngữ"],["给","đưa cho"],["Người","ai"],["Vật","cái gì"]], ex:"他 给 我 一 本 书。"}
  ],
  usage:[
    "给 + người đứng TRƯỚC động từ chính: 给妈妈打电话 = gọi điện cho mẹ.",
    "Khi 给 là động từ “đưa cho”: 给 + người + vật.",
    "Thời gian đứng trước 给: 明天我给你打电话。"
  ],
  read:[ {w:["打","电话"], p:"打电话", s:"我 给 你 打 电话 。"}, {w:["给"], p:"给我", s:"他 给 我 一 本 书 。"} ],
  examples:[
    {s:"我 给 你 打 电话 。", py:"Wǒ gěi nǐ dǎ diànhuà.", vi:"Tôi gọi điện cho bạn."},
    {s:"明天 我 给 妈妈 打 电话 。", py:"Míngtiān wǒ gěi māma dǎ diànhuà.", vi:"Ngày mai tôi gọi điện cho mẹ."},
    {s:"他 给 我 一 本 书 。", py:"Tā gěi wǒ yì běn shū.", vi:"Anh ấy đưa cho tôi một quyển sách."},
    {s:"妈妈 给 我 买 衣服 。", py:"Māma gěi wǒ mǎi yīfu.", vi:"Mẹ mua quần áo cho tôi."},
    {s:"请 给 我 一点儿 水 。", py:"Qǐng gěi wǒ yìdiǎnr shuǐ.", vi:"Làm ơn cho tôi một chút nước."}
  ],
  vocab:["给","打","电话","打电话","请","一点儿","衣服"],
  errors:[
    {wrong:"我给打电话你。", right:"我给你打电话。", py:"Wǒ gěi nǐ dǎ diànhuà.", why:"Người nhận đứng ngay sau 给, trước động từ."},
    {wrong:"他一本书给我。", right:"他给我一本书。", py:"Tā gěi wǒ yì běn shū.", why:"Trật tự: 给 + người + vật."}
  ],
  mcq:[
    {q:"“Tôi gọi điện cho mẹ.”", o:["我给妈妈打电话。","我打电话妈妈给。","我给打电话妈妈。"], a:0, e:"给 + người + 打电话."},
    {q:"“Anh ấy đưa cho tôi một quyển sách.”", o:["他一本书给我。","他给我一本书。","他给一本书我。"], a:1, e:"给 + người + vật."},
    {q:"给 thuộc cấp độ nào trong HSK 2.0?", o:["HSK 1","HSK 2","HSK 3"], a:1, e:"给 thuộc HSK 2, nên nhóm này là mở rộng."}
  ],
  order:[
    {s:"我 给 你 打 电话 。", py:"Wǒ gěi nǐ dǎ diànhuà.", vi:"Tôi gọi điện cho bạn."},
    {s:"妈妈 给 我 买 衣服 。", py:"Māma gěi wǒ mǎi yīfu.", vi:"Mẹ mua quần áo cho tôi."}
  ],
  fill:[
    {s:"明天我 ___ 你打电话。", hint:"Ngày mai tôi gọi điện cho bạn.", o:["给","在","有"], a:0, full:"明天我给你打电话。", py:"Míngtiān wǒ gěi nǐ dǎ diànhuà."},
    {s:"请给我 ___ 水。", hint:"Làm ơn cho tôi một chút nước.", o:["一点儿","个","本"], a:0, full:"请给我一点儿水。", py:"Qǐng gěi wǒ yìdiǎnr shuǐ."}
  ],
  tr:[
    {vi:"Tôi gọi điện cho bạn.", t:"我 给 你 打 电话 。", x:["在","有"], py:"Wǒ gěi nǐ dǎ diànhuà."},
    {vi:"Bố mua táo cho tôi.", t:"爸爸 给 我 买 苹果 。", x:["是","在"], py:"Bàba gěi wǒ mǎi píngguǒ."}
  ],
  speak:[
    {q:"你明天给谁打电话？", qpy:"Nǐ míngtiān gěi shéi dǎ diànhuà?", qvi:"Ngày mai bạn gọi điện cho ai?", a:"我明天给妈妈打电话。", apy:"Wǒ míngtiān gěi māma dǎ diànhuà.", avi:"Ngày mai tôi gọi điện cho mẹ."},
    {q:"Bạn ở nhà hàng, xin một chút nước.", qpy:"", qvi:"", a:"请给我一点儿水。", apy:"Qǐng gěi wǒ yìdiǎnr shuǐ.", avi:"Làm ơn cho tôi một chút nước."}
  ],
  review:["给 đứng trước hay sau động từ 打电话?","Nói: Tôi mua sách cho bạn.","Vì sao nhóm này là mở rộng?"]
},
// ───────────────────────── J
{ id:"J", buoi:3, title:"Động từ năng nguyện 会 · 能 · 想", short:"S + 会/能/想 + V",
  goal:"Nói mình biết làm gì, có thể làm gì, muốn làm gì; mời, hẹn đơn giản.",
  formulas:[
    {parts:[["S","Chủ ngữ"],["会/能/想","biết / có thể / muốn"],["V","Động từ"],["O","Tân ngữ"]], ex:"我 会 说 汉语。"},
    {parts:[["S","Chủ ngữ"],["不","không"],["会/能/想",""],["V + O",""]], ex:"我 不 想 喝 茶。"},
    {parts:[["S","Chủ ngữ"],["会/能/想",""],["V + O",""],["吗？",""]], ex:"你 能 来 吗？"}
  ],
  modals:[["会","huì","biết làm (kỹ năng phải học mới có)","我会说汉语。"],["能","néng","có thể (đủ điều kiện, được phép, có thời gian)","明天我能来。"],["想","xiǎng","muốn, định","我想喝水。"]],
  usage:[
    "Năng nguyện từ đứng trước động từ chính.",
    "Phủ định: 不会 (bú huì), 不能 (bù néng), 不想 (bù xiǎng).",
    "会 chỉ dùng cho kỹ năng. “Biết một người” là 认识, không dùng 会.",
    "Trả lời ngắn có thể dùng chính từ đó: 会。/ 不会。, nhưng nên luyện nói cả câu."
  ],
  read:[ {w:["会","说"], p:"会说汉语", s:"我 会 说 汉语 。"}, {w:["想","喝"], p:"想喝茶", s:"我 想 喝 茶 。"}, {w:["能","来"], p:"能来", s:"明天 你 能 来 吗 ？"} ],
  examples:[
    {s:"我 会 说 汉语 。", py:"Wǒ huì shuō Hànyǔ.", vi:"Tôi biết nói tiếng Trung."},
    {s:"他 不 会 写 这 个 字 。", py:"Tā bú huì xiě zhège zì.", vi:"Anh ấy không biết viết chữ này."},
    {s:"我 想 喝 茶 。", py:"Wǒ xiǎng hē chá.", vi:"Tôi muốn uống trà."},
    {s:"你 想 去 哪儿 ？", py:"Nǐ xiǎng qù nǎr?", vi:"Bạn muốn đi đâu?"},
    {s:"明天 你 能 来 吗 ？", py:"Míngtiān nǐ néng lái ma?", vi:"Ngày mai bạn đến được không?"},
    {s:"我 今天 不 能 去 学校 。", py:"Wǒ jīntiān bù néng qù xuéxiào.", vi:"Hôm nay tôi không thể đi học."},
    {s:"你 会 做 中国 菜 吗 ？", py:"Nǐ huì zuò Zhōngguó cài ma?", vi:"Bạn biết nấu món Trung Quốc không?"}
  ],
  vocab:["会","能","想","说","写","字","做","菜","来","认识","汉语"],
  errors:[
    {wrong:"我会他。", right:"我认识他。", py:"Wǒ rènshi tā.", why:"“Biết/quen một người” là 认识. 会 chỉ dùng cho kỹ năng."},
    {wrong:"我喝想茶。", right:"我想喝茶。", py:"Wǒ xiǎng hē chá.", why:"想 đứng trước động từ chính."},
    {wrong:"我会不说汉语。", right:"我不会说汉语。", py:"Wǒ bú huì shuō Hànyǔ.", why:"不 đứng trước năng nguyện từ."}
  ],
  mcq:[
    {q:"“Tôi biết nói tiếng Trung.” (kỹ năng)", o:["我会说汉语。","我想说汉语。","我说会汉语。"], a:0, e:"Kỹ năng học được dùng 会."},
    {q:"“Tôi muốn uống nước.”", o:["我喝想水。","我想喝水。","我会喝水。"], a:1, e:"想 + V = muốn làm gì."},
    {q:"“Tôi quen cô ấy.”", o:["我会她。","我能她。","我认识她。"], a:2, e:"Biết/quen người dùng 认识."},
    {q:"“Hôm nay tôi không đi được.” (bận)", o:["我今天不会去。","我今天不能去。","我今天能不去。"], a:1, e:"Không có điều kiện làm → 不能."}
  ],
  order:[
    {s:"我 想 喝 茶 。", py:"Wǒ xiǎng hē chá.", vi:"Tôi muốn uống trà."},
    {s:"你 会 说 汉语 吗 ？", py:"Nǐ huì shuō Hànyǔ ma?", vi:"Bạn biết nói tiếng Trung không?"},
    {s:"我 今天 不 能 去 学校 。", py:"Wǒ jīntiān bù néng qù xuéxiào.", vi:"Hôm nay tôi không thể đi học."}
  ],
  fill:[
    {s:"我 ___ 写这个字。", hint:"Tôi biết viết chữ này.", o:["会","想","在"], a:0, full:"我会写这个字。", py:"Wǒ huì xiě zhège zì."},
    {s:"你 ___ 吃什么？", hint:"Bạn muốn ăn gì?", o:["会","想","是"], a:1, full:"你想吃什么？", py:"Nǐ xiǎng chī shénme?"},
    {s:"明天你 ___ 来吗？", hint:"Ngày mai bạn đến được không?", o:["能","会","有"], a:0, full:"明天你能来吗？", py:"Míngtiān nǐ néng lái ma?"}
  ],
  tr:[
    {vi:"Tôi muốn đi Bắc Kinh.", t:"我 想 去 北京 。", x:["会","在"], py:"Wǒ xiǎng qù Běijīng."},
    {vi:"Mẹ tôi biết nấu món Trung Quốc.", t:"我 妈妈 会 做 中国 菜 。", alt:["我的妈妈会做中国菜"], x:["想","吃"], py:"Wǒ māma huì zuò Zhōngguó cài."},
    {vi:"Ngày mai bạn đến được không?", t:"明天 你 能 来 吗 ？", alt:["你明天能来吗"], x:["会","去"], py:"Míngtiān nǐ néng lái ma?"}
  ],
  speak:[
    {q:"你会说汉语吗？", qpy:"Nǐ huì shuō Hànyǔ ma?", qvi:"Bạn biết nói tiếng Trung không?", a:"我会说一点儿汉语。", apy:"Wǒ huì shuō yìdiǎnr Hànyǔ.", avi:"Tôi biết nói một chút tiếng Trung."},
    {q:"你想喝什么？", qpy:"Nǐ xiǎng hē shénme?", qvi:"Bạn muốn uống gì?", a:"我想喝茶。", apy:"Wǒ xiǎng hē chá.", avi:"Tôi muốn uống trà."},
    {q:"明天你能来学校吗？", qpy:"Míngtiān nǐ néng lái xuéxiào ma?", qvi:"Ngày mai bạn đến trường được không?", a:"能。/ 我明天不能来。", apy:"Néng. / Wǒ míngtiān bù néng lái.", avi:"Được. / Ngày mai tôi không đến được."}
  ],
  review:["Nói 1 việc bạn biết làm, 1 việc bạn muốn làm.","会 và 认识 khác nhau thế nào?","Mời bạn: ngày mai bạn đến được không?","Phủ định câu 我想去商店。"]
},
// ───────────────────────── K
{ id:"K", buoi:2, title:"Phó từ và trợ từ thường dùng", short:"不 · 没 · 都 · 的 · 呢 · 和 · 了",
  goal:"Dùng đúng vị trí các từ nhỏ nhưng quan trọng: không, đều, của, còn…thì sao, và, quá…rồi.",
  formulas:[
    {parts:[["S (số nhiều)","Chủ ngữ"],["都","đều"],["V/Adj",""]], ex:"我们 都 是 学生。"},
    {parts:[["A","Người/vật"],["的","của"],["N","Danh từ"]], ex:"我 的 书"},
    {parts:[["Câu trả lời",""],["你呢？","còn bạn?"]], ex:"我 很 好，你 呢？"},
    {parts:[["N","Danh từ"],["和","và"],["N","Danh từ"]], ex:"我 和 妈妈"}
  ],
  table:{title:"Các cặp dễ nhầm", head:["Từ","Dùng khi","Ví dụ"], rows:[
    ["不 bù","Không (thói quen, ý muốn, hiện tại/tương lai); trước 是, tính từ, năng nguyện từ","我不喝茶。明天我不去。"],
    ["没(有) méi(yǒu)","Không có; đã không / chưa làm (việc đã qua)","我没有钱。昨天我没去学校。"],
    ["吗 ma","Hỏi có/không","你是老师吗？"],
    ["呢 ne","Hỏi lại “còn … thì sao?”","我是学生，你呢？"],
    ["和 hé","Nối hai danh từ / đại từ (không nối hai câu)","爸爸和妈妈"],
    ["都 dōu","Đứng sau chủ ngữ số nhiều, trước động từ","我们都喜欢喝茶。"]
  ]},
  usage:[
    "都 đứng sau chủ ngữ, trước động từ: 我们都是学生。",
    "的 nối người/vật sở hữu với danh từ: 我的书. Với người thân thiết có thể bỏ: 我妈妈.",
    "呢 dùng để hỏi lại sau khi đã nói về mình: 我很好，你呢？",
    "了 dùng trong 太…了 (quá…!) và sau động từ khi việc đã xảy ra: 我买了三个苹果。 (Cách dùng 了 sau động từ nên giáo viên đối chiếu với giáo trình đang dạy.)"
  ],
  extNote:{title:"也 (yě) – cũng", body:"也 rất thường gặp (我也是学生。Wǒ yě shì xuésheng. – Tôi cũng là học sinh.) nhưng thuộc HSK 2 trong bản 2.0, nên chỉ để ở phần MỞ RỘNG – KHÔNG BẮT BUỘC. Vị trí: sau chủ ngữ, trước động từ, giống 都."},
  read:[ {w:["都"], p:"都是学生", s:"我们 都 是 学生 。"}, {w:["呢"], p:"你呢", s:"我 很 好 ， 你 呢 ？"}, {w:["和"], p:"我和妈妈", s:"我 和 妈妈 去 商店 。"} ],
  examples:[
    {s:"我们 都 是 学生 。", py:"Wǒmen dōu shì xuésheng.", vi:"Chúng tôi đều là học sinh."},
    {s:"我 和 妈妈 去 商店 。", py:"Wǒ hé māma qù shāngdiàn.", vi:"Tôi và mẹ đi cửa hàng."},
    {s:"这 是 我 的 书 。", py:"Zhè shì wǒ de shū.", vi:"Đây là sách của tôi."},
    {s:"我 很 好 ， 你 呢 ？", py:"Wǒ hěn hǎo, nǐ ne?", vi:"Tôi khỏe, còn bạn?"},
    {s:"昨天 我 没 去 学校 。", py:"Zuótiān wǒ méi qù xuéxiào.", vi:"Hôm qua tôi không đi học."},
    {s:"我 买 了 三 个 苹果 。", py:"Wǒ mǎile sān ge píngguǒ.", vi:"Tôi đã mua ba quả táo."},
    {s:"太 好 了 ！", py:"Tài hǎo le!", vi:"Tốt quá!"}
  ],
  vocab:["不","没","没有","都","的","呢","吗","和","了","太","我们","喜欢"],
  errors:[
    {wrong:"都我们是学生。", right:"我们都是学生。", py:"Wǒmen dōu shì xuésheng.", why:"都 đứng sau chủ ngữ, không đứng đầu câu."},
    {wrong:"昨天我不去学校。", right:"昨天我没去学校。", py:"Zuótiān wǒ méi qù xuéxiào.", why:"Việc đã qua (hôm qua không đi) dùng 没."},
    {wrong:"我是学生，你吗？", right:"我是学生，你呢？", py:"Wǒ shì xuésheng, nǐ ne?", why:"Hỏi lại “còn bạn?” dùng 呢."}
  ],
  mcq:[
    {q:"“Chúng tôi đều là học sinh.”", o:["都我们是学生。","我们是都学生。","我们都是学生。"], a:2, e:"都 sau chủ ngữ, trước động từ."},
    {q:"“Hôm qua tôi không đi học.”", o:["昨天我没去学校。","昨天我不去学校。","昨天我没有去学校吗。"], a:0, e:"Việc đã qua dùng 没."},
    {q:"“Tôi khỏe, còn bạn?”", o:["我很好，你吗？","我很好，你呢？","我很好，呢你？"], a:1, e:"Hỏi lại dùng 呢."},
    {q:"“sách của tôi”", o:["书的我","我书的","我的书"], a:2, e:"Người sở hữu + 的 + danh từ."}
  ],
  order:[
    {s:"我们 都 是 学生 。", py:"Wǒmen dōu shì xuésheng.", vi:"Chúng tôi đều là học sinh."},
    {s:"我 和 妈妈 去 商店 。", py:"Wǒ hé māma qù shāngdiàn.", vi:"Tôi và mẹ đi cửa hàng."},
    {s:"昨天 我 没 去 学校 。", py:"Zuótiān wǒ méi qù xuéxiào.", vi:"Hôm qua tôi không đi học."}
  ],
  fill:[
    {s:"我们 ___ 喜欢喝茶。", hint:"Chúng tôi đều thích uống trà.", o:["都","和","的"], a:0, full:"我们都喜欢喝茶。", py:"Wǒmen dōu xǐhuan hē chá."},
    {s:"我是老师，你 ___？", hint:"Tôi là giáo viên, còn bạn?", o:["吗","呢","了"], a:1, full:"我是老师，你呢？", py:"Wǒ shì lǎoshī, nǐ ne?"},
    {s:"我 ___ 有钱。", hint:"Tôi không có tiền.", o:["不","没","都"], a:1, full:"我没有钱。", py:"Wǒ méiyǒu qián."}
  ],
  tr:[
    {vi:"Bố và mẹ đều là bác sĩ.", t:"爸爸 和 妈妈 都 是 医生 。", x:["的","呢"], py:"Bàba hé māma dōu shì yīshēng."},
    {vi:"Đây là máy tính của tôi.", t:"这 是 我 的 电脑 。", x:["呢","和"], py:"Zhè shì wǒ de diànnǎo."},
    {vi:"Hôm qua tôi không xem tivi.", t:"昨天 我 没 看 电视 。", alt:["我昨天没看电视"], x:["不","吗"], py:"Zuótiān wǒ méi kàn diànshì."}
  ],
  speak:[
    {q:"我很好，你呢？", qpy:"Wǒ hěn hǎo, nǐ ne?", qvi:"Tôi khỏe, còn bạn?", a:"我也很好。→ (không dùng 也) 我很好，谢谢！", apy:"Wǒ hěn hǎo, xièxie!", avi:"Tôi khỏe, cảm ơn!"},
    {q:"昨天你去学校了吗？", qpy:"Zuótiān nǐ qù xuéxiào le ma?", qvi:"Hôm qua bạn có đi học không?", a:"我去了。/ 我没去。", apy:"Wǒ qù le. / Wǒ méi qù.", avi:"Tôi có đi. / Tôi không đi."},
    {q:"你和谁去商店？", qpy:"Nǐ hé shéi qù shāngdiàn?", qvi:"Bạn đi cửa hàng với ai?", a:"我和妈妈去商店。", apy:"Wǒ hé māma qù shāngdiàn.", avi:"Tôi đi cửa hàng với mẹ."}
  ],
  review:["不 và 没 khác nhau thế nào? Cho 1 ví dụ mỗi từ.","都 đứng ở đâu?","Hỏi lại bạn bằng 呢 sau khi giới thiệu nghề của mình.","Nói “tốt quá!” và “nóng quá!”."]
},
// ───────────────────────── L
{ id:"L", buoi:2, title:"Lượng từ, 这 · 那 và cụm danh từ", short:"Số + Lượng từ + N",
  goal:"Đếm người và đồ vật, chỉ cái này/cái kia, hỏi giá đồ khi đi mua sắm.",
  formulas:[
    {parts:[["Số","一, 三…"],["Lượng từ","个, 本…"],["N","Danh từ"]], ex:"三 个 苹果"},
    {parts:[["这/那","này/kia"],["Lượng từ",""],["N","Danh từ"]], ex:"这 本 书"},
    {parts:[["这/那","đây/kia"],["是","là"],["N",""]], ex:"这 是 我 的 杯子。"}
  ],
  measures:[["个","gè / ge","lượng từ chung: người, quả, cốc…","一个人、三个苹果"],["本","běn","quyển (sách)","一本书"],["块","kuài","đồng (tiền, khi nói)","八块钱"],["些","xiē","một số, những (không cần số)","这些衣服、一些水果"],["岁","suì","tuổi","五岁"]],
  usage:[
    "Giữa số và danh từ phải có lượng từ: 三个人, không nói 三人 (trong câu thường ngày).",
    "这/那 + lượng từ + danh từ: 这个苹果, 那本书. 这个 thường đọc zhège, 那个 đọc nàge.",
    "Hỏi giá: 这个多少钱？ Trả lời: 八块钱。",
    "Lượng từ 个 trong 一个 đọc nhẹ: yí ge."
  ],
  extNote:{title:"两 (liǎng) – hai, trước lượng từ", body:"Khi đếm “hai cái, hai người”, người Trung Quốc nói 两个 (liǎng ge), không nói 二个. 两 thuộc HSK 2 nên xếp vào MỞ RỘNG – KHÔNG BẮT BUỘC, nhưng rất nên biết để tránh lỗi 二个人."},
  read:[ {w:["个","苹果"], p:"三个苹果", s:"我 买 三 个 苹果 。"}, {w:["本","书"], p:"这本书", s:"这 本 书 是 我 的 。"}, {w:["块","钱"], p:"八块钱", s:"这 个 杯子 八 块 钱 。"} ],
  examples:[
    {s:"我 有 三 个 朋友 。", py:"Wǒ yǒu sān ge péngyou.", vi:"Tôi có ba người bạn."},
    {s:"这 本 书 是 我 的 。", py:"Zhè běn shū shì wǒ de.", vi:"Quyển sách này là của tôi."},
    {s:"那 个 人 是 谁 ？", py:"Nàge rén shì shéi?", vi:"Người kia là ai?"},
    {s:"这 个 苹果 很 大 。", py:"Zhège píngguǒ hěn dà.", vi:"Quả táo này to."},
    {s:"这 些 衣服 很 漂亮 。", py:"Zhèxiē yīfu hěn piàoliang.", vi:"Những bộ quần áo này đẹp."},
    {s:"这 个 杯子 八 块 钱 。", py:"Zhège bēizi bā kuài qián.", vi:"Cái cốc này tám đồng."},
    {s:"我 想 买 一 本 书 。", py:"Wǒ xiǎng mǎi yì běn shū.", vi:"Tôi muốn mua một quyển sách."}
  ],
  vocab:["个","本","块","些","钱","这","那","哪","一","二","三","四","五","六","七","八","九","十"],
  errors:[
    {wrong:"我买三苹果。", right:"我买三个苹果。", py:"Wǒ mǎi sān ge píngguǒ.", why:"Giữa số và danh từ cần lượng từ 个."},
    {wrong:"这个书很好。", right:"这本书很好。", py:"Zhè běn shū hěn hǎo.", why:"Sách dùng lượng từ 本."},
    {wrong:"我有二个儿子。", right:"我有两个儿子。", py:"Wǒ yǒu liǎng ge érzi.", why:"Trước lượng từ dùng 两, không dùng 二 (两 là TỪ MỞ RỘNG).", ext:true}
  ],
  mcq:[
    {q:"“ba quả táo”", o:["三苹果","三个苹果","个三苹果"], a:1, e:"Số + lượng từ + danh từ."},
    {q:"“quyển sách này”", o:["这本书","这书本","本这书"], a:0, e:"这 + lượng từ + danh từ."},
    {q:"Lượng từ cho 书 là:", o:["块","本","岁"], a:1, e:"一本书."},
    {q:"“Cái này bao nhiêu tiền?” – “Tám đồng.”", o:["八本钱。","八个钱。","八块钱。"], a:2, e:"Tiền dùng 块."}
  ],
  order:[
    {s:"我 有 三 个 朋友 。", py:"Wǒ yǒu sān ge péngyou.", vi:"Tôi có ba người bạn."},
    {s:"这 本 书 是 我 的 。", py:"Zhè běn shū shì wǒ de.", vi:"Quyển sách này là của tôi."},
    {s:"那 个 人 是 谁 ？", py:"Nàge rén shì shéi?", vi:"Người kia là ai?"}
  ],
  fill:[
    {s:"我想买一 ___ 书。", hint:"Tôi muốn mua một quyển sách.", o:["个","本","块"], a:1, full:"我想买一本书。", py:"Wǒ xiǎng mǎi yì běn shū."},
    {s:"这个杯子九 ___ 钱。", hint:"Cái cốc này chín đồng.", o:["块","本","岁"], a:0, full:"这个杯子九块钱。", py:"Zhège bēizi jiǔ kuài qián."},
    {s:"___ 衣服很漂亮。", hint:"Những bộ quần áo này đẹp.", o:["这些","这本","这块"], a:0, full:"这些衣服很漂亮。", py:"Zhèxiē yīfu hěn piàoliang."}
  ],
  tr:[
    {vi:"Tôi có bốn người bạn.", t:"我 有 四 个 朋友 。", x:["本","是"], py:"Wǒ yǒu sì ge péngyou."},
    {vi:"Quả táo này to.", t:"这 个 苹果 很 大 。", x:["本","是"], py:"Zhège píngguǒ hěn dà."},
    {vi:"Cái ghế kia bao nhiêu tiền?", t:"那 个 椅子 多少 钱 ？", alt:["那个椅子多少钱"], x:["几","本"], py:"Nàge yǐzi duōshao qián?"}
  ],
  speak:[
    {q:"这个多少钱？", qpy:"Zhège duōshao qián?", qvi:"Cái này bao nhiêu tiền?", a:"这个十块钱。", apy:"Zhège shí kuài qián.", avi:"Cái này mười đồng."},
    {q:"你有几本汉语书？", qpy:"Nǐ yǒu jǐ běn Hànyǔ shū?", qvi:"Bạn có mấy quyển sách tiếng Trung?", a:"我有三本汉语书。", apy:"Wǒ yǒu sān běn Hànyǔ shū.", avi:"Tôi có ba quyển sách tiếng Trung."},
    {q:"那个人是谁？", qpy:"Nàge rén shì shéi?", qvi:"Người kia là ai?", a:"那个人是我的老师。", apy:"Nàge rén shì wǒ de lǎoshī.", avi:"Người kia là giáo viên của tôi."}
  ],
  review:["Đếm 5 đồ vật trong phòng bằng 个 hoặc 本.","Hỏi giá một món đồ và trả lời.","Vì sao nói 两个人 mà không nói 二个人?","这个 đọc thế nào?"]
}
];

// Sửa: bỏ câu điền từ bị đánh dấu skip
GROUPS.forEach(g => { g.fill = g.fill.filter(f => !f.skip); });
// Sửa câu nói mẫu dùng từ ngoài phạm vi
(function(){
  const F = GROUPS.find(g=>g.id==="F");
  F.speak[2] = {q:"你有狗吗？", qpy:"Nǐ yǒu gǒu ma?", qvi:"Bạn có chó không?", a:"我有狗。/ 我没有狗。", apy:"Wǒ yǒu gǒu. / Wǒ méiyǒu gǒu.", avi:"Tôi có chó. / Tôi không có chó."};
  const K = GROUPS.find(g=>g.id==="K");
  K.speak[0] = {q:"我很好，你呢？", qpy:"Wǒ hěn hǎo, nǐ ne?", qvi:"Tôi khỏe, còn bạn?", a:"我很好，谢谢！", apy:"Wǒ hěn hǎo, xièxie!", avi:"Tôi khỏe, cảm ơn!"};
})();

// ───────────────────────── ÔN TẬP TỔNG HỢP
const FINAL = {
  matchPool:["学生","老师","医生","朋友","汉语","米饭","苹果","电脑","商店","医院","学校","今天","明天","昨天","喜欢","认识","漂亮","高兴","衣服","桌子","飞机","天气","女儿","儿子"],
  mcq:[
    {q:"“Tôi rất vui.”", o:["我是很高兴。","我很高兴。","我高兴很。"], a:1, e:"Nhóm C: không dùng 是 trước tính từ."},
    {q:"“Nhà tôi có năm người.”", o:["我家是五个人。","我家有五个人。","我家在五个人。"], a:1, e:"Nhóm F: 有."},
    {q:"“Tôi làm việc ở bệnh viện.”", o:["我工作在医院。","我在医院工作。","我医院在工作。"], a:1, e:"Nhóm H: 在 + nơi + V."},
    {q:"“Bạn muốn ăn gì?”", o:["你想吃什么？","你想吃什么吗？","什么你想吃？"], a:0, e:"Nhóm D + J."},
    {q:"“Ngày mai 9 giờ sáng tôi đi máy bay đến Bắc Kinh.”", o:["我明天上午九点坐飞机去北京。","我坐飞机去北京明天上午九点。","我明天九点上午去北京坐飞机。"], a:0, e:"Nhóm E + G: thời gian trước, lớn trước nhỏ; phương tiện trước 去."},
    {q:"“Hôm qua tôi không xem phim.”", o:["昨天我不看电影。","昨天我没看电影。","昨天我看没电影。"], a:1, e:"Nhóm K: việc đã qua dùng 没."},
    {q:"“Quyển sách kia là của ai?”", o:["那本书是谁的？","那个书是谁？","那本书是谁吗？"], a:0, e:"Nhóm L + D."},
    {q:"“Tôi biết nói một chút tiếng Trung.”", o:["我想说一点儿汉语。","我会说一点儿汉语。","我会一点儿说汉语。"], a:1, e:"Nhóm J: 会 + V + 一点儿 + O."}
  ],
  fill:[
    {s:"我 ___ 是老师，我是学生。", hint:"Tôi không phải giáo viên, tôi là học sinh.", o:["不","没","吗"], a:0, full:"我不是老师，我是学生。", py:"Wǒ bú shì lǎoshī, wǒ shì xuésheng."},
    {s:"你家 ___ 哪儿？", hint:"Nhà bạn ở đâu?", o:["有","在","是"], a:1, full:"你家在哪儿？", py:"Nǐ jiā zài nǎr?"},
    {s:"今天天气 ___？", hint:"Thời tiết hôm nay thế nào?", o:["怎么样","什么","几"], a:0, full:"今天天气怎么样？", py:"Jīntiān tiānqì zěnmeyàng?"},
    {s:"我买了五 ___ 苹果。", hint:"Tôi đã mua năm quả táo.", o:["本","块","个"], a:2, full:"我买了五个苹果。", py:"Wǒ mǎile wǔ ge píngguǒ."},
    {s:"我们 ___ 喜欢看电影。", hint:"Chúng tôi đều thích xem phim.", o:["都","和","很"], a:0, full:"我们都喜欢看电影。", py:"Wǒmen dōu xǐhuan kàn diànyǐng."},
    {s:"他 ___ 认识我。", hint:"Anh ấy không quen tôi.", o:["没","不","吗"], a:1, full:"他不认识我。", py:"Tā bú rènshi wǒ."}
  ],
  order:[
    {s:"我 爸爸 在 医院 工作 。", py:"Wǒ bàba zài yīyuàn gōngzuò.", vi:"Bố tôi làm việc ở bệnh viện."},
    {s:"你 明天 能 来 我 家 吗 ？", py:"Nǐ míngtiān néng lái wǒ jiā ma?", vi:"Ngày mai bạn đến nhà tôi được không?"},
    {s:"我 想 去 商店 买 水果 。", py:"Wǒ xiǎng qù shāngdiàn mǎi shuǐguǒ.", vi:"Tôi muốn đi cửa hàng mua hoa quả."},
    {s:"桌子 上 有 三 本 书 。", py:"Zhuōzi shang yǒu sān běn shū.", vi:"Trên bàn có ba quyển sách."},
    {s:"今天 是 我 女儿 的 生日 。", skip:true},
    {s:"我们 都 喜欢 喝 茶 。", py:"Wǒmen dōu xǐhuan hē chá.", vi:"Chúng tôi đều thích uống trà."},
    {s:"现在 下午 四 点 。", py:"Xiànzài xiàwǔ sì diǎn.", vi:"Bây giờ là 4 giờ chiều."}
  ],
  fix:[
    {wrong:"我是很好。", o:["我很好。","我是好。","我好是。"], a:0, e:"Không dùng 是 trước tính từ."},
    {wrong:"我不有电脑。", o:["我没电脑有。","我没有电脑。","我有不电脑。"], a:1, e:"Phủ định của 有 là 没有."},
    {wrong:"我学习汉语在学校。", o:["我在学校学习汉语。","在学校学习我汉语。","我学习在学校汉语。"], a:0, e:"在 + nơi chốn đứng trước động từ."},
    {wrong:"你去哪儿吗？", o:["你去吗哪儿？","你去哪儿？","你哪儿去吗？"], a:1, e:"Có từ để hỏi thì bỏ 吗."},
    {wrong:"我去学校明天。", o:["我明天去学校。","明天学校我去。","我去明天学校。"], a:0, e:"Thời gian đứng trước động từ."},
    {wrong:"我会他。", o:["我能他。","我认识他。","我想他会。"], a:1, e:"Quen biết người dùng 认识."}
  ],
  tr:[
    {vi:"Tôi tên là Vương Phương, tôi là học sinh.", t:"我 叫 王方 ， 我 是 学生 。", x:["有","在"], py:"Wǒ jiào Wáng Fāng, wǒ shì xuésheng."},
    {vi:"Mẹ tôi không có ở nhà.", t:"我 妈妈 不 在 家 。", alt:["我的妈妈不在家"], x:["没","有"], py:"Wǒ māma bú zài jiā."},
    {vi:"Hôm nay nóng quá!", t:"今天 太 热 了 ！", x:["很","吗"], py:"Jīntiān tài rè le!"},
    {vi:"Bạn có mấy quyển sách?", t:"你 有 几 本 书 ？", x:["个","吗"], py:"Nǐ yǒu jǐ běn shū?"},
    {vi:"Chủ nhật tôi muốn đi xem phim.", skip:true},
    {vi:"Tôi đi taxi về nhà.", t:"我 坐 出租车 回 家 。", x:["去","在"], py:"Wǒ zuò chūzūchē huí jiā."}
  ],
  keywords:[
    {k:["我","想","喝"], a:"我想喝水。", apy:"Wǒ xiǎng hē shuǐ.", avi:"Tôi muốn uống nước."},
    {k:["妈妈","在","医院"], a:"妈妈在医院工作。", apy:"Māma zài yīyuàn gōngzuò.", avi:"Mẹ làm việc ở bệnh viện."},
    {k:["明天","去","商店","买"], a:"我明天去商店买东西。", apy:"Wǒ míngtiān qù shāngdiàn mǎi dōngxi.", avi:"Ngày mai tôi đi cửa hàng mua đồ."},
    {k:["桌子","上","有"], a:"桌子上有一个杯子。", apy:"Zhuōzi shang yǒu yí ge bēizi.", avi:"Trên bàn có một cái cốc."},
    {k:["今天","冷"], a:"今天很冷。", apy:"Jīntiān hěn lěng.", avi:"Hôm nay lạnh."},
    {k:["你","会","吗"], a:"你会说汉语吗？", apy:"Nǐ huì shuō Hànyǔ ma?", avi:"Bạn biết nói tiếng Trung không?"}
  ],
  reflex:[
    {q:"你叫什么名字？", qpy:"Nǐ jiào shénme míngzi?", a:"我叫……。", apy:"Wǒ jiào …"},
    {q:"你是学生吗？", qpy:"Nǐ shì xuésheng ma?", a:"我是学生。/ 我不是学生。", apy:"Wǒ shì xuésheng. / Wǒ bú shì xuésheng."},
    {q:"你家有几个人？", qpy:"Nǐ jiā yǒu jǐ ge rén?", a:"我家有……个人。", apy:"Wǒ jiā yǒu … ge rén."},
    {q:"你家在哪儿？", qpy:"Nǐ jiā zài nǎr?", a:"我家在……。", apy:"Wǒ jiā zài …"},
    {q:"你会说汉语吗？", qpy:"Nǐ huì shuō Hànyǔ ma?", a:"我会说一点儿汉语。", apy:"Wǒ huì shuō yìdiǎnr Hànyǔ."},
    {q:"今天星期几？", qpy:"Jīntiān xīngqī jǐ?", a:"今天星期……。", apy:"Jīntiān xīngqī …"},
    {q:"现在几点？", qpy:"Xiànzài jǐ diǎn?", a:"现在……点。", apy:"Xiànzài … diǎn."},
    {q:"今天天气怎么样？", qpy:"Jīntiān tiānqì zěnmeyàng?", a:"今天很热。/ 今天很冷。", apy:"Jīntiān hěn rè. / Jīntiān hěn lěng."},
    {q:"你喜欢喝茶吗？", qpy:"Nǐ xǐhuan hē chá ma?", a:"我喜欢喝茶。/ 我不喜欢喝茶。", apy:"Wǒ xǐhuan hē chá. / Wǒ bù xǐhuan hē chá."},
    {q:"你想去哪儿？", qpy:"Nǐ xiǎng qù nǎr?", a:"我想去北京。", apy:"Wǒ xiǎng qù Běijīng."},
    {q:"你明天做什么？", qpy:"Nǐ míngtiān zuò shénme?", a:"我明天去学校学习汉语。", apy:"Wǒ míngtiān qù xuéxiào xuéxí Hànyǔ."},
    {q:"你有电脑吗？", qpy:"Nǐ yǒu diànnǎo ma?", a:"我有电脑。/ 我没有电脑。", apy:"Wǒ yǒu diànnǎo. / Wǒ méiyǒu diànnǎo."}
  ],
  dialogues:[
    {title:"Hội thoại 1 · Làm quen", lines:[
      ["A","你好！","Nǐ hǎo!","Xin chào!"],
      ["B","你好！你叫什么名字？","Nǐ hǎo! Nǐ jiào shénme míngzi?","Xin chào! Bạn tên là gì?"],
      ["A","我叫王方。你呢？","Wǒ jiào Wáng Fāng. Nǐ ne?","Mình tên là Vương Phương. Còn bạn?"],
      ["B","我叫李月。我是学生，你是老师吗？","Wǒ jiào Lǐ Yuè. Wǒ shì xuésheng, nǐ shì lǎoshī ma?","Mình tên là Lý Nguyệt. Mình là học sinh, bạn là giáo viên à?"],
      ["A","不是，我是医生。你在哪儿学习汉语？","Bú shì, wǒ shì yīshēng. Nǐ zài nǎr xuéxí Hànyǔ?","Không phải, mình là bác sĩ. Bạn học tiếng Trung ở đâu?"],
      ["B","我在北京学习汉语。","Wǒ zài Běijīng xuéxí Hànyǔ.","Mình học tiếng Trung ở Bắc Kinh."],
      ["A","认识你很高兴！","Rènshi nǐ hěn gāoxìng!","Rất vui được làm quen với bạn!"],
      ["B","谢谢！再见！","Xièxie! Zàijiàn!","Cảm ơn! Tạm biệt!"]
    ]},
    {title:"Hội thoại 2 · Mua đồ", lines:[
      ["A","你好，这个杯子多少钱？","Nǐ hǎo, zhège bēizi duōshao qián?","Chào chị, cái cốc này bao nhiêu tiền?"],
      ["B","二十八块。","Èrshíbā kuài.","Hai mươi tám đồng."],
      ["A","那个呢？","Nàge ne?","Còn cái kia?"],
      ["B","那个三十块。","Nàge sānshí kuài.","Cái kia ba mươi đồng."],
      ["A","我买这个。谢谢！","Wǒ mǎi zhège. Xièxie!","Tôi mua cái này. Cảm ơn!"],
      ["B","不客气。","Bú kèqi.","Không có gì."]
    ]},
    {title:"Hội thoại 3 · Hẹn gặp", lines:[
      ["A","喂，你现在在哪儿？","Wéi, nǐ xiànzài zài nǎr?","A lô, bây giờ bạn đang ở đâu?"],
      ["B","我在家。","Wǒ zài jiā.","Mình ở nhà."],
      ["A","明天下午你能来学校吗？","Míngtiān xiàwǔ nǐ néng lái xuéxiào ma?","Chiều mai bạn đến trường được không?"],
      ["B","能。几点？","Néng. Jǐ diǎn?","Được. Mấy giờ?"],
      ["A","三点。我们去商店买东西，怎么样？","Sān diǎn. Wǒmen qù shāngdiàn mǎi dōngxi, zěnmeyàng?","Ba giờ. Chúng mình đi cửa hàng mua đồ, thế nào?"],
      ["B","好！明天见！","Hǎo! Míngtiān jiàn!","Được! Mai gặp nhé!"]
    ]}
  ],
  topics:[
    {t:"Giới thiệu bản thân", frame:["我叫……。","我是……（学生 / 老师 / 医生）。","我……岁。","我在……学习 / 工作。","我会说一点儿汉语。"]},
    {t:"Gia đình", frame:["我家有……个人。","……、……和我。","我爸爸是……，他在……工作。","我妈妈是……。","我很爱我的家。"]},
    {t:"Học tập", frame:["我在……学习汉语。","我们的老师是……人。","我喜欢……。","我会写……个汉语字。（字 = chữ）","我想去中国。"]},
    {t:"Thời gian", frame:["今天……月……号，星期……。","现在……点。","昨天我……。","明天我想……。"]},
    {t:"Sinh hoạt hằng ngày", frame:["我上午……。","中午我在……吃米饭。","下午我去……。","我……点睡觉。"]}
  ],
  rubric:[
    ["Phát âm / pinyin","Sai nhiều thanh điệu, người nghe khó hiểu","Phần lớn đúng thanh, đôi chỗ sai","Đúng thanh điệu, đọc rõ, có biến điệu 不/一"],
    ["Ghi nhớ từ vựng","Nhớ dưới một nửa từ của bài","Nhớ phần lớn từ khi có gợi ý","Nhớ và dùng được từ không cần gợi ý"],
    ["Trật tự từ","Thường đặt sai vị trí thời gian, 在, 不","Đúng ở câu ngắn","Đúng cả ở câu có thời gian + nơi chốn"],
    ["Dùng đúng cấu trúc","Nhầm 是 / 有 / 在, 不 / 没","Đúng phần lớn, đôi khi nhầm","Dùng đúng, tự sửa được lỗi"],
    ["Trả lời bằng câu hoàn chỉnh","Chủ yếu trả lời 1 từ","Trả lời câu ngắn khi được nhắc","Luôn trả lời cả câu"],
    ["Tự nói không nhìn mẫu","Chưa nói được nếu không có khung","Nói 2–3 câu với khung gợi ý","Nói 4–5 câu liền mạch không cần khung"]
  ]
};
FINAL.order = FINAL.order.filter(x=>!x.skip);
FINAL.tr = FINAL.tr.filter(x=>!x.skip);

// Luyện nghe thanh điệu bằng bản ghi người thật
const TONES = [
  {w:"买", o:["mǎi","mài","mái"]},
  {w:"是", o:["shì","shí","sì"]},
  {w:"十", o:["shí","shì","sí"]},
  {w:"四", o:["sì","shì","sí"]},
  {w:"水", o:["shuǐ","shuí","shuì"]},
  {w:"茶", o:["chá","chà","chǎ"]},
  {w:"热", o:["rè","lè","rě"]},
  {w:"冷", o:["lěng","léng","rěng"]},
  {w:"去", o:["qù","qǔ","jù"]},
  {w:"七", o:["qī","qí","jī"]},
  {w:"九", o:["jiǔ","jiù","qiǔ"]},
  {w:"喝", o:["hē","hé","hè"]},
  {w:"猫", o:["māo","máo","mǎo"]},
  {w:"字", o:["zì","cì","zǐ"]},
  {w:"老师", o:["lǎoshī","láoshī","lǎoshí"]},
  {w:"学生", o:["xuésheng","xuěsheng","xuéshēng"]},
  {w:"汉语", o:["Hànyǔ","Hányǔ","Hànyù"]},
  {w:"米饭", o:["mǐfàn","mífàn","mǐfān"]},
  {w:"朋友", o:["péngyou","pěngyou","pèngyou"]},
  {w:"商店", o:["shāngdiàn","shàngdiàn","sāngdiàn"]}
];

const ROUTE = [
  {b:"Buổi 1", g:["A","B","C","D"], d:"Câu cơ bản, 是, câu tính từ, câu hỏi và phủ định."},
  {b:"Buổi 2", g:["F","E","L","K"], d:"有, thời gian – ngày tháng – số lượng, lượng từ và cụm danh từ, phó từ – trợ từ."},
  {b:"Buổi 3", g:["H","G","J","I"], d:"在, câu liên động, động từ năng nguyện; 给 là phần mở rộng."},
  {b:"Buổi 4", g:["final"], d:"Ôn tập tích hợp, hội thoại và bài kiểm tra phản xạ nói."}
];

if (typeof module !== "undefined") module.exports = {VOCAB, GROUPS, FINAL, TONES, ROUTE};
