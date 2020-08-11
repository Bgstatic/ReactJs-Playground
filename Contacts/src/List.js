import React, { Component } from 'react'
import './List.css';
import PropTypes from 'prop-types';

export default class List extends Component {

    static propTypes = {

        contacts:PropTypes.array.isRequired
    }

    state = {
     
        filterText: ''

    }

    onChangeFilterText = (e) => {
     
        this.setState({

            filterText : e.target.value
        });

    };

    render() {

        const filteredContacts = this.props.contacts.filter(

            contact => {

                return contact.name.toLowerCase().indexOf(

                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        )

        return (
            <div className="container">
                <input value= {this.state.filterText} onChange = {this.onChangeFilterText} name="filter" id="filter" placeholder={"Filter by name or phone"} />
                <ul className="List">

                    {
                        filteredContacts.map(contacts => 

                            <li key = {contacts.phone}>
                                <span className="name">{contacts.name}</span>
                                <span className="phone">{contacts.phone}</span>

                            </li>
                        )
                    }

                </ul>

            </div>
        )
    }
}
