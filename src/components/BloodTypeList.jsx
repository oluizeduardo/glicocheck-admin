import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const BloodTypeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="Blood Type" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);