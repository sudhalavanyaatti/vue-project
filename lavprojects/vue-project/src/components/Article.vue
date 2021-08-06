<template>
  <div class="handler">
    <Menubar />
    <div class="bar"><input type="text" v-model="search" name="skill" /></div>
    <ul>
      <li v-for="(data, index) in filteredArticles" :key="index">
        <tr>
          <td>
            <img v-bind:src="data.image" v-bind:style="styleObject" />
          </td>
          <td>
            <a v-bind:style="{ color: color }">{{ data.title }} </a>
          </td>
        </tr>
      </li>
    </ul>
    {{ info }}
  </div>
</template>
<script>
import Menubar from "../components/Menubar";
import axios from "axios";
export default {
  name: "Article",
  data() {
    return {
      search: " ",
      color: "grey",
      info: null,

      articles: [
        {
          title: "What You Need To Know About CSS Variables",
          url:
            "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
          image: "https://tutorialzine.com/media/2016/03/css-variables.jpg"
        },
        {
          title: "Freebie: 4 Great Looking Pricing Tables",
          url:
            "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
          image:
            "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
        },
        {
          title:
            "20 Interesting JavaScript and CSS Libraries for February 2016",
          url:
            "https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
          image:
            "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg"
        },
        {
          title: "Quick Tip: The Easiest Way To Make Responsive Headers",
          url:
            "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
          image:
            "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png"
        },
        {
          title: "Learn SQL In 20 Minutes",
          url: "https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
          image:
            "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png"
        },
        {
          title: "Creating Your First Desktop App With HTML, JS and Electron",
          url:
            "https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
          image:
            "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png"
        }
      ],
      styleObject: {
        height: "50px",
        width: "50px"
      }
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response))
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    console.log(info, "uuuuuuuuuuuuuuuuuu");
  },

  components: {
    Menubar
  },

  methods: {
    selected(e) {
      console.log("selected");
      this.value = e;
    }
  },

  computed: {
    // A computed property that holds only those articles that match the searchString.
    filteredArticles: function() {
      var articles_array = this.articles,
        search = this.search;

      if (!search) {
        return articles_array;
      }

      search = search.trim().toLowerCase();
      console.log("search", search);
      articles_array = articles_array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });

      // Return an array with the filtered data.
      return articles_array;
    }
  }
};
</script>
<style scoped>
.handler {
  /* box-shadow: 0px 0px 40px lightgray;*/
  padding: 5px;
}

.bar {
  background-color: #5c9bb7;

  width: 450px;
  padding: 14px;
  margin: 45px auto 20px;
  position: relative;
}

.bar input {
  background: #fff no-repeat 13px 13px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);
  width: 100%;
  padding: 11px 0;
  text-indent: 40px;
}
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

ul li {
  padding: 10px 20px;

  margin-bottom: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

ul {
  list-style: none;
  color: black;
  font-size: 20px;
  padding: 4px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 15px;
  border-bottom: 2px solid black;
}
</style>
