import { Admin, Resource, Login } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { BloodTypeList } from "./components/BloodTypeList";
import { DiabetesTypeList } from "./components/DiabetesTypeList";
import { MarkerMealList } from "./components/MarkerMealList";
import { GenderList } from "./components/GenderList";
import { BloodTypeCreate } from "./components/BloodTypeCreate";
import { DiabetesTypeCreate } from "./components/DiabetesTypeCreate";
import { GenderCreate } from "./components/GenderCreate";
import { MarkerMealCreate } from "./components/MarkerMealCreate";
import { BloodTypeEdit } from "./components/BloodTypeEdit";
import { DiabetesTypeEdit } from "./components/DiabetesTypeEdit";
import { MarkerMealEdit } from "./components/MarkerMealEdit";
import { GenderEdit } from "./components/GenderEdit";
import authProvider from "./authProvider";

// const dataProvider = jsonServerProvider("https://glicocheck.onrender.com/api");
const dataProvider = jsonServerProvider("http://localhost:5000");

const App = () => (
    <Admin authProvider={authProvider} loginPage={Login} dataProvider={dataProvider}>
        <Resource name="BloodType" list={BloodTypeList} create={BloodTypeCreate} edit={BloodTypeEdit}/>
        <Resource name="DiabetesType" list={DiabetesTypeList} create={DiabetesTypeCreate} edit={DiabetesTypeEdit}/>
        <Resource name="MarkerMeals" list={MarkerMealList} create={MarkerMealCreate} edit={MarkerMealEdit}/>
        <Resource name="Gender" list={GenderList} create={GenderCreate} edit={GenderEdit}/>
    </Admin>
);

export default App;