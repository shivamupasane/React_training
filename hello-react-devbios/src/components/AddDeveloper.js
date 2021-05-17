import React, { Component } from 'react';
import Developer from '../models/Developer';
import { withRouter } from 'react-router-dom';
import devActions from '../reducers/devReducers';
import { connect } from 'react-redux';
class AddDeveloper extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            favoriteLanguage:'',
            yearStarted:null,
            isDirtyForm: false,
            isValidForm: false
        }
    }

    validation = () => {
        let firstNameValid = this.state.firstName ? true : false;
        let lastNameValid = this.state.lastName ? true : false;
        let favoriteLanguageValid = this.state.favoriteLanguage ? true : false;
        let yearStartedValid = !isNaN(this.state.yearStarted) && this.state.yearStarted;
    
        let isValid = firstNameValid && lastNameValid && favoriteLanguageValid && yearStartedValid;
        let isDirty = firstNameValid || lastNameValid || favoriteLanguageValid || yearStartedValid;

        this.setState({
            isValidForm: isValid,
            isDirtyForm: isDirty
        });      
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.validation();
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        if(!this.state.isValidForm)
            return;
        

        let dev = new Developer(
            null,
            this.state.firstName,
            this.state.lastName,
            this.state.favoriteLanguage,
            this.state.yearStarted
        );
        this.props.postDeveloper(dev);
        this.props.history.push("/bios");
    }

    render() {
        return (
            <div className="container">
                <h1>Add Developer Bio</h1>
                <div className="row">
                    <div className="col-mid-6">
                        <form id="devForm" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="favoriteLanguage">Favorite Language</label>
                                <input type="text" name="favoriteLanguage"  className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="yearStarted">Year Started</label>
                                <input type="text" name="yearStarted"  className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    (!this.state.isValidForm && this.state.isDirtyForm)
                    ?
                        <div id="errorMessage"  style={{fontSize:'12px',color:'red'}}>All fields must be filled out</div>
                    :
                        <div id="errorMessage"></div>
                }
            </div>
        );
    }
}

export default connect(null, {
    postDeveloper: devActions.addDevBiosActionCreator
})(withRouter(AddDeveloper));