import ImagePicker from './Components/ImagePicker'
import styled from 'styled-components'

function App() {
	return (
		<StyledApp>
			<ImagePicker />
		</StyledApp>
	)
}

const StyledApp = styled.div`
	margin: 0 auto;
	display: grid;
	place-items: center;
`
export default App
