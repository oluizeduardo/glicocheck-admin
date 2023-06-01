import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

const MarkerMealList = (props) => (
  <List {...props}>
  <Datagrid>
    <TextField source="id" />
    <TextField source="description" label="Description" />
    <EditButton basePath="/markermeal" />
    <DeleteButton basePath="/markermeal" />
  </Datagrid>
</List>
);

export default MarkerMealList;