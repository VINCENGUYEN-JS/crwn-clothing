import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectionIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';


const mapStateToProps = createStructuredSelector(
    {
        isLoading:state=>!selectionIsCollectionsLoaded(state)
    }
)

const CollectionsPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionsPageContainer;