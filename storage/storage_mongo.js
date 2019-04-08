const MongoClient = require('mongodb').MongoClient;

let _db

/**
 * Classe responsável por ler, inserir, atualizar ou deletar documentos no Mongo.
 */
module.exports = class StorageMongo {
    /**
     * Constructor da classe StorageMongo
     * @param {object} config 
     */ 
    constructor(config) {
        this.config = []
        this.config.host = config.mongo.host
        this.config.db = config.mongo.db
        this.init()
    }

    /**
     * Método que conecta ao servidor do Mongo
     */
    init() {
        MongoClient.connect(this.config.host, {
            useNewUrlParser: true
        }, (err, database) => {
            if (err) return console.log(err);
            _db = database.db(this.config.db);
        });
    }

    /**
     * Retorna a instancia de conexão do banco
     */
    getDB(){
        return _db
    }

    /**
     * Método de Inserir no Mongo
     * @param {string} collection //nome da coleção no banco de dados
     * @param {json Object} dadosJson //valores para inserir no banco em formato JSON
     */
    inserirDados(collection, dadosJson) {
        return new Promise((resolve, reject) => {
            this.getDB().collection(collection).insertOne(dadosJson, function (err, result) {               
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })

    }

    /**
     * Método para retornar dados do Mongo
     * @param {string} collection //nome da coleção no banco de dados
     * @param {json Object} fin //Json a ser encontrado, se vazio retorna todos os valores do banco de dados 
     */
    lerDados(collection, fin) {
        return new Promise((resolve, reject) => {
            this.getDB().collection(collection).find(fin).toArray((err, result) => {
                resolve(result)
            })
        })
    }

    /**
     * Método para atualizar dados no mongo
     * @param {string} collection //nome da coleção no banco de dados
     * @param {json Object} upd //valor {key:value} para encontrar no banco da dados 
     * @param {json Object} newupd //valor {key:value} para atualizar no banco de dados
     */
    atualizarDados(collection, upd, newupd, res) {
        return new Promise((resolve, reject) => {
            //resolve(this.getDB().collection(collection).updateMany(upd, newupd, (err, result) => {
                this.getDB().collection(collection).updateMany(upd, newupd, (err, result) => {
                    resolve(result)
            })
        })
    }

    /**
     * Método que remove dados do mongo
     * @param {string} collection //nome da coleção no banco de dados
     * @param {json} del //valor {key:value} para deletar no banco de dados
     */
    deletarDados(collection, del, res) {
        return new Promise((resolve, reject) => {
            if (!(Object.keys(del).length === 0 && deletar.constructor === Object)) {
                resolve(this.getDB().collection(collection).deleteMany(del, (err, result) => {                   
                }))
            } 
        })
    }
}