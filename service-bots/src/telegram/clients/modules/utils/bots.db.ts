import dotenv from "dotenv"
import axios from 'axios'
import {GlobalAxiosRepsonseType,GlobalAxiosResponeBotsInfoByIdType,GlobalAxiosResponeBotsInfoType} from "../../../../../../global/types/axios.bots"
dotenv.config()

const axiosInstance = axios.create({
    baseURL: process.env.URL_MAIN_SERVICE, 
})

export const getBotInfoById = async (id: number) => {
     return await axiosInstance.get<GlobalAxiosRepsonseType<GlobalAxiosResponeBotsInfoByIdType>>(`/api/app/bots/${id}`)
     .then(r => r.data.values.botInfo)
     .catch(e => {
        console.error(e)
        throw new Error()
     })
}

export const getManyBotsInfo = async () => {
    return await axiosInstance.get<GlobalAxiosRepsonseType<GlobalAxiosResponeBotsInfoType>>(`/api/app/bots`)
    .then(r => r.data.values.botInfo)
    .catch(e => {
        console.error(e)
        throw new Error()
    })
}