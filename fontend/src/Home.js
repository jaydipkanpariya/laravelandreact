import React, { Component } from 'react';
import { Header, Message, Table } from 'semantic-ui-react';
import { API_BASE_URL } from './config'
import Repo from './Repo';
import { Redirect,Link } from "react-router-dom";;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: null,
            isLoading: null
        };
    }

    componentDidMount() {
        this.getrepos();
    }

    async getrepos() {
        if (! this.state.repos) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + '/repos');
                const reposList = await response.json();
                this.setState({ repos: reposList, isLoading: false});
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }
    render() {
        return (
            <div>
                <Header as="h1">Repositories</Header>
                {this.state.isLoading && <Message info header="Loading Repositories..." />}
                {this.state.repos &&
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Repositories</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.repos.map(
                                    repos =>
                                        <tr id={repos.id} key={repos.id}>
                                            <td>{repos.id}</td>
                                            <td> 
                                                 <Link to={{ pathname: '/repo', state: { name: repos.repo} }}> {repos.repo}</Link>
                                            </td>
                                        </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>
                }
            </div>
        );
    }

}
export default Home;