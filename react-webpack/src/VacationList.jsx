import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const VacationRequestListPage = () => {
  const classes = useStyles();

  const [events, setEvents] = useState([
    {
      id: 'abc123',
      title: 'Meeting',
      description: 'Team meeting',
      startDateTime: '2023-06-01T09:00:00',
      endDateTime: '2023-06-01T10:00:00',
      status: 'Pending',
    },
    {
      id: 'def456',
      title: 'Presentation',
      description: 'Project presentation',
      startDateTime: '2023-06-02T14:00:00',
      endDateTime: '2023-06-02T16:00:00',
      status: 'Approved',
    },
    // Add more events as needed
  ]);

  const handleStatusChange = (eventId, newStatus) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return { ...event, status: newStatus };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h5" component="h2" className={classes.title}>
        Events
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Start Date/Time</TableCell>
              <TableCell>End Date/Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.id}</TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>{event.startDateTime}</TableCell>
                <TableCell>{event.endDateTime}</TableCell>
                <TableCell>{event.status}</TableCell>
                <TableCell>
                  {event.status === 'Pending' && (
                    <>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleStatusChange(event.id, 'Approved')}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleStatusChange(event.id, 'Rejected')}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VacationRequestListPage;