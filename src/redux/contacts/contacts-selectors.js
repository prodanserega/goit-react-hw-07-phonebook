const getLoading = (state) => state.contacts.loading;
const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getError = (state) => state.contacts.error;

const getFilteredContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default {
  getLoading,
  getContacts,
  getFilter,
  getError,
  getFilteredContacts,
};
