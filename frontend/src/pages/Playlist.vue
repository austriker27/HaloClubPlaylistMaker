<template>
  <Layout>
    <div class="container  md:max-w-lg lg:max-w-2xl mx-auto ">
        <h1 class="text-2xl font-black mb-2 ">Crowdsourced Playlist Generator</h1>
        <p>Use this form to submit options (games + map + gametype) so we can create a Playlist of games that everyone wants to play!</p>
        <!-- action="/api/submit" -->
        <!-- onSubmit={this.handleSubmit.bind(this)} -->
            <!-- method="post" -->
        <form 
            name="submit"
            class="w-full max-w-lg my-10" 
            v-on:submit.prevent="handleSubmit"
            method="post"
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
                            <!-- <option disabled value="">Halo games...</option> -->
                            <option class="text-green-900" v-for="(game, index) in dropdowns" :key="index" :value="game">{{ game.name }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <!-- GAMETYPE OPTION -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" v-if="selectedGame" >
                    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-map">
                        Gametype
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-green-900" v-model="selectedGameType">
                            <!-- <option disabled value="">Choose a gametype</option> -->
                            <option class="text-green-900" v-for="(type, index) in selectedGame.gameTypes" :key="index" :value="type">{{ type.name }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <!-- MAP OPTION -->
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" v-if="selectedGame && selectedGameType"  >
                    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-map">
                        Map
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-green-900" v-model="selectedGameTypeMap">
                            <!-- <option disabled value="">Choose a map</option> -->
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

            <div class="flex items-center justify-between mt-4" v-if="!formSubmitSuccess">
                
                <button 
                    class="font-regular bg-background-secondary rounded border-2 border-green-900 hover:border-green-900 hover:bg-green-900 hover:text-white text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="button"
                    @click="clearSelection()"
                >
                    Reset
                </button>
                <button 
                    class="bg-background-ternary rounded border-b-2 border-green-900 hover:border-green-900 hover:bg-green-900 hover:text-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                     type="submit"
                >
                    Submit
                </button>
            </div>
            <div class="" v-if="selectedGame && selectedGameType && selectedGameTypeMap && !formSubmitSuccess">
                <p class="block uppercase tracking-wide text-xs font-bold my-1">
                    Selected:
                </p>
                <p>
                {{ selectedGame.name }}: {{ selectedGameType.name }} on {{ selectedGameTypeMap }}.
                </p>
            </div>
            <div v-if="formSubmitSuccess">
                <p class="text-xs">
                    You successfully submitted: 
                    <span class=" tracking-wide uppercase">
                        {{ selectedGame.name }}: {{ selectedGameType.name }} on {{ selectedGameTypeMap }}</span>. 🎉
                </p>
                <p class="text-xs">
                    You can reset and submit again.
                </p>
                <button 
                    class="font-regular bg-background-secondary rounded border-2 border-green-900 hover:border-green-900 hover:bg-green-900 hover:text-white text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="button"
                    @click="resetForm()"
                >
                    Reset
                </button>
                    <!-- <p class="block uppercase tracking-wide  text-xs font-bold mb-1">
                        Selected:
                    </p>
                    <p>
                    {{ selectedGame.name }}: {{ selectedGameType.name }} on {{ selectedGameTypeMap }}.
                    </p> -->
            </div>
        </form>

      </div>
      <div class="flex align-center justify-center container md:max-w-lg lg:max-w-2xl mx-auto ">
          <!-- <div class="bg-green-900 text-center rounded-full">
            <div class="p-2 bg-green-800 items-center text-green-100 leading-none rounded-full inline-flex" role="alert">
                <span class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">Note</span>
                <span class="font-semibold mr-2 text-left flex-auto   font-haloSans">In the not too distant future cards will be clickable and submit will work.</span> -->
                <!-- <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg> -->
            <!-- </div>
        </div> -->
        <!-- <div class="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1">
                    <svg class="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                </div>
                <div>
                    <p class="font-bold font-haloSans">Note from developer:</p>
                    <p class="text-sm ">In the not too distant future cards will be clickable and submit will work.</p>
                </div>
            </div>
        </div> -->
      </div>

    <!-- cards to select options -->
    <!-- GAME VER CARDS -->
    <div class="lg:my-20 flex flex-wrap justify-around container  md:max-w-2xl lg:max-w-3xl mx-auto " v-if="!selectedGame">
        <GameCard 
            v-for="game in dropdowns"
            :photoUrl="getImageUrl('HALO_GAMES', game.name)"
            v-model="selectedGame"
            :title="game.name"
            :key="game.name"
            
        />
    </div>
    <!-- GAMETYPE CARDS -->
    <div class="lg:my-20 flex flex-wrap justify-around"  v-if="selectedGame && !selectedGameType.maps">
        <GameCard 
            v-for="type in selectedGame.gameTypes"
            :photoUrl="getImageUrl('HALO_GAMETYPES', type.name)"
            v-model="selectedGameType"
            :title="type.name"
            :key="type.name" 
        />
    </div>
    <!-- MAP VERSION -->
    <div class="lg:my-20 flex flex-wrap justify-around" v-if="selectedGame && selectedGameType && !selectedGameTypeMap">
        <GameCard 
            v-for="map in selectedGameType.maps"
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
            formSubmitSuccess: false,
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
            let data = {
                "Game Version": this.selectedGame.name,
                "Game Map": this.selectedGameTypeMap,
                "Gametype": this.selectedGameType.name
            }

            console.log(data);

            fetch('/.netlify/functions/submit/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // headers: { 'Content-Type': 'application/json' },
                // body: data
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...data,
                }),
            })

            .then(() => this.formSubmitSuccess = true)
            .then(() => this.resetForm)
            .catch(error => alert(error))
        },
        resetForm() {
            this.formStateEmpty = true,
            this.formSubmitSuccess = false,
            this.clearSelection()
        },
        clearSelection() {
            this.selectedGame = "",
            this.selectedGameType = "",
            this.selectedGameTypeMap = ""
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
