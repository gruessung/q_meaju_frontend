<template>
  <q-page class>
    <div class="q-pa-xl fixed-center">
      <q-card v-if="!this.$q.platform.is.mobile" class="my-card g-white text-black">
        <q-card-section>
          <q-input
            ref="input"
            outlined
            filled
            v-model="url"
            type="text"
            error-message="Enter a valid URL"
          >
            <template v-slot:prepend>
              <q-icon name="link"/>
            </template>
          </q-input>

          <q-toggle v-model="bRulesAccepted" label="I accept the rules."/>
        </q-card-section>

        <q-separator dark/>

        <q-card-actions>
          <q-btn v-on:click="shortLink" flat>Generate short Link</q-btn>
        </q-card-actions>
      </q-card>

      <q-card v-if="this.$q.platform.is.mobile" class="mobile-card g-white text-black">
        <q-card-section>
          <q-input
            ref="input"
            outlined
            filled
            v-model="url"
            type="text"
            error-message="Enter a valid URL"
          >
            <template v-slot:prepend>
              <q-icon name="link"/>
            </template>
          </q-input>
          <q-toggle v-model="bRulesAccepted" label="I accept the rules."/>
        </q-card-section>

        <q-separator dark/>

        <q-card-actions>
          <q-btn v-on:click="shortLink" flat>Generate short Link</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 500px;
.mobile-card
  width: 100%
  min-width: 300px
</style>
 
<script>
import axios from 'axios'
import { Notify } from 'quasar'
import { Platform } from 'quasar'

export default {
  name: 'PageIndex',

  data() {
    return {
      url: '',
      bError: false,
      bRulesAccepted: false
    }
  },

  computed: {
    isInvalidInput() {
      return this.bError
    }
  },

  methods: {
    shortLink() {
      var bodyFormData = new FormData()
      bodyFormData.set('url', this.url)
      let self = this

      if (!this.bRulesAccepted) {
        Notify.create('You have to accept our rules.')
        return;
      }

      this.$axios({
        method: 'post',
        url: 'https://meaju.de/api.php',
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(function(res) {
          if (res.data.status == '200') {
            self.url = res.data.short
          } else {
            Notify.create({
              message: res.data.message,
              icon: 'error'
            })
            self.bError = true
          }
          console.log(res)
        })
        .catch(function(err) {
          Notify.create('Unknown error.')
          self.bError = true
          console.log(err)
        })
    }
  }
}
</script>
