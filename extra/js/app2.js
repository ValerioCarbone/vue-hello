const createApp = Vue.createApp

const vueParametries = {
    data: function(){
        return {
            message: 'Ciao Vue',
            numeri: [1, 2, 3, 4, 5, 8, 9, 12, 23],
            nomi: ['Valerio', 'Pippo', 'Pluto', 'Gianni', 'Caio']        
        }
    }
}



const appVue = createApp(vueParametries)

appVue.mount('#app')