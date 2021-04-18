
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
            body : JSON.stringify(
                {
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

              <h1>Indice Decode</h1>

              <p>If the acumulated number of array first mid part  consecutive sums list in left</p>
                  <p>to rigth direction have a number that match with other in array second</p>
              <p>mid part sums list in rigth to left direction, or at array second mid  part rest list</p>
              <p>or to last number of list. If you have multiple numbers that coincide the index is the min number</p>


              <h2>You can write a number list or array
                  they only can separate by quotes</h2>

            <h1>Decode Index Array is: {indice.data}</h1>
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

