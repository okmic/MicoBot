import { Keyboard } from "grammy";


export function clientsTgMenu() {
    try {

        return new Keyboard()
        .text('👋 Привет')
        .text('❓ Помощь')
        .row()
        .text('⚙️ Настройки')
        .text('⚙️ Настройки')
        .text('⚙️ Настройки')
        .resized()

    } catch (e) {
        throw e
    }
} 