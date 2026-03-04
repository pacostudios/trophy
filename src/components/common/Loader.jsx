import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [morph, setMorph] = useState(false);
  const [exit, setExit] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2500;
    const intervalTime = duration / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => setMorph(true), 300);
          setTimeout(() => setExit(true), 2500);
          setTimeout(() => {
            setVisible(false);
            if (onFinish) {
              onFinish();
            }
          }, 4000);

          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className={`loader-wrapper ${exit ? "zoom-out-exit" : ""}`}>
      <div className={`loader-content ${morph ? "morph-active" : ""}`}>
        <div className="stage">
          <svg viewBox="0 0 512 512" className="trophy-svg">
            <g className="trophy-accents">
              <path d="M180,110 C145,110 135,165 150,190 C155,200 165,200 180,195" />
              <path d="M332,110 C367,110 377,165 362,190 C357,200 347,200 332,195" />
              <path d="M256,260 L256,360" />
              <path d="M210,360 L302,360 M195,385 L317,385" />
            </g>

            <path
              className="trophy-cup"
              d="M180,80 L332,80 C332,80 332,210 256,260 C180,210 180,80 180,80 Z"
            />

            <path
              className="g-emblem"
              d="M 285,160 
              C 278,153 260,153 250,160 
              C 240,168 240,190 250,200 
              C 258,208 270,208 278,200 
              L 278,185 
              L 265,185 
              M 255,180
              L 282,180 
              L 282,205 
              C 270,220 240,220 225,205 
              C 210,190 210,160 225,145 
              C 240,130 275,130 290,145"
            />
          </svg>
        </div>

        <div className="text-group">
          <div className="brand-text-container">
            {"GLENROY".split("").map((letter, i) => (
              <span key={i} className="letter">
                {letter}
              </span>
            ))}
          </div>
          <div className="tagline">Sports and Trophies</div>
        </div>

        {!morph && (
          <div className="interaction-zone">
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}