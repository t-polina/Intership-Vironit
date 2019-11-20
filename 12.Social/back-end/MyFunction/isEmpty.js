module.exports = function (par) {
    if (par === null || par === undefined || par.length === 0 || par === false) {
        return true;
    }
    else return false;
}
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}