import React from 'react'

import Store from './../Store.js'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.store = new Store()
	}
	render() {
		return (
			<div>
				App!
			</div>
		)
	}
}

export default App