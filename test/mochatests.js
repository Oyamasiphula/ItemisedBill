var assert = require('assert');
var getBillCsvData = require('../modules/dataWorkouts.js');
 	
		it('Should check if finding function getBillCsvData typeof function', function(done){
			var getBillCsvData = require('../modules/dataWorkouts.js').getBillCsvData
				var results = typeof getBillCsvData;
						assert.equal("function",results);
							done()
		});
		it('Should return the correct number of lines from itemisedBill CSV file', function(done){
			var reader = getBillCsvData.getBillCsvData('./ItemisedBill.csv');
	    		assert.equal(35, reader.length);
		         	done()
		});
		it('Should return the correct number of lines from itemisedBill CSV file', function(done){
				var getCallNoForEachProvider = getBillCsvData.getTotalCalls('./ItemisedBill.csv');      
				var results =  
							 [{providerName:"MTN",cellNos:0832401145},
				             {providerName:"MTN",cellNos:0838758090},
				             {providerName:"Vodacom",cellNos:0821302398},
				             {providerName:"CellC",cellNos:0841257809},
				             {providerName:"MTN",cellNos:0832401145},
				             {providerName:"CellC",cellNos:0841257809},  
				             {providerName:"Vodacom",cellNos:0821302398},
				             {providerName:"MTN",cellNos:0838758090},
				             {providerName:"CellC",cellNos:0841257809},
				             {providerName:"MTN",cellNos:0832401145}, 
				             {providerName:"MTN",cellNos:0838758090},
				             {providerName:"Vodacom",cellNos:0828907600},  
				             {providerName:"CellC",cellNos:0825605600}, 
				             {providerName:"MTN",cellNos:0832401145}, 
				             {providerName:"CellC",cellNos:0825605600},
				             {providerName:"Vodacom",cellNos:0824501276},
				             {providerName:"MTN",cellNos:0838758090},
				             {providerName:"CellC",cellNos:0841257809},
				             {providerName:"MTN",cellNos:0838758090},
				             {providerName:"MTN",cellNos:0832401145},
				             {providerName:"Vodacom",cellNos:0821005078},  
				             {providerName:"CellC",cellNos:0841257809},
				             {providerName:"MTN",cellNos:0831239023},
				             {providerName:"CellC",cellNos:0845009087},
				             {providerName:"Vodacom",cellNos:0828009712}, 
				             {providerName:"MTN",cellNos:0832004576},
				             {providerName:"CellC",cellNos:0841257809},  
				             {providerName:"MTN",cellNos:0831239023}, 
				             {providerName:"MTN",cellNos:0837351200}, 
				             {providerName:"Vodacom",cellNos:0828901271},
				             {providerName:"CellC",cellNos:0841257809},  
				             {providerName:"MTN",cellNos:0834590001}, 
				             {providerName:"CellC",cellNos:0841257809}, 
				             {providerName:"Vodacom",cellNos:0824009001}, 
				             {providerName:"MTN",cellNos:0831239023}]
             
             assert.deepEqual(results,getCallNoForEachProvider)
	             done()
        });