/*! For license information please see styles.js.LICENSE.txt */
(function(){var __webpack_modules__={"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./src/main.scss":function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nexports.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap);", ""]);\n\n// Module\nexports.push([module.id, "html {\\n  padding: 0 48px;\\n  margin: 0;\\n  background-color: #fff;\\n  background-size: 12px 12px;\\n  font-family: \\"Montserrat\\", Helvetica, Arial, sans-serif, -apple-system;\\n  overflow-x: hidden; }\\n\\n.inert {\\n  cursor: default; }\\n\\nhtml,\\nbody {\\n  height: 100%;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none; }\\n\\n.subtle {\\n  cursor: pointer;\\n  margin: 0 0 36px 0; }\\n  .subtle h1 {\\n    opacity: 1; }\\n  .subtle:hover h1 {\\n    opacity: 1; }\\n\\n.pull-quote, .pull-quote-right {\\n  left: 0;\\n  float: left;\\n  margin: 12px 12px 0 0;\\n  padding: 12px 0 12px 0;\\n  position: relative;\\n  text-align: left;\\n  width: 240px;\\n  font-size: 21px;\\n  line-height: 28px;\\n  border-top: 6px solid rgba(231, 80, 82, 0.85); }\\n  .pull-quote-right {\\n    right: 0;\\n    left: auto;\\n    text-align: right;\\n    float: right;\\n    margin: 12px 0 12px 12px; }\\n\\n.paragraph {\\n  margin: 24px 0 24px 0;\\n  position: relative; }\\n\\n.full {\\n  cursor: pointer;\\n  margin: 0 0 36px 0;\\n  font-weight: 500; }\\n\\n.divide, .divide-off {\\n  background: rgba(231, 80, 82, 0.85);\\n  width: 100%;\\n  height: 3px;\\n  margin: 6px 0 0 0;\\n  display: flex;\\n  align-self: center; }\\n  .divide-off {\\n    background: rgba(255, 174, 80, 0.9); }\\n\\nsection {\\n  display: flex;\\n  padding: 0 12% 144px 12%;\\n  justify-content: center;\\n  flex-direction: column; }\\n  section h1 {\\n    font-size: 28px;\\n    color: rgba(0, 13, 33, 0.85);\\n    font-weight: 300; }\\n  section .left {\\n    display: inline-flex;\\n    flex: 1;\\n    padding: 0 24px;\\n    align-items: flex-start;\\n    flex-direction: column;\\n    min-width: 300px;\\n    max-width: 300px;\\n    font-size: 15px; }\\n    section .left img {\\n      cursor: pointer !important; }\\n    section .left h1 {\\n      font-size: 19px;\\n      color: rgba(0, 13, 33, 0.85);\\n      font-weight: 300; }\\n  section .right {\\n    display: flex;\\n    padding: 0 24px;\\n    align-items: flex-start;\\n    font-size: 15px;\\n    flex-direction: column; }\\n    section .right .links {\\n      margin-top: 24px; }\\n      section .right .links a {\\n        border: 1px solid rgba(0, 13, 33, 0.5);\\n        color: rgba(0, 13, 33, 0.75);\\n        padding: 6px 48px;\\n        border-radius: 4px; }\\n        section .right .links a i {\\n          font-size: 15px; }\\n        section .right .links a:hover {\\n          border: 1px solid #000d21;\\n          color: #000d21; }\\n    section .right p {\\n      font-size: 15px;\\n      color: rgba(0, 13, 33, 0.85);\\n      padding: 0;\\n      margin: 0 0 12px 0; }\\n    section .right a {\\n      color: #000d21;\\n      font-size: 21px;\\n      cursor: pointer !important;\\n      text-transform: uppercase;\\n      transition: border 0.2s linear; }\\n      section .right a:hover {\\n        transition: border 0.2s linear; }\\n    section .right h2 {\\n      font-size: 28px;\\n      color: rgba(0, 13, 33, 0.85); }\\n    section .right ul {\\n      padding: 0;\\n      margin: 0; }\\n    section .right li {\\n      padding: 0 0 12px 0;\\n      margin-left: 16px; }\\n    section .right ul > li {\\n      font-size: 15px;\\n      color: rgba(0, 13, 33, 0.85);\\n      list-style: circle; }\\n\\n.header {\\n  display: flex;\\n  padding: 48px;\\n  opacity: 0;\\n  background: rgba(255, 255, 255, 0.9);\\n  z-index: 20000;\\n  animation: delayOpacity;\\n  animation-duration: .2s;\\n  animation-timing-function: linear;\\n  animation-direction: normal;\\n  animation-fill-mode: forwards;\\n  animation-play-state: inherit;\\n  animation-delay: 5.9s; }\\n  .header-left {\\n    display: flex;\\n    flex: 1;\\n    align-items: center;\\n    justify-content: flex-start;\\n    max-width: 465px;\\n    cursor: pointer; }\\n    .header-left img {\\n      padding: 0 12px 0 0; }\\n  .header-right {\\n    display: inline-flex;\\n    align-items: center;\\n    justify-content: flex-start; }\\n    .header-right span {\\n      font-size: 14px;\\n      color: #e75052; }\\n\\n.quadrant, .quadrant-1, .quadrant-2, .quadrant-3, .quadrant-3b, .quadrant-4, .quadrant-4b {\\n  position: absolute;\\n  color: #000d21;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 72px; }\\n  .quadrant a, .quadrant-1 a, .quadrant-2 a, .quadrant-3 a, .quadrant-3b a, .quadrant-4 a, .quadrant-4b a {\\n    border-radius: 25px;\\n    border: 1px solid #eb5851;\\n    color: #eb5851;\\n    font-weight: 500;\\n    padding: 6px 24px;\\n    font-size: 12px;\\n    background: transparent; }\\n    .quadrant a:hover, .quadrant-1 a:hover, .quadrant-2 a:hover, .quadrant-3 a:hover, .quadrant-3b a:hover, .quadrant-4 a:hover, .quadrant-4b a:hover {\\n      background: #eb5851;\\n      color: #fff; }\\n  .quadrant-1 {\\n    left: 48px;\\n    right: auto;\\n    top: 0;\\n    bottom: 50%;\\n    justify-content: center;\\n    align-items: flex-start;\\n    text-align: left;\\n    align-items: center;\\n    justify-content: flex-start;\\n    margin-right: 48px; }\\n  .quadrant-2 {\\n    left: auto;\\n    right: 48px;\\n    top: 0;\\n    bottom: 50%;\\n    text-align: right;\\n    align-items: center;\\n    justify-content: flex-start;\\n    margin-left: 48px; }\\n  .quadrant-3 {\\n    left: 48px;\\n    right: auto;\\n    top: 50%;\\n    bottom: 0;\\n    justify-content: center;\\n    align-items: flex-start;\\n    text-align: left;\\n    align-items: center;\\n    justify-content: flex-start;\\n    margin-right: 48px; }\\n  .quadrant-3b {\\n    left: 48px;\\n    right: auto;\\n    top: 0;\\n    bottom: 0;\\n    justify-content: center;\\n    align-items: flex-start;\\n    text-align: left;\\n    align-items: center;\\n    justify-content: flex-start;\\n    margin-right: 48px; }\\n  .quadrant-4 {\\n    left: auto;\\n    right: 48px;\\n    top: 50%;\\n    bottom: 0;\\n    text-align: right;\\n    align-items: center;\\n    justify-content: flex-start;\\n    margin-left: 48px; }\\n  .quadrant-4b {\\n    left: auto;\\n    right: 48px;\\n    top: 0;\\n    bottom: 0;\\n    text-align: right;\\n    align-items: center;\\n    justify-content: flex-start;\\n    margin-left: 48px; }\\n  .quadrant-select, .quadrant-select-1, .quadrant-select-2, .quadrant-select-3, .quadrant-select-4 {\\n    position: absolute;\\n    transition: all .3s ease;\\n    position: absolute; }\\n    .quadrant-select-1 {\\n      top: 0;\\n      bottom: 20%;\\n      width: 100%;\\n      left: 30%; }\\n      .quadrant-select-1 div {\\n        color: #000d21;\\n        display: flex;\\n        flex-direction: column;\\n        padding: 72px;\\n        position: absolute;\\n        left: 0;\\n        top: 0; }\\n    .quadrant-select-2 {\\n      top: 0;\\n      bottom: 20%;\\n      width: 100%;\\n      left: 0;\\n      right: 30%; }\\n      .quadrant-select-2 div {\\n        color: #000d21;\\n        display: flex;\\n        flex-direction: column;\\n        padding: 72px;\\n        position: absolute;\\n        left: 0;\\n        top: 0; }\\n    .quadrant-select-3 {\\n      top: 50%;\\n      bottom: 20%;\\n      width: 100%;\\n      left: 30%; }\\n      .quadrant-select-3 div {\\n        color: #000d21;\\n        display: flex;\\n        flex-direction: column;\\n        padding: 72px;\\n        position: absolute;\\n        left: 0;\\n        bottom: 0; }\\n    .quadrant-select-4 {\\n      top: 50%;\\n      bottom: 0;\\n      width: 100%;\\n      left: 0;\\n      right: 30%; }\\n      .quadrant-select-4 div {\\n        color: #000d21;\\n        display: flex;\\n        flex-direction: column;\\n        padding: 72px;\\n        position: absolute;\\n        right: 0;\\n        bottom: 0; }\\n    .quadrant-select-0 {\\n      position: unset; }\\n\\n.follow {\\n  display: flex;\\n  position: absolute;\\n  top: calc(50% + 60px);\\n  left: 10%;\\n  right: 10%;\\n  text-align: center;\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center; }\\n  @media (min-width: 840px) {\\n    .follow {\\n      left: 20%;\\n      right: 20%; } }\\n\\n.flex-container {\\n  width: 100%;\\n  padding: 0;\\n  margin: 0;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 60px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  pointer-events: none; }\\n  .flex-container-lineY, .flex-container-lineY-q0, .flex-container-lineY-q1, .flex-container-lineY-q2, .flex-container-lineY-q3, .flex-container-lineY-q4 {\\n    animation: delayGrowY;\\n    animation-duration: 0.6s;\\n    animation-timing-function: ease;\\n    animation-direction: normal;\\n    animation-fill-mode: forwards;\\n    animation-play-state: inherit;\\n    animation-delay: .4s;\\n    height: 0;\\n    content: \\"\\";\\n    position: absolute;\\n    z-index: -1;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 50%;\\n    border-left: 1px solid rgba(0, 13, 33, 0.15);\\n    transform: translate(-50%);\\n    transition: all .3s ease; }\\n    .flex-container-lineY-q0 {\\n      top: 0;\\n      right: 50%;\\n      bottom: 0;\\n      left: 50%; }\\n    .flex-container-lineY-q1 {\\n      top: 0;\\n      bottom: 0;\\n      left: 95%;\\n      right: 5%; }\\n    .flex-container-lineY-q2 {\\n      top: 0;\\n      bottom: 0;\\n      left: 5%;\\n      right: 95%; }\\n    .flex-container-lineY-q3 {\\n      top: 0;\\n      bottom: 0;\\n      left: 95%;\\n      right: 5%; }\\n    .flex-container-lineY-q4 {\\n      top: 0;\\n      bottom: 0;\\n      left: 5%;\\n      right: 95%; }\\n  .flex-container-lineX, .flex-container-lineX-q0, .flex-container-lineX-q1, .flex-container-lineX-q2, .flex-container-lineX-q3, .flex-container-lineX-q4 {\\n    animation: delayGrowX;\\n    animation-duration: 5s;\\n    animation-timing-function: ease;\\n    animation-direction: normal;\\n    animation-fill-mode: forwards;\\n    animation-play-state: inherit;\\n    animation-delay: .7s;\\n    width: 0;\\n    content: \\"\\";\\n    position: absolute;\\n    z-index: -1;\\n    top: 50%;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    border-top: 1px solid rgba(0, 13, 33, 0.15);\\n    transition: all .3s ease; }\\n    .flex-container-lineX-q0 {\\n      top: 50%;\\n      bottom: 0;\\n      left: 0;\\n      right: 0; }\\n    .flex-container-lineX-q1 {\\n      top: 90%;\\n      bottom: 0;\\n      left: 0;\\n      right: 0; }\\n    .flex-container-lineX-q2 {\\n      top: 90%;\\n      bottom: 0;\\n      left: 0;\\n      right: 0; }\\n    .flex-container-lineX-q3 {\\n      top: 5%;\\n      bottom: 0;\\n      left: 0;\\n      right: 0; }\\n    .flex-container-lineX-q4 {\\n      top: 5%;\\n      bottom: 0;\\n      left: 0;\\n      right: 0; }\\n\\n.row {\\n  width: 100%; }\\n\\n.flex-item {\\n  text-align: center;\\n  height: auto;\\n  justify-content: center;\\n  display: flex;\\n  padding: 0;\\n  margin: 0;\\n  position: absolute;\\n  right: 50%;\\n  bottom: 50%;\\n  left: 50%;\\n  pointer-events: none;\\n  transition: all .3s ease; }\\n  .flex-item-q0, .flex-item-q1, .flex-item-q2, .flex-item-q3, .flex-item-q4 {\\n    text-align: center;\\n    height: auto;\\n    justify-content: center;\\n    display: flex;\\n    padding: 0;\\n    margin: 0;\\n    position: absolute;\\n    top: calc(50% - 36px);\\n    right: 50%;\\n    bottom: 50%;\\n    left: 50%;\\n    transition: all .3s ease; }\\n    .flex-item-q0 img, .flex-item-q1 img, .flex-item-q2 img, .flex-item-q3 img, .flex-item-q4 img {\\n      cursor: pointer;\\n      transform: scale(1);\\n      transition: transform 0.2s linear; }\\n      .flex-item-q0 img:hover, .flex-item-q1 img:hover, .flex-item-q2 img:hover, .flex-item-q3 img:hover, .flex-item-q4 img:hover {\\n        transform: scale(1.1);\\n        transition: transform 0.2s linear; }\\n  .flex-item-q1 {\\n    top: calc(90% - 36px);\\n    right: 5%;\\n    bottom: 0;\\n    left: 95%; }\\n  .flex-item-q2 {\\n    top: calc(90% - 36px);\\n    left: 5%;\\n    bottom: 0;\\n    right: 95%; }\\n  .flex-item-q3 {\\n    top: calc(5% - 36px);\\n    left: 95%;\\n    bottom: 90%;\\n    right: 5%; }\\n  .flex-item-q4 {\\n    top: calc(5% - 36px);\\n    left: 5%;\\n    right: 95%; }\\n\\n.nudge-xxs {\\n  margin-bottom: 3px; }\\n\\n.nudge-xs {\\n  margin-bottom: 6px; }\\n\\n.nudge-sm {\\n  margin-bottom: 16px; }\\n\\n.nudge-md {\\n  margin-bottom: 24px; }\\n\\n.nudge-lg {\\n  margin-bottom: 35px; }\\n\\n.nudge-xl {\\n  margin-bottom: 65px; }\\n\\n.nudge-xxl {\\n  margin-bottom: 120px; }\\n\\n.MuiBackdrop-root {\\n  background: rgba(255, 255, 255, 0.75) !important; }\\n\\n#about .MuiDrawer-paper {\\n  padding: 0 !important;\\n  width: 240px;\\n  background: #F4F6F8;\\n  box-shadow: none;\\n  color: #fff;\\n  text-transform: uppercase;\\n  padding: 48px !important; }\\n  #about .MuiDrawer-paper i {\\n    font-size: 21px;\\n    color: #000d21;\\n    padding: 0 3px;\\n    cursor: pointer;\\n    position: absolute;\\n    right: 24px;\\n    top: 24px; }\\n  #about .MuiDrawer-paper p {\\n    font-size: 15px;\\n    font-weight: 400;\\n    line-height: 18px;\\n    text-transform: none; }\\n  #about .MuiDrawer-paper h2 {\\n    font-size: 18px;\\n    font-weight: 400;\\n    color: #e75052; }\\n  @media (min-width: 840px) {\\n    #about .MuiDrawer-paper {\\n      width: 500px !important; } }\\n\\n.MuiInputBase-input,\\n.MuiInput-input {\\n  color: #000d21 !important;\\n  font: 400 14px \\"Montserrat\\", Helvetica, Arial, sans-serif, -apple-system, \\"Font Awesome 6 Pro\\", \\"Font Awesome 6 Free\\", \\"FontAwesome\\" !important; }\\n\\n.MuiInput-underline:after {\\n  border-bottom: 1px solid rgba(0, 13, 33, 0.75) !important; }\\n\\n.MuiInput-underline.Mui-error:after {\\n  border-bottom: 1px solid rgba(0, 13, 33, 0.75) !important; }\\n\\n.MuiInput-underline:before {\\n  border-bottom: 1px solid rgba(0, 13, 33, 0.75) !important; }\\n\\n.MuiFormControl-root label {\\n  color: rgba(0, 13, 33, 0.75) !important;\\n  font-size: 11px !important; }\\n\\n::-webkit-input-placeholder {\\n  color: #000d21;\\n  font-weight: 400;\\n  padding: 0 3px;\\n  opacity: 1; }\\n\\n:-ms-input-placeholder {\\n  color: #000d21;\\n  font-weight: 400;\\n  padding: 0 3px;\\n  opacity: 1; }\\n\\n::placeholder {\\n  color: #000d21 !important;\\n  font-weight: 400;\\n  padding: 0 3px;\\n  opacity: 1; }\\n\\n.fade-in {\\n  opacity: 0;\\n  animation: fadeIn;\\n  animation-duration: 0.5s;\\n  animation-timing-function: linear;\\n  animation-direction: normal;\\n  animation-fill-mode: forwards;\\n  animation-play-state: inherit; }\\n\\n.fade-in-delay-6s {\\n  opacity: 0;\\n  animation: fadeIn;\\n  animation-duration: 0.3s;\\n  animation-timing-function: linear;\\n  animation-direction: normal;\\n  animation-fill-mode: forwards;\\n  animation-play-state: inherit;\\n  animation-delay: 6.5s; }\\n\\n@keyframes delayGrowY {\\n  0% {\\n    height: 0; }\\n  100% {\\n    height: 100%; } }\\n\\n@keyframes delayOpacity {\\n  0% {\\n    opacity: 0; }\\n  100% {\\n    opacity: 1; } }\\n\\n@keyframes delayGrowX {\\n  0% {\\n    width: 0; }\\n  100% {\\n    width: 100%; } }\\n\\n@keyframes fadeIn {\\n  0% {\\n    opacity: 0; }\\n  100% {\\n    opacity: 1; } }\\n\\n@keyframes fadeOut {\\n  0% {\\n    opacity: 1; }\\n  100% {\\n    opacity: 0; } }\\n\\n.pulse {\\n  animation-name: pulse;\\n  animation-duration: 0.7s;\\n  animation-timing-function: ease;\\n  animation-direction: normal;\\n  animation-iteration-count: infinite;\\n  animation-play-state: inherit; }\\n\\n.pulse-turbo {\\n  animation-name: pulse;\\n  animation-duration: 0.1s;\\n  animation-timing-function: linear;\\n  animation-direction: normal;\\n  animation-iteration-count: 3;\\n  animation-play-state: inherit; }\\n\\n.zoom-out {\\n  animation-name: zoomOut;\\n  animation-duration: 5.8s;\\n  animation-timing-function: ease;\\n  animation-fill-mode: forwards;\\n  animation-direction: normal;\\n  animation-iteration-count: 1;\\n  animation-play-state: inherit;\\n  opacity: 0;\\n  transform-origin: center;\\n  transform: scale(1);\\n  transition: transform 0.2s linear; }\\n\\n.footer-slide-in {\\n  animation-name: slideIn;\\n  animation-duration: .3s;\\n  animation-timing-function: linear;\\n  animation-fill-mode: forwards;\\n  animation-direction: normal;\\n  animation-iteration-count: 1;\\n  animation-play-state: inherit;\\n  transform-origin: center;\\n  animation-delay: 5.8s;\\n  transform: translateY(100%); }\\n\\n@keyframes slideIn {\\n  0% {\\n    transform: translateY(100%); }\\n  100% {\\n    transform: translateY(0); } }\\n\\n@keyframes zoomOut {\\n  0% {\\n    opacity: 0;\\n    transform: translateY(-30px) scale(3) rotate(24deg); }\\n  6% {\\n    opacity: 1;\\n    transform: translateY(0) scale(1) rotate(0deg); }\\n  96% {\\n    opacity: 1;\\n    transform: scale(1) rotate(0deg); }\\n  100% {\\n    opacity: 0;\\n    transform: scale(1) rotate(0deg); } }\\n\\n@keyframes pulse {\\n  0% {\\n    opacity: 1; }\\n  50% {\\n    opacity: 0.5; }\\n  100% {\\n    opacity: 1; } }\\n\\n@keyframes load {\\n  from {\\n    width: 0; } }\\n\\n.footer {\\n  display: flex;\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  justify-content: flex-end;\\n  text-transform: uppercase;\\n  height: 84px;\\n  padding: 0 48px;\\n  background-color: #F4F6F8;\\n  margin: 0 auto;\\n  z-index: 1200; }\\n  .footer-left {\\n    display: inline-flex;\\n    flex: 1;\\n    align-items: center; }\\n    .footer-left a {\\n      padding: 6px 48px;\\n      border-radius: 4px;\\n      font-size: 11px;\\n      font-weight: 500;\\n      margin: 0 36px 0 0;\\n      background: transparent;\\n      color: rgba(0, 13, 33, 0.75);\\n      border: 1px solid rgba(0, 13, 33, 0.5);\\n      transition: color 0.1s ease-in, background 0.1s ease-in; }\\n      .footer-left a:hover {\\n        transition: color 0.1s ease-in, background 0.1s ease-in;\\n        border: 1px solid #000d21;\\n        color: #000d21; }\\n  .footer-right {\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n    font-size: 12px;\\n    font-weight: 400;\\n    color: #000d21;\\n    text-transform: none; }\\n    .footer-right a {\\n      font-size: 12px;\\n      font-weight: 500;\\n      margin: 0 36px 0 0;\\n      color: rgba(231, 80, 82, 0.85);\\n      font-weight: 500;\\n      text-decoration: none;\\n      transition: color 0.1s ease-in, background 0.1s ease-in; }\\n      .footer-right a:hover {\\n        text-decoration: underline;\\n        color: #e75052; }\\n    .footer-right i {\\n      color: #e75052;\\n      font-size: 12px;\\n      padding: 0 6px; }\\n\\n.link,\\na {\\n  color: rgba(136, 196, 229, 0.9);\\n  width: auto;\\n  text-decoration: none;\\n  font-size: 11px;\\n  text-transform: uppercase;\\n  font-weight: 400;\\n  display: inline-flex;\\n  align-items: center;\\n  cursor: pointer; }\\n  .link:hover,\\n  a:hover {\\n    color: #88c4e5; }\\n  .link:hover span,\\n  a:hover span {\\n    color: #fff;\\n    background: rgba(255, 255, 255, 0.1);\\n    transition: color 0.2s linear; }\\n  .link-default,\\n  a-default {\\n    color: #fff;\\n    padding: 6px 36px;\\n    border-radius: 4px;\\n    display: inline-flex;\\n    align-self: baseline;\\n    background: rgba(0, 13, 33, 0.75); }\\n    .link-default i,\\n    a-default i {\\n      font-size: 15px; }\\n    .link-default:hover,\\n    a-default:hover {\\n      color: #fff;\\n      background: #000d21; }\\n\\n.load,\\n.load:after {\\n  border-radius: 50%;\\n  width: 20px;\\n  height: 20px; }\\n\\n.load {\\n  margin: 25vh auto;\\n  position: relative;\\n  border-top: 2px solid rgba(235, 88, 81, 0.12);\\n  border-right: 2px solid rgba(235, 88, 81, 0.12);\\n  border-bottom: 2px solid rgba(235, 88, 81, 0.12);\\n  border-left: 2px solid #eb5851;\\n  animation: loader 1s infinite linear; }\\n\\n@keyframes loader {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\np {\\n  color: #000d21;\\n  font-size: 14px;\\n  font-weight: 400;\\n  line-height: 28px; }\\n\\nh1 {\\n  font-weight: 400;\\n  color: #eb5851;\\n  margin: 0;\\n  padding: 0;\\n  line-height: auto;\\n  font-size: 28px; }\\n  h1 strong {\\n    font-weight: 500; }\\n\\nh2 {\\n  font-weight: 400;\\n  color: #eb5851;\\n  margin: 0;\\n  padding: 0;\\n  font-size: 18px;\\n  justify-content: center; }\\n  h2 strong {\\n    font-weight: 500; }\\n\\nh3 {\\n  color: #eb5851;\\n  padding: 0;\\n  margin: 0;\\n  font-weight: 400;\\n  font-size: 15px; }\\n\\nh4 {\\n  color: #eb5851;\\n  padding: 0;\\n  margin: 0;\\n  font-weight: 400;\\n  font-size: 13px;\\n  text-align: right; }\\n  h4 strong {\\n    font-weight: 600;\\n    color: #eb5851; }\\n", ""]);\n\n\n\n//# sourceURL=webpack://vmc/./src/main.scss?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B2%5D')},"./src/main.scss":function(module,__unused_webpack_exports,__webpack_require__){eval('\nvar content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./src/main.scss");\n\nif(typeof content === \'string\') content = [[module.id, content, \'\']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {"sourceMap":false,"hmr":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! !../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://vmc/./src/main.scss?')}},__webpack_module_cache__={},deferred;function __webpack_require__(n){var t=__webpack_module_cache__[n];if(void 0!==t)return t.exports;var e=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n].call(e.exports,e,e.exports,__webpack_require__),e.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(n,t,e,i){if(!t){var o=1/0;for(s=0;s<deferred.length;s++){t=deferred[s][0],e=deferred[s][1],i=deferred[s][2];for(var a=!0,r=0;r<t.length;r++)(!1&i||o>=i)&&Object.keys(__webpack_require__.O).every((function(n){return __webpack_require__.O[n](t[r])}))?t.splice(r--,1):(a=!1,i<o&&(o=i));if(a){deferred.splice(s--,1);var l=e();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=deferred.length;s>0&&deferred[s-1][2]>i;s--)deferred[s]=deferred[s-1];deferred[s]=[t,e,i]},__webpack_require__.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(n,t){for(var e in t)__webpack_require__.o(t,e)&&!__webpack_require__.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),__webpack_require__.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},__webpack_require__.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){var n={styles:0};__webpack_require__.O.j=function(t){return 0===n[t]};var t=function(t,e){var i,o,a=e[0],r=e[1],l=e[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(i in r)__webpack_require__.o(r,i)&&(__webpack_require__.m[i]=r[i]);if(l)var d=l(__webpack_require__)}for(t&&t(e);s<a.length;s++)o=a[s],__webpack_require__.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return __webpack_require__.O(d)},e=self.webpackChunkvmc=self.webpackChunkvmc||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var __webpack_exports__=__webpack_require__.O(void 0,["vendor"],(function(){return __webpack_require__("./src/main.scss")}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();