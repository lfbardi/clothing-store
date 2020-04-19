import React from 'react';

import SHOP_DATA from '../../mock/shop_data';

import CollectionPreview from '../../components/collection-preview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }



    render() {

        const { collections } = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...props }) => (
                        <CollectionPreview key={id} {...props} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;