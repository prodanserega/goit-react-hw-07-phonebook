import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getError = (state) => state.contacts.error;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getLoading,
  getContacts,
  getFilter,
  getError,
  getFilteredContacts,
};
