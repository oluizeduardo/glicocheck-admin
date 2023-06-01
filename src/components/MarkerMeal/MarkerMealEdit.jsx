import { Edit, SimpleForm, TextInput } from 'react-admin';

const MarkerMealEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export default MarkerMealEdit;