import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from Base import Base
from User import User

class Playlist(Base):
    '''
    This class is for playlist items.
    Attribute:
        id (int): Playlist id, primary key.
        name (str): Name of playlist.
        description (str): Description of playlist.
        time_created (datetime): Unix timestamp of when playlist was created.
        time_updated (datetime): Unix timestamp of when playlist was updated.
        user_id (int): Id of creator of playlist, foreign key from User id
        user (obj): User object of creator of playlist.

    '''
    __tablename__ = 'playlist'
    id = Column(Integer, primary_key = True)
    name = Column(String(80), nullable = False)
    description = Column(String(250))
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(DateTime(timezone=True), onupdate=func.now())
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(User)
    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'user_id': self.user_id,
            'time_created': self.time_created.strftime("%B %d, %Y")
        }