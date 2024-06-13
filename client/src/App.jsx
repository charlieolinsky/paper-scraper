import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TestArticle from './pages/TestArticle'
function App() {
    
    return (
        <>
            <h1> Signup </h1>
            <Signup />    
            <h1> Login </h1>
            <Login />
            <h1> Test Articles </h1>
            <TestArticle />
        </>   
    )
}

export default App
