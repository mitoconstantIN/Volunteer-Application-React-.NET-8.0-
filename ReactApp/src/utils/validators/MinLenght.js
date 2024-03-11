const MinLenght = (value, length) => {
    let errorMsg = '';
    if (value.length < length)
        errorMsg = `The minimum number of characters is  ${length}`;

    return errorMsg;
}

export { MinLenght }