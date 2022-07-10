import { useCallback, useState } from "react";
import "@fullcalendar/react/dist/vdom"; // add if using vite
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventContentArg,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin
import listGridPlugin from "@fullcalendar/list"; // a plugin
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"; // a plugin!
import allLocales from "@fullcalendar/core/locales-all";
import {
  Box,
  Container,
  Stack,
  styled,
  Tooltip,
  TooltipProps,
  Typography,
} from "@mui/material";

import { schedulerStyles, toolTipStyles } from "./Scheduler.styles";

const events = [
  {
    title: "Room 1",
    date: "2022-07-10",
    start: "2022-07-10T14:30:00",
    end: "2022-07-11T15:30:00",
    allDay: false,
    extendedProps: {
      date: "2022-07-10",
      startTime: "2022-07-10T14:30:00",
      endTime: "2022-07-10T15:30:00",
      title: "Demo3 ",
      venue: "amumu",
      eventType: "Metting",
      department: "BioChemistry",
    },
  },
  {
    title: "Room 4",
    date: "2022-07-11",
    start: "2022-07-12T14:30:00",
    end: "2022-07-15T15:30:00",
    allDay: false,
    extendedProps: {
      date: "2022-07-10",
      startTime: "2022-07-9T14:30:00",
      endTime: "2022-07-10T15:30:00",
      title: "Demo3 ",
      venue: "amumu",
      eventType: "Metting",
      department: "BioChemistry",
    },
  },
  {
    title: "Room 2",
    start: "2022-07-10T16:30:00",
    end: "2022-07-10T21:30:00",
    extendedProps: {
      title: "Demo2 ",
      date: "2022-07-07",
      venue: "leesin",
      eventType: "Metting",
      startTime: "2022-07-10T16:30:00",
      endTime: "2022-07-10T21:30:00",
    },
    allDay: false,
  },
  {
    title: "Room 3",
    start: "2022-07-10T16:30:00",
    end: "2022-07-10T21:30:00",
    allDay: false,
    extendedProps: {
      title: "Demo1 ",
      venue: "axtrox",
      eventType: "Metting",
      date: "2022-07-10",
      startTime: "2022-07-10T16:30:00",
      endTime: "2022-07-10T21:30:00",
    },
  },
];

const TooltipStyled = styled(({ className, children, ...props }) => (
  <Tooltip
    title={""}
    {...props}
    componentsProps={{ tooltip: { className: className } }}
  >
    {children}
  </Tooltip>
))(`
    color: lightblue;
    background-color: green;
    font-size: 1.5em;
`);

const SchedulerPage: React.FC = () => {
  const handleDateClick = (arg: any) => {
    alert(arg.dateStr);
  };
  const handleEventClick = useCallback((clickInfo: any) => {
    console.log(clickInfo.event.extendedProps);
  }, []);

  // render event in calendar
  const _renderInnerContent = (innerProps: any) => {
    return (
      <div className="fc-event-main-frame">
        <div className="fc-event-title-container">
          <div className="fc-event-title fc-sticky">
            {innerProps.event.title}
          </div>
        </div>
      </div>
    );
  };

  //render event detail in calendar
  const _renderElement = (arg: any) => {
    return (
      <Box>
        <Typography component="h2">
          <a href="google.com" className="event-title">
            {arg.event.title}
          </a>
        </Typography>
        <Box>
          <Typography component="h2" className="event-label">
            Event Type: {arg.event.extendedProps.eventType}
          </Typography>
        </Box>
        <Box>
          <Typography component="h2" className="event-label">
            Venue: {arg.event.extendedProps.venue}
          </Typography>
        </Box>
        <Box>
          <Typography component="h2" className="event-label">
            Date: {arg.event.extendedProps.date}
          </Typography>
        </Box>
        <Box>
          <Typography component="h2" className="event-label">
            Start Time: {arg.event.extendedProps.startTime}
          </Typography>
        </Box>
        <Box>
          <Typography component="h2" className="event-label">
            End Time: {arg.event.extendedProps.endTime}
          </Typography>
        </Box>
      </Box>
    );
  };
  // handle tooltip event detail
  const handleEventContent = (arg: EventContentArg) => {
    return (
      <TooltipStyled title={_renderElement(arg)} arrow>
        {_renderInnerContent(arg)}
      </TooltipStyled>
    );
  };

  return (
    <Container sx={schedulerStyles}>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          listGridPlugin,
          interactionPlugin,
          resourceTimelinePlugin,
        ]}
        initialView="dayGridWeek"
        headerToolbar={{
          left: "prev,today,next",
          center: "title",
          right: "dayGridDay,dayGridWeek,dayGridMonth,listYear",
        }}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        locales={allLocales}
        locale="en"
        displayEventTime={false}
        events={events}
        eventDisplay="block"
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        eventContent={(arg: EventContentArg) => handleEventContent(arg)}
      />
    </Container>
  );
};

export default SchedulerPage;
