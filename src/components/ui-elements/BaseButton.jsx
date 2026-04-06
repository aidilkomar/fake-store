import styled from "styled-components";

export const Button = styled.div`
    color: #1e90ff;
    display: inline-block;
    box-sizing: border-box;
    border: solid #1e90ff 1px;
    width: 90px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 30px;
    margin-left: 4px;

    &:hover {
        background-color: #1e90ff;
        color:white;
    }
`;

export default function BaseButton({children, onClick}) {
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}