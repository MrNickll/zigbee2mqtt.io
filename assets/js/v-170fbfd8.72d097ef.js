"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24368],{5871:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-170fbfd8",path:"/devices/K4003C_L4003C_N4003C_NT4003C.html",title:"BTicino K4003C/L4003C/N4003C/NT4003C control via MQTT",lang:"en-US",frontmatter:{title:"BTicino K4003C/L4003C/N4003C/NT4003C control via MQTT",description:"Integrate your BTicino K4003C/L4003C/N4003C/NT4003C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-08-11T22:17:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Permanent_led (binary)",slug:"permanent-led-binary",children:[]},{level:3,title:"Led_when_on (binary)",slug:"led-when-on-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/K4003C_L4003C_N4003C_NT4003C.md",git:{updatedTime:1643818659e3}}},88664:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="bticino-k4003c-l4003c-n4003c-nt4003c" tabindex="-1"><a class="header-anchor" href="#bticino-k4003c-l4003c-n4003c-nt4003c" aria-hidden="true">#</a> BTicino K4003C/L4003C/N4003C/NT4003C</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>K4003C/L4003C/N4003C/NT4003C</td></tr><tr><td>Vendor</td><td>BTicino</td></tr><tr><td>Description</td><td>Light switch with neutral</td></tr><tr><td>Exposes</td><td>switch (state), action, permanent_led, led_when_on, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/K4003C-L4003C-N4003C-NT4003C.jpg" alt="BTicino K4003C/L4003C/N4003C/NT4003C"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>.</p><h3 id="permanent-led-binary" tabindex="-1"><a class="header-anchor" href="#permanent-led-binary" aria-hidden="true">#</a> Permanent_led (binary)</h3><p>Enable or disable the permanent blue LED. Value can be found in the published state on the <code>permanent_led</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;permanent_led&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> permanent_led is ON, if <code>OFF</code> OFF.</p><h3 id="led-when-on-binary" tabindex="-1"><a class="header-anchor" href="#led-when-on-binary" aria-hidden="true">#</a> Led_when_on (binary)</h3><p>Enables the LED when the light is on. Value can be found in the published state on the <code>led_when_on</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_when_on&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_when_on is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);