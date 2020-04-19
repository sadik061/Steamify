import React from 'react';
import Modal from '../modal';
import history from '../../history';
import {fetchStream,deleteStream} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component{
    actions = () => {
        return (
            <React.Fragment>
                <button className="ui negative button" onClick={this.onSubmit}>Delete</button>
                <Link className="ui button " to={`/`}>Cancel</Link>
            </React.Fragment>
        );
    };
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = () =>{
        this.props.deleteStream(this.props.match.params.id);
    }

    render(){
        return (
                <Modal 
                title="Delete Strem"
                content="Are you sure you want to delete this stream?"
                actions={this.actions()}
                onDismiss={()=> history.push('/')}
                />
        );
    }
};

const mapStateToPropes =(state,ownProps)=> {
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToPropes,{fetchStream,deleteStream})(StreamDelete);