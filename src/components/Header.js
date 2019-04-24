import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {userLogout} from "../redux/actions/LoginAction";
import {bindActionCreators} from "redux";

class Header extends Component {
    logOut = () => this.props.userLogout();
    render() {
        const {isAuth} = this.props;
        return (
            <Navbar bg="light" variant="dark">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                <NavLink to="/news" activeClassName="active">News</NavLink>
                {
                    isAuth
                        ? <Button variant="secondary" onClick={this.logOut}>Logout</Button>
                        : null
                }
            </Navbar>
        )
    }
}

const mapStateToProps = ({isAuth}) => ({
    isAuth
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({userLogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);