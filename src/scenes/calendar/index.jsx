import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState(null); //evenets we add to our calendar

  const handleDateClick = (selectedDate) => {
    // TODO: create a modal
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selectedDate.dateStr}-${title}`,
        title,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });
    }
  };

  const handleEventClick = (selectedEvent) => {
    if (
      window.confirm(`Are you sure you want to delete the event '${selectedEvent.event.title}'`)
    ) {
      selectedEvent.event.remove();
    }
  };

  return (
    <Box m='20px'>
      <Header title='Calendar' subtitle='Full Calendar Interactive Page' />

      <Box display='flex' justifyContent='space-between'>
        {/* CALENDAR SIDE */}
        <Box flex='1 1 20%' bgcolor={colors.primary[400]} p='15px' borderRadius='4px'>
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents &&
              currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: colors.greenAccent[500],
                    margin: '10px 0',
                    borderRadius: '2px',
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
          </List>
        </Box>
        <Box flex='1 1 100%' ml='15px'>
          <FullCalendar
            height='75vh'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            // store in localhost
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            // store in db based on user id
            // update to make changes to events
            initialEvents={[
              {
                id: '12315',
                title: 'All-day event',
                date: '2024-07-20',
              },
              {
                id: '5123',
                title: 'Timed event',
                date: '2022-09-28',
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
