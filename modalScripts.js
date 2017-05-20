var aimodal = document.getElementById("alternativeInvestmentsModal"); 
var aibtn = document.getElementById("alternativeInvestmentsModalLink"); 
var aispan = document.getElementsByClassName("aiclose")[0]; 
aibtn.onclick = function() {aimodal.style.display = "block";} 
aispan.onclick = function() {aimodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == aimodal) {
        aimodal.style.display = "none";
    }
};


var asmodal = document.getElementById("agencySecuritiesModal"); 
var asbtn = document.getElementById("agencySecuritiesModalLink"); 
var asspan = document.getElementsByClassName("asclose")[0]; 
asbtn.onclick = function() {asmodal.style.display = "block";} 
asspan.onclick = function() {asmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == asmodal) {
        asmodal.style.display = "none";
    }
};


var camodal = document.getElementById("cashModal"); 
var cabtn = document.getElementById("cashModalLink"); 
var caspan = document.getElementsByClassName("caclose")[0]; 
cabtn.onclick = function() {camodal.style.display = "block";} 
caspan.onclick = function() {camodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == camodal) {
        camodal.style.display = "none";
    }
};


var comodal = document.getElementById("commoditiesModal"); 
var cobtn = document.getElementById("commoditiesModalLink"); 
var cospan = document.getElementsByClassName("coclose")[0]; 
cobtn.onclick = function() {comodal.style.display = "block";} 
cospan.onclick = function() {comodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == comodal) {
        comodal.style.display = "none";
    }
};


var cbmodal = document.getElementById("corporateBondsModal"); 
var cbbtn = document.getElementById("corporateBondsModalLink"); 
var cbspan = document.getElementsByClassName("cbclose")[0]; 
cbbtn.onclick = function() {cbmodal.style.display = "block";} 
cbspan.onclick = function() {cbmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == cbmodal) {
        cbmodal.style.display = "none";
    }
};


var cdmodal = document.getElementById("consumerDiscretionaryModal"); 
var cdbtn = document.getElementById("consumerDiscretionaryModalLink"); 
var cdspan = document.getElementsByClassName("cdclose")[0]; 
cdbtn.onclick = function() {cdmodal.style.display = "block";} 
cdspan.onclick = function() {cdmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == cdmodal) {
        cdmodal.style.display = "none";
    }
};



var csmodal = document.getElementById("consumerStaplesModal"); 
var csbtn = document.getElementById("consumerStaplesModalLink"); 
var csspan = document.getElementsByClassName("csclose")[0]; 
csbtn.onclick = function() {csmodal.style.display = "block";} 
csspan.onclick = function() {csmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == csmodal) {
        csmodal.style.display = "none";
    }
};


var emodal = document.getElementById("energyModal"); 
var ebtn = document.getElementById("energyModalLink"); 
var espan = document.getElementsByClassName("eclose")[0]; 
ebtn.onclick = function() {emodal.style.display = "block";} 
espan.onclick = function() {emodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == emodal) {
        emodal.style.display = "none";
    }
};


var emfimodal = document.getElementById("emergingMarketFixedIncomeModal"); 
var emfibtn = document.getElementById("emergingMarketfixedIncomeModalLink"); 
var emfispan = document.getElementsByClassName("emficlose")[0]; 
emfibtn.onclick = function() {emfimodal.style.display = "block";} 
emfispan.onclick = function() {emfimodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == emfimodal) {
        emfimodal.style.display = "none";
    }
};


var lcgemodal = document.getElementById("largeCapGrowthEquitiesModal"); 
var lcgebtn = document.getElementById("largeCapGrowthEquitiesModalLink"); 
var lcgespan = document.getElementsByClassName("lcgeclose")[0]; 
lcgebtn.onclick = function() {lcgemodal.style.display = "block";} 
lcgespan.onclick = function() {lcgemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == lcgemodal) {
        lcgemodal.style.display = "none";
    }
};


var lcvemodal = document.getElementById("largeCapValueEquitiesModal"); 
var lcvebtn = document.getElementById("largeCapValueEquitiesModalLink"); 
var lcvespan = document.getElementsByClassName("lcveclose")[0]; 
lcvebtn.onclick = function() {lcvemodal.style.display = "block";} 
lcvespan.onclick = function() {lcvemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == lcvemodal) {
        lcvemodal.style.display = "none";
    }
};



var mcgemodal = document.getElementById("midCapGrowthEquitiesModal"); 
var mcgebtn = document.getElementById("midCapGrowthEquitiesModalLink"); 
var mcgespan = document.getElementsByClassName("mcgeclose")[0]; 
mcgebtn.onclick = function() {mcgemodal.style.display = "block";} 
mcgespan.onclick = function() {mcgemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == mcgemodal) {
        mcgemodal.style.display = "none";
    }
};


var mcvemodal = document.getElementById("midCapValueEquitiesModal"); 
var mcvebtn = document.getElementById("midCapValueEquitiesModalLink"); 
var mcvespan = document.getElementsByClassName("mcveclose")[0]; 
mcvebtn.onclick = function() {mcvemodal.style.display = "block";} 
mcvespan.onclick = function() {mcvemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == mcvemodal) {
        mcvemodal.style.display = "none";
    }
};



