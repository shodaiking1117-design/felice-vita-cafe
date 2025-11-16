import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cakeType: '',
    size: '',
    pickupDate: '',
    pickupTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d460rdncd34v0b2gmr1g', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          cakeType: '',
          size: '',
          pickupDate: '',
          pickupTime: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
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

            {/* ナビゲーション */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
                ホーム
              </Link>
              <Link to="/menu" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
                メニュー
              </Link>
              <Link to="/gallery" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
                ギャラリー
              </Link>
              <Link to="/reservation" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
                ご予約
              </Link>
              <a 
                href="https://www.instagram.com/felice_vita_cafe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-pink-500 transition-colors duration-200"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
            </nav>

            {/* モバイルメニューボタン */}
            <div className="md:hidden">
              <button className="text-stone-700 hover:text-stone-900 transition-colors">
                <i className="ri-menu-line text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif mb-4 text-stone-800" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              ホールケーキ予約
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              特別な日のためのホールケーキをお作りします。<br />
              ご予約は3日前までにお願いいたします。
            </p>
          </div>

          {/* Cake Examples */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Beautiful%20birthday%20cake%20with%20strawberries%20and%20cream%2C%20elegant%20decoration%2C%20soft%20lighting%2C%20beige%20background%2C%20Japanese%20bakery%20style%2C%20celebration%20cake&width=400&height=300&seq=cake-example1&orientation=landscape"
                alt="ストロベリーケーキ"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg text-stone-800">ストロベリーケーキ</h3>
                <p className="text-stone-600 text-sm">生クリームといちごの定番ケーキ</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Chocolate%20birthday%20cake%20with%20rich%20ganache%2C%20elegant%20decoration%2C%20warm%20lighting%2C%20beige%20background%2C%20luxury%20dessert%2C%20Japanese%20bakery%20style&width=400&height=300&seq=cake-example2&orientation=landscape"
                alt="チョコレートケーキ"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg text-stone-800">チョコレートケーキ</h3>
                <p className="text-stone-600 text-sm">濃厚なチョコレートの贅沢ケーキ</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Custom%20decorated%20cake%20with%20flowers%20and%20elegant%20design%2C%20soft%20pastel%20colors%2C%20professional%20cake%20photography%2C%20beige%20background%2C%20celebration%20cake&width=400&height=300&seq=cake-example3&orientation=landscape"
                alt="カスタムケーキ"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg text-stone-800">カスタムケーキ</h3>
                <p className="text-stone-600 text-sm">ご要望に合わせたオリジナル</p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-serif mb-6 text-stone-800" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              ご予約フォーム
            </h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ご予約ありがとうございます。確認のお電話をさせていただきます。
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                送信に失敗しました。お電話でのご予約も承っております。
              </div>
            )}

            <form onSubmit={handleSubmit} data-readdy-form id="whole-cake-reservation">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    お電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-stone-700 font-medium mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    ケーキの種類 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm pr-8 appearance-none cursor-pointer"
                    >
                      <option value="">選択してください</option>
                      <option value="strawberry">ストロベリーケーキ</option>
                      <option value="chocolate">チョコレートケーキ</option>
                      <option value="vanilla">バニラケーキ</option>
                      <option value="fruit">フルーツケーキ</option>
                      <option value="custom">カスタム（要相談）</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-stone-400"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    サイズ <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm pr-8 appearance-none cursor-pointer"
                    >
                      <option value="">選択してください</option>
                      <option value="4inch">4号（2-4名様）</option>
                      <option value="5inch">5号（4-6名様）</option>
                      <option value="6inch">6号（6-8名様）</option>
                      <option value="7inch">7号（8-10名様）</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-stone-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    お受け取り日 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                    min={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    お受け取り時間 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm pr-8 appearance-none cursor-pointer"
                    >
                      <option value="">選択してください</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-stone-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-stone-700 font-medium mb-2">
                  ご要望・メッセージ
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-sm resize-none"
                  placeholder="デコレーションのご要望やアレルギー情報などがございましたらお書きください（500文字以内）"
                />
                <div className="text-right text-sm text-stone-500 mt-1">
                  {formData.message.length}/500文字
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-stone-700 text-white px-12 py-4 rounded-full text-lg hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? '送信中...' : 'ご予約を送信する'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-8 p-6 bg-stone-100 rounded-xl">
            <h3 className="text-lg font-serif mb-4 text-stone-800">お電話でのご予約も承っております</h3>
            <a
              href="tel:070-9091-5415"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line mr-2"></i>
              070-9091-5415
            </a>
            <p className="text-sm text-stone-500 mt-4">営業時間内にお電話ください</p>
          </div>
        </div>
      </div>

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
              <h3 className="text-lg font-semibold mb-4">営業時間</h3>
              <div className="space-y-2 text-stone-300">
                <p>営業時間: 11:00~18:00</p>
                <p>金曜日（夜カフェ）: 11:00~21:00</p>
                <p className="text-stone-400 text-sm mt-2">定休日: 火曜日／第二土日</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
              <div className="space-y-3 text-stone-300">
                <p className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  070-9091-5415
                </p>
                <p className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  info@felicevitacafe.jp
                </p>
                <p className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  大阪府〇〇市〇〇町1-1-1
                </p>
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="https://www.instagram.com/felice_vita_cafe/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-pink-400 transition-colors cursor-pointer"
                  >
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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

export default ReservationPage;