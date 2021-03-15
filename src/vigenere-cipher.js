const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(...args){
    if (args.length == 0) this.type = true;
    else this.type = args[0];
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined)
      throw Error;

    let startCode = "A".charCodeAt(0);
    let endCode = "Z".charCodeAt(0);
    let n = endCode-startCode +1;

    let tmpStr = message.toUpperCase();

    let tmpKey = "";
    let j=0;
    for (let i=0; i< tmpStr.length; i++){
      if (tmpStr[i].charCodeAt(0) >= startCode && tmpStr[i].charCodeAt(0) <= endCode){
        tmpKey += key[j++].toUpperCase();
        if (j > key.length-1) j=0;
      }
      else
        tmpKey += tmpStr[i];
    }

    let resStr = ""

    for (let i=0; i < tmpStr.length; i++){
      if (tmpStr[i].charCodeAt(0) >= startCode && tmpStr[i].charCodeAt(0) <= endCode){
        resStr += String.fromCharCode(
          (tmpStr[i].charCodeAt(0)+tmpKey[i].charCodeAt(0)) % n
          + startCode
        );
      }
      else
        resStr += tmpStr[i];
    }

    return this.type ? resStr : resStr.split("").reverse().join("");
  }

  decrypt(message, key) {

    if (message === undefined || key === undefined)
      throw new Error;

    let startCode = "A".charCodeAt(0);
    let endCode = "Z".charCodeAt(0);
    let n = endCode-startCode +1;

    let tmpStr = message.toUpperCase();

    let tmpKey = "";
    let j=0;
    for (let i=0; i< tmpStr.length; i++){
      if (tmpStr[i].charCodeAt(0) >= startCode && tmpStr[i].charCodeAt(0) <= endCode){
        tmpKey += key[j++].toUpperCase();
        if (j > key.length-1) j=0;
      }
      else
        tmpKey += tmpStr[i];
    }
    let resStr = ""

    for (let i=0; i < tmpStr.length; i++){
      if (tmpStr[i].charCodeAt(0) >= startCode && tmpStr[i].charCodeAt(0) <= endCode){
        resStr += String.fromCharCode(
          (tmpStr[i].charCodeAt(0) + n - tmpKey[i].charCodeAt(0)) % n
          + startCode
        );
      }
      else
        resStr += tmpStr[i];
    }

    return this.type ? resStr : resStr.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
