import React from 'react';
import './InputTask.css';
import { useRecoilValue } from 'recoil';
import { InputTitleState } from '../states/InputTitleState';

const InputTask = () => {
  const inputTitle = useRecoilValue(InputTitleState);
  const handelClick = () => {
    console.log(inputTitle)
  }
  return (
    <div className='inputField'>
      <input type="text" className='inputTitle'/>
      <button type='button' className='addButton' onClick={handelClick}>タスクを追加</button>
    </div>
  )
}

export default InputTask
