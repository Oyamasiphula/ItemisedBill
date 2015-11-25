var fs = require('fs');
var getBillCsvData = function(fileName){
       var linesInFiles = []; //list to store csvied stuff
  
       var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
       var lines = fileContent.split('\r').splice(1);//split to display files on a new line
           lines.forEach(function(line){
           linesInFiles.push(line);//push lines in the files to list you created
  });
		console.log(linesInFiles);
	     return linesInFiles; // retursn lines in files
}

var getProviderCallLists = function(fileName){
			var linesInFile = fs.readFileSync(fileName, "utf8");
			var lines = linesInFile.split('\r').splice(1);
			var listOfBills =[];
				lines.forEach(function(fileLines){
					var product = fileLines.split(',');
					var currentProvider = product[1];
					var callNos = product[2];
					var serviceProvider = {
							providerName : currentProvider,
							cellNos : Number(callNos)
					};
				listOfBills.push(serviceProvider);
				});
				// console.log(listOfBills);
				return listOfBills
		};

var testingOtherFunctionsMethod = function(fileName){

	var linesInFile = fs.readFileSync(fileName, "utf8");
			var lines = linesInFile.split('\r').splice(1);
			var listOfBills =[];
			var newProviderCallsCount = {};

				lines.forEach(function(csvFields){

				var holdCol = csvFields.split(',');
				var currentProviderId = holdCol[1];
				var callNumbers =  holdCol[2];

				if(newProviderCallsCount[currentProviderId] === undefined){
					newProviderCallsCount[currentProviderId] = 0;
				}	
					newProviderCallsCount[currentProviderId] += newProviderCallsCount[currentProviderId];
				});
		//return newProviderCallsCount;
		for(var key in newProviderCallsCount){
			var obj = {
				currentProviderId : key,
				callNumbers: newProviderCallsCount[key]
			};
			listOfBills.push(obj);

		}
		console.log(newProviderCallsCount)
		return newProviderCallsCount;
	}
exports.getBillCsvData = getBillCsvData;
exports.getProviderCallLists = getProviderCallLists;
exports.testingOtherFunctionsMethod = testingOtherFunctionsMethod;
