import React, { Component } from 'react';
import Developer from '../models/Developer';
import {withRouter} from 'react-router-dom'
class AddDeveloper extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            firstName: '',
            lastName:'',
            favoriteLanguage:'',
            yearStarted:''
        }
    }
    clearForm = () => {
        this.setState({
            firstName: '',
            lastName:'',
            favoriteLanguage:'',
            yearStarted:'' 
        });
    }
    handleChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let dev = new Developer(
            null,
            this.state.firstName,
            this.state.lastName,
            this.state.favoriteLanguage,
            this.state.yearStarted
        );
        this.props.addDeveloper(dev);
        this.postDeveloper(dev);
        document.getElementById("devForm").reset();
        this.props.history.push('/bios');
        //this.clearForm();
    }
    postDeveloper(dev) {
        fetch("https://tech-services-1000201953.uc.r.appspot.com/developers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dev)
        })
  .catch(error => console.log("error"+ error));
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
                                <input type="text" name="firstName"  className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="favoriteLanguage">Favorite Language</label>
                                <input type="text" name="favoriteLanguage"  className="form-control"  onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="yearStarted">Year Started</label>
                                <input type="text" name="yearStarted"  className="form-control"  onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(AddDeveloper);