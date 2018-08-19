from flask import Flask, jsonify
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import sessionmaker

from Models.Base import Base
from Models.User import User
from Models.Playlist import Playlist
from Models.Song import Song

app = Flask(__name__)

engine = create_engine('sqlite:///musiccatalog.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

def get_playlist(playlist_id):
    '''
    get_playlist: Method for getting playlist for catalog.
    Args:
        playlist_id (int): Playlist ID number.
    Returns:
        Object of the playlist
    '''
    return session.query(Playlist).filter_by(id=playlist_id).one()

def get_user(user_id):
    '''
    get_playlist: Method for getting playlist for catalog.
    Args:
        playlist_id (int): Playlist ID number.
    Returns:
        Object of the playlist
    '''
    return session.query(User).filter_by(id=user_id).one()


def get_songs(playlist_id):
    '''
    getSongs:   Method for retrieving songs in a playlist.
    Args:
        playlist_id (int):  Playlist ID number.
    Returns:
        Array of songs.
    '''
    return session.query(Song).filter_by(playlist_id=playlist_id).order_by(desc(Song.id))


@app.route('/')
def index():
    return 'Hello World'


@app.route("/users/JSON/")
def showUsersJSON():
    users = session.query(User).all()
    return jsonify(Users=[user.serialize for user in users])


@app.route("/playlists/JSON/")
def showPlaylistsJSON():
    '''
    showPlaylistsJSON: Method for JSON output of playlists route
    '''
    playlists = session.query(Playlist).all()
    return jsonify(Playlists=[playlist.serialize for playlist in playlists])


@app.route("/playlist/<int:playlist_id>/JSON/")
def showSongsJSON(playlist_id):
    '''
    showSongsJSON:  Method for JSON of songs in a playlist.
    Args:
        playlist_id (int):  Playlist ID number
    Returns:
        JSON of songs metadata in a playlist.
    '''
    songs = get_songs(playlist_id)
    return jsonify(Songs=[song.serialize for song in songs])


@app.route('/playlist/<int:playlist_id>/<int:song_id>/JSON/')
def showSingleJSON(playlist_id, song_id):
    '''
    showSingleJSON: Method for JSON of a song.
    Args:
        playlist_id (int):  Playlist ID number.
        song_id (int):  Song ID number.
    Returns:
        JSON of song object.
    '''
    song = session.query(Song).filter_by(id=song_id).one()
    return jsonify(Song=song.serialize)


@app.route('/songs/JSON/')
def showAllSongsJSON():
    songs = session.query(Song).all()
    return jsonify(Songs=[song.serialize for song in songs])


if __name__ == '__main__':
    app.run('0.0.0.0', port=8000)

