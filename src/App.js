import React from 'react';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter } from 'react-router-dom';
import dataProvider from './apiClient';
import { Dashboard } from "./components/Dashboard/Dashboard";
import BloodTypeList from './components/BloodType/BloodTypeList';
import BloodTypeCreate from './components/BloodType/BloodTypeCreate';
import BloodTypeEdit from './components/BloodType/BloodTypeEdit';
import BloodTypeDelete from './components/BloodType/BloodTypeDelete';

const App = () => (
  <BrowserRouter>
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource
        name="bloodtype"
        list={BloodTypeList}
        create={BloodTypeCreate}
        edit={BloodTypeEdit}
        delete={BloodTypeDelete}
      />
    </Admin>
  </BrowserRouter>
);

export default App;
