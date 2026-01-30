// Components
    // components can be resuable
    // components used to create SPA
    // components are logical building blocks of codes

// 1) Class Based Component (CBC)
    // render is mandatory
    // this keyword => points to curr class => gives properties of curr class
    // {Component} => it itself a component

//import React, {Component} from "react"
//import Child from "./Child"
    // To make use of "react" library we have to take one variable nd then,
    // we need to use it. Since, i can take any variable name then "i can use default export"
    // cz for "default export" we can take variable name as anything right?
    // now for "default export" we should not use "{}" right?
    // So, thats why we are not using "{}" here

/*
    class App extends Component {
        render() {
            console.log(this)
            return <h1>CBC</h1>
        }
    }
    export default App
*/

// 2) Functional Based Component (CBC)
    // render is not used here, we directly return
    // Since, we are not using class here we cant use "this" keyword
    // So, to get to know what is present inside App we can use => console.dir(App)

/*
    const App = () => {
        console.dir(App)
        return <h1>FBC</h1>
    }
    export default App
*/

// -------------------------------------------------------
// **IMP
/* MAIN <- APP <- CHILD
    const App = () => {
        return <Child/>
    }
    export default App
*/

// -------------------------------------------------------
// **IMP
// RULES :
    // 1) ADJACENT
    // 2) SELF CLOSING TAG
    // 3) DATA {}
    // 4) CAMELCASE

/*
    import { Fragment } from "react"
    const App = () => {
        let firstName = "Punith"
        let lastName = "L"

        return (
        <>
            <h1>This is H1</h1>
            <h2>This is H2</h2>
            <h1>
                {firstName} {lastName}
            </h1>
            <hr/>
            <label htmlFor="uname">User : </label>
            <input id="uname" />
        </>
        )
    }
    export default App
*/

// -------------------------------------------------------

/*
    // **IMP
    // INLINE CSS
    import { Fragment } from "react"
    const App = () => {
        // { {} = Object } => Expression
        let btn = {
            height: "50px",
            width: "200px",
            borderRadius: "10px",
            background: "yellow"
        }

        return (
            <>
            <p style={{color:"red", textAlign:"center"}}>INLINE CSS</p>
            <button style={btn}>Color Me</button>
            </>
        )
    }
    export default App
*/

/*
    // **IMP
    // GLOBAL CSS
    import "./global.css"

    const App = () => {
        return (
            <>
            <h1 id="head">GLOBAL CSS</h1>
            <div className="circle"></div>
            </>
        )
    }
    export default App
*/

/*
    // **IMP
    // MODULE CSS
    
    // .module.css part as a signal:
    // “This CSS file should be treated as a CSS Module (scoped locally), 
    // not as global CSS.”

    import React from "react";
    import Header from "./modulecss/Header"

    const App = () => {
        return (
            <>
                <Header/>
            </>
        )
    }
    export default App
*/

// -------------------------------------------------------
/*

import React from 'react'
import ConditionalRendering from './ConditionalRendering'

//import { fragment } from "react"
    // <fragment>   ❌ treated like HTML tag
    // <Fragment>   ✅ treated as React component
    // React treats lowercase tags as HTML elements, and uppercase as React components.
    // React exports it like this internally:
        // export const Fragment = ...

const App = () => {
  return (
    <fragment>
        <ConditionalRendering />
    </fragment>
  )
}

export default App

*/

// -------------------------------------------------------
// **IMP
// PROPS

/*
    import React from 'react'
    import Child from './Child'
    
    const App = () => {
      return (
        <>
            <Child 
                student="Punith"
                sid={100}
                bool={true}
            />
        </>
      )
    }
    export default App
*/

// ---------------------------------

// **IMP
// PROPS DESTRUCTURING - AFTER RECEIVING
/*
    import React from 'react'
    import Child from './Child'
    
    const App = () => {
      return (
        <>
            <Child 
                employee="Punith"
                sal={10000000}
                bool={true}
            />
        </>
      )
    }
    export default App
*/

// ---------------------------------

// **IMP
// PROPS DESTRUCTURING - WHILE RECEIVING
/*
    import React from 'react'
    import Child from './Child'
    
    const App = () => {
      return (
        <>
            <Child 
                employee="Punith"
                sal={10000000}
                bool={true}
            />
        </>
      )
    }
    export default App
*/

