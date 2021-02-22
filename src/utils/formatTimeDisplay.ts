const formatTimer: (seconds: number) => string = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);

  return `${min < 9 ? `0${min}` : min}:${sec < 9 ? `0${sec}` : sec}`;
};

export default formatTimer;
