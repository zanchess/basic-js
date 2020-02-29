module.exports = function repeater(str, options) {

	let additionRepeat = null,
			output = null,
			allStringRepeat = "",
			arr = [];

  if (typeof str != "string")  { //перевод в строку если не строка
		str+='';
	}
	if (typeof options.addition != "string" && options.hasOwnProperty("addition")) {//перевод в строку если не строка
		options.addition +="";
	}
	if (!options.hasOwnProperty("separator")) {//дефолтное значение separator
		options.separator = "+";
	}
	if (!options.hasOwnProperty("additionSeparator")) {//дефолтное значение addition separator
		options.additionSeparator = "|";
	}
	
	/*создание дополнительной строки*/
	if (options.hasOwnProperty("addition") && options.hasOwnProperty("additionRepeatTimes") && options.additionRepeatTimes > 1) {//повторяющаяся строка
		for (let i = 0; i <= options.additionRepeatTimes-1; i++) {
			arr.push(options.addition); 
		}

		additionRepeat = arr.join(options.additionSeparator);
		arr = [];

	} else if(options.hasOwnProperty("addition") && (!options.hasOwnProperty("additionRepeatTimes") || options.additionRepeatTimes <= 1)){//неповторяющаяся строка
		additionRepeat = options.addition;
	} else{//пустая строка
		additionRepeat = "";
	}

	
/*создание полной строки */
	if (options.hasOwnProperty("repeatTimes") && options.repeatTimes > 1) {//повторяющюяся строка
		allStringRepeat = str+additionRepeat;
		for (let i = 0; i <= options.repeatTimes-1; i++) {
			arr.push(allStringRepeat); 
		}
		output = arr.join(options.separator);
			
	} else if(options.repeatTimes == undefined && options.additionRepeatTimes == undefined && options.hasOwnProperty("addition")) {//склеенная неповторяющаяся строка
		output = str+options.addition;

	}else if(!options.hasOwnProperty("repeatTimes") || options.repeatTimes <= 1){//str не повторяется, additionRepeat повторяется
		output = str+additionRepeat;
		
	} 
	return output;
};
  
