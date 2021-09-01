import { Component } from "react";

import { connect } from "react-redux";

import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "../ContactForm/ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
  };

  handelChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.phone) {
      alert("Enter the name!");
      return;
    }

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      name: "",
      phone: "",
    });

  render() {
    const { name, phone } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleFormSubmit}>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handelChangeForm}
        />
        <input
          className={s.input}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handelChangeForm}
        />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, phone) =>
    dispatch(contactsOperations.addContact(name, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
