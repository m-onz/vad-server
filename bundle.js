(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// vad

var choo = require('choo')
var html = require('choo/html')
var css = 0
var persist = require('choo-persist')

;((require('sheetify/insert')("/*! TACHYONS v4.9.1 | http://tachyons.io */\n/*\n *\n *      ________            ______\n *      ___  __/_____ _________  /______  ______________________\n *      __  /  _  __ `/  ___/_  __ \\_  / / /  __ \\_  __ \\_  ___/\n *      _  /   / /_/ // /__ _  / / /  /_/ // /_/ /  / / /(__  )\n *      /_/    \\__,_/ \\___/ /_/ /_/_\\__, / \\____//_/ /_//____/\n *                                 /____/\n *\n *    TABLE OF CONTENTS\n *\n *    1. External Library Includes\n *       - Normalize.css | http://normalize.css.github.io\n *    2. Tachyons Modules\n *    3. Variables\n *       - Media Queries\n *       - Colors\n *    4. Debugging\n *       - Debug all\n *       - Debug children\n *\n */\n/* External Library Includes */\n/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml { line-height: 1.15; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ }\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody { margin: 0; }\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 { font-size: 2em; margin: .67em 0; }\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr { box-sizing: content-box; /* 1 */ height: 0; /* 1 */ overflow: visible; /* 2 */ }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre { font-family: monospace, monospace; /* 1 */ font-size: 1em; /* 2 */ }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na { background-color: transparent; }\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] { border-bottom: none; /* 1 */ text-decoration: underline; /* 2 */ -webkit-text-decoration: underline dotted; text-decoration: underline dotted; /* 2 */ }\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb, strong { font-weight: bolder; }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode, kbd, samp { font-family: monospace, monospace; /* 1 */ font-size: 1em; /* 2 */ }\n/**\n * Add the correct font size in all browsers.\n */\nsmall { font-size: 80%; }\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }\nsub { bottom: -0.25em; }\nsup { top: -0.5em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg { border-style: none; }\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton, input, optgroup, select, textarea { font-family: inherit; /* 1 */ font-size: 100%; /* 1 */ line-height: 1.15; /* 1 */ margin: 0; /* 2 */ }\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton, input {/* 1 */ overflow: visible; }\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton, select {/* 1 */ text-transform: none; }\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] { -webkit-appearance: button; }\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner { border-style: none; padding: 0; }\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring, [type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring, [type=\"submit\"]:-moz-focusring { outline: 1px dotted ButtonText; }\n/**\n * Correct the padding in Firefox.\n */\nfieldset { padding: .35em .75em .625em; }\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend { box-sizing: border-box; /* 1 */ color: inherit; /* 2 */ display: table; /* 1 */ max-width: 100%; /* 1 */ padding: 0; /* 3 */ white-space: normal; /* 1 */ }\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress { vertical-align: baseline; }\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea { overflow: auto; }\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"], [type=\"radio\"] { box-sizing: border-box; /* 1 */ padding: 0; /* 2 */ }\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button { height: auto; }\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] { -webkit-appearance: textfield; /* 1 */ outline-offset: -2px; /* 2 */ }\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration { -webkit-appearance: none; }\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button { -webkit-appearance: button; /* 1 */ font: inherit; /* 2 */ }\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails { display: block; }\n/*\n * Add the correct display in all browsers.\n */\nsummary { display: list-item; }\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate { display: none; }\n/**\n * Add the correct display in IE 10.\n */\n[hidden] { display: none; }\n/* Modules */\n/*\n\n  BOX SIZING\n\n*/\nhtml, body, div, article, aside, section, main, nav, footer, header, form,\nfieldset, legend, pre, code, a, h1, h2, h3, h4, h5, h6, p, ul, ol, li, dl, dt,\ndd, blockquote, figcaption, figure, textarea, table, td, th, tr,\ninput[type=\"email\"], input[type=\"number\"], input[type=\"password\"],\ninput[type=\"tel\"], input[type=\"text\"], input[type=\"url\"], .border-box { box-sizing: border-box; }\n/*\n\n   ASPECT RATIOS\n\n*/\n/* This is for fluid media that is embedded from third party sites like youtube, vimeo etc.\n * Wrap the outer element in aspect-ratio and then extend it with the desired ratio i.e\n * Make sure there are no height and width attributes on the embedded media.\n * Adapted from: https://github.com/suitcss/components-flex-embed\n *\n * Example:\n *\n * <div class=\"aspect-ratio aspect-ratio--16x9\">\n *  <iframe class=\"aspect-ratio--object\"></iframe>\n * </div>\n *\n * */\n.aspect-ratio { height: 0; position: relative; }\n.aspect-ratio--16x9 { padding-bottom: 56.25%; }\n.aspect-ratio--9x16 { padding-bottom: 177.77%; }\n.aspect-ratio--4x3 { padding-bottom: 75%; }\n.aspect-ratio--3x4 { padding-bottom: 133.33%; }\n.aspect-ratio--6x4 { padding-bottom: 66.6%; }\n.aspect-ratio--4x6 { padding-bottom: 150%; }\n.aspect-ratio--8x5 { padding-bottom: 62.5%; }\n.aspect-ratio--5x8 { padding-bottom: 160%; }\n.aspect-ratio--7x5 { padding-bottom: 71.42%; }\n.aspect-ratio--5x7 { padding-bottom: 140%; }\n.aspect-ratio--1x1 { padding-bottom: 100%; }\n.aspect-ratio--object { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }\n/*\n\n   IMAGES\n   Docs: http://tachyons.io/docs/elements/images/\n\n*/\n/* Responsive images! */\nimg { max-width: 100%; }\n/*\n\n   BACKGROUND SIZE\n   Docs: http://tachyons.io/docs/themes/background-size/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/*\n  Often used in combination with background image set as an inline style\n  on an html element.\n*/\n.cover { background-size: cover !important; }\n.contain { background-size: contain !important; }\n/*\n\n    BACKGROUND POSITION\n\n    Base:\n    bg = background\n\n    Modifiers:\n    -center = center center\n    -top = top center\n    -right = center right\n    -bottom = bottom center\n    -left = center left\n\n    Media Query Extensions:\n      -ns = not-small\n      -m  = medium\n      -l  = large\n\n */\n.bg-center { background-repeat: no-repeat; background-position: center center; }\n.bg-top { background-repeat: no-repeat; background-position: top center; }\n.bg-right { background-repeat: no-repeat; background-position: center right; }\n.bg-bottom { background-repeat: no-repeat; background-position: bottom center; }\n.bg-left { background-repeat: no-repeat; background-position: center left; }\n/*\n\n   OUTLINES\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.outline { outline: 1px solid; }\n.outline-transparent { outline: 1px solid transparent; }\n.outline-0 { outline: 0; }\n/*\n\n    BORDERS\n    Docs: http://tachyons.io/docs/themes/borders/\n\n    Base:\n      b = border\n\n    Modifiers:\n      a = all\n      t = top\n      r = right\n      b = bottom\n      l = left\n      n = none\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.ba { border-style: solid; border-width: 1px; }\n.bt { border-top-style: solid; border-top-width: 1px; }\n.br { border-right-style: solid; border-right-width: 1px; }\n.bb { border-bottom-style: solid; border-bottom-width: 1px; }\n.bl { border-left-style: solid; border-left-width: 1px; }\n.bn { border-style: none; border-width: 0; }\n/*\n\n   BORDER COLORS\n   Docs: http://tachyons.io/docs/themes/borders/\n\n   Border colors can be used to extend the base\n   border classes ba,bt,bb,br,bl found in the _borders.css file.\n\n   The base border class by default will set the color of the border\n   to that of the current text color. These classes are for the cases\n   where you desire for the text and border colors to be different.\n\n   Base:\n     b = border\n\n   Modifiers:\n   --color-name = each color variable name is also a border color name\n\n*/\n.b--black { border-color: #000; }\n.b--near-black { border-color: #111; }\n.b--dark-gray { border-color: #333; }\n.b--mid-gray { border-color: #555; }\n.b--gray { border-color: #777; }\n.b--silver { border-color: #999; }\n.b--light-silver { border-color: #aaa; }\n.b--moon-gray { border-color: #ccc; }\n.b--light-gray { border-color: #eee; }\n.b--near-white { border-color: #f4f4f4; }\n.b--white { border-color: #fff; }\n.b--white-90 { border-color: rgba( 255, 255, 255, .9 ); }\n.b--white-80 { border-color: rgba( 255, 255, 255, .8 ); }\n.b--white-70 { border-color: rgba( 255, 255, 255, .7 ); }\n.b--white-60 { border-color: rgba( 255, 255, 255, .6 ); }\n.b--white-50 { border-color: rgba( 255, 255, 255, .5 ); }\n.b--white-40 { border-color: rgba( 255, 255, 255, .4 ); }\n.b--white-30 { border-color: rgba( 255, 255, 255, .3 ); }\n.b--white-20 { border-color: rgba( 255, 255, 255, .2 ); }\n.b--white-10 { border-color: rgba( 255, 255, 255, .1 ); }\n.b--white-05 { border-color: rgba( 255, 255, 255, .05 ); }\n.b--white-025 { border-color: rgba( 255, 255, 255, .025 ); }\n.b--white-0125 { border-color: rgba( 255, 255, 255, .0125 ); }\n.b--black-90 { border-color: rgba( 0, 0, 0, .9 ); }\n.b--black-80 { border-color: rgba( 0, 0, 0, .8 ); }\n.b--black-70 { border-color: rgba( 0, 0, 0, .7 ); }\n.b--black-60 { border-color: rgba( 0, 0, 0, .6 ); }\n.b--black-50 { border-color: rgba( 0, 0, 0, .5 ); }\n.b--black-40 { border-color: rgba( 0, 0, 0, .4 ); }\n.b--black-30 { border-color: rgba( 0, 0, 0, .3 ); }\n.b--black-20 { border-color: rgba( 0, 0, 0, .2 ); }\n.b--black-10 { border-color: rgba( 0, 0, 0, .1 ); }\n.b--black-05 { border-color: rgba( 0, 0, 0, .05 ); }\n.b--black-025 { border-color: rgba( 0, 0, 0, .025 ); }\n.b--black-0125 { border-color: rgba( 0, 0, 0, .0125 ); }\n.b--dark-red { border-color: #e7040f; }\n.b--red { border-color: #ff4136; }\n.b--light-red { border-color: #ff725c; }\n.b--orange { border-color: #ff6300; }\n.b--gold { border-color: #ffb700; }\n.b--yellow { border-color: #ffd700; }\n.b--light-yellow { border-color: #fbf1a9; }\n.b--purple { border-color: #5e2ca5; }\n.b--light-purple { border-color: #a463f2; }\n.b--dark-pink { border-color: #d5008f; }\n.b--hot-pink { border-color: #ff41b4; }\n.b--pink { border-color: #ff80cc; }\n.b--light-pink { border-color: #ffa3d7; }\n.b--dark-green { border-color: #137752; }\n.b--green { border-color: #19a974; }\n.b--light-green { border-color: #9eebcf; }\n.b--navy { border-color: #001b44; }\n.b--dark-blue { border-color: #00449e; }\n.b--blue { border-color: #357edd; }\n.b--light-blue { border-color: #96ccff; }\n.b--lightest-blue { border-color: #cdecff; }\n.b--washed-blue { border-color: #f6fffe; }\n.b--washed-green { border-color: #e8fdf5; }\n.b--washed-yellow { border-color: #fffceb; }\n.b--washed-red { border-color: #ffdfdf; }\n.b--transparent { border-color: transparent; }\n.b--inherit { border-color: inherit; }\n/*\n\n   BORDER RADIUS\n   Docs: http://tachyons.io/docs/themes/border-radius/\n\n   Base:\n     br   = border-radius\n\n   Modifiers:\n     0    = 0/none\n     1    = 1st step in scale\n     2    = 2nd step in scale\n     3    = 3rd step in scale\n     4    = 4th step in scale\n\n   Literal values:\n     -100 = 100%\n     -pill = 9999px\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.br0 { border-radius: 0; }\n.br1 { border-radius: .125rem; }\n.br2 { border-radius: .25rem; }\n.br3 { border-radius: .5rem; }\n.br4 { border-radius: 1rem; }\n.br-100 { border-radius: 100%; }\n.br-pill { border-radius: 9999px; }\n.br--bottom { border-top-left-radius: 0; border-top-right-radius: 0; }\n.br--top { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }\n.br--right { border-top-left-radius: 0; border-bottom-left-radius: 0; }\n.br--left { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n/*\n\n   BORDER STYLES\n   Docs: http://tachyons.io/docs/themes/borders/\n\n   Depends on base border module in _borders.css\n\n   Base:\n     b = border-style\n\n   Modifiers:\n     --none   = none\n     --dotted = dotted\n     --dashed = dashed\n     --solid  = solid\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n */\n.b--dotted { border-style: dotted; }\n.b--dashed { border-style: dashed; }\n.b--solid { border-style: solid; }\n.b--none { border-style: none; }\n/*\n\n   BORDER WIDTHS\n   Docs: http://tachyons.io/docs/themes/borders/\n\n   Base:\n     bw = border-width\n\n   Modifiers:\n     0 = 0 width border\n     1 = 1st step in border-width scale\n     2 = 2nd step in border-width scale\n     3 = 3rd step in border-width scale\n     4 = 4th step in border-width scale\n     5 = 5th step in border-width scale\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.bw0 { border-width: 0; }\n.bw1 { border-width: .125rem; }\n.bw2 { border-width: .25rem; }\n.bw3 { border-width: .5rem; }\n.bw4 { border-width: 1rem; }\n.bw5 { border-width: 2rem; }\n/* Resets */\n.bt-0 { border-top-width: 0; }\n.br-0 { border-right-width: 0; }\n.bb-0 { border-bottom-width: 0; }\n.bl-0 { border-left-width: 0; }\n/*\n\n  BOX-SHADOW\n  Docs: http://tachyons.io/docs/themes/box-shadow/\n\n  Media Query Extensions:\n   -ns = not-small\n   -m  = medium\n   -l  = large\n\n */\n.shadow-1 { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }\n.shadow-2 { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }\n.shadow-3 { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }\n.shadow-4 { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }\n.shadow-5 { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }\n/*\n\n   CODE\n\n*/\n.pre { overflow-x: auto; overflow-y: hidden; overflow: scroll; }\n/*\n\n   COORDINATES\n   Docs: http://tachyons.io/docs/layout/position/\n\n   Use in combination with the position module.\n\n   Base:\n     top\n     bottom\n     right\n     left\n\n   Modifiers:\n     -0  = literal value 0\n     -1  = literal value 1\n     -2  = literal value 2\n     --1 = literal value -1\n     --2 = literal value -2\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.top-0 { top: 0; }\n.right-0 { right: 0; }\n.bottom-0 { bottom: 0; }\n.left-0 { left: 0; }\n.top-1 { top: 1rem; }\n.right-1 { right: 1rem; }\n.bottom-1 { bottom: 1rem; }\n.left-1 { left: 1rem; }\n.top-2 { top: 2rem; }\n.right-2 { right: 2rem; }\n.bottom-2 { bottom: 2rem; }\n.left-2 { left: 2rem; }\n.top--1 { top: -1rem; }\n.right--1 { right: -1rem; }\n.bottom--1 { bottom: -1rem; }\n.left--1 { left: -1rem; }\n.top--2 { top: -2rem; }\n.right--2 { right: -2rem; }\n.bottom--2 { bottom: -2rem; }\n.left--2 { left: -2rem; }\n.absolute--fill { top: 0; right: 0; bottom: 0; left: 0; }\n/*\n\n   CLEARFIX\n   http://tachyons.io/docs/layout/clearfix/\n\n*/\n/* Nicolas Gallaghers Clearfix solution\n   Ref: http://nicolasgallagher.com/micro-clearfix-hack/ */\n.cf:before, .cf:after { content: \" \"; display: table; }\n.cf:after { clear: both; }\n.cf { *zoom: 1; }\n.cl { clear: left; }\n.cr { clear: right; }\n.cb { clear: both; }\n.cn { clear: none; }\n/*\n\n   DISPLAY\n   Docs: http://tachyons.io/docs/layout/display\n\n   Base:\n    d = display\n\n   Modifiers:\n    n     = none\n    b     = block\n    ib    = inline-block\n    it    = inline-table\n    t     = table\n    tc    = table-cell\n    t-row          = table-row\n    t-columm       = table-column\n    t-column-group = table-column-group\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.dn { display: none; }\n.di { display: inline; }\n.db { display: block; }\n.dib { display: inline-block; }\n.dit { display: inline-table; }\n.dt { display: table; }\n.dtc { display: table-cell; }\n.dt-row { display: table-row; }\n.dt-row-group { display: table-row-group; }\n.dt-column { display: table-column; }\n.dt-column-group { display: table-column-group; }\n/*\n  This will set table to full width and then\n  all cells will be equal width\n*/\n.dt--fixed { table-layout: fixed; width: 100%; }\n/*\n\n  FLEXBOX\n\n  Media Query Extensions:\n   -ns = not-small\n   -m  = medium\n   -l  = large\n\n*/\n.flex { display: flex; }\n.inline-flex { display: inline-flex; }\n/* 1. Fix for Chrome 44 bug.\n * https://code.google.com/p/chromium/issues/detail?id=506893 */\n.flex-auto { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }\n.flex-none { flex: none; }\n.flex-column { flex-direction: column; }\n.flex-row { flex-direction: row; }\n.flex-wrap { flex-wrap: wrap; }\n.flex-nowrap { flex-wrap: nowrap; }\n.flex-wrap-reverse { flex-wrap: wrap-reverse; }\n.flex-column-reverse { flex-direction: column-reverse; }\n.flex-row-reverse { flex-direction: row-reverse; }\n.items-start { align-items: flex-start; }\n.items-end { align-items: flex-end; }\n.items-center { align-items: center; }\n.items-baseline { align-items: baseline; }\n.items-stretch { align-items: stretch; }\n.self-start { align-self: flex-start; }\n.self-end { align-self: flex-end; }\n.self-center { align-self: center; }\n.self-baseline { align-self: baseline; }\n.self-stretch { align-self: stretch; }\n.justify-start { justify-content: flex-start; }\n.justify-end { justify-content: flex-end; }\n.justify-center { justify-content: center; }\n.justify-between { justify-content: space-between; }\n.justify-around { justify-content: space-around; }\n.content-start { align-content: flex-start; }\n.content-end { align-content: flex-end; }\n.content-center { align-content: center; }\n.content-between { align-content: space-between; }\n.content-around { align-content: space-around; }\n.content-stretch { align-content: stretch; }\n.order-0 { order: 0; }\n.order-1 { order: 1; }\n.order-2 { order: 2; }\n.order-3 { order: 3; }\n.order-4 { order: 4; }\n.order-5 { order: 5; }\n.order-6 { order: 6; }\n.order-7 { order: 7; }\n.order-8 { order: 8; }\n.order-last { order: 99999; }\n.flex-grow-0 { flex-grow: 0; }\n.flex-grow-1 { flex-grow: 1; }\n.flex-shrink-0 { flex-shrink: 0; }\n.flex-shrink-1 { flex-shrink: 1; }\n/*\n\n   FLOATS\n   http://tachyons.io/docs/layout/floats/\n\n   1. Floated elements are automatically rendered as block level elements.\n      Setting floats to display inline will fix the double margin bug in\n      ie6. You know... just in case.\n\n   2. Don't forget to clearfix your floats with .cf\n\n   Base:\n     f = float\n\n   Modifiers:\n     l = left\n     r = right\n     n = none\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.fl { float: left; _display: inline; }\n.fr { float: right; _display: inline; }\n.fn { float: none; }\n/*\n\n   FONT FAMILY GROUPS\n   Docs: http://tachyons.io/docs/typography/font-family/\n\n*/\n.sans-serif { font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif; }\n.serif { font-family: georgia, times, serif; }\n.system-sans-serif { font-family: sans-serif; }\n.system-serif { font-family: serif; }\n/* Monospaced Typefaces (for code) */\n/* From http://cssfontstack.com */\ncode, .code { font-family: Consolas, monaco, monospace; }\n.courier { font-family: 'Courier Next', courier, monospace; }\n/* Sans-Serif Typefaces */\n.helvetica { font-family: 'helvetica neue', helvetica, sans-serif; }\n.avenir { font-family: 'avenir next', avenir, sans-serif; }\n/* Serif Typefaces */\n.athelas { font-family: athelas, georgia, serif; }\n.georgia { font-family: georgia, serif; }\n.times { font-family: times, serif; }\n.bodoni { font-family: \"Bodoni MT\", serif; }\n.calisto { font-family: \"Calisto MT\", serif; }\n.garamond { font-family: garamond, serif; }\n.baskerville { font-family: baskerville, serif; }\n/*\n\n   FONT STYLE\n   Docs: http://tachyons.io/docs/typography/font-style/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.i { font-style: italic; }\n.fs-normal { font-style: normal; }\n/*\n\n   FONT WEIGHT\n   Docs: http://tachyons.io/docs/typography/font-weight/\n\n   Base\n     fw = font-weight\n\n   Modifiers:\n     1 = literal value 100\n     2 = literal value 200\n     3 = literal value 300\n     4 = literal value 400\n     5 = literal value 500\n     6 = literal value 600\n     7 = literal value 700\n     8 = literal value 800\n     9 = literal value 900\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.normal { font-weight: normal; }\n.b { font-weight: bold; }\n.fw1 { font-weight: 100; }\n.fw2 { font-weight: 200; }\n.fw3 { font-weight: 300; }\n.fw4 { font-weight: 400; }\n.fw5 { font-weight: 500; }\n.fw6 { font-weight: 600; }\n.fw7 { font-weight: 700; }\n.fw8 { font-weight: 800; }\n.fw9 { font-weight: 900; }\n/*\n\n   FORMS\n\n*/\n.input-reset { -webkit-appearance: none; -moz-appearance: none; }\n.button-reset::-moz-focus-inner, .input-reset::-moz-focus-inner { border: 0; padding: 0; }\n/*\n\n   HEIGHTS\n   Docs: http://tachyons.io/docs/layout/heights/\n\n   Base:\n     h = height\n     min-h = min-height\n     min-vh = min-height vertical screen height\n     vh = vertical screen height\n\n   Modifiers\n     1 = 1st step in height scale\n     2 = 2nd step in height scale\n     3 = 3rd step in height scale\n     4 = 4th step in height scale\n     5 = 5th step in height scale\n\n     -25   = literal value 25%\n     -50   = literal value 50%\n     -75   = literal value 75%\n     -100  = literal value 100%\n\n     -auto = string value of auto\n     -inherit = string value of inherit\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Height Scale */\n.h1 { height: 1rem; }\n.h2 { height: 2rem; }\n.h3 { height: 4rem; }\n.h4 { height: 8rem; }\n.h5 { height: 16rem; }\n/* Height Percentages - Based off of height of parent */\n.h-25 { height: 25%; }\n.h-50 { height: 50%; }\n.h-75 { height: 75%; }\n.h-100 { height: 100%; }\n.min-h-100 { min-height: 100%; }\n/* Screen Height Percentage */\n.vh-25 { height: 25vh; }\n.vh-50 { height: 50vh; }\n.vh-75 { height: 75vh; }\n.vh-100 { height: 100vh; }\n.min-vh-100 { min-height: 100vh; }\n/* String Properties */\n.h-auto { height: auto; }\n.h-inherit { height: inherit; }\n/*\n\n   LETTER SPACING\n   Docs: http://tachyons.io/docs/typography/tracking/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.tracked { letter-spacing: .1em; }\n.tracked-tight { letter-spacing: -.05em; }\n.tracked-mega { letter-spacing: .25em; }\n/*\n\n   LINE HEIGHT / LEADING\n   Docs: http://tachyons.io/docs/typography/line-height\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.lh-solid { line-height: 1; }\n.lh-title { line-height: 1.25; }\n.lh-copy { line-height: 1.5; }\n/*\n\n   LINKS\n   Docs: http://tachyons.io/docs/elements/links/\n\n*/\n.link { text-decoration: none; transition: color .15s ease-in; }\n.link:link, .link:visited { transition: color .15s ease-in; }\n.link:hover { transition: color .15s ease-in; }\n.link:active { transition: color .15s ease-in; }\n.link:focus { transition: color .15s ease-in; outline: 1px dotted currentColor; }\n/*\n\n   LISTS\n   http://tachyons.io/docs/elements/lists/\n\n*/\n.list { list-style-type: none; }\n/*\n\n   MAX WIDTHS\n   Docs: http://tachyons.io/docs/layout/max-widths/\n\n   Base:\n     mw = max-width\n\n   Modifiers\n     1 = 1st step in width scale\n     2 = 2nd step in width scale\n     3 = 3rd step in width scale\n     4 = 4th step in width scale\n     5 = 5th step in width scale\n     6 = 6st step in width scale\n     7 = 7nd step in width scale\n     8 = 8rd step in width scale\n     9 = 9th step in width scale\n\n     -100 = literal value 100%\n\n     -none  = string value none\n\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Max Width Percentages */\n.mw-100 { max-width: 100%; }\n/* Max Width Scale */\n.mw1 { max-width: 1rem; }\n.mw2 { max-width: 2rem; }\n.mw3 { max-width: 4rem; }\n.mw4 { max-width: 8rem; }\n.mw5 { max-width: 16rem; }\n.mw6 { max-width: 32rem; }\n.mw7 { max-width: 48rem; }\n.mw8 { max-width: 64rem; }\n.mw9 { max-width: 96rem; }\n/* Max Width String Properties */\n.mw-none { max-width: none; }\n/*\n\n   WIDTHS\n   Docs: http://tachyons.io/docs/layout/widths/\n\n   Base:\n     w = width\n\n   Modifiers\n     1 = 1st step in width scale\n     2 = 2nd step in width scale\n     3 = 3rd step in width scale\n     4 = 4th step in width scale\n     5 = 5th step in width scale\n\n     -10  = literal value 10%\n     -20  = literal value 20%\n     -25  = literal value 25%\n     -30  = literal value 30%\n     -33  = literal value 33%\n     -34  = literal value 34%\n     -40  = literal value 40%\n     -50  = literal value 50%\n     -60  = literal value 60%\n     -70  = literal value 70%\n     -75  = literal value 75%\n     -80  = literal value 80%\n     -90  = literal value 90%\n     -100 = literal value 100%\n\n     -third      = 100% / 3 (Not supported in opera mini or IE8)\n     -two-thirds = 100% / 1.5 (Not supported in opera mini or IE8)\n     -auto       = string value auto\n\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Width Scale */\n.w1 { width: 1rem; }\n.w2 { width: 2rem; }\n.w3 { width: 4rem; }\n.w4 { width: 8rem; }\n.w5 { width: 16rem; }\n.w-10 { width: 10%; }\n.w-20 { width: 20%; }\n.w-25 { width: 25%; }\n.w-30 { width: 30%; }\n.w-33 { width: 33%; }\n.w-34 { width: 34%; }\n.w-40 { width: 40%; }\n.w-50 { width: 50%; }\n.w-60 { width: 60%; }\n.w-70 { width: 70%; }\n.w-75 { width: 75%; }\n.w-80 { width: 80%; }\n.w-90 { width: 90%; }\n.w-100 { width: 100%; }\n.w-third { width: calc( 100% / 3 ); }\n.w-two-thirds { width: calc( 100% / 1.5 ); }\n.w-auto { width: auto; }\n/*\n\n    OVERFLOW\n\n    Media Query Extensions:\n      -ns = not-small\n      -m  = medium\n      -l  = large\n\n */\n.overflow-visible { overflow: visible; }\n.overflow-hidden { overflow: hidden; }\n.overflow-scroll { overflow: scroll; }\n.overflow-auto { overflow: auto; }\n.overflow-x-visible { overflow-x: visible; }\n.overflow-x-hidden { overflow-x: hidden; }\n.overflow-x-scroll { overflow-x: scroll; }\n.overflow-x-auto { overflow-x: auto; }\n.overflow-y-visible { overflow-y: visible; }\n.overflow-y-hidden { overflow-y: hidden; }\n.overflow-y-scroll { overflow-y: scroll; }\n.overflow-y-auto { overflow-y: auto; }\n/*\n\n   POSITIONING\n   Docs: http://tachyons.io/docs/layout/position/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.static { position: static; }\n.relative { position: relative; }\n.absolute { position: absolute; }\n.fixed { position: fixed; }\n/*\n\n    OPACITY\n    Docs: http://tachyons.io/docs/themes/opacity/\n\n*/\n.o-100 { opacity: 1; }\n.o-90 { opacity: .9; }\n.o-80 { opacity: .8; }\n.o-70 { opacity: .7; }\n.o-60 { opacity: .6; }\n.o-50 { opacity: .5; }\n.o-40 { opacity: .4; }\n.o-30 { opacity: .3; }\n.o-20 { opacity: .2; }\n.o-10 { opacity: .1; }\n.o-05 { opacity: .05; }\n.o-025 { opacity: .025; }\n.o-0 { opacity: 0; }\n/*\n\n   ROTATIONS\n\n*/\n.rotate-45 { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }\n.rotate-90 { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }\n.rotate-135 { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }\n.rotate-180 { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }\n.rotate-225 { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }\n.rotate-270 { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }\n.rotate-315 { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }\n/*\n\n   SKINS\n   Docs: http://tachyons.io/docs/themes/skins/\n\n   Classes for setting foreground and background colors on elements.\n   If you haven't declared a border color, but set border on an element, it will\n   be set to the current text color.\n\n*/\n/* Text colors */\n.black-90 { color: rgba( 0, 0, 0, .9 ); }\n.black-80 { color: rgba( 0, 0, 0, .8 ); }\n.black-70 { color: rgba( 0, 0, 0, .7 ); }\n.black-60 { color: rgba( 0, 0, 0, .6 ); }\n.black-50 { color: rgba( 0, 0, 0, .5 ); }\n.black-40 { color: rgba( 0, 0, 0, .4 ); }\n.black-30 { color: rgba( 0, 0, 0, .3 ); }\n.black-20 { color: rgba( 0, 0, 0, .2 ); }\n.black-10 { color: rgba( 0, 0, 0, .1 ); }\n.black-05 { color: rgba( 0, 0, 0, .05 ); }\n.white-90 { color: rgba( 255, 255, 255, .9 ); }\n.white-80 { color: rgba( 255, 255, 255, .8 ); }\n.white-70 { color: rgba( 255, 255, 255, .7 ); }\n.white-60 { color: rgba( 255, 255, 255, .6 ); }\n.white-50 { color: rgba( 255, 255, 255, .5 ); }\n.white-40 { color: rgba( 255, 255, 255, .4 ); }\n.white-30 { color: rgba( 255, 255, 255, .3 ); }\n.white-20 { color: rgba( 255, 255, 255, .2 ); }\n.white-10 { color: rgba( 255, 255, 255, .1 ); }\n.black { color: #000; }\n.near-black { color: #111; }\n.dark-gray { color: #333; }\n.mid-gray { color: #555; }\n.gray { color: #777; }\n.silver { color: #999; }\n.light-silver { color: #aaa; }\n.moon-gray { color: #ccc; }\n.light-gray { color: #eee; }\n.near-white { color: #f4f4f4; }\n.white { color: #fff; }\n.dark-red { color: #e7040f; }\n.red { color: #ff4136; }\n.light-red { color: #ff725c; }\n.orange { color: #ff6300; }\n.gold { color: #ffb700; }\n.yellow { color: #ffd700; }\n.light-yellow { color: #fbf1a9; }\n.purple { color: #5e2ca5; }\n.light-purple { color: #a463f2; }\n.dark-pink { color: #d5008f; }\n.hot-pink { color: #ff41b4; }\n.pink { color: #ff80cc; }\n.light-pink { color: #ffa3d7; }\n.dark-green { color: #137752; }\n.green { color: #19a974; }\n.light-green { color: #9eebcf; }\n.navy { color: #001b44; }\n.dark-blue { color: #00449e; }\n.blue { color: #357edd; }\n.light-blue { color: #96ccff; }\n.lightest-blue { color: #cdecff; }\n.washed-blue { color: #f6fffe; }\n.washed-green { color: #e8fdf5; }\n.washed-yellow { color: #fffceb; }\n.washed-red { color: #ffdfdf; }\n.color-inherit { color: inherit; }\n.bg-black-90 { background-color: rgba( 0, 0, 0, .9 ); }\n.bg-black-80 { background-color: rgba( 0, 0, 0, .8 ); }\n.bg-black-70 { background-color: rgba( 0, 0, 0, .7 ); }\n.bg-black-60 { background-color: rgba( 0, 0, 0, .6 ); }\n.bg-black-50 { background-color: rgba( 0, 0, 0, .5 ); }\n.bg-black-40 { background-color: rgba( 0, 0, 0, .4 ); }\n.bg-black-30 { background-color: rgba( 0, 0, 0, .3 ); }\n.bg-black-20 { background-color: rgba( 0, 0, 0, .2 ); }\n.bg-black-10 { background-color: rgba( 0, 0, 0, .1 ); }\n.bg-black-05 { background-color: rgba( 0, 0, 0, .05 ); }\n.bg-white-90 { background-color: rgba( 255, 255, 255, .9 ); }\n.bg-white-80 { background-color: rgba( 255, 255, 255, .8 ); }\n.bg-white-70 { background-color: rgba( 255, 255, 255, .7 ); }\n.bg-white-60 { background-color: rgba( 255, 255, 255, .6 ); }\n.bg-white-50 { background-color: rgba( 255, 255, 255, .5 ); }\n.bg-white-40 { background-color: rgba( 255, 255, 255, .4 ); }\n.bg-white-30 { background-color: rgba( 255, 255, 255, .3 ); }\n.bg-white-20 { background-color: rgba( 255, 255, 255, .2 ); }\n.bg-white-10 { background-color: rgba( 255, 255, 255, .1 ); }\n/* Background colors */\n.bg-black { background-color: #000; }\n.bg-near-black { background-color: #111; }\n.bg-dark-gray { background-color: #333; }\n.bg-mid-gray { background-color: #555; }\n.bg-gray { background-color: #777; }\n.bg-silver { background-color: #999; }\n.bg-light-silver { background-color: #aaa; }\n.bg-moon-gray { background-color: #ccc; }\n.bg-light-gray { background-color: #eee; }\n.bg-near-white { background-color: #f4f4f4; }\n.bg-white { background-color: #fff; }\n.bg-transparent { background-color: transparent; }\n.bg-dark-red { background-color: #e7040f; }\n.bg-red { background-color: #ff4136; }\n.bg-light-red { background-color: #ff725c; }\n.bg-orange { background-color: #ff6300; }\n.bg-gold { background-color: #ffb700; }\n.bg-yellow { background-color: #ffd700; }\n.bg-light-yellow { background-color: #fbf1a9; }\n.bg-purple { background-color: #5e2ca5; }\n.bg-light-purple { background-color: #a463f2; }\n.bg-dark-pink { background-color: #d5008f; }\n.bg-hot-pink { background-color: #ff41b4; }\n.bg-pink { background-color: #ff80cc; }\n.bg-light-pink { background-color: #ffa3d7; }\n.bg-dark-green { background-color: #137752; }\n.bg-green { background-color: #19a974; }\n.bg-light-green { background-color: #9eebcf; }\n.bg-navy { background-color: #001b44; }\n.bg-dark-blue { background-color: #00449e; }\n.bg-blue { background-color: #357edd; }\n.bg-light-blue { background-color: #96ccff; }\n.bg-lightest-blue { background-color: #cdecff; }\n.bg-washed-blue { background-color: #f6fffe; }\n.bg-washed-green { background-color: #e8fdf5; }\n.bg-washed-yellow { background-color: #fffceb; }\n.bg-washed-red { background-color: #ffdfdf; }\n.bg-inherit { background-color: inherit; }\n/*\n\n   SKINS:PSEUDO\n\n   Customize the color of an element when\n   it is focused or hovered over.\n\n */\n.hover-black:hover { color: #000; }\n.hover-black:focus { color: #000; }\n.hover-near-black:hover { color: #111; }\n.hover-near-black:focus { color: #111; }\n.hover-dark-gray:hover { color: #333; }\n.hover-dark-gray:focus { color: #333; }\n.hover-mid-gray:hover { color: #555; }\n.hover-mid-gray:focus { color: #555; }\n.hover-gray:hover { color: #777; }\n.hover-gray:focus { color: #777; }\n.hover-silver:hover { color: #999; }\n.hover-silver:focus { color: #999; }\n.hover-light-silver:hover { color: #aaa; }\n.hover-light-silver:focus { color: #aaa; }\n.hover-moon-gray:hover { color: #ccc; }\n.hover-moon-gray:focus { color: #ccc; }\n.hover-light-gray:hover { color: #eee; }\n.hover-light-gray:focus { color: #eee; }\n.hover-near-white:hover { color: #f4f4f4; }\n.hover-near-white:focus { color: #f4f4f4; }\n.hover-white:hover { color: #fff; }\n.hover-white:focus { color: #fff; }\n.hover-black-90:hover { color: rgba( 0, 0, 0, .9 ); }\n.hover-black-90:focus { color: rgba( 0, 0, 0, .9 ); }\n.hover-black-80:hover { color: rgba( 0, 0, 0, .8 ); }\n.hover-black-80:focus { color: rgba( 0, 0, 0, .8 ); }\n.hover-black-70:hover { color: rgba( 0, 0, 0, .7 ); }\n.hover-black-70:focus { color: rgba( 0, 0, 0, .7 ); }\n.hover-black-60:hover { color: rgba( 0, 0, 0, .6 ); }\n.hover-black-60:focus { color: rgba( 0, 0, 0, .6 ); }\n.hover-black-50:hover { color: rgba( 0, 0, 0, .5 ); }\n.hover-black-50:focus { color: rgba( 0, 0, 0, .5 ); }\n.hover-black-40:hover { color: rgba( 0, 0, 0, .4 ); }\n.hover-black-40:focus { color: rgba( 0, 0, 0, .4 ); }\n.hover-black-30:hover { color: rgba( 0, 0, 0, .3 ); }\n.hover-black-30:focus { color: rgba( 0, 0, 0, .3 ); }\n.hover-black-20:hover { color: rgba( 0, 0, 0, .2 ); }\n.hover-black-20:focus { color: rgba( 0, 0, 0, .2 ); }\n.hover-black-10:hover { color: rgba( 0, 0, 0, .1 ); }\n.hover-black-10:focus { color: rgba( 0, 0, 0, .1 ); }\n.hover-white-90:hover { color: rgba( 255, 255, 255, .9 ); }\n.hover-white-90:focus { color: rgba( 255, 255, 255, .9 ); }\n.hover-white-80:hover { color: rgba( 255, 255, 255, .8 ); }\n.hover-white-80:focus { color: rgba( 255, 255, 255, .8 ); }\n.hover-white-70:hover { color: rgba( 255, 255, 255, .7 ); }\n.hover-white-70:focus { color: rgba( 255, 255, 255, .7 ); }\n.hover-white-60:hover { color: rgba( 255, 255, 255, .6 ); }\n.hover-white-60:focus { color: rgba( 255, 255, 255, .6 ); }\n.hover-white-50:hover { color: rgba( 255, 255, 255, .5 ); }\n.hover-white-50:focus { color: rgba( 255, 255, 255, .5 ); }\n.hover-white-40:hover { color: rgba( 255, 255, 255, .4 ); }\n.hover-white-40:focus { color: rgba( 255, 255, 255, .4 ); }\n.hover-white-30:hover { color: rgba( 255, 255, 255, .3 ); }\n.hover-white-30:focus { color: rgba( 255, 255, 255, .3 ); }\n.hover-white-20:hover { color: rgba( 255, 255, 255, .2 ); }\n.hover-white-20:focus { color: rgba( 255, 255, 255, .2 ); }\n.hover-white-10:hover { color: rgba( 255, 255, 255, .1 ); }\n.hover-white-10:focus { color: rgba( 255, 255, 255, .1 ); }\n.hover-inherit:hover, .hover-inherit:focus { color: inherit; }\n.hover-bg-black:hover { background-color: #000; }\n.hover-bg-black:focus { background-color: #000; }\n.hover-bg-near-black:hover { background-color: #111; }\n.hover-bg-near-black:focus { background-color: #111; }\n.hover-bg-dark-gray:hover { background-color: #333; }\n.hover-bg-dark-gray:focus { background-color: #333; }\n.hover-bg-mid-gray:hover { background-color: #555; }\n.hover-bg-mid-gray:focus { background-color: #555; }\n.hover-bg-gray:hover { background-color: #777; }\n.hover-bg-gray:focus { background-color: #777; }\n.hover-bg-silver:hover { background-color: #999; }\n.hover-bg-silver:focus { background-color: #999; }\n.hover-bg-light-silver:hover { background-color: #aaa; }\n.hover-bg-light-silver:focus { background-color: #aaa; }\n.hover-bg-moon-gray:hover { background-color: #ccc; }\n.hover-bg-moon-gray:focus { background-color: #ccc; }\n.hover-bg-light-gray:hover { background-color: #eee; }\n.hover-bg-light-gray:focus { background-color: #eee; }\n.hover-bg-near-white:hover { background-color: #f4f4f4; }\n.hover-bg-near-white:focus { background-color: #f4f4f4; }\n.hover-bg-white:hover { background-color: #fff; }\n.hover-bg-white:focus { background-color: #fff; }\n.hover-bg-transparent:hover { background-color: transparent; }\n.hover-bg-transparent:focus { background-color: transparent; }\n.hover-bg-black-90:hover { background-color: rgba( 0, 0, 0, .9 ); }\n.hover-bg-black-90:focus { background-color: rgba( 0, 0, 0, .9 ); }\n.hover-bg-black-80:hover { background-color: rgba( 0, 0, 0, .8 ); }\n.hover-bg-black-80:focus { background-color: rgba( 0, 0, 0, .8 ); }\n.hover-bg-black-70:hover { background-color: rgba( 0, 0, 0, .7 ); }\n.hover-bg-black-70:focus { background-color: rgba( 0, 0, 0, .7 ); }\n.hover-bg-black-60:hover { background-color: rgba( 0, 0, 0, .6 ); }\n.hover-bg-black-60:focus { background-color: rgba( 0, 0, 0, .6 ); }\n.hover-bg-black-50:hover { background-color: rgba( 0, 0, 0, .5 ); }\n.hover-bg-black-50:focus { background-color: rgba( 0, 0, 0, .5 ); }\n.hover-bg-black-40:hover { background-color: rgba( 0, 0, 0, .4 ); }\n.hover-bg-black-40:focus { background-color: rgba( 0, 0, 0, .4 ); }\n.hover-bg-black-30:hover { background-color: rgba( 0, 0, 0, .3 ); }\n.hover-bg-black-30:focus { background-color: rgba( 0, 0, 0, .3 ); }\n.hover-bg-black-20:hover { background-color: rgba( 0, 0, 0, .2 ); }\n.hover-bg-black-20:focus { background-color: rgba( 0, 0, 0, .2 ); }\n.hover-bg-black-10:hover { background-color: rgba( 0, 0, 0, .1 ); }\n.hover-bg-black-10:focus { background-color: rgba( 0, 0, 0, .1 ); }\n.hover-bg-white-90:hover { background-color: rgba( 255, 255, 255, .9 ); }\n.hover-bg-white-90:focus { background-color: rgba( 255, 255, 255, .9 ); }\n.hover-bg-white-80:hover { background-color: rgba( 255, 255, 255, .8 ); }\n.hover-bg-white-80:focus { background-color: rgba( 255, 255, 255, .8 ); }\n.hover-bg-white-70:hover { background-color: rgba( 255, 255, 255, .7 ); }\n.hover-bg-white-70:focus { background-color: rgba( 255, 255, 255, .7 ); }\n.hover-bg-white-60:hover { background-color: rgba( 255, 255, 255, .6 ); }\n.hover-bg-white-60:focus { background-color: rgba( 255, 255, 255, .6 ); }\n.hover-bg-white-50:hover { background-color: rgba( 255, 255, 255, .5 ); }\n.hover-bg-white-50:focus { background-color: rgba( 255, 255, 255, .5 ); }\n.hover-bg-white-40:hover { background-color: rgba( 255, 255, 255, .4 ); }\n.hover-bg-white-40:focus { background-color: rgba( 255, 255, 255, .4 ); }\n.hover-bg-white-30:hover { background-color: rgba( 255, 255, 255, .3 ); }\n.hover-bg-white-30:focus { background-color: rgba( 255, 255, 255, .3 ); }\n.hover-bg-white-20:hover { background-color: rgba( 255, 255, 255, .2 ); }\n.hover-bg-white-20:focus { background-color: rgba( 255, 255, 255, .2 ); }\n.hover-bg-white-10:hover { background-color: rgba( 255, 255, 255, .1 ); }\n.hover-bg-white-10:focus { background-color: rgba( 255, 255, 255, .1 ); }\n.hover-dark-red:hover { color: #e7040f; }\n.hover-dark-red:focus { color: #e7040f; }\n.hover-red:hover { color: #ff4136; }\n.hover-red:focus { color: #ff4136; }\n.hover-light-red:hover { color: #ff725c; }\n.hover-light-red:focus { color: #ff725c; }\n.hover-orange:hover { color: #ff6300; }\n.hover-orange:focus { color: #ff6300; }\n.hover-gold:hover { color: #ffb700; }\n.hover-gold:focus { color: #ffb700; }\n.hover-yellow:hover { color: #ffd700; }\n.hover-yellow:focus { color: #ffd700; }\n.hover-light-yellow:hover { color: #fbf1a9; }\n.hover-light-yellow:focus { color: #fbf1a9; }\n.hover-purple:hover { color: #5e2ca5; }\n.hover-purple:focus { color: #5e2ca5; }\n.hover-light-purple:hover { color: #a463f2; }\n.hover-light-purple:focus { color: #a463f2; }\n.hover-dark-pink:hover { color: #d5008f; }\n.hover-dark-pink:focus { color: #d5008f; }\n.hover-hot-pink:hover { color: #ff41b4; }\n.hover-hot-pink:focus { color: #ff41b4; }\n.hover-pink:hover { color: #ff80cc; }\n.hover-pink:focus { color: #ff80cc; }\n.hover-light-pink:hover { color: #ffa3d7; }\n.hover-light-pink:focus { color: #ffa3d7; }\n.hover-dark-green:hover { color: #137752; }\n.hover-dark-green:focus { color: #137752; }\n.hover-green:hover { color: #19a974; }\n.hover-green:focus { color: #19a974; }\n.hover-light-green:hover { color: #9eebcf; }\n.hover-light-green:focus { color: #9eebcf; }\n.hover-navy:hover { color: #001b44; }\n.hover-navy:focus { color: #001b44; }\n.hover-dark-blue:hover { color: #00449e; }\n.hover-dark-blue:focus { color: #00449e; }\n.hover-blue:hover { color: #357edd; }\n.hover-blue:focus { color: #357edd; }\n.hover-light-blue:hover { color: #96ccff; }\n.hover-light-blue:focus { color: #96ccff; }\n.hover-lightest-blue:hover { color: #cdecff; }\n.hover-lightest-blue:focus { color: #cdecff; }\n.hover-washed-blue:hover { color: #f6fffe; }\n.hover-washed-blue:focus { color: #f6fffe; }\n.hover-washed-green:hover { color: #e8fdf5; }\n.hover-washed-green:focus { color: #e8fdf5; }\n.hover-washed-yellow:hover { color: #fffceb; }\n.hover-washed-yellow:focus { color: #fffceb; }\n.hover-washed-red:hover { color: #ffdfdf; }\n.hover-washed-red:focus { color: #ffdfdf; }\n.hover-bg-dark-red:hover { background-color: #e7040f; }\n.hover-bg-dark-red:focus { background-color: #e7040f; }\n.hover-bg-red:hover { background-color: #ff4136; }\n.hover-bg-red:focus { background-color: #ff4136; }\n.hover-bg-light-red:hover { background-color: #ff725c; }\n.hover-bg-light-red:focus { background-color: #ff725c; }\n.hover-bg-orange:hover { background-color: #ff6300; }\n.hover-bg-orange:focus { background-color: #ff6300; }\n.hover-bg-gold:hover { background-color: #ffb700; }\n.hover-bg-gold:focus { background-color: #ffb700; }\n.hover-bg-yellow:hover { background-color: #ffd700; }\n.hover-bg-yellow:focus { background-color: #ffd700; }\n.hover-bg-light-yellow:hover { background-color: #fbf1a9; }\n.hover-bg-light-yellow:focus { background-color: #fbf1a9; }\n.hover-bg-purple:hover { background-color: #5e2ca5; }\n.hover-bg-purple:focus { background-color: #5e2ca5; }\n.hover-bg-light-purple:hover { background-color: #a463f2; }\n.hover-bg-light-purple:focus { background-color: #a463f2; }\n.hover-bg-dark-pink:hover { background-color: #d5008f; }\n.hover-bg-dark-pink:focus { background-color: #d5008f; }\n.hover-bg-hot-pink:hover { background-color: #ff41b4; }\n.hover-bg-hot-pink:focus { background-color: #ff41b4; }\n.hover-bg-pink:hover { background-color: #ff80cc; }\n.hover-bg-pink:focus { background-color: #ff80cc; }\n.hover-bg-light-pink:hover { background-color: #ffa3d7; }\n.hover-bg-light-pink:focus { background-color: #ffa3d7; }\n.hover-bg-dark-green:hover { background-color: #137752; }\n.hover-bg-dark-green:focus { background-color: #137752; }\n.hover-bg-green:hover { background-color: #19a974; }\n.hover-bg-green:focus { background-color: #19a974; }\n.hover-bg-light-green:hover { background-color: #9eebcf; }\n.hover-bg-light-green:focus { background-color: #9eebcf; }\n.hover-bg-navy:hover { background-color: #001b44; }\n.hover-bg-navy:focus { background-color: #001b44; }\n.hover-bg-dark-blue:hover { background-color: #00449e; }\n.hover-bg-dark-blue:focus { background-color: #00449e; }\n.hover-bg-blue:hover { background-color: #357edd; }\n.hover-bg-blue:focus { background-color: #357edd; }\n.hover-bg-light-blue:hover { background-color: #96ccff; }\n.hover-bg-light-blue:focus { background-color: #96ccff; }\n.hover-bg-lightest-blue:hover { background-color: #cdecff; }\n.hover-bg-lightest-blue:focus { background-color: #cdecff; }\n.hover-bg-washed-blue:hover { background-color: #f6fffe; }\n.hover-bg-washed-blue:focus { background-color: #f6fffe; }\n.hover-bg-washed-green:hover { background-color: #e8fdf5; }\n.hover-bg-washed-green:focus { background-color: #e8fdf5; }\n.hover-bg-washed-yellow:hover { background-color: #fffceb; }\n.hover-bg-washed-yellow:focus { background-color: #fffceb; }\n.hover-bg-washed-red:hover { background-color: #ffdfdf; }\n.hover-bg-washed-red:focus { background-color: #ffdfdf; }\n.hover-bg-inherit:hover, .hover-bg-inherit:focus { background-color: inherit; }\n/* Variables */\n/*\n   SPACING\n   Docs: http://tachyons.io/docs/layout/spacing/\n\n   An eight step powers of two scale ranging from 0 to 16rem.\n\n   Base:\n     p = padding\n     m = margin\n\n   Modifiers:\n     a = all\n     h = horizontal\n     v = vertical\n     t = top\n     r = right\n     b = bottom\n     l = left\n\n     0 = none\n     1 = 1st step in spacing scale\n     2 = 2nd step in spacing scale\n     3 = 3rd step in spacing scale\n     4 = 4th step in spacing scale\n     5 = 5th step in spacing scale\n     6 = 6th step in spacing scale\n     7 = 7th step in spacing scale\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.pa0 { padding: 0; }\n.pa1 { padding: .25rem; }\n.pa2 { padding: .5rem; }\n.pa3 { padding: 1rem; }\n.pa4 { padding: 2rem; }\n.pa5 { padding: 4rem; }\n.pa6 { padding: 8rem; }\n.pa7 { padding: 16rem; }\n.pl0 { padding-left: 0; }\n.pl1 { padding-left: .25rem; }\n.pl2 { padding-left: .5rem; }\n.pl3 { padding-left: 1rem; }\n.pl4 { padding-left: 2rem; }\n.pl5 { padding-left: 4rem; }\n.pl6 { padding-left: 8rem; }\n.pl7 { padding-left: 16rem; }\n.pr0 { padding-right: 0; }\n.pr1 { padding-right: .25rem; }\n.pr2 { padding-right: .5rem; }\n.pr3 { padding-right: 1rem; }\n.pr4 { padding-right: 2rem; }\n.pr5 { padding-right: 4rem; }\n.pr6 { padding-right: 8rem; }\n.pr7 { padding-right: 16rem; }\n.pb0 { padding-bottom: 0; }\n.pb1 { padding-bottom: .25rem; }\n.pb2 { padding-bottom: .5rem; }\n.pb3 { padding-bottom: 1rem; }\n.pb4 { padding-bottom: 2rem; }\n.pb5 { padding-bottom: 4rem; }\n.pb6 { padding-bottom: 8rem; }\n.pb7 { padding-bottom: 16rem; }\n.pt0 { padding-top: 0; }\n.pt1 { padding-top: .25rem; }\n.pt2 { padding-top: .5rem; }\n.pt3 { padding-top: 1rem; }\n.pt4 { padding-top: 2rem; }\n.pt5 { padding-top: 4rem; }\n.pt6 { padding-top: 8rem; }\n.pt7 { padding-top: 16rem; }\n.pv0 { padding-top: 0; padding-bottom: 0; }\n.pv1 { padding-top: .25rem; padding-bottom: .25rem; }\n.pv2 { padding-top: .5rem; padding-bottom: .5rem; }\n.pv3 { padding-top: 1rem; padding-bottom: 1rem; }\n.pv4 { padding-top: 2rem; padding-bottom: 2rem; }\n.pv5 { padding-top: 4rem; padding-bottom: 4rem; }\n.pv6 { padding-top: 8rem; padding-bottom: 8rem; }\n.pv7 { padding-top: 16rem; padding-bottom: 16rem; }\n.ph0 { padding-left: 0; padding-right: 0; }\n.ph1 { padding-left: .25rem; padding-right: .25rem; }\n.ph2 { padding-left: .5rem; padding-right: .5rem; }\n.ph3 { padding-left: 1rem; padding-right: 1rem; }\n.ph4 { padding-left: 2rem; padding-right: 2rem; }\n.ph5 { padding-left: 4rem; padding-right: 4rem; }\n.ph6 { padding-left: 8rem; padding-right: 8rem; }\n.ph7 { padding-left: 16rem; padding-right: 16rem; }\n.ma0 { margin: 0; }\n.ma1 { margin: .25rem; }\n.ma2 { margin: .5rem; }\n.ma3 { margin: 1rem; }\n.ma4 { margin: 2rem; }\n.ma5 { margin: 4rem; }\n.ma6 { margin: 8rem; }\n.ma7 { margin: 16rem; }\n.ml0 { margin-left: 0; }\n.ml1 { margin-left: .25rem; }\n.ml2 { margin-left: .5rem; }\n.ml3 { margin-left: 1rem; }\n.ml4 { margin-left: 2rem; }\n.ml5 { margin-left: 4rem; }\n.ml6 { margin-left: 8rem; }\n.ml7 { margin-left: 16rem; }\n.mr0 { margin-right: 0; }\n.mr1 { margin-right: .25rem; }\n.mr2 { margin-right: .5rem; }\n.mr3 { margin-right: 1rem; }\n.mr4 { margin-right: 2rem; }\n.mr5 { margin-right: 4rem; }\n.mr6 { margin-right: 8rem; }\n.mr7 { margin-right: 16rem; }\n.mb0 { margin-bottom: 0; }\n.mb1 { margin-bottom: .25rem; }\n.mb2 { margin-bottom: .5rem; }\n.mb3 { margin-bottom: 1rem; }\n.mb4 { margin-bottom: 2rem; }\n.mb5 { margin-bottom: 4rem; }\n.mb6 { margin-bottom: 8rem; }\n.mb7 { margin-bottom: 16rem; }\n.mt0 { margin-top: 0; }\n.mt1 { margin-top: .25rem; }\n.mt2 { margin-top: .5rem; }\n.mt3 { margin-top: 1rem; }\n.mt4 { margin-top: 2rem; }\n.mt5 { margin-top: 4rem; }\n.mt6 { margin-top: 8rem; }\n.mt7 { margin-top: 16rem; }\n.mv0 { margin-top: 0; margin-bottom: 0; }\n.mv1 { margin-top: .25rem; margin-bottom: .25rem; }\n.mv2 { margin-top: .5rem; margin-bottom: .5rem; }\n.mv3 { margin-top: 1rem; margin-bottom: 1rem; }\n.mv4 { margin-top: 2rem; margin-bottom: 2rem; }\n.mv5 { margin-top: 4rem; margin-bottom: 4rem; }\n.mv6 { margin-top: 8rem; margin-bottom: 8rem; }\n.mv7 { margin-top: 16rem; margin-bottom: 16rem; }\n.mh0 { margin-left: 0; margin-right: 0; }\n.mh1 { margin-left: .25rem; margin-right: .25rem; }\n.mh2 { margin-left: .5rem; margin-right: .5rem; }\n.mh3 { margin-left: 1rem; margin-right: 1rem; }\n.mh4 { margin-left: 2rem; margin-right: 2rem; }\n.mh5 { margin-left: 4rem; margin-right: 4rem; }\n.mh6 { margin-left: 8rem; margin-right: 8rem; }\n.mh7 { margin-left: 16rem; margin-right: 16rem; }\n/*\n   NEGATIVE MARGINS\n\n   Base:\n     n = negative\n\n   Modifiers:\n     a = all\n     t = top\n     r = right\n     b = bottom\n     l = left\n\n     1 = 1st step in spacing scale\n     2 = 2nd step in spacing scale\n     3 = 3rd step in spacing scale\n     4 = 4th step in spacing scale\n     5 = 5th step in spacing scale\n     6 = 6th step in spacing scale\n     7 = 7th step in spacing scale\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.na1 { margin: -.25rem; }\n.na2 { margin: -.5rem; }\n.na3 { margin: -1rem; }\n.na4 { margin: -2rem; }\n.na5 { margin: -4rem; }\n.na6 { margin: -8rem; }\n.na7 { margin: -16rem; }\n.nl1 { margin-left: -.25rem; }\n.nl2 { margin-left: -.5rem; }\n.nl3 { margin-left: -1rem; }\n.nl4 { margin-left: -2rem; }\n.nl5 { margin-left: -4rem; }\n.nl6 { margin-left: -8rem; }\n.nl7 { margin-left: -16rem; }\n.nr1 { margin-right: -.25rem; }\n.nr2 { margin-right: -.5rem; }\n.nr3 { margin-right: -1rem; }\n.nr4 { margin-right: -2rem; }\n.nr5 { margin-right: -4rem; }\n.nr6 { margin-right: -8rem; }\n.nr7 { margin-right: -16rem; }\n.nb1 { margin-bottom: -.25rem; }\n.nb2 { margin-bottom: -.5rem; }\n.nb3 { margin-bottom: -1rem; }\n.nb4 { margin-bottom: -2rem; }\n.nb5 { margin-bottom: -4rem; }\n.nb6 { margin-bottom: -8rem; }\n.nb7 { margin-bottom: -16rem; }\n.nt1 { margin-top: -.25rem; }\n.nt2 { margin-top: -.5rem; }\n.nt3 { margin-top: -1rem; }\n.nt4 { margin-top: -2rem; }\n.nt5 { margin-top: -4rem; }\n.nt6 { margin-top: -8rem; }\n.nt7 { margin-top: -16rem; }\n/*\n\n  TABLES\n  Docs: http://tachyons.io/docs/elements/tables/\n\n*/\n.collapse { border-collapse: collapse; border-spacing: 0; }\n.striped--light-silver:nth-child(odd) { background-color: #aaa; }\n.striped--moon-gray:nth-child(odd) { background-color: #ccc; }\n.striped--light-gray:nth-child(odd) { background-color: #eee; }\n.striped--near-white:nth-child(odd) { background-color: #f4f4f4; }\n.stripe-light:nth-child(odd) { background-color: rgba( 255, 255, 255, .1 ); }\n.stripe-dark:nth-child(odd) { background-color: rgba( 0, 0, 0, .1 ); }\n/*\n\n   TEXT DECORATION\n   Docs: http://tachyons.io/docs/typography/text-decoration/\n\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.strike { text-decoration: line-through; }\n.underline { text-decoration: underline; }\n.no-underline { text-decoration: none; }\n/*\n\n  TEXT ALIGN\n  Docs: http://tachyons.io/docs/typography/text-align/\n\n  Base\n    t = text-align\n\n  Modifiers\n    l = left\n    r = right\n    c = center\n    j = justify\n\n  Media Query Extensions:\n    -ns = not-small\n    -m  = medium\n    -l  = large\n\n*/\n.tl { text-align: left; }\n.tr { text-align: right; }\n.tc { text-align: center; }\n.tj { text-align: justify; }\n/*\n\n   TEXT TRANSFORM\n   Docs: http://tachyons.io/docs/typography/text-transform/\n\n   Base:\n     tt = text-transform\n\n   Modifiers\n     c = capitalize\n     l = lowercase\n     u = uppercase\n     n = none\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.ttc { text-transform: capitalize; }\n.ttl { text-transform: lowercase; }\n.ttu { text-transform: uppercase; }\n.ttn { text-transform: none; }\n/*\n\n   TYPE SCALE\n   Docs: http://tachyons.io/docs/typography/scale/\n\n   Base:\n    f = font-size\n\n   Modifiers\n     1 = 1st step in size scale\n     2 = 2nd step in size scale\n     3 = 3rd step in size scale\n     4 = 4th step in size scale\n     5 = 5th step in size scale\n     6 = 6th step in size scale\n     7 = 7th step in size scale\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n*/\n/*\n * For Hero/Marketing Titles\n *\n * These generally are too large for mobile\n * so be careful using them on smaller screens.\n * */\n.f-6, .f-headline { font-size: 6rem; }\n.f-5, .f-subheadline { font-size: 5rem; }\n/* Type Scale */\n.f1 { font-size: 3rem; }\n.f2 { font-size: 2.25rem; }\n.f3 { font-size: 1.5rem; }\n.f4 { font-size: 1.25rem; }\n.f5 { font-size: 1rem; }\n.f6 { font-size: .875rem; }\n.f7 { font-size: .75rem; }\n/* Small and hard to read for many people so use with extreme caution */\n/*\n\n   TYPOGRAPHY\n   http://tachyons.io/docs/typography/measure/\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Measure is limited to ~66 characters */\n.measure { max-width: 30em; }\n/* Measure is limited to ~80 characters */\n.measure-wide { max-width: 34em; }\n/* Measure is limited to ~45 characters */\n.measure-narrow { max-width: 20em; }\n/* Book paragraph style - paragraphs are indented with no vertical spacing. */\n.indent { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n.small-caps { font-variant: small-caps; }\n/* Combine this class with a width to truncate text (or just leave as is to truncate at width of containing element. */\n.truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n/*\n\n   UTILITIES\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/* Equivalent to .overflow-y-scroll */\n.overflow-container { overflow-y: scroll; }\n.center { margin-right: auto; margin-left: auto; }\n.mr-auto { margin-right: auto; }\n.ml-auto { margin-left: auto; }\n/*\n\n   VISIBILITY\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n/*\n    Text that is hidden but accessible\n    Ref: http://snook.ca/archives/html_and_css/hiding-content-for-accessibility\n*/\n.clip { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }\n/*\n\n   WHITE SPACE\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.ws-normal { white-space: normal; }\n.nowrap { white-space: nowrap; }\n.pre { white-space: pre; }\n/*\n\n   VERTICAL ALIGN\n\n   Media Query Extensions:\n     -ns = not-small\n     -m  = medium\n     -l  = large\n\n*/\n.v-base { vertical-align: baseline; }\n.v-mid { vertical-align: middle; }\n.v-top { vertical-align: top; }\n.v-btm { vertical-align: bottom; }\n/*\n\n  HOVER EFFECTS\n  Docs: http://tachyons.io/docs/themes/hovers/\n\n    - Dim\n    - Glow\n    - Hide Child\n    - Underline text\n    - Grow\n    - Pointer\n    - Shadow\n\n*/\n/*\n\n  Dim element on hover by adding the dim class.\n\n*/\n.dim { opacity: 1; transition: opacity .15s ease-in; }\n.dim:hover, .dim:focus { opacity: .5; transition: opacity .15s ease-in; }\n.dim:active { opacity: .8; transition: opacity .15s ease-out; }\n/*\n\n  Animate opacity to 100% on hover by adding the glow class.\n\n*/\n.glow { transition: opacity .15s ease-in; }\n.glow:hover, .glow:focus { opacity: 1; transition: opacity .15s ease-in; }\n/*\n\n  Hide child & reveal on hover:\n\n  Put the hide-child class on a parent element and any nested element with the\n  child class will be hidden and displayed on hover or focus.\n\n  <div class=\"hide-child\">\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n  </div>\n*/\n.hide-child .child { opacity: 0; transition: opacity .15s ease-in; }\n.hide-child:hover  .child, .hide-child:focus  .child, .hide-child:active .child { opacity: 1; transition: opacity .15s ease-in; }\n.underline-hover:hover, .underline-hover:focus { text-decoration: underline; }\n/* Can combine this with overflow-hidden to make background images grow on hover\n * even if you are using background-size: cover */\n.grow { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); transition: -webkit-transform .25s ease-out; transition: transform .25s ease-out; transition: transform .25s ease-out, -webkit-transform .25s ease-out; }\n.grow:hover, .grow:focus { -webkit-transform: scale( 1.05 ); transform: scale( 1.05 ); }\n.grow:active { -webkit-transform: scale( .90 ); transform: scale( .90 ); }\n.grow-large { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ( 0 ); transform: translateZ( 0 ); transition: -webkit-transform .25s ease-in-out; transition: transform .25s ease-in-out; transition: transform .25s ease-in-out, -webkit-transform .25s ease-in-out; }\n.grow-large:hover, .grow-large:focus { -webkit-transform: scale( 1.2 ); transform: scale( 1.2 ); }\n.grow-large:active { -webkit-transform: scale( .95 ); transform: scale( .95 ); }\n/* Add pointer on hover */\n.pointer:hover { cursor: pointer; }\n/*\n   Add shadow on hover.\n\n   Performant box-shadow animation pattern from\n   http://tobiasahlin.com/blog/how-to-animate-box-shadow/\n*/\n.shadow-hover { cursor: pointer; position: relative; transition: all .5s cubic-bezier( .165, .84, .44, 1 ); }\n.shadow-hover::after { content: ''; box-shadow: 0 0 16px 2px rgba( 0, 0, 0, .2 ); border-radius: inherit; opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; transition: opacity .5s cubic-bezier( .165, .84, .44, 1 ); }\n.shadow-hover:hover::after, .shadow-hover:focus::after { opacity: 1; }\n/* Combine with classes in skins and skins-pseudo for\n * many different transition possibilities. */\n.bg-animate, .bg-animate:hover, .bg-animate:focus { transition: background-color .15s ease-in-out; }\n/*\n\n  Z-INDEX\n\n  Base\n    z = z-index\n\n  Modifiers\n    -0 = literal value 0\n    -1 = literal value 1\n    -2 = literal value 2\n    -3 = literal value 3\n    -4 = literal value 4\n    -5 = literal value 5\n    -999 = literal value 999\n    -9999 = literal value 9999\n\n    -max = largest accepted z-index value as integer\n\n    -inherit = string value inherit\n    -initial = string value initial\n    -unset = string value unset\n\n  MDN: https://developer.mozilla.org/en/docs/Web/CSS/z-index\n  Spec: http://www.w3.org/TR/CSS2/zindex.html\n  Articles:\n    https://philipwalton.com/articles/what-no-one-told-you-about-z-index/\n\n  Tips on extending:\n  There might be a time worth using negative z-index values.\n  Or if you are using tachyons with another project, you might need to\n  adjust these values to suit your needs.\n\n*/\n.z-0 { z-index: 0; }\n.z-1 { z-index: 1; }\n.z-2 { z-index: 2; }\n.z-3 { z-index: 3; }\n.z-4 { z-index: 4; }\n.z-5 { z-index: 5; }\n.z-999 { z-index: 999; }\n.z-9999 { z-index: 9999; }\n.z-max { z-index: 2147483647; }\n.z-inherit { z-index: inherit; }\n.z-initial { z-index: initial; }\n.z-unset { z-index: unset; }\n/*\n\n    NESTED\n    Tachyons module for styling nested elements\n    that are generated by a cms.\n\n*/\n.nested-copy-line-height p, .nested-copy-line-height ul,\n.nested-copy-line-height ol { line-height: 1.5; }\n.nested-headline-line-height h1, .nested-headline-line-height h2,\n.nested-headline-line-height h3, .nested-headline-line-height h4,\n.nested-headline-line-height h5, .nested-headline-line-height h6 { line-height: 1.25; }\n.nested-list-reset ul, .nested-list-reset ol { padding-left: 0; margin-left: 0; list-style-type: none; }\n.nested-copy-indent p+p { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n.nested-copy-separator p+p { margin-top: 1.5em; }\n.nested-img img { width: 100%; max-width: 100%; display: block; }\n.nested-links a { color: #357edd; transition: color .15s ease-in; }\n.nested-links a:hover { color: #96ccff; transition: color .15s ease-in; }\n.nested-links a:focus { color: #96ccff; transition: color .15s ease-in; }\n/*\n\n  STYLES\n\n  Add custom styles here.\n\n*/\n/* Variables */\n/* Importing here will allow you to override any variables in the modules */\n/*\n\n   Tachyons\n   COLOR VARIABLES\n\n   Grayscale\n   - Solids\n   - Transparencies\n   Colors\n\n*/\n/*\n\n  CUSTOM MEDIA QUERIES\n\n  Media query values can be changed to fit your own content.\n  There are no magic bullets when it comes to media query width values.\n  They should be declared in em units - and they should be set to meet\n  the needs of your content. You can also add additional media queries,\n  or remove some of the existing ones.\n\n  These media queries can be referenced like so:\n\n  @media (--breakpoint-not-small) {\n    .medium-and-larger-specific-style {\n      background-color: red;\n    }\n  }\n\n  @media (--breakpoint-medium) {\n    .medium-screen-specific-style {\n      background-color: red;\n    }\n  }\n\n  @media (--breakpoint-large) {\n    .large-and-larger-screen-specific-style {\n      background-color: red;\n    }\n  }\n\n*/\n/* Media Queries */\n/* Debugging */\n/*\n\n  DEBUG CHILDREN\n  Docs: http://tachyons.io/docs/debug/\n\n  Just add the debug class to any element to see outlines on its\n  children.\n\n*/\n.debug * { outline: 1px solid gold; }\n.debug-white * { outline: 1px solid white; }\n.debug-black * { outline: 1px solid black; }\n/*\n\n   DEBUG GRID\n   http://tachyons.io/docs/debug-grid/\n\n   Can be useful for debugging layout issues\n   or helping to make sure things line up perfectly.\n   Just tack one of these classes onto a parent element.\n\n*/\n.debug-grid { background: transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII= ) repeat top left; }\n.debug-grid-16 { background: transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII= ) repeat top left; }\n.debug-grid-8-solid { background: white url( data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw== ) repeat top left; }\n.debug-grid-16-solid { background: white url( data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7 ) repeat top left; }\n/* Uncomment out the line below to help debug layout issues */\n/* @import './_debug'; */\n@media screen and (min-width: 30em) {\n .aspect-ratio-ns { height: 0; position: relative; }\n .aspect-ratio--16x9-ns { padding-bottom: 56.25%; }\n .aspect-ratio--9x16-ns { padding-bottom: 177.77%; }\n .aspect-ratio--4x3-ns { padding-bottom: 75%; }\n .aspect-ratio--3x4-ns { padding-bottom: 133.33%; }\n .aspect-ratio--6x4-ns { padding-bottom: 66.6%; }\n .aspect-ratio--4x6-ns { padding-bottom: 150%; }\n .aspect-ratio--8x5-ns { padding-bottom: 62.5%; }\n .aspect-ratio--5x8-ns { padding-bottom: 160%; }\n .aspect-ratio--7x5-ns { padding-bottom: 71.42%; }\n .aspect-ratio--5x7-ns { padding-bottom: 140%; }\n .aspect-ratio--1x1-ns { padding-bottom: 100%; }\n .aspect-ratio--object-ns { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }\n .cover-ns { background-size: cover !important; }\n .contain-ns { background-size: contain !important; }\n .bg-center-ns { background-repeat: no-repeat; background-position: center center; }\n .bg-top-ns { background-repeat: no-repeat; background-position: top center; }\n .bg-right-ns { background-repeat: no-repeat; background-position: center right; }\n .bg-bottom-ns { background-repeat: no-repeat; background-position: bottom center; }\n .bg-left-ns { background-repeat: no-repeat; background-position: center left; }\n .outline-ns { outline: 1px solid; }\n .outline-transparent-ns { outline: 1px solid transparent; }\n .outline-0-ns { outline: 0; }\n .ba-ns { border-style: solid; border-width: 1px; }\n .bt-ns { border-top-style: solid; border-top-width: 1px; }\n .br-ns { border-right-style: solid; border-right-width: 1px; }\n .bb-ns { border-bottom-style: solid; border-bottom-width: 1px; }\n .bl-ns { border-left-style: solid; border-left-width: 1px; }\n .bn-ns { border-style: none; border-width: 0; }\n .br0-ns { border-radius: 0; }\n .br1-ns { border-radius: .125rem; }\n .br2-ns { border-radius: .25rem; }\n .br3-ns { border-radius: .5rem; }\n .br4-ns { border-radius: 1rem; }\n .br-100-ns { border-radius: 100%; }\n .br-pill-ns { border-radius: 9999px; }\n .br--bottom-ns { border-top-left-radius: 0; border-top-right-radius: 0; }\n .br--top-ns { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }\n .br--right-ns { border-top-left-radius: 0; border-bottom-left-radius: 0; }\n .br--left-ns { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n .b--dotted-ns { border-style: dotted; }\n .b--dashed-ns { border-style: dashed; }\n .b--solid-ns { border-style: solid; }\n .b--none-ns { border-style: none; }\n .bw0-ns { border-width: 0; }\n .bw1-ns { border-width: .125rem; }\n .bw2-ns { border-width: .25rem; }\n .bw3-ns { border-width: .5rem; }\n .bw4-ns { border-width: 1rem; }\n .bw5-ns { border-width: 2rem; }\n .bt-0-ns { border-top-width: 0; }\n .br-0-ns { border-right-width: 0; }\n .bb-0-ns { border-bottom-width: 0; }\n .bl-0-ns { border-left-width: 0; }\n .shadow-1-ns { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-2-ns { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-3-ns { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-4-ns { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }\n .shadow-5-ns { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }\n .top-0-ns { top: 0; }\n .left-0-ns { left: 0; }\n .right-0-ns { right: 0; }\n .bottom-0-ns { bottom: 0; }\n .top-1-ns { top: 1rem; }\n .left-1-ns { left: 1rem; }\n .right-1-ns { right: 1rem; }\n .bottom-1-ns { bottom: 1rem; }\n .top-2-ns { top: 2rem; }\n .left-2-ns { left: 2rem; }\n .right-2-ns { right: 2rem; }\n .bottom-2-ns { bottom: 2rem; }\n .top--1-ns { top: -1rem; }\n .right--1-ns { right: -1rem; }\n .bottom--1-ns { bottom: -1rem; }\n .left--1-ns { left: -1rem; }\n .top--2-ns { top: -2rem; }\n .right--2-ns { right: -2rem; }\n .bottom--2-ns { bottom: -2rem; }\n .left--2-ns { left: -2rem; }\n .absolute--fill-ns { top: 0; right: 0; bottom: 0; left: 0; }\n .cl-ns { clear: left; }\n .cr-ns { clear: right; }\n .cb-ns { clear: both; }\n .cn-ns { clear: none; }\n .dn-ns { display: none; }\n .di-ns { display: inline; }\n .db-ns { display: block; }\n .dib-ns { display: inline-block; }\n .dit-ns { display: inline-table; }\n .dt-ns { display: table; }\n .dtc-ns { display: table-cell; }\n .dt-row-ns { display: table-row; }\n .dt-row-group-ns { display: table-row-group; }\n .dt-column-ns { display: table-column; }\n .dt-column-group-ns { display: table-column-group; }\n .dt--fixed-ns { table-layout: fixed; width: 100%; }\n .flex-ns { display: flex; }\n .inline-flex-ns { display: inline-flex; }\n .flex-auto-ns { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }\n .flex-none-ns { flex: none; }\n .flex-column-ns { flex-direction: column; }\n .flex-row-ns { flex-direction: row; }\n .flex-wrap-ns { flex-wrap: wrap; }\n .flex-nowrap-ns { flex-wrap: nowrap; }\n .flex-wrap-reverse-ns { flex-wrap: wrap-reverse; }\n .flex-column-reverse-ns { flex-direction: column-reverse; }\n .flex-row-reverse-ns { flex-direction: row-reverse; }\n .items-start-ns { align-items: flex-start; }\n .items-end-ns { align-items: flex-end; }\n .items-center-ns { align-items: center; }\n .items-baseline-ns { align-items: baseline; }\n .items-stretch-ns { align-items: stretch; }\n .self-start-ns { align-self: flex-start; }\n .self-end-ns { align-self: flex-end; }\n .self-center-ns { align-self: center; }\n .self-baseline-ns { align-self: baseline; }\n .self-stretch-ns { align-self: stretch; }\n .justify-start-ns { justify-content: flex-start; }\n .justify-end-ns { justify-content: flex-end; }\n .justify-center-ns { justify-content: center; }\n .justify-between-ns { justify-content: space-between; }\n .justify-around-ns { justify-content: space-around; }\n .content-start-ns { align-content: flex-start; }\n .content-end-ns { align-content: flex-end; }\n .content-center-ns { align-content: center; }\n .content-between-ns { align-content: space-between; }\n .content-around-ns { align-content: space-around; }\n .content-stretch-ns { align-content: stretch; }\n .order-0-ns { order: 0; }\n .order-1-ns { order: 1; }\n .order-2-ns { order: 2; }\n .order-3-ns { order: 3; }\n .order-4-ns { order: 4; }\n .order-5-ns { order: 5; }\n .order-6-ns { order: 6; }\n .order-7-ns { order: 7; }\n .order-8-ns { order: 8; }\n .order-last-ns { order: 99999; }\n .flex-grow-0-ns { flex-grow: 0; }\n .flex-grow-1-ns { flex-grow: 1; }\n .flex-shrink-0-ns { flex-shrink: 0; }\n .flex-shrink-1-ns { flex-shrink: 1; }\n .fl-ns { float: left; _display: inline; }\n .fr-ns { float: right; _display: inline; }\n .fn-ns { float: none; }\n .i-ns { font-style: italic; }\n .fs-normal-ns { font-style: normal; }\n .normal-ns { font-weight: normal; }\n .b-ns { font-weight: bold; }\n .fw1-ns { font-weight: 100; }\n .fw2-ns { font-weight: 200; }\n .fw3-ns { font-weight: 300; }\n .fw4-ns { font-weight: 400; }\n .fw5-ns { font-weight: 500; }\n .fw6-ns { font-weight: 600; }\n .fw7-ns { font-weight: 700; }\n .fw8-ns { font-weight: 800; }\n .fw9-ns { font-weight: 900; }\n .h1-ns { height: 1rem; }\n .h2-ns { height: 2rem; }\n .h3-ns { height: 4rem; }\n .h4-ns { height: 8rem; }\n .h5-ns { height: 16rem; }\n .h-25-ns { height: 25%; }\n .h-50-ns { height: 50%; }\n .h-75-ns { height: 75%; }\n .h-100-ns { height: 100%; }\n .min-h-100-ns { min-height: 100%; }\n .vh-25-ns { height: 25vh; }\n .vh-50-ns { height: 50vh; }\n .vh-75-ns { height: 75vh; }\n .vh-100-ns { height: 100vh; }\n .min-vh-100-ns { min-height: 100vh; }\n .h-auto-ns { height: auto; }\n .h-inherit-ns { height: inherit; }\n .tracked-ns { letter-spacing: .1em; }\n .tracked-tight-ns { letter-spacing: -.05em; }\n .tracked-mega-ns { letter-spacing: .25em; }\n .lh-solid-ns { line-height: 1; }\n .lh-title-ns { line-height: 1.25; }\n .lh-copy-ns { line-height: 1.5; }\n .mw-100-ns { max-width: 100%; }\n .mw1-ns { max-width: 1rem; }\n .mw2-ns { max-width: 2rem; }\n .mw3-ns { max-width: 4rem; }\n .mw4-ns { max-width: 8rem; }\n .mw5-ns { max-width: 16rem; }\n .mw6-ns { max-width: 32rem; }\n .mw7-ns { max-width: 48rem; }\n .mw8-ns { max-width: 64rem; }\n .mw9-ns { max-width: 96rem; }\n .mw-none-ns { max-width: none; }\n .w1-ns { width: 1rem; }\n .w2-ns { width: 2rem; }\n .w3-ns { width: 4rem; }\n .w4-ns { width: 8rem; }\n .w5-ns { width: 16rem; }\n .w-10-ns { width: 10%; }\n .w-20-ns { width: 20%; }\n .w-25-ns { width: 25%; }\n .w-30-ns { width: 30%; }\n .w-33-ns { width: 33%; }\n .w-34-ns { width: 34%; }\n .w-40-ns { width: 40%; }\n .w-50-ns { width: 50%; }\n .w-60-ns { width: 60%; }\n .w-70-ns { width: 70%; }\n .w-75-ns { width: 75%; }\n .w-80-ns { width: 80%; }\n .w-90-ns { width: 90%; }\n .w-100-ns { width: 100%; }\n .w-third-ns { width: calc( 100% / 3 ); }\n .w-two-thirds-ns { width: calc( 100% / 1.5 ); }\n .w-auto-ns { width: auto; }\n .overflow-visible-ns { overflow: visible; }\n .overflow-hidden-ns { overflow: hidden; }\n .overflow-scroll-ns { overflow: scroll; }\n .overflow-auto-ns { overflow: auto; }\n .overflow-x-visible-ns { overflow-x: visible; }\n .overflow-x-hidden-ns { overflow-x: hidden; }\n .overflow-x-scroll-ns { overflow-x: scroll; }\n .overflow-x-auto-ns { overflow-x: auto; }\n .overflow-y-visible-ns { overflow-y: visible; }\n .overflow-y-hidden-ns { overflow-y: hidden; }\n .overflow-y-scroll-ns { overflow-y: scroll; }\n .overflow-y-auto-ns { overflow-y: auto; }\n .static-ns { position: static; }\n .relative-ns { position: relative; }\n .absolute-ns { position: absolute; }\n .fixed-ns { position: fixed; }\n .rotate-45-ns { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }\n .rotate-90-ns { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }\n .rotate-135-ns { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }\n .rotate-180-ns { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }\n .rotate-225-ns { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }\n .rotate-270-ns { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }\n .rotate-315-ns { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }\n .pa0-ns { padding: 0; }\n .pa1-ns { padding: .25rem; }\n .pa2-ns { padding: .5rem; }\n .pa3-ns { padding: 1rem; }\n .pa4-ns { padding: 2rem; }\n .pa5-ns { padding: 4rem; }\n .pa6-ns { padding: 8rem; }\n .pa7-ns { padding: 16rem; }\n .pl0-ns { padding-left: 0; }\n .pl1-ns { padding-left: .25rem; }\n .pl2-ns { padding-left: .5rem; }\n .pl3-ns { padding-left: 1rem; }\n .pl4-ns { padding-left: 2rem; }\n .pl5-ns { padding-left: 4rem; }\n .pl6-ns { padding-left: 8rem; }\n .pl7-ns { padding-left: 16rem; }\n .pr0-ns { padding-right: 0; }\n .pr1-ns { padding-right: .25rem; }\n .pr2-ns { padding-right: .5rem; }\n .pr3-ns { padding-right: 1rem; }\n .pr4-ns { padding-right: 2rem; }\n .pr5-ns { padding-right: 4rem; }\n .pr6-ns { padding-right: 8rem; }\n .pr7-ns { padding-right: 16rem; }\n .pb0-ns { padding-bottom: 0; }\n .pb1-ns { padding-bottom: .25rem; }\n .pb2-ns { padding-bottom: .5rem; }\n .pb3-ns { padding-bottom: 1rem; }\n .pb4-ns { padding-bottom: 2rem; }\n .pb5-ns { padding-bottom: 4rem; }\n .pb6-ns { padding-bottom: 8rem; }\n .pb7-ns { padding-bottom: 16rem; }\n .pt0-ns { padding-top: 0; }\n .pt1-ns { padding-top: .25rem; }\n .pt2-ns { padding-top: .5rem; }\n .pt3-ns { padding-top: 1rem; }\n .pt4-ns { padding-top: 2rem; }\n .pt5-ns { padding-top: 4rem; }\n .pt6-ns { padding-top: 8rem; }\n .pt7-ns { padding-top: 16rem; }\n .pv0-ns { padding-top: 0; padding-bottom: 0; }\n .pv1-ns { padding-top: .25rem; padding-bottom: .25rem; }\n .pv2-ns { padding-top: .5rem; padding-bottom: .5rem; }\n .pv3-ns { padding-top: 1rem; padding-bottom: 1rem; }\n .pv4-ns { padding-top: 2rem; padding-bottom: 2rem; }\n .pv5-ns { padding-top: 4rem; padding-bottom: 4rem; }\n .pv6-ns { padding-top: 8rem; padding-bottom: 8rem; }\n .pv7-ns { padding-top: 16rem; padding-bottom: 16rem; }\n .ph0-ns { padding-left: 0; padding-right: 0; }\n .ph1-ns { padding-left: .25rem; padding-right: .25rem; }\n .ph2-ns { padding-left: .5rem; padding-right: .5rem; }\n .ph3-ns { padding-left: 1rem; padding-right: 1rem; }\n .ph4-ns { padding-left: 2rem; padding-right: 2rem; }\n .ph5-ns { padding-left: 4rem; padding-right: 4rem; }\n .ph6-ns { padding-left: 8rem; padding-right: 8rem; }\n .ph7-ns { padding-left: 16rem; padding-right: 16rem; }\n .ma0-ns { margin: 0; }\n .ma1-ns { margin: .25rem; }\n .ma2-ns { margin: .5rem; }\n .ma3-ns { margin: 1rem; }\n .ma4-ns { margin: 2rem; }\n .ma5-ns { margin: 4rem; }\n .ma6-ns { margin: 8rem; }\n .ma7-ns { margin: 16rem; }\n .ml0-ns { margin-left: 0; }\n .ml1-ns { margin-left: .25rem; }\n .ml2-ns { margin-left: .5rem; }\n .ml3-ns { margin-left: 1rem; }\n .ml4-ns { margin-left: 2rem; }\n .ml5-ns { margin-left: 4rem; }\n .ml6-ns { margin-left: 8rem; }\n .ml7-ns { margin-left: 16rem; }\n .mr0-ns { margin-right: 0; }\n .mr1-ns { margin-right: .25rem; }\n .mr2-ns { margin-right: .5rem; }\n .mr3-ns { margin-right: 1rem; }\n .mr4-ns { margin-right: 2rem; }\n .mr5-ns { margin-right: 4rem; }\n .mr6-ns { margin-right: 8rem; }\n .mr7-ns { margin-right: 16rem; }\n .mb0-ns { margin-bottom: 0; }\n .mb1-ns { margin-bottom: .25rem; }\n .mb2-ns { margin-bottom: .5rem; }\n .mb3-ns { margin-bottom: 1rem; }\n .mb4-ns { margin-bottom: 2rem; }\n .mb5-ns { margin-bottom: 4rem; }\n .mb6-ns { margin-bottom: 8rem; }\n .mb7-ns { margin-bottom: 16rem; }\n .mt0-ns { margin-top: 0; }\n .mt1-ns { margin-top: .25rem; }\n .mt2-ns { margin-top: .5rem; }\n .mt3-ns { margin-top: 1rem; }\n .mt4-ns { margin-top: 2rem; }\n .mt5-ns { margin-top: 4rem; }\n .mt6-ns { margin-top: 8rem; }\n .mt7-ns { margin-top: 16rem; }\n .mv0-ns { margin-top: 0; margin-bottom: 0; }\n .mv1-ns { margin-top: .25rem; margin-bottom: .25rem; }\n .mv2-ns { margin-top: .5rem; margin-bottom: .5rem; }\n .mv3-ns { margin-top: 1rem; margin-bottom: 1rem; }\n .mv4-ns { margin-top: 2rem; margin-bottom: 2rem; }\n .mv5-ns { margin-top: 4rem; margin-bottom: 4rem; }\n .mv6-ns { margin-top: 8rem; margin-bottom: 8rem; }\n .mv7-ns { margin-top: 16rem; margin-bottom: 16rem; }\n .mh0-ns { margin-left: 0; margin-right: 0; }\n .mh1-ns { margin-left: .25rem; margin-right: .25rem; }\n .mh2-ns { margin-left: .5rem; margin-right: .5rem; }\n .mh3-ns { margin-left: 1rem; margin-right: 1rem; }\n .mh4-ns { margin-left: 2rem; margin-right: 2rem; }\n .mh5-ns { margin-left: 4rem; margin-right: 4rem; }\n .mh6-ns { margin-left: 8rem; margin-right: 8rem; }\n .mh7-ns { margin-left: 16rem; margin-right: 16rem; }\n .na1-ns { margin: -.25rem; }\n .na2-ns { margin: -.5rem; }\n .na3-ns { margin: -1rem; }\n .na4-ns { margin: -2rem; }\n .na5-ns { margin: -4rem; }\n .na6-ns { margin: -8rem; }\n .na7-ns { margin: -16rem; }\n .nl1-ns { margin-left: -.25rem; }\n .nl2-ns { margin-left: -.5rem; }\n .nl3-ns { margin-left: -1rem; }\n .nl4-ns { margin-left: -2rem; }\n .nl5-ns { margin-left: -4rem; }\n .nl6-ns { margin-left: -8rem; }\n .nl7-ns { margin-left: -16rem; }\n .nr1-ns { margin-right: -.25rem; }\n .nr2-ns { margin-right: -.5rem; }\n .nr3-ns { margin-right: -1rem; }\n .nr4-ns { margin-right: -2rem; }\n .nr5-ns { margin-right: -4rem; }\n .nr6-ns { margin-right: -8rem; }\n .nr7-ns { margin-right: -16rem; }\n .nb1-ns { margin-bottom: -.25rem; }\n .nb2-ns { margin-bottom: -.5rem; }\n .nb3-ns { margin-bottom: -1rem; }\n .nb4-ns { margin-bottom: -2rem; }\n .nb5-ns { margin-bottom: -4rem; }\n .nb6-ns { margin-bottom: -8rem; }\n .nb7-ns { margin-bottom: -16rem; }\n .nt1-ns { margin-top: -.25rem; }\n .nt2-ns { margin-top: -.5rem; }\n .nt3-ns { margin-top: -1rem; }\n .nt4-ns { margin-top: -2rem; }\n .nt5-ns { margin-top: -4rem; }\n .nt6-ns { margin-top: -8rem; }\n .nt7-ns { margin-top: -16rem; }\n .strike-ns { text-decoration: line-through; }\n .underline-ns { text-decoration: underline; }\n .no-underline-ns { text-decoration: none; }\n .tl-ns { text-align: left; }\n .tr-ns { text-align: right; }\n .tc-ns { text-align: center; }\n .tj-ns { text-align: justify; }\n .ttc-ns { text-transform: capitalize; }\n .ttl-ns { text-transform: lowercase; }\n .ttu-ns { text-transform: uppercase; }\n .ttn-ns { text-transform: none; }\n .f-6-ns, .f-headline-ns { font-size: 6rem; }\n .f-5-ns, .f-subheadline-ns { font-size: 5rem; }\n .f1-ns { font-size: 3rem; }\n .f2-ns { font-size: 2.25rem; }\n .f3-ns { font-size: 1.5rem; }\n .f4-ns { font-size: 1.25rem; }\n .f5-ns { font-size: 1rem; }\n .f6-ns { font-size: .875rem; }\n .f7-ns { font-size: .75rem; }\n .measure-ns { max-width: 30em; }\n .measure-wide-ns { max-width: 34em; }\n .measure-narrow-ns { max-width: 20em; }\n .indent-ns { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n .small-caps-ns { font-variant: small-caps; }\n .truncate-ns { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n .center-ns { margin-right: auto; margin-left: auto; }\n .mr-auto-ns { margin-right: auto; }\n .ml-auto-ns { margin-left: auto; }\n .clip-ns { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }\n .ws-normal-ns { white-space: normal; }\n .nowrap-ns { white-space: nowrap; }\n .pre-ns { white-space: pre; }\n .v-base-ns { vertical-align: baseline; }\n .v-mid-ns { vertical-align: middle; }\n .v-top-ns { vertical-align: top; }\n .v-btm-ns { vertical-align: bottom; }\n}\n@media screen and (min-width: 30em) and (max-width: 60em) {\n .aspect-ratio-m { height: 0; position: relative; }\n .aspect-ratio--16x9-m { padding-bottom: 56.25%; }\n .aspect-ratio--9x16-m { padding-bottom: 177.77%; }\n .aspect-ratio--4x3-m { padding-bottom: 75%; }\n .aspect-ratio--3x4-m { padding-bottom: 133.33%; }\n .aspect-ratio--6x4-m { padding-bottom: 66.6%; }\n .aspect-ratio--4x6-m { padding-bottom: 150%; }\n .aspect-ratio--8x5-m { padding-bottom: 62.5%; }\n .aspect-ratio--5x8-m { padding-bottom: 160%; }\n .aspect-ratio--7x5-m { padding-bottom: 71.42%; }\n .aspect-ratio--5x7-m { padding-bottom: 140%; }\n .aspect-ratio--1x1-m { padding-bottom: 100%; }\n .aspect-ratio--object-m { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }\n .cover-m { background-size: cover !important; }\n .contain-m { background-size: contain !important; }\n .bg-center-m { background-repeat: no-repeat; background-position: center center; }\n .bg-top-m { background-repeat: no-repeat; background-position: top center; }\n .bg-right-m { background-repeat: no-repeat; background-position: center right; }\n .bg-bottom-m { background-repeat: no-repeat; background-position: bottom center; }\n .bg-left-m { background-repeat: no-repeat; background-position: center left; }\n .outline-m { outline: 1px solid; }\n .outline-transparent-m { outline: 1px solid transparent; }\n .outline-0-m { outline: 0; }\n .ba-m { border-style: solid; border-width: 1px; }\n .bt-m { border-top-style: solid; border-top-width: 1px; }\n .br-m { border-right-style: solid; border-right-width: 1px; }\n .bb-m { border-bottom-style: solid; border-bottom-width: 1px; }\n .bl-m { border-left-style: solid; border-left-width: 1px; }\n .bn-m { border-style: none; border-width: 0; }\n .br0-m { border-radius: 0; }\n .br1-m { border-radius: .125rem; }\n .br2-m { border-radius: .25rem; }\n .br3-m { border-radius: .5rem; }\n .br4-m { border-radius: 1rem; }\n .br-100-m { border-radius: 100%; }\n .br-pill-m { border-radius: 9999px; }\n .br--bottom-m { border-top-left-radius: 0; border-top-right-radius: 0; }\n .br--top-m { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }\n .br--right-m { border-top-left-radius: 0; border-bottom-left-radius: 0; }\n .br--left-m { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n .b--dotted-m { border-style: dotted; }\n .b--dashed-m { border-style: dashed; }\n .b--solid-m { border-style: solid; }\n .b--none-m { border-style: none; }\n .bw0-m { border-width: 0; }\n .bw1-m { border-width: .125rem; }\n .bw2-m { border-width: .25rem; }\n .bw3-m { border-width: .5rem; }\n .bw4-m { border-width: 1rem; }\n .bw5-m { border-width: 2rem; }\n .bt-0-m { border-top-width: 0; }\n .br-0-m { border-right-width: 0; }\n .bb-0-m { border-bottom-width: 0; }\n .bl-0-m { border-left-width: 0; }\n .shadow-1-m { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-2-m { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-3-m { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-4-m { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }\n .shadow-5-m { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }\n .top-0-m { top: 0; }\n .left-0-m { left: 0; }\n .right-0-m { right: 0; }\n .bottom-0-m { bottom: 0; }\n .top-1-m { top: 1rem; }\n .left-1-m { left: 1rem; }\n .right-1-m { right: 1rem; }\n .bottom-1-m { bottom: 1rem; }\n .top-2-m { top: 2rem; }\n .left-2-m { left: 2rem; }\n .right-2-m { right: 2rem; }\n .bottom-2-m { bottom: 2rem; }\n .top--1-m { top: -1rem; }\n .right--1-m { right: -1rem; }\n .bottom--1-m { bottom: -1rem; }\n .left--1-m { left: -1rem; }\n .top--2-m { top: -2rem; }\n .right--2-m { right: -2rem; }\n .bottom--2-m { bottom: -2rem; }\n .left--2-m { left: -2rem; }\n .absolute--fill-m { top: 0; right: 0; bottom: 0; left: 0; }\n .cl-m { clear: left; }\n .cr-m { clear: right; }\n .cb-m { clear: both; }\n .cn-m { clear: none; }\n .dn-m { display: none; }\n .di-m { display: inline; }\n .db-m { display: block; }\n .dib-m { display: inline-block; }\n .dit-m { display: inline-table; }\n .dt-m { display: table; }\n .dtc-m { display: table-cell; }\n .dt-row-m { display: table-row; }\n .dt-row-group-m { display: table-row-group; }\n .dt-column-m { display: table-column; }\n .dt-column-group-m { display: table-column-group; }\n .dt--fixed-m { table-layout: fixed; width: 100%; }\n .flex-m { display: flex; }\n .inline-flex-m { display: inline-flex; }\n .flex-auto-m { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }\n .flex-none-m { flex: none; }\n .flex-column-m { flex-direction: column; }\n .flex-row-m { flex-direction: row; }\n .flex-wrap-m { flex-wrap: wrap; }\n .flex-nowrap-m { flex-wrap: nowrap; }\n .flex-wrap-reverse-m { flex-wrap: wrap-reverse; }\n .flex-column-reverse-m { flex-direction: column-reverse; }\n .flex-row-reverse-m { flex-direction: row-reverse; }\n .items-start-m { align-items: flex-start; }\n .items-end-m { align-items: flex-end; }\n .items-center-m { align-items: center; }\n .items-baseline-m { align-items: baseline; }\n .items-stretch-m { align-items: stretch; }\n .self-start-m { align-self: flex-start; }\n .self-end-m { align-self: flex-end; }\n .self-center-m { align-self: center; }\n .self-baseline-m { align-self: baseline; }\n .self-stretch-m { align-self: stretch; }\n .justify-start-m { justify-content: flex-start; }\n .justify-end-m { justify-content: flex-end; }\n .justify-center-m { justify-content: center; }\n .justify-between-m { justify-content: space-between; }\n .justify-around-m { justify-content: space-around; }\n .content-start-m { align-content: flex-start; }\n .content-end-m { align-content: flex-end; }\n .content-center-m { align-content: center; }\n .content-between-m { align-content: space-between; }\n .content-around-m { align-content: space-around; }\n .content-stretch-m { align-content: stretch; }\n .order-0-m { order: 0; }\n .order-1-m { order: 1; }\n .order-2-m { order: 2; }\n .order-3-m { order: 3; }\n .order-4-m { order: 4; }\n .order-5-m { order: 5; }\n .order-6-m { order: 6; }\n .order-7-m { order: 7; }\n .order-8-m { order: 8; }\n .order-last-m { order: 99999; }\n .flex-grow-0-m { flex-grow: 0; }\n .flex-grow-1-m { flex-grow: 1; }\n .flex-shrink-0-m { flex-shrink: 0; }\n .flex-shrink-1-m { flex-shrink: 1; }\n .fl-m { float: left; _display: inline; }\n .fr-m { float: right; _display: inline; }\n .fn-m { float: none; }\n .i-m { font-style: italic; }\n .fs-normal-m { font-style: normal; }\n .normal-m { font-weight: normal; }\n .b-m { font-weight: bold; }\n .fw1-m { font-weight: 100; }\n .fw2-m { font-weight: 200; }\n .fw3-m { font-weight: 300; }\n .fw4-m { font-weight: 400; }\n .fw5-m { font-weight: 500; }\n .fw6-m { font-weight: 600; }\n .fw7-m { font-weight: 700; }\n .fw8-m { font-weight: 800; }\n .fw9-m { font-weight: 900; }\n .h1-m { height: 1rem; }\n .h2-m { height: 2rem; }\n .h3-m { height: 4rem; }\n .h4-m { height: 8rem; }\n .h5-m { height: 16rem; }\n .h-25-m { height: 25%; }\n .h-50-m { height: 50%; }\n .h-75-m { height: 75%; }\n .h-100-m { height: 100%; }\n .min-h-100-m { min-height: 100%; }\n .vh-25-m { height: 25vh; }\n .vh-50-m { height: 50vh; }\n .vh-75-m { height: 75vh; }\n .vh-100-m { height: 100vh; }\n .min-vh-100-m { min-height: 100vh; }\n .h-auto-m { height: auto; }\n .h-inherit-m { height: inherit; }\n .tracked-m { letter-spacing: .1em; }\n .tracked-tight-m { letter-spacing: -.05em; }\n .tracked-mega-m { letter-spacing: .25em; }\n .lh-solid-m { line-height: 1; }\n .lh-title-m { line-height: 1.25; }\n .lh-copy-m { line-height: 1.5; }\n .mw-100-m { max-width: 100%; }\n .mw1-m { max-width: 1rem; }\n .mw2-m { max-width: 2rem; }\n .mw3-m { max-width: 4rem; }\n .mw4-m { max-width: 8rem; }\n .mw5-m { max-width: 16rem; }\n .mw6-m { max-width: 32rem; }\n .mw7-m { max-width: 48rem; }\n .mw8-m { max-width: 64rem; }\n .mw9-m { max-width: 96rem; }\n .mw-none-m { max-width: none; }\n .w1-m { width: 1rem; }\n .w2-m { width: 2rem; }\n .w3-m { width: 4rem; }\n .w4-m { width: 8rem; }\n .w5-m { width: 16rem; }\n .w-10-m { width: 10%; }\n .w-20-m { width: 20%; }\n .w-25-m { width: 25%; }\n .w-30-m { width: 30%; }\n .w-33-m { width: 33%; }\n .w-34-m { width: 34%; }\n .w-40-m { width: 40%; }\n .w-50-m { width: 50%; }\n .w-60-m { width: 60%; }\n .w-70-m { width: 70%; }\n .w-75-m { width: 75%; }\n .w-80-m { width: 80%; }\n .w-90-m { width: 90%; }\n .w-100-m { width: 100%; }\n .w-third-m { width: calc( 100% / 3 ); }\n .w-two-thirds-m { width: calc( 100% / 1.5 ); }\n .w-auto-m { width: auto; }\n .overflow-visible-m { overflow: visible; }\n .overflow-hidden-m { overflow: hidden; }\n .overflow-scroll-m { overflow: scroll; }\n .overflow-auto-m { overflow: auto; }\n .overflow-x-visible-m { overflow-x: visible; }\n .overflow-x-hidden-m { overflow-x: hidden; }\n .overflow-x-scroll-m { overflow-x: scroll; }\n .overflow-x-auto-m { overflow-x: auto; }\n .overflow-y-visible-m { overflow-y: visible; }\n .overflow-y-hidden-m { overflow-y: hidden; }\n .overflow-y-scroll-m { overflow-y: scroll; }\n .overflow-y-auto-m { overflow-y: auto; }\n .static-m { position: static; }\n .relative-m { position: relative; }\n .absolute-m { position: absolute; }\n .fixed-m { position: fixed; }\n .rotate-45-m { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }\n .rotate-90-m { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }\n .rotate-135-m { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }\n .rotate-180-m { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }\n .rotate-225-m { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }\n .rotate-270-m { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }\n .rotate-315-m { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }\n .pa0-m { padding: 0; }\n .pa1-m { padding: .25rem; }\n .pa2-m { padding: .5rem; }\n .pa3-m { padding: 1rem; }\n .pa4-m { padding: 2rem; }\n .pa5-m { padding: 4rem; }\n .pa6-m { padding: 8rem; }\n .pa7-m { padding: 16rem; }\n .pl0-m { padding-left: 0; }\n .pl1-m { padding-left: .25rem; }\n .pl2-m { padding-left: .5rem; }\n .pl3-m { padding-left: 1rem; }\n .pl4-m { padding-left: 2rem; }\n .pl5-m { padding-left: 4rem; }\n .pl6-m { padding-left: 8rem; }\n .pl7-m { padding-left: 16rem; }\n .pr0-m { padding-right: 0; }\n .pr1-m { padding-right: .25rem; }\n .pr2-m { padding-right: .5rem; }\n .pr3-m { padding-right: 1rem; }\n .pr4-m { padding-right: 2rem; }\n .pr5-m { padding-right: 4rem; }\n .pr6-m { padding-right: 8rem; }\n .pr7-m { padding-right: 16rem; }\n .pb0-m { padding-bottom: 0; }\n .pb1-m { padding-bottom: .25rem; }\n .pb2-m { padding-bottom: .5rem; }\n .pb3-m { padding-bottom: 1rem; }\n .pb4-m { padding-bottom: 2rem; }\n .pb5-m { padding-bottom: 4rem; }\n .pb6-m { padding-bottom: 8rem; }\n .pb7-m { padding-bottom: 16rem; }\n .pt0-m { padding-top: 0; }\n .pt1-m { padding-top: .25rem; }\n .pt2-m { padding-top: .5rem; }\n .pt3-m { padding-top: 1rem; }\n .pt4-m { padding-top: 2rem; }\n .pt5-m { padding-top: 4rem; }\n .pt6-m { padding-top: 8rem; }\n .pt7-m { padding-top: 16rem; }\n .pv0-m { padding-top: 0; padding-bottom: 0; }\n .pv1-m { padding-top: .25rem; padding-bottom: .25rem; }\n .pv2-m { padding-top: .5rem; padding-bottom: .5rem; }\n .pv3-m { padding-top: 1rem; padding-bottom: 1rem; }\n .pv4-m { padding-top: 2rem; padding-bottom: 2rem; }\n .pv5-m { padding-top: 4rem; padding-bottom: 4rem; }\n .pv6-m { padding-top: 8rem; padding-bottom: 8rem; }\n .pv7-m { padding-top: 16rem; padding-bottom: 16rem; }\n .ph0-m { padding-left: 0; padding-right: 0; }\n .ph1-m { padding-left: .25rem; padding-right: .25rem; }\n .ph2-m { padding-left: .5rem; padding-right: .5rem; }\n .ph3-m { padding-left: 1rem; padding-right: 1rem; }\n .ph4-m { padding-left: 2rem; padding-right: 2rem; }\n .ph5-m { padding-left: 4rem; padding-right: 4rem; }\n .ph6-m { padding-left: 8rem; padding-right: 8rem; }\n .ph7-m { padding-left: 16rem; padding-right: 16rem; }\n .ma0-m { margin: 0; }\n .ma1-m { margin: .25rem; }\n .ma2-m { margin: .5rem; }\n .ma3-m { margin: 1rem; }\n .ma4-m { margin: 2rem; }\n .ma5-m { margin: 4rem; }\n .ma6-m { margin: 8rem; }\n .ma7-m { margin: 16rem; }\n .ml0-m { margin-left: 0; }\n .ml1-m { margin-left: .25rem; }\n .ml2-m { margin-left: .5rem; }\n .ml3-m { margin-left: 1rem; }\n .ml4-m { margin-left: 2rem; }\n .ml5-m { margin-left: 4rem; }\n .ml6-m { margin-left: 8rem; }\n .ml7-m { margin-left: 16rem; }\n .mr0-m { margin-right: 0; }\n .mr1-m { margin-right: .25rem; }\n .mr2-m { margin-right: .5rem; }\n .mr3-m { margin-right: 1rem; }\n .mr4-m { margin-right: 2rem; }\n .mr5-m { margin-right: 4rem; }\n .mr6-m { margin-right: 8rem; }\n .mr7-m { margin-right: 16rem; }\n .mb0-m { margin-bottom: 0; }\n .mb1-m { margin-bottom: .25rem; }\n .mb2-m { margin-bottom: .5rem; }\n .mb3-m { margin-bottom: 1rem; }\n .mb4-m { margin-bottom: 2rem; }\n .mb5-m { margin-bottom: 4rem; }\n .mb6-m { margin-bottom: 8rem; }\n .mb7-m { margin-bottom: 16rem; }\n .mt0-m { margin-top: 0; }\n .mt1-m { margin-top: .25rem; }\n .mt2-m { margin-top: .5rem; }\n .mt3-m { margin-top: 1rem; }\n .mt4-m { margin-top: 2rem; }\n .mt5-m { margin-top: 4rem; }\n .mt6-m { margin-top: 8rem; }\n .mt7-m { margin-top: 16rem; }\n .mv0-m { margin-top: 0; margin-bottom: 0; }\n .mv1-m { margin-top: .25rem; margin-bottom: .25rem; }\n .mv2-m { margin-top: .5rem; margin-bottom: .5rem; }\n .mv3-m { margin-top: 1rem; margin-bottom: 1rem; }\n .mv4-m { margin-top: 2rem; margin-bottom: 2rem; }\n .mv5-m { margin-top: 4rem; margin-bottom: 4rem; }\n .mv6-m { margin-top: 8rem; margin-bottom: 8rem; }\n .mv7-m { margin-top: 16rem; margin-bottom: 16rem; }\n .mh0-m { margin-left: 0; margin-right: 0; }\n .mh1-m { margin-left: .25rem; margin-right: .25rem; }\n .mh2-m { margin-left: .5rem; margin-right: .5rem; }\n .mh3-m { margin-left: 1rem; margin-right: 1rem; }\n .mh4-m { margin-left: 2rem; margin-right: 2rem; }\n .mh5-m { margin-left: 4rem; margin-right: 4rem; }\n .mh6-m { margin-left: 8rem; margin-right: 8rem; }\n .mh7-m { margin-left: 16rem; margin-right: 16rem; }\n .na1-m { margin: -.25rem; }\n .na2-m { margin: -.5rem; }\n .na3-m { margin: -1rem; }\n .na4-m { margin: -2rem; }\n .na5-m { margin: -4rem; }\n .na6-m { margin: -8rem; }\n .na7-m { margin: -16rem; }\n .nl1-m { margin-left: -.25rem; }\n .nl2-m { margin-left: -.5rem; }\n .nl3-m { margin-left: -1rem; }\n .nl4-m { margin-left: -2rem; }\n .nl5-m { margin-left: -4rem; }\n .nl6-m { margin-left: -8rem; }\n .nl7-m { margin-left: -16rem; }\n .nr1-m { margin-right: -.25rem; }\n .nr2-m { margin-right: -.5rem; }\n .nr3-m { margin-right: -1rem; }\n .nr4-m { margin-right: -2rem; }\n .nr5-m { margin-right: -4rem; }\n .nr6-m { margin-right: -8rem; }\n .nr7-m { margin-right: -16rem; }\n .nb1-m { margin-bottom: -.25rem; }\n .nb2-m { margin-bottom: -.5rem; }\n .nb3-m { margin-bottom: -1rem; }\n .nb4-m { margin-bottom: -2rem; }\n .nb5-m { margin-bottom: -4rem; }\n .nb6-m { margin-bottom: -8rem; }\n .nb7-m { margin-bottom: -16rem; }\n .nt1-m { margin-top: -.25rem; }\n .nt2-m { margin-top: -.5rem; }\n .nt3-m { margin-top: -1rem; }\n .nt4-m { margin-top: -2rem; }\n .nt5-m { margin-top: -4rem; }\n .nt6-m { margin-top: -8rem; }\n .nt7-m { margin-top: -16rem; }\n .strike-m { text-decoration: line-through; }\n .underline-m { text-decoration: underline; }\n .no-underline-m { text-decoration: none; }\n .tl-m { text-align: left; }\n .tr-m { text-align: right; }\n .tc-m { text-align: center; }\n .tj-m { text-align: justify; }\n .ttc-m { text-transform: capitalize; }\n .ttl-m { text-transform: lowercase; }\n .ttu-m { text-transform: uppercase; }\n .ttn-m { text-transform: none; }\n .f-6-m, .f-headline-m { font-size: 6rem; }\n .f-5-m, .f-subheadline-m { font-size: 5rem; }\n .f1-m { font-size: 3rem; }\n .f2-m { font-size: 2.25rem; }\n .f3-m { font-size: 1.5rem; }\n .f4-m { font-size: 1.25rem; }\n .f5-m { font-size: 1rem; }\n .f6-m { font-size: .875rem; }\n .f7-m { font-size: .75rem; }\n .measure-m { max-width: 30em; }\n .measure-wide-m { max-width: 34em; }\n .measure-narrow-m { max-width: 20em; }\n .indent-m { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n .small-caps-m { font-variant: small-caps; }\n .truncate-m { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n .center-m { margin-right: auto; margin-left: auto; }\n .mr-auto-m { margin-right: auto; }\n .ml-auto-m { margin-left: auto; }\n .clip-m { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }\n .ws-normal-m { white-space: normal; }\n .nowrap-m { white-space: nowrap; }\n .pre-m { white-space: pre; }\n .v-base-m { vertical-align: baseline; }\n .v-mid-m { vertical-align: middle; }\n .v-top-m { vertical-align: top; }\n .v-btm-m { vertical-align: bottom; }\n}\n@media screen and (min-width: 60em) {\n .aspect-ratio-l { height: 0; position: relative; }\n .aspect-ratio--16x9-l { padding-bottom: 56.25%; }\n .aspect-ratio--9x16-l { padding-bottom: 177.77%; }\n .aspect-ratio--4x3-l { padding-bottom: 75%; }\n .aspect-ratio--3x4-l { padding-bottom: 133.33%; }\n .aspect-ratio--6x4-l { padding-bottom: 66.6%; }\n .aspect-ratio--4x6-l { padding-bottom: 150%; }\n .aspect-ratio--8x5-l { padding-bottom: 62.5%; }\n .aspect-ratio--5x8-l { padding-bottom: 160%; }\n .aspect-ratio--7x5-l { padding-bottom: 71.42%; }\n .aspect-ratio--5x7-l { padding-bottom: 140%; }\n .aspect-ratio--1x1-l { padding-bottom: 100%; }\n .aspect-ratio--object-l { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }\n .cover-l { background-size: cover !important; }\n .contain-l { background-size: contain !important; }\n .bg-center-l { background-repeat: no-repeat; background-position: center center; }\n .bg-top-l { background-repeat: no-repeat; background-position: top center; }\n .bg-right-l { background-repeat: no-repeat; background-position: center right; }\n .bg-bottom-l { background-repeat: no-repeat; background-position: bottom center; }\n .bg-left-l { background-repeat: no-repeat; background-position: center left; }\n .outline-l { outline: 1px solid; }\n .outline-transparent-l { outline: 1px solid transparent; }\n .outline-0-l { outline: 0; }\n .ba-l { border-style: solid; border-width: 1px; }\n .bt-l { border-top-style: solid; border-top-width: 1px; }\n .br-l { border-right-style: solid; border-right-width: 1px; }\n .bb-l { border-bottom-style: solid; border-bottom-width: 1px; }\n .bl-l { border-left-style: solid; border-left-width: 1px; }\n .bn-l { border-style: none; border-width: 0; }\n .br0-l { border-radius: 0; }\n .br1-l { border-radius: .125rem; }\n .br2-l { border-radius: .25rem; }\n .br3-l { border-radius: .5rem; }\n .br4-l { border-radius: 1rem; }\n .br-100-l { border-radius: 100%; }\n .br-pill-l { border-radius: 9999px; }\n .br--bottom-l { border-top-left-radius: 0; border-top-right-radius: 0; }\n .br--top-l { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }\n .br--right-l { border-top-left-radius: 0; border-bottom-left-radius: 0; }\n .br--left-l { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n .b--dotted-l { border-style: dotted; }\n .b--dashed-l { border-style: dashed; }\n .b--solid-l { border-style: solid; }\n .b--none-l { border-style: none; }\n .bw0-l { border-width: 0; }\n .bw1-l { border-width: .125rem; }\n .bw2-l { border-width: .25rem; }\n .bw3-l { border-width: .5rem; }\n .bw4-l { border-width: 1rem; }\n .bw5-l { border-width: 2rem; }\n .bt-0-l { border-top-width: 0; }\n .br-0-l { border-right-width: 0; }\n .bb-0-l { border-bottom-width: 0; }\n .bl-0-l { border-left-width: 0; }\n .shadow-1-l { box-shadow: 0 0 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-2-l { box-shadow: 0 0 8px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-3-l { box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, .2 ); }\n .shadow-4-l { box-shadow: 2px 2px 8px 0 rgba( 0, 0, 0, .2 ); }\n .shadow-5-l { box-shadow: 4px 4px 8px 0 rgba( 0, 0, 0, .2 ); }\n .top-0-l { top: 0; }\n .left-0-l { left: 0; }\n .right-0-l { right: 0; }\n .bottom-0-l { bottom: 0; }\n .top-1-l { top: 1rem; }\n .left-1-l { left: 1rem; }\n .right-1-l { right: 1rem; }\n .bottom-1-l { bottom: 1rem; }\n .top-2-l { top: 2rem; }\n .left-2-l { left: 2rem; }\n .right-2-l { right: 2rem; }\n .bottom-2-l { bottom: 2rem; }\n .top--1-l { top: -1rem; }\n .right--1-l { right: -1rem; }\n .bottom--1-l { bottom: -1rem; }\n .left--1-l { left: -1rem; }\n .top--2-l { top: -2rem; }\n .right--2-l { right: -2rem; }\n .bottom--2-l { bottom: -2rem; }\n .left--2-l { left: -2rem; }\n .absolute--fill-l { top: 0; right: 0; bottom: 0; left: 0; }\n .cl-l { clear: left; }\n .cr-l { clear: right; }\n .cb-l { clear: both; }\n .cn-l { clear: none; }\n .dn-l { display: none; }\n .di-l { display: inline; }\n .db-l { display: block; }\n .dib-l { display: inline-block; }\n .dit-l { display: inline-table; }\n .dt-l { display: table; }\n .dtc-l { display: table-cell; }\n .dt-row-l { display: table-row; }\n .dt-row-group-l { display: table-row-group; }\n .dt-column-l { display: table-column; }\n .dt-column-group-l { display: table-column-group; }\n .dt--fixed-l { table-layout: fixed; width: 100%; }\n .flex-l { display: flex; }\n .inline-flex-l { display: inline-flex; }\n .flex-auto-l { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }\n .flex-none-l { flex: none; }\n .flex-column-l { flex-direction: column; }\n .flex-row-l { flex-direction: row; }\n .flex-wrap-l { flex-wrap: wrap; }\n .flex-nowrap-l { flex-wrap: nowrap; }\n .flex-wrap-reverse-l { flex-wrap: wrap-reverse; }\n .flex-column-reverse-l { flex-direction: column-reverse; }\n .flex-row-reverse-l { flex-direction: row-reverse; }\n .items-start-l { align-items: flex-start; }\n .items-end-l { align-items: flex-end; }\n .items-center-l { align-items: center; }\n .items-baseline-l { align-items: baseline; }\n .items-stretch-l { align-items: stretch; }\n .self-start-l { align-self: flex-start; }\n .self-end-l { align-self: flex-end; }\n .self-center-l { align-self: center; }\n .self-baseline-l { align-self: baseline; }\n .self-stretch-l { align-self: stretch; }\n .justify-start-l { justify-content: flex-start; }\n .justify-end-l { justify-content: flex-end; }\n .justify-center-l { justify-content: center; }\n .justify-between-l { justify-content: space-between; }\n .justify-around-l { justify-content: space-around; }\n .content-start-l { align-content: flex-start; }\n .content-end-l { align-content: flex-end; }\n .content-center-l { align-content: center; }\n .content-between-l { align-content: space-between; }\n .content-around-l { align-content: space-around; }\n .content-stretch-l { align-content: stretch; }\n .order-0-l { order: 0; }\n .order-1-l { order: 1; }\n .order-2-l { order: 2; }\n .order-3-l { order: 3; }\n .order-4-l { order: 4; }\n .order-5-l { order: 5; }\n .order-6-l { order: 6; }\n .order-7-l { order: 7; }\n .order-8-l { order: 8; }\n .order-last-l { order: 99999; }\n .flex-grow-0-l { flex-grow: 0; }\n .flex-grow-1-l { flex-grow: 1; }\n .flex-shrink-0-l { flex-shrink: 0; }\n .flex-shrink-1-l { flex-shrink: 1; }\n .fl-l { float: left; _display: inline; }\n .fr-l { float: right; _display: inline; }\n .fn-l { float: none; }\n .i-l { font-style: italic; }\n .fs-normal-l { font-style: normal; }\n .normal-l { font-weight: normal; }\n .b-l { font-weight: bold; }\n .fw1-l { font-weight: 100; }\n .fw2-l { font-weight: 200; }\n .fw3-l { font-weight: 300; }\n .fw4-l { font-weight: 400; }\n .fw5-l { font-weight: 500; }\n .fw6-l { font-weight: 600; }\n .fw7-l { font-weight: 700; }\n .fw8-l { font-weight: 800; }\n .fw9-l { font-weight: 900; }\n .h1-l { height: 1rem; }\n .h2-l { height: 2rem; }\n .h3-l { height: 4rem; }\n .h4-l { height: 8rem; }\n .h5-l { height: 16rem; }\n .h-25-l { height: 25%; }\n .h-50-l { height: 50%; }\n .h-75-l { height: 75%; }\n .h-100-l { height: 100%; }\n .min-h-100-l { min-height: 100%; }\n .vh-25-l { height: 25vh; }\n .vh-50-l { height: 50vh; }\n .vh-75-l { height: 75vh; }\n .vh-100-l { height: 100vh; }\n .min-vh-100-l { min-height: 100vh; }\n .h-auto-l { height: auto; }\n .h-inherit-l { height: inherit; }\n .tracked-l { letter-spacing: .1em; }\n .tracked-tight-l { letter-spacing: -.05em; }\n .tracked-mega-l { letter-spacing: .25em; }\n .lh-solid-l { line-height: 1; }\n .lh-title-l { line-height: 1.25; }\n .lh-copy-l { line-height: 1.5; }\n .mw-100-l { max-width: 100%; }\n .mw1-l { max-width: 1rem; }\n .mw2-l { max-width: 2rem; }\n .mw3-l { max-width: 4rem; }\n .mw4-l { max-width: 8rem; }\n .mw5-l { max-width: 16rem; }\n .mw6-l { max-width: 32rem; }\n .mw7-l { max-width: 48rem; }\n .mw8-l { max-width: 64rem; }\n .mw9-l { max-width: 96rem; }\n .mw-none-l { max-width: none; }\n .w1-l { width: 1rem; }\n .w2-l { width: 2rem; }\n .w3-l { width: 4rem; }\n .w4-l { width: 8rem; }\n .w5-l { width: 16rem; }\n .w-10-l { width: 10%; }\n .w-20-l { width: 20%; }\n .w-25-l { width: 25%; }\n .w-30-l { width: 30%; }\n .w-33-l { width: 33%; }\n .w-34-l { width: 34%; }\n .w-40-l { width: 40%; }\n .w-50-l { width: 50%; }\n .w-60-l { width: 60%; }\n .w-70-l { width: 70%; }\n .w-75-l { width: 75%; }\n .w-80-l { width: 80%; }\n .w-90-l { width: 90%; }\n .w-100-l { width: 100%; }\n .w-third-l { width: calc( 100% / 3 ); }\n .w-two-thirds-l { width: calc( 100% / 1.5 ); }\n .w-auto-l { width: auto; }\n .overflow-visible-l { overflow: visible; }\n .overflow-hidden-l { overflow: hidden; }\n .overflow-scroll-l { overflow: scroll; }\n .overflow-auto-l { overflow: auto; }\n .overflow-x-visible-l { overflow-x: visible; }\n .overflow-x-hidden-l { overflow-x: hidden; }\n .overflow-x-scroll-l { overflow-x: scroll; }\n .overflow-x-auto-l { overflow-x: auto; }\n .overflow-y-visible-l { overflow-y: visible; }\n .overflow-y-hidden-l { overflow-y: hidden; }\n .overflow-y-scroll-l { overflow-y: scroll; }\n .overflow-y-auto-l { overflow-y: auto; }\n .static-l { position: static; }\n .relative-l { position: relative; }\n .absolute-l { position: absolute; }\n .fixed-l { position: fixed; }\n .rotate-45-l { -webkit-transform: rotate( 45deg ); transform: rotate( 45deg ); }\n .rotate-90-l { -webkit-transform: rotate( 90deg ); transform: rotate( 90deg ); }\n .rotate-135-l { -webkit-transform: rotate( 135deg ); transform: rotate( 135deg ); }\n .rotate-180-l { -webkit-transform: rotate( 180deg ); transform: rotate( 180deg ); }\n .rotate-225-l { -webkit-transform: rotate( 225deg ); transform: rotate( 225deg ); }\n .rotate-270-l { -webkit-transform: rotate( 270deg ); transform: rotate( 270deg ); }\n .rotate-315-l { -webkit-transform: rotate( 315deg ); transform: rotate( 315deg ); }\n .pa0-l { padding: 0; }\n .pa1-l { padding: .25rem; }\n .pa2-l { padding: .5rem; }\n .pa3-l { padding: 1rem; }\n .pa4-l { padding: 2rem; }\n .pa5-l { padding: 4rem; }\n .pa6-l { padding: 8rem; }\n .pa7-l { padding: 16rem; }\n .pl0-l { padding-left: 0; }\n .pl1-l { padding-left: .25rem; }\n .pl2-l { padding-left: .5rem; }\n .pl3-l { padding-left: 1rem; }\n .pl4-l { padding-left: 2rem; }\n .pl5-l { padding-left: 4rem; }\n .pl6-l { padding-left: 8rem; }\n .pl7-l { padding-left: 16rem; }\n .pr0-l { padding-right: 0; }\n .pr1-l { padding-right: .25rem; }\n .pr2-l { padding-right: .5rem; }\n .pr3-l { padding-right: 1rem; }\n .pr4-l { padding-right: 2rem; }\n .pr5-l { padding-right: 4rem; }\n .pr6-l { padding-right: 8rem; }\n .pr7-l { padding-right: 16rem; }\n .pb0-l { padding-bottom: 0; }\n .pb1-l { padding-bottom: .25rem; }\n .pb2-l { padding-bottom: .5rem; }\n .pb3-l { padding-bottom: 1rem; }\n .pb4-l { padding-bottom: 2rem; }\n .pb5-l { padding-bottom: 4rem; }\n .pb6-l { padding-bottom: 8rem; }\n .pb7-l { padding-bottom: 16rem; }\n .pt0-l { padding-top: 0; }\n .pt1-l { padding-top: .25rem; }\n .pt2-l { padding-top: .5rem; }\n .pt3-l { padding-top: 1rem; }\n .pt4-l { padding-top: 2rem; }\n .pt5-l { padding-top: 4rem; }\n .pt6-l { padding-top: 8rem; }\n .pt7-l { padding-top: 16rem; }\n .pv0-l { padding-top: 0; padding-bottom: 0; }\n .pv1-l { padding-top: .25rem; padding-bottom: .25rem; }\n .pv2-l { padding-top: .5rem; padding-bottom: .5rem; }\n .pv3-l { padding-top: 1rem; padding-bottom: 1rem; }\n .pv4-l { padding-top: 2rem; padding-bottom: 2rem; }\n .pv5-l { padding-top: 4rem; padding-bottom: 4rem; }\n .pv6-l { padding-top: 8rem; padding-bottom: 8rem; }\n .pv7-l { padding-top: 16rem; padding-bottom: 16rem; }\n .ph0-l { padding-left: 0; padding-right: 0; }\n .ph1-l { padding-left: .25rem; padding-right: .25rem; }\n .ph2-l { padding-left: .5rem; padding-right: .5rem; }\n .ph3-l { padding-left: 1rem; padding-right: 1rem; }\n .ph4-l { padding-left: 2rem; padding-right: 2rem; }\n .ph5-l { padding-left: 4rem; padding-right: 4rem; }\n .ph6-l { padding-left: 8rem; padding-right: 8rem; }\n .ph7-l { padding-left: 16rem; padding-right: 16rem; }\n .ma0-l { margin: 0; }\n .ma1-l { margin: .25rem; }\n .ma2-l { margin: .5rem; }\n .ma3-l { margin: 1rem; }\n .ma4-l { margin: 2rem; }\n .ma5-l { margin: 4rem; }\n .ma6-l { margin: 8rem; }\n .ma7-l { margin: 16rem; }\n .ml0-l { margin-left: 0; }\n .ml1-l { margin-left: .25rem; }\n .ml2-l { margin-left: .5rem; }\n .ml3-l { margin-left: 1rem; }\n .ml4-l { margin-left: 2rem; }\n .ml5-l { margin-left: 4rem; }\n .ml6-l { margin-left: 8rem; }\n .ml7-l { margin-left: 16rem; }\n .mr0-l { margin-right: 0; }\n .mr1-l { margin-right: .25rem; }\n .mr2-l { margin-right: .5rem; }\n .mr3-l { margin-right: 1rem; }\n .mr4-l { margin-right: 2rem; }\n .mr5-l { margin-right: 4rem; }\n .mr6-l { margin-right: 8rem; }\n .mr7-l { margin-right: 16rem; }\n .mb0-l { margin-bottom: 0; }\n .mb1-l { margin-bottom: .25rem; }\n .mb2-l { margin-bottom: .5rem; }\n .mb3-l { margin-bottom: 1rem; }\n .mb4-l { margin-bottom: 2rem; }\n .mb5-l { margin-bottom: 4rem; }\n .mb6-l { margin-bottom: 8rem; }\n .mb7-l { margin-bottom: 16rem; }\n .mt0-l { margin-top: 0; }\n .mt1-l { margin-top: .25rem; }\n .mt2-l { margin-top: .5rem; }\n .mt3-l { margin-top: 1rem; }\n .mt4-l { margin-top: 2rem; }\n .mt5-l { margin-top: 4rem; }\n .mt6-l { margin-top: 8rem; }\n .mt7-l { margin-top: 16rem; }\n .mv0-l { margin-top: 0; margin-bottom: 0; }\n .mv1-l { margin-top: .25rem; margin-bottom: .25rem; }\n .mv2-l { margin-top: .5rem; margin-bottom: .5rem; }\n .mv3-l { margin-top: 1rem; margin-bottom: 1rem; }\n .mv4-l { margin-top: 2rem; margin-bottom: 2rem; }\n .mv5-l { margin-top: 4rem; margin-bottom: 4rem; }\n .mv6-l { margin-top: 8rem; margin-bottom: 8rem; }\n .mv7-l { margin-top: 16rem; margin-bottom: 16rem; }\n .mh0-l { margin-left: 0; margin-right: 0; }\n .mh1-l { margin-left: .25rem; margin-right: .25rem; }\n .mh2-l { margin-left: .5rem; margin-right: .5rem; }\n .mh3-l { margin-left: 1rem; margin-right: 1rem; }\n .mh4-l { margin-left: 2rem; margin-right: 2rem; }\n .mh5-l { margin-left: 4rem; margin-right: 4rem; }\n .mh6-l { margin-left: 8rem; margin-right: 8rem; }\n .mh7-l { margin-left: 16rem; margin-right: 16rem; }\n .na1-l { margin: -.25rem; }\n .na2-l { margin: -.5rem; }\n .na3-l { margin: -1rem; }\n .na4-l { margin: -2rem; }\n .na5-l { margin: -4rem; }\n .na6-l { margin: -8rem; }\n .na7-l { margin: -16rem; }\n .nl1-l { margin-left: -.25rem; }\n .nl2-l { margin-left: -.5rem; }\n .nl3-l { margin-left: -1rem; }\n .nl4-l { margin-left: -2rem; }\n .nl5-l { margin-left: -4rem; }\n .nl6-l { margin-left: -8rem; }\n .nl7-l { margin-left: -16rem; }\n .nr1-l { margin-right: -.25rem; }\n .nr2-l { margin-right: -.5rem; }\n .nr3-l { margin-right: -1rem; }\n .nr4-l { margin-right: -2rem; }\n .nr5-l { margin-right: -4rem; }\n .nr6-l { margin-right: -8rem; }\n .nr7-l { margin-right: -16rem; }\n .nb1-l { margin-bottom: -.25rem; }\n .nb2-l { margin-bottom: -.5rem; }\n .nb3-l { margin-bottom: -1rem; }\n .nb4-l { margin-bottom: -2rem; }\n .nb5-l { margin-bottom: -4rem; }\n .nb6-l { margin-bottom: -8rem; }\n .nb7-l { margin-bottom: -16rem; }\n .nt1-l { margin-top: -.25rem; }\n .nt2-l { margin-top: -.5rem; }\n .nt3-l { margin-top: -1rem; }\n .nt4-l { margin-top: -2rem; }\n .nt5-l { margin-top: -4rem; }\n .nt6-l { margin-top: -8rem; }\n .nt7-l { margin-top: -16rem; }\n .strike-l { text-decoration: line-through; }\n .underline-l { text-decoration: underline; }\n .no-underline-l { text-decoration: none; }\n .tl-l { text-align: left; }\n .tr-l { text-align: right; }\n .tc-l { text-align: center; }\n .tj-l { text-align: justify; }\n .ttc-l { text-transform: capitalize; }\n .ttl-l { text-transform: lowercase; }\n .ttu-l { text-transform: uppercase; }\n .ttn-l { text-transform: none; }\n .f-6-l, .f-headline-l { font-size: 6rem; }\n .f-5-l, .f-subheadline-l { font-size: 5rem; }\n .f1-l { font-size: 3rem; }\n .f2-l { font-size: 2.25rem; }\n .f3-l { font-size: 1.5rem; }\n .f4-l { font-size: 1.25rem; }\n .f5-l { font-size: 1rem; }\n .f6-l { font-size: .875rem; }\n .f7-l { font-size: .75rem; }\n .measure-l { max-width: 30em; }\n .measure-wide-l { max-width: 34em; }\n .measure-narrow-l { max-width: 20em; }\n .indent-l { text-indent: 1em; margin-top: 0; margin-bottom: 0; }\n .small-caps-l { font-variant: small-caps; }\n .truncate-l { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n .center-l { margin-right: auto; margin-left: auto; }\n .mr-auto-l { margin-right: auto; }\n .ml-auto-l { margin-left: auto; }\n .clip-l { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }\n .ws-normal-l { white-space: normal; }\n .nowrap-l { white-space: nowrap; }\n .pre-l { white-space: pre; }\n .v-base-l { vertical-align: baseline; }\n .v-mid-l { vertical-align: middle; }\n .v-top-l { vertical-align: top; }\n .v-btm-l { vertical-align: bottom; }\n}") || true) && "_3578a054")
;((require('sheetify/insert')("html, body {\n  margin: 0;\n  padding: 0;\n  background: #0e0d0d;\n}\n\n* {\n  font-family: 'Arial';\n  color: white;\n}\n\n.toggle input[type=checkbox]{\n\theight: 0;\n\twidth: 0;\n\tvisibility: hidden;\n}\n\n.toggle label {\n\tcursor: pointer;\n\ttext-indent: -9999px;\n\twidth: 80px;\n\theight: 40px;\n\tbackground: grey;\n\tdisplay: block;\n\tborder-radius: 80px;\n\tposition: relative;\n}\n\n.toggle label:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\twidth: 30px;\n\theight: 30px;\n\tbackground: #fff;\n\tborder-radius: 30px;\n\ttransition: 0.1s;\n}\n\n.toggle input:checked + label {\n\tbackground: #bada55;\n}\n\n.toggle input:checked + label:after {\n\tleft: calc(100% - 5px);\n\ttransform: translateX(-100%);\n}\n\n.toggle label:active:after {\n\twidth: 80px;\n}\n\n.search {\n  background: #e7e7e7;\n  border: none;\n}\n\nfooter i {\n  margin-left: 1em;\n}\n\ninput {\n  background: 'white';\n  border: 1px solid black;\n}\n\n.cam-log {\n  width: 100%;\n  height: 200px;\n  background: #483f3f;\n  border: none;\n  resize: none;\n  overflow-y: scroll;\n}\n\na {\n  color: rgba(155, 213, 137, 0.9);\n}\n\n.cam-label {\n  background: rgba(137, 213, 210, 0.9);\n  padding: 0.4em;\n  font-size: 0.7em;\n}\n\nfooter {\n  background: #93f9d2;\n  background: -moz-linear-gradient(45deg, #93f9d2 1%, #492b2b 77%);\n  background: -webkit-linear-gradient(45deg, #93f9d2 1%,#492b2b 77%);\n  background: linear-gradient(45deg, #93f9d2 1%,#492b2b 77%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#93f9d2', endColorstr='#492b2b',GradientType=1 );\n}") || true) && "_2ebc2828")

var app = choo()

// app.use(persist())
app.use(require('./store'))

app.use(function (state, emitter) {
  state.log = []
  console.log('<vad> started @', new Date().toISOString())
})

app.route('/', require('./views/cameras.js'))
app.route('/detections', require('./views/list.js'))
app.route('/help', require('./views/help.js'))

app.mount('body')

},{"./store":52,"./views/cameras.js":53,"./views/help.js":54,"./views/list.js":55,"choo":11,"choo-persist":8,"choo/html":10,"sheetify/insert":47}],2:[function(require,module,exports){
//
var html = require('choo/html')
var css = 0

module.exports = function (state, emit) {
  return html`
  <header class="fixed w-100 ph3 pv3 pv3-ns ph4-m ph4-l" style="z-index:99999; background: rgba(137, 213, 210, 0.9)">
    <nav class="f6 fw6 ttu tracked">
      <a class="link dim white dib mr3" href="/" title="home">DTT</a>
      <a class="link dim white dib mr3" href="/" title="broadcast">OVERVIEW</a>
      <a class="link dim white dib mr3" href="/detections" title="broadcast">DRONE DETECTIONS</a>
      <a class="link dim white dib mr3 fr" href="/help" title="about">HELP</a>
    </nav>
  </header>
  `
}

},{"choo/html":10}],3:[function(require,module,exports){
(function (global){
'use strict';

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = require('util/');
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"util/":6}],4:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],5:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],6:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":5,"_process":7,"inherits":4}],7:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],8:[function(require,module,exports){
var mutate = require('xtend/mutable')

