import './App.css';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';


function App() {
  return (
    <>
      <div>
        <h1>MY APP</h1>
      </div>

      <header>
        <Show when="signed-out">
          <SignInButton mode="modal"/>    
          <SignUpButton mode="modal"/>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App
