import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ParallaxTilt from './pages/ParallaxTilt'
import Test from './pages/Test'
import TestGsap from './pages/TestGsap'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/parallaxTilt" component={ParallaxTilt} />
        <Route exact path="/gsap/test" component={TestGsap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
