/**
 * Vertical columns of red Asian characters used as the hero background.
 * Pure SVG text — no images, no external fonts.
 *
 * Each column picks a deterministic slice of the glyph bank so the layout
 * is stable across renders but reads as varied "rain" content.
 */
const GLYPHS = [
  "アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルグズヅブプ",
  "エェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポヴッン",
  "亜哀愛悪握圧扱宛嵐安暗案以衣位囲医伊依井偉央映易役疫液益駅悦越閲円園宴延援沿演炎煙燕縁",
  "遠塩園汚央応往押旺欧殴桜翁奥横岡屋億憶概涯貝外害慨概該郭隔革学岳楽額顎掛潟",
  "CREDITS / 信用 / TOKEN / 領域 / 暗号 / 通貨 / WALLET / 財布 / SOL / トランザクション",
  "価値 / 評価 / 交換 / 決済 / 送金 / 投資 / 流動性 / ガバナンス / 分散 / 自律",
  "WORK / 仕事 / BUILD / 作る / SHIP / 届ける / GROW / 育つ / LEARN / 学ぶ",
];

function pickColumn(seed: number, length: number): string {
  const bank = GLYPHS[seed % GLYPHS.length];
  let out = "";
  for (let i = 0; i < length; i++) {
    out += bank[(seed * (i + 1) * 7) % bank.length];
  }
  return out;
}

interface TextRainProps {
  /** Number of vertical columns to render */
  columns?: number;
  className?: string;
  /** Tilt columns slightly so it reads as a wide rain backdrop */
  rotate?: number;
}

export function TextRain({ columns = 14, className, rotate = -4 }: TextRainProps) {
  const gap = 100 / columns;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)`, transformOrigin: "50% 50%" }}
    >
      {Array.from({ length: columns }).map((_, i) => {
        const left = i * gap + (gap - gap * 0.6) / 2;
        const length = 80 + ((i * 13) % 60);
        const text = pickColumn(i + 3, length);
        const driftSeed = (i * 5.7) % 9;
        return (
          <div
            key={i}
            className="text-rain-col absolute"
            style={{
              left: `${left}%`,
              top: 0,
              height: "120%",
              animation: `rain-on ${16 + driftSeed}s ease-in-out infinite`,
              animationDelay: `-${driftSeed * 1.4}s`,
            }}
          >
            {text}
          </div>
        );
      })}

      {/* Vignette over the rain so the headline stays legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, var(--color-paper) 80%)",
        }}
      />
    </div>
  );
}