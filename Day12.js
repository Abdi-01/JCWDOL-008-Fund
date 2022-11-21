// Windows : npm i -g jest
// MacOS : sudo npm i -g jest
// Check version : jest --version

let add = (numbA, numbB) => {
    return numbA + numbB;
}

let multiple = (numbA, numbB) => {
    return numbA * numbB;
}

module.exports = {
    add,
    multiple
};