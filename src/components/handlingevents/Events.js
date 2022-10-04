const Events = () => {
    const userAlert = () => {
        alert("HI");
    }
    const formSubmit = () => {
        alert("form");
    }
    const getUserParameter = (value) => {
        console.log(value);
    }
    return(
        <>
            <button onClick={userAlert}>
            Activate Lasers
            </button>
            <br>
            </br>
            <form onSubmit={formSubmit}>
                <input type='text' name='name' />
                <input type='submit' value='Submit'/>
            </form>

            <button onClick={getUserParameter('10')}>Click Me</button>

        </>
    )
}

export default Events;