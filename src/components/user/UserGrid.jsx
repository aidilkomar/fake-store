import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../store/user-slice.js";
import List, {Left, Name, Subname, UserInfo, MainCart} from "../ui-elements/List.jsx";
import UserContact from "./UserContact.jsx";
import BaseButton from "../ui-elements/BaseButton.jsx";
import {useNavigate} from "react-router-dom";

export default function UserGrid() {

    const [contactUserId, setContactUserId] = useState(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users || []);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleContact = (userId) => {
        setContactUserId(userId);
    }

    const handleCart = (userId) => {
        navigate(`/users/cart/${userId}`);
    }
    // console.log(users);

    const handleCloseContact = () => setContactUserId(null);

    function iterateUsers(users) {
        const elements = [];
        for (let user of users) {
            const {id, name:{firstname, lastname}, username, email} = user;
            elements.push(
                <List
                    key={id}
                    id={id}
                    name={firstname + " " + lastname}
                    username={username}
                    email={email}
                >
                    <Left>
                        <UserInfo>
                            <Name>{firstname + " " + lastname}</Name>
                            <Subname><span>Username: {username}</span></Subname>
                            <Subname><span>Email: {email}</span></Subname>
                        </UserInfo>
                    </Left>
                    <BaseButton onClick={() => handleContact(id)}>Contact</BaseButton>
                    <BaseButton onClick={() => handleCart(id)}>Cart</BaseButton>
                </List>);
        }
        return (
            <MainCart>
                {elements}
            </MainCart>
        );
    }

    return (
        <>
            {iterateUsers(users)}
            {contactUserId && (
                <UserContact userId={contactUserId} onClose={handleCloseContact} users={users}></UserContact>
            )}
        </>
    );
}