module.exports = persist

function persist (opts) {
  opts = opts || {}

  var name = opts.name || 'choo-persist'
  var filter = opts.filter

  return function (state, bus) {
    var savedState = null
    try {
      savedState = JSON.parse(window.localStorage.getItem(name))
    } catch (e) {
      savedState = {}
    }

    mutate(state, savedState)
    bus.on('*', listener)

    bus.on('clear', function () {
      bus.removeListener('*', listener)
      try {
        window.localStorage.removeItem(name)
      } catch (e) {
        bus.emit('log:warn', 'Could not wipe localStorage ' + name)
      }
      bus.emit('log:warn', 'Wiping localStorage ' + name)
    })

    function listener (eventName, data) {
      var savedState = filter ? filter(state) : state
      try {
        window.localStorage.setItem(name, JSON.stringify(savedState))
      } catch (e) {
        bus.removeListener('*', listener)
        bus.emit('log:warn', 'Could not set item to localStorage ' + name)
      }
    }
  }
}

},{"xtend/mutable":51}],9:[function(require,module,exports){
var assert = require('assert')
var LRU = require('nanolru')

module.exports = ChooComponentCache

function ChooComponentCache (state, emit, lru) {
  assert.ok(this instanceof ChooComponentCache, 'ChooComponentCache should be created with `new`')

  assert.equal(typeof state, 'object', 'ChooComponentCache: state should be type object')
  assert.equal(typeof emit, 'function', 'ChooComponentCache: emit should be type function')

  if (typeof lru === 'number') this.cache = new LRU(lru)
  else this.cache = lru || new LRU(100)
  this.state = state
  this.emit = emit
}

// Get & create component instances.
ChooComponentCache.prototype.render = function (Component, id) {
  assert.equal(typeof Component, 'function', 'ChooComponentCache.render: Component should be type function')
  assert.ok(typeof id === 'string' || typeof id === 'number', 'ChooComponentCache.render: id should be type string or type number')

  var el = this.cache.get(id)
  if (!el) {
    var args = []
    for (var i = 2, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }
    args.unshift(Component, id, this.state, this.emit)
    el = newCall.apply(newCall, args)
    this.cache.set(id, el)
  }

  return el
}

// Because you can't call `new` and `.apply()` at the same time. This is a mad
// hack, but hey it works so we gonna go for it. Whoop.
function newCall (Cls) {
  return new (Cls.bind.apply(Cls, arguments)) // eslint-disable-line
}

},{"assert":28,"nanolru":36}],10:[function(require,module,exports){
module.exports = require('nanohtml')

},{"nanohtml":33}],11:[function(require,module,exports){
var scrollToAnchor = require('scroll-to-anchor')
var documentReady = require('document-ready')
var nanotiming = require('nanotiming')
var nanorouter = require('nanorouter')
var nanomorph = require('nanomorph')
var nanoquery = require('nanoquery')
var nanohref = require('nanohref')
var nanoraf = require('nanoraf')
var nanobus = require('nanobus')
var assert = require('assert')
var xtend = require('xtend')

var Cache = require('./component/cache')

module.exports = Choo

var HISTORY_OBJECT = {}

function Choo (opts) {
  if (!(this instanceof Choo)) return new Choo(opts)
  opts = opts || {}

  assert.equal(typeof opts, 'object', 'choo: opts should be type object')

  var self = this

  // define events used by choo
  this._events = {
    DOMCONTENTLOADED: 'DOMContentLoaded',
    DOMTITLECHANGE: 'DOMTitleChange',
    REPLACESTATE: 'replaceState',
    PUSHSTATE: 'pushState',
    NAVIGATE: 'navigate',
    POPSTATE: 'popState',
    RENDER: 'render'
  }

  // properties for internal use only
  this._historyEnabled = opts.history === undefined ? true : opts.history
  this._hrefEnabled = opts.href === undefined ? true : opts.href
  this._hashEnabled = opts.hash === undefined ? true : opts.hash
  this._hasWindow = typeof window !== 'undefined'
  this._cache = opts.cache
  this._loaded = false
  this._stores = []
  this._tree = null

  // state
  var _state = {
    events: this._events,
    components: {}
  }
  if (this._hasWindow) {
    this.state = window.initialState
      ? xtend(window.initialState, _state)
      : _state
    delete window.initialState
  } else {
    this.state = _state
  }

  // properties that are part of the API
  this.router = nanorouter({ curry: true })
  this.emitter = nanobus('choo.emit')
  this.emit = this.emitter.emit.bind(this.emitter)

  // listen for title changes; available even when calling .toString()
  if (this._hasWindow) this.state.title = document.title
  this.emitter.prependListener(this._events.DOMTITLECHANGE, function (title) {
    assert.equal(typeof title, 'string', 'events.DOMTitleChange: title should be type string')
    self.state.title = title
    if (self._hasWindow) document.title = title
  })
}

Choo.prototype.route = function (route, handler) {
  assert.equal(typeof route, 'string', 'choo.route: route should be type string')
  assert.equal(typeof handler, 'function', 'choo.handler: route should be type function')
  this.router.on(route, handler)
}

Choo.prototype.use = function (cb) {
  assert.equal(typeof cb, 'function', 'choo.use: cb should be type function')
  var self = this
  this._stores.push(function (state) {
    var msg = 'choo.use'
    msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg
    var endTiming = nanotiming(msg)
    cb(state, self.emitter, self)
    endTiming()
  })
}

Choo.prototype.start = function () {
  assert.equal(typeof window, 'object', 'choo.start: window was not found. .start() must be called in a browser, use .toString() if running in Node')

  var self = this
  if (this._historyEnabled) {
    this.emitter.prependListener(this._events.NAVIGATE, function () {
      self._matchRoute()
      if (self._loaded) {
        self.emitter.emit(self._events.RENDER)
        setTimeout(scrollToAnchor.bind(null, window.location.hash), 0)
      }
    })

    this.emitter.prependListener(this._events.POPSTATE, function () {
      self.emitter.emit(self._events.NAVIGATE)
    })

    this.emitter.prependListener(this._events.PUSHSTATE, function (href) {
      assert.equal(typeof href, 'string', 'events.pushState: href should be type string')
      window.history.pushState(HISTORY_OBJECT, null, href)
      self.emitter.emit(self._events.NAVIGATE)
    })

    this.emitter.prependListener(this._events.REPLACESTATE, function (href) {
      assert.equal(typeof href, 'string', 'events.replaceState: href should be type string')
      window.history.replaceState(HISTORY_OBJECT, null, href)
      self.emitter.emit(self._events.NAVIGATE)
    })

    window.onpopstate = function () {
      self.emitter.emit(self._events.POPSTATE)
    }

    if (self._hrefEnabled) {
      nanohref(function (location) {
        var href = location.href
        var hash = location.hash
        if (href === window.location.href) {
          if (!self._hashEnabled && hash) scrollToAnchor(hash)
          return
        }
        self.emitter.emit(self._events.PUSHSTATE, href)
      })
    }
  }

  this._setCache(this.state)
  this._stores.forEach(function (initStore) {
    initStore(self.state)
  })

  this._matchRoute()
  this._tree = this._prerender(this.state)
  assert.ok(this._tree, 'choo.start: no valid DOM node returned for location ' + this.state.href)

  this.emitter.prependListener(self._events.RENDER, nanoraf(function () {
    var renderTiming = nanotiming('choo.render')
    var newTree = self._prerender(self.state)
    assert.ok(newTree, 'choo.render: no valid DOM node returned for location ' + self.state.href)

    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.render: The target node <' +
      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
      newTree.nodeName.toLowerCase() + '>.')

    var morphTiming = nanotiming('choo.morph')
    nanomorph(self._tree, newTree)
    morphTiming()

    renderTiming()
  }))

  documentReady(function () {
    self.emitter.emit(self._events.DOMCONTENTLOADED)
    self._loaded = true
  })

  return this._tree
}

Choo.prototype.mount = function mount (selector) {
  if (typeof window !== 'object') {
    assert.ok(typeof selector === 'string', 'choo.mount: selector should be type String')
    this.selector = selector
    return this
  }

  assert.ok(typeof selector === 'string' || typeof selector === 'object', 'choo.mount: selector should be type String or HTMLElement')

  var self = this

  documentReady(function () {
    var renderTiming = nanotiming('choo.render')
    var newTree = self.start()
    if (typeof selector === 'string') {
      self._tree = document.querySelector(selector)
    } else {
      self._tree = selector
    }

    assert.ok(self._tree, 'choo.mount: could not query selector: ' + selector)
    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.mount: The target node <' +
      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
      newTree.nodeName.toLowerCase() + '>.')

    var morphTiming = nanotiming('choo.morph')
    nanomorph(self._tree, newTree)
    morphTiming()

    renderTiming()
  })
}

