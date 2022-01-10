import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const [binary, setBinary] = useState('');
	const [number, setNumber] = useState('');

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<input
					type="number"
					value={binary}
					onChange={(e) => setBinary(e.target.value)}
				/>
				<p>
					<code>
						{binary} {number}
					</code>
				</p>
				<button
					onClick={() => {
						setNumber('null');
					}}
				>
					Convert Binary to Decimal
				</button>
			</header>
		</div>
	);
}

export default App;
