"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24394],{57523:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-8fd9d724",path:"/devices/TS0210.html",title:"TuYa TS0210 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0210 control via MQTT",description:"Integrate your TuYa TS0210 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-01-31T22:24:43.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Vibration (binary)",slug:"vibration-binary",children:[]},{level:3,title:"Sensitivity (enum)",slug:"sensitivity-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0210.md",git:{updatedTime:1643818659e3}}},89683:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var a=i(66252);const d=(0,a.uE)('<h1 id="tuya-ts0210" tabindex="-1"><a class="header-anchor" href="#tuya-ts0210" aria-hidden="true">#</a> TuYa TS0210</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0210</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Vibration sensor</td></tr><tr><td>Exposes</td><td>battery, vibration, sensitivity, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0210.jpg" alt="TuYa TS0210"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),o=(0,a.Uk)("How to use device type specific configuration"),r=(0,a.uE)('<ul><li><code>vibration_timeout</code>: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary" aria-hidden="true">#</a> Vibration (binary)</h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),n={},s=(0,i(83744).Z)(n,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[o])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);