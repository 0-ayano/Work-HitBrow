<template >
<h1>Hit & Brow</h1>


<table class="panel">
  <tr>
    <td colspan="3">
      <input type="text" id="display" name="display" value="" disabled>
    </td>
  </tr>

  <tr>
      <td><input type="button" value="7" id="num" @click="main.numDisplay(7)"></td>
      <td><input type="button" value="8" id="num" @click="main.numDisplay(8)"></td>
      <td><input type="button" value="9" id="num" @click="main.numDisplay(9)"></td>
  </tr>

  <tr>
      <td><input type="button" value="4" id="num" @click="main.numDisplay(4)"></td>
      <td><input type="button" value="5" id="num" @click="main.numDisplay(5)"></td>
      <td><input type="button" value="6" id="num" @click="main.numDisplay(6)"></td>
  </tr>

  <tr>
      <td><input type="button" value="3" id="num" @click="main.numDisplay(3)"></td>
      <td><input type="button" value="2" id="num" @click="main.numDisplay(2)"></td>
      <td><input type="button" value="1" id="num" @click="main.numDisplay(1)"></td>
  </tr>

  <tr>
    <td><input type="button" value="0" id="num" @click="main.numDisplay(0)"></td>
    <td><input type="button" value="C" class="operator" @click="main.numDisplay('clear')"></td>
    <td><input type="button" value="Go" class="operator" @click="main.judge(ans)"></td>
  </tr>

</table>

</template>

<script setup>
import { ref, shallowRef, computed, watch, nextTick } from 'vue'
import main from "../assets/HitBrow"

const ans = ref([])
main.ansInit(ans)

</script>

<style scoped>
table.panel {
  position: absolute;
  margin-top: 8%;
  left: 50%;
  transform: translateX(-50%);
}

input {
  width: 70px;
  height: 70px;
  font-size: x-large;
  background-color: #dcdcdca4;
  border: none;
  border-radius: 20px;
  outline: none;
}

#display {
  width: 250px;
  text-align: center; 
  /*見た目の詳細設定*/
  background: #ffffff;
  border-top: solid #dcdcdca4 5px;
  border-bottom: solid #dcdcdca4 5px;
  border-right: solid #dcdcdca4 6px;
  border-left: solid #b6b6b6 6px;
  border-radius: 5px;
}

.operator {
  background-color: #87cefa;
}

input:hover {
  background: #747373b9;
}
.display:hover {
  background: #ffffff; /*ディスプレイ部分は無効化*/
}
.operator:hover {
  background: #339cdd;
}


input:active {
  background: #5a5a5a;
}
.operator:active {
  background: #2c80b4;
}
</style>

<!-- 
Reference
1. Java Script
  - [【JavaScript入門】乱数の作り方(範囲指定/重複なし/ランダム文字列)](https://www.sejuku.net/blog/22432)
  - [現在のページを再読み込みする(location.reload)](https://www.javadrive.jp/javascript/webpage/index12.html)

2. Vue
  - [【Vue】Vue3＋Vite3の画面にVuetify3を導入する全手順](https://qiita.com/to3izo/items/6f162e26f07ac1eef701)
  - [Vue.js で外部 JS ファイルの関数を呼び出す](https://www.paveway.info/entry/2021/03/03/vuejs_exportjsfile)
  - [【Vue3】v-onとは?使い方を7パターン紹介する](https://blog.litely.net/blog/vuejs_v-on/)

3. Etc
  - [HTML+CSS+JSで電卓を作ってみた※ウェブカツブログ記事参照](https://qiita.com/bumpfuji10/items/2b9470667530f67696ca)
-->