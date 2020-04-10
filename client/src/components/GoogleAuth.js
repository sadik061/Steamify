import React from 'react';


class GoogleAuth extends React.Component {
    state = {isSignedIn: null};
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '467232928444-ts6tuems38m4idpvcgfrg6mbf8vrvfqr.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange=()=>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignIn =() =>{
        this.auth.signIn();
    }

    onSignOut =() =>{
        this.auth.signOut();
    }

    renderAuthButton () {
        if (this.state.isSignedIn === null){
        return null;
        }else if (this.state.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }else{
            return (
                <button className="ui red google button" onClick={this.onSignIn}>
                    <i className="google icon"></i>
                    Sign In
                </button>
            );
        }
    }
    render(){
    return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;