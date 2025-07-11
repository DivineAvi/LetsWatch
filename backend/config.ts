import dotenv from 'dotenv';

dotenv.config();

class Config {
    port : number;
    constructor() {
        this.port = Number(process.env.PORT) || 3000;
    }
}

export default new Config();