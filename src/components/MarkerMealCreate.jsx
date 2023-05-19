import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const MarkerMealCreate = () => (
    <Create title="New Marker Meal" resource='MarkerMeal'>
        <SimpleForm>
            <TextInput source="Marker Meal" validate={[required()]} />
        </SimpleForm>
    </Create>
);
