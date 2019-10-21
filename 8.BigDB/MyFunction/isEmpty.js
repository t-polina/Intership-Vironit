module.exports = function (par) {
    if (par === null || par === undefined || par.length === 0 || par === false) {
        return true;
    }
    else return false;
}