// ==UserScript==
// @name        chiasenhac.vn
// @namespace   https://github.com/getwisp/chiasenhac_scripts
// @grant       none
// @version     0.1
// @author      wisp
// @include     http*://vn.chiasenhac.vn/mp3/*
// @include     http*://beta.chiasenhac.vn/mp3/*
// @description 16/01/2020, 19:16:02
// ==/UserScript==
var a = document.querySelector(".download_status > li:nth-child(3) > a:nth-child(1)");
a.setAttribute('href',a.href.replace(/m4a/g, "flac"));
document.querySelector(".download_status > li:nth-child(3) > a:nth-child(1)").innerHTML='<i class="material-icons">file_download</i> Link to lossless download (FLAC)';
