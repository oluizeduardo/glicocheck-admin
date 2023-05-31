import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const DiabetesTypeCreate = () => (
    <Create title="New Diabetes Type" resource='DiabetesType'>
        <SimpleForm>
            <TextInput source="Diabetes Type" validate={[required()]} />
        </SimpleForm>
    </Create>
);
