<template>
    <Layout>
        <div class="container mx-auto flex flex-col sm:flex-row justify-between py-16">

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

            <div class="newsletter bg-background-ternary">
                <div class="container mx-auto py-16 pb-8 text-center textl-xl">
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
            </div>
        </div>
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
