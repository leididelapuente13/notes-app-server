import express, { Router } from "express";
import cors from 'cors'

interface Options {
    port: number;
    routes: Router;
}

export class Server {

    private readonly app = express();
    private readonly port: number;
    private readonly routes: Router;


    constructor(options: Options) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    }

    async start() {

        // Middlewares
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Routes
        this.app.use(this.routes);

        // Start the server
        this.app.listen(this.port, () => {
            console.log(`App listening on ${this.port}: http://localhost:${this.port}`)
        })

    }
}