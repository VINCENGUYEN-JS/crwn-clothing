import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectionIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector(
    {
        isLoading:selectionIsCollectionFetching
    }
)

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;