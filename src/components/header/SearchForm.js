import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form'
import handleSubmit from "redux-form/es/handleSubmit";

class SearchForm extends Component {
    static propTypes = {

    };

    render(){
		const {handleSubmit} = this.props;
    	return(
    		<div>
				<form onSubmit={handleSubmit}>
					<div>
						<Field name="product" component='input' type='text'/>
					</div>
					<div>
						<input type="submit" />
					</div>
				</form>
			</div>
		)
	}



}

export default reduxForm({
	form: "search"
})(SearchForm)