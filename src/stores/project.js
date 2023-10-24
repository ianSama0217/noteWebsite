import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", () => {
  const projectObject = reactive({
    expenseTracker: {
      title: "記帳網站",
      img: "../../../public/projectImg/expense-tracker.png",
      link: "/project/expenseTracker",
    },
    weatherAPI: {
      title: "氣象查詢網站",
      img: "../../../public/projectImg/weatherAPI.png",
      link: "/project/weatherAPI",
    },
    saleHouse: {
      title: "房地產交易網站",
      img: "../../../public/projectImg/saleHouse.png",
      link: "/project/saleHouse",
    },
    ramenya: {
      title: "拉麵網站",
      img: "../../../public/projectImg/ramen.jpg",
      link: "/project/ramenya",
    },
    dessert: {
      title: "甜點網站",
      img: "../../../public/projectImg/Dessert.png",
      link: "/project/dessert",
    },
    GPAcolculation: {
      title: "成績計算網站",
      img: "../../../public/projectImg/GPA-colculation.jpg",
      link: "/project/GPAcolculation",
    },
    japanTravel: {
      title: "日本旅遊網站",
      img: "../../../public/projectImg/japanFujiYama.jpg",
      link: "/project/japanTravel",
    },
  });
  return { projectObject };
});
