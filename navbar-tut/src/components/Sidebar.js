import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const StyledSideNav = styled.div`
  position: fixed;     
  height: 100%;
  width: 75px;    
  z-index: 1;      
  top: 3.4em;      
  background-color: #254156; 
  overflow-x: hidden;     
  padding-top: 10px;
`;
const NavIcon = styled.div`

`;
const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePath: '/',
          items: [
            {
              path: '/', /* path is used as id to check which NavItem is active basically */
              name: 'Home',
              css: 'fa fa-fw fa-home',
              key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
            },
            {
              path: '/about',
              name: 'About',
              css: 'fa fa-fw fa-clock',
              key: 2
            },
            {
              path: '/NoMatch',
              name: 'NoMatch',
              css: 'fas fa-hashtag',
              key: 3
            },
          ]
        }  
      }
      onItemClick = (path) => {
        this.setState({ activePath: path }); 
      }
      render() {
        const { items, activePath } = this.state;
        return (
          <StyledSideNav>
            {
              items.map((item) => {
                return (
                  <NavItem 
                    path={item.path} 
                    name={item.name} 
                    css={item.css} 
                    onItemClick={this.onItemClick} active={item.path === activePath} key={item.key}
                    />
                )
              })
            }
          </StyledSideNav>
        );
      }
}

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }
    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
            <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                <NavIcon></NavIcon>
            </Link>
        </StyledNavItem>
      );
    }
  }

export default class Sidebar extends React.Component {
  render() {
    return (
        <SideNav></SideNav>
    );
  }
}

