import React from "react";

import CollectionPreview from "../../components/collection-preview";

import { selectCollections } from '../../redux/shop/selector';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...props }) => (
      <CollectionPreview key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
