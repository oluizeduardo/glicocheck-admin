import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const BloodTypeCreate = () => (
    <Create title="New Blood Type" resource='BloodType'>
        <SimpleForm>
            <TextInput source="Blood Type" validate={[required()]} />
        </SimpleForm>
    </Create>
);
