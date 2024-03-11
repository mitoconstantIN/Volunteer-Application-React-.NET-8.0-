const NotEmpty = (value) => {
    console.log(value)
    let errorMsg = '';
    if (!value)
        errorMsg = "This field cannot be empty.";
    if (value && value.length < 1) {
        errorMsg = "This field cannot be empty.";
    }
    return errorMsg;
}

export { NotEmpty }