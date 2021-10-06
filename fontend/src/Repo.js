import React, { Component } from 'react';
import { Header, Message, Table } from 'semantic-ui-react';
import { API_BASE_URL } from './config';
import {  Link  } from "react-router-dom";
class Repo extends Component {
    
 
    constructor(props) {
        const {name} = props.location.state
     
        console.log(name)
        super(props);
        this.state = {
            commits: null,
            isLoading: null,
            reponame:name
        };
    }

    componentDidMount() {
        this.getcommits();
    }

    async getcommits() {
        
        if (! this.state.commits) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + '/getDataByName/'+this.state.reponame);
                const commitsList = await response.json();
                this.setState({ commits: commitsList, isLoading: false});
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    render() {
        return (
            <div>
                <Table>
                   <thead>
                      <tr>
                          <th>commits</th>
                          <th><Link to="/">Home</Link></th>
                                    
                         </tr>
                    </thead>  
                </Table>
                {this.state.isLoading && <Message info header="Loading commits..." />}
                {this.state.commits &&
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.commits.map(
                                    repos =>
                                        <tr id={repos.id} key={repos.id}>
                                            <td>{repos.id}</td>
                                            <td>{repos.message}</td>
                                            <td>{repos.date}</td>
                                         
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
export default Repo;