---
layoutClass: template-layout
outline: [ 2, 3, 4 ]
title: 段主任
titleTemplate: 模版文件
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 工具导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"></MNavLinks>

<br/>

::: tip
探索数字世界的导航者：这个精心设计的导航界面由 [Austin](https://github.com/FairylandTech)开发，
融合了美学和实用性。我们鼓励并感谢社区成员的创新和分享精神。如果您在自己的项目中使用了我们的设计或受到了启发，
请遵守版权规定并保留原始版权声明，以表彰我们的努力和 [Austin](https://github.com/FairylandTech)的贡献。
:::
