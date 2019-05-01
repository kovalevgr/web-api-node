import {ContainerBuilder, JsFileLoader} from 'node-dependency-injection'

const config = require('config-dir/container.json');

class Container {

    #container : ContainerBuilder;

    constructor() {
        #container = new ContainerBuilder();

        const loader = new JsFileLoader(this.#container);
        loader.load(config);
    }

    get container() {
        return #container;
    }
}

module.exports = Container;