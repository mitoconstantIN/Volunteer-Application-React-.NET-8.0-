const MultipleValidators = (value, validators) => {
    let errorMsg = '';
    for (let validator of validators) {
        errorMsg = validator(value);

        if (errorMsg.length > 0) {
            return errorMsg;
        }
    }
    return errorMsg;
}

export { MultipleValidators }