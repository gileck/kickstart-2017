import React, { Component } from 'react';
import './App.css';

class ShippingFormApp extends Component {

    constructor() {
        super();
        this.state = {
            form: {
                first: "",
                last: "",
                country: "",
                city: "",
                address: "",
                zip: "",
                email: "",
            },
            formErrors: {
                email: false
            }
        }
    }

    onChange(e) {
        const form = JSON.parse(JSON.stringify(this.state.form));
        form[e.target.name] = e.target.value;
        this.setState({form: form},() => this.verifyEmail());
    }

    verifyEmail() {
        const formErrors = this.state.formErrors;
        if (!this.state.form.email) {
            formErrors.email = false;
        } else {
            formErrors.email = !this.validateEmail(this.state.form.email);
        }
        this.setState({formErrors: formErrors});
        return !formErrors.email;
    }

    isFromDisabled() {
        for (const key in this.state.form) {
            if (this.state.form[key] === '') return true;
        }
        for (const key in this.state.formErrors) {
            if (this.state.formErrors[key]) return true;
        }
    }

    clearForm() {
        this.setState({
            form: {
                first: "",
                last: "",
                country: "",
                city: "",
                address: "",
                zip: "",
                email: "",
            }
        });
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    submit(e) {
        e.preventDefault();
        console.log(this.state.form);
        this.clearForm();

    }

  render() {
    return (<form>
        <div className="input-div">
            <label htmlFor="first">First Name</label>
            <input type="text" name="first" value={this.state.form.first} onChange={(e) => this.onChange(e)}/>
        </div>

        <div className="input-div">
            <label htmlFor="last">Last Name</label>
            <input value={this.state.form.last} onChange={(e) => this.onChange(e)} type="text" name="last"/>
        </div>

        <div className="input-div">
            <label htmlFor="country">Country</label>
            <select name="country" value={this.state.form.country} onChange={(e) => this.onChange(e)}>
                <option></option>
                <option >ISRAEL</option>
                <option >USA</option>
                <option >ENGLAND</option>
            </select>
        </div>

        <div className="input-div">
            <label htmlFor="city">City</label>
            <input value={this.state.form.city} onChange={(e) => this.onChange(e)} type="text" name="city"/>
        </div>

        <div className="input-div">
            <label htmlFor="address">Street Address</label>
            <input value={this.state.form.address} onChange={(e) => this.onChange(e)} type="text"  name="address"/>
        </div>


        <div className="input-div">
            <label htmlFor="zip">ZIP Code</label>
            <input value={this.state.form.zip} onChange={(e) => this.onChange(e)} type="text" name="zip" />
        </div>


        <div className="input-div">
            <label htmlFor="email">E-mail</label>
            <input value={this.state.form.email} onChange={(e) => this.onChange(e)} type="email"  name="email"/>
            <span style={{visibility: this.state.formErrors.email ? "visible" : "hidden"}} >Invalid Email</span>
        </div>

        <input type="submit" value="submit" disabled={this.isFromDisabled()} onClick={(e) => this.submit(e)}/>
    </form>)
  }

}

export default ShippingFormApp;

