import React from 'react'

const Btn = () => {
  return (
   <>
    <div class="calculator">
      <div class="container-input">
        <input type="text" id="result"  class="input-field" placeholder="0" readonly/>
        <button class="togle" onclick="togglePageContent()" id="myBtn">
          <span class="toggle-icon"
            ><i class="fa-solid fa-bars-staggered"></i
          ></span>
        </button>
      </div>
      <div class="btn hidden" id="content">
        <div class="color">
          <button class="button w-btn" onclick="calculator()">Deg</button>

          <button class="button w-btn" onclick="appendNumber('(')"> ( </button>
          <button class="button w-btn" onclick="appendNumber(')')">
          )
          </button>
          <button class="button w-btn" onclick="expPow()">exp</button>
        </div>
        <div class="color">
          <button class="button w-btn" onclick="calculateSin()">sin</button>
          <button class="button w-btn" onclick="calculateCos()">cos</button>
          <button class="button w-btn" onclick="calculateTan()">tan</button>
          <button class="button w-btn" onclick="calculateReciprocal()">1/X</button>
        </div>
        <div class="color">
          <button class="button w-btn" onclick="calculateSinInverse()">sin<sup>-1</sup></button>
          <button class="button w-btn" onclick="calculateCosInverse()">cos<sup>-1</sup></button>
          <button class="button w-btn" onclick="calculateTanInverse()">tan<sup>-1</sup></button>
          <button class="button w-btn" onclick="e()">e</button>
        </div>
        <div class="color">
          <button class="button w-btn" onclick="calculateSinHyper()">sin h</button>
          <button class="button w-btn" onclick="calculateCosHyper()">cos h</button>
          <button class="button w-btn" onclick="calculateTanHyper()">tan h</button>
          <button class="button w-btn" onclick="log()">log</button>
        </div>
        <div class="color">
          <button class="button w-btn" onclick="powOne()">Xi</button>
          <button class="button w-btn" onclick="pow()">X <sup>2</sup></button>
          <button class="button w-btn" onclick="powCube()">X <sup>3</sup></button>
          <button class="button w-btn" onclick="pi()">&#928;</button>
        </div>
      </div>
      <div class="btn-1">
        <div>
          <button class="button" onclick="addToMemory()">M+</button>
          <button class="button" onclick="subtractFromMemory()">M-</button>
          <button class="button" onclick="memoryRecall()">MR</button>
          <button class="button" onclick="memoryClear()">MC</button>
          <button class="button" onclick="deleteResult()"> --</button>
        <div>
          <button class="button" onclick="appendToResult('7')">7</button>
          <button class="button" onclick="appendToResult('8')">8</button>
          <button class="button" onclick="appendToResult('9')">9</button>
          <button class="button" onclick="appendToResult('/')">&#247;</button>
          <button class="button" onclick="clearResult() ">C</button>
        </div>
        <div>
          <button class="button" onclick="appendToResult('4')">4</button>
          <button class="button" onclick="appendToResult('5')">5</button>
          <button class="button" onclick="appendToResult('6')">6</button>
          <button class="button" onclick="appendToResult('*')">x</button>
          <button class="button equal" onclick="calculatePercentage()">%</button>
        </div>
        <div>
          <button class="button" onclick="appendToResult('1')">1</button>
          <button class="button" onclick="appendToResult('2')">2</button>
          <button class="button" onclick="appendToResult('3')">3</button>
          <button class="button" onclick="appendToResult('-')">-</button>
          <button class="button "onclick="sqrRoot('√')">√</button>
        </div>
        <div>
          <button class="button radius" onclick="appendToResult('0')">0</button>
          <button class="button" onclick="appendToResult('.')">.</button>
          <button class="button" onclick="appendToResult('00')">00</button>
          <button class="button" onclick="appendToResult('+')">+</button>
          <button class="button equal radius cl" onclick="calculateResult()  ">
            =
          </button>
        </div>
      </div>
      </div>
   </div>
   </>
  )
}

export default Btn
