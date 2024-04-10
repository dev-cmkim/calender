import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HOME = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const BUTTON = styled.button`
  width: 60px;
  height: 60px;
  background: none;
  border: 1px solid #ddd;
  margin: 0 10px;

  &:hover {
    border: 2px solid #ccc;
  }
`


const Home = () => {

  return (
    <HOME>
      <h2>이것은 유승희 약속잡기 캘린더 📅</h2>
      <h3>당신은 유승희 입니까? </h3>
      <Link to="/calender/me"><BUTTON>⭕️</BUTTON></Link>
      <Link to="/calender/other"><BUTTON>❌</BUTTON></Link>
    </HOME>
  )
};

export default Home;