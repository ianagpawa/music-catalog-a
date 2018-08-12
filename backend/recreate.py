from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import json

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
  playlist = Playlist(user_id=int(playlist_obj["user_id"]), 
    name=playlist_obj["name"], 
    description=playlist_obj["description"], 
    time_created=datetime.strptime(playlist_obj['time_created'], "%B %d, %Y"))
  session.add(playlist)


def getPlaylist(id):
  return session.query(Playlist).filter_by(id=id).one()



def addSong(song_obj):
  youtube_link = (song_obj['youtube']).split("=")
  song = Song(user_id=int(song_obj['user_id']),
    title=song_obj['title'],
    artist=song_obj['artist'],
    genre=song_obj['genre'],
    youtube=youtube_link,
    time_created=datetime.strptime(song_obj['time_created'], "%B %d, %Y"),
    playlist=getPlaylist(int(song_obj['playlist_id'])),
    playlist_id=int(song_obj['playlist_id']))
  session.add(song)


def loadPlaylists(playlists):
  for playlist in playlists:
      addPlaylist(playlist)
  session.commit()

def load_songs(json_file):
  with open(json_file) as f:
    data = json.load(f)
    for song in data:
      addSong(song)
  session.commit()

loadPlaylists(test)
load_songs('SONGS.json')