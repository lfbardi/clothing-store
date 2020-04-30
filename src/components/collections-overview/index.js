import React from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from './../collection-preview/index';
import { selectCollectionsForPreview } from '../../redux/shop/selector';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...props }) => (
      <CollectionPreview key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);