import { atom } from 'recoil';

export const InputTitleState = atom<string>(
  {
    key: "InputTitleState",
    default: 'first Input Title',
  }
);

// どこの範囲で使えるかの設定をする
