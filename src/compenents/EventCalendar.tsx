import React from 'react';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import locale from 'antd/es/calendar/locale/ru_RU';
import { useAppSelector } from '../hooks/redux';
import { formatDate } from '../utils/date';
import { v4 as uuidv4 } from 'uuid';

const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const EventCalendar: React.FC = () => {
    const { events } = useAppSelector((state) => state.event);
    
    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = events.filter((ev) => ev.date === formatedDate);

        return (
            <div>
                <ul className="events">
                    {currentDayEvents.map((item) => (
                        <li key={uuidv4()}>{item.info}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <Calendar
            locale={locale}
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
        />
    );
};

export default EventCalendar;
