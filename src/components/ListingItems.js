import React from 'react'
import PropTypes from 'prop-types'

function ListingItems(props) {
    const { item } = props;
    if(item.state !== 'active') {
        return null;
    }
    const maxTitle = (title) => {
        return title.length > 50 ? `${title.slice(0, 50)}...` : title;
    }

    const currency = (code, price) => {
        if(code === 'USD') {
            return `$${price}`;
        }
        if(code === 'EUR') {
            return `€${price}`;
        }
        return `${price} ${code}`;
    }

    const quantity = (quantity) => {
        if(quantity < 10) {
            return 'level-low';
        }
        if(quantity > 20) {
            return 'level-high';
        }
        return 'level-medium'
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                    <img src={item.MainImage.url_570xN} alt={item.title} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{maxTitle(item.title)}</p>
                <p className="item-price">{currency(item.currency_code, item.price)}</p>
                <p className={`item-quantity ${quantity(item.quantity)}`}>{item.quantity} left</p>
            </div>
        </div>
    );
}

ListingItems.propTypes = {
    items: PropTypes.shape({
        url: PropTypes.string,
        MainImage: PropTypes.object,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
    })
}


export default ListingItems
