import { Edit, SimpleForm, TextInput } from 'react-admin';
const DiabetesTypeEdit = (props) => (
    <Edit {...props}>
    <SimpleForm>
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export default DiabetesTypeEdit;