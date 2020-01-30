<template>

    <div class="max-w-sm rounded overflow-hidden font-haloSans m-5">
        <!-- bg is contain if map, cover if not -->
        <div 
        class="bg-no-repeat bg-center relative h-64 w-64 bg-background-secondary" 
        :class="[typeMap ? 'bg-cover' : 'bg-contain']"
        :style="{ backgroundImage: `url('${photoUrl}')` }" 
        >
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
      },
      typeMap: {
          type: Boolean,
          default: false,
      }
  },
  methods: {
  }
}
</script>
