export const PRECISION = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: PRECISION },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.25, ease: PRECISION },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: PRECISION },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: PRECISION },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: PRECISION },
  },
};

export const staggerContainer = (stagger = 0.08, delayStart = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delayStart,
    },
  },
});

export const cardHover = {
  y: -4,
  scale: 1.015,
  transition: { duration: 0.18, ease: PRECISION },
};

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1, ease: PRECISION },
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: PRECISION },
  },
};
