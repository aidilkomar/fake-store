import styled from "styled-components";

export const Modal = styled.div`
    background-color: rgba(0,0,0,0.6);
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Dialog = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    & > header {
        display: flex;
        justify-content: space-between;
        align-items:start;
        margin-bottom: 20px;
    }
    & > button {
        padding:0;
        border:none;
        cursor: pointer;
        font-size: 23px;
        background-color: transparent;
        color:#e74c3c;
    }
    
    & > h2 {
        margin:0;
        text-transform: capitalize;
        font-size: 20px;
    };
    
    & > td {
        padding-bottom: 10px;
        &:first-child {
            padding-right: 20px;
            color:#686de0;
        }
    }
`;

export default function BaseModal({children}) {
    return (
        <>
            <Modal>
                <Dialog>
                    {children}
                </Dialog>
            </Modal>
        </>
    )
}