Choo.prototype.toString = function (location, state) {
  this.state = xtend(this.state, state || {})

  assert.notEqual(typeof window, 'object', 'choo.mount: window was found. .toString() must be called in Node, use .start() or .mount() if running in the browser')
  assert.equal(typeof location, 'string', 'choo.toString: location should be type string')
  assert.equal(typeof this.state, 'object', 'choo.toString: state should be type object')

  var self = this
  this._setCache(this.state)
  this._stores.forEach(function (initStore) {
    initStore(self.state)
  })

  this._matchRoute(location)
  var html = this._prerender(this.state)
  assert.ok(html, 'choo.toString: no valid value returned for the route ' + location)
  assert(!Array.isArray(html), 'choo.toString: return value was an array for the route ' + location)
  return typeof html.outerHTML === 'string' ? html.outerHTML : html.toString()
}

Choo.prototype._matchRoute = function (locationOverride) {
  var location, queryString
  if (locationOverride) {
    location = locationOverride.replace(/\?.+$/, '').replace(/\/$/, '')
    if (!this._hashEnabled) location = location.replace(/#.+$/, '')
    queryString = locationOverride
  } else {
    location = window.location.pathname.replace(/\/$/, '')
    if (this._hashEnabled) location += window.location.hash.replace(/^#/, '/')
    queryString = window.location.search
  }
  var matched = this.router.match(location)
  this._handler = matched.cb
  this.state.href = location
  this.state.query = nanoquery(queryString)
  this.state.route = matched.route
  this.state.params = matched.params
  return this.state
}

Choo.prototype._prerender = function (state) {
  var routeTiming = nanotiming("choo.prerender('" + state.route + "')")
  var res = this._handler(state, this.emit)
  routeTiming()
  return res
}

Choo.prototype._setCache = function (state) {
  var cache = new Cache(state, this.emitter.emit.bind(this.emitter), this._cache)
  state.cache = renderComponent

  function renderComponent (Component, id) {
    assert.equal(typeof Component, 'function', 'choo.state.cache: Component should be type function')
    var args = []
    for (var i = 0, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }
    return cache.render.apply(cache, args)
  }

  // When the state gets stringified, make sure `state.cache` isn't
  // stringified too.
  renderComponent.toJSON = function () {
    return null
  }
}

},{"./component/cache":9,"assert":28,"document-ready":12,"nanobus":29,"nanohref":30,"nanomorph":37,"nanoquery":40,"nanoraf":41,"nanorouter":42,"nanotiming":44,"scroll-to-anchor":46,"xtend":50}],12:[function(require,module,exports){
'use strict'

module.exports = ready

function ready (callback) {
  if (typeof document === 'undefined') {
    throw new Error('document-ready only runs in the browser')
  }
  var state = document.readyState
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0)
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback()
  })
}

},{}],13:[function(require,module,exports){
module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}

},{}],14:[function(require,module,exports){
var attrToProp = require('hyperscript-attribute-to-property')

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12
var COMMENT = 13

module.exports = function (h, opts) {
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }
  if (opts.attrToProp !== false) {
    h = attrToProp(h)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        if (xstate === OPEN) {
          if (reg === '/') {
            p.push([ OPEN, '/', arg ])
            reg = ''
          } else {
            p.push([ OPEN, arg ])
          }
        } else {
          p.push([ VAR, xstate, arg ])
        }
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else parts[i][1]==="" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else parts[i][2]==="" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            if (parts[i][0] === CLOSE) {
              i--
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      if (opts.createFragment) return opts.createFragment(tree[2])
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state) && state !== COMMENT) {
          if (state === OPEN && reg.length) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
          if (opts.comments) {
            res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)],[CLOSE])
          }
          reg = ''
          state = TEXT
        } else if (state === OPEN && /^!--$/.test(reg)) {
          if (opts.comments) {
            res.push([OPEN, reg],[ATTR_KEY,'comment'],[ATTR_EQ])
          }
          reg = c
          state = COMMENT
        } else if (state === TEXT || state === COMMENT) {
          reg += c
        } else if (state === OPEN && c === '/' && reg.length) {
          // no-op, self closing tag without a space <br/>
        } else if (state === OPEN && /\s/.test(c)) {
          if (reg.length) {
            res.push([OPEN, reg])
          }
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr', '!--',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }

},{"hyperscript-attribute-to-property":13}],15:[function(require,module,exports){
var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;

},{}],16:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":21}],17:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":16,"./_getRawTag":19,"./_objectToString":20}],18:[function(require,module,exports){
(function (global){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],19:[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":16}],20:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],21:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":18}],22:[function(require,module,exports){
var isObject = require('./isObject'),
    now = require('./now'),
    toNumber = require('./toNumber');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

},{"./isObject":23,"./now":26,"./toNumber":27}],23:[function(require,module,exports){
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],24:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],25:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":17,"./isObjectLike":24}],26:[function(require,module,exports){
var root = require('./_root');

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;

},{"./_root":21}],27:[function(require,module,exports){
var isObject = require('./isObject'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;

},{"./isObject":23,"./isSymbol":25}],28:[function(require,module,exports){
assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert

module.exports = assert

function equal (a, b, m) {
  assert(a == b, m) // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m) // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m)
}

function assert (t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}

},{}],29:[function(require,module,exports){
var splice = require('remove-array-items')
var nanotiming = require('nanotiming')
var assert = require('assert')

module.exports = Nanobus

function Nanobus (name) {
  if (!(this instanceof Nanobus)) return new Nanobus(name)

  this._name = name || 'nanobus'
  this._starListeners = []
  this._listeners = {}
}

Nanobus.prototype.emit = function (eventName) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.emit: eventName should be type string or symbol')

  var data = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    data.push(arguments[i])
  }

  var emitTiming = nanotiming(this._name + "('" + eventName.toString() + "')")
  var listeners = this._listeners[eventName]
  if (listeners && listeners.length > 0) {
    this._emit(this._listeners[eventName], data)
  }

  if (this._starListeners.length > 0) {
    this._emit(this._starListeners, eventName, data, emitTiming.uuid)
  }
  emitTiming()

  return this
}

Nanobus.prototype.on = Nanobus.prototype.addListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.on: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.on: listener should be type function')

  if (eventName === '*') {
    this._starListeners.push(listener)
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].push(listener)
  }
  return this
}

