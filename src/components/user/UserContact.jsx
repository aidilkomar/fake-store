import BaseModal from "../ui-elements/BaseModal.jsx";
import {getContactByUser} from "../../store/user-slice.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function UserContact({userId, onClose}) {

    const dispatch = useDispatch();
    const contact = useSelector(state => state.user.contact);

    useEffect(() => {
        dispatch(getContactByUser(userId));

    }, [dispatch]);


    const {name, phone, email, city, street, zipcode, lat, long} = contact;
    // console.log(name, email, city, street, zipcode, geo);

    return (
        <>
            <BaseModal>
                <header>
                    <h2>{name}</h2>
                    <button type={"button"} onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </header>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <i className="fas fa-phone"></i> Phone
                        </td>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <td>
                            <i className="fas fa-envelope"></i> Email
                        </td>
                        <td>{email}</td>
                    </tr>
                    </tbody>
                </table>
                <fieldset>
                    <legend>Address</legend>
                    <table>
                        <tbody>
                        <tr>
                            <td>City</td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td>{street}</td>
                        </tr>
                        <tr>
                            <td>Zipcode</td>
                            <td>{zipcode}</td>
                        </tr>
                        <tr>
                            <td>Geolocation</td>
                            <td>{lat},{long}</td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
            </BaseModal>
        </>
    );
}