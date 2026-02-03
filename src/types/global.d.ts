// src/types/global.d.ts
export {}; // garante que o arquivo seja tratado como módulo

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}
