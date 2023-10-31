import { computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useNoteContentStore = defineStore("noteContent", () => {
  const directivesNote = reactive({
    vText: {
      title: "v-text",
      source: `<template>
    <!-- const str = ref("hello"); -->
    <p v-text="str"></p>
    <p>{{ str }}</p>
</template>`,
      content:
        "這指令功能是把v-text輸入的文字渲染在p標籤，平常很少用到，會直接在標籤輸入{{ }}放入變數",
      hint: "v-text優先級高於{{ }}，如果標籤同時有v-text，{{ }}，畫面只會顯示v-text的value",
    },
    vHTML: {
      title: "v-html",
      source: `<template>
    <!-- const str = ref("<a href="#">hello</a>"); -->
    <p v-html="str"></p>
    <p v-text="str"></p>
</template>`,
      content:
        "這指令功能是把v-html輸入的文字渲染在p標籤，需要用html標籤才會用到，平常會直接在標籤輸入{{ }}放入變數",
      hint: "v-text和v-html的差異就像innerText和innerHTML一樣",
    },
    vIf: {
      title: "v-if",
      source: `<template>
    <!-- const bool = ref(true); -->
    <!-- const isDisplay = () => (bool.value = !bool.value); -->
  
    <p v-if="bool">Hello World!</p>
    <button @click="isDisplay()">click</button>
</template>`,
      content:
        "這指令功能是決定標籤是否顯示，如果v-if==true會顯示標籤，反之則銷毀標籤",
      hint: "v-if和v-for不要放在同一個標籤，如果放在同一個標籤，會先執行v-if，導致v-for執行被影響，若想對v-for裡的標籤做v-if，可以將v-if另外放在v-for裡面的一個容器，如下圖。",
    },
    vIfReplenish: {
      source: `<ul>
    <li v-for="item in items">
      <div v-if="item.visible">
        {{ item.text }}
      </div>
    </li>
</ul>`,
      content:
        "v-if和v-for放在放在不同標籤使用，將v-if另外放在v-for裡面的一個容器",
    },
    vElseIf: {
      title: "v-else-if",
      source: `<template>
    <!-- const num = ref(2); -->
  
    <p v-if="num == 1">num is 1</p>
    <p v-else-if="num == 2">num is 2</p>
    <p v-else-if="num == 3">num is 3</p>
</template>`,
      content: "v-else-if要搭配v-if一起使用，效果就跟if-else判斷式一樣",
    },
    vElse: {
      title: "v-else",
      source: `<template>
    <!-- const num = ref(8); -->
  
    <p v-if="num == 1">num is 1</p>
    <p v-else-if="num == 2">num is 2</p>
    <p v-else-if="num == 3">num is 3</p>
    <p v-else>num is not 1,2,3</p>
</template>`,
      content: "v-else要搭配v-if一起使用，效果就跟if-else判斷式一樣",
      hint: "如果v-else上面有超過一個v-if，v-else會抓取離自己最近的v-if判斷",
    },
    vFor: {
      title: "v-for",
      source: `<template>
    <!-- const obj = reactive({
    a: 1,
    b: 2,
    c: 3,
  }); -->
  
    <p v-for="(value, key, index) in obj">
      第{{ index }}項的{{ key }}值是: {{ value }}
    </p>
</template>`,
      content:
        "v-for可以指定標籤要印出的次數，最常使用的是v-for=`item in array`，除了array也可以放number或object，用來印components還蠻好用的",
      hint: "v-for=`item in array`除了item之外，如果對象是Object的話，還可以輸入其他參數v-for=`(value, key, index) in object`，value代表物件的value，key代表物件的key，index代表物件在{}的順序",
    },
    vOn: {
      title: "v-on",
      source: `<template>
    <!-- const num = ref(8); -->
  
    <p>{{ num }}</p>
    <button v-on:click="num++">click</button>
    <button @click="num--">click</button>
</template>`,
      content:
        "v-on通常用在button、input、select上，效果就像JS的addEventListener",
      hint: "v-on:click可以用語法糖改寫成@click",
    },
    vModel: {
      title: "v-model",
      source: `<template>
    <!-- const str = ref("hello world"); -->
  
    <input type="text" v-model="str" />
    <p>{{ str }}</p>
</template>`,
      content:
        "放在input標籤，可以和文字標籤做雙向資料傳遞，達到input和文字標籤同時更新的效果",
      hint: "v-model有三個常用的修飾符，v-model.lazy，當input發生change事件才會改變value，v-model.number，讓input的輸出的資料型態轉為number，v-model.trim，取消input輸出前後的空格",
    },
    vBind: {
      title: "v-bind",
      source: `<template>
    <!-- const redFont = ref("red"); -->
  
    <p :class="redFont">Hello World!</p>
  </template>
  
  <style scoped>
  .red {
    color: red;
  }
</style>`,
      content: "v-bind可以賦予標籤變數，讓標籤可以動態更新資料",
      hint: "v-bind:class=`redFont`可以用語法糖改寫成:class=`redFont`，要注意動態賦予的屬性CSS會抓不到reference，但還是可以修改v-bind標籤的樣式",
    },
    vSlot: {
      title: "v-slot",
      source: `<template>
    <!-- 顯示全部的slot內容 -->
    <vSlotText></vSlotText>
    <!-- 設定default slot的值 -->
    <vSlotText>
      <slot>由父組件設定slot內容</slot>
    </vSlotText>
  
    <!-- 設定具名 slot的值 -->
    <vSlotText>
      <!-- 設定header slot -->
      <template v-slot:header>
        <h1>設定header slot內容</h1>
      </template>
      <!-- footer slot -->
      <template #footer>
        <h1>設定footer slot內容</h1>
      </template>
    </vSlotText>
</template>`,
      content:
        "v-slot用於設定組件插槽，可以在組件設定加入的元素，也可以具名指定插槽的位置",
      hint: "v-slot:header可以用語法糖改寫成#header，注意v-slot只能用在組件和template上",
    },
  });

  const routerNote = reactive({
    aboutRouter: {
      title: "About Router",
      source: `import { createRouter, createWebHistory } from 'vue-router'
  import HomeView from '../views/HomeView.vue'
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
})
  
export default router`,
      content:
        "Router是實現SPA所使用的技術，透過Javascript程式碼傳遞使用者所選擇的路徑，而不是像傳統網站一樣一個頁面就是一個HTML",
      hint: "",
    },
    RouterLinkHTML: {
      title: "RouterLink",
      source: `<template>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  
    <RouterView />
</template>`,
      content:
        "在template匯入RotuerLink，然後在想要顯示View的位置加入RouterView，RouterLink類似html中的a標籤，to=``部分就跟a標籤的href一樣放入路徑，路徑要到index.js進行設定",
      hint: "使用RouterLink、RouterView之前，要先從vue-router裡import進來",
    },
    RouterLink: {
      title: "設定Router",
      source: `import HomeView from '../views/HomeView.vue'
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
})`,
      content:
        "匯入路徑有兩種方法，一種是像HomeView一樣先在上面匯入，在Component輸入匯入的名稱，第二種方法是像AboutView直接在Component裡面import路徑",
      hint: "",
    },
    RouterChildrenHTML: {
      title: "創建子路由",
      source: `<template>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/about/me">about me</RouterLink>
    <RouterLink to="/about/shop">about shop</RouterLink>
  
    <RouterView />
</template>`,
      content: "在to=``前面要記得加上父路徑的連結，路徑要到index.js進行設定",
      hint: "使用RouterLink、RouterView之前，要先從vue-router裡import進來",
    },
    RouterChildren: {
      title: "設定子路由",
      source: `const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
        children: [
          {
            path: "me",
            component: () => import("../views/AboutMeView.vue"),
          },
          {
            path: "shop",
            component: () => import("../views/AboutShopView.vue"),
          },
        ],
      },
    ],
});`,
      content:
        "在想要加入子路由的父路由中使用children，然後在[]中建立路徑就完成了",
      hint: "子路由通常用在需要顯示畫面不同的時候，如果不同路徑只是換圖片跟文字即可，可使用動態路由",
    },
    DynamicRouting: {
      title: "Dynamic routing",
      source: `const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about/:id",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
    ],
});`,
      content:
        "以about為例，在後面加上/:id(id只是個自定義變數，要輸入其他名稱也可以)，在RouterLink to=`/about/`之中，不管輸入甚麼都會顯示相對應的路徑，有很大的彈性",
      hint: "動態路由通常用在顯示畫面差異不大的時候，像是電商網站的商品頁面，當顯示畫面差異很大時，建議使用子路徑",
    },
  });

  const lifecycleNote = reactive({
    AboutLifeCycle: {
      title: "About life cycle",
      source: `<script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    console.log("the component is now mounted.")
  })
  <script>`,
      content:
        "Vue的組件在創建時都需要經過一系列的初始化流程，在這個過程中會運行稱為生命週期的函式，開發者可以在特定階段運作自定義的程式",
      hint: "使用生命週期函式時，Vue會自動將函式初始化到組件上，這些函式要在組件初始化時被同時註冊，因此要注意不要把生命週期函式放在async function裡面",
    },
    onMounted: {
      title: "onMounted()",
      source: `<script setup>
  import { ref, onMounted } from 'vue'
  
  const el = ref()
  
  onMounted(() => {
    el.value // <div>
  })
  <script>
  
  <template>
    <div ref="el"></div>
  </template>`,
      content: "onMounted()功能為設定一個callbackFn，在組件被安裝完成後執行",
      hint: "這個hook在伺服器端rendering期間不會被調用",
    },
    onUpdated: {
      title: "onUpdated()",
      source: `<script setup>
  import { ref, onUpdated } from 'vue'
  
  const count = ref(0)
  
  onUpdated(() => {
  
    console.log(document.getElementById('count').textContent)
  })
  <script>
  
  <template>
    <button id="count" @click="count++">{{ count }}</button>
  </template>`,
      content: "onUpdated()會在組件因為響應式資料變更而更新DOM Tree後執行",
      hint: "這個hook在伺服器端rendering期間不會被調用，注意不要在onUpdated()中更改組件的資料，可能會導致無限循環",
    },
    onUnmounted: {
      title: "onUnmounted()",
      source: `<script setup>
  import { onMounted, onUnmounted } from 'vue'
  
  let intervalId
  onMounted(() => {
    intervalId = setInterval(() => {
      // ...
    })
  })
  
  onUnmounted(() => clearInterval(intervalId))
  <script>`,
      content:
        "onUnmounted()會在組件被移除之後執行函式，通常用來清理一些副作用，例如:計時器、DOM監聽事件",
      hint: "這個hook在伺服器端rendering期間不會被調用",
    },
    onBeforeMount: {
      title: "onBeforeMount()",
      source: `function onBeforeMount(callback: () => void): void`,
      content:
        "onBeforeMount()會在組件被安裝之前執行函式，這個hook被執行時，組件已經完成響應式資料設定，但還沒建立DOM Node",
      hint: "這個hook在伺服器端rendering期間不會被調用",
    },
    onBeforeUpdate: {
      title: "onBeforeUpdate()",
      source: `function onBeforeUpdate(callback: () => void): void`,
      content:
        "onBeforeUpdate()會在組件即將因為響應式資料更新而更新其DOM Node之前執行，這個hook可以在Vue更新DOM之前訪問DOM資料",
      hint: "這個hook在伺服器端rendering期間不會被調用，在這個hook中更新資料也是安全的",
    },
    onBeforeUnmount: {
      title: "onBeforeUnmount()",
      source: `function onBeforeUnmount(callback: () => void): void`,
      content:
        "onBeforeUnmount()會在組件即將被移除之前執行，當這個hook被調用時，組件依然保持全部的功能",
      hint: "這個hook在伺服器端rendering期間不會被調用",
    },
  });

  const compositionAPINote = reactive({
    "ref()": {
      title: "ref()",
      source: `<script setup>
  import { ref, reactive, computed } from "vue";
  
  const name = ref("Jack");
  console.log(name.value); //Jack
  <script>`,
      content:
        "ref()可創建所有資料型態的響應式數據，創建完後放入HTML標籤即可使用",
      hint: "ref()放入Object，Object的資料改變不會被watch監測，若資料型態為Object，建議使用reactive()。變更ref資料時要輸入變數名稱.value才是指定變數的value",
    },
    "reactive()": {
      title: "reactive()",
      source: `<script setup>
  import { ref, reactive, computed } from "vue";
  
  const name = ref("Jack");
  
  const nameObject = reactive({
    name: name,
  });
  
  console.assertlog(nameObject.name == name.value); //true
  <script>`,
      content:
        "reactive()只能放Array和Object兩種資料型態，通常只有Object才會使用reactive()",
      hint: "reactive()如果使用ref宣告的value的話，直接放入變數名稱就會自動解包，不用再加上.value",
    },
    "computed()": {
      title: "computed()",
      source: `<script setup>
  import { ref, computed } from "vue";
  
  const num = ref(1);
  
  const isBigThan3 = computed(() => {
    if (num.value > 3) {
      return num.value + "大於3";
    } else {
      return num.value + "小於等於於3";
    }
  });
  <script>`,
      content: "computed通常用於進行計算和更改資料",
      hint: "computed()裡面的callback function的()不能宣告參數，computed()要使用ref()要加上.value才能取得資料",
    },
    "computed()": {
      title: "computed() get & set",
      source: `<script setup>
  const count = ref(1);
  const setCount = computed({
    get: () => count.value,
    set: (val) => {
      count.value = val;
    },
  });
  
  console.log(setCount.value); // 1
  setCount.value = 5;
  console.log(setCount.value); // 5
  console.log(count.value); // 5 count資料跟著被改變
  <script>`,
      content:
        "computed()可以創建一個物件放入get和set分別執行不同的函式，get取得value，set設定value",
      hint: "computed()要印出value的話也要加上.value，set的value改變之後，如果改變對象是響應式數據，那value的資料都會被改變",
    },
    "readonly()": {
      title: "readonly()",
      source: `<script setup>
  const original = reactive({ count: 0 });
  const copy = readonly(original); //不能修改copy這個變數
  
  original.count++; //original可以更新value
  copy.count++; // 系統會報錯
  <script>`,
      content:
        "readonly()可以建立一個不能編輯的變數，如果不希望資料被更改可以使用這個方法",
      hint: "",
    },
    "watch()": {
      title: "watch()",
      source: `<script setup>
  const count = ref(0);
  //watch() 參數1:要監測的變數 參數2:當change觸發，要執行的函式
  watch(count, (oldValue, newValue) => {
    console.log(oldValue, newValue);
  });
  <script>`,
      content: "當watch監測的變數發生change事件，就執行callback function",
      hint: "",
    },
  });

  const componentNote = reactive({
    props: {
      title: "props",
      source: `<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: "",
      required: true, //設定是否為必填
    },
    age: {
      type: Number,
      default: null,
      required: true,
      //自定義函式 會回傳true表示驗證通過 false表示失敗
      validator: (value) => {
        return value >= 18;
      },
      //強制轉換prop值的自定義函式
      coerce: (value) => {
        return parseInt(value);
      },
    },
    isMarried: {
      type: Boolean,
      default: false,
    },
    Function: {
      type: Function,
      default: () => {
        console.log("hello world");
      },
    },
    Array: {
      type: Array,
      default: () => [],
    },
    Object: {
      type: Object,
      default: () => ({}),
    },
  });
  <script>`,
      content:
        "props讓父組件可以賦予子組件的標籤屬性或文字，props可以是各種資料型態，宣告資料型態時，第一個字母要記得大寫",
      hint: "props的type為object或array時，設定default時要特別注意(如上圖)",
    },
    emitChildComponent: {
      title: "emits",
      source: `<script setup>
  const emit = defineEmits("childComponent");
  
  const emitEvent = () => {
    //emit參數1:定義事件名稱 參數2:定義事件要傳遞的值
    emit("childComponent", "這是子組件的emit事件傳遞");
  };
  <script>
  
  <template>
    <button @click="emitEvent">click</button>
  </template>`,
      content:
        "emits透過子組件元素觸發自定義事件，將子組件資料傳遞給父組件，通常會搭配按鈕使用",
      hint: "",
    },
    emitParentComponent: {
      title: "emits父組件",
      source: `<script setup>
  import { ref } from "vue";
  import testComponent from "../components/testComponent.vue";
  
  const childData = ref("");
  
  const getChildData = (data) => {
    childData.value = data;
  };
  <script>
  
  <template>
    <testComponent @childComponent="getChildData" />
    <h1>{{ childData }}</h1>
  </template>`,
      content:
        "父組件透過emits定義的方法名稱來取得子組件傳遞的資料，通常也都是用按鈕來觸發事件",
      hint: "",
    },
    provide: {
      title: "provide",
      source: `<script setup>
  import { ref, provide } from "vue";
  import provideChild from "../components/provideChild.vue";
  
  const msg = ref("fooooo!");
  const count = ref(1);
  const arr = ref([1]);
  
  //第一個參數是key，第二個是要給的value
  provide("for grandchild message", msg);
  provide("for grandchild count", count);
  provide("for grandchild arr", arr);
  };
  <script>`,
      content:
        "provide可用來傳遞資料給所有的子組件，不管層級有多深，都可以透過provide的方式將資料注入子組件，provide的第一個參數為傳遞資料的key，第二個參數為資料的value",
      hint: "可以使用ref或reactive將響應式資料注入到子層組件",
    },
    inject: {
      title: "inject",
      source: `<script setup>
  import { inject } from "vue";
  const grandpaMsg = inject("for grandchild message");
  const groundCount = inject("for grandchild count");
  const grandArr = inject("for grandchild arr");
  <script>`,
      content:
        "inject可以將父組件provide的資料注入子組件，只要在inject輸入provide設定的key就可以使用了",
      hint: "inject的資料僅能讀取，無法對value進行更新或修改參數",
    },
  });

  const piniaNote = reactive({
    aboutPinia: {
      title: "About Pinia",
      source: `import { ref, computed } from 'vue'
  import { defineStore } from 'pinia'
  
  export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
  
    return { count, doubleCount, increment }
})`,
      content:
        "Pinia是Vue.js的存儲庫和管理框架。它主要設計用於構建前端Web應用程序，它使用聲明性語法並提供自己的管理API。Pinia被Vue.js團隊認可為Vuex的可靠替代品，目前是Vue的官方管理庫。",
      hint: "",
    },
  });

  return {
    directivesNote,
    routerNote,
    lifecycleNote,
    compositionAPINote,
    componentNote,
    piniaNote,
  };
});
