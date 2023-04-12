import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  const getNewId = (contacts) => {
    return contacts.length + 1;
  }

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: getNewId(contacts), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(filteredContacts);
  }

  // useEffect(() => {
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retrieveContacts) setContacts(retrieveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add" 
            Component={(props) => 
              <AddContact
                addContactHandler={addContactHandler}
              />}
          />
          <Route path="/" 
            Component={() => 
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
