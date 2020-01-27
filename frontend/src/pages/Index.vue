<template>
    <Layout>
        <div class="container flex flex-col justify-between py-16">

            <div>
                <h1 class="mb-2 font-bold">Woodinville Halofest</h1>
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
                <h3 class="my-5">
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

                <!-- <div class="newsletter bg-background-ternary">
                    <div class="container py-16 pb-8 text-center textl-xl">
                        <h2 class="text-2xl font-bold mb-8">Join our Newsletter</h2>

                        <div class="w-4/5 mx-auto mb-8">
                            <p class="mb-8 text-lg sm:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum. Quam, deleniti nulla.</p>

                            <form action="#">
                                <div class="flex flex-col sm:flex-row">
                                    <input type="email" name="email" placeholder="Your email address" class="flex-1 bg-background-form rounded sm:rounded-r-none px-4 py-4 leading-normal border border-border-color-primary sm:border-r-0 shadow outline-none focus:border-green-700 z-10" required>
                                    <button data-element="submit" class="flex-2 w-40 uppercase bg-green-700 text-white rounded sm:rounded-l-none text-lg py-3 px-8 tracking-wide shadow focus:outline-none hover:bg-green-800 focus:bg-green-800 z-10 w-full sm:w-auto mt-4 sm:mt-0">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> -->
                
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
