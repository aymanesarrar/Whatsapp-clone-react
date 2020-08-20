import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
function login() {
  const signIn = () => {};
  return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
					alt="Whatsapp logo"
				/>
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign in with google</Button>
			</div>
		</div>
	);
}

export default login
