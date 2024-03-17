import PropTypes from 'prop-types';

function Student (){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

// Made to issue warning if the props are not passed with correct values
Student.prototype = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student;