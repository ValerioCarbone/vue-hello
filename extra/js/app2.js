const createApp = Vue.createApp

const vueParametries = {
    data: function () {
        return {
            message: 'Ciao Vue',
            numeri: [1, 2, 3, 4, 5, 8, 9, 12, 23],
            nomi: ['Valerio', 'Pippo', 'Pluto', 'Gianni', 'Caio'],
            conteggio: 0
        }
    },
    methods: {

        onClick: function () {
            console.log(this.conteggio)

            console.log(this.nomi[this.conteggio])

            this.conteggio++
            
            if (this.conteggio > this.nomi.length - 1) {
                this.conteggio = 0
            }
        },

        getEven: function () {
            let evenNum = this.numeri.filter((num) => num % 2 === 0)
            return console.log(evenNum)
        }

    }

}


const appVue = createApp(vueParametries)

appVue.mount('#app')