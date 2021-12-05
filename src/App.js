import React from "react";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'
import NavBar from "./Components/NavBar/Nav";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import Order from "./Components/Order/Ordrer";
import { useOpenItem } from "./Components/hooks/useOpenItem";
import { useOrders } from "./Components/hooks/useOrders";
import { useAuth } from "./Components/hooks/useAuth";
import { useTitle } from "./Components/hooks/useTitle";
import { useFirebase } from "./Components/hooks/useFirebase";
import { OrderConfirm } from "./Components/Order/OrderConfirm";
import useOrderConfirm from "./Components/hooks/useOrderConfirm";
import { Context } from "./Components/functions/context";

const firebaseConfig = {
  apiKey: "AIzaSyBjsmEslMofJVntFHJw3xR2khgIX8d4vY0",
  authDomain: "mrdonalds-f98f7.firebaseapp.com",
  projectId: "mrdonalds-f98f7",
  storageBucket: "mrdonalds-f98f7.appspot.com",
  messagingSenderId: "500833178725",
  appId: "1:500833178725:web:7703c82e62aaaf978ca28c"
};

firebase.initializeApp(firebaseConfig);
 
function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const dataBase = firebase.database();
  const dbMenu =  useFirebase(dataBase);
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      dbMenu,
      dataBase
    }}>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && 
      <OrderConfirm 
      />}
    </Context.Provider>
  );
}

export default App;
