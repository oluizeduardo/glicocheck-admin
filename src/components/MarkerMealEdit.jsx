import { Edit, SimpleForm, TextInput, required } from 'react-admin';
export const MarkerMealEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="Marker Meal" validate={required()} />
        </SimpleForm>
    </Edit>
);