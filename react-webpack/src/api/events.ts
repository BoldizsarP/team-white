import axios from "axios";
const API_URL = "/events";

export const getEvents = () => axios.get(`${API_URL}/events`);
export const createEvent = (eventData: any) =>
  axios.post(`${API_URL}/events`, eventData);
export const getEvent = (eventId: any) =>
  axios.get(`${API_URL}/events/${eventId}`);
export const updateEvent = (eventId: any, eventData: any) =>
  axios.put(`${API_URL}/events/${eventId}`, eventData);
export const deleteEvent = (eventId: any) =>
  axios.delete(`${API_URL}/events/${eventId}`);
