import {FullBotsType} from "./bots"

export type GlobalAxiosRepsonseType<T> = {
    status: number
    values: T
} 

export type GlobalAxiosResponeBotsInfoType = {
    botInfo: FullBotsType[]
}

export type GlobalAxiosResponeBotsInfoByIdType = {
    botInfo: FullBotsType | null
}