import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Plan from "./components/your_plan/Plan"
import AddOns from "./components/add_ons_page/AddOns"
import FinishPage from "./components/finish_page/FinishPage"
import ThankYou from "./components/thank_you_page/ThankYou"
import App from "./App"

const Router = () => {
    const [state, setState] = useState(true);
    const [switchState, setSwitchState] = useState(Boolean);

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App/>} path="/"/>
                <Route element={<Plan switchState={switchState} setSwitchState={setSwitchState} state={state} setState={setState}/>} path="/plan"/>
                <Route element={<AddOns state={state}/>} path="/other"/>
                <Route element={<FinishPage state={state}/>} path="/total-cost"/>
                <Route element={<ThankYou/>} path="/success"/>

                <Route path="*" element={<div>Error</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router