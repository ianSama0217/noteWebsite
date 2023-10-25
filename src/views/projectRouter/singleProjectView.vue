<script setup>
import { storeToRefs } from "pinia";
//匯入子組件
import sidebar from "../../components/projectComponents/sidebar.vue";
import iframeBox from "../../components/projectComponents/iframeBox.vue";
import aLinkBtn from "../../components/projectComponents/aLinkBtn.vue";
import changeRouterBtn from "../../components/projectComponents/changeRouterBtn.vue";
//匯入useProjectStore資料
import { useProjectStore } from "../../stores/project";

const projectStore = useProjectStore();
const { sideBar, iframeArr, webALink, githubALink, page } =
  storeToRefs(projectStore);
const { changeNextPage, changePerviousPage } = projectStore;
</script>

<template>
  <h3 class="webtitle">{{ sideBar[page].title }}</h3>
  <div class="singleProjectPage">
    <sidebar class="sidebar" :sidebarContent="sideBar" :changeIndex="page" />

    <div class="rightSide">
      <iframeBox :srcIframe="iframeArr" :changeIndex="page" />
      <aLinkBtn
        class="aLinkBtn"
        :websrc="webALink"
        :githubsrc="githubALink"
        :changeIndex="page"
      />
      <changeRouterBtn
        class="changeRouterBtn"
        :perviousPage="changePerviousPage"
        :nextPage="changeNextPage"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.webtitle {
  text-align: center;
  font-size: 2rem;
  color: $textDarkColor;
  margin-bottom: 1rem;
}

.singleProjectPage {
  display: flex;
  justify-content: space-around;

  .sidebar {
    align-self: center;
  }

  .rightSide {
    display: flex;
    flex-direction: column;
    .aLinkBtn {
      align-self: center;
    }

    .changeRouterBtn {
      align-self: center;
    }
  }
}
</style>
