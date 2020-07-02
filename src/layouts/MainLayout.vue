<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-bar class="q-electron-drag" v-if="$q.platform.is.electron">
        <q-icon name="car"/>
        <div>{{title}}</div>

        <q-space/>

        <q-btn dense flat icon="minimize" @click="minimize"/>
        <q-btn dense flat icon="crop_square" @click="maximize"/>
        <q-btn dense flat icon="close" @click="closeApp"/>
      </q-bar>

      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>{{title}}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
      elevated
      behavior="mobile"
    >
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox"/>
            </q-item-section>

            <q-item-section>Home</q-item-section>
          </q-item>

          <!--
          <q-item to="/history" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox"/>
            </q-item-section>

            <q-item-section>Your Links</q-item-section>
          </q-item>-->
          <q-item to="/rules" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="policy"/>
            </q-item-section>

            <q-item-section>Rules</q-item-section>
          </q-item>

          <q-item to="/about" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info"/>
            </q-item-section>

            <q-item-section>About</q-item-section>
          </q-item>

          <q-separator/>
          <q-item to="/imprint" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="business"/>
            </q-item-section>

            <q-item-section>Imprint</q-item-section>
          </q-item>
          <q-item to="/privacy" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="privacy_tip"/>
            </q-item-section>

            <q-item-section>Privacy</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://img.gruessung.eu/?f=1583736753.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <div class="text-weight-bold">{{title}}</div>
          <div>@gruessung</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class>
      <div :style="{backgroundImage:'url(https://meaju.de/images/background.png)'}">
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      title: 'grue.xyz'
    }
  }
}
</script>
