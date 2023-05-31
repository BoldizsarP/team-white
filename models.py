from datetime import datetime
import uuid
from sqlalchemy import Column, String, DateTime, Integer
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String)
    email = Column(String)
    role = Column(String)

    
class Event(Base):
    __tablename__ = 'events'

    id = Column(String, primary_key=True,default=lambda:str(uuid.uuid4()))
    title = Column(String)
    description = Column(String)
    startDateTime = Column(DateTime)
    endDateTime = Column(DateTime)

    @classmethod
    def from_dict(cls, event_dict):
        event = cls()
        event.id = event_dict.get('id')
        event.title = event_dict.get('title')
        event.description = event_dict.get('description')
        event.startDateTime = datetime.fromisoformat(event_dict.get('startDateTime'))
        event.endDateTime = datetime.fromisoformat(event_dict.get('endDateTime'))
        return event

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'startDateTime': self.startDateTime.isoformat(),
            'endDateTime': self.endDateTime.isoformat()
        }
    def update_from_dict(self, event_dict):
        self.id = event_dict.get('id', self.id)
        self.title = event_dict.get('title', self.title)
        self.description = event_dict.get('description', self.description)
        start_date_time = event_dict.get('startDateTime')
        if start_date_time:
            self.startDateTime = datetime.fromisoformat(start_date_time)
        end_date_time = event_dict.get('endDateTime')
        if end_date_time:
            self.endDateTime = datetime.fromisoformat(end_date_time)
