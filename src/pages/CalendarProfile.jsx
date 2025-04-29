import React from 'react';
import ProfilNavigation from '../components/ProfilNavigation';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import MyCalendar from '../components/Calendar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { myAxios } from '../api/axios';
import { useEffect } from 'react';

function CalendarProfile() {
    const { egyeni_vegpont } = useParams();
    const [times, setTimes] = useState([]);


    const getAdat = async (vegpont, asyFgv) => {
        try {
            const response = await myAxios.get(vegpont);
            asyFgv([...response.data]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAdat(`/api/all-host-dates/${egyeni_vegpont}`, setTimes);
    }, [egyeni_vegpont]);

    return (
        <>
            <div className="kulso">
                <div className="kozepso">
                    <ProfilNavigation />
                    <div className="belso">
                        <MyCalendar times={times} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalendarProfile;
