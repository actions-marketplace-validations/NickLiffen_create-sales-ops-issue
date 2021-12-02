/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 252:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueBodyTemplate = void 0;
const issueBodyTemplate_1 = __nccwpck_require__(470);
Object.defineProperty(exports, "issueBodyTemplate", ({ enumerable: true, get: function () { return issueBodyTemplate_1.issueBodyTemplate; } }));


/***/ }),

/***/ 470:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueBodyTemplate = void 0;
const issueBodyTemplate = ({ client_name, base_licence_type, github_cloud_org_name, github_server_org_name, ghas_trial_length, ghas_issue_link, people_interested_in_trial, person_who_approved_trial, }) => `
**Item** | **Description**
:--: | :--
**Client/Prospect** | ${client_name}
**Base License Type** | <li>- [x] ${base_licence_type}</li>
**:stop_sign: Add-ons?** | <li>- [x] __Advanced Security__</li>
**Admin email** | 
**Cloud org name** | ${github_cloud_org_name}
**Server org name** | ${github_server_org_name}
**Trial/Extension Length** | ${ghas_trial_length}
**Additional details** | _(i.e. why does your customer need an extension)_
**POC Issue** | ${ghas_issue_link}
**Links** | 
**Tag** | ${people_interested_in_trial}

Approved By: __${person_who_approved_trial}__

---
**Mention:** _@github/sales-support_ _@github/revenue_ (for :eyes: and :+1: on all day 46-90 requests)`;
exports.issueBodyTemplate = issueBodyTemplate;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __nccwpck_require__(252);
const run = async () => {
    const data = {
        client_name: "Client Name",
        base_licence_type: "GitHub Enterprise Cloud",
        github_cloud_org_name: "Cloud Name",
        github_server_org_name: "n/a",
        ghas_trial_length: "30 days",
        ghas_issue_link: "[ghas/#4342](https://google.com)",
        people_interested_in_trial: "@nickliffen",
        person_who_approved_trial: "@nickliffen",
    };
    const issueData = await (0, utils_1.issueBodyTemplate)(data);
    console.log(issueData);
};
run();

})();

module.exports = __webpack_exports__;
/******/ })()
;