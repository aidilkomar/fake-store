import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
    background-color: white;
    border-bottom: 1px solid #bdc3c7;
    box-shadow: 0 2px 5px #95a5a6;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    min-width: 900px;
    text-align: center;
`;

const NavCenter = styled.div`
    display: inline-flex;
    padding: 25px 0;
    gap: 60px;
    font-size: 16px;
    align-items: center;
`;

const NavH1 = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: normal;
`;

const NavStrong = styled.strong`
    color:#1e90ff;
`;

const StyledLink = styled(NavLink)`
    height: 40px;
    line-height: 40px;
    color:#4b6584;
    text-decoration: none;

    &:hover {
        border-bottom: solid #1e90ff 4px;
    }

    &:active {
        border-bottom: solid #1e90ff 4px;
        color: #1e90ff;
    }
`;


export default {Nav, NavCenter, NavH1, NavStrong, StyledLink};