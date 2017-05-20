indexScript.js

$(document).ready(function(){
	$("#assetClasses").click(function(){
		$("#but2, #but2Disclaimer").toggle();
		$("#but3, #but3Disclaimer, .hidden").hide();
		$("#assetClasses").toggleClass("active");
		$("#sectorsProducts").removeClass("active");
		$("#thirdBanner, #thirdBannerText").toggle();
		$("#forthBanner, #forthBannerText").hide();
		$("#reveal").removeClass("active");
	});
});

$(document).ready(function(){
	$("#sectorsProducts").click(function(){
		$("#but3, #but3Disclaimer").toggle();
		$("#but2, #but2Disclaimer, .hidden").hide();
		$("#sectorsProducts").toggleClass("active");
		$("#assetClasses").removeClass("active");
		$("#forthBanner, #forthBannerText").toggle();
		$("#thirdBanner, #thirdBannerText").hide();
		$("#reveal").removeClass("active");
	});
});

$(document).ready(function(){
	$("#reveal").click(function(){
		$(".hidden").toggle();
		$("#but3, #but3Disclaimer").hide();
		$("#but2, #but2Disclaimer").hide();
		$("#thirdBanner, #thirdBannerText").hide();
		$("#forthBanner, #forthBannerText").hide();
		$("#reveal").toggleClass("active");
		$("#sectorsProducts").removeClass("active");
		$("#assetClasses").removeClass("active");
	});
});