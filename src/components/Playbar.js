import React from 'react';

export default class PlayBar extends React.Component {

    constructor(props) {
        super(props);

        this.audioRef = React.createRef();
        this.state = {
            playStatus: false,
            currTrack: {}
        };
    }

    newSongSelected(track) {
      this.setState({currTrack: track}, ()=> {
          this.audioRef.current.pause();
          this.audioRef.current.load();
          this.audioRef.current.play();
        });
    }

    componentDidMount() {
        this.props.ee.on('foo', (payload) => { this.newSongSelected(payload.row) });
    }

    componentWillUnmount() {
        this.props.ee.removeListener('foo', this.newSongSelected);
    }

    render() {
        return (
            <div className="playbar">
                <div className="playbar-current">
                    <span className="playbar-title">{this.state.currTrack.title}</span>
                    <span className="playbar-artist">{this.state.currTrack.artist}</span>
                </div>

                <div className="playbar-audio">
                    <audio ref={this.audioRef} controls>
                        <source src={this.state.currTrack.path} type="audio/mpeg"/>
                    </audio>
                </div>
            </div>
        )
    }
}
