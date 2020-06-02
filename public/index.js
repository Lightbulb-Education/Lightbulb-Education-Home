Vue.component('ko-fi-button', {
    template: `<div class=btn-container><a title="Support me on ko-fi.com" class="kofi-button" style="background-color:#29abe0;" href="https://ko-fi.com/I3I51PZ3B" target="_blank"> <span class="kofitext"><img src="https://storage.ko-fi.com/cdn/cup-border.png" class="kofiimg"/>Support us on Ko-fi</span></a></div>`
})

const homeContent = Vue.component('home-hero-content', {
    template: `<section class="hero is-link is-fullheight-with-navbar">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered page-content">
          <h1 class="title is-size-3-mobile is-2">
            Lightbulb Education is an educational services company, creating a variety of solutions for implementing technology within the classroom.

          </h1>
          <div class="buttons is-centered">
            <a class="button is-light is-success is-rounded" href="https://code.lightbulb.education" target="_blank">Lightbulb Edu Code</a>
            <router-link class="button is-light is-primary is-rounded" to="/formsplus">Forms+</router-link>
            <router-link class="button is-light is-link is-rounded" to="/pd">Past PD Sessions</router-link>
          </div>
        </div>
      </div>
    </section>`
})

const formsPlusContent = Vue.component('forms-plus-content', {
    template: `<section class="hero is-success is-fullheight-with-navbar">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered page-content">
          <h1 class="title is-size-3-mobile is-2">
            Forms+ is a Chrome extension that provides quality of life improvements for Google Forms.
          </h1>

          <h3 class="title is-size-5-mobile is-4">
            This includes the ability to eliminate answers for test/quiz scenarios, unselecting radio buttons by clicking on them again, and see a character count for text input questions.
          </h3>

          <div class="buttons is-centered">
            <a class="button is-link is-rounded" href="https://chrome.google.com/webstore/detail/abegkmpbggcbnljjnklblgmiiacopkng" target="_blank">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Install</span>
            </a>
            <a class="button is-rounded" href="https://github.com/jchacko11/eliminate-answers" target="_blank">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>See on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>`
})

const aboutContent = Vue.component('about-content', {
    template: `
<!-- Hero content: will be in the middle -->
    <section class="section">
        <div class="container">
            <div class="content is-large">
                <h1 class="has-text-grey-darker">About</h1>
                <p class="subtitle is-3">
                    Founded by two high school students, Lightbulb Education creates technology based solutions for
                    schools, specializing in <b>helping students learn to code</b> and <b>helping teachers use technology more
                    effectively</b>.
                </p>
                <p>
                    If you're a student interested in learning how to code, check out
                    <a class="" href="https://code.lightbulb.education/" target="_blank">Lightbulb
                    Edu Code</a>! It's an online learning platform centered around learning by creating projects.
                </p>

                <p>
                    If you're a technology education specialist and you want to see how teachers can better use
                    technology in the classroom, <a class="" href="mailto:contact@lightbulb.education">feel
                    free to reach out to us at contact@lightbulb.education</a>! We do consulting as well as
                    professional development training sessions.
                </p>

                <p>
                    And if you're a human and you use Google Forms,
                    <a class="" href="https://chrome.google.com/webstore/category/extensions" target="_blank">check out
                    our Google Chrome extension Forms+</a>. This extension adds several quality of life improvements to
                    Google Forms that you're sure to enjoy.
                </p>
            </div>
        </div>
    </section>`
})

const underConstructionContent = Vue.component('404-content', {
  template: `<section class="hero is-success is-fullheight-with-navbar">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered content">
        <h1 class="title is-1">
          This page is under construction. Please check back later.
        </h1>
        <router-link class="button is-link is-rounded" to="/">
          <span>Back to home</span>
        </router-link>

      </div>
    </div>
  </section>
`
})

Vue.component('nav-bar', {
    template: `<nav class="navbar is-dark">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <h1 class="title is-4 has-text-light">Lightbulb Education</h1>
          </router-link>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" to="/about">
              About
            </router-link>
            <a href="mailto:contact@lightbulb.education" class="navbar-item">Contact us</a>
            <ko-fi-button id="ko-fi-button" class="navbar-item"></ko-fi-button>
          </div>
        </div>
      </div>
    </nav>`
})

Vue.component('bottom-footer', {
    template: `<footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Lightbulb Education</strong> by <a href="https://jchacko.dev" target="_blank">Jonathan Chacko</a> and
          <a href="https://adamn.dev/" target="_blank">Adam Nguyen</a>.
        </p>
        <p>Copyright 2020</p>
      </div>
    </footer>`
})

const learningReimagined = Vue.component('lr-pd', {
    template: `
        <section class="hero is-info is-fullheight-with-navbar">
            <div class="hero-body">
                <div class="container has-text-centered">
        
                    <h1 class="title is-size-3-mobile is-2">
                        Don't Use Technology In the Classroom
                    </h1>
        
                    <h3 class="title is-size-5-mobile is-4">
                        Presented at Humble ISD Learning Reimagined PD (Summer 2020) and TCCA (Fall 2019)
                    </h3>
        
                    <div class="buttons is-centered">
                        <a class="button is-link is-rounded"
                           href="https://docs.google.com/presentation/d/1n5ChhcyR6ZPLWzjGWr_Gs3Yf7iysxNVS5gLS_RpWOvU/edit?usp=sharing"
                           target="_blank">
                          <span class="icon">
                            <i class="fab fa-slideshare"></i>
                          </span>
                            <span>Learning Reimagined Presentation</span>
                        </a>
        
                        <a class="button is-danger is-rounded" href="https://files.lightbulb.education/lrhandout"
                           target="_blank">
                          <span class="icon">
                            <i class="fa fa-download"></i>
                          </span>
                            <span>Cheat Sheet</span>
                        </a>
        
                        <a class="button is-rounded"
                           href="https://docs.google.com/presentation/d/1Ru9UebB4d0-AbLcQLWchhHuw4JPhS2Qyvfr_3wL2JDM/edit?usp=sharing"
                           target="_blank">
                          <span class="icon">
                            <i class="fa fa-file"></i>
                          </span>
                            <span>TCCA Presentation</span>
                        </a>
        
                    </div>
        
                </div>
            </div>
        </section>
    `
})


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: homeContent},
  { path: '/home', component: homeContent},
  { path: '/formsplus', component: formsPlusContent},
  { path: '/about', component: aboutContent},
  { path: '/pd', redirect: '/pd/lr'},
  { path: '/lr', redirect: '/pd/lr' },
  { path: '/pd/lr', component: learningReimagined }
  // { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router
}).$mount('#app')


// let  app = new Vue({
//   el: '#app',
//   data: {
//     myData: 'Super cool VueJS application 🖖'
//   },
// })
