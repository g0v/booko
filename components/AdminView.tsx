
import React, { useState } from 'react';
import { Book, ReadingLevel } from '../types';
import { getGeminiInsight } from '../services/geminiService';
import BookCard from './BookCard';
import { Sparkles, Copy, Check, Save, RotateCcw, AlertCircle, Terminal } from 'lucide-react';

const AdminView: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<Book>>({
    title: '',
    author: '',
    description: '',
    level: 'basic',
    tags: [],
    links: {
      books: '',
      eslite: '',
      kingstone: '',
      nlpi: ''
    }
  });

  const [aiPrompt, setAiPrompt] = useState('');

  const handleAiMagic = async () => {
    if (!aiPrompt) return;
    setLoading(true);
    setError(null);
    try {
      const response = await getGeminiInsight(`
        請為這本書生成結構化的 JSON 資料。
        書名/主題：${aiPrompt}
        
        請嚴格依照此 JSON 格式回傳，不要有額外文字：
        {
          "title": "書名",
          "author": "作者",
          "description": "約 100 字的專業書評，側重民主與歷史意義",
          "level": "basic" | "intermediate" | "advanced",
          "tags": ["標籤1", "標籤2"],
          "suggestedSearch": "搜尋關鍵字"
        }
      `);

      const data = JSON.parse(response.replace(/```json|```/g, ''));
      
      setFormData({
        ...formData,
        title: data.title,
        author: data.author,
        description: data.description,
        level: data.level,
        tags: data.tags,
        links: {
          books: `https://search.books.com.tw/search/query/key/${encodeURIComponent(data.title)}`,
          eslite: `https://www.eslite.com/Search?q=${encodeURIComponent(data.title)}`,
          kingstone: `https://www.kingstone.com.tw/search/search?q=${encodeURIComponent(data.title)}`,
          nlpi: `https://ebook.nlpi.edu.tw/search?search_field=TI&search_input=${encodeURIComponent(data.title)}`
        }
      });
    } catch (err) {
      setError('AI 魔法暫時失效，請手動輸入或稍後再試。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    const code = `  {
    id: '${Date.now()}',
    title: '${formData.title}',
    author: '${formData.author}',
    description: '${formData.description?.replace(/'/g, "\\'")}',
    coverImage: 'https://images.unsplash.com/photo-1544648156-5388451882c5?q=80&w=400', // 請手動替換封面
    level: '${formData.level}',
    tags: [${formData.tags?.map(t => `'${t}'`).join(', ')}],
    links: {
      books: '${formData.links?.books}',
      eslite: '${formData.links?.eslite}',
      kingstone: '${formData.links?.kingstone}',
      nlpi: '${formData.links?.nlpi}'
    }
  },`;
    
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-stone-900 text-white rounded-2xl">
            <Terminal size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-stone-900 serif">後台管理：單一檔案控制中心</h2>
            <p className="text-stone-500 text-sm">在此生成書單物件，貼回 constants.tsx 即可更新。</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Side */}
          <div className="space-y-6">
            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
              <label className="block text-rose-800 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Sparkles size={14} /> AI 魔法自動填表
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="輸入書名或關鍵字，例如：百年追求"
                  className="flex-grow p-3 rounded-xl border-none focus:ring-2 focus:ring-rose-500 shadow-inner"
                  value={aiPrompt}
                  onChange={e => setAiPrompt(e.target.value)}
                />
                <button 
                  onClick={handleAiMagic}
                  disabled={loading}
                  className="bg-rose-600 text-white px-6 rounded-xl font-bold hover:bg-rose-700 transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? <RotateCcw className="animate-spin" size={18} /> : '施法'}
                </button>
              </div>
              {error && <p className="mt-2 text-red-600 text-xs flex items-center gap-1"><AlertCircle size={12} /> {error}</p>}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-500 text-[10px] font-black uppercase mb-1">書名</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-rose-500 outline-none"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-stone-500 text-[10px] font-black uppercase mb-1">作者</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-rose-500 outline-none"
                    value={formData.author}
                    onChange={e => setFormData({...formData, author: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-500 text-[10px] font-black uppercase mb-1">閱讀難度分階</label>
                <div className="flex gap-2">
                  {(['basic', 'intermediate', 'advanced'] as ReadingLevel[]).map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setFormData({...formData, level: lvl})}
                      className={`flex-grow py-2 rounded-lg text-xs font-bold transition-all ${
                        formData.level === lvl 
                          ? 'bg-rose-700 text-white shadow-md' 
                          : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                      }`}
                    >
                      {lvl === 'basic' ? '初階' : lvl === 'intermediate' ? '中階' : '進階'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-stone-500 text-[10px] font-black uppercase mb-1">專業書介 (Markdown)</label>
                <textarea 
                  className="w-full p-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-rose-500 outline-none h-32 text-sm"
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <button 
                onClick={copyToClipboard}
                className="w-full bg-stone-900 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-stone-800 transition-all shadow-xl"
              >
                {copied ? <Check className="text-green-400" /> : <Copy size={20} />}
                {copied ? '已複製物件程式碼！' : '生成並複製物件代碼'}
              </button>
              <p className="text-center text-[10px] text-stone-400 mt-4 font-medium uppercase tracking-widest">
                複製後貼上至 src/constants.tsx 的 BOOKS 陣列中
              </p>
            </div>
          </div>

          {/* Preview Side */}
          <div className="relative">
            <div className="sticky top-24">
              <label className="block text-stone-500 text-[10px] font-black uppercase mb-4 tracking-widest text-center">即時樣貌預覽 (Live Preview)</label>
              <div className="max-w-[280px] mx-auto scale-110 origin-top">
                <BookCard 
                  book={{
                    id: 'preview',
                    title: formData.title || '書名預覽',
                    author: formData.author || '作者預覽',
                    description: formData.description || '這裡將顯示書籍的精彩介紹...',
                    level: formData.level || 'basic',
                    tags: formData.tags || ['預覽標籤'],
                    coverImage: 'https://images.unsplash.com/photo-1544648156-5388451882c5?q=80&w=400',
                    links: formData.links || { books: '', eslite: '', kingstone: '', nlpi: '' }
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
