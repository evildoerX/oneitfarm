<template>
  <div class="columns is-multiline is-mobile">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">订单管理</el-menu-item>
</el-menu>
<div class="line"></div>
<el-menu theme="dark1" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">订单管理</el-menu-item>
</el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BaseCard, CardFooterItem } from 'vue-bulma-card'

export default {
  components: {
    BaseCard,
    CardFooterItem
  },

  computed: {
    ...mapGetters({
      parent: 'componententry'
    }),

    parentPath () {
      return this.parent ? this.parent.path : ''
    },

    items () {
      return (this.parent ? this.parent.children : []).filter(item => item.path)
    }
  },

  methods: {
    getActions (item) {
      return [{
        text: 'Repository',
        icon: 'github',
        href: item.meta && item.meta.repository
      }, {
        text: 'Demo',
        icon: 'link',
        name: item.name
      }]
    },

    getDescription (item) {
      return item.meta && item.meta.description
    }
  }

}
</script>
<style lang="scss">
  @import'~idg-theme/menu.css'
  // @import'../../../idg-theme/menu.css'
</style>
