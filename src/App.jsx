import "./App.css";

import withConditionalCard from "./withConditionalCard.jsx"
import SimpleCard from "./Simplecard.jsx"

function App(){
  const ConditionalSimpleCard = withConditionalCard(SimpleCard)

  return(
    <>

      <ConditionalSimpleCard
        title="Active Card" 
        content="This card is active." 
        disabled={false} 
      />

      <ConditionalSimpleCard 
      title="Disabled Card" 
      content="This card is disabled." 
      disabled={true} 
      />

    </>

  )
}

export default App;