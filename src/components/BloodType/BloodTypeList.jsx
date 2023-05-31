import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const BloodTypeList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="description" label="Description" />
        <EditButton basePath="/bloodtype" />
        <DeleteButton basePath="/bloodtype" />
      </Datagrid>
    </List>
  );
};

export default BloodTypeList;
