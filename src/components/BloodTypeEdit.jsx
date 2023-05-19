import { Edit, SimpleForm, TextInput, required } from 'react-admin';
export const BloodTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="Blood Type" validate={required()} />
        </SimpleForm>
    </Edit>
);