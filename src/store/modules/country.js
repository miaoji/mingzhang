import { query } from '@/services/country'

export const state = {
    cnData:[],
    EnData:[]
}

export const mutations = {

}

export const actions = {
    async getCountryCnInfo (state) {
        let data = await query()
        if (data.code === 200 && data.obj) {
            for (let i = 0; i<data.obj.length; i++){
                let item = data.obj[i]
                state.cnData.push({value: JSON.stringify(item),label:item.country_cn})
            }
        }else{
            this.$message({
                message: '国家列表获取失败',
                type: 'warning'
            })
        }
    },
    async getCountryEnInfo (state) {
        let data = await query()
        if (data.code === 200 && data.obj) {
            for (let i = 1; i<data.obj.length; i++){
                let item = data.obj[i]
                state.EnData.push({value: JSON.stringify(item),label:item.country_cn})
            }
        }else{
            this.$message({
                message: '国家列表获取失败',
                type: 'warning'
            })
        }
    }
}

export const getters = {
}