import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {HeaderContainer,LogoContainer,OptionContainer,OptionLink,OptionDiv} from './header.styles.jsx';

const Header = ({currentUser,hidden})=>
(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionContainer>
            <OptionLink  to="/shop">SHOP</OptionLink>
            <OptionLink  to="/shop">CONTACT</OptionLink>
            <OptionLink to=''> 
                {currentUser?
                <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>:
                <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
            </OptionLink>
            <CartIcon />
        </OptionContainer>
        {
            hidden ? null :<CartDropdown/>
        }

    </HeaderContainer>
)

const mapStateToProps =createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);