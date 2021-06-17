import React, { Component, createContext } from 'react';
import ApiService from '../services/driveit-api-services';

const UserContext = createContext({
    users: [],
    updateUserList: () => {}
});
export default UserContext;

export class UserProvider extends Component {
    constructor(props) {
        super(props);
        const state = {
            users: []
        }
        this.state = state;
    }

    componentDidMount() {
        ApiService.getData()
            .then(async users => {
                await this.updateUserList(users.data);
            })
    }

    updateUserList = users => {
        this.setState({ users });
    }

    render() {
        const value = {
            users: this.state.users,
            updateUserList: this.updateUserList
        };

        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
