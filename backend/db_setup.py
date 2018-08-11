import os
import sys
from sqlalchemy import create_engine

from Models.User import User
from Models.Playlist import Playlist
from Models.Song import Song

from Models.Base import Base

engine = create_engine('sqlite:///musiccatalog.db')

Base.metadata.create_all(engine)