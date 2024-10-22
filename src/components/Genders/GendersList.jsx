import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

const GenderList = (props) => (
  <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="description" label="Description" />
        <EditButton basePath="/genders" />
        <DeleteButton basePath="/genders" />
      </Datagrid>
    </List>
);
export default GenderList;