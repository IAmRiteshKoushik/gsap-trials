import { gsap } from "gsap";



const App = () => {

  gsap.to(".square", { rotate: 360 })

  return(
    <>
        <Title />
        <div className="square">Hello World</div>   
    </>
  )
}

export default App