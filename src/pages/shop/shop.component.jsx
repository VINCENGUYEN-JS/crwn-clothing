import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {firestore,convertCollectionSnapShotToMap} from '../../firebase/firebase.utils';

 const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
 const CollectionPageWithSpinner = WithSpinner(CollectionPage);

 class ShopPage extends Component {
    state={
        loading:true
    }   
    unsubscribeFromSnapshot = null;
   
    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.onSnapshot(snapShot=>{
           const collectionMap = convertCollectionSnapShotToMap(snapShot);
           updateCollections(collectionMap);
           this.setState({loading:false});
        })

    }

     render (){
         const {match} = this.props;
         const {loading} = this.state;
            return (
               <div className='shop-page'>
                    <Route exact path={`${match.path}`} render={
                        (props)=>(<CollectionOverviewWithSpinner isLoading={loading} {...props} />)
                    }/>
                    <Route path={`${match.path}/:collectionId`} render={
                        (props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/>
                    }/> 
                </div>
            )
    }
    
     
 }

const mapDispatchToProps = (dispatch)=>({
    updateCollections:collectionMap=>dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);

