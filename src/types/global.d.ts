declare module 'gsap' {
  export * from 'gsap';
}

declare module 'gsap/ScrollTrigger' {
  export * from 'gsap/ScrollTrigger';
}

declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    destroy(): void;
  }
}

declare module 'split-type' {
  export default class SplitType {
    constructor(element: string | HTMLElement, options?: any);
  }
}
