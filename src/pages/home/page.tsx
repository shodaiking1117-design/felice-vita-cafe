import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandIntro from '../../components/BrandIntro';

const HomePage = () => {
  const [showBrandIntro, setShowBrandIntro] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('cafe');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // 初回訪問チェック
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('felice-vita-intro-seen');
    if (!hasSeenIntro) {
      setShowBrandIntro(true);
    } else {
      setShowMainContent(true);
    }
  }, []);

  const handleBrandIntroComplete = () => {
    setShowBrandIntro(false);
    localStorage.setItem('felice-vita-intro-seen', 'true');
    setTimeout(() => {
      setShowMainContent(true);
    }, 100);
  };

  const heroImages = [
    'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/2503c2cfd3034f584b3e0d01187ccd6e.jpeg',
    'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/7c056215eaff90ed80df223c8d3664ba.jpeg',
    'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/996a4b8390ee3ff49b70ca4a49d69362.jpeg'
  ];

  // 画像事前読み込み
  useEffect(() => {
    const preloadImages = () => {
      const allImages = [
        ...heroImages,
        ...menuData.cafe.map(item => item.image),
        ...menuData.lunch.map(item => item.image),
        ...menuData.night.map(item => item.image)
      ];

      let loadedCount = 0;
      const totalImages = allImages.length;

      allImages.forEach(src => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.src = src;
      });
    };

    if (showMainContent) {
      preloadImages();
    }
  }, [showMainContent]);

  const menuData = {
    cafe: [
      {
        title: 'カフェラテ    HOT/ICE',
        description: `深煎りの前を使用し、ケーキに合う少しビターな味わいになっています。\nHOTではラテアートをお楽しみいただけます。`,
        price: '¥550',
        image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/2fb58d038818fd7ec1864a7d9f0f9089.jpeg'
      },
      {
        title: 'バスクチーズケーキ',
        description: 'しっとりとした舌ざわりで濃厚な味わい',
        price: '¥600',
        image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/8235e791af74effbfdc65a1b2d867d56.jpeg'
      },
      {
        title: 'ティラミスケーキ',
        description: 'エスプレッソを染み込ませたスポンジに、ふわとろのマスカルポーネが重なり、ほろ苦さと甘さが口いっぱいに広がる。\n軽やかなのにコクがある、思わず\"もう一口\"欲しくなるティラミス。',
        price: '¥600',
        image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/16fdcaa71cdd1d063a13b27bf862b0c6.jpeg'
      }
    ],
    lunch: [
      {
        title: 'ベーコンエッグベーグルサンド',
        description: 'カリッと焼いたベーコンと半熟卵のベーグルサンド',
        price: '¥1,200',
        image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/2f130a69847c67c39bd804e5d81906d3.jpeg'
      },
      {
        title: 'エビアボカドベーグルサンド',
        description: 'プリプリのエビとクリーミーなアボカドのヘルシーサンド',
        price: '¥1,350',
        image: 'https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/0747d49c15375fc5f21c80129f1c17ec.jpeg'
      },
      {
        title: '季節野菜のキッシュ',
        description: '旬の野菜をたっぷり使った手作りキッシュ',
        price: '¥1,180',
        image: 'https://readdy.ai/api/search-image?query=seasonal%20vegetable%20quiche%20with%20fresh%20herbs%2C%20homemade%20lunch%2C%20warm%20cafe%20setting%2C%20elegant%20presentation%2C%20natural%20lighting&width=400&height=300&seq=quiche1&orientation=landscape'
      }
    ],
    night: [
      {
        title: '気まぐれパフェ',
        description: '季節のフルーツとアイスクリームの贅沢パフェ',
        price: '¥1,580',
        image: 'https://readdy.ai/api/search-image?query=seasonal%20fruit%20parfait%20with%20ice%20cream%20and%20whipped%20cream%2C%20elegant%20dessert%20presentation%2C%20evening%20cafe%20lighting%2C%20warm%20lighting&width=400&height=300&seq=parfait1&orientation=landscape'
      },
      {
        title: 'チーズプレート',
        description: '厳選したチーズとドライフルーツの大人の組み合わせ',
        price: '¥1,480',
        image: 'https://readdy.ai/api/search-image?query=cheese%20platter%20with%20dried%20fruits%20and%20nuts%2C%20elegant%20evening%20food%20presentation%2C%20warm%20cafe%20lighting&width=400&height=300&seq=cheese1&orientation=landscape'
      },
      {
        title: 'ワインセレクション',
        description: 'ケーキに合う厳選ワイン各種',
        price: '¥880〜',
        image: 'https://readdy.ai/api/search-image?query=wine%20glass%20with%20elegant%20presentation%2C%20evening%20cafe%20atmosphere%2C%20sophisticated%20setting%2C%20warm%20ambient%20lighting&width=400&height=300&seq=wine1&orientation=landscape'
      }
    ]
  };

  useEffect(() => {
    if (showMainContent) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [showMainContent]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ブランドイントロ表示中
  if (showBrandIntro) {
    return <BrandIntro onComplete={handleBrandIntroComplete} />;
  }

  return (
    <div 
      className={`min-h-screen bg-stone-50 transition-all duration-1000 ease-out ${
        showMainContent 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-4'
      }`}
    >
      {/* 固定ナビゲーションバー */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ */}
            <div className="flex-shrink-0">
              <img
                src="https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/e55301c15954f9f57d10591a615a44b4.png"
                alt="Felice Vita Cafe"
                className="h-10 w-auto"
              />
            </div>

            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                メニュー
              </button>
              <button 
                onClick={() => scrollToSection('cakes')}
                className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                今月のケーキ
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
                <button 
                  onClick={() => {
                    scrollToSection('menu');
                    setIsMenuOpen(false);
                  }}
                  className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium text-left"
                >
                  メニュー
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('cakes');
                    setIsMenuOpen(false);
                  }}
                  className="text-stone-700 hover:text-amber-600 transition-colors duration-200 font-medium text-left"
                >
                  今月のケーキ
                </button>
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

      {/* ヒーローセクション */}
      <section className="relative h-screen overflow-hidden">
        {/* 背景画像スライドショー */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Cafe atmosphere ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            {/* ロゴとふりがな */}
            <div className="mb-6 md:mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src="https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/f4b36b517f6b0c89534f8c8f095a711c.png"
                  alt="Felice Vita Cafe"
                  className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.8))' }}
                />
              </div>
              <p className="text-base md:text-xl lg:text-2xl text-white tracking-wider font-medium drop-shadow-lg" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
                フェリーチェ ヴィータ カフェ
              </p>
            </div>

            {/* コンセプトコピー */}
            <div className="mb-8 md:mb-12">
              <p className="text-base md:text-xl lg:text-2xl font-light leading-relaxed text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                頑張る日々に、<br className="md:hidden" />少しの贅沢と幸せを
              </p>
            </div>

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
              <Link
                to="/reservation"
                className="w-full sm:w-auto bg-amber-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-sm md:text-lg whitespace-nowrap"
              >
                <i className="ri-cake-3-line mr-2"></i>
                ホールケーキ予約
              </Link>
              <button
                onClick={() => scrollToSection('menu')}
                className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-stone-800 border-2 border-stone-800 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 transform hover:scale-105 font-medium text-sm md:text-lg whitespace-nowrap"
              >
                <i className="ri-restaurant-line mr-2"></i>
                メニューを見る
              </button>
              <a
                href="https://www.instagram.com/felice_vita_cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-sm md:text-lg whitespace-nowrap"
              >
                <i className="ri-instagram-line mr-2"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* スライドインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 今月のケーキ紹介 */}
      <section id="cakes" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 md:mb-4">今月のケーキ</h2>
            <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              旬の果物や季節に合ったケーキを<br className="md:hidden" />月替わりでご用意しております。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="space-y-6 md:space-y-8">
              <div className="bg-stone-50 p-6 md:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=elegant%20strawberry%20shortcake%20with%20fresh%20cream%2C%20beautiful%20presentation%2C%20soft%20lighting%2C%20artisanal%20quality%2C%20warm%20cafe%20setting&width=600&height=400&seq=cake1&orientation=landscape"
                  alt="今月のケーキ1"
                  className="w-full h-48 md:h-64 object-cover rounded-xl mb-4 md:mb-6"
                />
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-2 md:mb-3">季節のストロベリー<br className="sm:hidden" />ショートケーキ</h3>
                <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                  厳選された旬のいちごと、<br className="sm:hidden" />ふわふわのスポンジ、<br />なめらかな生クリームが<br className="sm:hidden" />織りなす至福の一品。
                </p>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-stone-50 p-6 md:p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=chocolate%20tart%20with%20berries%2C%20elegant%20dessert%20presentation%2C%20warm%20cafe%20lighting%2C%20artisanal%20pastry%2C%20cozy%20atmosphere&width=600&height=400&seq=cake2&orientation=landscape"
                  alt="今月のケーキ2"
                  className="w-full h-48 md:h-64 object-cover rounded-xl mb-4 md:mb-6"
                />
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-2 md:mb-3">ベリーチョコレートタルト</h3>
                <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                  濃厚なチョコレートと<br className="sm:hidden" />酸味の効いたベリーが<br />絶妙にマッチした<br className="sm:hidden" />大人の味わい。
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/gallery"
              className="inline-block bg-stone-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-stone-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm md:text-base whitespace-nowrap"
            >
              <i className="ri-gallery-line mr-2"></i>
              過去のケーキギャラリー
            </Link>
          </div>
        </div>
      </section>

      {/* メニュー紹介 */}
      <section id="menu" className="py-12 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 md:mb-4">メニュー</h2>
            <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              朝から夜まで、様々なシーンで<br className="md:hidden" />お楽しみいただける<br />メニューをご用意しております。
            </p>
          </div>

          {/* タブメニュー */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-white rounded-full p-1.5 md:p-2 shadow-lg">
              <div className="flex space-x-1 md:space-x-2">
                <button 
                  onClick={() => setActiveMenuTab('cafe')}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                    activeMenuTab === 'cafe' 
                      ? 'bg-amber-600 text-white' 
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  CAFE
                </button>
                <button 
                  onClick={() => setActiveMenuTab('lunch')}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                    activeMenuTab === 'lunch' 
                      ? 'bg-amber-600 text-white' 
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  LUNCH
                </button>
                <button 
                  onClick={() => setActiveMenuTab('night')}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                    activeMenuTab === 'night' 
                      ? 'bg-amber-600 text-white' 
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  NIGHT
                </button>
              </div>
            </div>
          </div>

          {/* メニューコンテンツ */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {menuData[activeMenuTab].map((item, index) => (
              <div key={`${activeMenuTab}-${index}`} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-xl mb-4 md:mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-40 md:h-48 object-cover transition-all duration-500 ease-out ${
                      imagesLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                    loading="eager"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  {!imagesLoaded && (
                    <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-stone-800 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-stone-600 mb-3 md:mb-4 leading-relaxed">{item.description}</p>
                <p className="text-xl md:text-2xl font-bold text-amber-600">{item.price}</p>
              </div>
            ))}
          </div>

          {/* 詳細ページへのリンク */}
          <div className="text-center">
            <Link 
              to="/menu"
              className="inline-block bg-stone-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-stone-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm md:text-base whitespace-nowrap"
            >
              <i className="ri-restaurant-line mr-2"></i>
              詳細はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* ホールケーキ予約導線 */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-4 md:mb-6">特別な日のホールケーキ</h2>
            <p className="text-sm md:text-lg text-stone-600 mb-6 md:mb-8 leading-relaxed">
              誕生日、記念日、お祝いの席に。<br />心を込めて作る<br className="md:hidden" />オーダーメイドのホールケーキで、<br />大切な瞬間を<br className="md:hidden" />より特別なものにいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link
                to="/reservation"
                className="w-full sm:w-auto bg-amber-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-sm md:text-lg whitespace-nowrap"
              >
                <i className="ri-cake-3-line mr-2"></i>
                ホールケーキ予約
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

      {/* ABOUT・こだわり */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-4 md:mb-6">ABOUT</h2>
              <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-stone-600 leading-relaxed">
                <p>
                  毎日頑張っている皆さまに、<br className="sm:hidden" />ほっと一息つける空間と、<br />心から美味しいと思える<br className="sm:hidden" />ケーキをお届けしたい。
                </p>
                <p>
                  そんな想いから、<br className="sm:hidden" />Felice Vita Cafeは生まれました。<br />
                  「幸せな人生」を意味する店名の通り、<br />ここで過ごす時間が<br className="sm:hidden" />皆さまの人生に<br />小さな幸せを添えられるよう、<br />心を込めてお迎えいたします。
                </p>
                <p>
                  使用する材料は<br className="sm:hidden" />厳選したものばかり。<br />
                  季節の移ろいを感じられるよう、<br />旬の素材を大切にし、<br />一つひとつ丁寧に<br className="sm:hidden" />手作りしております。
                </p>
              </div>
              <div className="mt-6 md:mt-8">
                <img
                  src="https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/a2aa088eed82fd73919808b96352ab7f.png"
                  alt="Felice Vita Cafe"
                  className="h-24 md:h-32 w-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/a6bed7981b984b67057495a54e909d03.jpeg"
                alt="店主の写真"
                className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 md:mb-4">店舗情報</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 md:mb-6 flex items-center">
                  <i className="ri-map-pin-line mr-3 text-amber-600"></i>
                  アクセス
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-stone-600">
                  <p className="leading-relaxed">
                    <strong>住所：</strong><br className="sm:hidden" />大阪府泉南市信達牧野187
                  </p>
                  <p className="leading-relaxed">
                    <strong>最寄り駅：</strong><br className="sm:hidden" />JR阪和線「和泉砂川駅」より<br className="sm:hidden" />徒歩3分
                  </p>
                  <p>
                    <strong>駐車場：</strong><br className="sm:hidden" />専用駐車場がないため、近くのパーキングをご利用ください。
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 md:mb-6 flex items-center">
                  <i className="ri-time-line mr-3 text-amber-600"></i>
                  営業時間
                </h3>
                <div className="space-y-2 md:space-y-3 text-sm md:text-base text-stone-600">
                  <div className="flex justify-between">
                    <span>営業時間</span>
                    <span>11:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>金曜日（夜カフェ）</span>
                    <span>11:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>定休日</span>
                    <span>火曜日 ／ 第二土日</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 md:mb-6 flex items-center">
                  <i className="ri-phone-line mr-3 text-amber-600"></i>
                  お問い合わせ
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-stone-600">
                  <p>
                    <strong>TEL：</strong>070-9091-5415
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/felice_vita_cafe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-pink-500 hover:text-pink-600 transition-colors duration-200"
                    >
                      <i className="ri-instagram-line mr-2"></i>
                      Instagram
                    </a>
                    <a
                      href="https://line.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-500 hover:text-green-600 transition-colors duration-200"
                    >
                      <i className="ri-line-line mr-2"></i>
                      LINE
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 md:mb-6 flex items-center">
                <i className="ri-map-line mr-3 text-amber-600"></i>
                地図
              </h3>
              <div className="w-full h-80 md:h-96 bg-stone-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.123456789!2d135.123456!3d34.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5aSn6Ziq5bqc5L-h6YGU54mn6YeO!5e0!3m2!1sja!2sjp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Felice Vita Cafe 地図"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-stone-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img
                src="https://static.readdy.ai/image/f734283f3293beb2cec0bca7aa0e5364/f4b36b517f6b0c89534f8c8f095a711c.png"
                alt="Felice Vita Cafe"
                className="h-12 md:h-16 w-auto mb-4"
              />
              <p className="text-stone-300 mb-4">
                フェリーチェ ヴィータ カフェ
              </p>
              <p className="text-stone-400 leading-relaxed">
                頑張る日々に、少しの贅沢と幸せを
              </p>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">店舗情報</h3>
              <div className="space-y-1.5 md:space-y-2 text-sm md:text-base text-stone-300">
                <p>大阪府泉南市信達牧野187</p>
                <p>TEL: 070-9091-5415</p>
                <p>営業時間: 11:00~18:00</p>
                <p>金曜日（夜カフェ）: 11:00~21:00</p>
                <p className="text-stone-400 text-sm mt-2">定休日: 火曜日／第二土日</p>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">リンク</h3>
              <div className="space-y-1.5 md:space-y-2">
                <Link to="/" className="block text-stone-300 hover:text-white transition-colors duration-200">
                  ホーム
                </Link>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="block text-stone-300 hover:text-white transition-colors duration-200 text-left"
                >
                  メニュー
                </button>
                <a href="https://www.instagram.com/felice_vita_cafe/" target="_blank" rel="noopener noreferrer" className="block text-stone-300 hover:text-white transition-colors duration-200">
                  Instagram
                </a>
                <a href="https://readdy.ai/?origin=logo" className="block text-stone-300 hover:text-white transition-colors duration-200">
                  Website Builder
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2024 Felice Vita Cafe. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="https://readdy.ai/?origin=logo" className="text-stone-400 hover:text-stone-300 transition-colors text-sm cursor-pointer">
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;