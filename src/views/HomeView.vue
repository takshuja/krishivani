<template>
  <div class="home m-0">

    <!-- Hero Image -->
    <div class="w-full relative">
      <span class="absolute text-2xl grid grid-cols-2 text-start right-0 mt-3 lg:mt-20 lg:mr-14">
        <span v-for="item in info" :key="item.articles" class="grid grid-rows-3 text-red-700 lg:mx-8">
          <span class="lg:text-4xl">{{ item[users ? 'users' : 'articles'] }}+</span>
          <span class=" text-base lg:text-lg">
            {{ item.users ? "Registered" : "Published" }} <br />
            {{ item.users ? "Users" : "Articles" }}
          </span>
        </span>
      </span>
      <img src="../assets/tractor.png" class="w-full md:aspect-[2/1] lg:aspect-[2/1]" />
    </div>

    <!-- Announcements Tab -->
    <div class="announcements m-10">
      <div class=" lg:w-4/5 bg-gray-300 mx-auto py-2 text-2xl font-bold text-amber-950 rounded-xl">
        ANNOUNCEMENTS
      </div>
      <!-- Announcements Marquee -->
      <div class="marquee-content my-8">
        <marquee>
          <span v-for="announcement in announcements" :key="announcements.title" class="pr-2 text-blue-800 font-medium">
            <span v-if="isNew(announcement.date)" class='new-announcement'>
              [NEW]
            </span>
            {{ announcement.text }}

          </span>
        </marquee>
      </div>
    </div>

    <!-- About Krishivani -->
    <div class="flex flex-wrap gap-8 items-center justify-center lg:m-10  ">
      <!-- Image -->
      <img src="../assets/blog post articles.png" alt="Failed to load image" class="lg:w-1/2 lg:mx-auto">
      <!-- Text -->
      <div class="h-fit text-base bg-[#f4fbff] text-start font-medium mx-2 lg:mx-8 p-4 lg:text-xl lg:w-2/5">
        <b>Krishivani</b> is an open-access e-magazine and newsletter launched online in 2025 with the aim of bringing
        together the agricultural community in a global exchange of knowledge. Designed for farmers, researchers,
        students, scholars, and industry professionals, Krishivani serves as a dynamic platform for sharing cutting-edge
        ideas, research, and innovations in the world of agriculture. From revolutionary farming practices to the latest
        developments in agri-tech, biotechnology, and sustainable food production, Krishivani is dedicated to publishing
        content that reflects the ever-evolving landscape of agriculture.
      </div>
    </div>



    <!-- About Us Container -->
    <div class="about-container w-full lg:mx-8 mt-14 relative">
      <div class="text absolute">
        <!-- Heading Text -->
        <div class="text-start text-3xl text-white lg:text-[5rem] bottom-0 pt-[7%] pl-[7%] md:text-4xl">
          About Us
        </div>

        <!-- Description Text -->
        <div
          class="mt-5 text-start  text-base lg:leading-9 lg:text-[1.8rem]  pl-[7%] w-11/12  lg:mt-[6%] md:w-[65%] lg:w-[65%]">
          At its core, Krishivani focuses on making vital agricultural knowledge accessible to everyone. The
          e-magazine
          offers a space for new information, breakthrough technologies, and original articles that are geared toward
          enhancing agricultural practices and fostering global collaboration. Articles are published
          quickly--typically
          within 1-7 business days--ensuring that the scientific community has access to the latest updates in a
          timely
          manner.
        </div>

        <!-- Button -->
        <div class="w-full text-start lg:text-left mt-8 pl-[7%] lg:pt-[4%] ">
          <button @click="$router.push({ name: 'submission' })"
            class="bg-white w-11/12 py-4  mx-auto text-xl rounded-lg hover:bg-gray-100 hover:cursor-pointer  lg:w-1/2 lg:py-6 lg:text-3xl md:w-1/2  md:text-2xl ">
            Start Uploading Now
          </button>
        </div>

      </div>

      <img src="../assets/dialog.png" class="lg:hidden md:hidden" />

      <img src="../assets/dialog-pc.png" alt="failed to load image" class="lg:block md:block hidden mx-auto w-4/5 ">
    </div>





  </div>
</template>


<style scope>
.new-announcement {
  color: red;
  font-weight: bold;
}



.about-container {
  position: relative;
  background: #cfdde2;
  ;
  background: transparent;
}

.background-img .overlay {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;

  opacity: 1;
  width: 80%;
  height: 80%;
  background-color: transparent;
}

.about-container img {
  width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      imgSrc: {
        pc: '../assets/dialog-pc.png',
        mb: '../assets/dialog-mb.png',
      },
      info: [
        {
          articles: 1450,
          users: false
        },
        {
          articles: 400,
          users: true
        }
      ],
      announcements: [
        {
          title: "Call for Papers",
          text: "Sustainable Farming Practices - We invite submissions for articles focusing on sustainable farming techniques and innovative agricultural solutions.",
          date: 1639298400000, // Example Firebase timestamp (milliseconds)
        },
        {
          title: "Upcoming Webinar",
          text: "Precision Agriculture - Join us for an insightful webinar on the role of technology in precision agriculture.",
          date: /* 1639880400000 */ Date.now() - (24 * 60 * 60 * 1000), // Example Firebase timestamp (milliseconds)
        },
        {
          title: "New Research Funding Opportunity",
          text: "Apply for funding for projects focused on innovative solutions to climate change in agriculture.",
          date: Date.now() - (24 * 60 * 60 * 1000), // Announcement from one day ago
        },
        {
          title: "Agricultural Tech Expo",
          text: "Join us for the largest Agricultural Tech Expo of the year, showcasing the latest innovations in farm technology.",
          date: Date.now() - (3 * 24 * 60 * 60 * 1000), // Announcement from three days ago
        },
        {
          title: "International Conference on Agriculture",
          text: "Register now for the International Conference on Agriculture to discuss the future of food production and sustainability.",
          date: Date.now() - (48 * 60 * 60 * 1000), // Announcement from two days ago
        },
        {
          title: "Soil Health Awareness Campaign",
          text: "We are launching a nationwide soil health awareness campaign. Participate and spread the word!",
          date: Date.now() - (12 * 60 * 60 * 1000), // Announcement from 12 hours ago
        },
        {
          title: "AgriTech Startup Incubator",
          text: "Applications are open for our AgriTech startup incubator program. Get mentorship and funding to bring your ideas to life.",
          date: Date.now() - (1 * 24 * 60 * 60 * 1000), // Announcement from 1 day ago
        },
      ],
    }
  },
  methods: {
    isNew(date) {
      return date > Date.now() - (2 * 24 * 60 * 60 * 1000);
    }
  }
}
</script>