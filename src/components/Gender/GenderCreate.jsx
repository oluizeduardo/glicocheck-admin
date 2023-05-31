import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const GenderCreate = () => (
    <Create title="New Gender" resource='Gender'>
        <SimpleForm>
            <TextInput source="Gender" validate={[required()]} />
        </SimpleForm>
    </Create>
);
