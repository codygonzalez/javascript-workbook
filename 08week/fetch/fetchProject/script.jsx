'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    fetch('http://services.groupkt.com/country/get/all').then((response) => {
      response.json().then((data) => {
        const countries = data.RestResponse.result;
        countries.forEach((country) => {
          // console.log(`The country's name is ${country.name}`);
          return (
            <div>
              <h1>Address Book / Country Codes</h1>
              {/* // Your code here */}

            </div>
          );
        });
      });
    });
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
