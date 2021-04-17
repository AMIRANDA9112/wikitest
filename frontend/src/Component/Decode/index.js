
import React, { Component } from "react";




export default class Decode extends Component {
  constructor(props) {
    super(props);
    this.state = {arreglo: [], indice : ''};
	}
	onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }


      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { arreglo } = this.state;

        fetch('http://localhost:8000/array/', {
            method : 'POST',
            body : JSON.stringify( {
                content : arreglo
            }),
            headers: {
                "content-type": "aplication/json; charset=UTF-8"
            }
        }).then(response =>{
            return response.json()
        }).then(json => {
            this.setState({indice:json})
        });
      }

      render() {
        const { arreglo, indice } = this.state;
        return (
          <form onSubmit={this.onSubmit}>

            <p>Thi is the Indice Array {indice}</p>
            <input
              type="text"
              name="arreglo"
              value={arreglo}
              onChange={this.onChange}

            />

            <button type="submit">Submit</button>
          </form>
        );
      }
    }

