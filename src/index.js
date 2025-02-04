/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from "bootstrap";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginComponent } from './components/login/login.component';
import { DataBinding } from './components/data-binding/data-binding';
import { BindingFile } from './components/data-binding/binding-file';
import { FindingData } from './components/data-binding/finding-data';
import { AjaxDemo } from './components/ajax-demo/ajax-demo';
import { EventDemo } from './components/Event-demo/event-demo';
import { FormColor } from './components/Form-Colour/form-color';
import { EmiCalculator } from './components/EMI-Calculator/emi-calculator';
import { formToJSON } from 'axios';
import { Courses } from './components/Courses/courses';
import { Eventhandler } from './components/event-handler/eventhandler';
import { CompMouse } from './components/componentmouse/CompMouse';
import { Rotatefile } from './components/Rotate-file/Rotatefile';
import { Eventmove } from './components/Eventmove/eventmove';
import { FakeStore } from './components/Fake-Store/fakestore';
import {Demo} from './components/Demo/demo';
import {CityChange} from './components/City-Change/citychange';
import { CartItem } from './components/Fake-Store/CartItem/cartitem'; 
import { AjaxDemo2 } from './components/ajax-demo/ajaxdemo2';
import { AjaxDemo3 } from './components/ajax-demo/ajaxdemo3';
import { AjaxDemo4 } from './components/ajax-demo/ajaxdemo4';
import { NestedDemo } from './components/Nested-Demo/nested-demo';
import { MountDemo } from './components/mount-demo/mount-demo';
import { ContextDemo } from './components/context-demo/context-demo';
import { NavBar } from './components/custom-components/navbar';
import { ControlledDemo } from './components/controlled-demo/controlled-demo';
import { ConditionalRendering } from './components/conditional-rendering/conditional-rendering';
import { ReducerDemo } from './components/reducer-demo/reducer-demo';
import { StorageDemo } from './components/storage-demo/storage-demo';
import { RegExp } from './components/Reg-Expression/regExp';
import { FakestoreIndex } from './components/Fake-Store/Fake-StoreApp/fakestore-index';
import { CookiesProvider } from 'react-cookie';
import { RegisterUser } from './constructor/super-register-user';
import { UserRegister } from './constructor/class-constructor';
import { Movies } from './components/Movie/Movies';
import { TimerDemo } from './components/timer-demo/timer-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CookiesProvider>
        <TimerDemo />
     </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
