import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import moment from "moment";

const CalenderWrap = styled.div`
   text-align: center;
   margin-top: 30px;
`;

const CalenderInner = styled.div`
   color:blue;
`;

const CalendarComponent = () => {
    const [currYear, setCurrYear] = useState<number>(moment().year());
    const [currMonth, setCurrMonth] = useState<number>(moment().month() + 1);
    const [currentDate, setCurrentDate] = useState<moment.Moment>(moment());
    const [dayNames] = useState<string[]>(['일', '월', '화', '수', '목', '금', '토']);
    const [weeks, setWeeks] = useState<any[][]>([]);

    useEffect(()=> {
        makeCalendar();
    },[currMonth, currYear]);

    const beforeMonth = () => {
        setCurrentDate(prevDate => prevDate.subtract(1, 'months'));
        setCurrMonth(currentDate.month() + 1);
    };

    const nextMonth = () => {
        setCurrentDate(prevDate => prevDate.add(1, 'months'));
        setCurrMonth(currentDate.month() + 1);
    };

    const makeCalendar = () => {
        const daysInMonth = moment([currYear, currMonth - 1]).daysInMonth();
        const firstDay = moment([currYear, currMonth - 1, 1]).day();

        let newWeeks: number[][] = [];
        let week: any[] = [];

        for (let i = 0; i < firstDay; i++) {
            week.push('');
        }

        for (let day = 1; day <= daysInMonth; day++) {
            week.push(day);

            if (week.length === 7) {
                newWeeks.push(week);
                week = [];
            }
        }

        if (week.length > 0) {
            while (week.length < 7) {
                week.push('');
            }
            newWeeks.push(week);
        }

        setWeeks(newWeeks);
    };


    const selectedDay = (day: number) => {
        const today = moment().format('YYYY-MM-DD');
        const setDay = moment([currYear, currMonth - 1, day]).format('YYYY-MM-DD');

        if (today === setDay) {
            const selectedTd = document.getElementById('id-' + day);
            if (selectedTd) {
                selectedTd.classList.add('clickable');
            }
        }
    };

     return (
        <div>
            <button onClick={beforeMonth}>이전 달</button>
            <button onClick={nextMonth}>다음 달</button>
            <table>
                <thead>
                    <tr>
                        {dayNames.map((name, index) => (
                            <th key={index}>{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, index) => (
                        <tr key={index}>
                            {week.map((day, index) => (
                                <td key={index} onClick={() => selectedDay(day)}>
                                    {day}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

)};
export default CalendarComponent;