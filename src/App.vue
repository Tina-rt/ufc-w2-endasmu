<script>
import Navbar from './components/Navbar.vue';
import Landing from './components/Landing.vue';
import Collection from './components/Collection.vue';
import ArtistSection from './components/ArtistSection.vue';
import Sponsor from './components/Sponsor.vue';
import Subscription from './components/Subscription.vue';
import Footer from './components/Footer.vue';



export default {
  components: {
    Navbar,
    Landing,
    Collection,
    ArtistSection,
    Sponsor,
    Subscription,
    Footer
  },
  data() {
    return {
      list_bg: ['./images/circle 1.png', './images/circle 2.png'],
      cursorX: 0,
      cursorY: 0
    }
  },
  computed: {
    circleStyle() {
      return {
        position: 'fixed',
        top: `${this.cursorY -70/2}px`,
        left: `${this.cursorX -70/2}px`
      }
    }
  },
  methods: {
    initialize_bg_animation() {
      let img_section = document.getElementById('img-section')

      let body = document.body,
        html = document.documentElement;

      let height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
      console.log(height)

      let swi = true
      let y = 0


      let list_img = []
      for (let index = 0; index < parseInt(height / 400); index++) {

        let img = document.createElement('img')

        img.width = 600
        img.style.position = 'absolute'
        img.style.transition = 'all 2s'

        if (swi) {
          img.src = this.list_bg[0]
          img.style.left = 0
        } else {
          img.style.right = 0
          img.src = this.list_bg[1]

        }
        img.style.top = y + 'px'
        img_section.appendChild(img)

        swi = !swi
        y += 400

        list_img.push(img)

      }

      document.addEventListener('scroll', () => {
        for (let i = 0; i < list_img.length; i++) {
          const element = list_img[i];

          let x = parseInt(Math.floor(Math.random() * (window.innerWidth - 900)))
          let y = parseInt(Math.floor(Math.random() * (height - 600)))
          element.style.top = y + 'px';
          element.style.left = x + 'px';


        }
      })
    },
    move_cursor(event) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;

    },

    init_cursor() {

    }
  },
  mounted() {
    this.initialize_bg_animation()
    window.addEventListener('mousemove', this.move_cursor)
  }

}
</script>

<template>
  <div id="cursor" class="cursor-follower" :style="circleStyle"></div>
  <main>
    <div id="img-section">
    </div>
    <div class="p-70 main">
      <Navbar />
      <div class="screen">
        <Landing />
      </div>
      <div class="screen">
        <Collection />
      </div>
      <div class="screen-artist">
        <ArtistSection />
      </div>
      <div class="sponsor-section">
        <Sponsor />
      </div>
      <div class="screen-footer">
        <div class="screen-subscription">
          <Subscription />
        </div>
        <div class="footer-section">
          <Footer />
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
main {
  position: relative;
}

.main {
  z-index: 8;
  position: absolute;
}

#img-section {
  position: absolute;
  top: 0;
  z-index: 0;
  backdrop-filter: blur(25px);
  overflow-x: unset;
  /* overflow-y: hidden; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}



.img-bg-section {
  z-index: 0;
  position: absolute;
  backdrop-filter: blur(50px);

}

.cursor-follower {
  position: fixed;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  z-index: 99;
  transition: left 0.2s, top 0.2s, opacity 0.4s ease-in ;
  /* transition: left 0.2s ; */
  /* border: 1px solid var(--color-secondary); */
  

}
.cursor-follower::before{
  content: "";
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.219); */
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  backdrop-filter: invert(70%);
}


.screen {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 12;
}

.screen-artist {
  z-index: 12;
  /* margin-bottom: 50px; */
}

.sponsor-section {
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.screen-footer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 500px) {
  .screen{
    height: 100vh;

  }
}
</style>
