import React, { useState } from "react";
import { useGetEvents } from "./hooks/useEvents";

// Mock data representing events
const events = [
  {
    id: "1",
    title: "Event 1",
    description: "This is event 1",
    startDateTime: "2023-05-31T09:00:00Z",
    endDateTime: "2023-05-31T10:30:00Z",
  },
  {
    id: "2",
    title: "Event 2",
    description: "This is event 2",
    startDateTime: "2023-06-01T14:00:00Z",
    endDateTime: "2023-06-01T16:00:00Z",
  },
];

function EventList() {
  const eventsQ = useGetEvents();
  const events = eventsQ.data ? eventsQ.data.data : [];
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-gray-100 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl text-center mb-6">Event List</h1>
        {events.map((event: any) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: (typeof events)[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-xl mb-2">{event.title}</h3>
      <p className="text-gray-700 mb-2">{event.description}</p>
      <p className="text-gray-600">Start: {event.startDateTime}</p>
      <p className="text-gray-600">End: {event.endDateTime}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <EventList />
    </div>
  );
}

export default App;
