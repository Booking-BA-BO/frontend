import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, isSameDay } from 'date-fns';
import hu from 'date-fns/locale/hu';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState, useEffect } from 'react';

const locales = { hu };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const messages = {
  today: 'Ma',
  previous: 'Előző',
  next: 'Következő',
  month: 'Hónap',
  date: 'Dátum',
  event: 'Esemény',
  noEventsInRange: 'Nincs esemény ebben az időszakban',
};
const eventStyleGetter = (event) => {
  return {
    style: {
      backgroundColor: '#81bfb6',
      color: 'white',             
      borderRadius: '5px',
      border: 'none',
      padding: '4px 6px',
    },
  };
};

function MyCalendar({ times }) {
  const [myEvents, setMyEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (Array.isArray(times)) {
        const formatted = times.map((item) => ({
            title: item.nev || 'Esemény',
            start: new Date(item.datum),
            end: new Date(item.datum),
        }));
        setMyEvents(formatted);
    }
}, [times]);

  const handleSelectSlot = (slotInfo) => {
    const selected = slotInfo.start;
    setSelectedDate(selected);
    const formatted = format(selected, 'dd-MM-yyyy');
    console.log(formatted);
  };

  const dayPropGetter = (date) => {
    if (selectedDate && isSameDay(date, selectedDate)) {
      return {
        style: {
          backgroundColor: '#c6e6e3',
        },
      };
    }
    return {};
  };

  return (
    <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%' }}>
        <h2>Naptár</h2>
        <Calendar
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 450 }}
          culture="hu"
          selectable={true}
          onSelectSlot={handleSelectSlot}
          dayPropGetter={dayPropGetter}
          views={['month']}
          defaultView="month"
          messages={messages}
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
