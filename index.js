import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <p/>
          Test to see if stackblitz reverts my code.
        </p>

        <script type="text/javascript" src="tau-prolog.js"></script>
        <script>

        var session = pl.create();

        var parsed = session.consult("
        % load lists module
        :- use_module(library(lists)).

        % fruit/1
        fruit(apple). fruit(pear). fruit(banana).

        % fruits_in/2
        fruits_in(Xs, X) :- member(X, Xs), fruit(X).
        "); // true
        if ( parsed != true ) 
          console.log( parsed ); 
        
        </script>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
