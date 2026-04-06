import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainCart = styled.div`
    width: 750px;
    margin: 140px auto 0 auto;
`;

export const ListItem = styled.div`
    background-color: white;
    margin-bottom: 30px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 #bdc3c7;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`;

export const Name = styled.div`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Subname = styled.div`
    & > span {
        color:#686de0;
        margin-right: 5px;
    }
`;

export const Left = styled.div`
    display: flex;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function List({children}) {

    return (
        <ListItem>
            {children}
        </ListItem>
    )
}