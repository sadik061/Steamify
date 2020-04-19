import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';

class StreamList  extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
                    <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
                </div>
            );
        }
    }
    

    renderlist(){
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                    
                </div>
            );
        });
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/create" className="ui button primary"> Create Stream </Link>
                </div>
            );
        }
    }
    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderlist()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
     };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);