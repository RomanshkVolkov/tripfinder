export function fadeInBottom(duration: number = 0.3) {
  return {
    from: {
      top: '100%',
      opacity: 0.5,
      transition: {
        type: 'easeInOut',
        duration: duration,
      },
    },
    to: {
      top: 0,
      opacity: 1,
      transition: {
        type: 'easeInOut',
        duration: duration,
      },
    },
  };
}

export function fromOpacity(duration: number = 0.5, delay: number = 0.5) {
  return {
    from: {
      opacity: 0,
      transition: {
        type: 'easeInOut',
        duration: duration,
        delay: delay,
      },
    },
    to: {
      opacity: 1,
      transition: {
        type: 'easeInOut',
        duration: duration,
        delay: delay,
      },
    },
  };
}
