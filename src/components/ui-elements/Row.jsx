import styled from "styled-components";
import {Link} from "react-router-dom";

export const CartH3 = styled.h3`
    font-size: 16px;
    margin:0 0 20px 0;
    & > span {
        margin-left: 5px;
    }
`;

export const ProductDetail = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #bdc3c7;
    margin-bottom: 20px;
    padding: 20px 0 10px 0;
    &:last-child {
        margin-bottom: 0;
        padding-bottom: 10px;
        border-bottom: none
    }
`;

export const ProductDetailLeft = styled.div`
    display: flex;
`;

export const ProductDetailImage = styled.div`
    width: 100px;
    height: 90px;
    text-align: center;
    overflow: hidden;
    & > img {
        height: 70px;
    }
`;

export const ProductDetailInfo = styled.div`
    font-size: 14px;
    width: 390px;
`;

export const ProductDetailName = styled.div`
    margin-bottom: 10px;
`;

export const ProductDetailLink = styled(Link)`
    font-weight: bold;
    color:#1e90ff;
`;

export const ProductDetailQuantityAndUnitPrice = styled.div`
    & > span {
        font-weight: bold;
        margin-left: 5px;
    }
`;

export const ProductDetailTotalPrice = styled.div`
    color:#546de5;
`;

export default function Row({children}) {
    return (
        <ProductDetail>{children}</ProductDetail>
    )
}