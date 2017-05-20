function showModerateIncome(){
	document.getElementById("moderateIncomeLinksSection").style.display = "block";
	document.getElementById("moderateIncomeChooseApproach").style.display = "block";
	document.getElementById("sectionOne").style.display = "none";
	document.getElementById("moderateApproachChoices").style.display = "block";
	document.getElementById("chooseApproachText").style.display = "none";
	document.getElementById("chooseApproachRadio").style.display = "none";
}

function moderateIncChoiceStrategic(){
	document.getElementById("moderateIncomePassage").style.display = "block";
	document.getElementById("modIncApproachTactical").style.display = "none";
	document.getElementById("modIncApproachCyclical").style.display = "none";
	document.getElementById("mIAT").style.display = "none";
	document.getElementById("mIAC").style.display = "none";
    document.getElementById("modIncAcctSize").style.display = "block";
	document.getElementById("mDAPL3").style.display = "none";
	document.getElementById("mDAPL8").style.display = "none";
	document.getElementById("mDAPL9").style.display = "none";
}
	
function funcmodAcctSz25to500(){
	document.getElementById("moderateIncomePassage").style.display = "none";
	document.getElementById("mDAPL7").style.display = "none";
	document.getElementById("modIncDesiredInvestmentVehicle").style.display = "block";
	document.getElementById("modAcctS500").style.display = "none";
	document.getElementById("FiveHundredK").style.display = "none";
	document.getElementById("modIncSMA").style.display = "none";
	document.getElementById("mIDIVR").style.display = "none";
}

function funcmodAcctFiveHundredK(){
	document.getElementById("moderateIncomePassage").style.display = "none";
	document.getElementById("modIncDesiredInvestmentVehicle").style.display = "block";
	document.getElementById("modAcctSz25to500").style.display = "none";
	document.getElementById("twentyfiveKtoFiveHundredK").style.display = "none";
}



function funcModIncMutualFunds(){
	document.getElementById("mDAPL1").style.display = "none";
	document.getElementById("mDAPL2").style.display = "none";
	document.getElementById("modIncAcctMgr").style.display = "block";
	document.getElementById("modIncETF").style.display = "none";
	document.getElementById("mIDIVE").style.display = "none";
	document.getElementById("modIncSMA").style.display = "none";
	document.getElementById("mIDIVR").style.display = "none";
}

function funcModIncMgrWFA(){
	document.getElementById("wfaEndNote").style.display = "none";
	document.getElementById("moderateIncomePassageEnd500B").style.display = "block";
	document.getElementById("moderateIncomePassage1").style.display = "none";
	document.getElementById("modIncThirdParty").style.display = "none";
	document.getElementById("mIDIV3").style.display = "none";
	document.getElementById("mDAPL2").style.display = "none";
	document.getElementById("mDAPL6").style.display = "none";
	document.getElementById("mDAPL7").style.display = "none";
}

function funcModIncETFs(){
	document.getElementById("modIncMutualFunds").style.display = "none";
	document.getElementById("mIDIVMF").style.display = "none";
	document.getElementById("modIncSMA").style.display = "none";
	document.getElementById("mIDIVR").style.display = "none";
	document.getElementById("modIncAcctMgr").style.display = "block";
	document.getElementById("mDAPL4").style.display = "none";
	document.getElementById("mDAPL5").style.display = "none";
	document.getElementById("mDAPL6").style.display = "none";
	document.getElementById("mDAPL7").style.display = "none";
}

function funcModIncMgrThirdParty(){
	document.getElementById("mDAPL1").style.display = "none";
	document.getElementById("mDAPL2").style.display = "block";
	document.getElementById("mDAPL3").style.display = "none"
	document.getElementById("mDAPL4").style.display = "none";
	document.getElementById("mDAPL5").style.display = "none";
	document.getElementById("mDAPL6").style.display = "none";
	document.getElementById("mDAPL7").style.display = "none";
	document.getElementById("modIncWFA").style.display = "none";
	document.getElementById("mIDMWF").style.display = "none";
	document.getElementById("wfaEndNote").style.display = "none";
	document.getElementById("moderateIncomePassageEnd500C").style.display = "block";
	document.getElementById("moderateIncomePassage1").style.display = "none";
}

