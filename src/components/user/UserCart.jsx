import List, {
    Left,
    Name,
    Subname,
    UserInfo, MainCart
} from "../ui-elements/List.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect, useRef} from "react";
import {getContactByUser} from "../../store/user-slice.js";
import BaseButton from "../ui-elements/BaseButton.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {getAllOrdersByUserId} from "../../store/cart-slice.js";
import {getDetailProduct} from "../../store/product-slice.js";
import Row, {
    CartH3,
    ProductDetailImage,
    ProductDetailInfo,
    ProductDetailLeft,
    ProductDetailLink,
    ProductDetailName, ProductDetailQuantityAndUnitPrice, ProductDetailTotalPrice
} from "../ui-elements/Row.jsx";

export default function UserCart() {

    const dispatch = useDispatch();
    const contact = useSelector(state => state.user.contact);
    const orders = useSelector(state => state.order.orders || []);
    const products = useSelector(state => state.product.productMap || []);
    const {userId} = useParams();
    const fetchedIds = useRef(new Set());

    useEffect(() => {
        if(userId) {
            dispatch(getContactByUser(userId));
            dispatch(getAllOrdersByUserId(userId));
        }
    }, [dispatch, userId]);

    useEffect(() => {
        if (!orders?.length) return;

        const allIds = orders?.flatMap((order) => order.products.map(item => item.productId));

        const uniqueIds = [...new Set(allIds)];

        const idsToFetch = uniqueIds.filter(id => !fetchedIds.current.has(id));

        idsToFetch.forEach(id => {
            dispatch(getDetailProduct(id));
            fetchedIds.current.add(id);
        });
    }, [dispatch, orders]);

    const {firstname, lastname, username, email} = contact;

    function iterateItems(items, date) {
        const elements = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const {productId, name, quantity} = item;
            const productData = products[productId];
            elements.push(
                <Row key={productId + i + date + quantity}>
                    <ProductDetailLeft>
                        <ProductDetailImage>
                            <img src={productData?.image || 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png'} alt={name}/>
                        </ProductDetailImage>
                        <ProductDetailInfo>
                            <ProductDetailName>
                                <ProductDetailLink to={`/products/detail/${productId}`}>
                                    {productData?.title}
                                </ProductDetailLink>
                            </ProductDetailName>
                            <ProductDetailQuantityAndUnitPrice>
                                Qty: <span>{quantity}</span>
                            </ProductDetailQuantityAndUnitPrice>
                            <ProductDetailQuantityAndUnitPrice>
                                Unit Price: <span>$ {productData?.price}</span>
                            </ProductDetailQuantityAndUnitPrice>
                        </ProductDetailInfo>
                    </ProductDetailLeft>
                    <ProductDetailTotalPrice>
                        Total: <span>$ {productData?.price*quantity}</span>
                    </ProductDetailTotalPrice>
                </Row>
            );
        }

        return <>{elements}</>;
    }

    function iterateOrders(orders) {
        const elements = [];
        for (let order of orders) {
            const {id, date, products} = order;
            elements.push(
                <Fragment key={id}>
                    <CartH3>DATE: <span>{new Date(date).toLocaleDateString('en-CA')}</span></CartH3>
                    {iterateItems(products, date)}
                </Fragment>
            )
        }
        return <MainCart>{elements}</MainCart>;
    }

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <MainCart>
            <List name={firstname + " " + lastname} username={username} email={email}>
                <Left>
                    <UserInfo>
                        <Name>{firstname + " " + lastname}</Name>
                        <Subname><span>Username: {username}</span></Subname>
                        <Subname><span>Email: {email}</span></Subname>
                    </UserInfo>
                </Left>
                <BaseButton onClick={handleBack}>Back</BaseButton>
            </List>
            <List>
                {iterateOrders(orders)}
            </List>
        </MainCart>
    );
}