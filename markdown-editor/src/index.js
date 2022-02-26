import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Remarkable } from 'remarkable';


class MarkdownEditor extends React.Component{
  // constructor
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "Type something here !"
    }

  }

  // handle change
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  // raw markup value
  getRawMarkup(){
    const md = new Remarkable();
    return {__html: md.render(this.state.value)};
  }

  // render
  render(){
    return (
      <div className='container'>
        <div>
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            defaultValue={this.state.value} 
          />
        </div>

        <div>
          <h3>MarkDown</h3>
          <div dangerouslySetInnerHTML={this.getRawMarkup()}>

          </div>
        </div>
      </div>
    );
  }


}



ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