function funcModIncIndSecs(){
	document.getElementById("mDAPL1").style.display = "none";
	document.getElementById("mDAPL2").style.display = "none";
	document.getElementById("mDAPL4").style.display = "none";
	document.getElementById("mDAPL5").style.display = "none";
	document.getElementById("mDAPL6").style.display = "none";
	document.getElementById("moderateIncomePassageEnd").style.display = "block";
	document.getElementById("moderateIncomePassageEndCont").style.display = "block";
	document.getElementById("moderateIncomePassage1").style.display = "none";
}

function moderateIncChoiceTactical(){
	document.getElementById("mDAPL1").style.display = "none";
	document.getElementById("mDAPL2").style.display = "none";
	document.getElementById("mDAPL4").style.display = "none";
	document.getElementById("mDAPL5").style.display = "none";
	document.getElementById("mDAPL6").style.display = "none";
	document.getElementById("mDAPL7").style.display = "none";
	document.getElementById("mDAPL9").style.display = "none";
	document.getElementById("discretionaryTacticalPassage").style.display = "block";
	document.getElementById("modTacticalAcctSize").style.display = "block";
	document.getElementById("modIncApproachStrategic").style.display = "none";
	document.getElementById("mIAS").style.display = "none";
	document.getElementById("modIncApproachCyclical").style.display = "none";
	document.getElementById("mIAC").style.display = "none";
}

function modTac25Kto49K(){
	document.getElementById("modIncAcct25to49").style.display = "block";
	document.getElementById("wfaEndNote").style.display = "none";
	document.getElementById("modTac$50K").style.display = "none";
	document.getElementById("mTASR50").style.visibility = "hidden";
}

function modTac50k(){
	document.getElementById("modIncTacticalDesiredInvestmentVehicle").style.display = "block";
	document.getElementById("modTac$25Kto$49K").style.display = "none";
	document.getElementById("mTASR25").style.display = "none";
	}
	
function funcModTactIncMutualFunds(){
	document.getElementById("modIncETF").style.display = "none";
	document.getElementById("mDAPL3").style.display = "block";
	document.getElementById("mDAPL8").style.display = "none";
	document.getElementById("mTASR25").style.display = "none";
	document.getElementById("modIncAcct50").style.display = "block";
	document.getElementById("modIncTactETF").style.display = "none"
	document.getElementById("mTIDIVE").style.display = "none";
	document.getElementById("wfaEndNote").style.display = "none";
	}	
	
function funcModTactIncETFs(){
	document.getElementById("modIncTactMutualFunds").style.display = "none";
	document.getElementById("mTIDIVMF").style.display = "none";
	document.getElementById("mDAPL3").style.display = "none";
	document.getElementById("modIncAcct50").style.display = "block";
	document.getElementById("wfaEndNote").style.display = "none";
	}
	
function moderateIncChoiceCyclical(){
	document.getElementById("mDAPL1").style.display = "none";
	document.getElementById("mDAPL2").style.display = "none";
	document.getElementById("mDAPL3").style.display = "none";
	document.getElementById("mDAPL4").style.display = "none";
	document.getElementById("mDAPL5").style.display = "none";
	document.getElementById("mDAPL6").style.display = "none";
	document.getElementById("mDAPL7").style.display = "none";
	document.getElementById("mDAPL8").style.display = "none";
	document.getElementById("modIncApproachStrategic").style.display = "none";
	document.getElementById("mIAS").style.display = "none";
	document.getElementById("modIncApproachTactical").style.display = "none";
	document.getElementById("mIAT").style.display = "none";
	document.getElementById("wfaEndNote").style.display = "none";
	document.getElementById("modCyclicalPassage1").style.display = "block";
	document.getElementById("modCyclicalPassage2").style.display = "block";
	document.getElementById("moderateIncomePassage1").style.display = "none";	
	}