import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { login, logout } from "./utils";
import Tabs from './Components/TabComponent/Tabs';

// React Bootstrap css
import "./App.css";
// React Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// React Bootstraps imports
import { Nav, Navbar, Container, Row, Card, Alert, Button } from "react-bootstrap";



// assets
import Logo from "./assets/logo-white.svg";

import getConfig from "./config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");


export default function App() {
  const [userHasNFT, setuserHasNFT] = useState(false);


  return (
    <React.Fragment>
      {" "}
      <div className="all">
        <div  style={{ display: "flex", justifyContent: 'flex-end' }}>
          <Button type="button" variant="primary"  onClick={window.walletConnection.isSignedIn() ? logout : login}>
            {window.walletConnection.isSignedIn()
              ? window.accountId
              : "Login"}
          </Button>{' '}
        </div>
        <div className="App">
          <Tabs />
        </div>
      </div>
    </React.Fragment>

  );
}
