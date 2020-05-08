import React, { Component } from "react";

class App extends Component {
	state = {
		items: [
			{
				name: "Netlify: Our Conversion from Angular to React",
				url: "netlify.com",
				time: "9 hours ago",
				user: "Constantino",
				comments: "10 comments"
			},
			{
				name: "Netlify: Our Conversion from Angular to React",
				url: "netlify.com",
				time: "9 hours ago",
				user: "Constantino",
				comments: "10 comments"
			},
			{
				name: "Netlify: Our Conversion from Angular to React",
				url: "netlify.com",
				time: "9 hours ago",
				user: "Constantino",
				comments: "10 comments"
			},
			{
				name: "Netlify: Our Conversion from Angular to React",
				url: "netlify.com",
				time: "9 hours ago",
				user: "Constantino",
				comments: "10 comments"
			}
		]
	};
	render() {
		return (
      <div className='main'>
          {this.state.items.map(item=>{
            return(
            <div><p>{item.name}</p>
            <p>{item.url}</p>
            <p>submited {item.time} by {item.user}</p>
            <p>{item.comments}</p></div>
)          })}    
      </div>
    );
	}
}

export default App;
