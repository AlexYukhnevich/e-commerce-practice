import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/spinner';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionOverviewContainer = lazy(() => import('../../components/collections-overview'));
const CollectionPageContainer = lazy(() => import('../collection'));

const ShopPage = ({ match, fetchCollectionsStart }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart])

  return (
    <Suspense fallback={<Spinner />}>
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionOverviewContainer}
          />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer}
          />
      </div>
    </Suspense>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()), 
});

export default connect(null, mapDispatchToProps)(ShopPage);