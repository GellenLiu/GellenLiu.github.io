(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2079a4"],{a0dc:function(e,n,t){"use strict";t.r(n),n["default"]='let options = {\n    video: {\n      cursor: "always",\n    },\n    audio: false,\n  };\nasync startCapture(displayMediaOptions: any) {\n  let that = this;\n  let captureStream = null;\n  try {\n    captureStream = await navigator.mediaDevices.getDisplayMedia(\n      displayMediaOptions\n    );\n    that.stream = captureStream;\n    that.live(captureStream);\n  } catch (err) {\n    console.error("Error: " + err);\n  }\n  return captureStream;\n} // 创建一个video标签进行播放流\nlive(stream: any) {\n  const video: any = document.getElementById("video");\n  video.srcObject = stream;\n  video.controls = true;\n  video.play();\n}'}}]);
//# sourceMappingURL=chunk-2d2079a4.9935874f.js.map