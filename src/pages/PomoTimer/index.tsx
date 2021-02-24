import React, { useEffect, useState, useRef } from 'react';

import { FaGithub } from 'react-icons/fa';

import ProgressBar from '../../components/ProgressBar';

import PomodoroModes from '../../utils/PomodoroModes';
import formatTimeDisplay from '../../utils/formatTimeDisplay';

import {
  Container,
  Title,
  Button,
  ButtonArea,
  SelectButtonArea,
  SelectButton,
  Footer
} from './styles';

const PomoTimer: React.FC = () => {
  // const [progress, setProgress] = useState(100);
  const [totalTime, setTotalTime] = useState(PomodoroModes[0].time);
  const [currentTime, setCurrentTime] = useState(totalTime);
  const [loop, setLoop] = useState(false);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  // 0: pomodoro; 1: short break; 2: long break;
  const [mode, setMode] = useState(0);

  const interv = useRef({} as NodeJS.Timeout);

  const progress = (Math.floor(currentTime) / totalTime) * 100;

  function resetTimer() {
    setPaused(false);
    setRunning(false);
    setCurrentTime(totalTime);

    clearInterval(interv.current);
  }

  function startTimer() {
    setRunning(true);
    setPaused(false);

    const timer = setInterval(() => {
      setCurrentTime(prevtime => prevtime - 0.01);
    }, 10);

    interv.current = timer;
  }

  function pauseTimer() {
    clearInterval(interv.current);
    setRunning(false);
    setPaused(true);
  }

  function changeMode(mode: number) {
    setTotalTime(PomodoroModes[mode].time);
    setCurrentTime(PomodoroModes[mode].time);
    setMode(mode);
    setPaused(false);
    setRunning(false);
    clearInterval(interv.current);
  }

  useEffect(() => {
    if (currentTime < 0) {
      setRunning(false);
      setPaused(false);
      setCurrentTime(totalTime);
      resetTimer();
    }
  }, [currentTime, setCurrentTime, running, setRunning]);

  return (
    <Container>
      <Title>
        pomo<strong>timer</strong>
      </Title>
      <SelectButtonArea>
        {PomodoroModes.map((item, key) => (
          <SelectButton
            key={key}
            active={mode === key}
            onClick={() => changeMode(key)}
          >
            {item.title}
          </SelectButton>
        ))}
      </SelectButtonArea>
      <ProgressBar
        progress={progress}
        label={PomodoroModes[mode].label}
        time={formatTimeDisplay(currentTime)}
        size={280}
        strokeWidth={6}
        circleOneStroke='rgba(255,255,255,0.3)'
        circleTwoStroke='#ffffff'
      />
      <ButtonArea>
        <Button visible={!running} onClick={() => startTimer()}>
          {paused ? 'RESUME' : 'START'}
        </Button>
        <Button visible={paused} onClick={() => resetTimer()}>
          RESET
        </Button>
        <Button visible={running} onClick={() => pauseTimer()}>
          PAUSE
        </Button>
      </ButtonArea>
      <Footer>
        <FaGithub />
        <a
          href='http://github.com/vini-coelho'
          target='_blank'
          rel='noreferrer'
        >
          Made with ♥ by Vinicius Coelho.
        </a>
      </Footer>
    </Container>
  );
};

export default PomoTimer;
