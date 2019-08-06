import ShopActionTypes from './shop.types';
import {firestore,convertCollectionSnapShotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionStart = ()=> ({
    type:ShopActionTypes.FECTH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionMap=>({
    type:ShopActionTypes.FECTH_COLLECTIONS_SUCCESS,
    payload:collectionMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type:ShopActionTypes.FECTH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

export const fetchCollectionsStartAsync = ()=>{
    return dispatch=>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.onSnapshot(snapShot=>{
           const collectionMap = convertCollectionSnapShotToMap(snapShot);
           dispatch(fetchCollectionsSuccess(collectionMap));
        })
    }
}