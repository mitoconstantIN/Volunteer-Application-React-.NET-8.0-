const MinLenght = (value, length) => {
    let errorMsg = '';
    if (value.length < length)
        errorMsg = `Numarul minim de caractere este ${length}`;

    return errorMsg;
}

export { MinLenght }