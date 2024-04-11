import React from "react";
import styled from 'styled-components';
import moment from "moment";
import { useParams } from 'react-router-dom';

const CalenderWrap = styled.div`
   text-align: center;
   margin-top: 30px;
`;

const CalenderInner = styled.div`
   color:blue;
`;

const Calender = () => {
    const { type } = useParams();
    const currentYear: any = moment().year();
    const currentMonth: any = moment().month() + 1;
    const currentDate: any = moment();
    let dayNames: any;
    let weeks: any;

    console.log(currentYear, currentMonth)


    return (
        <CalenderWrap>
            {type ==='me'?
                <CalenderInner>
                    <h4>본인</h4>
                </CalenderInner>
                :
                <CalenderInner>
                    <h4>본인아님</h4>
                </CalenderInner>
            }
            <table>
            </table>
        </CalenderWrap>
    )
}


export default Calender;