sap.ui.define([
		"./BaseController",
		"sap/ui/model/json/JSONModel", 
		"jblibs/s000/Back"
	], function(BaseController, JSONModel, Back) {
	"use strict";

	return BaseController.extend("./App", { 
        jbBack: new Back(),
		onInit:  function () {
			var oViewModel,
				fnSetAppNotBusy,
				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

			oViewModel = new JSONModel({
				busy : true,
				delay : 0
			});
			this.setModel(oViewModel, "appView");

			fnSetAppNotBusy = function() {
				oViewModel.setProperty("/busy", false);
				oViewModel.setProperty("/delay", iOriginalBusyDelay);
			};
			this.getOwnerComponent().getModel().metadataLoaded().
				then(fnSetAppNotBusy);
			this.getOwnerComponent().getModel().attachMetadataFailed(fnSetAppNotBusy);

			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});

});