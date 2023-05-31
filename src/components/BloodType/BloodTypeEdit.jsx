import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const BloodTypeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export default BloodTypeEdit;
