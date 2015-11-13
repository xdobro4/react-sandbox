import React from "react";
import { Input } from 'react-bootstrap';

/** @namespace this.props.products */
export default React.createClass({
	displayName: "Component",
	getInitialState() {
		return {
			value: 'a'
		}
	},


	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	},

	render() {
		const {value} = this.state;

		return (
			<div>
				<Input type="select" label="Select" placeholder="select" onChange={this.handleChange}>
					<option value="a" selected>A</option>
					<option value="b">B</option>
				</Input>
				<div>
					Value: {value}
				</div>
			</div>);
	}
});
