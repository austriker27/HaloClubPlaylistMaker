<template>
    <!-- <a class=" hover:shadow-xl lift hover:lift-up" target="_blank" :href="url">
     
    </a> -->
    <div class="max-w-sm rounded overflow-hidden hover:shadow-xl lift hover:lift-up">
        <g-image class="w-full" :src="photoUrl" :alt="title" ></g-image>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">
                {{ subtitle }}
            </p>
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
}
</script>
