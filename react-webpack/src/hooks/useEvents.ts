import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
} from "../api/events";
import {
  MutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
export function useGetEvents() {
  return useQuery(["events"], getEvents);
}

function useCreateEvent() {
  const queryClient = useQueryClient();
  return useMutation(createEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
    },
  });
}

function useGetEvent(eventId: any) {
  return useQuery(["event", eventId], () => getEvent(eventId));
}

// function useUpdateEvent() {
//   const queryClient = useQueryClient();
//   return useMutation(updateEvent, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["events"]);
//     },
//   });
// }

function useDeleteEvent() {
  const queryClient = useQueryClient();
  return useMutation(deleteEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
    },
  });
}
