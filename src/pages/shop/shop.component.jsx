import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import {firestore,convertCollectionSnapShotToMap} from '../../firebase/firebase.utils';


 class ShopPage extends Component {
      
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.onSnapshot(snapShot=>{
           const collectionMap = convertCollectionSnapShotToMap(snapShot);
           updateCollections(collectionMap);
        })

    }

     render (){
         const {match} = this.props;
            return (
               <div className='shop-page'>
                    <Route exact path={`${match.path}`} component={CollectionOverview}/>
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
                </div>
            )
    }
    
     
 }

const mapDispatchToProps = (dispatch)=>({
    updateCollections:collectionMap=>dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);

