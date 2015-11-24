var fs = require('fs');
// var salesFileUtilities = require('./sales_file_utilities');

var getBillCsvData = function(fileName){
       var linesInFiles = []; //list to store csvied stuff
  
       var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
       var lines = fileContent.split('\r').splice(1);//split to display files on a new line
           lines.forEach(function(line){
            linesInFiles.push(line);//push lines in the files to list you created
  });
		console.log(linesInFiles);
	     return linesInFiles;// retursn lines in files
}

var getTotalCalls = function(fileName){
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
			console.log(listOfBills);
			return listOfBills
		};


module.exports.getBillCsvData = getBillCsvData;
module.exports.getTotalCalls = getTotalCalls;
