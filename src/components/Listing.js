import React from 'react'
import ListingItems from './ListingItems';

function Listing(props) {
    const {items} = props;
    
  return (
    <div className='item-list'>
        {items.map(item => <ListingItems key={item.listing_id} item={item} />)}
    </div>
  )
}


export default Listing
