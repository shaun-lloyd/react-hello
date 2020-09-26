import React from 'react'
import Clock from './Clock'
import Toggle from './Toggle'
import List from './List'
import Welcome from './Welcome'
import Form from './Form'
import Calculator from './Calc'
const name="Test"

export default function App() {
    return (
		<div>
			<Welcome name={name}/>
			<Clock />
			<Toggle />
			<List list={["a","b","c"]} />
			<Form />
			<Calculator />
		</div>
    )
}
