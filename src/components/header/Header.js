import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './header.css';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchForm from "./SearchForm";
import search, {searchProduct} from "../../ducks/search"

class Header extends Component {

    static propTypes = {
    	t:  PropTypes.object
    };

    render(){
        const {t} = this.props;
        //console.log(this.props);
    	return(
    		<header>
                <div className="flexible container">
					<div className="logo">
						<img src="" alt=""/>
					</div>
					<div className="phone-wrapper">
						<h3>{t.internetShop}</h3>
						<span>{t.mobilePhone[1]}</span>
						<span>{t.mobilePhone[2]}</span>
					</div>
					<div className="bracket-wrapper">

					</div>
                </div>
                <nav className="container">
					<SearchForm handleSubmit = {this.handleSubmit} />
                </nav>
		    </header>
	    )
    }

   handleSubmit = ({product}) =>{
    	this.props.searchProduct(product);
   };
}


export default connect( state =>({
    t: state.localization
}), {searchProduct} )(Header)
