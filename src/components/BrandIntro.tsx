
import { useState, useEffect } from 'react';

interface BrandIntroProps {
  onComplete: () => void;
}

const BrandIntro = ({ onComplete }: BrandIntroProps) => {
  const [showFelice, setShowFelice] = useState(false);
  const [showVita, setShowVita] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeline = [
      // 0.0〜1.5秒：「FELICE＝幸せな」フェードイン
      { delay: 0, action: () => setShowFelice(true) },
      
      // 1.0〜2.0秒：「VITA＝人生」フェードイン（1秒遅れ）
      { delay: 1000, action: () => setShowVita(true) },
      
      // 3.0〜4.0秒：テキストフェードアウト
      { delay: 3000, action: () => setFadeOut(true) },
      
      // 4.0秒：完了
      { delay: 4000, action: onComplete }
    ];

    const timers = timeline.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* 背景テクスチャ - 添付画像のような質感 */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(245, 245, 220, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(250, 240, 230, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #f8f6f0 0%, #f5f3ed 25%, #f2f0ea 50%, #efede7 75%, #eceae4 100%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%'
        }}
      />
      
      {/* 紙のような質感オーバーレイ */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(139, 69, 19, 0.02) 1px,
              rgba(139, 69, 19, 0.02) 2px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(160, 82, 45, 0.015) 1px,
              rgba(160, 82, 45, 0.015) 2px
            ),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 3px,
              rgba(139, 69, 19, 0.01) 3px,
              rgba(139, 69, 19, 0.01) 6px
            )
          `
        }}
      />

      {/* 微細な繊維質感 */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(210, 180, 140, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(222, 184, 135, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(205, 175, 149, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px, 20px 20px, 25px 25px'
        }}
      />

      {/* コンテンツコンテナ */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-4">
        {/* FELICE テキスト - 中央上 */}
        <div 
          className={`mb-20 transition-all duration-[2000ms] ease-out ${
            fadeOut 
              ? 'opacity-0 transform translate-y-12 scale-90 blur-sm' 
              : showFelice 
                ? 'opacity-100 transform translate-y-0 scale-100 blur-0' 
                : 'opacity-0 transform translate-y-12 scale-90 blur-sm'
          }`}
        >
          <h1 
            className="text-4xl md:text-6xl font-light tracking-[0.2em] text-stone-600"
            style={{ 
              fontFamily: '"Noto Serif JP", "Georgia", serif',
              textShadow: '0 4px 12px rgba(0,0,0,0.08)',
              letterSpacing: '0.15em'
            }}
          >
            FELICE＝幸せな
          </h1>
        </div>

        {/* VITA テキスト - 中央下 */}
        <div 
          className={`transition-all duration-[2000ms] ease-out ${
            fadeOut 
              ? 'opacity-0 transform translate-y-12 scale-90 blur-sm' 
              : showVita 
                ? 'opacity-100 transform translate-y-0 scale-100 blur-0' 
                : 'opacity-0 transform translate-y-12 scale-90 blur-sm'
          }`}
        >
          <h2 
            className="text-4xl md:text-6xl font-light tracking-[0.2em] text-stone-600"
            style={{ 
              fontFamily: '"Noto Serif JP", "Georgia", serif',
              textShadow: '0 4px 12px rgba(0,0,0,0.08)',
              letterSpacing: '0.15em'
            }}
          >
            VITA＝人生
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BrandIntro;
