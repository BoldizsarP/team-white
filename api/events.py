from models import Event
# notgen
from database import Session
# not gen
import json


def get_events():
    with Session() as session:
        events = session.query(Event).all()
        return [event.to_dict() for event in events]

def create_event(request_body):
    with Session() as session:
        event_data = json.loads(request_body)
        event = Event(**event_data)
        session.add(event)
        session.commit()
        return event.to_dict(), 201

def get_event(eventId):
    with Session() as session:
        event = session.query(Event).filter(Event.id == eventId).first()
        if event:
            return event.to_dict()
        else:
            return "Event not found", 404

def update_event(eventId, request_body):
    with Session() as session:
        event_data = json.loads(request_body)
        event = session.query(Event).filter(Event.id == eventId).first()
        if event:
            for key, value in event_data.items():
                setattr(event, key, value)
            session.commit()
            return event.to_dict()
        else:
            return "Event not found", 404

def delete_event(eventId):
    with Session() as session:
        event = session.query(Event).filter(Event.id == eventId).first()
        if event:
            session.delete(event)
            session.commit()
            return None, 204
        else:
            return "Event not found", 404