Nanobus.prototype.prependListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.prependListener: listener should be type function')

  if (eventName === '*') {
    this._starListeners.unshift(listener)
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].unshift(listener)
  }
  return this
}

Nanobus.prototype.once = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.once: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.once: listener should be type function')

  var self = this
  this.on(eventName, once)
  function once () {
    listener.apply(self, arguments)
    self.removeListener(eventName, once)
  }
  return this
}

Nanobus.prototype.prependOnceListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependOnceListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.prependOnceListener: listener should be type function')

  var self = this
  this.prependListener(eventName, once)
  function once () {
    listener.apply(self, arguments)
    self.removeListener(eventName, once)
  }
  return this
}

Nanobus.prototype.removeListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.removeListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.removeListener: listener should be type function')

  if (eventName === '*') {
    this._starListeners = this._starListeners.slice()
    return remove(this._starListeners, listener)
  } else {
    if (typeof this._listeners[eventName] !== 'undefined') {
      this._listeners[eventName] = this._listeners[eventName].slice()
    }

    return remove(this._listeners[eventName], listener)
  }

  function remove (arr, listener) {
    if (!arr) return
    var index = arr.indexOf(listener)
    if (index !== -1) {
      splice(arr, index, 1)
      return true
    }
  }
}

Nanobus.prototype.removeAllListeners = function (eventName) {
  if (eventName) {
    if (eventName === '*') {
      this._starListeners = []
    } else {
      this._listeners[eventName] = []
    }
  } else {
    this._starListeners = []
    this._listeners = {}
  }
  return this
}

