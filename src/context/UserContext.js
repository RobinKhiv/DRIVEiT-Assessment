import React, { Component, createContext } from 'react';
import ApiService from '../services/driveit-api-services';

const UserContext = createContext({
    users: [],
    isLoading: false,
    updateUserList: () => {},
    setLoading: () => {}
});
export default UserContext;

export class UserProvider extends Component {
    constructor(props) {
        super(props);
        const state = {
            users: [],
            isLoading: false
        }
        this.state = state;
    }

    componentDidMount() {
        this.setLoading(true);
        ApiService.getData()
            .then(async users => {
                await this.updateUserList(users.data);
                this.setLoading(false);
            })
    }

    setLoading = bool => {
        this.setState({isLoading: bool});
    }

    updateUserList = users => {
        this.setState({ users });
    }

    render() {
        const value = {
            users: this.state.users,
            isLoading: this.state.isLoading,
            updateUserList: this.updateUserList,
            setLoading: this.setLoading
        };

        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
