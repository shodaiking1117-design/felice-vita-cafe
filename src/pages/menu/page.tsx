import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cafe');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuData = {
    cafe: {
      title: 'CAFE MENU',
      subtitle: 'こだわりのコーヒーと手作りスイーツ',
      items: [
        {
          category: 'コーヒー',
          items: [
            { name: 'ブレンドコーヒー', price: '¥600', description: '当店オリジナルブレンド。深いコクと香り' },
            { name: 'アメリカーノ', price: '¥580', description: 'エスプレッソをお湯で割ったすっきりとした味わい' },
            { name: 'カフェラテ', price: '¥680', description: 'なめらかなミルクとエスプレッソの絶妙なバランス' },
            { name: 'カプチーノ', price: '¥680', description: 'ふわふわのミルクフォームが自慢' },
            { name: 'カフェモカ', price: '¥780', description: 'チョコレートシロップとエスプレッソの甘い組み合わせ' },
            { name: 'アイスコーヒー', price: '¥580', description: '水出しで抽出したまろやかな味わい' }
          ]
        },
        {
          category: 'ティー',
          items: [
            { name: 'アールグレイ', price: '¥580', description: 'ベルガモットの香り豊かな紅茶' },
            { name: 'ダージリン', price: '¥580', description: '上品な香りと渋みのバランスが絶妙' },
            { name: 'カモミールティー', price: '¥680', description: 'リラックス効果のあるハーブティー' },
            { name: '抹茶ラテ', price: '¥780', description: '京都産抹茶を使用した和風ラテ' }
          ]
        },
        {
          category: 'ケーキ・スイーツ',
          items: [
            { name: '季節のショートケーキ', price: '¥680', description: '旬のフルーツを使った自慢のケーキ' },
            { name: 'チョコレートケーキ', price: '¥780', description: 'ベルギー産チョコレートの濃厚な味わい' },
            { name: 'チーズケーキ', price: '¥680', description: 'なめらかな口当たりのベイクドチーズケーキ' },
            { name: 'ティラミス', price: '¥780', description: 'マスカルポーネチーズとコーヒーの大人の味' },
            { name: 'フルーツタルト', price: '¥880', description: '季節のフルーツをたっぷり使ったタルト' },
            { name: 'スコーン（2個）', price: '¥580', description: 'イギリス風の本格スコーン。ジャム・クリーム付き' }
          ]
        }
      ]
    },
    lunch: {
      title: 'LUNCH MENU',
      subtitle: '新鮮な食材を使ったヘルシーランチ',
      items: [
        {
          category: 'ベーグルサンド',
          items: [
            { name: 'ベーコンエッグベーグルサンド', price: '¥1,200', description: 'カリッと焼いたベーコンと半熟卵、レタス、トマト' },
            { name: 'エビアボカドベーグルサンド', price: '¥1,350', description: 'プリプリのエビとクリーミーなアボカド、野菜たっぷり' },
            { name: 'スモークサーモンベーグル', price: '¥1,480', description: 'スモークサーモン、クリームチーズ、ケーパー、玉ねぎ' },
            { name: 'ツナアボカドベーグル', price: '¥1,180', description: 'ツナとアボカド、トマト、レタスのヘルシーサンド' }
          ]
        },
        {
          category: 'キッシュ・サラダ',
          items: [
            { name: '季節野菜のキッシュ', price: '¥1,180', description: '旬の野菜をたっぷり使った手作りキッシュ' },
            { name: 'ほうれん草とベーコンのキッシュ', price: '¥1,200', description: 'ほうれん草とベーコン、チーズの定番キッシュ' },
            { name: 'シーザーサラダ', price: '¥980', description: 'ロメインレタス、パルメザンチーズ、クルトン' },
            { name: 'アボカドサラダ', price: '¥1,080', description: 'アボカド、トマト、ミックスグリーンのヘルシーサラダ' }
          ]
        },
        {
          category: 'パスタ',
          items: [
            { name: 'カルボナーラ', price: '¥1,350', description: '濃厚なクリームソースとベーコン、パルメザンチーズ' },
            { name: 'ペペロンチーノ', price: '¥1,180', description: 'ガーリックと唐辛子のシンプルなオイルパスタ' },
            { name: '季節野菜のトマトパスタ', price: '¥1,200', description: '旬の野菜とトマトソースの彩り豊かなパスタ' }
          ]
        }
      ]
    },
    night: {
      title: 'NIGHT MENU',
      subtitle: '夜のひとときを彩る特別なメニュー',
      items: [
        {
          category: 'デザート',
          items: [
            { name: '気まぐれパフェ', price: '¥1,580', description: '季節のフルーツとアイスクリーム、生クリームの贅沢パフェ' },
            { name: 'フォンダンショコラ', price: '¥980', description: '温かいチョコレートケーキ、バニラアイス添え' },
            { name: 'クレームブリュレ', price: '¥880', description: 'カラメルの香ばしさとなめらかなカスタード' },
            { name: 'アフォガート', price: '¥780', description: 'バニラアイスにエスプレッソをかけた大人のデザート' }
          ]
        },
        {
          category: 'チーズ・おつまみ',
          items: [
            { name: 'チーズプレート', price: '¥1,480', description: '厳選チーズ3種、ドライフルーツ、ナッツ、クラッカー' },
            { name: 'ミックスナッツ', price: '¥680', description: 'アーモンド、カシューナッツ、くるみの盛り合わせ' },
            { name: 'オリーブ盛り合わせ', price: '¥780', description: 'グリーンオリーブとブラックオリーブ' },
            { name: 'ドライフルーツ', price: '¥580', description: 'いちじく、アプリコット、レーズンの盛り合わせ' }
          ]
        },
        {
          category: 'ドリンク',
          items: [
            { name: 'ワインセレクション（赤）', price: '¥880〜', description: 'ケーキに合う厳選赤ワイン' },
            { name: 'ワインセレクション（白）', price: '¥880〜', description: 'チーズに合う厳選白ワイン' },
            { name: 'シャンパン', price: '¥1,200', description: '特別な夜にふさわしいスパークリングワイン' },
            { name: 'カクテル各種', price: '¥600', description: 'モヒート、カシスオレンジ、ジントニックなど' }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* 固定ナビゲーションバー */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/e55301c15954f9f57d10591a615a44b4.png"
                  alt="Felice Vita Cafe"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/"
                className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                ホーム
              </Link>
              <Link 
                to="/gallery"
                className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                ケーキギャラリー
              </Link>
              <Link 
                to="/reservation"
                className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 font-medium whitespace-nowrap"
              >
                ホールケーキ予約
              </Link>
              <a 
                href="https://www.instagram.com/felice_vita_cafe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-pink-500 transition-colors duration-200"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
            </div>

            {/* モバイルメニューボタン */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-700 hover:text-amber-600 transition-colors duration-200"
              >
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
              </button>
            </div>
          </div>

          {/* モバイルメニュー */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-stone-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/"
                  className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホーム
                </Link>
                <Link 
                  to="/gallery"
                  className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ケーキギャラリー
                </Link>
                <Link 
                  to="/reservation"
                  className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all duration-200 font-medium text-center whitespace-nowrap"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホールケーキ予約
                </Link>
                <a 
                  href="https://www.instagram.com/felice_vita_cafe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-700 hover:text-pink-500 transition-colors duration-200 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-instagram-line text-xl mr-2"></i>
                  Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ヘッダーセクション */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            メニュー
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed whitespace-normal break-words">
            朝から夜まで、様々なシーンでお楽しみいただける<br className="hidden md:inline" />
            メニューをご用意しております。<br className="hidden md:inline" />
            こだわりの食材と心を込めた手作りの味をお楽しみください。
          </p>
        </div>
      </section>

      {/* タブメニュー */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-stone-100 rounded-full p-1.5 md:p-2">
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <button
                  onClick={() => setActiveTab('cafe')}
                  className={`px-5 md:px-8 py-2.5 md:py-4 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                    activeTab === 'cafe'
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  CAFE
                </button>
                <button
                  onClick={() => setActiveTab('lunch')}
                  className={`px-5 md:px-8 py-2.5 md:py-4 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                    activeTab === 'lunch'
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  LUNCH
                </button>
                <button
                  onClick={() => setActiveTab('night')}
                  className={`px-5 md:px-8 py-2.5 md:py-4 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                    activeTab === 'night'
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  NIGHT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メニューコンテンツ */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3 md:mb-4">{menuData[activeTab].title}</h2>
            <p className="text-base md:text-lg text-stone-600">{menuData[activeTab].subtitle}</p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {menuData[activeTab].items.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-6 md:mb-8 text-center border-b border-stone-200 pb-3 md:pb-4">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start p-3 md:p-4 hover:bg-stone-50 rounded-xl transition-all duration-200">
                      <div className="flex-1 min-w-0 pr-3 md:pr-4">
                        <h4 className="text-base md:text-lg font-bold text-stone-800 mb-1.5 md:mb-2 break-words">{item.name}</h4>
                        <p className="text-stone-600 text-xs md:text-sm leading-relaxed whitespace-normal break-words">{item.description}</p>
                      </div>
                      <div className="ml-3 md:ml-4 text-right flex-shrink-0">
                        <p className="text-lg md:text-xl font-bold text-amber-600 whitespace-nowrap">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 予約導線 */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-4 md:mb-6">特別な日のホールケーキ</h2>
            <p className="text-sm md:text-lg text-stone-600 mb-6 md:mb-8 leading-relaxed whitespace-normal break-words">
              誕生日、記念日、お祝いの席に。<br className="hidden md:inline" />心を込めて作るオーダーメイドのホールケーキで、<br className="hidden md:inline" />大切な瞬間をより特別なものにいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link
                to="/reservation"
                className="w-full sm:w-auto bg-amber-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-sm md:text-lg whitespace-nowrap"
              >
                <i className="ri-cake-3-line mr-2"></i>
                ホールケーキを予約する
              </Link>
              <a
                href="tel:070-9091-5415"
                className="w-full sm:w-auto bg-white text-stone-800 border-2 border-stone-300 px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-stone-50 transition-all duration-300 transform hover:scale-105 font-medium text-sm md:text-lg whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                お電話でのご相談
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-stone-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img
                src="https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/f4b36b517f6b0c89534f8c8f095a711c.png"
                alt="Felice Vita Cafe"
                className="h-16 w-auto mb-4"
              />
              <p className="text-stone-300 mb-4">
                フェリーチェ ヴィータ カフェ
              </p>
              <p className="text-stone-400 leading-relaxed">
                頑張る日々に、少しの贅沢と幸せを
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">店舗情報</h4>
              <div className="space-y-2 text-stone-300">
                <p>大阪府泉南市信達牧野187</p>
                <p>TEL: 070-9091-5415</p>
                <p>営業時間: 11:00~18:00</p>
                <p>金曜日（夜カフェ）: 11:00~21:00</p>
                <p>定休日: 火曜日／第二土日</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">リンク</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-stone-300 hover:text-white transition-colors duration-200">
                  ホーム
                </Link>
                <Link to="/reservation" className="block text-stone-300 hover:text-white transition-colors duration-200">
                  ホールケーキ予約
                </Link>
                <Link to="/gallery" className="block text-stone-300 hover:text-white transition-colors duration-200">
                  ケーキギャラリー
                </Link>
                <a href="https://www.instagram.com/felice_vita_cafe/" target="_blank" rel="noopener noreferrer" className="block text-stone-300 hover:text-white transition-colors duration-200">
                  Instagram
                </a>
                <a href="https://readdy.ai/?origin=logo" className="block text-stone-300 hover:text-white transition-colors duration-200">
                  Website Builder
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
            <p>&copy; 2024 Felice Vita Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;
