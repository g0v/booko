
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BookCard from './components/BookCard';
import DocCard from './components/DocCard';
import { BOOKS, CHILDREN_BOOKS, DOCUMENTARIES } from './constants';
import { BookMarked, GraduationCap, Compass, Palette, Star, Pencil, Quote, X, Hash, Search } from 'lucide-react';
import { Book, ReadingLevel } from './types';

const BooksView: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const filteredBooks = useMemo(() => {
    if (!filterTag) return BOOKS;
    return BOOKS.filter(book => book.tags?.includes(filterTag));
  }, [filterTag]);

  const basicBooks = filteredBooks.filter(b => b.level === 'basic');
  const intermediateBooks = filteredBooks.filter(b => b.level === 'intermediate');
  const advancedBooks = filteredBooks.filter(b => b.level === 'advanced');

  return (
    <section className="animate-in fade-in duration-700">
      {/* Intro Section - Only show when not filtering */}
      {!filterTag && (
        <div className="mb-16 bg-white/50 border border-rose-100 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-rose-100/30">
            <Quote size={120} strokeWidth={1} />
          </div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 serif mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-rose-600 rounded-full inline-block"></span>
              承接自由的家業
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed serif text-lg">
              <p>
                在這裡，我們將自由視為一份珍貴的家業。身處於權利與選擇都相對充裕的時代，我們就像是承接了一份豐厚遺產的「民主富二代」。
              </p>
              <p>
                這份遺產並非憑空而降，而是由無數前輩在歷史的轉角處，憑藉韌性與對理想的堅持，一棒接一棒傳遞至今。
              </p>
              <p className="font-bold text-stone-900">
                本站的成立，是為了讓我們不同世代能共同認識這份遺產的來歷。像在時光岩壁徒手攀登，我們在史料間尋找支點，憑藉著對真相的渴望，換取一份俯瞰當代社會的清澈視野。
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 serif mb-4">
          {filterTag ? `標籤搜尋：#${filterTag}` : '精選書單：分階補課計畫'}
        </h2>
        {!filterTag ? (
          <p className="text-stone-600 text-base leading-relaxed italic">
            「歷史是一場記憶與遺忘的鬥爭。」—— 米蘭・昆德拉
          </p>
        ) : (
          <div className="flex items-center justify-center mt-4">
            <button 
              onClick={() => setFilterTag(null)}
              className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-full text-sm font-bold shadow-md hover:bg-rose-700 transition-colors"
            >
              <X size={16} />
              清除篩選，查看全部書單
            </button>
          </div>
        )}
      </div>

      {/* 第一階段 */}
      {basicBooks.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-rose-100 pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 bg-rose-100 rounded text-rose-800">
                <Compass size={20} />
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-0.5">
                  <h3 className="text-xl font-bold text-stone-900 serif">初階：從聽故事開始</h3>
                </div>
                <p className="text-stone-500 text-xs font-medium">那些課本沒說清楚的台灣大小事</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {basicBooks.map((book) => (
              <BookCard key={book.id} book={book} onTagClick={setFilterTag} />
            ))}
          </div>
        </div>
      )}

      {/* 第二階段 */}
      {intermediateBooks.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6 border-b border-amber-100 pb-3">
            <div className="p-1.5 bg-amber-100 rounded text-amber-800">
              <BookMarked size={20} />
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-0.5">
                <h3 className="text-xl font-bold text-stone-900 serif">中階：原來是這樣</h3>
              </div>
              <p className="text-stone-500 text-xs font-medium">把零散的歷史碎片拼成大藍圖</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {intermediateBooks.map((book) => (
              <BookCard key={book.id} book={book} onTagClick={setFilterTag} />
            ))}
          </div>
        </div>
      )}

      {/* 第三階段 */}
      {advancedBooks.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6 border-b border-red-100 pb-3">
            <div className="p-1.5 bg-red-100 rounded text-red-800">
              <GraduationCap size={20} />
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-0.5">
                <h3 className="text-xl font-bold text-stone-900 serif">進階：思辨大補帖</h3>
              </div>
              <p className="text-stone-500 text-xs font-medium">練就一身史料判讀力與深度深度政經分析</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {advancedBooks.map((book) => (
              <BookCard key={book.id} book={book} onTagClick={setFilterTag} />
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {filteredBooks.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-200">
          <Search size={48} className="mx-auto text-stone-300 mb-4" />
          <p className="text-stone-500 serif text-lg">找不到與 #{filterTag} 相關的書籍，換個標籤試試看？</p>
          <button 
            onClick={() => setFilterTag(null)}
            className="mt-4 text-rose-700 font-bold hover:underline"
          >
            返回全部書單
          </button>
        </div>
      )}
    </section>
  );
};

const ChildrenView: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const filteredChildrenBooks = useMemo(() => {
    if (!filterTag) return CHILDREN_BOOKS;
    return CHILDREN_BOOKS.filter(book => book.tags?.includes(filterTag));
  }, [filterTag]);

  return (
    <section className="animate-in fade-in duration-700">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold mb-4">
          <Star size={14} fill="currentColor" />
          <span>親子共讀・歷史啟蒙</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 serif mb-4 flex items-center justify-center space-x-3">
          <Palette className="text-amber-600" />
          <span>{filterTag ? `標籤搜尋：#${filterTag}` : '兒童與青少年書房'}</span>
        </h2>
        {filterTag && (
          <button 
            onClick={() => setFilterTag(null)}
            className="flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-bold mx-auto mb-4 hover:bg-rose-100 hover:text-rose-700 transition-colors"
          >
            <X size={12} />
            清除篩選
          </button>
        )}
        <p className="text-stone-600 text-base leading-relaxed">
          從溫柔的筆觸開始，讓孩子透過繪本看見土地的故事。
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {filteredChildrenBooks.map((book) => (
          <BookCard key={book.id} book={book} onTagClick={setFilterTag} />
        ))}
      </div>
      {filteredChildrenBooks.length === 0 && (
        <div className="text-center py-20 text-stone-400 serif">
          目前該標籤下沒有童書推薦。
        </div>
      )}
    </section>
  );
};

const DocumentariesView: React.FC = () => (
  <section className="animate-in fade-in duration-700">
    <div className="mb-12 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-black text-stone-900 serif mb-4">光影紀實：看見真實的面容</h2>
      <p className="text-stone-600 text-base leading-relaxed">
        文字之外，紀錄片用最直觀的方式，保存了那些被遺忘的聲音與影像。
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8">
      {DOCUMENTARIES.map((doc) => (
        <DocCard key={doc.id} doc={doc} />
      ))}
    </div>
  </section>
);

const ShareView: React.FC = () => {
  const [communityBooks, setCommunityBooks] = useState<Book[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '', author: '', level: 'basic' as ReadingLevel, booksLink: '', esliteLink: '', kingstoneLink: '', reason: '', contributor: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('democracy_community_books');
    if (saved) setCommunityBooks(JSON.parse(saved));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) return;
    const newBook: Book = {
      id: Date.now().toString(),
      title: formData.title,
      author: formData.author,
      level: formData.level,
      description: formData.reason,
      links: { books: formData.booksLink, eslite: formData.esliteLink, kingstone: formData.kingstoneLink },
      contributor: formData.contributor || '匿名讀者',
      tags: ['網友推薦']
    };
    const updated = [newBook, ...communityBooks];
    setCommunityBooks(updated);
    localStorage.setItem('democracy_community_books', JSON.stringify(updated));
    setShowForm(false);
    setFormData({ title: '', author: '', level: 'basic', booksLink: '', esliteLink: '', kingstoneLink: '', reason: '', contributor: '' });
  };

  const getLevelBadge = (level: ReadingLevel) => {
    switch (level) {
      case 'basic': return <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold rounded">初階</span>;
      case 'intermediate': return <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded">中階</span>;
      case 'advanced': return <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded">進階</span>;
    }
  };

  return (
    <section className="animate-in fade-in duration-700 space-y-12 pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex p-4 bg-rose-50 text-rose-700 rounded-2xl mb-6">
          <Pencil size={32} strokeWidth={2} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 serif mb-4">我要推薦：民主共編 Spreadsheet</h2>
        <p className="text-stone-600 mb-6">歡迎分享您心目中的補課好書，讓這份清單更完整。</p>
        <button onClick={() => setShowForm(true)} className="bg-rose-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-rose-800 transition-all">新增推薦</button>
      </div>

      {showForm && (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-200 max-w-2xl mx-auto animate-in zoom-in duration-300">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                placeholder="書名 (必填)" 
                className="p-3 border rounded-xl bg-stone-50 focus:ring-2 focus:ring-rose-500 outline-none" 
                value={formData.title} 
                onChange={e => setFormData({...formData, title: e.target.value})} 
                required
              />
              <input 
                placeholder="作者" 
                className="p-3 border rounded-xl bg-stone-50 focus:ring-2 focus:ring-rose-500 outline-none" 
                value={formData.author} 
                onChange={e => setFormData({...formData, author: e.target.value})} 
              />
            </div>
            <select 
              className="w-full p-3 border rounded-xl bg-stone-50 focus:ring-2 focus:ring-rose-500 outline-none"
              value={formData.level}
              onChange={e => setFormData({...formData, level: e.target.value as ReadingLevel})}
            >
              <option value="basic">初階：歷史小白友善</option>
              <option value="intermediate">中階：看懂社會形狀</option>
              <option value="advanced">進階：直視歷史痛點</option>
            </select>
            <textarea 
              placeholder="推薦理由 (簡短描述)" 
              className="w-full p-3 border rounded-xl bg-stone-50 h-24 focus:ring-2 focus:ring-rose-500 outline-none"
              value={formData.reason}
              onChange={e => setFormData({...formData, reason: e.target.value})}
            ></textarea>
            <input 
              placeholder="您的稱呼" 
              className="w-full p-3 border rounded-xl bg-stone-50 focus:ring-2 focus:ring-rose-500 outline-none" 
              value={formData.contributor} 
              onChange={e => setFormData({...formData, contributor: e.target.value})} 
            />
            <div className="flex gap-2">
              <button type="submit" className="flex-grow bg-rose-700 text-white p-3 rounded-xl font-bold hover:bg-rose-800 transition-colors">送出推薦</button>
              <button type="button" onClick={() => setShowForm(false)} className="px-6 bg-stone-200 text-stone-600 rounded-xl font-bold hover:bg-stone-300 transition-colors">取消</button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr className="text-xs font-bold uppercase text-stone-500">
                <th className="p-4">書名</th>
                <th className="p-4">級別</th>
                <th className="p-4">推薦理由</th>
                <th className="p-4">推薦者</th>
              </tr>
            </thead>
            <tbody>
              {communityBooks.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-stone-400 serif">尚未有網友推薦，來當第一個吧！</td>
                </tr>
              ) : (
                communityBooks.map(b => (
                  <tr key={b.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-bold text-stone-900">{b.title}</td>
                    <td className="p-4">{getLevelBadge(b.level)}</td>
                    <td className="p-4 text-xs text-stone-600 leading-relaxed max-w-xs">{b.description}</td>
                    <td className="p-4 text-sm text-stone-500">{b.contributor}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BooksView />} />
          <Route path="/children" element={<ChildrenView />} />
          <Route path="/documentaries" element={<DocumentariesView />} />
          <Route path="/share" element={<ShareView />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
