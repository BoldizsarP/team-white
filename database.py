from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base

# Create a SQLite database file
engine = create_engine('sqlite:///events.db')

# Create a session factory
Session = sessionmaker(bind=engine)

# not gen
if __name__ =="__main__":
# end not gens
    # Drop all existing tables
    Base.metadata.drop_all(engine)
    
    # Create all tables
    Base.metadata.create_all(engine)
