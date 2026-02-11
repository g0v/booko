
import { Book, Documentary } from './types';

// 輔助函式：產生國資圖搜尋連結
const getNlpiLink = (title: string) => `https://ebook.nlpi.edu.tw/search?search_field=TI&search_input=${encodeURIComponent(title)}`;
// 輔助函式：產生誠品搜尋連結
const getEsliteSearch = (title: string) => `https://www.eslite.com/Search?q=${encodeURIComponent(title)}`;
// 輔助函式：產生金石堂搜尋連結
const getKingstoneSearch = (title: string) => `https://www.kingstone.com.tw/search/search?q=${encodeURIComponent(title)}`;

export const BOOKS: Book[] = [
  // 初階：從聽故事開始 (#歷史小白友善)
  {
    id: 'b1',
    title: '少年臺灣史',
    author: '周婉窈',
    description: '以簡明易懂的語言，梳理了臺灣從史前時期到現代的完整脈絡。',
    coverImage: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/083/43/0010834309.jpg&v=5d7b5f19k&w=348&h=348',
    level: 'basic',
    tags: ['通論', '日治', '戰後'],
    links: {
      books: 'https://www.books.com.tw/products/0010834309',
      eslite: getEsliteSearch('少年臺灣史'),
      kingstone: getKingstoneSearch('少年臺灣史'),
      nlpi: getNlpiLink('少年臺灣史')
    }
  },
  {
    id: 'b2',
    title: '臺灣歷史圖說',
    author: '周婉窈',
    description: '臺灣史研究的經典入門書，提供宏觀且紮實的歷史觀察框架。',
    coverImage: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/002/40/0010024026.jpg&v=5d7b5f19k&w=348&h=348',
    level: 'basic',
    tags: ['通論'],
    links: {
      books: 'https://www.books.com.tw/products/0010024026',
      eslite: getEsliteSearch('臺灣歷史圖說'),
      kingstone: getKingstoneSearch('臺灣歷史圖說'),
      nlpi: getNlpiLink('臺灣歷史圖說')
    }
  },
  {
    id: 'b3',
    title: '台灣最好的時刻1977-1987',
    author: '吳乃德',
    description: '探討台灣民主轉型的關鍵十年，民族記憶與美麗島精神的覺醒。',
    coverImage: 'https://images.unsplash.com/photo-1524578271613-d550eabc6de0?q=80&w=400',
    level: 'basic',
    tags: ['民主運動', '戰後'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/台灣最好的時刻',
      eslite: getEsliteSearch('台灣最好的時刻'),
      kingstone: getKingstoneSearch('台灣最好的時刻'),
      nlpi: getNlpiLink('台灣最好的時刻')
    }
  },
  {
    id: 'b4',
    title: '義光教會相關人物訪談錄',
    author: '陳儀深等',
    description: '2024年最新出版，透過第一手访談紀錄，還原義光教會在民主運動中的關鍵角色。',
    coverImage: 'https://images.unsplash.com/photo-1548625361-125020a2f43d?q=80&w=400',
    level: 'basic',
    tags: ['民主運動', '戰後'],
    links: {
      books: 'https://www.books.com.tw/search/query/key/義光教會相關人物訪談錄',
      eslite: getEsliteSearch('義光教會相關人物訪談錄'),
      kingstone: getKingstoneSearch('義光教會相關人物訪談錄'),
      nlpi: getNlpiLink('義光教會相關人物訪談錄')
    }
  },
  {
    id: 'b5',
    title: '一個春天的童話：小說亮均、亭均',
    author: '李敏勇',
    description: '透過文學筆觸講述二二八與白色恐怖下的家族傷痕與希望。',
    coverImage: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=400',
    level: 'basic',
    tags: ['民主運動', '文學'],
    links: {
      books: 'https://www.books.com.tw/search/query/key/一個春天的童話 李敏勇',
      eslite: getEsliteSearch('一個春天的童話'),
      kingstone: getKingstoneSearch('一個春天的童話'),
      nlpi: getNlpiLink('一個春天的童話')
    }
  },
  {
    id: 'b6',
    title: '三代臺灣人：百年追求的現實與理想',
    author: '李筱峰',
    description: '跨越三代人的生命敘事，呈現台灣近代史的劇烈變動與追求。',
    coverImage: 'https://www.books.com.tw/img/001/077/31/0010773174.jpg',
    level: 'basic',
    tags: ['日治', '戰後'],
    links: {
      books: 'https://www.books.com.tw/products/0010773174',
      eslite: getEsliteSearch('三代臺灣人'),
      kingstone: getKingstoneSearch('三代臺灣人'),
      nlpi: getNlpiLink('三代臺灣人')
    }
  },
  {
    id: 'b7',
    title: '二二八反抗運動：台灣爭取民主之路',
    author: '黃惠君',
    description: '重現二二八事件中的民間反抗力量，反思台灣民主化的根源。',
    coverImage: 'https://www.books.com.tw/img/001/091/67/0010916707.jpg',
    level: 'basic',
    tags: ['日治', '戰後'],
    links: {
      books: 'https://www.books.com.tw/products/0010916707',
      eslite: getEsliteSearch('二二八反抗運動'),
      kingstone: getKingstoneSearch('二二八反抗運動'),
      nlpi: getNlpiLink('二二八反抗運動')
    }
  },
  {
    id: 'b8',
    title: '無法送達的遺書',
    author: '呂蒼一',
    description: '記那些在恐怖年代失落的人，透過遺書重建受難者的面貌與心聲。',
    coverImage: 'https://www.books.com.tw/img/001/092/65/0010926548.jpg',
    level: 'basic',
    tags: ['日治', '白恐', '轉型正義'],
    links: {
      books: 'https://www.books.com.tw/products/0010926548',
      eslite: getEsliteSearch('無法送達的遺書'),
      kingstone: getKingstoneSearch('無法送達的遺書'),
      nlpi: getNlpiLink('無法送達的遺書')
    }
  },
  {
    id: 'b9',
    title: '一甲子的未亡人：王培五與她的6個子女',
    author: '呂培苓',
    description: '講述王培五女士在白色恐怖後的堅韌生命故事。',
    coverImage: 'https://www.books.com.tw/img/001/067/63/0010676365.jpg',
    level: 'basic',
    tags: ['日治', '白恐'],
    links: {
      books: 'https://www.books.com.tw/products/0010676365',
      eslite: getEsliteSearch('一甲子的未亡人'),
      kingstone: getKingstoneSearch('一甲子的未亡人'),
      nlpi: getNlpiLink('一甲子的未亡人')
    }
  },
  {
    id: 'b10',
    title: '自治之夢：日治時期到二二八',
    author: '陳翠蓮',
    description: '探討台灣人民爭取政治主體性的漫長夢想。',
    coverImage: 'https://www.books.com.tw/img/001/086/47/0010864745.jpg',
    level: 'basic',
    tags: ['日治', '民主運動'],
    links: {
      books: 'https://www.books.com.tw/products/0010864745',
      eslite: getEsliteSearch('自治之夢'),
      kingstone: getKingstoneSearch('自治之夢'),
      nlpi: getNlpiLink('自治之夢')
    }
  },
  {
    id: 'b11',
    title: '百年追求：台灣民主運動的故事',
    author: '陳翠蓮、吳乃德、胡慧玲',
    description: '全景式紀錄台灣民主化的艱辛歷程。',
    coverImage: 'https://www.books.com.tw/img/001/061/12/0010611223.jpg',
    level: 'basic',
    tags: ['日治', '戰後', '民主運動'],
    links: {
      books: 'https://www.books.com.tw/products/0010611223',
      eslite: getEsliteSearch('百年追求'),
      kingstone: getKingstoneSearch('百年追求'),
      nlpi: getNlpiLink('百年追求')
    }
  },
  {
    id: 'b12',
    title: '臺灣史是什麼？',
    author: '吳密察',
    description: '由歷史權威吳密察帶路，重新定義台灣史的視界。',
    coverImage: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=400',
    level: 'basic',
    tags: ['日治', '通論'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/臺灣史是什麼',
      eslite: getEsliteSearch('臺灣史是什麼'),
      kingstone: getKingstoneSearch('臺灣史是什麼'),
      nlpi: getNlpiLink('臺灣史是什麼')
    }
  },
  {
    id: 'b13',
    title: '茶金歲月',
    author: '廖運潘',
    description: '細述北埔姜家在茶業盛世中的起落，展現戰後社會真實面貌。',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400',
    level: 'basic',
    tags: ['文學', '戰後'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/茶金歲月',
      eslite: getEsliteSearch('茶金歲月'),
      kingstone: getKingstoneSearch('茶金歲月'),
      nlpi: getNlpiLink('茶金歲月')
    }
  },
  {
    id: 'b14',
    title: '此地即世界',
    author: 'StoryStudio',
    description: '從全球視野重新解讀台灣歷史中的重要事件。',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400',
    level: 'basic',
    tags: ['通論'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/此地即世界',
      eslite: getEsliteSearch('此地即世界'),
      kingstone: getKingstoneSearch('此地即世界'),
      nlpi: getNlpiLink('此地即世界')
    }
  },

  // 中階：原來是這樣 (#看懂社會的形狀)
  {
    id: 'i1',
    title: '台灣人三部曲',
    author: '鍾肇政',
    description: '文學巨擘鍾肇政的代表作，刻畫台灣人在不同政權更迭下的生命韌性。',
    coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400',
    level: 'intermediate',
    tags: ['文學', '日治', '戰後'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/台灣人三部曲',
      eslite: getEsliteSearch('台灣人三部曲'),
      kingstone: getKingstoneSearch('台灣人三部曲'),
      nlpi: getNlpiLink('台灣人三部曲')
    }
  },
  {
    id: 'i2',
    title: '亞細亞的孤兒',
    author: '吳濁流',
    description: '描繪日治時期台灣知識分子的身分掙扎與矛盾。',
    coverImage: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=400',
    level: 'intermediate',
    tags: ['文學', '日治'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/亞細亞的孤兒',
      eslite: getEsliteSearch('亞細亞的孤兒'),
      kingstone: getKingstoneSearch('亞細亞的孤兒'),
      nlpi: getNlpiLink('亞細亞的孤兒')
    }
  },
  {
    id: 'i3',
    title: '台灣人四百年史',
    author: '史明',
    description: '2014年修訂版。從被統治者的視角出發，重新建構台灣民族的歷史主體性。',
    coverImage: 'https://www.books.com.tw/img/001/076/86/0010768686.jpg',
    level: 'intermediate',
    tags: ['通論', '日治', '戰後'],
    links: {
      books: 'https://www.books.com.tw/products/0010768686',
      eslite: getEsliteSearch('台灣人四百年史'),
      kingstone: getKingstoneSearch('台灣人四百年史'),
      nlpi: getNlpiLink('台灣人四百年史')
    }
  },
  {
    id: 'i4',
    title: '被出賣的台灣',
    author: 'George H. Kerr',
    description: '揭露二二八事件真相的重量級紀錄，深刻分析當時的地緣政治。',
    coverImage: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=400',
    level: 'intermediate',
    tags: ['通論', '戰後', '轉型正義'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/被出賣的台灣',
      eslite: getEsliteSearch('被出賣的台灣'),
      kingstone: getKingstoneSearch('被出賣的台灣'),
      nlpi: getNlpiLink('被出賣的台灣')
    }
  },
  {
    id: 'i5',
    title: '讓過去成為此刻：台灣白色恐怖小說選',
    author: '胡淑雯、童偉格',
    description: '透過文學選集，讓歷史的痛點在文字中甦醒。',
    coverImage: 'https://www.books.com.tw/img/001/084/56/0010845692.jpg',
    level: 'intermediate',
    tags: ['日治', '文學', '白恐'],
    links: {
      books: 'https://www.books.com.tw/products/0010845692',
      eslite: getEsliteSearch('讓過去成為此刻'),
      kingstone: getKingstoneSearch('讓過去成為此刻'),
      nlpi: getNlpiLink('讓過去成為此刻')
    }
  },
  {
    id: 'i6',
    title: '天猶未光：二二八事件的真相',
    author: '薛化元',
    description: '深入探究二二八事件的歷史真相、紀念與責任究責。',
    coverImage: 'https://www.books.com.tw/img/001/074/45/0010744574.jpg',
    level: 'intermediate',
    tags: ['日治', '戰後', '轉型正義'],
    links: {
      books: 'https://www.books.com.tw/products/0010744574',
      eslite: getEsliteSearch('天猶未光'),
      kingstone: getKingstoneSearch('天猶未光'),
      nlpi: getNlpiLink('天猶未光')
    }
  },
  {
    id: 'i7',
    title: '轉型正義之路：島嶼的過去與未來',
    author: '周婉窈',
    description: '2022年出版。對台灣轉型正義進程的深刻反思與展望。',
    coverImage: 'https://www.books.com.tw/img/001/094/40/0010944069.jpg',
    level: 'intermediate',
    tags: ['日治', '戰後', '轉型正義'],
    links: {
      books: 'https://www.books.com.tw/products/0010944069',
      eslite: getEsliteSearch('轉型正義之路'),
      kingstone: getKingstoneSearch('轉型正義之路'),
      nlpi: getNlpiLink('轉型正義之路')
    }
  },
  {
    id: 'i8',
    title: '台海・冷戰・蔣介石',
    author: '林孝庭',
    description: '解密檔案中消失的台灣史，解析國際地緣政治如何決定台灣命運。',
    coverImage: 'https://images.unsplash.com/photo-1491153041158-9454e583b7ad?q=80&w=400',
    level: 'intermediate',
    tags: ['日治', '戰後', '通論'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/台海冷戰蔣介石',
      eslite: getEsliteSearch('台海冷戰蔣介石'),
      kingstone: getKingstoneSearch('台海冷戰蔣介石'),
      nlpi: getNlpiLink('台海冷戰蔣介石')
    }
  },
  {
    id: 'i9',
    title: '福爾摩沙紀事',
    author: '馬偕',
    description: '馬偕博士親筆記錄在台傳教見聞。',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400',
    level: 'intermediate',
    tags: ['通論'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/福爾摩沙紀事',
      eslite: getEsliteSearch('福爾摩沙紀事'),
      kingstone: getKingstoneSearch('福爾摩沙紀事'),
      nlpi: getNlpiLink('福爾摩沙紀事')
    }
  },

  // 進階：思辨大補帖 (#直視歷史痛點)
  {
    id: 'a1',
    title: '記憶與遺忘的鬥爭',
    author: '台灣民間真相與和解促進會',
    description: '臺灣轉型正義階段報告，是直視威權壓迫結構的必讀教材。',
    coverImage: 'https://images.unsplash.com/photo-1543003923-999264270423?q=80&w=400',
    level: 'advanced',
    tags: ['轉型正義', '日治', '戰後'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/記憶與遺忘的鬥爭',
      eslite: getEsliteSearch('記憶與遺忘的鬥爭'),
      kingstone: getKingstoneSearch('記憶與遺忘的鬥爭'),
      nlpi: getNlpiLink('記憶與遺忘的鬥爭')
    }
  },
  {
    id: 'a2',
    title: '帝國主義下的臺灣',
    author: '矢內原忠雄',
    description: '經典的殖民經濟分析，揭露帝國主義如何改造台灣社會結構。',
    coverImage: 'https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?q=80&w=400',
    level: 'advanced',
    tags: ['通論', '日治'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/帝國主義下的臺灣',
      eslite: getEsliteSearch('帝國主義下的臺灣'),
      kingstone: getKingstoneSearch('帝國主義下的臺灣'),
      nlpi: getNlpiLink('帝國主義下的臺灣')
    }
  },
  {
    id: 'a3',
    title: '台灣經濟四百年',
    author: '吳聰敏',
    description: '從經濟史角度剖析台灣演變，見解深刻。',
    coverImage: 'https://www.books.com.tw/img/001/094/91/0010949161.jpg',
    level: 'advanced',
    tags: ['通論', '戰後'],
    links: {
      books: 'https://www.books.com.tw/products/0010949161',
      eslite: getEsliteSearch('台灣經濟四百年'),
      kingstone: getKingstoneSearch('台灣經濟四百年'),
      nlpi: getNlpiLink('台灣經濟四百年')
    }
  },
  {
    id: 'a4',
    title: '他們沒在寫小說的時候',
    author: '朱宥勳',
    description: '戒嚴台灣小說家群像，探討文學與政治的角力。',
    coverImage: 'https://www.books.com.tw/img/001/090/06/0010900615.jpg',
    level: 'advanced',
    tags: ['日治', '文學', '戰後'],
    links: {
      books: 'https://www.books.com.tw/products/0010900615',
      eslite: getEsliteSearch('他們沒在寫小說的時候'),
      kingstone: getKingstoneSearch('他們沒在寫小說的時候'),
      nlpi: getNlpiLink('他們沒在寫小說的時候')
    }
  },
  {
    id: 'a5',
    title: '重構二二八：戰後美中體制',
    author: '陳翠蓮',
    description: '透過解密檔案，重新解讀二二八事件的國際與體制背景。',
    coverImage: 'https://www.books.com.tw/img/001/074/39/0010743933.jpg',
    level: 'advanced',
    tags: ['日治', '戰後', '轉型正義'],
    links: {
      books: 'https://www.books.com.tw/products/0010743933',
      eslite: getEsliteSearch('重構二二八'),
      kingstone: getKingstoneSearch('重構二二八'),
      nlpi: getNlpiLink('重構二二八')
    }
  },
  {
    id: 'a6',
    title: '激越與死滅：二二八世代民主路',
    author: '黃惠君',
    description: '深度紀錄二二八世代精英的追求與結局。',
    coverImage: 'https://www.books.com.tw/img/001/074/33/0010743399.jpg',
    level: 'advanced',
    tags: ['日治', '民主運動'],
    links: {
      books: 'https://www.books.com.tw/products/0010743399',
      eslite: getEsliteSearch('激越與死滅'),
      kingstone: getKingstoneSearch('激越與死滅'),
      nlpi: getNlpiLink('激越與死滅')
    }
  },
  {
    id: 'a7',
    title: '政治檔案會說話：自由時代公民指南',
    author: '陳昱齊',
    description: '教導如何閱讀與判讀政治檔案，是實踐轉型正義的工具書。',
    coverImage: 'https://www.books.com.tw/img/001/088/97/0010889799.jpg',
    level: 'advanced',
    tags: ['日治', '戰後', '轉型正義'],
    links: {
      books: 'https://www.books.com.tw/products/0010889799',
      eslite: getEsliteSearch('政治檔案會說話'),
      kingstone: getKingstoneSearch('政治檔案會說話'),
      nlpi: getNlpiLink('政治檔案會說話')
    }
  },
  {
    id: 'a8',
    title: '永遠不再：威權體制下的壓迫與抵抗',
    author: '國家人權博物館',
    description: '2023年出版。權威的人權歷史研究報告。',
    coverImage: 'https://images.unsplash.com/photo-1544648156-5388451882c5?q=80&w=400',
    level: 'advanced',
    tags: ['日治', '白恐', '轉型正義'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/永遠不再',
      eslite: getEsliteSearch('永遠不再'),
      kingstone: getKingstoneSearch('永遠不再'),
      nlpi: getNlpiLink('永遠不再')
    }
  }
];

export const CHILDREN_BOOKS: Book[] = [
  {
    id: 'c1',
    title: '愛唱歌的小熊',
    author: '吳易蓁',
    description: '以柔和的筆觸講述受難者阿寬的故事，帶領孩子認識歷史傷痕。',
    coverImage: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/068/36/0010683679.jpg&v=55b7468bk&w=348&h=348',
    level: 'basic',
    tags: ['文學', '白恐', '轉型正義'],
    links: {
      books: 'https://search.books.com.tw/search/query/key/愛唱歌的小熊',
      eslite: getEsliteSearch('愛唱歌的小熊'),
      kingstone: getKingstoneSearch('愛唱歌的小熊'),
      nlpi: getNlpiLink('愛唱歌的小熊')
    }
  }
];

export const DOCUMENTARIES: Documentary[] = [
  {
    id: 'd1',
    title: '牽阮的手',
    director: '莊益增、顏蘭權',
    year: '2010',
    description: '以田朝明醫師與田孟淑女士的愛情故事為線索，交織出台灣民主運動歷程。',
    thumbnail: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000'
  }
];
