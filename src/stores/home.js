import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", () => {
  const textContent = ref(
    "你好!我是蕭煜宸<br/>這是我的學習歷程記錄網站<br/>網站內有Vue框架的學習筆記<br/>以及網頁前端練習的作品集<br/>如果有網頁相關的問題可訊息後會盡快回覆您!<br/>請多多指教!"
  );

  return { textContent };
});
