import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getDetailProduct} from "../../store/product-slice.js";
import Detail, {
    BackLink,
    CountCategory,
    Description,
    DetailWrapper,
    Filled, ImageContainer,
    MainH1,
    Price,
    Rate
} from "../ui-elements/Detail.jsx";

export default function ProductDetail() {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.product.detail);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getDetailProduct(id));
        }
    }, [dispatch, id]);

    const {title, price, rate, count, category, description, image} = detail;

    const stars = Array.from({length: 5}, (_, i) => i < Math.round(rate));

    const formatUSD = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    };

    return (
        <>
            <Detail image={image}>
                <ImageContainer>
                    <img src={image} alt=""/>
                </ImageContainer>
                <DetailWrapper>
                    <BackLink to={'/products'}>Back to Product List</BackLink>
                    <div>
                        <MainH1>{title}</MainH1>
                        <Price>{formatUSD(price)}</Price>
                        <Rate>
                            {stars.map((isFilled, index) =>
                                isFilled ? (
                                    <Filled key={index}><i className="fas fa-star"></i></Filled>
                                ) : (
                                    <i key={index} className="fas fa-star"></i>
                                )
                            )}
                            <span>({rate})</span>
                        </Rate>
                        <CountCategory>
                            <span>TOTAL SOLD</span>
                            <span>{count} Unit(s)</span>
                        </CountCategory>
                        <CountCategory>
                            <span>CATEGORY</span>
                            <span>{category}</span>
                        </CountCategory>
                        <Description>
                            <h3>DESCRIPTION</h3>
                            <p>{description}</p>
                        </Description>
                    </div>
                </DetailWrapper>
            </Detail>
        </>
    )
}