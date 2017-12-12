import { query } from '@/services/country'

export const state = {
    cnData:[],
    enData:[]
}

export const mutations = {

}

export const actions = {
    async getCountryCnInfo ({state}) {
        if (state.cnData.length>0) {
            return
        }
        console.log('sdfsdf', state)
        let data = await query()
        console.log('data1111', data)
        if (data.code === 200 && data.obj) {
            state.cnData = []
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
    async getCountryEnInfo ({state}) {
        if (state.enData.length>0) {
            return
        }
        let data = await query()
        if (data.code === 200 && data.obj) {
            state.enData = []
            for (let i = 1; i<data.obj.length; i++){
                let item = data.obj[i]
                state.enData.push({value: JSON.stringify(item),label:item.country_cn})
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