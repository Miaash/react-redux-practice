import * as React from 'react';
'react-redux/es/hooks/useSelector';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionPlus, actionMinus } from './index';

export default function App() {
  // state를 꺼내쓸때 useState를 사용함
  // store에 저장되어있는 state가 useSelector의 첫번째 인자로 옴
  // state를 그래도 사용할 것이므로 그대로 리턴
  const state = useSelector(state => state)
  const dispatch = useDispatch;
  console.log(state)
  const plusNumHandler = () => {
    dispatch(actionPlus());
  }
  const minusNumHandler = () => {
    dispatch(actionMinus());
  }

  return (
    <div>
      <h1>{`Count: ${1}`}</h1>
      <button onClick={plusNumHandler}>+</button>
      <button onClick={minusNumHandler}>-</button>
    </div>
  );
}
