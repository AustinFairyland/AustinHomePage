---
layoutClass: tools-layout
outline: [ 2, 3, 4 ]
title: Lionel Johnson
titleTemplate: Tool navigation
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# ⚙️ Tool Navigation

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"></MNavLinks>

<br/>

::: tip
Navigators of the Digital World: This meticulously designed navigation interface was developed by [Lionel Johnson](https://github.com/FairylandTech).
Blending aesthetics and practicality. We encourage and appreciate the innovation and spirit of sharing among community members.
If you have used our designs in your projects or have been inspired by them,
Please follow copyright regulations and retain the original copyright notice,
in recognition of our efforts and the contributions of [Lionel Johnson](https://github.com/FairylandTech).
:::
