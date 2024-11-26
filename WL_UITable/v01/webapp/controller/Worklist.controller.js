sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "jblibs/s000/formatter",
    "jblibs/s004/UserDetail",
    "jblibs/s004/ProjectDetails", 
    "sap/m/Token",
  ],
  function (
    BaseController,
    JSONModel,
    formatter,
    UserDetail,
    ProjectDetails,
    Token
  ) {
    "use strict";

    return BaseController.extend("./Worklist", {
      UserDetail: new UserDetail(),
      formatter: formatter,
      jsonAnnotation: new JSONModel({
        	RequestAtLeast: "", 
        	Annotation: [
        	    {
        			"id": "DateTime",
        			"label": "{i18n>ttlDateTime}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"mode": "DateTimeField",
        				"width": "9.2rem",
        				"datePath": "DateTime",
        				"dateMode": true,
        				"selectedPeriod": "day",
        				"visiblePeriodButtons": "day, week, month, year, all"
        			},
        			"Column": {
        				"order": 1,
        				"sortProperty": "DateTime",
        				"sortOrder": 1,
        				"sort": "desc",
        				"visible": true,
        				"width": "14rem",
        				"type": "dateTime",
        				"typeFormat":"medium",
        				"text": "{DateTime}"
        			}
                  },
        		{
        			"id": "UserFullName",
        			"label": "{i18n>ttlUserFullName}",
        			"Column": {
        				"order": 5,
        				"sortProperty": "UserFullName",
        				"visible": true,
        				"type": "Custom",
        				"select": "UserFullName,UserID,UserAvatarURL"
        			},
        			"Filter": {
        				"mode": "MultiSelect",
        				"filter": "UserFullName",
        				"text": "UserFullName",
        				"sort": "UserFullName",
        				"image": "UserAvatarURL",
        				"key": "UserID",
        				"filterKey": "UserID",
        				"entitySet": "Users",
        				"visible": true,
        				"hidden": false
        			}
                  },
        		{
        			"id": "ApplicationText",
        			"Filter": {
        				"mode": "MultiSelect",
        				"filter": "ApplicationText",
        				"text": "ApplicationText",
        				"sort": "ApplicationText",
        				"icon": "ApplicationIcon",
        				"key": "ApplicationText",
        				"entitySet": "Applications",
        				"visible": true,
        				"hidden": false
        			},
        			"Column": {
        				"order": 3,
        				"sortProperty": "ApplicationText",
        				"visible": true,
        				"width": "12rem",
        				"type": "Custom",
        				"select": "ApplicationText,ApplicationIcon"
        			}
                  },
        		{
        			"id": "InstanceText",
        			"Filter": {
        				"mode": "MultiSelect",
        				"filter": "InstanceFull",
        				"text": "InstanceFull",
        				"sort": "InstanceText",
        				"key": "InstanceID",
        				"entitySet": "InstancesForServerAdmin",
        				"filterKey":"Instance",
        				"visible": true,
        				"hidden": false
        			},
        			"Column": {
        				"order": 2,
        				"sortProperty": "InstanceText",
        				"visible": true,
        				"width": "9rem",
        				"text": "{InstanceText}",
        				"select": "InstanceText"
        			}
                  },
        		{
        			"id": "InstanceID",
        			"Filter": {
        				"visible": false,
        				"hidden": false,
        				"filterKey":"Instance"
        			},
        			"Column": {
        				"sortProperty": "Instance",
        				"visible": false,
        				"width": "9rem",
        				"text": "{Instance}",
        				"select": "Instance"
        			}
                  },
        		{
        			"id": "LogID",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "LogID",
        				"visible": false,
        				"width": "9rem",
        				"text": "{LogID}",
        				"select": "LogID"
        			}
                  },
        		{
        			"id": "EntityCode",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "EntityCode",
        				"visible": false,
        				"width": "9rem",
        				"text": "{EntityCode}",
        				"select": "EntityCode"
        			}
                  },
        		{
        			"id": "EntityAlias",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "EntityAlias",
        				"visible": false,
        				"width": "9rem",
        				"text": "{EntityAlias}",
        				"select": "EntityAlias"
        			}
                  },
        		{
        			"id": "EntityText",
        			"Filter": {
        				"mode": "MultiSelect",
        				"filter": "EntityText",
        				"text": "EntityText",
        				"sort": "EntityText",
        				"key": "EntityCode",
        				"entitySet": "Entities",
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "EntityText",
        				"visible": false,
        				"width": "10rem",
        				"select": "EntityText"
        			}
                  },
        		{
        			"id": "LogMessageText",
        			"label": "",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"order": 4,
        				"sortProperty": "LogMessageText",
        				"visible": true,
        				"width": "auto",
        				"type": "text",
        				"text": "{LogMessageText}"
        			}
                  },
        		{
        			"id": "ReferenceID",
        			"label": "",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "ReferenceID",
        				"visible": false,
        				"width": "15rem",
        				"type": "text",
        				"text": "{ReferenceID}"
        			}
                  },
        		{
        			"id": "ApplicationCode",
        			"label": "",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "ApplicationCode",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{ApplicationCode}"
        			}
                  },
        		{
        			"id": "ApplicationPath",
        			"label": "",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "ApplicationPath",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{ApplicationPath}"
        			}
                  },
        		{
        			"id": "ClassText",
        			"Filter": {
        				"mode": "SingleSelectMaster",
        				"filter": "ClassText",
        				"text": "ClassText",
        				"sort": "ClassText",
        				"key": "ClassID",
        				"entitySet": "ClassesText",
        				"visible": true,
        				"hidden": false
        			},
        			"Column": {
        			    "order": 6,
        				"sortProperty": "ClassText",
        				"visible": true,
        				"width": "18rem",
        				"type": "text",
        				"text": "{ClassText}"
        			}
                  },
        		{
        			"id": "ClassID",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "ClassID",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{ClassID}"
        			}
                  },
        		{
        			"id": "Param01",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Param01",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{Param01}"
        			}
                  },
        		{
        			"id": "Param02",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Param02",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{Param02}"
        			}
                  },
        		{
        			"id": "Param03",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Param03",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{Param03}"
        			}
                  },
        		{
        			"id": "Param04",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Param04",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{Param04}"
        			}
                  },
        		{
        			"id": "Param05",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Param05",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{Param05}"
        			}
                  },
        		{
        			"id": "SessionID",
        			"Filter": {
        				"visible": true,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "SessionID",
        				"visible": false,
        				"width": "15rem",
        				"type": "text",
        				"text": "{SessionID}"
        			}
                  },
        		{
        			"id": "ConnectionID",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "ConnectionID",
        				"visible": false,
        				"width": "15rem",
        				"type": "text",
        				"text": "{ConnectionID}"
        			}
                  },
        		{
        			"id": "Terminal",
        			"Filter": {
        				"visible": true,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Terminal",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{Terminal}"
        			}
                  },
        		{
        			"id": "ApplicationUser",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "ApplicationUser",
        				"visible": false,
        				"width": "15rem",
        				"type": "text",
        				"text": "{ApplicationUser}"
        			}
                  },
        		{
        			"id": "IntegrationID",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "IntegrationID",
        				"visible": false,
        				"width": "15rem",
        				"type": "text",
        				"text": "{IntegrationID}"
        			}
                  },
        		{
        			"id": "Latitude",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Latitude",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{Latitude}"
        			}
                  },
        		{
        			"id": "Longitude",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Longitude",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{Longitude}"
        			}
                  },
        		{
        			"id": "UserID",
        			"Filter": {
        				"visible": true,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "UserID",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{UserID}"
        			}
                  },
        		{
        			"id": "LogMessageID",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "LogMessageID",
        				"visible": false,
        				"width": "15rem",
        				"type": "text",
        				"text": "{LogMessageID}"
        			}
                  },
        		{
        			"id": "LogTypeID",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "LogTypeID",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{LogTypeID}"
        			}
                  },
        		{
        			"id": "ProcessID",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "ProcessID",
        				"visible": false,
        				"width": "9rem",
        				"type": "text",
        				"text": "{ProcessID}"
        			}
                  },
        		{
        			"id": "Source",
        			"Filter": {
        				"visible": false,
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Source",
        				"visible": false,
        				"width": "15rem",
        				"type": "text",
        				"text": "{Source}"
        			}
                  },
        		{
        			"id": "Counter",
        			"Filter": {
        				"visible": false,
        				"hidden": true
        			},
        			"Column": {
        				"sortProperty": "Counter",
        				"visible": false,
        				"width": "3rem",
        				"type": "Number",
        				"number": "{Counter}",
        				"emphasized": false
        			}
                  },
        		{
        			"id": "Duration",
        			"Filter": {
        				"visible": false,
        				"hidden": true
        			},
        			"Column": {
        				"sortProperty": "Duration",
        				"visible": false,
        				"width": "10rem",
        				"type": "Number",
        				"number": "{Duration}",
        				"emphasized": false
        			}
                  },
                {
        			"id": "DayOfMonth",
        			"label": "{i18n>ttlDayOfMonth}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "DayOfMonth",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{DayOfMonth}"
        			}
                  },
        		{
        			"id": "Year",
        			"label": "{i18n>ttlYear}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Year",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{Year}"
        			}
                  },
        		{
        			"id": "Month",
        			"label": "{i18n>ttlMonth}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Month",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{Month}"
        			}
                  },
        		{
        			"id": "YearMonth",
        			"label": "{i18n>ttlYearMonth}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "YearMonth",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{YearMonth}"
        			}
                  },
        		{
        			"id": "DayOfMonthHour",
        			"label": "{i18n>ttlDayOfMonthHour}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "DayOfMonthHour",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{DayOfMonthHour}"
        			}
                  },
        		{
        			"id": "DayOfWeek",
        			"label": "{i18n>ttlDayOfWeek}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "DayOfWeek",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{DayOfWeek}"
        			}
                  },
        		{
        			"id": "DayOfWeekHour",
        			"label": "{i18n>ttlDayOfWeekHour}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "DayOfWeekHour",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{DayOfWeekHour}"
        			}
                  },
        		{
        			"id": "MonthDayOfMonth",
        			"label": "{i18n>ttlMonthDayOfMonth}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "MonthDayOfMonth",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{MonthDayOfMonth}"
        			}
                  },
        		{
        			"id": "Hour",
        			"label": "{i18n>ttlHour}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Hour",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{Hour}"
        			}
                  },
        		{
        			"id": "Quarter",
        			"label": "{i18n>ttlQuarter}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Quarter",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{Quarter}"
        			}
                  },
        		{
        			"id": "MonthDayOfWeek",
        			"label": "{i18n>ttlMonthDayOfWeek}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "MonthDayOfWeek",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{MonthDayOfWeek}"
        			}
                  },
        		{
        			"id": "Week",
        			"label": "{i18n>ttlWeek}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "Week",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{Week}"
        			}
                  },
        		{
        			"id": "YearQuarter",
        			"label": "{i18n>ttlYearQuarter}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "YearQuarter",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{YearQuarter}"
        			}
                  },
        		{
        			"id": "WeekDayOfWeek",
        			"label": "{i18n>ttlWeekDayOfWeek}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "WeekDayOfWeek",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{WeekDayOfWeek}"
        			}
                  },
        		{
        			"id": "YearWeek",
        			"label": "{i18n>ttlYearWeek}",
        			"Filter": {
        				"visible": false, 
        				"hidden": false
        			},
        			"Column": {
        				"sortProperty": "YearWeek",
        				"visible": false,
        				"width": "8rem",
        				"type": "text",
        				"text": "{YearWeek}"
        			}
                  }
            ]
      }),

      onInit: function () {
        let oViewModel = new JSONModel({
        });
        this.setModel(oViewModel, "worklistView");


    	this.setModel(this.jsonAnnotation, "annotation");

      },
      
      onPressRefresh:function(){
        this.byId('table').getBinding('rows').refresh();
      },

      prepareSelect: function (oEvent) {
        this.aSorter = oEvent.getParameter("aSorts");
        this.sSelect = oEvent.getParameter("sSelect");

        this.callBindTable();
      },

      callBindTable: function (sPath) {
        if (this.sSelect && this.aFilters) {
        let sRequestAtLeast = this.getModel('annotation').getData().RequestAtLeast;
          this.byId("table").bindRows({
            path: "/Logs",
            template: new sap.ui.table.Row({}),
            filters: this.aFilters,
            sorter: this.aSorter,
            parameters: {
              select: this.sSelect + (sRequestAtLeast ? ","+ sRequestAtLeast: ''),
            },
          });
        }
      },

      onPressFilterBarChange: function (oEvent) {
          this.aFilters = oEvent.getParameter("OdataFilters");
          
          this.callBindTable();
      }
    });
  }
);