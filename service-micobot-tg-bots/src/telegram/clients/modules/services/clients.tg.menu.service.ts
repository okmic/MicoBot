import { Keyboard } from "grammy"
import { FullBotsType } from "../../types"

export function clientsTgMenu(clientInfoBot: FullBotsType) {
    try {
        const keyboard = new Keyboard()

        // Добавляем элементы в клавиатуру
        for (let i = 0; i < clientInfoBot.menu.length; i++) {
            keyboard.text(clientInfoBot.menu[i].menuKey);

            // Если текущий индекс - не последний, и следующий элемент существует, добавляем строку
            if ((i + 1) % 2 === 0 && (i + 1) < clientInfoBot.menu[i].menuKey.length) {
                keyboard.row()
            }
        }

        return keyboard.resized()
    } catch (e) {
        throw e
    }
}