import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainDetail = styled.main`
    width: 70%;
    min-width: 800px;
    margin: 140px auto 0 auto;
    display:flex;
    background-color: white;
    border-radius: 6px;
    border:solid 1px #bdc3c7;
    box-shadow: 0 4px 8px 0 #bdc3c7;
`;

export const ImageContainer = styled.div`
    min-width: 500px;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: solid 1px #bdc3c7;
    overflow: hidden;
    & > img {
        width: 380px;
    }
`;

export const DetailWrapper = styled.div`
    overflow: auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;

export const BackLink = styled(Link)`
    font-size: 14px;
    font-weight: bold;
    color:#1e90ff;
    text-decoration: none;
    margin-bottom: 50px;
`;

export const MainH1 = styled.h1`
    font-size: 24px;
    margin-top: 35px;
    margin-bottom: 10px;
    color: #60778e;
`;

export const Price = styled.div`
    color:#546de5;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Rate = styled.div`
    display: flex;
    gap: 10px;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Filled = styled.div`
    color:#f39c12;
`;

export const CountCategory = styled.div`
    font-size: 14px;
    margin-bottom: 8px;
    & > span {
        display: inline-block;
        &:first-child {
            width: 85px;
            font-weight: bold;
        }
    }
`;

export const Description = styled.div`
    margin-top: 30px;
    font-size: 16px;
    & > h3 {
        margin: 0 0 8px 0;
        font-size: 14px;
    };
    & > p {
        margin:0;
    }
`;

export default function Detail({children}) {
    return (
        <>
            <MainDetail>
                {children}
            </MainDetail>
        </>
    );
}