var scgemodal = document.getElementById("smallCapGrowthEquitiesModal"); 
var scgebtn = document.getElementById("smallCapGrowthEquitiesModalLink"); 
var scgespan = document.getElementsByClassName("scgeclose")[0]; 
scgebtn.onclick = function() {scgemodal.style.display = "block";} 
scgespan.onclick = function() {scgemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == scgemodal) {
        scgemodal.style.display = "none";
    }
};


var scvemodal = document.getElementById("smallCapValueEquitiesModal"); 
var scvebtn = document.getElementById("smallCapValueEquitiesModalLink"); 
var scvespan = document.getElementsByClassName("scveclose")[0]; 
scvebtn.onclick = function() {scvemodal.style.display = "block";} 
scvespan.onclick = function() {scvemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == scvemodal) {
        scvemodal.style.display = "none";
    }
};


var dfemodal = document.getElementById("developedForeignEquitiesModal"); 
var dfebtn = document.getElementById("developedForeignEquitiesModalLink"); 
var dfespan = document.getElementsByClassName("dfeclose")[0]; 
dfebtn.onclick = function() {dfemodal.style.display = "block";} 
dfespan.onclick = function() {dfemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == dfemodal) {
        dfemodal.style.display = "none";
    }
};


var ememodal = document.getElementById("emergingMarketsEquitiesModal"); 
var emebtn = document.getElementById("emergingMarketsEquitiesModalLink"); 
var emespan = document.getElementsByClassName("emeclose")[0]; 
emebtn.onclick = function() {ememodal.style.display = "block";} 
emespan.onclick = function() {ememodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == ememodal) {
        ememodal.style.display = "none";
    }
};





var fimodal = document.getElementById("financialsModal"); 
var fibtn = document.getElementById("financialsModalLink"); 
var fispan = document.getElementsByClassName("ficlose")[0]; 
fibtn.onclick = function() {fimodal.style.display = "block";} 
fispan.onclick = function() {fimodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == fimodal) {
        fimodal.style.display = "none";
    }
};



var hcmodal = document.getElementById("healthCareModal"); 
var hcbtn = document.getElementById("healthCareModalLink"); 
var hcspan = document.getElementsByClassName("hcclose")[0]; 
hcbtn.onclick = function() {hcmodal.style.display = "block";} 
hcspan.onclick = function() {hcmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == hcmodal) {
        hcmodal.style.display = "none";
    }
};


var hymodal = document.getElementById("highYieldModal"); 
var hybtn = document.getElementById("highYieldModalLink"); 
var hyspan = document.getElementsByClassName("hyclose")[0]; 
hybtn.onclick = function() {hymodal.style.display = "block";} 
hyspan.onclick = function() {hymodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == hymodal) {
        hymodal.style.display = "none";
    }
};



var inmodal = document.getElementById("industrialsModal"); 
var inbtn = document.getElementById("industrialsModalLink"); 
var inspan = document.getElementsByClassName("inclose")[0]; 
inbtn.onclick = function() {inmodal.style.display = "block";} 
inspan.onclick = function() {inmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == inmodal) {
        inmodal.style.display = "none";
    }
};



var itmodal = document.getElementById("informationTechnologyModal"); 
var itbtn = document.getElementById("informationTechnologyModalLink"); 
var itspan = document.getElementsByClassName("itclose")[0]; 
itbtn.onclick = function() {itmodal.style.display = "block";} 
itspan.onclick = function() {itmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == itmodal) {
        itmodal.style.display = "none";
    }
};


var ifimodal = document.getElementById("internationalFixedIncomeModal"); 
var ifibtn = document.getElementById("internationalFixedIncomeModalLink"); 
var ifispan = document.getElementsByClassName("ificlose")[0]; 
ifibtn.onclick = function() {ifimodal.style.display = "block";} 
ifispan.onclick = function() {ifimodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == ifimodal) {
        ifimodal.style.display = "none";
    }
};



var mamodal = document.getElementById("materialsModal"); 
var mabtn = document.getElementById("materialsModalLink"); 
var maspan = document.getElementsByClassName("maclose")[0]; 
mabtn.onclick = function() {mamodal.style.display = "block";} 
maspan.onclick = function() {mamodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == mamodal) {
        mamodal.style.display = "none";
    }
};


var mbsmodal = document.getElementById("mortgageBackedSecuritiesModal"); 
var mbsbtn = document.getElementById("mortgageBackedSecuritiesModalLink"); 
var mbsspan = document.getElementsByClassName("mbsclose")[0]; 
mbsbtn.onclick = function() {mbsmodal.style.display = "block";} 
mbsspan.onclick = function() {mbsmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == mbsmodal) {
        mbsmodal.style.display = "none";
    }
};

var mumodal = document.getElementById("municipalsModal"); 
var mubtn = document.getElementById("municipalsModalLink"); 
var muspan = document.getElementsByClassName("muclose")[0]; 
mubtn.onclick = function() {mumodal.style.display = "block";} 
muspan.onclick = function() {mumodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == mumodal) {
        mumodal.style.display = "none";
    }
};

