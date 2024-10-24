import React from 'react';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter } from 'react-router-dom';
import dataProvider from './dataProvider';
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
import GendersList from './components/Genders/GendersList';
import GendersEdit from './components/Genders/GendersEdit';
import GendersCreate from './components/Genders/GendersCreate';
import GendersDelete from './components/Genders/GendersDelete';
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
        name="genders"
        list={GendersList}
        create={GendersCreate}
        edit={GendersEdit}
        delete={GendersDelete}
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
