import{_ as c,o as Q,c as r,a as o,b as t,w as a,e as s,d as n,r as d}from"./app.845eadea.js";const $=JSON.parse('{"title":"Filter","description":"","frontmatter":{},"headers":[{"level":2,"title":"filter()","slug":"filter","link":"#filter","children":[]},{"level":2,"title":"reject()","slug":"reject","link":"#reject","children":[]},{"level":2,"title":"shied()","slug":"shied","link":"#shied","children":[]},{"level":2,"title":"choose()","slug":"choose","link":"#choose","children":[]}],"relativePath":"api/filter.md","lastUpdated":1672323093000}'),i={name:"api/filter.md"},h=o("h1",{id:"filter-api",tabindex:"-1"},[s("Filter "),o("a",{class:"header-anchor",href:"#filter-api","aria-hidden":"true"},"#")],-1),m=o("h2",{id:"filter",tabindex:"-1"},[s("filter() "),o("a",{class:"header-anchor",href:"#filter","aria-hidden":"true"},"#")],-1),y=o("p",null,"从列表中筛选符合条件的元素。",-1),_=o("ul",null,[o("li",null,[o("strong",null,"Type")])],-1),g={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"23.011ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 10170.7 1000","aria-hidden":"true"},u=n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(389,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1195.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2473.6,0)"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3232.6,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3717.6,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4202.6,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4500.6,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5167.3,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6445.1,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6723.1,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7252.1,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7807.9,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(9085.7,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(9363.7,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(9892.7,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g></g></g>',1),C=[u],H=n(`<ul><li><strong>Details</strong></li></ul><p>第一个参数传入一个检验函数，第二个参数传入一个列表。</p><p>返回值为一个列表，为所有作为参数可使检验函数函数值为 <code>true</code> 的元素。</p><ul><li><strong>Example</strong></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">v</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//[1, 1, 1]</span></span>
<span class="line"></span></code></pre></div><h2 id="reject" tabindex="-1">reject() <a class="header-anchor" href="#reject" aria-hidden="true">#</a></h2><p>从列表中筛选不符合条件的元素。</p><ul><li><strong>Type</strong></li></ul>`,8),D={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"23.011ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 10170.7 1000","aria-hidden":"true"},A=n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(389,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1195.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2473.6,0)"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3232.6,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3717.6,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4202.6,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4500.6,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5167.3,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6445.1,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6723.1,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7252.1,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7807.9,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(9085.7,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(9363.7,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(9892.7,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g></g></g>',1),x=[A],V=n(`<ul><li><strong>Details</strong></li></ul><p>第一个参数传入一个检验函数，第二个参数传入一个列表。</p><p>返回值为一个列表，为所有作为参数可使检验函数函数值为 <code>false</code> 的元素。</p><ul><li><strong>Example</strong></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">reject</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">v</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> v </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//[4, 5, 4]</span></span>
<span class="line"></span></code></pre></div><h2 id="shied" tabindex="-1">shied() <a class="header-anchor" href="#shied" aria-hidden="true">#</a></h2><p>从列表中删除指定的元素集合中的元素。</p><ul><li><strong>Type</strong></li></ul>`,8),k={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.403ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6366.1 1000","aria-hidden":"true"},M=n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(278,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(807,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1362.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2640.6,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2918.6,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3447.6,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4003.3,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5281.1,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5559.1,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6088.1,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g></g></g>',1),Z=[M],b=n(`<ul><li><strong>Details</strong></li></ul><p>第一个参数传入一个屏蔽集合，第二个参数传入一个待处理列表。</p><p>返回值为待处理列表中删除屏蔽集合中元素后的结果。</p><ul><li><strong>Example</strong></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">shied</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">])([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//[4, 5, 4]</span></span>
<span class="line"></span></code></pre></div><h2 id="choose" tabindex="-1">choose() <a class="header-anchor" href="#choose" aria-hidden="true">#</a></h2><p>从列表中选定指定的元素集合中的元素。</p><ul><li><strong>Type</strong></li></ul>`,8),v={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.403ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6366.1 1000","aria-hidden":"true"},L=n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(278,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(807,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1362.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2640.6,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2918.6,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3447.6,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4003.3,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5281.1,0)"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5559.1,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6088.1,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g></g></g>',1),S=[L],j=n(`<ul><li><strong>Details</strong></li></ul><p>第一个参数传入一个允许通入集合，第二个参数传入一个待处理列表。</p><p>返回值为待处理列表与允许通入集合的交集列表。</p><ul><li><strong>Example</strong></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">choose</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">])([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//[1, 1, 1]</span></span>
<span class="line"></span></code></pre></div>`,5);function B(P,I,N,R,J,z){const e=d("mo"),l=d("mi"),T=d("math"),p=d("mjx-assistive-mml");return Q(),r("div",null,[h,m,y,_,o("mjx-container",g,[(Q(),r("svg",f,C)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(T,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("B")]),_:1}),t(l,null,{default:a(()=>[s("o")]),_:1}),t(l,null,{default:a(()=>[s("o")]),_:1}),t(l,null,{default:a(()=>[s("l")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1})]),_:1})]),_:1})]),H,o("mjx-container",D,[(Q(),r("svg",w,x)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(T,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("B")]),_:1}),t(l,null,{default:a(()=>[s("o")]),_:1}),t(l,null,{default:a(()=>[s("o")]),_:1}),t(l,null,{default:a(()=>[s("l")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1})]),_:1})]),_:1})]),V,o("mjx-container",k,[(Q(),r("svg",F,Z)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(T,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1})]),_:1})]),_:1})]),b,o("mjx-container",v,[(Q(),r("svg",E,S)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(T,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1})]),_:1})]),_:1})]),j])}const O=c(i,[["render",B]]);export{$ as __pageData,O as default};
