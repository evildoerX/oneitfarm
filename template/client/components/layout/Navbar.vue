<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" style="font-size:30px;color:#fff" aria-hidden="true"></i>
          </a>
          <img class="applogo" src="http://oneitfarm.com/assets/css/icon/yun.png">
          <h1 class="appname">女生社区</h1>
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
        </div>
        <div class="nav-right">
        
        </div>

        <div class="nav-right is-flex">
          <el-menu default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="0">我的应用</el-menu-item>
            <el-submenu index="2">
              <template slot="title">个人中心</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    show: Boolean
  },
  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar'
  }),
  methods: mapActions([
    'toggleSidebar'
  ])
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  // box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  background-color: #288ad6;
  .container {
    margin: auto 10px;
  }
  .nav-left .applogo {
    width: 50px;
    height: 30px;
    margin-top:10px;
    margin-left: 10px;

  }

  .nav-left .appname {
    // font-size: 18px;
    margin-top: 20px;
    color: #fff;
    width: 150px;
  }

  .nav-right {
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    white-space: nowrap;
  }
}

.hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}
</style>
