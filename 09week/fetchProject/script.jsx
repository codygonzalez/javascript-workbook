'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentWillMount () {
    for (let i = 1; i < 26; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then((response) => {
        response.json().then((data) => {
          this.setState({
            list: this.state.list.concat([data])
          });
        });
      });
    }
  }

  render () {
    let nameList = [];
    let indexNumber = [];
    let weight = [];
    let height = [];
    this.state.list.forEach((item, index) => {
      nameList.push(<li key={index}>{item.name.toUpperCase()}</li>);
      indexNumber.push(<li key={index}>{item.id}</li>);
      weight.push(<li key={index}>{item.weight}hg</li>);
      height.push(<li key={index}>{item.height}dm</li>);
    });
    return (
      <div style={styles}>
        {/* Below is the table containing all the data pulled from API including rows for each value */}
        <h1 />
        <div id='table'>
          <table>
            <tbody>
              <tr>
                {/* Header row */}
                <th>Pokédex:</th>
                <th>Names:</th>
                <th>Weight:</th>
                <th>Height:</th>
              </tr>
              <tr>
                {/* Values as one row */}
                <td>{indexNumber}</td>
                <td>{nameList}</td>
                <td>{weight}</td>
                <td>{height}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
