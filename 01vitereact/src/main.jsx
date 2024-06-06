import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1>chai is hot</h1>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: "click me to visit google"
// }

const anotherUser = "Meet Pokal"

const reactElement = React.createElement(
    'a',
    {
        href: 'http://google.com',
        target: '_blank'
    },
    'click me',
    anotherUser
)

const anotherElement = (
    <a href='http://google.com' target='_blank'>Click me to visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    // reactElement
    // anotherElement
    
    

)
