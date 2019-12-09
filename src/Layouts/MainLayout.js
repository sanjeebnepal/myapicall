import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";

export default props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <footer>{/* <h2>FOOTER</h2> */}</footer>
    </>
  );
};
const Header = props => {
  return (
    <header>
      <h2>1.9CRM</h2>
      <div>
        <ul>
          {routes.map(({ path, text }, i) => {
            return (
              <li key={i}>
                <Link to={path}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
