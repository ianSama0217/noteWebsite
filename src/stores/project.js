import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", () => {
  const projectArray = ref([
    {
      title: "記帳網站",
      img: "../../../public/projectImg/expense-tracker.png",
      link: "/project/expenseTracker",
    },
    {
      title: "氣象查詢網站",
      img: "../../../public/projectImg/weatherAPI.png",
      link: "/project/weatherAPI",
    },
    {
      title: "房地產交易網站",
      img: "../../../public/projectImg/saleHouse.png",
      link: "/project/saleHouse",
    },
    {
      title: "拉麵網站",
      img: "../../../public/projectImg/ramen.jpg",
      link: "/project/ramenya",
    },
    {
      title: "甜點網站",
      img: "../../../public/projectImg/Dessert.png",
      link: "/project/dessert",
    },
    {
      title: "成績計算網站",
      img: "../../../public/projectImg/GPA-colculation.jpg",
      link: "/project/GPAcolculation",
    },
    {
      title: "日本旅遊網站",
      img: "../../../public/projectImg/japanFujiYama.jpg",
      link: "/project/japanTravel",
    },
  ]);

  const sideBar = ref([
    {
      title: "記帳網站",
      lang: "前端:HTML、CSS、JS <br> 框架:無 <br> 套件:無",
      content:
        "製作記帳網站，可以儲存收入與支出，並計算出總收入、總支出及結餘，關閉網頁後，資料也會儲存在localStorage之中不會消失。",
    },
    {
      title: "氣象查詢網站",
      lang: "前端:HTML、CSS、JS <br> 框架:無 <br> 套件:無",
      content:
        "製作氣象查詢網站，使用中央氣象局API抓取當日18點至隔日清晨6點的天氣預報，可選擇台灣各縣市的天氣預報。",
    },
    {
      title: "房地產交易網站",
      lang: "前端:HTML、CSS、JS <br> 框架:無 <br> 套件:Bootstrap",
      content:
        "製作房屋網站，可以瀏覽房屋資訊，點進不同分頁，觀看各種相關資訊，首頁的輪播功能使用bootstrap元件製作。",
    },
    {
      title: "拉麵網站",
      lang: "前端:HTML、CSS <br> 框架:無 <br> 套件:無",
      content:
        "製作ラーメン屋網站，製作商品卡片，店家資訊元件，練習排版、修改HTML文字、圖片...標籤樣式。。",
    },
    {
      title: "甜點網站",
      lang: "前端:HTML、CSS <br> 框架:無 <br> 套件:無",
      content:
        "製作甜點網站，，製作卡片組件，文章頁面，練習排版、修改HTML文字、圖片...標籤樣式。",
    },
    {
      title: "成績計算網站",
      lang: "前端:HTML、CSS、JS <br> 框架:無 <br> 套件:無",
      content:
        "製作成績計算網站，可以輸入學分數和成績，並計算出GPA。可以使用新增和刪除按鈕編輯輸入框，還有升序和降序按鈕將成績做排列。",
    },
    {
      title: "日本旅遊網站",
      lang: "前端:HTML、CSS <br> 框架:無 <br> 套件:無",
      content:
        "製作日本旅遊網站，練習排版、修改HTML文字、圖片...標籤樣式，嵌入Google地圖。",
    },
  ]);

  const iframeArr = ref([
    "https://expensetracker1006.netlify.app/",
    "https://taiwanweathersearch36hr.netlify.app/",
    "https://housesalewebsite.netlify.app/",
    "https://ramenyanoweb.netlify.app/",
    "https://dessertwebsite.netlify.app/",
    "https://gpacalculategpa.netlify.app/",
    "https://2023japantraveljp.netlify.app/",
  ]);

  const webALink = ref([
    "https://expensetracker1006.netlify.app/",
    "https://taiwanweathersearch36hr.netlify.app/",
    "https://housesalewebsite.netlify.app/",
    "https://ramenyanoweb.netlify.app/",
    "https://dessertwebsite.netlify.app/",
    "https://gpacalculategpa.netlify.app/",
    "https://2023japantraveljp.netlify.app/",
  ]);
  const githubALink = ref([
    "https://github.com/ianSama0217/expenseTrackerWeb",
    "https://github.com/ianSama0217/getWeatherAPI",
    "https://github.com/ianSama0217/houseSaleWebsite",
    "https://github.com/ianSama0217/ramen-shop-website",
    "https://github.com/ianSama0217/DessertWebsite/tree/master/Homework/frame1",
    "https://github.com/ianSama0217/GPACalculation",
    "https://github.com/ianSama0217/Japan_Travel_website",
  ]);

  //決定陣列index value(用來切換網頁資料)
  const page = ref(0);

  const changePerviousPage = () => {
    page.value--;
  };

  const changeNextPage = () => {
    page.value++;
  };
  return {
    projectArray,
    sideBar,
    iframeArr,
    webALink,
    githubALink,
    page,
    changePerviousPage,
    changeNextPage,
  };
});
