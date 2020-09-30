import React from "react";
import "./App.css";
// import ExpenseTracker from './components/ExpenseTracker/components/index'
// import {TransactionProvider} from "./components/ExpenseTracker/transactionContext/transContext";
import LanguageSelector from "./components/localization/components/LanguageSelector";
import {LanguageProvider} from "./components/localization/localContexApi/localContext";
import Explore from "./components/localization/components/explore";
export default App;
/*import Counter from './components/counter';
// import ThemeContext from "./components/contextApi/ThemeContext.js";
// import Header from "./components/contextApi/Header";
// import Main from "./components/contextApi/main";
// import CounterContext from "./components/counterContextApi/counterContext";*/

function App() {
    /*    const themeHook = useState("light");
        const counter = useState(10)*/
    return (
        //language localization
        <LanguageProvider>
            <div className="App">
                {/*<header className="App-header">*/}
                <LanguageSelector/>
                {/*</header>*/}
                <Explore/>
            </div>
        </LanguageProvider>

        //expense tracker app
        /*  <TransactionProvider>
              <ExpenseTracker/>
          </TransactionProvider>*/

        //dark theme and counter app
        /* <ThemeContext.Provider value={themeHook}>
             <CounterContext.Provider value={counter}>
                 <Counter/>
                 <Header/>
                 <Main/>
             </CounterContext.Provider>
         </ThemeContext.Provider>*/

    );
}
