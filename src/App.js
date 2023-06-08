import React from 'react';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter } from 'react-router-dom';
import dataProvider from './apiClient';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Man4Icon from '@mui/icons-material/Man4';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BloodTypeList from './components/BloodType/BloodTypeList';
import BloodTypeCreate from './components/BloodType/BloodTypeCreate';
import BloodTypeEdit from './components/BloodType/BloodTypeEdit';
import BloodTypeDelete from './components/BloodType/BloodTypeDelete';
import DiabetesTypeList from './components/DiabetesType/DiabetesTypeList';
import DiabetesTypeEdit from './components/DiabetesType/DiabetesTypeEdit';
import DiabetesTypeCreate from './components/DiabetesType/DiabetesTypeCreate';
import DiabetesTypeDelete from './components/DiabetesType/DiabetesTypeDelete';
import GenderList from './components/Gender/GenderList';
import GenderEdit from './components/Gender/GenderEdit';
import GenderCreate from './components/Gender/GenderCreate';
import GenderDelete from './components/Gender/GenderDelete';
import MarkerMealList from './components/MarkerMeal/MarkerMealList';
import MarkerMealEdit from './components/MarkerMeal/MarkerMealEdit';
import MarkerMealCreate from './components/MarkerMeal/MarkerMealCreate';
import MarkerMealDelete from './components/MarkerMeal/MarkerMealDelete';
import authProvider from './authProvider';
import LogoutButton from './components/Logout/LogoutButton';


const App = () => (
  <BrowserRouter>
    <Admin 
      dataProvider={dataProvider}
      authProvider={authProvider}
      logoutButton={LogoutButton}>
      <Resource
        name="bloodtype"
        list={BloodTypeList}
        create={BloodTypeCreate}
        edit={BloodTypeEdit}
        delete={BloodTypeDelete}
        icon={BloodtypeIcon}
      />
      <Resource
        name="diabetestype"
        list={DiabetesTypeList}
        create={DiabetesTypeCreate}
        edit={DiabetesTypeEdit}
        delete={DiabetesTypeDelete}
        icon={MenuBookIcon}
      />
      <Resource
        name="gender"
        list={GenderList}
        create={GenderCreate}
        edit={GenderEdit}
        delete={GenderDelete}
        icon={Man4Icon}
      />
      <Resource
        name="markermeal"
        list={MarkerMealList}
        create={MarkerMealCreate}
        edit={MarkerMealEdit}
        delete={MarkerMealDelete}
        icon={RestaurantIcon}
      />
    </Admin>
  </BrowserRouter>
);

export default App;