Nanobus.prototype.listeners = function (eventName) {
  var listeners = eventName !== '*'
    ? this._listeners[eventName]
    : this._starListeners

  var ret = []
  if (listeners) {
    var ilength = listeners.length
    for (var i = 0; i < ilength; i++) ret.push(listeners[i])
  }
  return ret
}

Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
  if (typeof arr === 'undefined') return
  if (arr.length === 0) return
  if (data === undefined) {
    data = eventName
    eventName = null
  }

  if (eventName) {
    if (uuid !== undefined) {
      data = [eventName].concat(data, uuid)
    } else {
      data = [eventName].concat(data)
    }
  }

  var length = arr.length
  for (var i = 0; i < length; i++) {
    var listener = arr[i]
    listener.apply(listener, data)
  }
}

},{"assert":28,"nanotiming":44,"remove-array-items":45}],30:[function(require,module,exports){
var assert = require('assert')

var safeExternalLink = /(noopener|noreferrer) (noopener|noreferrer)/
var protocolLink = /^[\w-_]+:/

module.exports = href

function href (cb, root) {
  assert.notEqual(typeof window, 'undefined', 'nanohref: expected window to exist')

  root = root || window.document

  assert.equal(typeof cb, 'function', 'nanohref: cb should be type function')
  assert.equal(typeof root, 'object', 'nanohref: root should be type object')

  window.addEventListener('click', function (e) {
    if ((e.button && e.button !== 0) ||
      e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ||
      e.defaultPrevented) return

    var anchor = (function traverse (node) {
      if (!node || node === root) return
      if (node.localName !== 'a' || node.href === undefined) {
        return traverse(node.parentNode)
      }
      return node
    })(e.target)

    if (!anchor) return

    if (window.location.protocol !== anchor.protocol ||
        window.location.hostname !== anchor.hostname ||
        window.location.port !== anchor.port ||
      anchor.hasAttribute('data-nanohref-ignore') ||
      anchor.hasAttribute('download') ||
      (anchor.getAttribute('target') === '_blank' &&
        safeExternalLink.test(anchor.getAttribute('rel'))) ||
      protocolLink.test(anchor.getAttribute('href'))) return

    e.preventDefault()
    cb(anchor)
  })
}

},{"assert":28}],31:[function(require,module,exports){
var trailingNewlineRegex = /\n[\s]+$/
var leadingNewlineRegex = /^\n[\s]+/
var trailingSpaceRegex = /[\s]+$/
var leadingSpaceRegex = /^[\s]+/
var multiSpaceRegex = /[\n\s]+/g

var TEXT_TAGS = [
  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'data', 'dfn', 'em', 'i',
  'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'amp', 'small', 'span',
  'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'
]

var VERBATIM_TAGS = [
  'code', 'pre', 'textarea'
]

module.exports = function appendChild (el, childs) {
  if (!Array.isArray(childs)) return

  var nodeName = el.nodeName.toLowerCase()

  var hadText = false
  var value, leader

  for (var i = 0, len = childs.length; i < len; i++) {
    var node = childs[i]
    if (Array.isArray(node)) {
      appendChild(el, node)
      continue
    }

    if (typeof node === 'number' ||
      typeof node === 'boolean' ||
      typeof node === 'function' ||
      node instanceof Date ||
      node instanceof RegExp) {
      node = node.toString()
    }

    var lastChild = el.childNodes[el.childNodes.length - 1]

    // Iterate over text nodes
    if (typeof node === 'string') {
      hadText = true

      // If we already had text, append to the existing text
      if (lastChild && lastChild.nodeName === '#text') {
        lastChild.nodeValue += node

      // We didn't have a text node yet, create one
      } else {
        node = document.createTextNode(node)
        el.appendChild(node)
        lastChild = node
      }

      // If this is the last of the child nodes, make sure we close it out
      // right
      if (i === len - 1) {
        hadText = false
        // Trim the child text nodes if the current node isn't a
        // node where whitespace matters.
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          // The very first node in the list should not have leading
          // whitespace. Sibling text nodes should have whitespace if there
          // was any.
          leader = i === 0 ? '' : ' '
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, leader)
            .replace(leadingSpaceRegex, ' ')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

    // Iterate over DOM nodes
    } else if (node && node.nodeType) {
      // If the last node was a text node, make sure it is properly closed out
      if (hadText) {
        hadText = false

        // Trim the child text nodes if the current node isn't a
        // text node or a code node
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')

          // Remove empty text nodes, append otherwise
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        // Trim the child nodes if the current node is not a node
        // where all whitespace must be preserved
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingSpaceRegex, ' ')
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

      // Store the last nodename
      var _nodeName = node.nodeName
      if (_nodeName) nodeName = _nodeName.toLowerCase()

      // Append the node to the DOM
      el.appendChild(node)
    }
  }
}

},{}],32:[function(require,module,exports){
module.exports = [
  'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default',
  'defaultchecked', 'defer', 'disabled', 'formnovalidate', 'hidden',
  'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'open', 'playsinline',
  'readonly', 'required', 'reversed', 'selected'
]

},{}],33:[function(require,module,exports){
var hyperx = require('hyperx')
var appendChild = require('./append-child')
var SVG_TAGS = require('./svg-tags')
var BOOL_PROPS = require('./bool-props')
// Props that need to be set directly rather than with el.setAttribute()
var DIRECT_PROPS = require('./direct-props')

var SVGNS = 'http://www.w3.org/2000/svg'
var XLINKNS = 'http://www.w3.org/1999/xlink'

var COMMENT_TAG = '!--'

function nanoHtmlCreateElement (tag, props, children) {
  var el

  // If an svg tag, it needs a namespace
  if (SVG_TAGS.indexOf(tag) !== -1) {
    props.namespace = SVGNS
  }

  // If we are using a namespace
  var ns = false
  if (props.namespace) {
    ns = props.namespace
    delete props.namespace
  }

  // If we are extending a builtin element
  var isCustomElement = false
  if (props.is) {
    isCustomElement = props.is
    delete props.is
  }

  // Create the element
  if (ns) {
    if (isCustomElement) {
      el = document.createElementNS(ns, tag, { is: isCustomElement })
    } else {
      el = document.createElementNS(ns, tag)
    }
  } else if (tag === COMMENT_TAG) {
    return document.createComment(props.comment)
  } else if (isCustomElement) {
    el = document.createElement(tag, { is: isCustomElement })
  } else {
    el = document.createElement(tag)
  }

  // Create the properties
  for (var p in props) {
    if (props.hasOwnProperty(p)) {
      var key = p.toLowerCase()
      var val = props[p]
      // Normalize className
      if (key === 'classname') {
        key = 'class'
        p = 'class'
      }
      // The for attribute gets transformed to htmlFor, but we just set as for
      if (p === 'htmlFor') {
        p = 'for'
      }
      // If a property is boolean, set itself to the key
      if (BOOL_PROPS.indexOf(key) !== -1) {
        if (val === 'true') val = key
        else if (val === 'false') continue
      }
      // If a property prefers being set directly vs setAttribute
      if (key.slice(0, 2) === 'on' || DIRECT_PROPS.indexOf(key) !== -1) {
        el[p] = val
      } else {
        if (ns) {
          if (p === 'xlink:href') {
            el.setAttributeNS(XLINKNS, p, val)
          } else if (/^xmlns($|:)/i.test(p)) {
            // skip xmlns definitions
          } else {
            el.setAttributeNS(null, p, val)
          }
        } else {
          el.setAttribute(p, val)
        }
      }
    }
  }

  appendChild(el, children)
  return el
}

function createFragment (nodes) {
  var fragment = document.createDocumentFragment()
  for (var i = 0; i < nodes.length; i++) {
    if (typeof nodes[i] === 'string') nodes[i] = document.createTextNode(nodes[i])
    fragment.appendChild(nodes[i])
  }
  return fragment
}

module.exports = hyperx(nanoHtmlCreateElement, {
  comments: true,
  createFragment: createFragment
})
module.exports.default = module.exports
module.exports.createElement = nanoHtmlCreateElement

},{"./append-child":31,"./bool-props":32,"./direct-props":34,"./svg-tags":35,"hyperx":14}],34:[function(require,module,exports){
module.exports = [
  'indeterminate'
]

},{}],35:[function(require,module,exports){
module.exports = [
  'svg', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix',
  'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood',
  'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage',
  'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter',
  'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src',
  'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image',
  'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph',
  'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]

},{}],36:[function(require,module,exports){
module.exports = LRU

function LRU (opts) {
  if (!(this instanceof LRU)) return new LRU(opts)
  if (typeof opts === 'number') opts = {max: opts}
  if (!opts) opts = {}
  this.cache = {}
  this.head = this.tail = null
  this.length = 0
  this.max = opts.max || 1000
  this.maxAge = opts.maxAge || 0
}

Object.defineProperty(LRU.prototype, 'keys', {
  get: function () { return Object.keys(this.cache) }
})

LRU.prototype.clear = function () {
  this.cache = {}
  this.head = this.tail = null
  this.length = 0
}

LRU.prototype.remove = function (key) {
  if (typeof key !== 'string') key = '' + key
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]
  delete this.cache[key]
  this._unlink(key, element.prev, element.next)
  return element.value
}

LRU.prototype._unlink = function (key, prev, next) {
  this.length--

  if (this.length === 0) {
    this.head = this.tail = null
  } else {
    if (this.head === key) {
      this.head = prev
      this.cache[this.head].next = null
    } else if (this.tail === key) {
      this.tail = next
      this.cache[this.tail].prev = null
    } else {
      this.cache[prev].next = next
      this.cache[next].prev = prev
    }
  }
}

LRU.prototype.peek = function (key) {
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]

  if (!this._checkAge(key, element)) return
  return element.value
}

LRU.prototype.set = function (key, value) {
  if (typeof key !== 'string') key = '' + key

  var element

  if (this.cache.hasOwnProperty(key)) {
    element = this.cache[key]
    element.value = value
    if (this.maxAge) element.modified = Date.now()

    // If it's already the head, there's nothing more to do:
    if (key === this.head) return value
    this._unlink(key, element.prev, element.next)
  } else {
    element = {value: value, modified: 0, next: null, prev: null}
    if (this.maxAge) element.modified = Date.now()
    this.cache[key] = element

    // Eviction is only possible if the key didn't already exist:
    if (this.length === this.max) this.evict()
  }

  this.length++
  element.next = null
  element.prev = this.head

  if (this.head) this.cache[this.head].next = key
  this.head = key

  if (!this.tail) this.tail = key
  return value
}

LRU.prototype._checkAge = function (key, element) {
  if (this.maxAge && (Date.now() - element.modified) > this.maxAge) {
    this.remove(key)
    return false
  }
  return true
}

LRU.prototype.get = function (key) {
  if (typeof key !== 'string') key = '' + key
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]

  if (!this._checkAge(key, element)) return

  if (this.head !== key) {
    if (key === this.tail) {
      this.tail = element.next
      this.cache[this.tail].prev = null
    } else {
      // Set prev.next -> element.next:
      this.cache[element.prev].next = element.next
    }

    // Set element.next.prev -> element.prev:
    this.cache[element.next].prev = element.prev

    // Element is the new head
    this.cache[this.head].next = key
    element.prev = this.head
    element.next = null
    this.head = key
  }

  return element.value
}

