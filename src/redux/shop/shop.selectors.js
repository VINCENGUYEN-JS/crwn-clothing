import {createSelector} from 'reselect';

const selectShop = (state)=>state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop)=> shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections=>collections ? Object.keys(collections).map(
        keys=>collections [keys]
    ) : []
)

export const selectionIsCollectionFetching = createSelector(
    [selectShop],
    shop=>shop.isFetching
)

export const selectCollection = collectionUrlParam => 
    createSelector([selectCollections],
        collections=>(collections ? collections[collectionUrlParam] : null)
    )

export const selectionIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => Boolean(shop.collections)
)