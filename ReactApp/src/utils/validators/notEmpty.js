const NotEmpty = (value) => {
    console.log(value)
    let errorMsg = '';
    if (!value)
        errorMsg = "Campul nu poate fi gol";
    if (value && value.length < 1) {
        errorMsg = "Campul nu poate fi gol";
    }
    return errorMsg;
}

export { NotEmpty }