var pmodal = document.getElementById("preferredsModal"); 
var pbtn = document.getElementById("preferredsModalLink"); 
var pspan = document.getElementsByClassName("pclose")[0]; 
pbtn.onclick = function() {pmodal.style.display = "block";} 
pspan.onclick = function() {pmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == pmodal) {
        pmodal.style.display = "none";
    }
};


var rmodal = document.getElementById("reitsModal"); 
var rbtn = document.getElementById("reitsModalLink"); 
var rspan = document.getElementsByClassName("rclose")[0]; 
rbtn.onclick = function() {rmodal.style.display = "block";} 
rspan.onclick = function() {rmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == rmodal) {
        rmodal.style.display = "none";
    }
};


var temodal = document.getElementById("telecommModal"); 
var tebtn = document.getElementById("telecommModelLink"); 
var tespan = document.getElementsByClassName("teclose")[0]; 
tebtn.onclick = function() {temodal.style.display = "block";} 
tespan.onclick = function() {temodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == temodal) {
        temodal.style.display = "none";
    }
};




/*---------------------Traditional Income-------------------------------*/

var stfitmodal = document.getElementById("shortTermFixedIncomeTaxableModal"); 
var stfitbtn = document.getElementById("shortTermFixedIncomeTaxableModalLink"); 
var stfitspan = document.getElementsByClassName("stfitclose")[0]; 
stfitbtn.onclick = function() {stfitmodal.style.display = "block";} 
stfitspan.onclick = function() {stfitmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == stfitmodal) {
        stfitmodal.style.display = "none";
    }
};


var stfitemodal = document.getElementById("shortTermFixedIncomeTaxExemptModal"); 
var stfitebtn = document.getElementById("shortTermFixedIncomeTaxExemptModalLink"); 
var stfitespan = document.getElementsByClassName("stfiteclose")[0]; 
stfitebtn.onclick = function() {stfitemodal.style.display = "block";} 
stfitespan.onclick = function() {stfitemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == stfitemodal) {
        stfitemodal.style.display = "none";
    }
};


var itfitmodal = document.getElementById("intermediateTermFixedIncomeTaxableModal"); 
var itfitbtn = document.getElementById("intermediateTermFixedIncomeTaxableModalLink"); 
var itfitspan = document.getElementsByClassName("itfitclose")[0]; 
itfitbtn.onclick = function() {itfitmodal.style.display = "block";} 
itfitspan.onclick = function() {itfitmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == itfitmodal) {
        itfitmodal.style.display = "none";
    }
};


var itfitemodal = document.getElementById("intermediateTermFixedIncomeTaxExemptModal"); 
var itfitebtn = document.getElementById("intermediateTermFixedIncomeTaxExemptModalLink"); 
var itfitespan = document.getElementsByClassName("itfiteclose")[0]; 
itfitebtn.onclick = function() {itfitemodal.style.display = "block";} 
itfitespan.onclick = function() {itfitemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == itfitemodal) {
        itfitemodal.style.display = "none";
    }
};


var ltfitmodal = document.getElementById("longTermFixedIncomeTaxableModal"); 
var ltfitbtn = document.getElementById("longTermFixedIncomeTaxableModalLink"); 
var ltfitspan = document.getElementsByClassName("ltfitclose")[0]; 
ltfitbtn.onclick = function() {ltfitmodal.style.display = "block";} 
ltfitspan.onclick = function() {ltfitmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == ltfitmodal) {
        ltfitmodal.style.display = "none";
    }
};


var ltfitemodal = document.getElementById("LongTermFixedIncomeTaxExemptModal"); 
var ltfitebtn = document.getElementById("longTermFixedIncomeTaxExemptModalLink"); 
var ltfitespan = document.getElementsByClassName("ltfiteclose")[0]; 
ltfitebtn.onclick = function() {ltfitemodal.style.display = "block";} 
ltfitespan.onclick = function() {ltfitemodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == ltfitemodal) {
        ltfitemodal.style.display = "none";
    }
};


/*---------------------end Traditional Income----------------------------*/



var tipmodal = document.getElementById("tipsModal"); 
var tipbtn = document.getElementById("tipsModalLink"); 
var tipspan = document.getElementsByClassName("tipclose")[0]; 
tipbtn.onclick = function() {tipmodal.style.display = "block";} 
tipspan.onclick = function() {tipmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == tipmodal) {
        tipmodal.style.display = "none";
    }
};


var trmodal = document.getElementById("treasuriesModal"); 
var trbtn = document.getElementById("treasuriesModalLink"); 
var trspan = document.getElementsByClassName("trclose")[0]; 
trbtn.onclick = function() {trmodal.style.display = "block";} 
trspan.onclick = function() {trmodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == trmodal) {
        trmodal.style.display = "none";
    }
};

var umodal = document.getElementById("utilitiesModal"); 
var ubtn = document.getElementById("utilitiesModalLink"); 
var uspan = document.getElementsByClassName("uclose")[0]; 
ubtn.onclick = function() {umodal.style.display = "block";} 
uspan.onclick = function() {umodal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == umodal) {
        umodal.style.display = "none";
    }
};