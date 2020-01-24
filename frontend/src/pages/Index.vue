<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Woodinville Halofest</h1>

    <p>
      Welcome to the online home of the Woodinville Halofest. We regularly hold Halofests filled with lots of fun, frivolty, mountain dewski, and masterchief pwning newbs. All are welcome. 
    </p>

    <p class="home-links">
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">Vote on Gametypes</a>
        <a href="https://guestboard.co/join/GKGiYLtuzTXwFry8" target="_blank">RSVP</a>
    </p>

    <h3>
        Upcoming Events:
    </h3>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Woodinville Halofest'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
