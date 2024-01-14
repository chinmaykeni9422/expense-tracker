import styled from "styled-components"
import bg from "./img/bg.png"
import {MainLayout} from "./styles/Layouts.styles.js"
import Orb from "./components/Orb/Orb.jsx"
import Navigation from "./components/Navigation/Navigation.jsx"

function App() {

  return (
    <AppStyled bg={bg} className="App">
      
      <Orb />

      <MainLayout>     
        <Navigation />
      </MainLayout>

    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

export default App
