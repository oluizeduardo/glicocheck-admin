import { Edit, SimpleForm, TextInput } from 'react-admin';
const GenderEdit = (props) => (
    <Edit {...props}>
    <SimpleForm>
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export default GenderEdit;