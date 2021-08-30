import axios from "axios";

axios.defaults.baseURL = "http://localhost:3010";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.get("/contacts", contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.get(`/contacts/${id}`);
  return data;
}
