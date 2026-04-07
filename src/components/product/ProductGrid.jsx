import ProductItem from './ProductItem';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllProducts} from "../../store/product-slice.js";
import {CardContainer} from "../ui-elements/CardContainer.jsx";
import {useNavigate} from "react-router-dom";

export default function ProductGrid() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products || []);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    function handleView(id) {
        navigate(`/products/detail/${id}`)
    }

    function iterateProducts(products) {
        // console.log(products);
        const elements = [];
        for (let product of products) {
            const {id, title, price, image, rating:{rate, count}, description} = product;
            console.log(id, title, price, image, rate, count);
            elements.push(
                    <ProductItem
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        image={image}
                        rating={rate}
                        count={count}
                        description={description}
                        onClick={() => handleView(id)}
                    ></ProductItem>
            )
        }
        return (<>{elements}</>);
    }

    return (
        <>
            <CardContainer>{iterateProducts(products)}</CardContainer>
        </>
    )
}