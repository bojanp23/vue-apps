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
            :action="percents"
            class="btn--secondary">%
          </calc-btn>
          <calc-btn
            :action="sum"
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
            :action="substract"
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
            :action="multiply"
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
            :action="divide"
            class="btn--operator">/
          </calc-btn>
          <calc-btn
            :action="appendNumber"
            class="btn--large">0
          </calc-btn>
          <calc-btn
            :action="decimal">.
          </calc-btn>
          <calc-btn
            :action="equal"
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
      result: 0,
      previuousResult: null,
      operator: null,
      operatorClicked: false
    }
  },
  methods: {
    setPreviousResult () {
      this.previuousResult = this.result
      this.operatorClicked = true
    },

    clear () {
      this.result = ''
    },

    appendNumber (e) {
      if (this.operatorClicked) {
        this.result = ''
        this.operatorClicked = false
      }
      var value = e.target.innerText
      this.result = parseFloat(this.result + value)
    },

    percents () {
      this.result = this.result / 100
    },

    decimal () {
      this.result = this.result + ''
      if (this.result.indexOf('.') === -1) {
        this.result = this.result + '.'
      }
    },

    sum () {
      this.operator = (a, b) => a + b
      this.setPreviousResult()
    },

    substract () {
      this.operator = (a, b) => b - a
      this.setPreviousResult()
    },

    multiply () {
      this.operator = (a, b) => a * b
      this.setPreviousResult()
    },

    divide () {
      this.operator = (a, b) => b / a
      this.setPreviousResult()
    },

    equal () {
      this.result = this.operator(
        parseFloat(this.result),
        parseFloat(this.previuousResult)
      )
      this.previuousResult = this.result
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
