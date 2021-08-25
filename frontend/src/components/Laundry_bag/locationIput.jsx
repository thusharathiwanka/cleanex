import React, { Component, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
export default class LocationInput extends Component {
	constructor(props) {
		super(props);
		this.state = { address: "Kaluthara" };
	}
	handleChange = (address) => {
		this.setState({ address });
		this.props.setAddress(address);
	};
	render() {
		return (
			<div>
				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				>
					{({
						getInputProps,
						suggestions,
						getSuggestionItemProps,
						loading,
					}) => (
						<div>
							<input
								{...getInputProps({
									placeholder: "Search Places ... ",
									className: "location-search-input",
								})}
								autoFocus
								required
								type="text"
								className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
							/>
							<div className="autocomplete-dropdown-container">
								{loading && <div>Loading...</div>}
								{suggestions.map((suggestion) => {
									const className = suggestion.active
										? "suggestion-item--active"
										: "suggestion-item";
									// inline style for demonstration purpose
									const style = suggestion.active
										? { backgroundColor: "#fafafa", cursor: "pointer" }
										: { backgroundColor: "#ffffff", cursor: "pointer" };
									return (
										<div
											{...getSuggestionItemProps(suggestion, {
												className,
												style,
											})}
										>
											<span>{suggestion.description}</span>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</PlacesAutocomplete>
			</div>
		);
	}
}
