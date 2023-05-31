import { Edit, SimpleForm, TextInput, required } from 'react-admin';
export const GenderEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="Gender" validate={required()} />
        </SimpleForm>
    </Edit>
);