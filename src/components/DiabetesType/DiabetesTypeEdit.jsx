import { Edit, SimpleForm, TextInput, required } from 'react-admin';
export const DiabetesTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="Diabetes Type" validate={required()} />
        </SimpleForm>
    </Edit>
);