import React, { useEffect, useState } from 'react';

import { Svg, BackgroundCircle, Circle, Time, Label } from './styles';

interface Props {
  size: number;
  progress: number;
  strokeWidth: number;
  circleOneStroke: string;
  circleTwoStroke: string;
  time: string;
  label: string;
}

const ProgressBar: React.FC<Props> = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
  time,
  label
}) => {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, progress, offset]);

  return (
    <Svg width={size} height={size}>
      <BackgroundCircle
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <Circle
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeWidth={strokeWidth}
      />
      <Time x={center} y={center}>
        {time}
      </Time>
      <Label x={center} y={center + 30}>
        {label}
      </Label>
    </Svg>
  );
};

export default ProgressBar;
