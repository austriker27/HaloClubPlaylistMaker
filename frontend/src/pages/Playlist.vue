<template>
  <Layout>
    <div class="container">
        <h1 class="text-2xl font-black mb-2 ">Crowdsourced Playlist Generator</h1>
        <p>Use this form to submit options (games + map + gametype) so we can create a Playlist of games that everyone wants to play!</p>
        <form 
            class="w-full max-w-lg my-10" 
            action="/api/submit"
            name="submit"
            method="post"
            v-on:submit.prevent="handleSubmit"
            >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                Don’t fill this out: <input name="bot-field" />
                </label>
            </p>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-gameversion">
                        Game Version
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-green-900"  v-model="selectedGame">
                            <option disabled value="">Choose a Halo game</option>
                            <option class="text-green-900" v-for="(game, index) in dropdowns" :key="index" :value="game">{{ game.name }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <!-- GAMETYPE OPTION -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" >
                    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-map">
                        Gametype
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-green-900" v-model="selectedGameType">
                            <option disabled value="">Choose a gametype</option>
                            <option class="text-green-900" v-for="(type, index) in selectedGame.gameTypes" :key="index" :value="type">{{ type.name }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <!-- MAP OPTION -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" >
                    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-map">
                        Map
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-green-900" v-model="selectedGameTypeMap">
                            <option disabled value="">Choose a map</option>
                            <option class="text-green-900" v-for="(map, index) in selectedGameType.maps" :key="index" :value="map">{{ map }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                        <!-- <select v-if="selectedGameType" v-model="selectedGameTypeMap">
                            <option v-for="(map, i) in selectedGameType.maps" :key="i" :value="map">{{ map }}</option>
                        </select> -->
                    </div>
                </div>

            </div>

            <div class="flex items-center justify-between mt-4" v-if="selectedGame && selectedGameType && selectedGameTypeMap">
                <div class="">
                    <p class="block uppercase tracking-wide  text-xs font-bold mb-1">
                        Selected:
                    </p>
                    <p>
                    {{ selectedGame.name }}: {{ selectedGameType.name }} on {{ selectedGameTypeMap }}.
                    </p>
                </div>
                <button 
                    class="font-regular bg-background-secondary rounded border-2 border-green-900 hover:border-green-900 hover:bg-green-900 hover:text-white text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="button"
                    @click="resetForm()"
                >
                    Reset
                </button>
                <button 
                    class="bg-background-ternary rounded border-b-2 border-green-900 hover:border-green-900 hover:bg-green-900 hover:text-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="button"
                >
                    Submit
                </button>
            </div>
        </form>

      </div>

    <!-- cards to select options -->
    <!-- GAME VER CARDS -->
    <div class="my-20 flex flex-wrap justify-around" v-if="!selectedGame">
        <GameCard 
            v-for="game in dropdowns"
            @clicked-card="handleCardGameClick(game.name)"
            :photoUrl="getImageUrl('HALO_GAMES', game.name)"
            v-model="selectedGame"
            :title="game.name"
            :key="game.name"
            
        />
    </div>
    <!-- GAMETYPE CARDS -->
    <div class="my-20 flex flex-wrap justify-around"  v-if="!selectedGameType">
        <GameCard 
            v-for="type in selectedGame.gameTypes"
            @clicked-card="handleCardGameTypeClick(type.name)"
            :photoUrl="getImageUrl('HALO_GAMETYPES', type.name)"
            v-model="selectedGameType"
            :title="type.name"
            :key="type.name" 
        />
    </div>
    <!-- MAP VERSION -->
    <div class="my-20 flex flex-wrap justify-around" v-if="!selectedGameTypeMap">
        <GameCard 
            v-for="map in selectedGameType.maps"
            @clicked-card="handleCardGameTypeMapClick(map)"
            :photoUrl="getImageUrl('HALO_MAPS', map)"
            v-model="selectedGameTypeMap"
            :title="map"
            :key="map" 
            typeMap="true"
        />
    </div>


  </Layout>
</template>

<script>
import { dropdowns } from '~/data/games.json'
import GameCard from '~/components/GameCard.vue'
import IMAGE_URLS from "~/data/imageUrls.js";


export default {
    metaInfo: {
        title: 'Playlist Generator',
    },
    components: {
        GameCard
    },
    data () {
        return { 
            dropdowns,
            selectedGame: "",
            selectedGameType: "",
            selectedGameTypeMap: "",
            formData: {},
            formStateEmpty: true,
        }
    },
    computed: {

    },
    methods: {
        getImageUrl(type, item) {
            return IMAGE_URLS[ type ][ item ].imageUrl || 'https://wallpaperaccess.com/full/173893.jpg';
		},
        encode(data) {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&')
        },
        handleSubmit(e) {
            console.log(formData);

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...this.formData,
                }),
            })

            this.resetForm()

            .then(() => console.log('success'))
            .catch(error => alert(error))
        },
        resetForm() {
            this.selectedGame = "",
            this.selectedGameType = "",
            this.selectedGameTypeMap = "",
            this.formStateEmpty = true
        },
        handleCardGameClick(clickedItem) {
            console.log(clickedItem)
            this.selectedGame = clickedItem;
        },
        handleCardGameTypeClick(clickedItem) {
            this.selectedGameType = clickedItem;
        },
        handleCardGameTypeMapClick(clickedItem) {
            this.selectedGameTypeMap = clickedItem;
        }
    }
}

</script>