LRU.prototype.evict = function () {
  if (!this.tail) return
  this.remove(this.tail)
}

},{}],37:[function(require,module,exports){
var assert = require('nanoassert')
var morph = require('./lib/morph')

var TEXT_NODE = 3
// var DEBUG = false

module.exports = nanomorph

// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph (oldTree, newTree, options) {
  // if (DEBUG) {
  //   console.log(
  //   'nanomorph\nold\n  %s\nnew\n  %s',
  //   oldTree && oldTree.outerHTML,
  //   newTree && newTree.outerHTML
  // )
  // }
  assert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object')
  assert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object')
  assert.notEqual(
    newTree.nodeType,
    11,
    'nanomorph: newTree should have one root node (which is not a DocumentFragment)'
  )

  if (options && options.childrenOnly) {
    updateChildren(newTree, oldTree)
    return oldTree
  }

  return walk(newTree, oldTree)
}

// Walk and morph a dom tree
function walk (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'walk\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  if (!oldNode) {
    return newNode
  } else if (!newNode) {
    return null
  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
    return oldNode
  } else if (newNode.tagName !== oldNode.tagName) {
    return newNode
  } else {
    morph(newNode, oldNode)
    updateChildren(newNode, oldNode)
    return oldNode
  }
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'updateChildren\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  var oldChild, newChild, morphed, oldMatch

  // The offset is only ever increased, and used for [i - offset] in the loop
  var offset = 0

  for (var i = 0; ; i++) {
    oldChild = oldNode.childNodes[i]
    newChild = newNode.childNodes[i - offset]
    // if (DEBUG) {
    //   console.log(
    //   '===\n- old\n  %s\n- new\n  %s',
    //   oldChild && oldChild.outerHTML,
    //   newChild && newChild.outerHTML
    // )
    // }
    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break

    // There is no new child, remove old
    } else if (!newChild) {
      oldNode.removeChild(oldChild)
      i--

    // There is no old child, add new
    } else if (!oldChild) {
      oldNode.appendChild(newChild)
      offset++

    // Both nodes are the same, morph
    } else if (same(newChild, oldChild)) {
      morphed = walk(newChild, oldChild)
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild)
        offset++
      }

    // Both nodes do not share an ID or a placeholder, try reorder
    } else {
      oldMatch = null

      // Try and find a similar node somewhere in the tree
      for (var j = i; j < oldNode.childNodes.length; j++) {
        if (same(oldNode.childNodes[j], newChild)) {
          oldMatch = oldNode.childNodes[j]
          break
        }
      }

      // If there was a node with the same ID or placeholder in the old list
      if (oldMatch) {
        morphed = walk(newChild, oldMatch)
        if (morphed !== oldMatch) offset++
        oldNode.insertBefore(morphed, oldChild)

      // It's safe to morph two nodes in-place if neither has an ID
      } else if (!newChild.id && !oldChild.id) {
        morphed = walk(newChild, oldChild)
        if (morphed !== oldChild) {
          oldNode.replaceChild(morphed, oldChild)
          offset++
        }

      // Insert the node at the index if we couldn't morph or find a matching node
      } else {
        oldNode.insertBefore(newChild, oldChild)
        offset++
      }
    }
  }
}

