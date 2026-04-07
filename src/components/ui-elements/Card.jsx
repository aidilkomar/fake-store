import styled from "styled-components";
import {CardContainer} from "./CardContainer.jsx";

export const ProductItem = styled.div`
    background-color: white;
    border-radius: 6px;
    border:solid 1px #bdc3c7;
    box-shadow: 0 4px 8px 0 #bdc3c7;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`;

export const Screen = styled.div`
    overflow: hidden;
    height: 168px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        display: inline-block;
        height: 100px;
        line-height: 150px;
    }
`;

export const Info = styled.div`
    padding: 0 15px;
    font-size: 14px;
    text-align: center;
`;

export const Name = styled.div`
    font-weight: bold;
    font-size: 12px;
    height: 28px;
    overflow: hidden;
`;

export const RateAndCount = styled.div`
    display: flex;
    gap:5px;
    margin: 10px 0;
    justify-content: center;
`;

export const Filled = styled.div`
    color:#f39c12;
`;

export const Price = styled.div`
    font-weight: bold;
    color:#1e90ff;
`;

export const LinkContainer = styled.div`
    font-weight: bold;
    color:#1e90ff;
    //& > a {
    //    display: block;
    //    background-color: #546de5;
    //    color:white;
    //    border-radius: 6px;
    //    text-align: center;
    //    padding: 8px 0;
    //    font-size: 14px;
    //}
`;

export const ButtonView = styled.a`
    display: block;
    background-color: #546de5;
    color:white;
    border-radius: 6px;
    text-align: center;
    padding: 8px 0;
    font-size: 14px;
`;

export default function Card({children}) {
    return (
        <>
            <ProductItem>
                {children}
            </ProductItem>
        </>
    )
}