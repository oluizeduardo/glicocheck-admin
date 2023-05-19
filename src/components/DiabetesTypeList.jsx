import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const DiabetesTypeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="Diabetes Type" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);