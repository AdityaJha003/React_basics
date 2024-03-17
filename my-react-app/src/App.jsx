import React from 'react'
import Card from './Card'
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
function App() {
  return (
    <>
     {/* <Card />
     <Card />
     <Card />
     <Button /> */}
     {/* <Student name="Spongebob" age={30} isStudent={true} />
     <Student name="Patrick" age={42} isStudent={false} />
     <Student name="Swiss" age={50} isStudent={false} />
     <Student name="Sandy" age={27} isStudent={true} />
     <Student /> */}

     <UserGreeting isLoggedIn={true} username="Aditya"></UserGreeting>
    </>
  )
}

export default App
