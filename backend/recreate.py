from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime

from db_setup import Base, Playlist, Song, User

engine = create_engine('sqlite:///musiccatalog.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()

user = User(name="Ian Agpawa", email="agpawaji@gmail.com")
session.add(user)

test = [
      {
        "description": "Songs to lose yourself in the moment", 
        "id": 3, 
        "name": "Mobiuroboros", 
        "time_created": "March 18, 2017", 
        "user_id": 1
      }, 
      {
        "description": "Mashups and remixes of the unexpected", 
        "id": 4, 
        "name": "Portmanteu", 
        "time_created": "March 19, 2017", 
        "user_id": 1
      }, 
      {
        "description": "Live renditions", 
        "id": 2, 
        "name": "Anicca", 
        "time_created": "March 18, 2017", 
        "user_id": 1
      }, 
      {
        "description": "Songs that mark earlier points in my life.  ", 
        "id": 5, 
        "name": "Nostalgia", 
        "time_created": "May 19, 2017", 
        "user_id": 1
      }, 
      {
        "description": "Ballads", 
        "id": 6, 
        "name": "Howlin'", 
        "time_created": "May 20, 2017", 
        "user_id": 1
      }, 
      {
        "description": "Songs from afar", 
        "id": 7, 
        "name": "Foreign", 
        "time_created": "May 20, 2017", 
        "user_id": 1
      }, 
      {
        "description": "Hip hop and rap", 
        "id": 8, 
        "name": "Raptastic", 
        "time_created": "May 20, 2017", 
        "user_id": 1
      }, 
      {
        "description": "Randomly encountered in synchronicity", 
        "id": 1, 
        "name": "Happenstance", 
        "time_created": "March 18, 2017", 
        "user_id": 1
      }, 
      {
        "description": "Songs without lyrics", 
        "id": 9, 
        "name": "Soundscape", 
        "time_created": "August 01, 2017", 
        "user_id": 1
      }]


def addPlaylist(playlist_obj):
    playlist = Playlist(user_id=int(playlist_obj["user_id"]), name=playlist_obj["name"], description=playlist_obj["description"], time_created=datetime.strptime(playlist_obj['time_created'], "%B %d, %Y"))
    session.add(playlist)


def getPlaylist(id):
    return None


def addSong(song_obj):
    song = Song(user_id=1,
                title="Jamming on the G2",
                artist='Shook',
                genre="Electronic Funk",
                youtube="7O1iKYcUTTk",
                playlist=1)
    session.add(song)


def loadPlaylists(playlists):
    for playlist in playlists:
        addPlaylist(playlist)
    session.commit()

loadPlaylists(test)