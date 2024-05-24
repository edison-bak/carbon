/* 경고 제거기능 */
/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // `useState`를 사용하여 `tan_list`라는 state 변수를 선언합니다.
  // 이 state에는 각 산업단지의 이름과 추천 수를 객체 배열로 초기화합니다.
  const [tan_list, setTanList] = useState([
    // '대구산단'이라는 이름과 초기 추천 수 0을 가진 객체
    { name: '대구산단', 가격:5000, 추천: 0 },
    // '시화산단'이라는 이름과 초기 추천 수 0을 가진 객체
    { name: '시화산단', 가격:3000, 추천: 0 },
    { name: '기화산단', 가격:2000, 추천: 0 }
  ]);

  const sorted_tan_list=[...tan_list].sort((a,b) => a.가격 - b.가격);

  // `추천변경` 함수는 특정 산업단지의 추천 수를 증가시키는 함수입니다.
  // 이 함수는 산업단지의 배열 인덱스를 매개변수로 받습니다.
  function 추천변경(index) {
    // `tan_list`의 현재 상태를 복사하여 새로운 배열 `newList`를 생성합니다.
    let newList = [...sorted_tan_list];
    // 매개변수로 받은 인덱스의 `추천` 값을 1 증가시킵니다. 
    newList[index].추천 += 1;
    // 변경된 새 배열 `newList`로 `sorted_tan_list` state를 업데이트합니다.
    setTanList(newList);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h2>테라 탄소 플랫폼</h2>
      </div>
      <div style={{fontSize:'25px'}}>거래중 배출권</div>
      <div className='tan-list'>
        {sorted_tan_list.map((item, index) => (
          <div key={index} className='tan-list-item'>
            {item.name}  {item.가격}  <span onClick={()=> {추천변경(index)}}>👍</span>{item.추천}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
