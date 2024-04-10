const formatTimer: (seconds: number) => string = (secondss: number) => {
  const min = Math.floor(secondss / 60);
  const sec = Math.floor(secondss % 60);

  return `${min < 9 ? `0${min}` : min}:${sec < 9 ? `0${sec}` : sec}`;
};

export default formatTimer;
