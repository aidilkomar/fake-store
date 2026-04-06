import Card, {
    ButtonView,
    Filled,
    Info,
    LinkContainer,
    Name,
    Price,
    RateAndCount,
    Screen
} from "../ui-elements/Card.jsx";

export default function ProductItem({id, title, price, image, rating, count, description, onClick}) {

    const stars = Array.from({length: 5}, (_, i) => i < Math.round(rating));
    // console.log(id, title, price, image, rate, count, description)

    const formatUSD = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    };

    return (
        <>
            <Card key={id}
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                  stars={stars}
                  count={count}
                  description={description}
            >
                <Screen>
                    <img src={image} alt={""}/>
                </Screen>
                <Info>
                    <Name>{title}</Name>
                    <RateAndCount>
                        {stars.map((isFilled, index) =>
                            isFilled ? (
                                <Filled key={index}><i className="fas fa-star"></i></Filled>
                            ) : (
                                <i key={index} className="fas fa-star"></i>
                            )
                        )}
                        <span>({count})</span>
                    </RateAndCount>
                    <Price>{formatUSD(price)}</Price>
                </Info>
                <LinkContainer>
                    <ButtonView onClick={onClick}>View Detail</ButtonView>
                </LinkContainer>
            </Card>
        </>
    )
}