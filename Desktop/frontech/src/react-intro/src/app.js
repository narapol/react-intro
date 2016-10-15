import React from 'react'
import ReactDOM from 'react-dom'
//const title = "My React application";
const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">search</button>
        </form>
    )
}

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm />
    </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
        {props.items.map(item => (
            <li>{item}</li>
        ))}
        </ul>
    )
}

const Content = (props) => (
    <section>
        <p>{props.description}</p>
        <Items items={props.items}/>
    </section>
)
const AppwithoutDescription = () => (
    <Header title="No description here"/>
)
const App = () => {
    const appTitle = 'Fronttecth: React'
    const description = 'This is a simple react application'
    const items = [
        "Chares",
        "Tobey",
        "OLIVER",
        "LUCKY"
    ]
    (
    <section>
        <Header title={appTitle} />
        <Content description={description}/>
    </section>
    )
}
const element = document.getElementById("app")
ReactDOM.render(<App/>,element)