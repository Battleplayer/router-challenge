import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import News from '../components/News';
import Profile from '../components/Profile';
import NoMatch from '../components/NoMatch';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../redux/actions/LoginAction';

class MainContainer extends Component {
    logIn = () => this.props.userLogin(true);

    render() {
        const {isAuth} = this.props;
        return (
            <div className="mainContainer">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" render={() => (
                        isAuth ? (<Redirect to="/profile"/>) : (<Login logIn={this.logIn}/>)
                    )}/>
                    <Route path="/news" component={News}/>
                    <Route path="/profile" render={() => (
                        isAuth ? (<Profile/>) : (<Redirect to="/login"/>)
                    )}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({isAuth}) => ({
    isAuth
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({userLogin}, dispatch);

export default connect(mapStateToProps,
    mapDispatchToProps)(MainContainer);