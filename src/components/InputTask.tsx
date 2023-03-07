import React from 'react';
import './InputTask.css';
import { useRecoilSnapshot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { InputTitleState } from '../states/InputTitleState';
import { useCallback } from 'react';

const InputTask = () => {
  // const inputTitle = useRecoilValue(InputTitleState);   // atomを呼び出す時に使用する。useRecoilValue
  // const setInputTitle = useSetRecoilState(InputTitleState); // Recoilの更新用関数 useSetRecoilState
  const [inputTitle, setInputTitle] = useRecoilState(InputTitleState);
  const handelClick = () => console.log(inputTitle)

  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
    console.log(inputTitle);
  }, [inputTitle])

  return (
    <div className='inputField'>
      <input type="text" className='inputTitle' onChange={handleChangeInput}/>
      <button type='button' className='addButton' onClick={handelClick}>タスクを追加</button>
    </div>
  )
}

export default InputTask
