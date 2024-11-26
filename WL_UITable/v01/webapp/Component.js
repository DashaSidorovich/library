sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/Device",
		"sap/ui/model/json/JSONModel"
	], function (UIComponent, Device, ErrorHandler,JSONModel) {
		"use strict";

		return UIComponent.extend("jbsamples.WL_UITable.Component", {

			metadata : {
				manifest: "json"
			},

			init : function () {
				UIComponent.prototype.init.apply(this, arguments);

				this._oErrorHandler = new ErrorHandler(this);

				this.setModel(this.createDeviceModel(), "device");

				this.getRouter().initialize();
			},
			
			createDeviceModel : function () {
				var oModel = new JSONModel(Device);
				oModel.setDefaultBindingMode("OneWay");
				return oModel;
			},
			destroy : function () {
				this._oErrorHandler.destroy();
				UIComponent.prototype.destroy.apply(this, arguments);
			},
			getContentDensityClass : function() {
				if (this._sContentDensityClass === undefined) {

					if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
						this._sContentDensityClass = "";
					} else if (!Device.support.touch) {
						this._sContentDensityClass = "sapUiSizeCompact";
					} else {
						this._sContentDensityClass = "sapUiSizeCozy";
					}
				}
				return this._sContentDensityClass;
			}

		});

	}
);