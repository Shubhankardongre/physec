// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {
    "getIncidents": "/assets/api/incidents.json",
    "getFilteredIncidents": "/assets/api/incidents-filtered.json"
  },
  incConstants: {
    CLEAR: "clear",
    LEGENDCOLORS: ["#E0F1F6", "#A6D8E7", "#49AFD9", "#0179B8", "#004D8A", "#073159", "#073159"],
    CHARTPROPERTIES: {
      "TYPE": "pieChart",
      "HEIGHT": 240,
      "DONUT": true,
      "DONMUTRATIO": 0.65,
      "LABELTHRESHHOLD": 0.01,
      "LABELSUNBEAMLAYOUT": true,
      "GROWONHOVER": true,
      "SHOWLEGEND": false,
      "SHOWLABELS": false,
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
