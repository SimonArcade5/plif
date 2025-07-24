import React from 'react';

export enum Tool {
  CROP = 'CROP',
  FILTERS = 'FILTERS',
  ADJUST = 'ADJUST',
  TEXT = 'TEXT',
  STICKERS = 'STICKERS',
  AI = 'AI',
}

export interface Filter {
  name: string;
  style: string;
}

export type LayerType = 'image' | 'text' | 'sticker' | 'insert-image';

export interface BaseLayer {
  id: string;
  type: LayerType;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

export interface ImageLayer extends BaseLayer {
  type: 'image';
  src: string;
  originalSrc: string; // Keep original to reset adjustments
  filter: string;
  // Adjustments
  brightness: number; // 1
  contrast: number; // 1
  saturate: number; // 1
  sepia: number; // 0
  hueRotate: number; // 0
}

export interface InsertImageLayer extends BaseLayer {
  type: 'insert-image';
  src: string;
  originalSrc: string;
  filter: string;
  // Adjustments
  brightness: number; // 1
  contrast: number; // 1
  saturate: number; // 1
  sepia: number; // 0
  hueRotate: number; // 0
}


export interface TextLayer extends BaseLayer {
  type: 'text';
  text: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  fontWeight: number;
  // Advanced styles
  strokeColor: string;
  strokeWidth: number;
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

export interface StickerLayer extends BaseLayer {
  type: 'sticker';
  src: string;
  originalSrc: string;
}

export type AnyLayer = ImageLayer | TextLayer | StickerLayer | InsertImageLayer;

export type AdjustableLayer = ImageLayer | InsertImageLayer;

export interface Sticker {
    name: string;
    url: string;
    category: string;
}