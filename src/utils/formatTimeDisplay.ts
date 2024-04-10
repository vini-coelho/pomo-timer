const formatTimer: (seconds: number) => string = (seconds: number) => {
  const min2 = Math.floor(seconds / 60);
  const sec2 = Math.floor(seconds % 60);

  return `${min2 < 9 ? `0${min2}` : min2}:${sec2 < 9 ? `0${sec2}` : sec2}`;
};

export default formatTimer;