// ---------------------------------

// **IMP
// PROPS DESTRUCTURING - SENDING ARRAY AS "PROP VAL"
/*
    import React from 'react'
    import Child from './Child'
    
    const App = () => {

        let technology = ["Java", "Python", "Testing"]

        return (
            <>
                <Child 
                    institute={["QSpiders", "JSpiders", "PySpiders"]}
                    tech={technology}
                />
            </>
        )
    }
    export default App

*/

// ---------------------------------

// **IMP
// PROPS DESTRUCTURING - SENDING OBJ AS "PROP VAL"
/*

    import React from 'react'
    import Child from './Child'
    
    const App = () => {

        let place = {state: "Karnataka", city: "Udupi"}

        return (
            <>
                <Child 
                    institute={{pname: "Punith", age:21}}
                    address={place}
                />
            </>
        )
    }
    export default App

*/

// ---------------------------------

// **IMP
// PROPS DESTRUCTURING - SENDING "MULTIPLE VAL" AS "PROP VAL"
/*

    import React from 'react'
    import Parent from './Parent'
    
    const App = () => {
      return (
        <>
            <Parent/>
        </>
      )
    }
    export default App

*/

// ---------------------------------
// **IMP
// PROPS CHILDREN
/*
    import React from 'react'
    import Parent from './Parent'
    
    const App = () => {
      return (
        <>
            <Parent/>
        </>
      )
    }
    export default App
*/

// -------------------------------------------------------
// **IMP
// TASK
/*

    import React from 'react'
    import ProfileInfo from "./task/ProfileInfo"

    const App = () => {

        return (
            <>
                <ProfileInfo/>
            </>     
        )
    }
    export default App
*/

// -------------------------------------------------------
// **IMP
// PROPS ARE IMMUTABLE
/*

    import React from 'react'
    import Parent from './Parent'

    const App = () => {

        return (
            <>
                <Parent/>
            </>
        )
    }

    export default App
*/

// -------------------------------------------------------
// **IMP
// TOP/SENDER ---> MEDIATOR ---> BOTTOM/RECEIVER
/*

    import React from 'react'
    import Product from './Product'
    
    const App = () => {

        return (
            <>
                <Product/>
            </>
        )
    }
    export default App
*/





// ---------------------------------------------------------------------------
// **IMP
// HOOKS
    // FUNCTIONS -> FBC -> 16.8
    // 3 BASIC => useState() , useEffect(), useContext()
    // 
/*

import React from 'react'
import StateComponent from './StateComponent'

const App = () => {

    return (
        <>
            <StateComponent/>
        </>
    )
}
export default App
*/

// ---------------------------------
// **IMP
// HOOKS => COUNTER
/*

import React from 'react'
import SimpleCounter from './task/SimpleCounter'

const App = () => {

    return (
        <>
            <SimpleCounter/>
        </>
    )
}
export default App
// */

// ---------------------------------
// **IMP
// HOOKS => TOGGLE
/*

import React from 'react'
import SimpleCounter from './task/SimpleCounter'
import ToggleContent from './task/ToggleContent'

const App = () => {

    return (
        <>
            <ToggleContent/>
        </>
    )
}
export default App
*/

// ------------------------------------------------------------------

// ONE PROGRAM NOT WRITTEN -- PRESENT IN QTALK

// ------------------------------------------------------------------





// **IMP
// CONTEXT API
/*

import React from 'react'
import ProductContext from './context/ProductContext'

const App = () => {
    return (
        <>
            <ProductContext/> 
        </>
    )
}
export default App
*/

// ---------------------------------
// **IMP
// CONTEXT API
/*

import React from 'react'
import ProfileContext from './context/ProfileContext'

const App = () => {
    return (
        <>
            <ProfileContext/> 
        </>
    )
}
export default App
*/





// ------------------------------------------------------------------
// **IMP
// **HOC
// A return statement in an HOC returns to the place where the HOC is called.
// If the HOC is never called, the return is never used and nothing renders.
/*

import React from 'react'
import CompA from './hoc/CompA'
import CompB from './hoc/CompB'

const App = () => {
    return (
        <>
            <CompA/>
            <CompB/>
        </>
    )
}
export default App
*/

