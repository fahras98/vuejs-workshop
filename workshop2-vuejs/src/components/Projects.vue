<template>
  <section id="projects" class="text-grey  t-30px">
    <div id="projects__heading" class="container">
      <p class=" mt-4 "  style="color:white">MY PROJECTS</p>
      <span class="mt-3">This is my story</span>
      <hr  class="w-25 bg-white" />
    </div>
    <div class="container">
      <vue-timeline-update
        :date="new Date('2017-02-26')"
        title="v2.2.0 - Initial D"
        description="Python script for Instagram automation using Instaloader. Used for auto following and DM. Easily configurable through Yaml config files!"
        thumbnail="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        category="announcement"
        icon="code"
        color="red"
      />
      <vue-timeline-update
        :date="new Date('2017-02-26')"
        title="v2.2.0 - Initial D"
        description="Python script for Instagram automation using Instaloader. Used for auto following and DM. Easily configurable through Yaml config files!"
        thumbnail="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        category="announcement"
        icon="code"
        color="red"
      />
      <vue-timeline-update
        :date="new Date('2017-02-26')"
        title="v2.2.0 - Initial D"
        description="Python script for Instagram automation using Instaloader. Used for auto following and DM. Easily configurable through Yaml config files!"
        thumbnail="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        category="announcement"
        icon="code"
        color="green"
      />
    </div>

    <div id="project__card" v-for="project in projects" :key="project.name">
      <h4 data-aos="zoom-in-left">{{ project.name }}</h4>
      <img data-aos="zoom-in-right" :src="project.img" alt="" class="w-50" />
      <p data-aos="zoom-in-left">{{ project.desc }}</p>
      <span data-aos="zoom-in-right" class="text-white-50"
        >LINK :<a v-bind:href="project.link">{{ project.link }}</a></span
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "IG_Automation_Bot",
          desc:
            "Python script for Instagram automation using Instaloader. Used for auto following and DM. Easily configurable through Yaml config files!",
          img: require("../assets/assets/img/projects/ig.gif"),
          link: "https://github.com/hbollon/IG_Automation_Bot",
        },
        {
          name: "Go-edlib",
          desc:
            "Golang string comparison and edit distance algorithms library, featuring : Levenshtein, LCS, Hamming, Damerau levenshtein (OSA and Adjacent transpositions algorithms), Jaro-Winkler, Cosine, etc.",
          img: require("../assets/assets/img/projects/edlib.jpg"),
          link: "https://github.com/hbollon/go-edlib",
        },
        {
          name: "Gyro'Ball",
          desc:
            "3D labyrinth game project for Android using Unity. Use device gyroscope.",
          img: require("../assets/assets/img/projects/gyroball.jpg"),
          link: "Google Play",
        },
        {
          name: "Urbalog",
          desc:
            "Android adaptation of board game using Nearby Connections API and Java for the LAET",
          img: require("../assets/assets/img/projects/urba.jpg"),
          link: "https://github.com/hbollon/Urbalog",
        },
      ],
    };
  },
};
</script>

<style>
#projects{
    background: goldenrod;
    /* margin-top: 40px; */
}
p{
   color: black;
    font-size:20px;
}
</style>