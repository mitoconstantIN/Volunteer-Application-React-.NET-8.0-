const IsEqual = (value, target) => {
    let errorMsg = '';
    if (value !== target) {
        errorMsg = 'The passwords do not match.';
    }
    return errorMsg;
}

export { IsEqual }