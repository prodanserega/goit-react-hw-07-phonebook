import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import PropTypes from "prop-types";
import contactsOperations from "../redux/contacts/contacts-operations";
import contactsSelectors from "../redux/contacts/contacts-selectors";
import contactsActions from "../redux/contacts/contacts-actions";
import Error from "../Components/Error/Error";
import Loader from "../Components/Loader/Loader";

import "../index.css";

class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { error, isLoading } = this.props;
    return (
      <>
        {error && <Error message={error.message} />}
        <ContactForm />
        <h2 className="title">Contacts List</h2>
        <Filter />
        <ContactList />
        {isLoading && <Loader />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  isLoading: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  clearFilter: () => dispatch(contactsActions.changeFilter("")),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
