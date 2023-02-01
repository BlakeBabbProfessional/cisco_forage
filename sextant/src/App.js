import './App.css';

function App() {
	return (
		<>
			<Banner/>
			<Exhibit values="This is a paragraph!!!"/>
		</>
	);
}

function Banner() {
	return <h1>Cisco Sextant</h1>;
}

function Exhibit({values}) {
	return (
		<>
			<h2>Exhibit</h2>
			<p>{values}</p>
		</>
	);
}

export default App;
