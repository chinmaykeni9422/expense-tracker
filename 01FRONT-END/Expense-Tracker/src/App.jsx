import styled from "styled-components"
import bg from "./img/bg.png"
import {MainLayout} from "./styles/Layouts.styles.js"
import Orb from "./components/Orb/Orb.jsx"
import Navigation from "./components/Navigation/Navigation.jsx"
import { useMemo, useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Expenses from "./components/Expenses/Expenses.jsx"
import Income from "./components/Income/Income.jsx"
import Home from "../src/components/Home/Home.jsx"

function App() {

const [active, setActive] = useState(1) ;

//--------
  const displayData = () => {
    switch(active){
      case 1:
        return <Home/>
      case 2:
        return <Dashboard />
      case 3:
        return <Dashboard />
      case 4:
        return <Income />
      case 5: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

//--------
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
      <AppStyled bg={bg} className="App">
      
      {orbMemo}

      <MainLayout>     
        <Navigation active={active} setActive={setActive} />
          <main>
            {displayData()}
          </main>
      </MainLayout>

      </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App
