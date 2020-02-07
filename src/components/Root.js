import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header'
import {connect} from 'react-redux';

class Root extends Component {
    static propTypes = {
    	
    };

    constructor(props){
        super(props);
    }

    render(){
        const {localization} = this.props;

    	return(
    		<div className="main-container">
                <Header t={localization}/>
		    </div>
	    )
    }
}

export default connect(state=>({
    localization: state.localization
}))(Root)