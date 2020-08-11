import React, { Component } from 'react'
import List from './List';
import Form from './Form';
import PropTypes from 'prop-types';

export default class Contacts extends Component {

    static propTypes = {

        contacts: PropTypes.array.isRequired,
        addContact: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                <List contacts = {this.props.contacts} />
                <Form addContact = {this.props.addContact}/>
            </div>
        )
    }
}
