import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) =>(
    <div className='collection-overview'>
            {collections.map( ({id,...otherCollectionProps})=>
                 <CollectionPreview key={id} {...otherCollectionProps} />)
            }
    </div>
)

const mapStateToProp= createStructuredSelector(
    {
        collections:selectCollectionsForPreview
    }
)

export default connect(mapStateToProp)(CollectionOverview);


