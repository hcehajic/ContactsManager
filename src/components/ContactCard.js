import React from "react";
import user from '../images/user.jpg';
import DeleteButton from "./DeleteButton";

const ContactCard = (props) => {

    const { id, name, number } = props.contact;

    return (
        <div className="item" style={{ display: 'flex', alignItems: 'center' }}>
            <img className="ui avatar image" src={ user } alt="user" style={{ marginRight: '1em' }} />
            <div className="content" style={{ flex: 1 }}>
                <div className="header">{ name }</div>
                <div>{ number }</div>
            </div>
            <DeleteButton id={ id } clickHandler={ props.clickHandler } />
        </div>
    );
}

export default ContactCard;