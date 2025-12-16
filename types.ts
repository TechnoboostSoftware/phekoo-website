import React from 'react';

export interface ParallaxLayerProps {
  speed: number;
  scrollY: number;
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
}

export interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  isUser: boolean;
}

export enum GameMode {
  BLUFF = 'BLUFF',
  TRIVIA = 'TRIVIA'
}

export enum PhoneScreenMode {
  LOBBY = 'LOBBY',
  QUESTION = 'QUESTION',
  INPUT = 'INPUT',
  VOTING = 'VOTING',
  MAFIA = 'MAFIA'
}