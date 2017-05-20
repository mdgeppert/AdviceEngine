window.onload = function(){
	document.getElementById('sectionConservativeIncome').style.display = "none";

}

function showConservativeIncome(){
	document.getElementById("sectionConservativeIncome").style.display = "block";
	document.getElementById('sectionOne').style.display = 'none';
	document.getElementById("selectLink").style.display = "block";
	document.getElementById("conservativeIncomeLinks").style.display = "block";
}

function consIncStrategic(){
	//document.getElementById("sectionConservativeIncome").style.display = "block";
	document.getElementById('sectionOne').style.display = 'none';
	document.getElementById("cia1").style.display = "none";
	document.getElementById("tactical").style.visibility = "hidden";
	document.getElementById("tacticalName").style.visibility = "hidden";
	document.getElementById("showOnStrategic").style.display = "block";
	document.getElementById("selectLink").style.display = "block";
	document.getElementById("conservativePortfolioSize").style.display = "block";
	document.getElementById("conservativeIncomeOptions").style.display = "block";
}

function size25to500k(){
	document.getElementById("$500+k").style.display = "none";
	document.getElementById("$500+kText").style.display = "none";
	document.getElementById("investmentVehicle").style.display = "block";
	document.getElementById("mutualFundsAndIndividualSecurities").style.display = "none";
	document.getElementById("mutualFundsAndIndividualSecuritiesText").style.display = "none";
	document.getElementById("showOnStrategic").style.display = "none";
	document.getElementById("cia2").style.display = "none";
}

function mutualFund(){
	document.getElementById("acctMgr").style.display = "block";
	document.getElementById("cia2").style.display = "none";
}

function mutualFundsAndIndividualSecuritiesSMAs(){
	document.getElementById("wfaEndNote").style.display = "none";
	document.getElementById("cia3").style.display = "none";
	document.getElementById("cia4").style.display = "none";
	document.getElementById("cia5").style.display = "none";
	document.getElementById("showOnTactical2").style.display = "block";
	document.getElementById("selectLink").style.display = "none";
}

function wfaEnd(){
	document.getElementById("wfaEndNote").style.display = "none";
	document.getElementById("3PManager").style.display = "none";
	document.getElementById("3PManagerText").style.display = "none";
	document.getElementById("showOnTactical2").style.display = "block";
	document.getElementById("cia5").style.display = "none";
	document.getElementById("selectLink").style.display = "none";
}

function consIncTactical(){
	document.getElementById("strategic").style.display = "none";
	document.getElementById("strategicText").style.display = "none";
	document.getElementById("cia2").style.display = "none";
	document.getElementById("cia3").style.display = "none";
	document.getElementById("cia4").style.display = "none";
	document.getElementById("cia5").style.display = "none";
	document.getElementById("showOnTactical1").style.display = "block";
	document.getElementById("showOnTactical2").style.display = "block";
	document.getElementById("showOnTactical3").style.display = "block";
	document.getElementById("wfaEndNote").style.display = "none";
	document.getElementById("startOver").style.display = "block";
}

function size500k(){
	document.getElementById("showOnStrategic").style.display = "none";
	document.getElementById("investmentVehicle").style.display = "block";
}

function thirdPartyMgr(){
	document.getElementById("showOnTactical2").style.display = "block";
	document.getElementById("cia3").style.display = "none";
	document.getElementById("cia4").style.display = "none";
	document.getElementById("wfaEndNote").style.display = "none";
	document.getElementById("selectLink").style.display = "none";
}