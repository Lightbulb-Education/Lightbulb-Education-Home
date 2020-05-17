Vue.component('ko-fi-button', {
  template: `<div class=btn-container><a title="Support me on ko-fi.com" class="kofi-button" style="background-color:#29abe0;" href="https://ko-fi.com/I3I51PZ3B" target="_blank"> <span class="kofitext"><img src="https://storage.ko-fi.com/cdn/cup-border.png" class="kofiimg"/>Support us on Ko-fi</span></a></div>`
})

const homeContent = Vue.component('home-hero-content', {
  template: `<section class="hero is-link is-fullheight-with-navbar">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered content">
          <h1 class="title is-2">
            Lightbulb Education is an educational services company, creating a variety of solutions for implementing technology within the classroom.

          </h1>
          <div class="buttons is-centered">
            <a class="button is-light is-success is-rounded" href="https://code.lightbulb.education" target="_top">Lightbulb Edu Code</a>
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
        <div class="container has-text-centered content">
          <h1 class="title is-2">
            Forms+ is a Chrome extension that provides quality of life improvements for Google Forms.
          </h1>

          <h3 class="title is-4">
            This includes the ability to eliminate answers for test/quiz scenarios, unselecting radio buttons by clicking on them again, and see a character count for text input questions.
          </h3>

          <div class="buttons is-centered">
            <a class="button is-link is-rounded">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Install</span>
            </a>
            <a class="button is-rounded" href="" target="_top">Chrome Web Store</a>
            <a class="button is-rounded">
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
  template: `<section class="hero is-success is-fullheight-with-navbar">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered content">
        <h1 class="title is-2">
          Lightbulb Education is an educational services company focused on bringing effective technology use to school classrooms.
        </h1>

        <h3 class="title is-4">
          Founded by two high school students, we create technology based solutions for schools, especially in regards to helping students learn to code and helping teachers use technology to better impact their students.
        </h3>

        <div>
          <h3 class="title is-4">
            If you're a student interested in learning how to code, check out Lightbulb Edu Code! It's an online learning platform centered around learning by creating projects.
          </h3>
          <a class="button is-rounded" href="https://code.lightbulb.education/">
            <span>Learn to code!</span>
          </a>
        </div>

        <div>
          <h3 class="title is-4">
            If you're a technology education specialist and you want to see how teachers can better use technology in the classroom, feel free to reach out to us! We do consulting as well as professional development training sessions.
          </h3>
          <a class="button is-rounded" href="mailto:contact@lightbulb.education">
            <span>Contact us</span>
          </a>
        </div>

        <div>
          <h3 class="title is-4">
            And if you're a human and you use Google Forms, check out our Google Chrome extension Forms+. This extension adds several quality of life improvements to Google Forms that you're sure to enjoy.
          </h3>
          <a class="button is-rounded" href="https://chrome.google.com/webstore/category/extensions">
            <span>Get Forms+</span>
          </a>
        </div>

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



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: homeContent },
  { path: '/home', component: homeContent },
  { path: '/formsplus', component: formsPlusContent },
  { path: '/about', component: aboutContent}
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



// let app = new Vue({
//   el: '#app',
//   data: {
//     myData: 'Super cool VueJS application 🖖'
//   },
// })
