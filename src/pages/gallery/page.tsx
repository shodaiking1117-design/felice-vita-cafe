import { useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cakeGallery = [
    // 季節限定
    {
      id: 1,
      title: 'いちごのショートケーキ',
      category: 'seasonal',
      month: '常時-4月',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/dca8445126400ea6e45a6f5c58f01fe8.jpeg',
      description: '旬のいちごをたっぷり使用した定番のショートケーキ'
    },
    {
      id: 2,
      title: 'いちごのタルト',
      category: 'seasonal',
      month: '常時-4月',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/7b69739797b9abef841b47650f47c653.jpeg',
      description: 'サクサクのタルト生地に新鮮ないちごを贅沢に飾りました'
    },
    {
      id: 3,
      title: 'マスカットのショートケーキ',
      category: 'seasonal',
      month: '5月-7月',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/1e60c3654b75098a2fd2a4d8f3918302.jpeg',
      description: 'みずみずしいシャインマスカットとやわらかなスポンジと軽い生クリームにふわっと溶け込む。贅沢で後味すっきりのショートケーキ。'
    },
    {
      id: 4,
      title: 'キウイのタルト',
      category: 'seasonal',
      month: '5月-7月',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/482fd291f812613b65ae3789861b14a9.jpeg',
      description: '爽やかなキウイの酸味が楽しめるタルト'
    },
    {
      id: 5,
      title: '桃とアールグレイのショートケーキ',
      category: 'seasonal',
      month: '7月-8月',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/08af3c7b0b15ce913d44f40694154caa.jpeg',
      description: 'ジューシーな桃とアールグレイの香りが上品に調和したケーキ'
    },
    {
      id: 6,
      title: 'メロンのショートケーキ',
      category: 'seasonal',
      month: '6月-8月',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20lemon%20tart%20with%20lemon%20curd%20filling%2C%20meringue%20topping%2C%20crispy%20tart%20shell%2C%20professional%20bakery%20presentation%2C%20bright%20citrus%20colors%2C%20summer%20dessert&width=400&height=300&seq=lemon1&orientation=landscape',
      description: 'みずみずしいメロンがショートケーキとぴったり'
    },
    {
      id: 7,
      title: '和梨とほうじ茶のタルト',
      category: 'seasonal',
      month: '9月-10月',
      image: 'https://readdy.ai/api/search-image?query=elegant%20Japanese%20pear%20and%20hojicha%20tart%2C%20autumn%20dessert%20with%20pear%20slices%2C%20roasted%20tea%20flavor%2C%20beautiful%20presentation%2C%20warm%20lighting%2C%20artisanal%20quality&width=400&height=300&seq=pear1&orientation=landscape',
      description: '秋の味覚、和梨とほうじ茶の香ばしさが絶妙なタルト'
    },
    {
      id: 8,
      title: 'さつまいもとゴマのショートケーキ',
      category: 'seasonal',
      month: '10月-11月',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/f23abe3404511243cfdff9e596e752ca.jpeg',
      description: 'さつまいもの優しい甘さとゴマの風味が楽しめる秋のケーキ'
    },
    {
      id: 9,
      title: 'カボチャのモンブランタルト',
      category: 'seasonal',
      month: '10月-11月',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20pumpkin%20mont%20blanc%20tart%2C%20autumn%20dessert%20with%20pumpkin%20cream%20piped%20elegantly%2C%20crispy%20tart%20shell%2C%20professional%20bakery%20presentation%2C%20warm%20orange%20colors&width=400&height=300&seq=pumpkin1&orientation=landscape',
      description: 'なめらかなカボチャクリームのモンブラン仕立てタルト'
    },
    // チョコレート
    {
      id: 10,
      title: 'ティラミスケーキ',
      category: 'chocolate',
      month: '2月',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/c0e93d52d1b6a95bbd61e1064ce4ef73.jpeg',
      description: 'エスプレッソを染み込ませたスポンジに、ふわとろのマスカルポーネが重なり、ほろ苦さと甘さが口いっぱいに広がる。'
    },
    {
      id: 11,
      title: 'バスクチーズケーキ',
      category: 'chocolate',
      month: '常時',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/efc5c6061ea4cc6db23dbc2d0987f475.jpeg',
      description: '表面をこんがりと焼き上げた濃厚なバスクチーズケーキ。クリームチーズの深いコクと、滑らかな舌触りがやみつきになります。'
    },
    // チーズケーキ
    {
      id: 12,
      title: 'いちごのショートケーキ',
      category: 'cheese',
      month: '常時',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/4f1fe4c78269a3d568a9added0e11dc7.jpeg',
      description: 'なめらかな口当たりのレアチーズケーキに、ホワイトチョコレートをアクセントに'
    },
    {
      id: 13,
      title: 'ブッシュドノエル',
      category: 'cheese',
      month: '常時',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/198499581e364453e1c0978e349ec54b.jpeg',
      description: 'ヨーロッパの伝統的なクリスマスケーキ。中には刻んだ栗が入っています'
    },
    // オーダー
    {
      id: 14,
      title: 'デザイン１',
      category: 'order',
      month: 'オーダー',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/6987f7db4d3fb8196615eace61d231b4.jpeg',
      description: 'お客様のご要望に合わせたオリジナルデザインケーキ'
    },
    {
      id: 15,
      title: 'デザイン２',
      category: 'order',
      month: 'オーダー',
      image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/4f1fe4c78269a3d568a9added0e11dc7.jpeg',
      description: 'お客様のご要望に合わせたオリジナルデザインケーキ'
    },
    {
      id: 16,
      title: 'キャラクター',
      category: 'order',
      month: 'オーダー',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20character%20themed%20cake%20with%20cute%20design%2C%20colorful%20fondant%20decoration%2C%20professional%20cake%20artistry%2C%20children%20birthday%20style%2C%20bright%20lighting%2C%20playful%20presentation&width=400&height=300&seq=character1&orientation=landscape',
      description: 'お好きなキャラクターをモチーフにしたオーダーケーキ'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'seasonal', name: '季節限定' },
    { id: 'chocolate', name: 'レギュラー商品' },
    { id: 'cheese', name: 'イベント' },
    { id: 'order', name: 'オーダー' }
  ];

  const filteredCakes = selectedCategory === 'all' 
    ? cakeGallery 
    : cakeGallery.filter(cake => cake.category === selectedCategory);

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
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                メニュー
              </button>
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-3 md:mb-4">
            過去のケーキギャラリー
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            これまでにお作りした<br className="sm:hidden" />季節限定ケーキや<br />特別なケーキをご紹介いたします。<br />
            お気に入りのケーキがございましたら、<br className="sm:hidden" />ホールケーキとして<br className="md:hidden" />ご予約いただけます。
          </p>
        </div>
      </section>

      {/* カテゴリーフィルター */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-stone-100 rounded-full p-1.5 md:p-2">
              <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                      selectedCategory === category.id
                        ? 'bg-amber-600 text-white'
                        : 'text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ケーキギャラリー */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredCakes.map((cake) => (
              <div
                key={cake.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  {cake.image ? (
                    <img
                      src={cake.image}
                      alt={cake.title}
                      className="w-full h-56 md:h-64 object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-56 md:h-64 bg-stone-200 flex items-center justify-center">
                      <div className="text-center">
                        <i className="ri-image-add-line text-4xl text-stone-400 mb-2"></i>
                        <p className="text-stone-500 text-sm">画像をアップロード予定</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-amber-600 text-white px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    {cake.month}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-stone-800 mb-2 md:mb-3">{cake.title}</h3>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                    {cake.description}
                  </p>
                  <Link
                    to="/reservation"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200 text-sm md:text-base"
                  >
                    <i className="ri-cake-3-line mr-2"></i>
                    このケーキを予約する
                  </Link>
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
            <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-4 md:mb-6">お気に入りのケーキは<br className="sm:hidden" />ございましたか？</h2>
            <p className="text-sm md:text-lg text-stone-600 mb-6 md:mb-8 leading-relaxed">
              ギャラリーのケーキは<br className="sm:hidden" />全てホールケーキとして<br className="md:hidden" />ご予約いただけます。<br />
              季節限定のケーキも、<br className="sm:hidden" />ご相談いただければ<br />可能な限り対応いたします。
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

export default GalleryPage;