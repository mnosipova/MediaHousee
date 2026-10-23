import { useState, useCallback, useEffect, useRef } from 'react';
import { Property, properties as allProperties, getRandomProperties, calculateScore, formatPrice } from './data/properties';

type Screen = 'start' | 'game' | 'result';

interface RoundResult {
  property: Property;
  guess: number;
  actual: number;
  score: number;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [round, setRound] = useState(0);
  const [properties, setProperties] = useState<Property[]>([]);
  const [guess, setGuess] = useState(50000000);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sliderAnimated, setSliderAnimated] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  const currentProperty = properties[round];
  const totalRounds = 10;

  const getSliderRange = useCallback((prop: Property) => {
    const min = Math.max(1000000, Math.floor(prop.price * 0.1 / 1000000) * 1000000);
    const max = Math.ceil(prop.price * 3 / 1000000) * 1000000;
    return { min, max };
  }, []);

  const startGame = () => {
    const selected = getRandomProperties(totalRounds);
    setProperties(selected);
    setRound(0);
    setResults([]);
    setShowAnswer(false);
    setSliderAnimated(false);
    const { min, max } = getSliderRange(selected[0]);
    setGuess(Math.floor((min + max) / 2));
    setScreen('game');
  };

  useEffect(() => {
    if (screen === 'game' && currentProperty && !sliderAnimated) {
      const { min, max } = getSliderRange(currentProperty);
      const mid = Math.floor((min + max) / 2);
      setGuess(mid);
      // Animate slider from min to mid
      setTimeout(() => {
        setSliderAnimated(true);
      }, 100);
    }
  }, [screen, round, currentProperty, sliderAnimated, getSliderRange]);

  const handleGuess = () => {
    if (!currentProperty) return;
    const score = calculateScore(guess, currentProperty.price);
    const newResult: RoundResult = {
      property: currentProperty,
      guess,
      actual: currentProperty.price,
      score
    };
    setResults(prev => [...prev, newResult]);
    setShowAnswer(true);
  };

  const nextRound = () => {
    if (round + 1 >= totalRounds) {
      setScreen('result');
    } else {
      setRound(prev => prev + 1);
      setShowAnswer(false);
      setSliderAnimated(false);
      const nextProp = properties[round + 1];
      const { min, max } = getSliderRange(nextProp);
      setGuess(Math.floor((min + max) / 2));
    }
  };

  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const maxScore = totalRounds * 10;

  const getResultTitle = () => {
    const avgDeviation = results.reduce((sum, r) => {
      return sum + ((r.guess - r.actual) / r.actual);
    }, 0) / results.length;

    if (totalScore >= 70) return { title: 'Опытный инвестор', subtitle: 'Близок к результату! Вы отлично чувствуете рынок недвижимости.' };
    if (avgDeviation > 0.15) return { title: 'Щедрый инвестор', subtitle: 'Вы переплачиваете за недвижимость. Попробуйте быть осмотрительнее!' };
    return { title: 'Скряга', subtitle: 'Экономный инвестор. Вы tendете занижать цены.' };
  };

  const getOverpaySummary = () => {
    const totalGuess = results.reduce((s, r) => s + r.guess, 0);
    const totalActual = results.reduce((s, r) => s + r.actual, 0);
    const diff = totalGuess - totalActual;
    return diff;
  };

  // START SCREEN
  if (screen === 'start') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-md text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0050cf] mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">МедиаХаус</h1>
              <p className="text-gray-500 text-sm">Симулятор оценки недвижимости</p>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed text-sm">
              Угадайте стоимость дома по фотографии и описанию. 
              10 раундов, каждый — новое объявление. 
              Насколько хорошо вы чувствуете рынок?
            </p>

            {/* Gallery preview */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {shuffleArray(allProperties).slice(0, 6).map((p, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={startGame}
              className="w-full py-4 bg-[#0050cf] text-white font-semibold rounded-xl text-lg active:scale-95 transition-transform"
            >
              Начать игру
            </button>

            <p className="text-xs text-gray-400 mt-4">10 раундов • ~2 минуты</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // GAME SCREEN
  if (screen === 'game' && currentProperty) {
    const { min, max } = getSliderRange(currentProperty);
    const sliderValue = ((guess - min) / (max - min)) * 100;

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1.5">
          <div 
            className="h-full bg-[#0050cf] transition-all duration-300"
            style={{ width: `${((round + (showAnswer ? 1 : 0)) / totalRounds) * 100}%` }}
          />
        </div>

        {/* Header */}
        <div className="px-4 pt-3 pb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            {round + 1} / {totalRounds}
          </span>
          <span className="text-sm font-medium text-[#0050cf]">
            {results.reduce((s, r) => s + r.score, 0)} баллов
          </span>
        </div>

        {/* Card */}
        <div className="flex-1 flex flex-col px-4 pb-4">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-200 mb-4 flex-shrink-0" style={{ height: '40vh', maxHeight: '320px' }}>
            <img 
              src={currentProperty.image}
              alt={currentProperty.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white font-semibold text-sm">{currentProperty.description}</p>
              <p className="text-white/80 text-xs mt-1">📍 {currentProperty.location}</p>
              <p className="text-white/60 text-xs">{currentProperty.distance}</p>
            </div>
          </div>

          {/* Slider area */}
          <div className="flex-1 flex flex-col justify-end">
            {/* Price display */}
            <div className="text-center mb-4">
              <p className="text-xs text-gray-400 mb-1">Ваша оценка</p>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(guess)}</p>
            </div>

            {/* Slider */}
            <div className="mb-4">
              <input
                ref={sliderRef}
                type="range"
                min={min}
                max={max}
                step={500000}
                value={guess}
                onChange={(e) => setGuess(Number(e.target.value))}
                disabled={showAnswer}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#0050cf] disabled:opacity-50"
                style={{
                  background: `linear-gradient(to right, #0050cf ${sliderValue}%, #e5e7eb ${sliderValue}%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{formatPrice(min)}</span>
                <span>{formatPrice(max)}</span>
              </div>
            </div>

            {/* Answer reveal */}
            {showAnswer && (
              <div className="mb-4 p-4 rounded-xl bg-white border border-gray-200 animate-fadeIn">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Ваша цена:</span>
                  <span className="font-semibold text-gray-900">{formatPrice(guess)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Реальная цена:</span>
                  <span className="font-semibold text-[#0050cf]">{formatPrice(currentProperty.price)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Баллы:</span>
                  <span className="font-bold text-lg text-[#0050cf]">+{results[results.length - 1]?.score || 0}</span>
                </div>
                {guess !== currentProperty.price && (
                  <p className="text-xs text-center mt-2 text-gray-500">
                    {guess > currentProperty.price 
                      ? `Переплата: ${formatPrice(guess - currentProperty.price)}`
                      : `Недоплата: ${formatPrice(currentProperty.price - guess)}`
                    }
                  </p>
                )}
              </div>
            )}

            {/* Button */}
            {!showAnswer ? (
              <button
                onClick={handleGuess}
                className="w-full py-4 bg-[#0050cf] text-white font-semibold rounded-xl text-lg active:scale-95 transition-transform"
              >
                Оценить
              </button>
            ) : (
              <button
                onClick={nextRound}
                className="w-full py-4 bg-[#0050cf] text-white font-semibold rounded-xl text-lg active:scale-95 transition-transform"
              >
                {round + 1 >= totalRounds ? 'Результат' : 'Далее →'}
              </button>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // RESULT SCREEN
  if (screen === 'result') {
    const { title, subtitle } = getResultTitle();
    const overpay = getOverpaySummary();

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-1 flex flex-col items-center px-4 py-8">
          <div className="w-full max-w-md text-center">
            {/* Score circle */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle 
                  cx="50" cy="50" r="42" fill="none" stroke="#0050cf" strokeWidth="8"
                  strokeDasharray={`${(totalScore / maxScore) * 264} 264`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">{totalScore}</span>
                <span className="text-xs text-gray-400">/ {maxScore}</span>
              </div>
            </div>

            {/* Result title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-6">{subtitle}</p>

            {/* Overpay summary */}
            <div className="p-4 rounded-xl bg-white border border-gray-200 mb-6">
              <p className="text-sm text-gray-500 mb-1">
                {overpay > 0 ? 'Суммарная переплата' : overpay < 0 ? 'Суммарная недоплата' : 'Точное попадание!'}
              </p>
              <p className={`text-xl font-bold ${overpay > 0 ? 'text-red-500' : overpay < 0 ? 'text-green-600' : 'text-[#0050cf]'}`}>
                {overpay > 0 ? '+' : ''}{formatPrice(Math.abs(overpay))}
              </p>
            </div>

            {/* Round details */}
            <div className="space-y-2 mb-8 text-left">
              {results.map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#0050cf]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[#0050cf]">{r.score}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-900 font-medium truncate">{r.property.title}</p>
                    <p className="text-xs text-gray-400">{r.property.location}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs font-medium text-gray-900">{formatPrice(r.actual)}</p>
                    <p className={`text-xs ${r.guess > r.actual ? 'text-red-400' : r.guess < r.actual ? 'text-green-500' : 'text-gray-400'}`}>
                      {r.guess > r.actual ? '↑' : r.guess < r.actual ? '↓' : '='} {formatPrice(r.guess)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setScreen('start')}
              className="w-full py-4 bg-[#0050cf] text-white font-semibold rounded-xl text-lg active:scale-95 transition-transform"
            >
              Играть снова
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return null;
}

function Footer() {
  return (
    <footer className="py-4 px-4 text-center border-t border-gray-100 bg-white">
      <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
        <span>МедиаХаус © 2024</span>
        <span>•</span>
        <a href="#" className="hover:text-[#0050cf] transition-colors">О проекте</a>
        <span>•</span>
        <a href="#" className="hover:text-[#0050cf] transition-colors">Контакты</a>
      </div>
    </footer>
  );
}
