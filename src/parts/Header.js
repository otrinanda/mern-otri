import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/iconText";

export default function Header(props) {

  // const getNavLinkClass= path=>{
  //   return props.history.location.pathname === path?"active":""
  // }

  return (
    <Header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expansion-lg navbar-light">
          <BrandIcon />
        
         <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {/* <li className={`navitem${getNavLinkClass("/")}`}>
              <Button className=" nav-link" type="link" href="/">
                Home
              </Button>
            </li>
            <li className={`navitem${getNavLinkClass("/browse-by")}`}>
              <Button className="nav-link" type="link" href="/browser">
                Browse
              </Button>
            </li>
            <li className={`navitem${getNavLinkClass("/stories")}`}>
              <Button className="nav-link" type="link" href="/stories">
                Stories
              </Button>
            </li>
            <li className={`navitem${getNavLinkClass("/agents")}`}>
              <Button className="nav-link" type="link" href="/agents">
                Agents
              </Button>
            </li> */}
          </ul>
        </div>
        </nav> 
      </div>
    </Header>
  );
}
