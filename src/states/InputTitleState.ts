import { atom } from 'recoil';

export const InputTitleState = atom<string>(
  {
    key: "InputTitleState",
    default: '',
  }
);

// 何を状態として管理したいのか設定
// Keyの設定
// どこの範囲で使えるかの設定をする
