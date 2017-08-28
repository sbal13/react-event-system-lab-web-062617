import React from 'react'

class EyesOnMe extends React.Component{
	

	focusEvent = () => console.log('Good!');
	blurEvent = () => console.log('Hey! Eyes on me!');

	render(){
		return <button onBlur={this.blurEvent} onFocus={this.focusEvent}/>
	}
}

export default EyesOnMe