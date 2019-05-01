
class Variables {
    constructor() {

        this.veribles = process.env;

        console.log(this.veribles);
    }

    getPort() {
        return process.env || 3000;
    }
}

module.exports = new Variables;