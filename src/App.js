// import './App.css';
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


// function App() {
//   const [value, onChange] = useState(new Date());
//   return (
//     <div className="App">
      
//       <Calendar
//         onChange={onChange}
//         value={value}
//       />
//     </div>
// //   );
// }


import React from 'react';
import './App.css';






class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
      
  }
    handleInput(e){
      this.setState({
        currentItem: {
          text: e.target.value,
          key:Date.now()
        }

    })
    
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
  }
    render(){
      return (
        <div className="App">
          <h1 className="textHead">To Do List!!!</h1>
          
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="Enter Text"
                onChange={this.handleInput} />
              <button type="submit"> Add </button>
            </form>
          </header>
        </div>
      );
    
  }

}

export default App;
