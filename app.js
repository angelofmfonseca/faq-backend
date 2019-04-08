const app = require('express')();
const bodyParser = require('body-parser');

// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const router = require('express').Router();

var controller = require('controllers/faq_controller.js');

/**
 * Classe da aplicação Backend
 */
class BackendHub {
  /**
   * Constructor da classe BackendHub
   */
  constructor() {
    app.use('/', router);

    controller = new Controller();
    controller.enableRoutes(router);

    /**
     * Importa os adapters
     */
    this.startServer()
  } 

  /**
   * Inicializa o Servidor Node
   */
  startServer(){
    app.listen(3000, () => {
      console.log('App listening on port 3000');
    });
  }
}

var backend = new BackendHub()