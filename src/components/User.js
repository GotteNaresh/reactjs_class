import React, { useState } from 'react';
import './Styles.css';
import Child from './Child';
const User = () => {
    const userName = 'Naresh';
    const [name, setName] = useState(userName)
    return(
        <>
        <h1>Functional Component</h1>
        <Child username={name} />
        </>
    )
}
export default User;