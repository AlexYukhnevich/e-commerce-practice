import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector, createStructureSelector } from 'reselect';
import CollectionOverview from '../../components/collections-overview';
import CollectionPage from '../collection';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetchingCollection, isCollectionsLoaded } = this.props;
    console.log(isCollectionsLoaded);
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetchingCollection} {...props}/>
          )}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollection: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);