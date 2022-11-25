const createYoyo = (duration = 3, repeatType = 'reverse') => {
  return { repeat: Infinity, repeatType, duration };
};

export default createYoyo;
