<script setup></script>

<template>
  <div class="footer">
    <div class="poofileLogo">
      <i class="fa-solid fa-dog homeIcon"></i>
      <p>學習紀錄網</p>
    </div>
    <div class="line"></div>
    <div class="iconBar">
      <p>Support</p>
      <a href="https://vuejs.org/" target="_blank"
        ><i class="fa-brands fa-vuejs icon"></i
      ></a>
      <a href="https://github.com/" target="_blank"
        ><i class="fa-brands fa-github icon"></i
      ></a>
      <a href="https://fontawesome.com/" target="_blank"
        ><i class="fa-solid fa-font-awesome icon"></i
      ></a>
      <a href="https://www.youtube.com/" target="_blank"
        ><i class="fa-brands fa-youtube icon"></i
      ></a>
      <a href="https://www.figma.com/" target="_blank"
        ><i class="fa-brands fa-figma icon"></i
      ></a>
      <a href="https://stackoverflow.com/" target="_blank"
        ><i class="fa-brands fa-stack-overflow icon"></i
      ></a>
    </div>
    <p class="copyright">Copyright © 2023 ian | Web Design</p>
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.footer {
  margin-top: 5vh;
  background-color: $iconColor;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;

  .poofileLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    .homeIcon {
      font-size: 2.5rem;
      color: $textDarkColor;
    }
    p {
      font-size: 2rem;
      color: $textDarkColor;
    }
  }
  .line {
    border-bottom: 2px solid $BorderColor;
    margin: 1rem 0;
  }
  .iconBar {
    width: 40vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    p {
      font-size: 1.2rem;
    }
    a {
      text-decoration: none;
      color: $textDarkColor;
      .icon {
        font-size: 2rem;
        transition: 0.5s ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  .copyright {
    position: absolute;
    right: 2%;
    bottom: 2%;
  }
}
</style>
