<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4 py-10>
        <h1 class="display-2 font-weight-bold mb-3">
          Calculaor App
        </h1>

        <div class="calculator">
          <calc-display v-bind:display="this.result || '0'"></calc-display>

          <calc-btn
            :action="clear"
            class="btn--large btn--secondary">C
          </calc-btn>
          <calc-btn
            :action="appendNumber"
            class="btn--secondary">%
          </calc-btn>
          <calc-btn
            :action="appendNumber"
            class="btn--operator">+
          </calc-btn>
          <calc-btn 
            :action="appendNumber">1
          </calc-btn>
          <calc-btn 
            :action="appendNumber">2
          </calc-btn>
          <calc-btn 
            :action="appendNumber">3
          </calc-btn>
          <calc-btn
            :action="appendNumber"
            class="btn--operator">-
          </calc-btn>
          <calc-btn 
            :action="appendNumber">4
          </calc-btn>
          <calc-btn 
            :action="appendNumber">5
          </calc-btn>
          <calc-btn 
            :action="appendNumber">6
          </calc-btn>
          <calc-btn
            :action="appendNumber"
            class="btn--operator">*
          </calc-btn>
          <calc-btn 
            :action="appendNumber">7
          </calc-btn>
          <calc-btn 
            :action="appendNumber">8
          </calc-btn>
          <calc-btn 
            :action="appendNumber">9
          </calc-btn>
          <calc-btn
            :action="appendNumber"
            class="btn--operator">/
          </calc-btn>
          <calc-btn
            :action="appendNumber"
            class="btn--large">0
          </calc-btn>
          <calc-btn 
            :action="appendNumber">.
          </calc-btn>
          <calc-btn
            :action="appendNumber"
            class="btn--operator">=
          </calc-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Button from './Button'
import Display from './Display'

export default {
  components: {
    'calc-btn': Button,
    'calc-display': Display
  },
  data () {
    return {
      result: ''
    }
  },
  methods: {
    clear () {
      this.result = ''
    },

    appendNumber (e) {
      var value = e.target.innerHTML
      this.result = this.result + value
    }
  }
}
</script>

<style>
  .calculator {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    width: 270px;

    margin: 50px auto;

    border: 1px solid #000;
  }

  .btn--large {
    grid-column: 1/3;
  }

  .btn--operator {
    background: orange;
  }

  .btn--secondary {
    background: #9e9e9e;
  }
</style>
