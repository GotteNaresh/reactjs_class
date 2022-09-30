const AddTwoNumbers = (props) => {
    console.log('numbers', props);
    const { numbers, name } = props;
    console.log('numbers', numbers);
    let result = 0;
    numbers.map((value, index) => result += value);
    return(
        <>
        <h3>Name : {name}</h3>
        <h2> Result : {result}</h2>
        </>
    )
}

export default AddTwoNumbers;