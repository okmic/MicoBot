import tgMainController from "./main.tg.controller"

export default async function initMainBot(): Promise<void> {
    try {
        
        await tgMainController()
        return

    } catch(e) {
        throw e
    }
}