function same (a, b) {
  if (a.id) return a.id === b.id
  if (a.isSameNode) return a.isSameNode(b)
  if (a.tagName !== b.tagName) return false
  if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue
  return false
}

},{"./lib/morph":39,"nanoassert":28}],38:[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'onmouseenter',
  'onmouseleave',
  'ontouchcancel',
  'ontouchend',
  'ontouchmove',
  'ontouchstart',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}],39:[function(require,module,exports){
var events = require('./events')
var eventsLength = events.length

var ELEMENT_NODE = 1
var TEXT_NODE = 3
var COMMENT_NODE = 8

module.exports = morph

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph (newNode, oldNode) {
  var nodeType = newNode.nodeType
  var nodeName = newNode.nodeName

  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode)
  }

  if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue
    }
  }

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === 'INPUT') updateInput(newNode, oldNode)
  else if (nodeName === 'OPTION') updateOption(newNode, oldNode)
  else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode)

  copyEvents(newNode, oldNode)
}

function copyAttrs (newNode, oldNode) {
  var oldAttrs = oldNode.attributes
  var newAttrs = newNode.attributes
  var attrNamespaceURI = null
  var attrValue = null
  var fromValue = null
  var attrName = null
  var attr = null

  for (var i = newAttrs.length - 1; i >= 0; --i) {
    attr = newAttrs[i]
    attrName = attr.name
    attrNamespaceURI = attr.namespaceURI
    attrValue = attr.value
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName
      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName)
      if (fromValue !== attrValue) {
        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue)
      }
    } else {
      if (!oldNode.hasAttribute(attrName)) {
        oldNode.setAttribute(attrName, attrValue)
      } else {
        fromValue = oldNode.getAttribute(attrName)
        if (fromValue !== attrValue) {
          // apparently values are always cast to strings, ah well
          if (attrValue === 'null' || attrValue === 'undefined') {
            oldNode.removeAttribute(attrName)
          } else {
            oldNode.setAttribute(attrName, attrValue)
          }
        }
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  for (var j = oldAttrs.length - 1; j >= 0; --j) {
    attr = oldAttrs[j]
    if (attr.specified !== false) {
      attrName = attr.name
      attrNamespaceURI = attr.namespaceURI

      if (attrNamespaceURI) {
        attrName = attr.localName || attrName
        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          oldNode.removeAttributeNS(attrNamespaceURI, attrName)
        }
      } else {
        if (!newNode.hasAttributeNS(null, attrName)) {
          oldNode.removeAttribute(attrName)
        }
      }
    }
  }
}

