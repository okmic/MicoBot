import { Keyboard } from "grammy";


export function tgMainMenu() {
    try {

        return new Keyboard()
        .text('👋 Привет')
        .text('❓ Помощь')
        .row()
        .text('⚙️ Настройки')
        .text('О боте')
        .resized()

    } catch (e) {
        throw e
    }
} 