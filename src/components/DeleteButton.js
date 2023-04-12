import React from "react";

function DeleteButton(props) {

    const handleDelete = () => {

        const confirmDelete = window.confirm("Are you sure you want to delete contact?");
    
        if (confirmDelete) {
            props.clickHandler(props.id);
        } 
    };

    return (
        <div>
            <button className="ui button red right" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}

export default DeleteButton;
