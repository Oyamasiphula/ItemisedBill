var fs = require('fs');
// var salesFileUtilities = require('./sales_file_utilities');
var fileName = '/ItemisedBill.csv';


var getBillCsvData = function(fileName){
       var linesInFiles = []; //list to store csvied stuff
  
       var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
       var lines = fileContent.split('\r').splice(1);//split to display files on a new line
           lines.forEach(function(line){
            linesInFiles.push(line);//push lines in the files to list you created
  });

     console.log(linesInFiles);
     return linesInFiles;// return lines in files
}

var getTotalCalls = function(salesLines){
	   var totalCallsPerperProvider = {};
	 		salesLines.forEach(function(line){
        //split each line into fields
        var fields = line.split(",");
        var serviceProviderName = fields[1];
        var cellNo = fields[3];
        
        // var salesPrice = fields[4];
        // salesPrice = salesPrice.substring(1)
        // salesPrice = salesPrice.replace(",", 333

        if(totalCallsPerperProvider[serviceProviderName] === undefined){
            totalCallsPerperProvider[serviceProviderName] = 0;
        };

        totalCallsPerperProvider[serviceProviderName] = totalCallsPerperProvider[serviceProviderName] + Number(cellNo);
               
    });
	return totalCallsPerperProvider;

};


module.exports.getBillCsvData = getBillCsvData;
module.exports.getTotalCalls = getTotalCalls;