function copyEvents (newNode, oldNode) {
  for (var i = 0; i < eventsLength; i++) {
    var ev = events[i]
    if (newNode[ev]) {           // if new element has a whitelisted attribute
      oldNode[ev] = newNode[ev]  // update existing element
    } else if (oldNode[ev]) {    // if existing element has it and new one doesnt
      oldNode[ev] = undefined    // remove it from existing element
    }
  }
}

function updateOption (newNode, oldNode) {
  updateAttribute(newNode, oldNode, 'selected')
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput (newNode, oldNode) {
  var newValue = newNode.value
  var oldValue = oldNode.value

  updateAttribute(newNode, oldNode, 'checked')
  updateAttribute(newNode, oldNode, 'disabled')

  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue)
    oldNode.value = newValue
  }

  if (newValue === 'null') {
    oldNode.value = ''
    oldNode.removeAttribute('value')
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value')
  } else if (oldNode.type === 'range') {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue
  }
}

function updateTextarea (newNode, oldNode) {
  var newValue = newNode.value
  if (newValue !== oldNode.value) {
    oldNode.value = newValue
  }

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
      return
    }

    oldNode.firstChild.nodeValue = newValue
  }
}

function updateAttribute (newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name]
    if (newNode[name]) {
      oldNode.setAttribute(name, '')
    } else {
      oldNode.removeAttribute(name)
    }
  }
}

},{"./events":38}],40:[function(require,module,exports){
var reg = /([^?=&]+)(=([^&]*))?/g
var assert = require('assert')

module.exports = qs

function qs (url) {
  assert.equal(typeof url, 'string', 'nanoquery: url should be type string')

  var obj = {}
  url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
    obj[decodeURIComponent(a1)] = decodeURIComponent(a3)
  })

  return obj
}

},{"assert":28}],41:[function(require,module,exports){
'use strict'

var assert = require('assert')

module.exports = nanoraf

// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf (render, raf) {
  assert.equal(typeof render, 'function', 'nanoraf: render should be a function')
  assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined')

  if (!raf) raf = window.requestAnimationFrame
  var redrawScheduled = false
  var args = null

  return function frame () {
    if (args === null && !redrawScheduled) {
      redrawScheduled = true

      raf(function redraw () {
        redrawScheduled = false

        var length = args.length
        var _args = new Array(length)
        for (var i = 0; i < length; i++) _args[i] = args[i]

        render.apply(render, _args)
        args = null
      })
    }

    args = arguments
  }
}

},{"assert":28}],42:[function(require,module,exports){
var assert = require('assert')
var wayfarer = require('wayfarer')

// electron support
var isLocalFile = (/file:\/\//.test(
  typeof window === 'object' &&
  window.location &&
  window.location.origin
))

/* eslint-disable no-useless-escape */
var electron = '^(file:\/\/|\/)(.*\.html?\/?)?'
var protocol = '^(http(s)?(:\/\/))?(www\.)?'
var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?'
var qs = '[\?].*$'
/* eslint-enable no-useless-escape */

var stripElectron = new RegExp(electron)
var prefix = new RegExp(protocol + domain)
var normalize = new RegExp('#')
var suffix = new RegExp(qs)

module.exports = Nanorouter

function Nanorouter (opts) {
  if (!(this instanceof Nanorouter)) return new Nanorouter(opts)
  opts = opts || {}
  this.router = wayfarer(opts.default || '/404')
}

Nanorouter.prototype.on = function (routename, listener) {
  assert.equal(typeof routename, 'string')
  routename = routename.replace(/^[#/]/, '')
  this.router.on(routename, listener)
}

Nanorouter.prototype.emit = function (routename) {
  assert.equal(typeof routename, 'string')
  routename = pathname(routename, isLocalFile)
  return this.router.emit(routename)
}

Nanorouter.prototype.match = function (routename) {
  assert.equal(typeof routename, 'string')
  routename = pathname(routename, isLocalFile)
  return this.router.match(routename)
}

// replace everything in a route but the pathname and hash
function pathname (routename, isElectron) {
  if (isElectron) routename = routename.replace(stripElectron, '')
  else routename = routename.replace(prefix, '')
  return decodeURI(routename.replace(suffix, '').replace(normalize, '/'))
}

},{"assert":28,"wayfarer":48}],43:[function(require,module,exports){
var assert = require('assert')

var hasWindow = typeof window !== 'undefined'

function createScheduler () {
  var scheduler
  if (hasWindow) {
    if (!window._nanoScheduler) window._nanoScheduler = new NanoScheduler(true)
    scheduler = window._nanoScheduler
  } else {
    scheduler = new NanoScheduler()
  }
  return scheduler
}

function NanoScheduler (hasWindow) {
  this.hasWindow = hasWindow
  this.hasIdle = this.hasWindow && window.requestIdleCallback
  this.method = this.hasIdle ? window.requestIdleCallback.bind(window) : this.setTimeout
  this.scheduled = false
  this.queue = []
}

NanoScheduler.prototype.push = function (cb) {
  assert.equal(typeof cb, 'function', 'nanoscheduler.push: cb should be type function')

  this.queue.push(cb)
  this.schedule()
}

NanoScheduler.prototype.schedule = function () {
  if (this.scheduled) return

  this.scheduled = true
  var self = this
  this.method(function (idleDeadline) {
    var cb
    while (self.queue.length && idleDeadline.timeRemaining() > 0) {
      cb = self.queue.shift()
      cb(idleDeadline)
    }
    self.scheduled = false
    if (self.queue.length) self.schedule()
  })
}

NanoScheduler.prototype.setTimeout = function (cb) {
  setTimeout(cb, 0, {
    timeRemaining: function () {
      return 1
    }
  })
}

module.exports = createScheduler

},{"assert":28}],44:[function(require,module,exports){
var scheduler = require('nanoscheduler')()
var assert = require('assert')

var perf
nanotiming.disabled = true
try {
  perf = window.performance
  nanotiming.disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark
} catch (e) { }

module.exports = nanotiming

function nanotiming (name) {
  assert.equal(typeof name, 'string', 'nanotiming: name should be type string')

  if (nanotiming.disabled) return noop

  var uuid = (perf.now() * 10000).toFixed() % Number.MAX_SAFE_INTEGER
  var startName = 'start-' + uuid + '-' + name
  perf.mark(startName)

  function end (cb) {
    var endName = 'end-' + uuid + '-' + name
    perf.mark(endName)

    scheduler.push(function () {
      var err = null
      try {
        var measureName = name + ' [' + uuid + ']'
        perf.measure(measureName, startName, endName)
        perf.clearMarks(startName)
        perf.clearMarks(endName)
      } catch (e) { err = e }
      if (cb) cb(err, name)
    })
  }

  end.uuid = uuid
  return end
}

function noop (cb) {
  if (cb) {
    scheduler.push(function () {
      cb(new Error('nanotiming: performance API unavailable'))
    })
  }
}

},{"assert":28,"nanoscheduler":43}],45:[function(require,module,exports){
'use strict'

/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
module.exports = function removeItems (arr, startIdx, removeCount) {
  var i, length = arr.length

  if (startIdx >= length || removeCount === 0) {
    return
  }

  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount)

  var len = length - removeCount

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount]
  }

  arr.length = len
}

},{}],46:[function(require,module,exports){
module.exports = scrollToAnchor

function scrollToAnchor (anchor, options) {
  if (anchor) {
    try {
      var el = document.querySelector(anchor)
      if (el) el.scrollIntoView(options)
    } catch (e) {}
  }
}

},{}],47:[function(require,module,exports){
module.exports = require('insert-css')

},{"insert-css":15}],48:[function(require,module,exports){
var assert = require('assert')
var trie = require('./trie')

module.exports = Wayfarer

// create a router
// str -> obj
function Wayfarer (dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

  var _default = (dft || '').replace(/^\//, '')
  var _trie = trie()

  emit._trie = _trie
  emit.on = on
  emit.emit = emit
  emit.match = match
  emit._wayfarer = true

  return emit

  // define a route
  // (str, fn) -> obj
  function on (route, fn) {
    assert.equal(typeof route, 'string')
    assert.equal(typeof fn, 'function')

    var cb = fn._wayfarer && fn._trie ? fn : proxy
    route = route || '/'
    cb.route = route

    if (cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie)
    } else {
      var node = _trie.create(route)
      node.cb = cb
    }

    return emit

    function proxy () {
      return fn.apply(this, Array.prototype.slice.call(arguments))
    }
  }

  // match and call a route
  // (str, obj?) -> null
  function emit (route) {
    var matched = match(route)

    var args = new Array(arguments.length)
    args[0] = matched.params
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i]
    }

    return matched.cb.apply(matched.cb, args)
  }

  function match (route) {
    assert.notEqual(route, undefined, "'route' must be defined")

    var matched = _trie.match(route)
    if (matched && matched.cb) return new Route(matched)

    var dft = _trie.match(_default)
    if (dft && dft.cb) return new Route(dft)

    throw new Error("route '" + route + "' did not match")
  }

  function Route (matched) {
    this.cb = matched.cb
    this.route = matched.cb.route
    this.params = matched.params
  }
}

},{"./trie":49,"assert":3}],49:[function(require,module,exports){
var mutate = require('xtend/mutable')
var assert = require('assert')
var xtend = require('xtend')

module.exports = Trie

// create a new trie
// null -> obj
function Trie () {
  if (!(this instanceof Trie)) return new Trie()
  this.trie = { nodes: {} }
}

// create a node on the trie at route
// and return a node
// str -> null
Trie.prototype.create = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')
  // strip leading '/' and split routes
  var routes = route.replace(/^\//, '').split('/')

  function createNode (index, trie) {
    var thisRoute = (routes.hasOwnProperty(index) && routes[index])
    if (thisRoute === false) return trie

    var node = null
    if (/^:|^\*/.test(thisRoute)) {
      // if node is a name match, set name and append to ':' node
      if (!trie.nodes.hasOwnProperty('$$')) {
        node = { nodes: {} }
        trie.nodes['$$'] = node
      } else {
        node = trie.nodes['$$']
      }

      if (thisRoute[0] === '*') {
        trie.wildcard = true
      }

      trie.name = thisRoute.replace(/^:|^\*/, '')
    } else if (!trie.nodes.hasOwnProperty(thisRoute)) {
      node = { nodes: {} }
      trie.nodes[thisRoute] = node
    } else {
      node = trie.nodes[thisRoute]
    }

    // we must recurse deeper
    return createNode(index + 1, node)
  }

  return createNode(0, this.trie)
}

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')

  var routes = route.replace(/^\//, '').split('/')
  var params = {}

  function search (index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined
    var thisRoute = routes[index]
    if (thisRoute === undefined) return trie

    if (trie.nodes.hasOwnProperty(thisRoute)) {
      // match regular routes first
      return search(index + 1, trie.nodes[thisRoute])
    } else if (trie.name) {
      // match named routes
      try {
        params[trie.name] = decodeURIComponent(thisRoute)
      } catch (e) {
        return search(index, undefined)
      }
      return search(index + 1, trie.nodes['$$'])
    } else if (trie.wildcard) {
      // match wildcards
      try {
        params['wildcard'] = decodeURIComponent(routes.slice(index).join('/'))
      } catch (e) {
        return search(index, undefined)
      }
      // return early, or else search may keep recursing through the wildcard
      return trie.nodes['$$']
    } else {
      // no matches found
      return search(index + 1)
    }
  }

  var node = search(0, this.trie)

  if (!node) return undefined
  node = xtend(node)
  node.params = params
  return node
}

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(typeof route, 'string', 'route should be a string')
  assert.equal(typeof trie, 'object', 'trie should be a object')

  var split = route.replace(/^\//, '').split('/')
  var node = null
  var key = null

  if (split.length === 1) {
    key = split[0]
    node = this.create(key)
  } else {
    var head = split.join('/')
    key = split[0]
    node = this.create(head)
  }

  mutate(node.nodes, trie.nodes)
  if (trie.name) node.name = trie.name

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return
      node[key] = node.nodes[''][key]
    })
    mutate(node.nodes, node.nodes[''].nodes)
    delete node.nodes[''].nodes
  }
}

},{"assert":3,"xtend":50,"xtend/mutable":51}],50:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],51:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],52:[function(require,module,exports){

var assert = require('assert')


module.exports = function (state, emitter) {

  // if (!state.current_index) {
    state.current_index = []
    for (var i = 0; i < 3000; i++) {
      state.current_index.push({
        id: i,
        timestamp: new Date().toISOString(),
        message: 'hello! '+i
      })
    }
  // }

  state.scrollTop = 0
  emitter.on('scroll', (scrollTop) => {
    state.scrollTop = scrollTop
    emitter.emit('render')
  })
}

},{"assert":3}],53:[function(require,module,exports){



var html = require('choo/html')
var css = 0
var nav = require('../components/nav.js')

module.exports = function (state, emit) {

  state.scrollTop = 0



  // setInterval(function () {
  //   state.log.unshift('>'+ Math.random())
  //   if (state.log.length > 6) state.log = state.log.slice(0, 5)
  //   emit('render')
  // }, 5500)

  function cam_log (message) {
    return html`
      <p class="f5 lh-copy measure mt0-ns">${message}</p>
    `
  }

  return html`
    <body>
      ${nav(state, emit)}
    <br /><br /><br />
    <div class="pa2">
    <main class="cf w-100 ma">
    <article>
      <div class="cf pa2">
        <div class="fl w-50 w-25-m w-20-l pa2">
          <a href="/" class="db link dim tl">
            <dd class="ml0 white truncate w-100 cam-label">CAMERA 1</dd>
            <video width="100%" height="235px" style="background: white;" class="w-100 db outline black-10"  src="http://192.168.0.100:8081"></video>
            <dl class="mt2 f6 lh-copy tl">
              <dt class="clip">Log</dt>
              <div class="cam-log">${state.log.map(cam_log)}</div>
            </dl>
          </a>
        </div>
        <div class="fl w-50 w-25-m w-20-l pa2">
          <a href="/camera/2/full" class="db link dim tl">
            <dd class="ml0 white truncate w-100 cam-label">CAMERA 2</dd>
            <video width="100%" height="235px" style="background: white;" class="w-100 db outline black-10"  src="http://192.168.0.101:8081"></video>
            <dl class="mt2 f6 lh-copy tl">
              <dt class="clip">Log</dt>
              <div class="cam-log">${state.log.map(cam_log)}</div>
            </dl>
          </a>
        </div>
        <div class="fl w-50 w-25-m w-20-l pa2">
          <a href="/camera/3/full" class="db link dim tl">
            <dd class="ml0 white truncate w-100 cam-label">CAMERA 3</dd>
            <video width="100%" height="235px" style="background: white;" class="w-100 db outline black-10"  src="http://192.168.0.102:8081"></video>
            <dl class="mt2 f6 lh-copy tl">
              <dt class="clip">Log</dt>
              <div class="cam-log">${state.log.map(cam_log)}</div>
            </dl>
          </a>
        </div>
        <div class="fl w-50 w-25-m w-20-l pa2">
          <a href="/camera/4/full" class="db link dim tl">
            <dd class="ml0 white truncate w-100 cam-label">CAMERA 4</dd>
            <video width="100%" height="235px" style="background: white;" class="w-100 db outline black-10"  src="http://192.168.0.103:8081"></video>
            <dl class="mt2 f6 lh-copy tl">
              <dt class="clip">Log</dt>
              <div class="cam-log">${state.log.map(cam_log)}</div>
            </dl>
          </a>
        </div>
      </div>
    </article>
    </main>
    </div>
    <footer class="bg-near-black white-80 pv5 pv6-l ph4 footer">
      <p class="f6">
      <a class="f6 link white dim ba bw1 ph3 pv2 mb2 dib" href="https://dronetrackingtechnologies.com">DRONE TRACKING TECHNOLOGIES</a>
      </p>
    </footer>
    </body>
  `
}

},{"../components/nav.js":2,"choo/html":10}],54:[function(require,module,exports){

var html = require('choo/html')
var css = 0
var nav = require('../components/nav.js')

module.exports = function (state, emit) {

  state.scrollTop = 0

  return html`
    <body>
      ${nav(state, emit)}
    <br /><br /><br />
    <div class="pa3 pa5-ns">
    <main class="cf w-100">
      <article class="cf ph3 ph5-ns pv5">
        <header class="fn fl-ns w-50-ns pr4-ns">
          <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
            VAD help
          </h1>
        </header>
        <div class="fn fl-ns w-50-ns">
          <p class="f5 lh-copy measure mt0-ns">
          help goes here
          </p>
          <p class="f5 lh-copy measure">
           <br /><br />
            <a class="f6 link dim ba bw1 ph3 pv2 mb2 dib purple" href="https://github.com/m-onz/obmesh">CODE ON GITHUB</a>
          </p>
        </div>
      </article>
    </main>
    </div>
    <footer class="bg-near-black white-80 pv5 pv6-l ph4">
      <p class="f6"><span class="dib mr4 mr5-ns">VAD</span>
      <a class="f6 link dim ba bw1 ph3 pv2 mb2 dib purple" href="https://github.com/m-onz/obmesh">WEBSITE</a>
      </p>
    </footer>
    </body>
  `
}

},{"../components/nav.js":2,"choo/html":10}],55:[function(require,module,exports){

var html = require('choo/html')
var css = 0
var nav = require('../components/nav.js')
var debounce = require('lodash/debounce')

var prefix = ((require('sheetify/insert')("._d54e8d33 {\n    width: 100%;\n    height: 300px;\n    display: block;\n    overflow: auto;\n  }") || true) && "_d54e8d33")

module.exports = function view (state, emit) {

  var rowHeight = 110
  var tableHeight = 500
  var startRowIndex = Math.floor(state.scrollTop / rowHeight)
  var maxVisibleRows = Math.ceil(tableHeight / rowHeight) // round up
  var maxRowIndex = state.current_index.length - 1
  var endRowIndex = Math.min(maxRowIndex, startRowIndex + maxVisibleRows)
  var remainingRows = state.current_index.length - endRowIndex
  var rows = state.current_index.slice(startRowIndex, endRowIndex + 1)
  var topPadding = startRowIndex * rowHeight
  var bottomPadding = remainingRows * rowHeight
  var onScrollDebounced = debounce(onScroll, 25)

  // console.log({startRowIndex, endRowIndex, topPadding, bottomPadding})

  function onScroll (evt) {
    emit('scroll', evt.target.scrollTop)
  }

  function paddingRow (padding) {
    if (!padding) return ''

    return html`
      <tr style="height: ${padding}px">
        <td></td>
      </tr>
    `
  }

  function loadingSpinner () {
    if (!rows.length) {
      return html `
        <h2>loading items</h2>
      `
    }
  }

  function tableRow (item) {
    var _color = '#222'
    var sender = '----'

    var temp = 'test'+Math.floor(Math.random()*1000)

    var val = Math.round(Math.random()*100)

    setTimeout(function () {
  	var colors = ["#7cc1be","#7cc1be","#7cc1be","#7cc1be","#7cc1be"];
  	var chart = new window.Fancychart(200, 120, colors, 'white');
  	document.getElementById(temp).style.color = colors[4];
  	chart.circles("#"+temp, val, colors[4]);
    }, 100)

    return html`
    <tr>
      <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
           <i class="fas fa-ghost" style="color: ${_color};"></i>
           <dl class="db dib-l w-auto-l lh-title mr6-l">
             <dd class="f6 fw4 ml0">[drone] 5 minutes ago</dd>
             <dd class="f2 f-subheadline-l fw6 ml0">IMG</dd>
           </dl>
          </div>
          <div class="dtc v-mid pl3">
          <dl class="db dib-l w-auto-l lh-title mr6-l">
            <dd class="f6 fw4 ml0">Confidence</dd>
            <dd class="f2 f-subheadline-l fw6 ml0">${val}%</dd>
          </dl>
          </div>
          <div class="dtc v-mid">

            <div id="${temp}" class="chart bar" data-value="68"></div>
          </div>
        </article>
      </li>
    </tr>
    `
  }

  return html`
    <body>
      ${nav(state, emit)}
      <br />
      <main class="w-100 cf helvetica dark-gray pa3 pa4-m pa5-l mw9 center">
        <ul class="list pl0 measure center" style="max-width: 95%!important; height: 500px;">
          <table class="table ${prefix}" onscroll=${onScrollDebounced} style="height: 500px;">
            <tbody>
              ${loadingSpinner()}
              ${paddingRow(topPadding)}
              ${rows.map(tableRow)}
              ${paddingRow(bottomPadding)}
            </tbody>
          </table>
        </ul>
      </main>
    </body>
  `
}

},{"../components/nav.js":2,"choo/html":10,"lodash/debounce":22,"sheetify/insert":47}]},{},[1]);
