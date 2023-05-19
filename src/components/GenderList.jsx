import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const GenderList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="Gender" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);