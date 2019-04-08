var configjson = require('../config.json')
/**
 * Classe responsável por carregar as configurações setadas no arquivo config.json
 */
module.exports = class Config {
    /**
     * Constructor da classe Config
     */
    constructor() {
        this.config = configjson.config
    }

    /**
     * Obtem a string de configuração
     * @returns {string} - Retorna a configuração
     */
    getConfig(){
        return this.config
    }
}