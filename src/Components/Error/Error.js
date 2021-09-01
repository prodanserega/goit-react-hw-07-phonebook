import React, { Component } from "react";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import contactsActions from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";

import s from "../Error/Error.module.css";

class Error extends Component {
  static propTypes = {
    message: PropTypes.string,
    error: PropTypes.object,
    clearError: PropTypes.func,
  };

  componentDidMount() {
    if (this.props.error) {
      setTimeout(() => {
        this.props.clearError();
      }, 3000);
    }
  }

  render() {
    return (
      <div className={s.popup}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(contactsActions.clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
