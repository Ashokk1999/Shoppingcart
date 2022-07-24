import React from "react";
class AddContact extends React.Component {
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type = "text" name= "name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type = "text" name= "email" placeholder="Email"/>
                    </div>
                    <div className="field">
                        <label>Address Line</label>
                        <input type = "text" name= "addressLine" placeholder="Address Line"/>
                    </div>
                    <div className="field">
                        <label>City</label>
                        <input type = "text" name= "city" placeholder="City"/>
                    </div>
                    <div className="field">
                        <label>pincode</label>
                        <input type = "int" name= "pincode" placeholder="Pincode"/>
                    </div>
                    <div className="field">
                        <label>Contact Number</label>
                        <input type = "int" name= "phoneNo" placeholder="phoneNo"/>
                    </div>
                    <button className="ui button green"> Add </button>
                </form>
            </div>
        );
    }
}

export default AddContact;