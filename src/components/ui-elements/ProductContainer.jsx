import styled from "styled-components";

export const ProductContainer = styled.main`
    width: 800px;
    margin: 140px auto 0 auto;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 330px;
    grid-gap: 15px;
`;