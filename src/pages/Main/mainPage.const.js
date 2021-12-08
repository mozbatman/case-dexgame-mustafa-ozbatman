import { category, status } from "../../utils";

export const gamersColumns = [
  {
    name: "name",
    displayName: "Name",
    format: (value) => {
      return value;
    },
  },
  {
    name: "surname",
    displayName: "Surname",
    format: (value) => {
      return value;
    },
  },
  {
    name: "age",
    displayName: "Age",
    format: (value) => {
      return value;
    },
  },
  {
    name: "category",
    displayName: "Category",
    format: (value) => {
        console.log(value)
      return category.find(c => c.id === value)?.name
    },
  },
  {
    name: "status",
    displayName: "Status",
    format: (value) => {
      return status[value];
    },
  },
];
