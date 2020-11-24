import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import GlobalStyle from './Reusable/global'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {

    return(
    <>
    <GlobalStyle/>
        <Router>
            <Switch>
                <Route exact path="/" component={Step1}></Route>
                <Route exact path="/step2" component={Step2}></Route>
                <Route exact path="/step3" component={Step3}></Route>
            </Switch>
        </Router>
        
    </>
    )
}

export default App;