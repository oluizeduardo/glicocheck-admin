import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const MarkerMealList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="Marker Meal" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);