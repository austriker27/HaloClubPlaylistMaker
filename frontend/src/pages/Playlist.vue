<template>
  <Layout>
    <div class="container">
        <h1>Crowdsourced Playlist Generator</h1>
        <p>Use this form to submit options (games + map + gametype) so we can create a Playlist of games that everyone wants to play!</p>
        <form 
            class="w-full max-w-lg my-10" 
            action="/api/submit"
            name="submitGame"
            method="post"
            v-on:submit.prevent="handleSubmit"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-map"  v-model="selectedGame">
                            <option disabled value="">Please select a Halo game</option>
                            <option @click="selectedGameType = {}" class="text-copy-secondary" v-for="(game, index) in dropdowns" :key="index" :value="game">{{ game.name }}</option>
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
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-map" v-model="selectedGameType">
                            <option class="text-copy-secondary" v-for="(type, index) in selectedGame.gameTypes" :key="index" :value="type">{{ type.name }}</option>
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
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-map" v-model="selectedGameTypeMap">
                            <option class="text-copy-secondary" v-for="(map, index) in selectedGameType.maps" :key="index" :value="map">{{ map }}</option>
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

            <div class="flex items-center justify-between mt-4" v-if="selectedGameType && selectedGameTypeMap">
                <p>
                    Selected: {{ selectedGameType.name }} in {{ selectedGame.name }} on {{ selectedGameTypeMap }} 
                </p>
                <button class="bg-background-ternary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                </button>
            </div>
        </form>

      </div>
  </Layout>
</template>

<script>
import { dropdowns } from '@/data/games.json'

export default {
    metaInfo: {
        title: 'Playlist Generator',
    },
    data () {
        return { 
            dropdowns,
            selectedGame: {},
            selectedGameType: {},
            selectedGameTypeMap: "",
            formData: {}
        }
    },
    computed: {
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...this.formData,
                }),
            })
            .then(() => this.$router.push('/success'))
            .catch(error => alert(error))
        }
    }
}

</script>
