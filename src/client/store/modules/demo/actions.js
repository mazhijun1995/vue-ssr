export default {
    setData({commit}){
        const payload = {
            name: "who",
            address: "beijing"
        }
        commit('setData',payload)
    }
}