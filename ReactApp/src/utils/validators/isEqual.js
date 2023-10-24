const IsEqual = (value, target) => {
    let errorMsg = '';
    if (value !== target) {
        errorMsg = 'Parolele nu corespund';
    }
    return errorMsg;
}

export { IsEqual }