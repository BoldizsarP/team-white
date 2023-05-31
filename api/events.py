from models import Event
# notgen
from database import Session
# not gen
import json


def get_events():
    with Session() as session:
        events = session.query(Event).all()
        return [event.to_dict() for event in events]

def create_event(body):
    with Session() as session:
        # not gen
        event = Event.from_dict(body)
        # not gen
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

def update_event(eventId, body):
    with Session() as session:
        event = session.query(Event).filter(Event.id == eventId).first()
        if event:
            event.update_from_dict(body)
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
