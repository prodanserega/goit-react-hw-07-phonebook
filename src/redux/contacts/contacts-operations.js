import api from "../../services/api";
import actions from "./contacts-actions";

const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  try {
    const { data } = await api.fetchContacts();
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

const addContact = (name, phone) => async (dispatch) => {
  const contact = { name, phone };
  dispatch(actions.addContactRequest());
  try {
    const { data } = await api.addContact(contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(actions.deleteContactRequest());
  try {
    await api.deleteContact(id);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

export default { fetchContacts, addContact, deleteContact };
