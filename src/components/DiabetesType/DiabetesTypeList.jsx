import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

const DiabetesTypeList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="description" label="Description" />
        <EditButton basePath="/diabetestype" />
        <DeleteButton basePath="/diabetestype" />
    </Datagrid>
  </List>
);
export default DiabetesTypeList;