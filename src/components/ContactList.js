import React from "react";
import { useNavigate } from 'react-router-dom';
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const navigate = useNavigate();

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />
        );
    });


    return (
        <div class="main">
            <h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div>Contact List</div>
                    <button className="ui button blue right" onClick={() => navigate('/add')}>Add Contact</button>
                </div>
            </h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
}

export default ContactList;