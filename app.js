const _0x555d4a=_0x5137;function _0x5137(_0x486432,_0x5640e1){const _0x26f272=_0x26f2();return _0x5137=function(_0x513777,_0xe98a3e){_0x513777=_0x513777-0x170;let _0x1f9574=_0x26f272[_0x513777];return _0x1f9574;},_0x5137(_0x486432,_0x5640e1);}(function(_0x223d9f,_0x47f4eb){const _0x3fa499=_0x5137,_0x4094ff=_0x223d9f();while(!![]){try{const _0x1f3fa2=parseInt(_0x3fa499(0x170))/0x1+parseInt(_0x3fa499(0x1b6))/0x2*(parseInt(_0x3fa499(0x1f1))/0x3)+-parseInt(_0x3fa499(0x1b5))/0x4+parseInt(_0x3fa499(0x1ca))/0x5*(-parseInt(_0x3fa499(0x1bb))/0x6)+parseInt(_0x3fa499(0x192))/0x7*(parseInt(_0x3fa499(0x196))/0x8)+-parseInt(_0x3fa499(0x17f))/0x9*(-parseInt(_0x3fa499(0x1ed))/0xa)+parseInt(_0x3fa499(0x1da))/0xb;if(_0x1f3fa2===_0x47f4eb)break;else _0x4094ff['push'](_0x4094ff['shift']());}catch(_0x5c7987){_0x4094ff['push'](_0x4094ff['shift']());}}}(_0x26f2,0xb4831));const Game={'canvas':null,'ctx':null,'foods':[],'MAX_FOODS_AMOUNT':0xa,'ate_amount':0x0,'STUCKING_AMOUNT':0x1f4,'DetectCount':0x0,'MAX_DETECT_COUNT':0xa,'BeforeClick':0x0,'ClickTime':0x0,'IntervalList':[],'checkAutoClicker':function(){const _0x51ee7c=_0x5137;this['ClickTime']=new Date()[_0x51ee7c(0x1b1)]();let _0x7b2d08=this[_0x51ee7c(0x1ac)]-this[_0x51ee7c(0x177)];return this[_0x51ee7c(0x177)]!==0x0&&(this[_0x51ee7c(0x1a8)][_0x51ee7c(0x186)](_0x7b2d08),this[_0x51ee7c(0x1a8)][_0x51ee7c(0x1b2)]>this[_0x51ee7c(0x18d)]&&this[_0x51ee7c(0x1a8)][_0x51ee7c(0x1fa)](),this['IntervalList'][_0x51ee7c(0x1b2)]===this[_0x51ee7c(0x18d)]&&this[_0x51ee7c(0x1a8)][_0x51ee7c(0x1d7)](_0x442a08=>_0x442a08===this[_0x51ee7c(0x1a8)][0x0])?this[_0x51ee7c(0x180)]++:this[_0x51ee7c(0x180)]=0x0),this[_0x51ee7c(0x177)]=this[_0x51ee7c(0x1ac)],this[_0x51ee7c(0x180)]>=this[_0x51ee7c(0x18d)];},'EVENT_INTERVAL':0xb4,'chinese_image':null,'EVENTS':[CHINESE=0x0,PLASTIC=0x1],'canvas':null,'ctx':null,'foods':[],'MAX_FOODS_AMOUNT':0xa,'ate_amount':0x0,'STUCKING_AMOUNT':0x1f4,'EVENT_INTERVAL':0xb4,'chinese_image':null,'chinese':{'x':0x0,'y':0x0,'size':0x32,'speed':1.5,'image':null,'active':![],'touchStartTime':null},'EVENTS':{'CHINESE':0x0},'init':function(){const _0x4c5ab2=_0x5137;this[_0x4c5ab2(0x1c8)]=$('#game')[0x0],this[_0x4c5ab2(0x1b4)]=this[_0x4c5ab2(0x1c8)][_0x4c5ab2(0x188)]('2d'),FoodSelector['init'](),GameLog['init'](),this[_0x4c5ab2(0x1c8)]['addEventListener'](_0x4c5ab2(0x1d1),_0x3ca51b=>this['addFood'](_0x3ca51b)),Deer['image']=new Image(),Deer[_0x4c5ab2(0x19b)][_0x4c5ab2(0x17a)]='imgs/Deer.png',Deer[_0x4c5ab2(0x19b)][_0x4c5ab2(0x17b)]=()=>{const _0x2aeb88=_0x4c5ab2;this[_0x2aeb88(0x207)](),this[_0x2aeb88(0x1a6)]();},this[_0x4c5ab2(0x19e)][_0x4c5ab2(0x19b)]=new Image(),this['chinese'][_0x4c5ab2(0x19b)][_0x4c5ab2(0x17a)]='imgs/Chinese.png',Deer['x']=this['canvas'][_0x4c5ab2(0x19f)]/0x2-Deer[_0x4c5ab2(0x17c)]/0x2,Deer['y']=this['canvas']['height']/0x2-Deer[_0x4c5ab2(0x17c)]/0x2,this[_0x4c5ab2(0x1fe)](),window[_0x4c5ab2(0x1fd)](_0x4c5ab2(0x1f8),()=>this[_0x4c5ab2(0x1fe)]()),this[_0x4c5ab2(0x1de)]=[],setInterval(()=>{const _0x1a5766=_0x4c5ab2;Deer[_0x1a5766(0x183)](),this[_0x1a5766(0x182)]=0x0;},0x3c*0x3e8),setInterval(()=>{const _0x250c40=_0x4c5ab2;this[_0x250c40(0x171)]();},0x3e8/0x3c),setInterval(()=>{const _0xadb569=_0x4c5ab2;Deer[_0xadb569(0x1b7)]+=0x1,Deer[_0xadb569(0x1b7)]>=Deer[_0xadb569(0x1a5)]&&Deer[_0xadb569(0x19c)]('老衰');},Deer[_0x4c5ab2(0x1d8)]*0x3e8),setInterval(()=>{const _0xe852b6=_0x4c5ab2;this[_0xe852b6(0x181)]();},this['EVENT_INTERVAL']*0x3e8),this['loadDeer']();},'gameUpdate':function(){const _0x4179c2=_0x5137;this[_0x4179c2(0x1b4)][_0x4179c2(0x194)](0x0,0x0,this[_0x4179c2(0x1c8)][_0x4179c2(0x19f)],this[_0x4179c2(0x1c8)][_0x4179c2(0x198)]),this['drawFoods'](),this[_0x4179c2(0x1c0)](),this[_0x4179c2(0x1e8)](),this[_0x4179c2(0x187)](),this[_0x4179c2(0x207)](),this[_0x4179c2(0x1e3)](),this[_0x4179c2(0x1a6)]();if(Deer[_0x4179c2(0x197)]==undefined||Deer[_0x4179c2(0x197)]==null)Deer['init']();},'resizeCanvas':function(){const _0x2c5aee=_0x5137;this[_0x2c5aee(0x1c8)][_0x2c5aee(0x19f)]=window['innerWidth']/0x2,this[_0x2c5aee(0x1c8)][_0x2c5aee(0x198)]=window['innerHeight'],this[_0x2c5aee(0x1a6)](),FoodSelector[_0x2c5aee(0x1e4)]();},'drawText':function(_0x45cffc,_0x278788,_0x169e13){const _0x4f8690=_0x5137;this[_0x4f8690(0x1b4)][_0x4f8690(0x1e6)]='black',this[_0x4f8690(0x1b4)][_0x4f8690(0x1f0)]=_0x4f8690(0x17d),this[_0x4f8690(0x1b4)][_0x4f8690(0x18e)](_0x45cffc,_0x278788,_0x169e13);},'drawDeer':function(){const _0xd85071=_0x5137;if(Deer[_0xd85071(0x19b)]&&Deer[_0xd85071(0x19b)][_0xd85071(0x1ae)]){const _0x57024f=Deer[_0xd85071(0x19b)][_0xd85071(0x19f)]/Deer[_0xd85071(0x19b)][_0xd85071(0x198)],_0x15f5ca=Deer[_0xd85071(0x17c)],_0x1b818d=Deer[_0xd85071(0x17c)]/_0x57024f;this['ctx']['save'](),Deer['facingLeft']?(this[_0xd85071(0x1b4)][_0xd85071(0x178)](-0x1,0x1),this[_0xd85071(0x1b4)][_0xd85071(0x208)](Deer[_0xd85071(0x19b)],-Deer['x']-_0x15f5ca,Deer['y'],_0x15f5ca,_0x1b818d)):this['ctx'][_0xd85071(0x208)](Deer[_0xd85071(0x19b)],Deer['x'],Deer['y'],_0x15f5ca,_0x1b818d),this[_0xd85071(0x1b4)][_0xd85071(0x1fc)]();}},'changeDeerSize':function(_0x199729){const _0x4e7d4d=_0x5137;Deer[_0x4e7d4d(0x17c)]=_0x199729,this[_0x4e7d4d(0x207)]();},'updateDeerInfo':function(){const _0x9b8ceb=_0x5137;this[_0x9b8ceb(0x1ff)](_0x9b8ceb(0x1f5)+Deer['name'],0xa,0x1e),this['drawText'](_0x9b8ceb(0x1a0)+Deer[_0x9b8ceb(0x203)],0xa,0x3c),this[_0x9b8ceb(0x1ff)]('年齢:\x20'+Deer[_0x9b8ceb(0x1b7)]+'歳',0xa,0x5a),this[_0x9b8ceb(0x1ff)](_0x9b8ceb(0x18f)+Math[_0x9b8ceb(0x184)](Deer['size']*0xa)/0xa,0xa,0x78);},'addFood':function(_0x140b8e){const _0x48396e=_0x5137,_0x2c42e5=FoodSelector['getSelectedFood']();if(this['checkAutoClicker']()){Deer['death'](_0x48396e(0x1e0));return;}if(_0x2c42e5[_0x48396e(0x19d)]&&_0x2c42e5[_0x48396e(0x1c5)]>0x0)_0x2c42e5[_0x48396e(0x1c5)]--;else{if(_0x2c42e5['limit']&&_0x2c42e5[_0x48396e(0x1c5)]===0x0){FoodSelector['unlockSpecialItem']('黒豆',![]);return;}}if(this[_0x48396e(0x1de)][_0x48396e(0x1b2)]<this[_0x48396e(0x1fb)]&&_0x2c42e5[_0x48396e(0x1ab)]){const _0x2b4374=this[_0x48396e(0x1c8)][_0x48396e(0x1b3)](),_0x5e6262=_0x140b8e[_0x48396e(0x1e9)]-_0x2b4374[_0x48396e(0x1a9)],_0x35b854=_0x140b8e['clientY']-_0x2b4374[_0x48396e(0x1cd)];this[_0x48396e(0x1de)][_0x48396e(0x186)]({'x':_0x5e6262,'y':_0x35b854,'size':_0x2c42e5['size'],'image':_0x2c42e5[_0x48396e(0x1e5)],'value':_0x2c42e5[_0x48396e(0x1ec)],'name':_0x2c42e5[_0x48396e(0x197)]});}},'drawFoods':function(){const _0x50494d=_0x5137;for(let _0x7938ad of this[_0x50494d(0x1de)]){_0x7938ad[_0x50494d(0x19b)]&&_0x7938ad[_0x50494d(0x19b)]['complete']&&this[_0x50494d(0x1b4)][_0x50494d(0x208)](_0x7938ad[_0x50494d(0x19b)],_0x7938ad['x']-_0x7938ad[_0x50494d(0x17c)]/0x2,_0x7938ad['y']-_0x7938ad[_0x50494d(0x17c)]/0x2,_0x7938ad[_0x50494d(0x17c)],_0x7938ad[_0x50494d(0x17c)]);}},'updateDeerMovement':function(){const _0x277b1f=_0x5137;Deer['move'](this[_0x277b1f(0x1de)]),Deer['eat'](this[_0x277b1f(0x1de)]);},'fireRandomEvent':function(){const _0xfcab55=_0x5137,_0x487c27=Object[_0xfcab55(0x1d3)](this[_0xfcab55(0x1a2)]),_0x550483=Math['floor'](Math['random']()*_0x487c27['length']),_0xc2f1f8=this[_0xfcab55(0x1a2)][_0x487c27[_0x550483]];this[_0xfcab55(0x176)](_0xc2f1f8);},'fireEvent':function(_0x210f9f){const _0x211db5=_0x5137;switch(_0x210f9f){case this['EVENTS'][_0x211db5(0x1db)]:this[_0x211db5(0x17e)]=new Image(),this[_0x211db5(0x17e)]['src']=_0x211db5(0x1a4),Deer[_0x211db5(0x19b)][_0x211db5(0x17b)]=()=>{const _0x1db631=_0x211db5;this[_0x1db631(0x1e3)]();};break;case this['EVENTS'][_0x211db5(0x1b9)]:break;}},'fireEvent':function(_0x5ba889){const _0x209619=_0x5137;switch(_0x5ba889){case this[_0x209619(0x1a2)]['CHINESE']:this[_0x209619(0x19e)][_0x209619(0x1c9)]=!![],this[_0x209619(0x19e)]['x']=Math[_0x209619(0x1eb)]()*this[_0x209619(0x1c8)][_0x209619(0x19f)],this[_0x209619(0x19e)]['y']=Math[_0x209619(0x1eb)]()*this['canvas'][_0x209619(0x198)],this['chinese'][_0x209619(0x191)]=null,setTimeout(()=>{const _0x36c58e=_0x209619;this['chinese']['active']=![],FoodSelector[_0x36c58e(0x18a)]('黒豆',!![]);},0x4e20);break;case this['EVENTS'][_0x209619(0x1b9)]:break;}},'updateChineseMovement':function(){const _0x31a0da=_0x5137;if(this[_0x31a0da(0x19e)][_0x31a0da(0x1c9)]){const _0x178020=Deer['x']-this[_0x31a0da(0x19e)]['x'],_0x14b092=Deer['y']-this[_0x31a0da(0x19e)]['y'],_0x2ab136=Math[_0x31a0da(0x1df)](_0x178020*_0x178020+_0x14b092*_0x14b092);_0x2ab136>this[_0x31a0da(0x19e)]['speed']&&(this[_0x31a0da(0x19e)]['x']+=_0x178020/_0x2ab136*this['chinese']['speed'],this['chinese']['y']+=_0x14b092/_0x2ab136*this['chinese'][_0x31a0da(0x205)]);}},'drawChinese':function(){const _0x27635c=_0x5137;if(this[_0x27635c(0x19e)][_0x27635c(0x1c9)]&&this[_0x27635c(0x19e)][_0x27635c(0x19b)]&&this[_0x27635c(0x19e)][_0x27635c(0x19b)][_0x27635c(0x1ae)]){const _0x16f628=this['chinese'][_0x27635c(0x17c)],_0x437ef3=this[_0x27635c(0x19e)][_0x27635c(0x17c)];this[_0x27635c(0x1b4)][_0x27635c(0x208)](this[_0x27635c(0x19e)][_0x27635c(0x19b)],this[_0x27635c(0x19e)]['x']-_0x16f628/0x2,this[_0x27635c(0x19e)]['y']-_0x437ef3/0x2,_0x16f628,_0x437ef3);}},'checkChineseContact':function(){const _0x6099c8=_0x5137;if(this['chinese'][_0x6099c8(0x1c9)]){const _0x31b831=Deer['x']+Deer['size']/0x2-(this[_0x6099c8(0x19e)]['x']+this[_0x6099c8(0x19e)][_0x6099c8(0x17c)]/0x2),_0xdf8c36=Deer['y']+Deer[_0x6099c8(0x17c)]/0x2-(this[_0x6099c8(0x19e)]['y']+this[_0x6099c8(0x19e)][_0x6099c8(0x17c)]/0x2),_0x420ae7=Math[_0x6099c8(0x1df)](_0x31b831*_0x31b831+_0xdf8c36*_0xdf8c36);if(_0x420ae7<Deer[_0x6099c8(0x17c)]/0x2+this[_0x6099c8(0x19e)][_0x6099c8(0x17c)]/0x2){if(!this['chinese'][_0x6099c8(0x191)])this[_0x6099c8(0x19e)]['touchStartTime']=Date[_0x6099c8(0x1e1)]();else{const _0x4ccc7d=Date[_0x6099c8(0x1e1)]()-this[_0x6099c8(0x19e)][_0x6099c8(0x191)];_0x4ccc7d>=0x3e8&&(Deer['death']('中国人に蹴られた'),this[_0x6099c8(0x19e)][_0x6099c8(0x1c9)]=![]);}}else this[_0x6099c8(0x19e)]['touchStartTime']=null;}},'loadDeer':function(){const _0x4dd3f5=_0x5137;let _0x2853d3=Deer[_0x4dd3f5(0x1c4)]();this['foods']=[],_0x2853d3==null||_0x2853d3[_0x4dd3f5(0x1f6)]?Deer[_0x4dd3f5(0x1cc)]():(Deer[_0x4dd3f5(0x197)]=_0x2853d3[_0x4dd3f5(0x197)],Deer['level']=_0x2853d3[_0x4dd3f5(0x203)],Deer[_0x4dd3f5(0x1b7)]=_0x2853d3[_0x4dd3f5(0x1b7)],Deer['bornTime']=_0x2853d3[_0x4dd3f5(0x199)],Deer['deathAge']=_0x2853d3[_0x4dd3f5(0x1a5)],Deer[_0x4dd3f5(0x1f6)]=_0x2853d3[_0x4dd3f5(0x1f6)],this[_0x4dd3f5(0x182)]=_0x2853d3[_0x4dd3f5(0x182)],this[_0x4dd3f5(0x175)](_0x2853d3[_0x4dd3f5(0x17c)]),this[_0x4dd3f5(0x1a6)]());}},FoodSelector={'canvas':null,'ctx':null,'foodTypes':[{'name':_0x555d4a(0x1f3),'image':_0x555d4a(0x189),'size':0x14,'value':0x1,'unlocked':!![],'limit':null,'remaining':null},{'name':_0x555d4a(0x174),'image':'imgs/Apple.png','size':0x19,'value':0x2,'unlocked':![],'limit':0x5,'remaining':0x5},{'name':'黒豆','image':'imgs/Kuromame.png','size':0x1e,'value':0x5,'unlocked':![],'limit':0x5,'remaining':0x5}],'selectedFoodIndex':0x0,'size':0x32,'padding':0xa,'init':function(){const _0x134b6b=_0x555d4a;this['canvas']=$(_0x134b6b(0x1ba))[0x0],this['ctx']=this[_0x134b6b(0x1c8)][_0x134b6b(0x188)]('2d'),this[_0x134b6b(0x1f7)]()['then'](()=>{const _0x35ef92=_0x134b6b;this[_0x35ef92(0x193)](),this[_0x35ef92(0x18c)]();}),this['canvas']['addEventListener'](_0x134b6b(0x1d1),_0x4e1bc7=>this['handleSelection'](_0x4e1bc7));},'loadFoodImages':function(){const _0x1d64e5=_0x555d4a,_0xde063c=this[_0x1d64e5(0x1e7)][_0x1d64e5(0x1a7)](_0x401475=>_0x401475[_0x1d64e5(0x1ab)])[_0x1d64e5(0x1be)](_0x187254=>{return new Promise((_0x2214fe,_0x4f8049)=>{const _0x518853=_0x5137,_0x33a14f=new Image();_0x33a14f['onload']=()=>{const _0x46aaea=_0x5137;_0x187254[_0x46aaea(0x1e5)]=_0x33a14f,_0x2214fe();},_0x33a14f[_0x518853(0x1f9)]=_0x4f8049,_0x33a14f[_0x518853(0x17a)]=_0x187254[_0x518853(0x19b)];});});return Promise[_0x1d64e5(0x1e2)](_0xde063c);},'initCanvas':function(){const _0x3981d6=_0x555d4a,_0x215907=this['foodTypes']['filter'](_0x237d9d=>_0x237d9d['unlocked']),_0x5e9421=_0x215907[_0x3981d6(0x1b2)]*(this[_0x3981d6(0x17c)]+this['padding'])+this['padding'];this[_0x3981d6(0x1c8)][_0x3981d6(0x19f)]=_0x5e9421,this[_0x3981d6(0x1c8)][_0x3981d6(0x198)]=this[_0x3981d6(0x17c)]+0x2*this[_0x3981d6(0x1f2)],this[_0x3981d6(0x1e4)]();},'position':function(){const _0x5c0c50=_0x555d4a,_0x4fc143=$(_0x5c0c50(0x1c7))[0x0],_0xe71d9d=_0x4fc143[_0x5c0c50(0x1b3)]();this['canvas'][_0x5c0c50(0x1ea)][_0x5c0c50(0x1e4)]=_0x5c0c50(0x1cb),this['canvas'][_0x5c0c50(0x1ea)][_0x5c0c50(0x1cd)]=_0xe71d9d[_0x5c0c50(0x1cd)]+0xa+'px',this[_0x5c0c50(0x1c8)][_0x5c0c50(0x1ea)][_0x5c0c50(0x1a9)]=_0xe71d9d['right']+0xa+'px';const _0x184247=window[_0x5c0c50(0x173)]-_0xe71d9d[_0x5c0c50(0x1bd)]-0x14,_0x453534=this[_0x5c0c50(0x1e7)][_0x5c0c50(0x1a7)](_0xf4007c=>_0xf4007c['unlocked']),_0x25c43f=_0x453534[_0x5c0c50(0x1b2)]*(this['size']+this[_0x5c0c50(0x1f2)])+this[_0x5c0c50(0x1f2)];this[_0x5c0c50(0x1c8)][_0x5c0c50(0x19f)]=Math[_0x5c0c50(0x1d5)](_0x184247,_0x25c43f),this[_0x5c0c50(0x1c8)][_0x5c0c50(0x198)]=this[_0x5c0c50(0x17c)]+0x2*this[_0x5c0c50(0x1f2)],this[_0x5c0c50(0x18c)]();},'handleSelection':function(_0x2dc285){const _0x3f8e5e=_0x555d4a,_0x232984=this[_0x3f8e5e(0x1c8)]['getBoundingClientRect'](),_0x35646a=_0x2dc285['clientX']-_0x232984[_0x3f8e5e(0x1a9)],_0x22b5d7=this['foodTypes']['filter'](_0x53813e=>_0x53813e['unlocked']),_0x12fc83=Math[_0x3f8e5e(0x184)](_0x35646a/(this[_0x3f8e5e(0x17c)]+this['padding']));_0x12fc83>=0x0&&_0x12fc83<_0x22b5d7[_0x3f8e5e(0x1b2)]&&(this[_0x3f8e5e(0x1ef)]=this[_0x3f8e5e(0x1e7)][_0x3f8e5e(0x1aa)](_0x22b5d7[_0x12fc83]),this[_0x3f8e5e(0x18c)]());},'draw':function(){const _0x1db116=_0x555d4a;this[_0x1db116(0x1b4)]['clearRect'](0x0,0x0,this['canvas'][_0x1db116(0x19f)],this[_0x1db116(0x1c8)][_0x1db116(0x198)]),this[_0x1db116(0x1b4)][_0x1db116(0x1e6)]='rgba(200,\x20200,\x20200,\x200.7)',this[_0x1db116(0x1b4)][_0x1db116(0x1d6)](0x0,0x0,this[_0x1db116(0x1c8)][_0x1db116(0x19f)],this[_0x1db116(0x1c8)]['height']);const _0x118776=this[_0x1db116(0x1e7)][_0x1db116(0x1a7)](_0x1e9986=>_0x1e9986[_0x1db116(0x1ab)]);_0x118776['forEach']((_0x5542d8,_0x42058b)=>{const _0x5cb09b=_0x1db116,_0x4455a2=_0x42058b*(this[_0x5cb09b(0x17c)]+this[_0x5cb09b(0x1f2)])+this['padding'],_0x2f7f31=this[_0x5cb09b(0x1f2)];_0x5542d8===this[_0x5cb09b(0x1e7)][this[_0x5cb09b(0x1ef)]]&&(this['ctx'][_0x5cb09b(0x1e6)]=_0x5cb09b(0x185),this[_0x5cb09b(0x1b4)][_0x5cb09b(0x1d6)](_0x4455a2-0x2,_0x2f7f31-0x2,this['size']+0x4,this[_0x5cb09b(0x17c)]+0x4)),_0x5542d8[_0x5cb09b(0x1e5)]&&this[_0x5cb09b(0x1b4)][_0x5cb09b(0x208)](_0x5542d8[_0x5cb09b(0x1e5)],_0x4455a2,_0x2f7f31,this['size'],this[_0x5cb09b(0x17c)]);});},'unlockSpecialItem':function(_0x1f6ef0,_0x5760fd){const _0x16a84e=_0x555d4a,_0x4cddf9=this['foodTypes'][_0x16a84e(0x1ce)](_0x49fc0a=>_0x49fc0a[_0x16a84e(0x197)]===_0x1f6ef0);_0x4cddf9&&(_0x4cddf9[_0x16a84e(0x1ab)]=_0x5760fd,_0x4cddf9[_0x16a84e(0x1c5)]=_0x4cddf9['limit'],this[_0x16a84e(0x1cc)]());},'getSelectedFood':function(){const _0x23f8b5=_0x555d4a;return this['foodTypes'][this[_0x23f8b5(0x1ef)]];}},Deer={'name':null,'level':0x0,'age':0x0,'bornTime':null,'deathAge':null,'dead':![],'facingLeft':![],'AGE_INTERVAL':0xb4,'size':0x32,'image':null,'x':0x0,'y':0x0,'speed':0x2,'init':function(){const _0x4d5281=_0x555d4a;this[_0x4d5281(0x197)]=prompt(_0x4d5281(0x1ad)),this[_0x4d5281(0x203)]=0x0,this[_0x4d5281(0x1b7)]=0x0,this[_0x4d5281(0x199)]=Date[_0x4d5281(0x1e1)](),this['size']=0x32,this['dead']=![],this['deathAge']=Math['floor'](Math[_0x4d5281(0x1eb)]()*0x6)+0x12,Game[_0x4d5281(0x182)]=0x0,Game['updateDeerInfo']();},'save':function(){const _0x265d6e=_0x555d4a;let _0x475baa={'name':this[_0x265d6e(0x197)],'level':this[_0x265d6e(0x203)],'age':this[_0x265d6e(0x1b7)],'size':this['size'],'dead':this[_0x265d6e(0x1f6)],'bornTime':this[_0x265d6e(0x199)],'deathAge':this[_0x265d6e(0x1a5)],'ate_amount':Game[_0x265d6e(0x182)]};localStorage['setItem']('gameData',this[_0x265d6e(0x1f6)]?null:JSON[_0x265d6e(0x1d0)](_0x475baa)),console[_0x265d6e(0x179)](_0x265d6e(0x1cf));},'load':function(){const _0x3c0963=_0x555d4a;let _0x355fb5=JSON[_0x3c0963(0x1bc)](localStorage[_0x3c0963(0x1ee)]('gameData'));return console[_0x3c0963(0x179)](_0x3c0963(0x202)),console[_0x3c0963(0x179)](_0x355fb5),_0x355fb5;},'move':function(_0x1d4d8d){const _0x421bad=_0x555d4a;if(_0x1d4d8d[_0x421bad(0x1b2)]>0x0){const _0x1bf3c6=_0x1d4d8d[0x0],_0x696647=_0x1bf3c6['x']-(this['x']+this[_0x421bad(0x17c)]/0x2),_0x2fd65c=_0x1bf3c6['y']-(this['y']+this['size']/0x2),_0x3100dd=Math[_0x421bad(0x1df)](_0x696647*_0x696647+_0x2fd65c*_0x2fd65c);if(_0x3100dd>this['speed']){const _0x581e89=this['x'];this['x']+=_0x696647/_0x3100dd*this[_0x421bad(0x205)],this['y']+=_0x2fd65c/_0x3100dd*this[_0x421bad(0x205)],this[_0x421bad(0x1c1)]=this['x']<_0x581e89;}else this['x']=_0x1bf3c6['x']-this['size']/0x2,this['y']=_0x1bf3c6['y']-this['size']/0x2;}},'eat':function(_0x35c429){const _0xa73f77=_0x555d4a;if(_0x35c429['length']>0x0){const _0x33d580=_0x35c429[0x0],_0x5ce67d=_0x33d580['x']-(this['x']+this['size']/0x2),_0x13b547=_0x33d580['y']-(this['y']+this[_0xa73f77(0x17c)]/0x2),_0x506b3b=Math[_0xa73f77(0x1df)](_0x5ce67d*_0x5ce67d+_0x13b547*_0x13b547);_0x506b3b<this[_0xa73f77(0x17c)]/0x2+_0x33d580[_0xa73f77(0x17c)]/0x2&&(Game[_0xa73f77(0x175)](this['size']+0.1),Game[_0xa73f77(0x182)]++,Game[_0xa73f77(0x182)]>Game[_0xa73f77(0x1c6)]&&(this[_0xa73f77(0x19c)](_0xa73f77(0x19a)+_0x33d580[_0xa73f77(0x197)]+'が詰まった'),this[_0xa73f77(0x182)]=0x0),_0x33d580[_0xa73f77(0x197)]=='黒豆'&&(Deer[_0xa73f77(0x1a5)]+=_0x33d580['value'],GameLog['addLog'](_0xa73f77(0x1dd)+_0x33d580[_0xa73f77(0x1ec)]+_0xa73f77(0x1af),_0xa73f77(0x1dc))),_0x35c429['shift']());}},'formatSurvivalTime':function(_0x198a57){const _0x3a0f7b=_0x555d4a,_0x8339da=Math[_0x3a0f7b(0x184)](_0x198a57/0x3e8),_0x2b0d1e=Math[_0x3a0f7b(0x184)](_0x8339da/0x3c),_0x58f946=Math[_0x3a0f7b(0x184)](_0x2b0d1e/0x3c),_0x45d259=Math['floor'](_0x58f946/0x18),_0xe87f20=_0x58f946%0x18,_0x756480=_0x2b0d1e%0x3c,_0x4b43fa=_0x8339da%0x3c;let _0x48d204='';if(_0x45d259>0x0)_0x48d204+=_0x45d259+'日\x20';if(_0xe87f20>0x0||_0x45d259>0x0)_0x48d204+=_0xe87f20+_0x3a0f7b(0x1b8);if(_0x756480>0x0||_0xe87f20>0x0||_0x45d259>0x0)_0x48d204+=_0x756480+'分\x20';return _0x48d204+=_0x4b43fa+'秒',_0x48d204;},'death':function(_0x4560fd){const _0x4454ea=_0x555d4a;Deer[_0x4454ea(0x1f6)]=!![];let _0x299bb7=Date[_0x4454ea(0x1e1)]()-Deer[_0x4454ea(0x199)];_0x4560fd=_0x4560fd==null?'なし':_0x4560fd,GameLog['addLog'](Deer[_0x4454ea(0x197)]+_0x4454ea(0x1a1)+Deer[_0x4454ea(0x203)]+_0x4454ea(0x200)+Deer[_0x4454ea(0x1b7)]+_0x4454ea(0x1c2)+this[_0x4454ea(0x1a3)](_0x299bb7)+_0x4454ea(0x195)+Math[_0x4454ea(0x184)](Deer[_0x4454ea(0x17c)]*0xa)/0xa+_0x4454ea(0x204)+_0x4560fd,_0x4454ea(0x1dc)),Deer[_0x4454ea(0x1cc)]();}};$(document)[_0x555d4a(0x201)](function(){const _0x4d3c6b=_0x555d4a;Game[_0x4d3c6b(0x1cc)]();}),$(window)['on'](_0x555d4a(0x1f4),function(){Deer['save']();});const GameLog={'canvas':null,'ctx':null,'logs':[],'maxLogs':0x5,'logHeight':0x1e,'padding':0x5,'messageTypes':{'INFO':{'color':_0x555d4a(0x190)},'WARNING':{'color':'orange'},'ERROR':{'color':_0x555d4a(0x18b)}},'init':function(){const _0x2c0cf9=_0x555d4a;this['canvas']=document[_0x2c0cf9(0x206)]('game-log'),this[_0x2c0cf9(0x1b4)]=this[_0x2c0cf9(0x1c8)][_0x2c0cf9(0x188)]('2d'),this[_0x2c0cf9(0x1c8)][_0x2c0cf9(0x19f)]=0x12c,this[_0x2c0cf9(0x1c8)][_0x2c0cf9(0x198)]=this['maxLogs']*(this[_0x2c0cf9(0x1d9)]+this[_0x2c0cf9(0x1f2)]);},'addLog':function(_0x551e9b,_0x3f983c=_0x555d4a(0x1dc)){const _0x1db888=_0x555d4a;this[_0x1db888(0x1b0)][_0x1db888(0x1b2)]>=this['maxLogs']&&this[_0x1db888(0x1b0)][_0x1db888(0x1fa)](),this[_0x1db888(0x1b0)]['push']({'message':_0x551e9b,'type':_0x3f983c}),this[_0x1db888(0x1c3)]();},'drawLogs':function(){const _0x2516a1=_0x555d4a;this[_0x2516a1(0x1b4)][_0x2516a1(0x194)](0x0,0x0,this[_0x2516a1(0x1c8)][_0x2516a1(0x19f)],this[_0x2516a1(0x1c8)][_0x2516a1(0x198)]),this[_0x2516a1(0x1b0)][_0x2516a1(0x1d2)]((_0x3b5afa,_0x2bc4b5)=>{const _0x5571c1=_0x2516a1,{color:_0xd12f21}=this['messageTypes'][_0x3b5afa['type']]||this[_0x5571c1(0x1d4)]['INFO'];this[_0x5571c1(0x1b4)][_0x5571c1(0x1e6)]=_0xd12f21,this[_0x5571c1(0x1b4)][_0x5571c1(0x1f0)]=_0x5571c1(0x172),this[_0x5571c1(0x1b4)]['fillText'](_0x3b5afa[_0x5571c1(0x1bf)],this[_0x5571c1(0x1f2)],(_0x2bc4b5+0x1)*(this['logHeight']+this['padding']));});}};function _0x26f2(){const _0x286f77=['indexOf','unlocked','ClickTime','鹿の名前を決めてください！','complete','年増えた！','logs','getTime','length','getBoundingClientRect','ctx','3199372aTOxiX','4PoJhNX','age','時間\x20','PLASTIC','#foodSelector','378xSuLvQ','parse','right','map','message','updateDeerMovement','facingLeft','歳\x0a生存時間:\x20','drawLogs','load','remaining','STUCKING_AMOUNT','#game','canvas','active','95515xOduyA','absolute','init','top','find','Data\x20Saved!','stringify','click','forEach','keys','messageTypes','min','fillRect','every','AGE_INTERVAL','logHeight','3803228tBdYXK','CHINESE','INFO','寿命が','foods','sqrt','オートクリックを検知しました。','now','all','drawChinese','position','loadedImage','fillStyle','foodTypes','updateChineseMovement','clientX','style','random','value','36130YCuZoz','getItem','selectedFoodIndex','font','620409QccOKy','padding','鹿せんべい','beforeunload','名前:\x20','dead','loadFoodImages','resize','onerror','shift','MAX_FOODS_AMOUNT','restore','addEventListener','resizeCanvas','drawText','\x0a年齢:\x20','ready','Data\x20Loaded!','level','\x0a原因:\x20','speed','getElementById','drawDeer','drawImage','694016Mmvjoj','gameUpdate','16px\x20Arial','innerWidth','りんご','changeDeerSize','fireEvent','BeforeClick','scale','log','src','onload','size','20px\x20Arial','chinese_image','261suAuBm','DetectCount','fireRandomEvent','ate_amount','save','floor','rgba(100,\x20100,\x20255,\x200.5)','push','checkChineseContact','getContext','imgs/ShikaSenbei.png','unlockSpecialItem','red','draw','MAX_DETECT_COUNT','fillText','サイズ:\x20','blue','touchStartTime','14mIrSGP','initCanvas','clearRect','\x0aサイズ:\x20','4738248klMIjj','name','height','bornTime','のどに','image','death','limit','chinese','width','レベル:\x20','は死んでしまった！\x0a記録:\x0aレベル:\x20','EVENTS','formatSurvivalTime','imgs/Chinese.png','deathAge','updateDeerInfo','filter','IntervalList','left'];_0x26f2=function(){return _0x286f77;};return _0x26f2();}