// ------------------------------------------------------------------
// **IMP
// **REFERENCE
/*

import React from 'react'
import Reference from './Reference'

const App = () => {

    return (
        <>
            <Reference/>
        </>
    )
}
export default App
*/

// ---------------------------------
// **IMP
// VIDEO REFERENCE
/*

import React from 'react'
import VideoReference from './VideoReference'

const App = () => {
    return (
        <>
            <VideoReference/>
        </>
    )
}
export default App
*/





// ------------------------------------------------------------------
// **IMP
// **UNCONTROLLED FORM
/*

import React from 'react'
import Uncontrolled from './Uncontrolled'

const App = () => {
    return (
        <>
            <Uncontrolled/>
        </>
    )
}
export default App
*/

// ---------------------------------
// **IMP
// **CONTROLLED FORM
/*

import React from 'react'
import Controlled from './Controlled'

const App = () => {
    return (
        <>
            <Controlled/>
        </>
    )
}
export default App
*/





// ------------------------------------------------------------------
// **IMP
// **LIFECYCLE -- MOUNTING PHASE
/*

import React from 'react'
import LifeCycleParent from './lifecycle/LifeCycleParent'

const App = () => {
    return (
        <>
            <LifeCycleParent/>
        </>
    )
}
export default App
*/

// ---------------------------------
// **IMP
// **LIFECYCLE -- UPDATING PHASE and UNMOUNTING PHASE
/*

import React from 'react'
import LifeCycleParent from './lifecycle/LifeCycleParent'

const App = () => {
    return (
        <>
            <LifeCycleParent/>
        </>
    )
}
export default App
*/





// ------------------------------------------------------------------
// **IMP
// **SIDE EFFECT
/*

import React from 'react'
import UseEffectParent from './lifecycle/UseEffectParent'

const App = () => {
    return (
        <>
            <UseEffectParent/>
        </>
    )
}
export default App
*/





// ------------------------------------------------------------------
// **IMP
// **key-props -> special prop. Used to identify each element uniquely
// key = value ---> value passed to key must be unique
// list => collection of item => array
// rendering => loading/displaying content on UI
/*

import React, { Fragment } from 'react'

const App = () => {
    const students = ["punith", "athira", "vipul", "punith", "athira"]

    return (
        <>
            {students.map((val, idx) => {
                return (
                    <Fragment key={idx}>
                        <ul>
                            <li>{val}</li>
                        </ul>
                    </Fragment>
                )
            })}
        </>
    )
}
export default App
*/

// ---------------------------------
// **IMP
// **key-props
/*

import React from 'react'
import AxiosLibrary from './apicalls/AxiosLibrary'

const App = () => {
    return (
        <>
            <AxiosLibrary/>
        </>
    )
}
export default App
*/


// ------------------------------------------------------------------

// ONE PROGRAM NOT WRITTEN -- ABSENT

// ------------------------------------------------------------------





// ------------------------------------------------------------------
// **IMP
// **PURE COMPONENT IN CBC
/*
import React from 'react'
import PureParent from './prevent-rerender/PureParent'

const App = () => {
    return (
        <>
          <PureParent/>  
        </>
    )
}
export default App
*/

// ---------------------------------
// **IMP
// **PURE COMPONENT IN FBC
/*

import React from 'react'
import PureParent from './prevent-rerender/PureParent'

const App = () => {
    return (
        <>
            <PureParent/>
        </>
    )
}
export default App
*/





// ------------------------------------------------------------------
// **IMP
// **useMemo() in FBC
// /*

import React, { useMemo, useState } from 'react'

const App = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(10)

    // heavy func
    const even = useMemo(() => {
        let i = 0

        while (i < 10000000000) {
            i++
        }
        
        return count1 % 2 === 0 // only if condition false "return" executes

    }, [count1])

    return (
        <>
            <button onClick={() => {
                setCount1(count1 + 1)
            }}>COUNT1 -- {count1}</button>

            {even ? "EVEN" : "ODD"}

            <button onClick={() => {
                setCount2(count2 + 1)
            }}>COUNT2 -- {count2}</button>
        </>
    )
}
export default App
// */
