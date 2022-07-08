import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// redux를 쓰기 위해서 불러올것! (아래)
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 많이 쓰는 문자열의 경우 변수화 시켜주기
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action 만들어주기
export const actionPlus = () => {
  return {
    type: INCREASE,
  };
};

export const actionMinus = () => {
  return {
    type: DECREASE,
  };
};

// reducer에는 처음에 이전 객체가 담김, 그리고 action객체가 담김
// reducer가 처음 호출될때 state에는 undefined가 할당되므로 default value를 설정해주어야 함
const reducer = (state = 1, action) => {
  // reducer은 항상 새로운 state를 반환해야하므로 변수 선언
  // 왜 state를 새로운 변수에 할당해야할까? 원본 state는 지켜주고 newState에 새롭게 할당해주면서 원래 state와 newState의 변화를 비교하는것
  // 객체 같은 경우 spread를 쓰거나 Object.assign으로 새로운 객체를 만들면 된다.
  let newState = state;
  switch (action.type) {
    case INCREASE:
      return (newState += 1);
    case DECREASE:
      return (newState -= 1);
    // 아무것도 해당되지 않을 때는 원래 state를 리턴
    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
