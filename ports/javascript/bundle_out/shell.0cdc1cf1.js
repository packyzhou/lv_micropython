parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NbHg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.language=exports.conf=void 0;var e={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]};exports.conf=e;var r={defaultToken:"",ignoreCase:!0,tokenPostfix:".shell",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],builtins:["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"],symbols:/[=><!~?&|+\-*\/\^;\.,]+/,tokenizer:{root:[{include:"@whitespace"},[/[a-zA-Z]\w*/,{cases:{"@keywords":"keyword","@builtins":"type.identifier","@default":""}}],{include:"@strings"},{include:"@parameters"},{include:"@heredoc"},[/[{}\[\]()]/,"@brackets"],[/-+\w+/,"attribute.name"],[/@symbols/,"delimiter"],{include:"@numbers"},[/[,;]/,"delimiter"]],whitespace:[[/\s+/,"white"],[/(^#!.*$)/,"metatag"],[/(^#.*$)/,"comment"]],numbers:[[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+/,"number"]],strings:[[/'/,"string","@stringBody"],[/"/,"string","@dblStringBody"]],stringBody:[[/'/,"string","@popall"],[/./,"string"]],dblStringBody:[[/"/,"string","@popall"],[/./,"string"]],heredoc:[[/(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,["constants","white","string.heredoc.delimiter","string.heredoc","string.heredoc.delimiter"]]],parameters:[[/\$\d+/,"variable.predefined"],[/\$\w+/,"variable"],[/\$[*@#?\-$!0_]/,"variable"],[/\$'/,"variable","@parameterBodyQuote"],[/\$"/,"variable","@parameterBodyDoubleQuote"],[/\$\(/,"variable","@parameterBodyParen"],[/\$\{/,"variable","@parameterBodyCurlyBrace"]],parameterBodyQuote:[[/[^#:%*@\-!_']+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[']/,"variable","@pop"]],parameterBodyDoubleQuote:[[/[^#:%*@\-!_"]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/["]/,"variable","@pop"]],parameterBodyParen:[[/[^#:%*@\-!_)]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[)]/,"variable","@pop"]],parameterBodyCurlyBrace:[[/[^#:%*@\-!_}]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[}]/,"variable","@pop"]]}};exports.language=r;
},{}]},{},["NbHg"], null)