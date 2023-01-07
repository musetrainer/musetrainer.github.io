"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9045],{9045:(h,f,c)=>{c.r(f),c.d(f,{CapacitorMuseTrainerMidiWeb:()=>p});var u=c(8239),m=c(8384);class p extends m.WebPlugin{constructor(){super(...arguments),this.midiInputs=[],this.midiOutputs=[],this.access=null}addListener(i,a){var e=this;return(0,u.Z)(function*(){return"deviceChange"===i?(e.access||(yield e.listDevices()),e.access&&(e.access.onstatechange=()=>e.listDevices().then(t=>a(t))),{remove:(t=(0,u.Z)(function*(){e.access&&(e.access.onstatechange=()=>{})}),function(){return t.apply(this,arguments)})}):"commandReceive"===i?(e.midiInputs.forEach(t=>{t.onmidimessage=n=>{const r=n.data[0]>>4;let s=0;n.data.length>1&&(s=n.data[1]);let o=0;n.data.length>2&&(o=n.data[2]),8===r||9===r&&0===o?a({type:"noteOff",dataByte1:s,dataByte2:o}):9===r&&a({type:"noteOn",dataByte1:s,dataByte2:o})}}),{remove:function(){var t=(0,u.Z)(function*(){e.midiInputs.forEach(n=>n.onmidimessage=()=>{})});return function(){return t.apply(this,arguments)}}()}):{remove:function(){var t=(0,u.Z)(function*(){});return function(){return t.apply(this,arguments)}}()};var t})()}sendCommand({command:i,timestamp:a}){var e=this;return(0,u.Z)(function*(){e.midiOutputs.forEach(t=>{t.send(i,a)})})()}listDevices(){var i=this;return(0,u.Z)(function*(){var a,e,t;i.access=yield null===(a=navigator.requestMIDIAccess)||void 0===a?void 0:a.call(navigator,{sysex:!0});const n=[],d=[],l=i.access.inputs.values();for(let s=l.next();!s.done;s=l.next())null!==(e=s.value.name)&&void 0!==e&&e.includes("Midi Through")||n.push(s.value);const r=i.access.outputs.values();for(let s=r.next();!s.done;s=r.next())null!==(t=s.value.name)&&void 0!==t&&t.includes("Midi Through")||d.push(s.value);return i.midiInputs=n,i.midiOutputs=d,{devices:n.map(s=>`${s.manufacturer}`)}})()}}}}]);