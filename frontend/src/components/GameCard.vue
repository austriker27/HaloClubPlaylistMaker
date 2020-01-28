<template>

    <div @click="clickedCard" class="max-w-sm rounded overflow-hidden hover:shadow-xl lift hover:lift-up font-halo cursor-pointer m-5">
        <div class="bg-cover bg-no-repeat bg-center relative h-64 w-64" :style="{ backgroundImage: `url('${photoUrl}')` }" >
            <div class="p-2 pl-4 absolute bottom-0 w-full bg-background-ternary text-copy-primary">
                <p class="text-base">
                    {{ title }}
                </p>
                <p v-if="subtitle" class="text-base">
                    {{ subtitle }}
                </p>

            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'GameCard',
  props: {
      title: {
          type: String,
      },
      subtitle: {
        type: String,
      },
      photoUrl: {
          type: String,
      }
  },
  methods: {
      clickedCard() {
          this.$emit('clicked-card', this.title)
      }
  }
}
</script>
