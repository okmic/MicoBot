import dotenv from 'dotenv'
import initClientsBots from './telegram/clients'

dotenv.config()

const start = async (): Promise<void> => {
    try {
        
        initClientsBots()
        console.log("Mico bots inits at: " + new Date())
    } catch (e) {
        console.error(e)
    }
}

start()
