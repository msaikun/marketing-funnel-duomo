import { useEffect, useMemo, useState } from 'react';
import style from './progressBar.module.scss';

interface IProgressBarProps {
  stroke?: string;
  percentage?: number;
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export const ProgressBar = ({
  progress,
  percentage,
  stroke = '#0CBD68',
  size = 178,
  strokeWidth = 12,
}: IProgressBarProps) => {
  const [offset, setOffset] = useState(0);

  const center = useMemo(() => size / 2, [size]);
  const radius = useMemo(() => center - strokeWidth / 2, [center, strokeWidth]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;

    setOffset(progressOffset);
  }, [setOffset, circumference, progress, offset]);

  return (
    <div className={style.wrapper}>
      <svg width={size} height={size} className={style.svg}>
        <circle
          stroke={stroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={style.circle}
          transform={`rotate(-90 ${center} ${center})`}
        />

        {percentage && (
          <text
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
            className={style.text}
          >
            <tspan>{percentage}%</tspan>
          </text>
        )}
      </svg>
    </div>
  );
};
