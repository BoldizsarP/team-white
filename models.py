from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Event(Base):
    __tablename__ = 'events'

    id = Column(String, primary_key=True)
    title = Column(String)
    description = Column(String)
    startDateTime = Column(DateTime)
    endDateTime = Column(DateTime)