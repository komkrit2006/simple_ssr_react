import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Home, Bugatti, Ferrari, Lamborghini } from "./pages";
import './styles/global.css'
import styled from "styled-components";

const Navbar = styled.ul`
    list-style-type: none;
    display: flex;
    background: darkslategray;
    padding: 15px 25px;
    margin: 0px;
    a {
        text-decoration: none;
        color: white;
        padding: 15px 25px;
    }
    a:hover {
        color: gray;
    }
    li:first-of-type {
        margin-right: auto;
    }
`;

const Footer = styled.div`
    background: darkslategray;
    padding: 15px; 25px;
    color: white;
    position: absolute;
    bottom: 0px;
    width: 100%;
`
const dataPath = [
  {
    path: "/",
    text: "Home"
  },
  {
    path: "/Bugatti",
    text: "Bugatti"
  },
  {
    path: "/Ferrari",
    text: "Ferrari"
  },
  {
    path: "/Lamborghini",
    text: "Lamborghini"
  }
];

export default () => (
  <Fragment>
    <Navbar>
      {dataPath.map(data => (
        <li key={data.path}>
          <Link to={data.path}>{data.text}</Link>
        </li>
      ))}
    </Navbar>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Bugatti" component={Bugatti} />
      <Route path="/Ferrari" component={Ferrari} />
      <Route path="/Lamborghini" component={Lamborghini} />
    </Switch>
    <Footer>power by @komkrit</Footer>
  </Fragment>
);
