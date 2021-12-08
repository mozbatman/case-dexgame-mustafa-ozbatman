import credentials from "./mockData/credentials.json";

export const checkAuthentication = (username, password) => {
  if (username === credentials.username && password === credentials.password) {
    return true;
  }
  return false;
};

export const category = [
  { id: "1", name: "amateur" },
  { id: "2", name: "semi-professional" },
  { id: "3", name: "professional" },
  { id: "4", name: "broadcaster" },
];

export const status = {
  true: 'Active',
  false: 'Passive',
}
