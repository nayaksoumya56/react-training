import React from 'react';

class SearchBar extends React.Component{

    state = { term : '' };

    onFormSubmit = (event) => {
        event.preventDefault(); // keeps the form from performing default operation ( refresh page )

        console.log(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search App</label>
                        <input type="text" placeholder="car, dog, buildings, flower..." 
                        // onChange = {this.onInputChange} //Parenthesis is not added as function needs to be called in the future.
                        onChange = { (e) => this.setState({term : e.target.value})}//Same as above but inline function
                        value = {this.state.term} //renders typed value into the box. helps to control data using React i.e., Controlled Element.
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;