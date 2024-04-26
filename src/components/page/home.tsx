import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HOME = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const TITLE = styled.div`
  font-size: 20px;
  font-weight: 700;
`
const SUB_TITLE = styled.div`
  margin: 20px 0;
  font-size: 16px;
  font-weight: 700;
`

const BUTTON = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: none;
  border: 1px solid #ddd;
  margin: 0 10px;

  &:hover {
    border: 2px solid #ccc;
  }
`
const INPUT = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid;
  margin-bottom: 10px;
`

const P_SUB = styled.p`
  font-size: 14px;
  color: #333;

`
const P = styled.p`
  margin-top: 30px;
  font-size: 11px;
`

const BTN_BACK = styled.button`
  border: none;
  background: none;
  color: #222;
`
const BTN_CON = styled.button`
  border: none;
  background: none;
  color: darkblue;
`


const Home: React.FC = () => {
  const [checkMe, setCheckMe] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const passwordCheck = () => {
    if (password === '1234') {
      alert("성공")
    }  else {
      alert(password)
    }
  }

  return (
    <HOME>
      <h1>📅</h1>
      <TITLE>이것은 유승희<br />약속잡기 캘린더 </TITLE>
      <SUB_TITLE>당신은 유승희 입니까? </SUB_TITLE>
      {checkMe ?
        <div>
          <P_SUB>비밀번호를 입력하세요</P_SUB>
          <INPUT type='password' value={password} onChange={handleInputChange} />
          <BTN_BACK onClick={() => setCheckMe(false)}>뒤로가기</BTN_BACK>
          <BTN_CON onClick={passwordCheck}>확인</BTN_CON>
        </div>
        :
        <div>
          <BUTTON onClick={() => setCheckMe(true)}>⭕️</BUTTON>
          <Link to="/calender/other"><BUTTON>❌</BUTTON></Link>
        </div>
      }

    </HOME>
  )
};

export default Home;