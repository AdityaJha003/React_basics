// Using Conditional Rendering


import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please Log in to continue
                        </h2>  

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
}

export default UserGreeting;