import React, { Component } from 'react';
class Contact extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="contact" id="contact">
                    <div className="container">
                        <div className="row d-flex h-100">
                            <div className="col-lg-8 offset-lg-2 justify-content-center align-self-center">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1" className="text-light">Email</label>
                                        <input type="email" className="form-control bg-dark border-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="usr" className="text-light">Name</label>
                                        <input type="text" className="form-control bg-dark border-dark text-light" id="usr"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment" className="text-light">Message</label>
                                        <textarea className="form-control bg-dark border-dark text-light" rows="5" id="comment"/>
                                    </div>
                                    <button type="submit" className="btn btn-outline-light">Send</button>                                
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;