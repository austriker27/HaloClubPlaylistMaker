<template>
    <Layout>
        <div class="container flex flex-col justify-between py-16">

            <div>
                <h1 class="mb-2 font-black">Woodinville Halofest</h1>
                <p>
                Welcome to the online home of the Woodinville Halofest. We regularly hold Halofests filled with lots of fun, frivolty, mountain dewski, and masterchief pwning newbs. All are welcome. 
                </p>
            </div>

            <!-- <div>
                <p class="home-links">
                    <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">Vote on Gametypes</a>
                    <a href="https://guestboard.co/join/GKGiYLtuzTXwFry8" target="_blank">RSVP</a>
                </p>
            </div> -->

            <div>
                <h3 class="my-5 font-bold">
                    Upcoming Events:
                </h3>

                <EventCard
                    v-for="(event, id) in events"
                    :key="id"
                    :date="event.date"
                    :title="event.name"
                    :url="event.url"
                    :description="event.description"
                    :photoUrl="event.photo"
                />
                
            </div>

        </div>

    </Layout>
</template>

<script>
import EventCard from '~/components/EventCard.vue'

export default {
  metaInfo: {
    title: 'Woodinville Halofest',
  },
    components: {
        EventCard
    },
  data() {
      return {
          events: [
                { 
                    date: '15 Feb 2020', 
                    name: 'Spring Halofest', 
                    url: 'https://guestboard.co/join/GKGiYLtuzTXwFry8',
                    description: 'Lets get together and play videogames',
                    photo: 'https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                }
        ]
     }
    },
}
</script>
