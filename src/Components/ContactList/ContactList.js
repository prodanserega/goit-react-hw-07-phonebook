import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "../ContactList/ContactList.module.css";

const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li key={id} className={s.item}>
      {name}: {phone}{" "}
      <button className={s.button} onClick={() => onRemove(id)}>
        delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove, id }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.list} key={id}>
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getFilteredContacts(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(contactsOperations.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
