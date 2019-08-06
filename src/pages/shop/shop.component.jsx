import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectionIsCollectionFetching,selectionIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import CollectionsPageContainer from '../../pages/collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';


 class ShopPage extends Component {

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

     render (){
         const {match,isCollectionFetching,isCollectionsLoaded} = this.props;
            return (
               <div className='shop-page'>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer}/> 
                </div>
            )
    }
    
     
 }

 const mapStateToProps = createStructuredSelector({
     isCollectionsLoaded:selectionIsCollectionsLoaded
 })

const mapDispatchToProps = (dispatch)=>(
    {  
        fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)

