"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('apem/adapters/application', ['exports', 'ember-data/adapters/json-api', 'apem/config/environment'], function (exports, _emberDataAdaptersJsonApi, _apemConfigEnvironment) {
  exports['default'] = _emberDataAdaptersJsonApi['default'].extend({
    namespace: 'api/v1',
    host: _apemConfigEnvironment['default'].APP.apiUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/vnd.api+json'
    },
    ajax: function ajax(url, method, hash) {
      if (_apemConfigEnvironment['default'].APP.usingCors) {
        if (hash === undefined) {
          hash = {};
        }

        hash.crossDomain = true;
        hash.xhrFields = { withCredentials: true };
      }

      return this._super(url, method, hash);
    }
  });
});
define('apem/app', ['exports', 'ember', 'apem/resolver', 'ember-load-initializers', 'apem/config/environment'], function (exports, _ember, _apemResolver, _emberLoadInitializers, _apemConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _apemConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _apemConfigEnvironment['default'].podModulePrefix,
    Resolver: _apemResolver['default'],
    LOG_TRANSITIONS: true
  });

  (0, _emberLoadInitializers['default'])(App, _apemConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('apem/blueprints/ember-cli-pickadate', ['exports', 'ember-cli-pickadate/blueprints/ember-cli-pickadate'], function (exports, _emberCliPickadateBlueprintsEmberCliPickadate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliPickadateBlueprintsEmberCliPickadate['default'];
    }
  });
});
define('apem/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'apem/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _apemConfigEnvironment) {

  var name = _apemConfigEnvironment['default'].APP.name;
  var version = _apemConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('apem/components/bread-crumb', ['exports', 'ember-crumbly/components/bread-crumb'], function (exports, _emberCrumblyComponentsBreadCrumb) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCrumblyComponentsBreadCrumb['default'];
    }
  });
});
define('apem/components/bread-crumbs', ['exports', 'ember-crumbly/components/bread-crumbs'], function (exports, _emberCrumblyComponentsBreadCrumbs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCrumblyComponentsBreadCrumbs['default'];
    }
  });
});
define('apem/components/date-picker-month', ['exports', 'ember-date-components/components/date-picker-month'], function (exports, _emberDateComponentsComponentsDatePickerMonth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsComponentsDatePickerMonth['default'];
    }
  });
});
define('apem/components/date-picker', ['exports', 'ember-date-components/components/date-picker'], function (exports, _emberDateComponentsComponentsDatePicker) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsComponentsDatePicker['default'];
    }
  });
});
define('apem/components/ember-selectize', ['exports', 'ember-cli-selectize/components/ember-selectize'], function (exports, _emberCliSelectizeComponentsEmberSelectize) {
  exports['default'] = _emberCliSelectizeComponentsEmberSelectize['default'];
});
define('apem/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('apem/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('apem/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('apem/components/happy-split-container', ['exports', 'ember', 'ember-cli-happy-splitter/components/happy-split-container'], function (exports, _ember, _emberCliHappySplitterComponentsHappySplitContainer) {
  exports['default'] = _emberCliHappySplitterComponentsHappySplitContainer['default'];
});
define('apem/components/happy-split-view', ['exports', 'ember', 'ember-cli-happy-splitter/components/happy-split-view'], function (exports, _ember, _emberCliHappySplitterComponentsHappySplitView) {
  exports['default'] = _emberCliHappySplitterComponentsHappySplitView['default'];
});
define('apem/components/happy-splitter-bar', ['exports', 'ember', 'ember-cli-happy-splitter/components/happy-splitter-bar'], function (exports, _ember, _emberCliHappySplitterComponentsHappySplitterBar) {
  exports['default'] = _emberCliHappySplitterComponentsHappySplitterBar['default'];
});
define('apem/components/infinity-loader', ['exports', 'ember-infinity/components/infinity-loader'], function (exports, _emberInfinityComponentsInfinityLoader) {
  exports['default'] = _emberInfinityComponentsInfinityLoader['default'];
});
define('apem/components/multiselect-checkboxes', ['exports', 'ember-multiselect-checkboxes/components/multiselect-checkboxes'], function (exports, _emberMultiselectCheckboxesComponentsMultiselectCheckboxes) {
  exports['default'] = _emberMultiselectCheckboxesComponentsMultiselectCheckboxes['default'];
});
define('apem/components/page-numbers', ['exports', 'ember', 'ember-cli-pagination/util', 'ember-cli-pagination/lib/page-items', 'ember-cli-pagination/validate'], function (exports, _ember, _emberCliPaginationUtil, _emberCliPaginationLibPageItems, _emberCliPaginationValidate) {
  exports['default'] = _ember['default'].Component.extend({
    currentPageBinding: "content.page",
    totalPagesBinding: "content.totalPages",

    hasPages: _ember['default'].computed.gt('totalPages', 1),

    watchInvalidPage: (function () {
      var me = this;
      var c = this.get('content');
      if (c && c.on) {
        c.on('invalidPage', function (e) {
          me.sendAction('invalidPageAction', e);
        });
      }
    }).observes("content"),

    truncatePages: true,
    numPagesToShow: 10,

    validate: function validate() {
      if (_emberCliPaginationUtil['default'].isBlank(this.get('currentPage'))) {
        _emberCliPaginationValidate['default'].internalError("no currentPage for page-numbers");
      }
      if (_emberCliPaginationUtil['default'].isBlank(this.get('totalPages'))) {
        _emberCliPaginationValidate['default'].internalError('no totalPages for page-numbers');
      }
    },

    pageItemsObj: (function () {
      return _emberCliPaginationLibPageItems['default'].create({
        parent: this,
        currentPageBinding: "parent.currentPage",
        totalPagesBinding: "parent.totalPages",
        truncatePagesBinding: "parent.truncatePages",
        numPagesToShowBinding: "parent.numPagesToShow",
        showFLBinding: "parent.showFL"
      });
    }).property(),

    //pageItemsBinding: "pageItemsObj.pageItems",

    pageItems: (function () {
      this.validate();
      return this.get("pageItemsObj.pageItems");
    }).property("pageItemsObj.pageItems", "pageItemsObj"),

    canStepForward: (function () {
      var page = Number(this.get("currentPage"));
      var totalPages = Number(this.get("totalPages"));
      return page < totalPages;
    }).property("currentPage", "totalPages"),

    canStepBackward: (function () {
      var page = Number(this.get("currentPage"));
      return page > 1;
    }).property("currentPage"),

    actions: {
      pageClicked: function pageClicked(number) {
        _emberCliPaginationUtil['default'].log("PageNumbers#pageClicked number " + number);
        this.set("currentPage", number);
        this.sendAction('action', number);
      },
      incrementPage: function incrementPage(num) {
        var currentPage = Number(this.get("currentPage")),
            totalPages = Number(this.get("totalPages"));

        if (currentPage === totalPages && num === 1) {
          return false;
        }
        if (currentPage <= 1 && num === -1) {
          return false;
        }
        this.incrementProperty('currentPage', num);

        var newPage = this.get('currentPage');
        this.sendAction('action', newPage);
      }
    }
  });
});
define('apem/components/pick-a-date', ['exports', 'ember-cli-pickadate/components/pick-a-date'], function (exports, _emberCliPickadateComponentsPickADate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliPickadateComponentsPickADate['default'];
    }
  });
});
define('apem/components/pick-a-time', ['exports', 'ember-cli-pickadate/components/pick-a-time'], function (exports, _emberCliPickadateComponentsPickATime) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliPickadateComponentsPickATime['default'];
    }
  });
});
define('apem/components/pl-uploader', ['exports', 'ember-plupload/components/pl-uploader', 'apem/config/environment'], function (exports, _emberPluploadComponentsPlUploader, _apemConfigEnvironment) {

  var BASE_URL = _apemConfigEnvironment['default'].PLUPLOAD_BASE_URL;

  if (BASE_URL == null) {
    if (_apemConfigEnvironment['default'].baseURL.slice(-1) === '/') {
      BASE_URL = _apemConfigEnvironment['default'].baseURL + 'assets/';
    } else {
      BASE_URL = _apemConfigEnvironment['default'].baseURL + '/assets/';
    }
  }

  exports['default'] = _emberPluploadComponentsPlUploader['default'].extend({
    BASE_URL: BASE_URL
  });
});
define('apem/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _semanticUiEmberComponentsUiAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiAccordion['default'];
    }
  });
});
define('apem/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _semanticUiEmberComponentsUiCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiCheckbox['default'];
    }
  });
});
define('apem/components/ui-dimmer', ['exports', 'semantic-ui-ember/components/ui-dimmer'], function (exports, _semanticUiEmberComponentsUiDimmer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiDimmer['default'];
    }
  });
});
define('apem/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _semanticUiEmberComponentsUiDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiDropdown['default'];
    }
  });
});
define('apem/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _semanticUiEmberComponentsUiEmbed) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiEmbed['default'];
    }
  });
});
define('apem/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _semanticUiEmberComponentsUiModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiModal['default'];
    }
  });
});
define('apem/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _semanticUiEmberComponentsUiNag) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiNag['default'];
    }
  });
});
define('apem/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _semanticUiEmberComponentsUiPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiPopup['default'];
    }
  });
});
define('apem/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _semanticUiEmberComponentsUiProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiProgress['default'];
    }
  });
});
define('apem/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _semanticUiEmberComponentsUiRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiRadio['default'];
    }
  });
});
define('apem/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _semanticUiEmberComponentsUiRating) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiRating['default'];
    }
  });
});
define('apem/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _semanticUiEmberComponentsUiSearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSearch['default'];
    }
  });
});
define('apem/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _semanticUiEmberComponentsUiShape) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiShape['default'];
    }
  });
});
define('apem/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _semanticUiEmberComponentsUiSidebar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSidebar['default'];
    }
  });
});
define('apem/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _semanticUiEmberComponentsUiSticky) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberComponentsUiSticky['default'];
    }
  });
});
define('apem/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('apem/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('apem/helpers/currency-format', ['exports', 'ember'], function (exports, _ember) {
  exports.currencyFormat = currencyFormat;

  function currencyFormat(params /*, hash*/) {
    // var formatted = parseFloat(params, 10).toFixed(2);
    //
    // return '$' + formatted;
    var n = params[0],
        c = isNaN(c = Math.abs(params[1])) ? 2 : c,

    //  d = '.',
    t = ',',
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + '',
        j = (j = i.length) > 3 ? j % 3 : 0;

    //uncomment end of return for decimals
    return '$' + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t); // + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
  }

  exports['default'] = _ember['default'].Helper.helper(currencyFormat);
});
define('apem/helpers/date-picker-day-classes', ['exports', 'ember-date-components/helpers/date-picker-day-classes'], function (exports, _emberDateComponentsHelpersDatePickerDayClasses) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsHelpersDatePickerDayClasses['default'];
    }
  });
  Object.defineProperty(exports, 'datePickerDayClasses', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsHelpersDatePickerDayClasses.datePickerDayClasses;
    }
  });
});
define('apem/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _emberIntlHelpersFormatDate) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatDate['default'];
    }
  });
});
define('apem/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _emberIntlHelpersFormatHtmlMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatHtmlMessage['default'];
    }
  });
});
define('apem/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _emberIntlHelpersFormatMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatMessage['default'];
    }
  });
});
define('apem/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _emberIntlHelpersFormatNumber) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatNumber['default'];
    }
  });
});
define('apem/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _emberIntlHelpersFormatRelative) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatRelative['default'];
    }
  });
});
define('apem/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _emberIntlHelpersFormatTime) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatTime['default'];
    }
  });
});
define('apem/helpers/if-odd', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Helper.helper(function (conditional, options) {
    if (conditional % 2 === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
});
define('apem/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _emberIntlHelpersIntlGet) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersIntlGet['default'];
    }
  });
});
define('apem/helpers/is-equal-day', ['exports', 'ember-date-components/helpers/is-equal-day'], function (exports, _emberDateComponentsHelpersIsEqualDay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsHelpersIsEqualDay['default'];
    }
  });
  Object.defineProperty(exports, 'isEqualDay', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsHelpersIsEqualDay.isEqualDay;
    }
  });
});
define('apem/helpers/is-equal-month', ['exports', 'ember-date-components/helpers/is-equal-month'], function (exports, _emberDateComponentsHelpersIsEqualMonth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsHelpersIsEqualMonth['default'];
    }
  });
  Object.defineProperty(exports, 'isEqualMonth', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsHelpersIsEqualMonth.isEqualMonth;
    }
  });
});
define('apem/helpers/is-equal-year', ['exports', 'ember-date-components/helpers/is-equal-year'], function (exports, _emberDateComponentsHelpersIsEqualYear) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsHelpersIsEqualYear['default'];
    }
  });
  Object.defineProperty(exports, 'isEqualYear', {
    enumerable: true,
    get: function get() {
      return _emberDateComponentsHelpersIsEqualYear.isEqualYear;
    }
  });
});
define('apem/helpers/is-equal', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports['default'] = _ember['default'].Helper.helper(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var leftSide = _ref2[0];
    var rightSide = _ref2[1];

    // console.log('helper used "is-equal": '+ leftSide +' '+rightSide);
    return leftSide === rightSide;
  });
});
define('apem/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _emberIntlHelpersL) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersL['default'];
    }
  });
});
define('apem/helpers/map-value', ['exports', 'semantic-ui-ember/helpers/map-value'], function (exports, _semanticUiEmberHelpersMapValue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberHelpersMapValue['default'];
    }
  });
  Object.defineProperty(exports, 'mapValue', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberHelpersMapValue.mapValue;
    }
  });
});
define('apem/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _emberMomentHelpersMomentCalendar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar['default'];
    }
  });
  Object.defineProperty(exports, 'momentCalendar', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar.momentCalendar;
    }
  });
});
define('apem/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('apem/helpers/moment-format', ['exports', 'ember', 'apem/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _apemConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_apemConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('apem/helpers/moment-from-now', ['exports', 'ember', 'apem/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _apemConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_apemConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('apem/helpers/moment-to-now', ['exports', 'ember', 'apem/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _apemConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_apemConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('apem/helpers/not-equal', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports['default'] = _ember['default'].Helper.helper(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var leftSide = _ref2[0];
    var rightSide = _ref2[1];

    // console.log('helper used "is-equal": '+ leftSide +' '+rightSide);
    return leftSide !== rightSide;
  });
});
define('apem/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('apem/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('apem/helpers/style-attr', ['exports', 'ember'], function (exports, _ember) {
  exports.styleAttr = styleAttr;

  function styleAttr(params /*, hash*/) {
    var styleString = '';

    params.forEach(function (param, index) {
      if (index % 2 === 0) {
        styleString = styleString.concat(param + ': ');
      } else {
        // TODO: add css escaping
        styleString = styleString.concat(param + '; ');
      }
    });

    return _ember['default'].String.htmlSafe(styleString);
  }

  exports['default'] = _ember['default'].Helper.helper(styleAttr);
});
define('apem/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _emberIntlHelpersT) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersT['default'];
    }
  });
});
define('apem/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'apem/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _apemConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_apemConfigEnvironment['default'].APP.name, _apemConfigEnvironment['default'].APP.version)
  };
});
define('apem/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('apem/initializers/crumbly', ['exports', 'ember-crumbly/initializers/crumbly'], function (exports, _emberCrumblyInitializersCrumbly) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCrumblyInitializersCrumbly['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCrumblyInitializersCrumbly.initialize;
    }
  });
});
define('apem/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('apem/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'apem/config/environment', 'apem/mirage/config', 'ember-cli-mirage/server'], function (exports, _emberCliMirageUtilsReadModules, _apemConfigEnvironment, _apemMirageConfig, _emberCliMirageServer) {
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }
      var environment = _apemConfigEnvironment['default'].environment;

      if (_shouldUseMirage(environment, _apemConfigEnvironment['default']['ember-cli-mirage'])) {
        var modules = (0, _emberCliMirageUtilsReadModules['default'])(_apemConfigEnvironment['default'].modulePrefix);
        var options = _.assign(modules, { environment: environment, baseConfig: _apemMirageConfig['default'], testConfig: _apemMirageConfig.testConfig });

        new _emberCliMirageServer['default'](options);
      }
    }
  };

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('apem/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('apem/initializers/ember-hammertime', ['exports', 'ember-hammertime/components/link-component', 'ember-hammertime/components/component'], function (exports, _emberHammertimeComponentsLinkComponent, _emberHammertimeComponentsComponent) {
  // jshint ignore:line

  exports['default'] = {

    name: 'ember-hammertime',

    initialize: function initialize() {}

  };
});
// activate touch action css
// jshint ignore:line
define('apem/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('apem/initializers/pl-uploader-manager', ['exports', 'ember-plupload/system/make-file-filter'], function (exports, _emberPluploadSystemMakeFileFilter) {
  exports.initialize = initialize;

  var keys = Object.keys;

  function initialize(app) {
    if (arguments[1]) {
      // Ember < 2.1
      app = arguments[1];
    }

    var entries = requirejs.entries;
    var fileFilterPrefix = app.modulePrefix + '/file-filters';
    var fileFilters = {};
    keys(entries).forEach(function (key) {

      if (key.indexOf(fileFilterPrefix) === 0) {
        var filterName = key.split('/').slice(-1);
        var module = require(key, null, null, true);
        if (module) {
          fileFilters[filterName] = module['default'];
          (0, _emberPluploadSystemMakeFileFilter['default'])(filterName, module['default']);
          app.register('file-filter:' + filterName, module['default'], { instantiate: false });
        }
      }
    });

    app.register('app:file-filters', fileFilters, { instantiate: false });
    app.inject('component:pl-uploader', 'fileFilters', 'app:file-filters');
  }

  exports['default'] = {
    name: 'pl-uploader',
    initialize: initialize
  };
});
/*global requirejs */
define('apem/initializers/services', ['exports', 'apem/config/environment'], function (exports, _apemConfigEnvironment) {
  exports.initialize = initialize;

  function initialize(application) {

    // Route info
    application.inject('service:route-info', 'router', 'router:main');
    application.inject('service:route-info', 'app', 'controller:application');
    application.inject('service:profile', 'store', 'service:store');

    if (_apemConfigEnvironment['default'].APP.usingCors === true) {
      (function ($) {
        var _old = $.ajax;
        $.ajax = function () {
          var url, settings;
          var apiUrl = _apemConfigEnvironment['default'].APP.apiUrl;
          if (arguments.length === 2) {
            url = arguments[0];
            settings = arguments[1];
          } else {
            settings = arguments[0];
          }

          settings.crossDomain = true;
          if (!settings.xhrFields) {
            settings.xhrFields = {};
          }
          settings.xhrFields.withCredentials = true;

          if (!url) {
            url = settings.url;
          }

          // If we still don't have an url, just execute the ajax request and let jQuery error out
          if (!url) {
            return _old.apply(this, [settings]);
          }

          if (!url.includes(apiUrl)) {
            if (url[0] !== '/' && apiUrl[apiUrl.length - 1] !== '/') {
              url = '/' + url;
            }
            url = apiUrl + url;
          }
          settings.url = url;
          //        console.log(settings);
          return _old.apply(this, [settings]);
        };
      })(jQuery);
    }
  }

  exports['default'] = {
    name: 'services',
    initialize: initialize
  };
});
/*global jQuery */
define('apem/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('apem/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("apem/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('apem/instance-initializers/ember-intl', ['exports', 'apem/config/environment'], function (exports, _apemConfigEnvironment) {
  exports.instanceInitializer = instanceInitializer;

  function filterBy(env, type) {
    return Object.keys(requirejs._eak_seen).filter(function (key) {
      return key.indexOf(env.modulePrefix + '/' + type + '/') === 0;
    });
  }

  function instanceInitializer(instance) {
    var container = instance.lookup ? instance : instance.container;
    var service = container.lookup('service:intl');

    filterBy(_apemConfigEnvironment['default'], 'cldrs').forEach(function (key) {
      service.addLocaleData(require(key, null, null, true)['default']);
    });

    filterBy(_apemConfigEnvironment['default'], 'translations').forEach(function (key) {
      var localeSplit = key.split('\/');
      var localeName = localeSplit[localeSplit.length - 1];
      service.addTranslations(localeName, require(key, null, null, true)['default']);
    });
  }

  exports['default'] = {
    name: 'ember-intl',
    initialize: instanceInitializer
  };
});
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
define('apem/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = 'api/v1'; // make this `api`, for example, if your API is namespaced
    this.timing = 2000; // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */

    //get all users
    this.get('/users', function (schema) {
      return schema.users.all();
    });

    //get a single user
    this.get('/users/:id', function (schema, request) {
      var id = request.params.id;

      return schema.users.find(id);
    });

    //get all opportunities
    this.get('/opportunities', function (schema) {
      return schema.opportunities.all();
    });

    //get a single opportunity
    this.get('/opportunities/:id', function (schema, request) {
      var id = request.params.id;

      return schema.opportunities.find(id);
    });
  };
});
define('apem/mirage/factories/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    username: function username() {
      return _emberCliMirage.faker.name.findName();
    },
    type: function type() {
      return _emberCliMirage.faker.list.random('Admin', 'User')();
    },
    active: function active() {
      return _emberCliMirage.faker.random.boolean();
    },
    numOpportunities: function numOpportunities() {
      return '0';
    },
    selected: function selected() {
      return _emberCliMirage.faker.random.boolean();
    }
  });
});
define("apem/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function () /*server*/{

    // Seed your development database using your factories. This
    // data will not be loaded in your tests.

    /*server.createList('contact', 5);
    server.createList('account', 5);
    server.createList('opportunity', 5);*/
    //server.loadFixtures();

  };
});
define('apem/mixins/base', ['exports', 'semantic-ui-ember/mixins/base'], function (exports, _semanticUiEmberMixinsBase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _semanticUiEmberMixinsBase['default'];
    }
  });
});
define('apem/mixins/infinity-filter', ['exports', 'ember', 'ember-infinity/mixins/route'], function (exports, _ember, _emberInfinityMixinsRoute) {
  exports['default'] = _ember['default'].Mixin.create(_emberInfinityMixinsRoute['default'], {

    filterProperty: 'modelFilter',
    filterModelProperty: 'listTitle',
    params: null,

    infinityFilterModel: function infinityFilterModel(modeltype, params) {
      if (params) {
        return this.infinityModel(modeltype, params);
      } else {
        return this.infinityModel(modeltype, { perPage: 25, startingPage: 1 });
      }
    },

    addInfinityModel: function addInfinityModel(newObject) {
      this.get('controller.model').unshiftObject(newObject._internalModel);
    },

    setupController: function setupController(controller, model) {
      var _this = this;

      this._super.apply(this, arguments);

      controller.set('filteredModel', model);
      controller.set('filterLoading', false);

      controller.addObserver('model', function () {
        _this.updateFilter();
      });

      controller.addInfinityModel = function (newObject) {
        _this.addInfinityModel(newObject);
      };

      this.addObserver('controller.' + this.get('filterProperty'), function () {
        // Immediately Filter existing list of items
        _this.updateFilter();

        // Fetch additional items from server with filter query
        _ember['default'].run.debounce(_this, _this.updateSearch, 300);
      });
    },

    updateSearch: function updateSearch() {
      this.set(this.get('filterProperty'), this.get('controller.' + this.get('filterProperty')));
      this.refresh();
    },

    updateFilter: function updateFilter() {
      var _this2 = this;

      this.set('controller.filterLoading', true);

      var rx = new RegExp(this.get('controller.' + this.get('filterProperty')), 'gi');
      var model = this.get('controller.model');
      var filterProperty = this.get('filterModelProperty');
      this.set('controller.filteredModel', model.filter(function (item) {
        if (item.get(filterProperty) === undefined) {
          return true;
        }
        return item.get(filterProperty).match(rx) || _this2.get('controller.modelFilter') === '';
      }));
    },

    actions: {
      loading: function loading() {
        if (this.get('controller.filterLoading')) {
          return false;
        }

        return true;
      }
    }
  });
});
define('apem/models/event', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    opportunity: _emberData['default'].belongsTo('opportunity'),
    created_at: _emberData['default'].attr('string'),
    updated_at: _emberData['default'].attr('string'),
    type: _emberData['default'].attr('string'),
    date: _emberData['default'].attr('string')
  });
});
define('apem/models/field', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    created_at: _emberData['default'].attr('string'),
    updated_at: _emberData['default'].attr('string'),
    label: _emberData['default'].attr('string'),
    type: _emberData['default'].attr('string'),
    name: _emberData['default'].attr('string'),
    value: _emberData['default'].attr('string', { defaultValue: null }),
    options: _emberData['default'].attr(),
    required: _emberData['default'].attr('boolean', { defaultValue: true }),
    visible: _emberData['default'].attr('boolean', { defaultValue: true }),
    group: _emberData['default'].attr('string')
  });
});
define('apem/models/opportunity', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    user: _emberData['default'].belongsTo('user'),
    events: _emberData['default'].hasMany('event'),
    draft: _emberData['default'].attr('boolean', { defaultValue: false }),
    status: _emberData['default'].attr('string', { defaultValue: null }),
    stage: _emberData['default'].attr('string', { defaultValue: 'quote' }),
    state: _emberData['default'].attr('string', { defaultValue: 'Open' }),
    company: _emberData['default'].attr('string', { defaultValue: null }),
    address: _emberData['default'].attr('string', { defaultValue: null }),
    city: _emberData['default'].attr('string', { defaultValue: null }),
    stateCounty: _emberData['default'].attr('string', { defaultValue: null }),
    mailCode: _emberData['default'].attr('string', { defaultValue: null }),
    country: _emberData['default'].attr('string', { defaultValue: null }),
    contactName: _emberData['default'].attr('string', { defaultValue: null }),
    contactTitle: _emberData['default'].attr('string', { defaultValue: null }),
    contactPhone: _emberData['default'].attr('string', { defaultValue: null }),
    contactEmail: _emberData['default'].attr('string', { defaultValue: null }),
    salesRepAgent: _emberData['default'].attr('string', { defaultValue: null }),
    distributor: _emberData['default'].attr('string', { defaultValue: null }),
    apemSalesPerson: _emberData['default'].attr('string', { defaultValue: null }),
    sraSalesRep: _emberData['default'].attr('string', { defaultValue: null }),
    distributorSalesperson: _emberData['default'].attr('string', { defaultValue: null }),
    industry: _emberData['default'].attr('string', { defaultValue: null }),
    application: _emberData['default'].attr('string', { defaultValue: null }),
    reasonForOpp: _emberData['default'].attr('string', { defaultValue: null }),
    'function': _emberData['default'].attr('string', { defaultValue: null }),
    catalogProduct: _emberData['default'].attr('boolean', { defaultValue: true }),
    catalogPartNum: _emberData['default'].attr('string', { defaultValue: null }),
    productType: _emberData['default'].attr('string', { defaultValue: null }),
    productSeries: _emberData['default'].attr('string', { defaultValue: null }),
    apemPartNum: _emberData['default'].attr('string', { defaultValue: null }),
    briefDescription: _emberData['default'].attr('string', { defaultValue: null }),
    extendedDescription: _emberData['default'].attr('string', { defaultValue: null }),
    currentSupplier: _emberData['default'].attr('string', { defaultValue: null }),
    competitors: _emberData['default'].attr('string', { defaultValue: null }),
    year1SalesVol: _emberData['default'].attr('string', { defaultValue: null }),
    year2SalesVol: _emberData['default'].attr('string', { defaultValue: null }),
    year3SalesVol: _emberData['default'].attr('string', { defaultValue: null }),
    currency: _emberData['default'].attr('string', { defaultValue: null }),
    targetSalesPrice: _emberData['default'].attr('string', { defaultValue: null }),
    potentialAnnualRev: _emberData['default'].attr('string', { defaultValue: null }),
    probabilityOfWin: _emberData['default'].attr('string', { defaultValue: null }),
    expectedValue: _emberData['default'].attr('string', { defaultValue: null }),
    quoteDate: _emberData['default'].attr('string', { defaultValue: null }),
    estimatedProdDate: _emberData['default'].attr('string', { defaultValue: null }),
    sampleDate: _emberData['default'].attr('string', { defaultValue: null }),
    approvalDate: _emberData['default'].attr('string', { defaultValue: null }),
    dateRcvdProdOrder: _emberData['default'].attr('string', { defaultValue: null }),
    prodSalesOrderNum: _emberData['default'].attr('string', { defaultValue: null }),
    reasonForWin: _emberData['default'].attr('string', { defaultValue: null }),
    dateLost: _emberData['default'].attr('string', { defaultValue: null }),
    lostToWhom: _emberData['default'].attr('string', { defaultValue: null }),
    reasonForLoss: _emberData['default'].attr('string', { defaultValue: null }),
    commentField: _emberData['default'].attr('string', { defaultValue: null }),
    createdAt: _emberData['default'].attr('string', { defaultValue: null }),
    updatedAt: _emberData['default'].attr('string', { defaultValue: null }),
    newRecord: _emberData['default'].attr('boolean', { defaultValue: false }),
    userId: _emberData['default'].attr('string', { defaultValue: null })
  });
});
define('apem/models/profile', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    username: _emberData['default'].attr('string', { defaultValue: null }),
    lastLogin: _emberData['default'].attr('string', { defaultValue: null })
  });
});
define('apem/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    opportunities: _emberData['default'].hasMany('opportunity'),

    createdAt: _emberData['default'].attr('string', { defaultValue: null }),
    updatedAt: _emberData['default'].attr('string', { defaultValue: null }),
    username: _emberData['default'].attr('string', { defaultValue: null }),
    password: _emberData['default'].attr('string', { defaultValue: null }),
    passwordVerify: _emberData['default'].attr('string', { defaultValue: null }),
    type: _emberData['default'].attr('string', { defaultValue: null }),
    active: _emberData['default'].attr('string', { defaultValue: true }),
    numOpportunities: _emberData['default'].attr('string', { defaultValue: 0 }),
    lastLogin: _emberData['default'].attr('string', { defaultValue: null }),
    selected: _emberData['default'].attr('boolean', { defaultValue: false })
  });
});
define('apem/overrides/model', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].Model.reopen({
    simpleClone: function simpleClone() {
      var model = this,
          attrs = model.toJSON(),
          class_type = model.constructor;

      var objectType = _ember['default'].String.decamelize(class_type.toString().split(':')[1]);

      this.eachRelationship(function (key, rel) {
        if (rel.kind === 'belongsTo') {
          attrs[key] = model.get(key);
        }
      });

      delete attrs.id;

      return { objectType: objectType, attrs: attrs };
    }
  });
});
define('apem/pods/application/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    serverErrors: _ember['default'].A()
  });
});
define("apem/pods/application/loading/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "apem/pods/application/loading/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui segment loading-indicator");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui active inverted dimmer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui text loader");
        var el4 = dom.createTextNode("Loading");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/application/route', ['exports', 'ember', 'apem/config/environment'], function (exports, _ember, _apemConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend({
    appConfig: _apemConfigEnvironment['default'],

    init: function init() {
      this._super.apply(this, arguments);
      if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
        // Safari caching fix
        window.onpageshow = function (event) {
          if (event.persisted) {
            window.location.reload();
          }
        };
      }
    },

    renderTemplate: function renderTemplate() {
      this._super.apply(this, arguments);
    },

    afterModel: function afterModel(model, transition) {
      if (transition.targetName === "home.index") {
        this.transitionTo('opportunities');
      }
    },

    actions: {
      error: function error(resp /*, transition*/) {
        var loginURL = this.get('appConfig').APP.apiUrl;
        if (!resp || resp && !resp.errors) {
          _ember['default'].Logger.error(resp);
          return;
        }

        if (resp.errors.title === "Not Authorized.") {
          window.location = loginURL;
        }
      }
    }
  });
});
define("apem/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "apem/pods/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui-main pusher pusher-window");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Application Header ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui-content fixed-content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Main Application Content ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Modal ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(element0, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(element1, 3, 3);
        morphs[4] = dom.createMorphAt(element1, 7, 7);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "ui-layout/nav-hamburger", ["loc", [null, [1, 0], [1, 27]]], 0, 0, 0, 0], ["content", "ui-layout/nav-sidebar", ["loc", [null, [2, 0], [2, 25]]], 0, 0, 0, 0], ["content", "ui-layout/nav-header", ["loc", [null, [6, 2], [6, 26]]], 0, 0, 0, 0], ["content", "outlet", ["loc", [null, [10, 4], [10, 14]]], 0, 0, 0, 0], ["inline", "outlet", ["modal"], [], ["loc", [null, [13, 4], [13, 22]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/components/adv-search/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    attributeBindings: ['searchUsed', 'filterParams'],

    filterParams: null,

    // Defaults
    searchedStatus: '',
    searchedState: '',
    lastThirtyDays: false,
    dateEntered: '',
    startDate: '',
    endDate: '',
    estimatedProdDate: '',
    searchString: '',

    searchUsed: false,

    init: function init() {
      this._super.apply(this, arguments);

      if (this.get('filterParams.lastThirtyDays') === "false" || this.get('filterParams.lastThirtyDays') === false) {
        this.set('lastThirtyDays', false);
      } else if (this.get('filterParams.lastThirtyDays') === "true" || this.get('filterParams.lastThirtyDays') === true) {
        this.set('lastThirtyDays', true);
      }

      var sStatus = this.get('filterParams.searchedStatus');
      if (sStatus !== undefined) {
        this.set('searchedStatus', sStatus);
      }
      var sState = this.get('filterParams.searchedState');
      if (sState !== undefined) {
        this.set('searchedState', sState);
      }
      var dE = this.get('filterParams.dateEntered');
      if (dE !== undefined) {
        this.set('dateEntered', dE);
      }
      var sD = this.get('filterParams.startDate');
      if (sD !== undefined) {
        this.set('startDate', sD);
      }
      var eD = this.get('filterParams.endDate');
      if (eD !== undefined) {
        this.set('endDate', eD);
      }
      var ePD = this.get('filterParams.estimatedProdDate');
      if (dE !== undefined) {
        this.set('estimatedProdDate', ePD);
      }
      var sString = this.get('filterParams.searchString');
      if (sString !== undefined) {
        this.set('searchString', sString);
      }
    },

    didRender: function didRender() {
      this._super.apply(this, arguments);
      this.$('#searchInput').value = this.get('searchString');
    },
    // click:function(event){
    //   if(event.target.id === 'dropTrigger'){
    //     let parent = event.target.offsetParent;
    //     parent.fireEvent('drop');
    //   }
    // },
    notUsingDates: (function () {
      // console.log('notUsingDates triggered!!!');
      return this.get('lastThirtyDays');
    }).property('lastThirtyDays'),

    notUsingDateEntered: (function () {
      // console.log('notUsingDateEntered triggered!!!');
      // let a = this.get('lastThirtyDays'),
      // b = this.get('startDate'),
      // c = this.get('endDate'),
      // d = this.get('estimatedProdDate');
      return this.get('lastThirtyDays') === true || this.get('startDate') !== '' || this.get('endDate') !== '' || this.get('estimatedProdDate') !== '' ? true : false;
    }).property('lastThirtyDays', 'startDate', 'endDate', 'estimatedProdDate'),

    notUsingDateRange: (function () {
      // console.log('notUsingDateRange triggered!!!');
      return this.get('lastThirtyDays') === true || this.get('dateEntered') !== '' || this.get('estimatedProdDate') !== '' ? true : false;
    }).property('lastThirtyDays', 'dateEntered', 'estimatedProdDate'),

    notUsingEstProdDate: (function () {
      // console.log('manage date entered!!!');
      return this.get('lastThirtyDays') === true || this.get('dateEntered') !== '' || this.get('startDate') !== '' || this.get('endDate') !== '' ? true : false;
    }).property('lastThirtyDays', 'dateEntered', 'startDate', 'endDate'),

    actions: {
      handleSearch: function handleSearch(event) {

        if (event.keyCode === 13) {
          //check if enter button was pressed
          this.set('searchString', event.target.value);
          this.doTheSearch();
        }
      },
      onDropdownBeforeShow: function onDropdownBeforeShow() {
        if (event.target.id !== 'dropTrigger') {
          return false;
        }
        console.log(event.target);
      },
      pullEntireCSV: function pullEntireCSV() {
        this.sendAction('pullEntireCSV');
      },
      pullFilteredCSV: function pullFilteredCSV() {
        var params = {
          lastThirtyDays: this.get('lastThirtyDays').toString(),
          dateEntered: this.get('dateEntered'),
          startDate: this.get('startDate'),
          endDate: this.get('endDate'),
          estimatedProdDate: this.get('estimatedProdDate'),
          searchedStatus: this.get('searchedStatus'),
          searchedState: this.get('searchedState'),
          searchString: this.get('searchString')
        };
        this.sendAction('pullFilteredCSV', params);
      },

      clearSearch: function clearSearch() {
        this.toggleProperty('searchUsed');
        this.set('searchString', '');
        this.set('searchedStatus', '');
        this.set('searchedState', '');
        this.sendAction('clearSearchFilter');
      },

      onDateEntered: function onDateEntered(data) {
        this.set('dateEntered', data);
      },
      onStartDate: function onStartDate(data) {
        this.set('startDate', data);
      },
      onEndDate: function onEndDate(data) {
        this.set('endDate', data);
      },
      onEstProductionDate: function onEstProductionDate(data) {
        this.set('estimatedProdDate', data);
      },
      onLastThirtyChange: function onLastThirtyChange() {
        this.toggleProperty('lastThirtyDays');
      },

      onSearchClick: function onSearchClick() {
        this.doTheSearch();
      }
    },

    doTheSearch: function doTheSearch() {
      var params = {
        perPage: '25',
        startingPage: '1',
        lastThirtyDays: this.get('lastThirtyDays').toString(),
        dateEntered: this.get('dateEntered'),
        startDate: this.get('startDate'),
        endDate: this.get('endDate'),
        estimatedProdDate: this.get('estimatedProdDate'),
        searchedStatus: this.get('searchedStatus'),
        searchedState: this.get('searchedState'),
        searchString: this.get('searchString')
      };
      if (this.get('lastThirtyDays') === false && this.get('dateEntered') === '' && this.get('startDate') === '' && this.get('endDate') === '' && this.get('estimatedProdDate') === '' && this.get('searchedStatus') === '' && this.get('searchedState') === '' && this.get('searchString') === '') {
        //do not sho clear search btn
      } else {
          this.toggleProperty('searchUsed');
          this.sendAction('doSearch', params);
        }
    }
  });
});
define("apem/pods/components/adv-search/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 131,
                "column": 4
              },
              "end": {
                "line": 136,
                "column": 4
              }
            },
            "moduleName": "apem/pods/components/adv-search/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "ui icon");
            dom.setAttribute(el1, "data-position", "bottom left");
            dom.setAttribute(el1, "data-tooltip", "Clear Search");
            dom.setAttribute(el1, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("i");
            dom.setAttribute(el2, "class", "close large icon");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment(" <i class=\"close large icon clear-search-btn\" {{action 'clearSearch'}} data-tooltip='Clear Search'></i> ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["clearSearch"], [], ["loc", [null, [132, 84], [132, 108]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 137,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/adv-search/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui icon input adv-search-input");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "search icon adv-search-icon-left");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" <input class=\"prompt search advanced-search\" type=\"text\" > ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "id", "dropTrigger");
          dom.setAttribute(el1, "class", "dropdown icon dark-gray-bg");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu adv-search-menu");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui field");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "item fake-item");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui field gap1");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "menu-label");
          var el4 = dom.createTextNode("Date Entered");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui field gap1");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "menu-label");
          var el4 = dom.createTextNode("Date Range");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui field gap1");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "menu-label ");
          var el4 = dom.createTextNode("Estimated Production Date");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "divider gap1");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui field");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row ui buttons gap1");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" <div class=\"ui buttons gap1\">\n\n          <button class=\"ui button\">Won</button>\n          <button class=\"ui button\">Lost</button>\n          <button class=\"ui button\">Backburner</button>\n        </div> ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui field");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui buttons fluid gap1");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment(" <button class=\"ui button\">Open</button>\n          <button class=\"ui button\">Closed</button> ");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [7]);
          var element2 = dom.childAt(element1, [5]);
          var element3 = dom.childAt(element1, [11, 1]);
          var element4 = dom.childAt(element1, [13, 3]);
          var morphs = new Array(14);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
          morphs[4] = dom.createMorphAt(element2, 4, 4);
          morphs[5] = dom.createMorphAt(element2, 6, 6);
          morphs[6] = dom.createMorphAt(dom.childAt(element1, [7]), 4, 4);
          morphs[7] = dom.createMorphAt(element3, 1, 1);
          morphs[8] = dom.createMorphAt(element3, 3, 3);
          morphs[9] = dom.createMorphAt(element3, 5, 5);
          morphs[10] = dom.createMorphAt(element3, 7, 7);
          morphs[11] = dom.createMorphAt(element4, 1, 1);
          morphs[12] = dom.createMorphAt(element4, 3, 3);
          morphs[13] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "searchString", ["loc", [null, [10, 18], [10, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "key-press", ["subexpr", "action", [["subexpr", "mut", [["get", "searchString", ["loc", [null, [10, 54], [10, 66]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 49], [10, 67]]], 0, 0]], [], ["loc", [null, [10, 41], [10, 68]]], 0, 0], "enter", "onSearchClick", "class", "prompt advanced-srch"], ["loc", [null, [10, 4], [10, 121]]], 0, 0], ["inline", "input", [], ["type", "button", "value", "Search", "class", "ui button adv-search-btn", "click", ["subexpr", "action", ["onSearchClick"], [], ["loc", [null, [14, 78], [14, 102]]], 0, 0]], ["loc", [null, [14, 2], [14, 104]]], 0, 0], ["inline", "ui-checkbox", [], ["class", "toggle", "label", "New (last 30 days)", "checked", ["subexpr", "@mut", [["get", "lastThirtyDays", ["loc", [null, [22, 20], [22, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", ["onLastThirtyChange"], [], ["loc", [null, [23, 21], [23, 50]]], 0, 0]], ["loc", [null, [19, 10], [23, 52]]], 0, 0], ["inline", "custom-date-picker", [], ["btnLabel", "", "inputClass", "seventy-p cust-date-field", "disabled", ["subexpr", "@mut", [["get", "notUsingDateEntered", ["loc", [null, [32, 21], [32, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "date", ["subexpr", "@mut", [["get", "dateEntered", ["loc", [null, [33, 17], [33, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "adv-search-field", "updatedDate", "onDateEntered"], ["loc", [null, [29, 10], [35, 41]]], 0, 0], ["inline", "custom-date-picker", [], ["btnLabel", "Start", "disabled", ["subexpr", "@mut", [["get", "notUsingDateRange", ["loc", [null, [40, 19], [40, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "date", ["subexpr", "@mut", [["get", "startDate", ["loc", [null, [41, 15], [41, 24]]], 0, 0, 0, 0]], [], [], 0, 0], "inputClass", "fifty-p cust-date-field", "class", "adv-search-field", "updatedDate", "onStartDate"], ["loc", [null, [39, 10], [44, 37]]], 0, 0], ["inline", "custom-date-picker", [], ["btnLabel", "End", "inputClass", "fifty-p cust-date-field", "disabled", ["subexpr", "@mut", [["get", "notUsingDateRange", ["loc", [null, [48, 21], [48, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "date", ["subexpr", "@mut", [["get", "endDate", ["loc", [null, [49, 17], [49, 24]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "gap1 adv-search-field", "updatedDate", "onEndDate"], ["loc", [null, [45, 10], [51, 37]]], 0, 0], ["inline", "custom-date-picker", [], ["inputClass", "seventy-p cust-date-field", "btnLabel", "", "disabled", ["subexpr", "@mut", [["get", "notUsingEstProdDate", ["loc", [null, [58, 21], [58, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "date", ["subexpr", "@mut", [["get", "estimatedProdDate", ["loc", [null, [59, 17], [59, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "adv-search-field", "updateDate", "onEstProductionDate"], ["loc", [null, [55, 10], [61, 46]]], 0, 0], ["inline", "ui-radio", [], ["name", "sStatus", "current", ["subexpr", "@mut", [["get", "searchedStatus", ["loc", [null, [70, 20], [70, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Backburner", "value", "Backburner", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "searchedStatus", ["loc", [null, [74, 34], [74, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [74, 29], [74, 49]]], 0, 0]], [], ["loc", [null, [74, 21], [74, 50]]], 0, 0]], ["loc", [null, [68, 10], [74, 52]]], 0, 0], ["inline", "ui-radio", [], ["name", "sStatus", "current", ["subexpr", "@mut", [["get", "searchedStatus", ["loc", [null, [78, 20], [78, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Won", "value", "Won", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "searchedStatus", ["loc", [null, [82, 34], [82, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [82, 29], [82, 49]]], 0, 0]], [], ["loc", [null, [82, 21], [82, 50]]], 0, 0]], ["loc", [null, [76, 10], [82, 52]]], 0, 0], ["inline", "ui-radio", [], ["name", "sStatus", "current", ["subexpr", "@mut", [["get", "searchedStatus", ["loc", [null, [86, 20], [86, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Lost", "value", "Lost", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "searchedStatus", ["loc", [null, [90, 34], [90, 48]]], 0, 0, 0, 0]], [], ["loc", [null, [90, 29], [90, 49]]], 0, 0]], [], ["loc", [null, [90, 21], [90, 50]]], 0, 0]], ["loc", [null, [84, 10], [90, 52]]], 0, 0], ["inline", "ui-radio", [], ["name", "sStatus", "current", ["subexpr", "@mut", [["get", "searchedStatus", ["loc", [null, [94, 20], [94, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "None", "value", "", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "searchedState", ["loc", [null, [98, 34], [98, 47]]], 0, 0, 0, 0]], [], ["loc", [null, [98, 29], [98, 48]]], 0, 0]], [], ["loc", [null, [98, 21], [98, 49]]], 0, 0]], ["loc", [null, [92, 10], [98, 51]]], 0, 0], ["inline", "ui-radio", [], ["name", "sState", "current", ["subexpr", "@mut", [["get", "searchedState", ["loc", [null, [112, 20], [112, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Open", "value", "Open", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "searchedState", ["loc", [null, [116, 34], [116, 47]]], 0, 0, 0, 0]], [], ["loc", [null, [116, 29], [116, 48]]], 0, 0]], [], ["loc", [null, [116, 21], [116, 49]]], 0, 0]], ["loc", [null, [110, 10], [116, 51]]], 0, 0], ["inline", "ui-radio", [], ["name", "sState", "current", ["subexpr", "@mut", [["get", "searchedState", ["loc", [null, [120, 20], [120, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Closed", "value", "Closed", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "searchedState", ["loc", [null, [124, 34], [124, 47]]], 0, 0, 0, 0]], [], ["loc", [null, [124, 29], [124, 48]]], 0, 0]], [], ["loc", [null, [124, 21], [124, 49]]], 0, 0]], ["loc", [null, [118, 10], [124, 51]]], 0, 0], ["block", "if", [["get", "searchUsed", ["loc", [null, [131, 10], [131, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [131, 4], [136, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 148,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/adv-search/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" <div class=\"advanced-search-component\"> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "small-placeholder");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui buttons right floated download-csv-btn");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "id", "csvBtn");
        dom.setAttribute(el2, "class", "ui button csv-btn inline block");
        dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el3 = dom.createTextNode("Download CSV");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "id", "filteredCsvBtn");
        dom.setAttribute(el2, "class", "ui icon button dark-gray-bg");
        dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("i");
        dom.setAttribute(el3, "class", "filter icon");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" </div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [6]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(element5, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[1] = dom.createElementMorph(element6);
        morphs[2] = dom.createAttrMorph(element7, 'disabled');
        morphs[3] = dom.createElementMorph(element7);
        return morphs;
      },
      statements: [["block", "ui-dropdown", [], ["onShow", ["subexpr", "action", ["onDropdownBeforeShow"], [], ["loc", [null, [4, 22], [4, 53]]], 0, 0], "showOnFocus", false, "class", "ui floating dropdown icon button adv-search-dropdown advanced-search-component"], 0, null, ["loc", [null, [4, 0], [137, 16]]]], ["element", "action", ["pullEntireCSV"], [], ["loc", [null, [141, 61], [141, 87]]], 0, 0], ["attribute", "disabled", ["get", "enableFilteredCSV", ["loc", [null, [142, 41], [142, 58]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["pullFilteredCSV"], [], ["loc", [null, [142, 97], [142, 125]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/confirm-cancel/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    users: _ember['default'].inject.service(),
    // tagName:'button',
    recordType: '',
    classNames: ['ui', 'input'],
    model: null,
    //attributeBindings - the component properties which are bound to data from parent
    attributeBindings: ['isDisabled', 'deletableRecords', 'recordType', 'message', 'title'],
    openConfirmation: function openConfirmation() {
      _ember['default'].$('.confirm-cancel-modal').modal({
        blurring: true
      }).modal('setting', 'closable', false).modal('show');
    },
    actions: {
      onCancelClick: function onCancelClick() {
        var model = this.get('model');
        if (model.get('hasDirtyAttributes')) {
          this.openConfirmation();
        } else {
          this.sendAction('confirmCancel');
        }
      },

      approveCancel: function approveCancel() {
        this.sendAction('confirmCancel');
      },

      cancelConfirm: function cancelConfirm() {}

    }
  });
});
define("apem/pods/components/confirm-cancel/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/confirm-cancel/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "header");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "content");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "actions");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui positive gray right floated button");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("Ok");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui negative gray right floated button");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("Cancel");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [5]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 1]), 0, 0);
          morphs[2] = dom.createElementMorph(element1);
          morphs[3] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [4, 22], [4, 31]]], 0, 0, 0, 0], ["content", "message", ["loc", [null, [6, 7], [6, 18]]], 0, 0, 0, 0], ["element", "action", ["approveCancel"], [], ["loc", [null, [9, 55], [9, 81]]], 0, 0], ["element", "action", ["cancelConfirm"], [], ["loc", [null, [10, 55], [10, 81]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/confirm-cancel/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el2 = dom.createTextNode("Cancel");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element3, 'class');
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ui small fluid button del-btn ", ["subexpr", "if", [["get", "isDisabled", ["loc", [null, [1, 50], [1, 60]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [1, 45], [1, 73]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["onCancelClick"], [], ["loc", [null, [1, 75], [1, 101]]], 0, 0], ["block", "ui-modal", [], ["name", "confirm-cancel", "class", "modal confirm-cancel-modal"], 0, null, ["loc", [null, [3, 0], [12, 13]]]], ["content", "yield", ["loc", [null, [13, 0], [13, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/confirm-delete/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    users: _ember['default'].inject.service(),

    tagName: 'span',
    recordType: '',
    classNames: ['conf-delte'],
    //attributeBindings - the component properties which are bound to data from parent
    attributeBindings: ['isDisabled', 'deletableRecords', 'recordType', 'message', 'title'],

    actions: {

      openConfirmation: function openConfirmation() {
        _ember['default'].$('.confirm-delete-modal').modal({
          blurring: true
        }).modal('setting', 'closable', false).modal('show');
      },

      approveDelete: function approveDelete() {
        if (this.recordType === 'Opportunity') {
          this.sendAction('onConfirmDelete');
        } else {
          //Users
          var deletable = this.get('deletableRecords'),
              store = deletable[0].store;
          for (var i = 0, dLen = deletable.length; i < dLen; i++) {
            store.findRecord(this.recordType, deletable[i].id).then(function (foundRecord) {
              foundRecord.destroyRecord(); // => DELETE to /posts/2
            });
          }
        }
        console.log('deleting records ...');
      },

      cancelConfirm: function cancelConfirm() {}

    }
  });
});
define("apem/pods/components/confirm-delete/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/confirm-delete/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "header");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "content");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "actions");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui positive right floated button");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("Ok");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ui negative right floated button");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("Cancel");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [5]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 1]), 0, 0);
          morphs[2] = dom.createElementMorph(element1);
          morphs[3] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [6, 22], [6, 31]]], 0, 0, 0, 0], ["content", "message", ["loc", [null, [8, 7], [8, 18]]], 0, 0, 0, 0], ["element", "action", ["approveDelete"], [], ["loc", [null, [11, 50], [11, 76]]], 0, 0], ["element", "action", ["cancelConfirm"], [], ["loc", [null, [12, 50], [12, 76]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/confirm-delete/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "trash icon no-padding");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Delete ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element3, 'class');
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(element3, 3, 3);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ui small button del-btn ", ["subexpr", "if", [["get", "isDisabled", ["loc", [null, [1, 44], [1, 54]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [1, 39], [1, 67]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["openConfirmation"], [], ["loc", [null, [1, 69], [1, 98]]], 0, 0], ["content", "recordType", ["loc", [null, [2, 46], [2, 60]]], 0, 0, 0, 0], ["block", "ui-modal", [], ["name", "confirm-delete", "class", "modal confirm-delete-modal"], 0, null, ["loc", [null, [5, 0], [14, 13]]]], ["content", "yield", ["loc", [null, [15, 0], [15, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/custom-date-picker/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    attributeBindings: ['btnLabel', 'date', 'inputClass'],
    classNameBindings: ['class', 'disabled'],
    className: 'custom-date-picker',
    date: null,
    formattedDate: null,

    init: function init() {
      this._super.apply(this, arguments);

      if (this.get('date') !== null && this.get('date') !== '') {
        this.set('formattedDate', window.moment(this.get('date'), 'MM-DD-YYYY').format('MM-DD-YYYY'));
      }
    },

    actions: {
      clearTheDate: function clearTheDate() {
        this.$('.date-picker__button').text(null);
        this.set('date', '');
        this.sendAction('updatedDate', '');
      },
      updateDate: function updateDate(action) {

        var newDate = window.moment(action._d, 'ddd MMM DD YYYY HH:mm:ss Z').format('MM-DD-YYYY');
        var searchServiceFormat = window.moment(action._d, 'ddd MMM DD YYYY HH:mm:ss Z').format('MM-DD-YYYY');
        this.$('.date-picker__button').text(newDate);
        this.set('date', newDate);
        this.sendAction('updatedDate', searchServiceFormat);
      },
      openDatepicker: function openDatepicker() {
        this.$(".date-picker__button").click();
      }
    }
  });
});
define("apem/pods/components/custom-date-picker/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 0
            },
            "end": {
              "line": 19,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/custom-date-picker/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "close icon clear-date-btn");
          dom.setAttribute(el1, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["clearTheDate"], [], ["loc", [null, [18, 39], [18, 64]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/custom-date-picker/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" action=(action (mut date)) ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "ui active button date-icn-btn");
        dom.setAttribute(el1, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "calendar icon no-margin");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [4]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "date-picker", [], ["action", ["subexpr", "action", ["updateDate"], ["on", "setDate"], ["loc", [null, [2, 9], [2, 43]]], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "formattedDate", ["loc", [null, [3, 14], [3, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "valueFormat", "MM-DD-YYYY", "format", "MM-DD-YYYY", "utc", false, "date", ["subexpr", "@mut", [["get", "date", ["loc", [null, [7, 7], [7, 11]]], 0, 0, 0, 0]], [], [], 0, 0], "allowBlank", true, "buttonClasses", "date-picker-btn", "class", ["subexpr", "@mut", [["get", "inputClass", ["loc", [null, [10, 8], [10, 18]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [10, 20]]], 0, 0], ["element", "action", ["openDatepicker"], [], ["loc", [null, [13, 46], [13, 73]]], 0, 0], ["content", "btnLabel", ["loc", [null, [14, 2], [14, 14]]], 0, 0, 0, 0], ["block", "if", [["get", "date", ["loc", [null, [17, 6], [17, 10]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [17, 0], [19, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/error-message/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("apem/pods/components/error-message/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 6
                },
                "end": {
                  "line": 11,
                  "column": 6
                }
              },
              "moduleName": "apem/pods/components/error-message/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(": ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(element0, 0, 0);
              morphs[1] = dom.createUnsafeMorphAt(element0, 2, 2);
              return morphs;
            },
            statements: [["content", "error.title", ["loc", [null, [10, 12], [10, 27]]], 0, 0, 0, 0], ["content", "error.detail", ["loc", [null, [10, 29], [10, 47]]], 0, 0, 0, 0]],
            locals: ["error"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "apem/pods/components/error-message/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Error:</span>\n    <strong>{{serverError.message}}</strong>");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "serverError.errors", ["loc", [null, [9, 14], [9, 32]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 6], [11, 15]]]]],
          locals: ["serverError"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/error-message/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "alert alert-danger");
          dom.setAttribute(el1, "role", "alert");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("<a href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          return morphs;
        },
        statements: [["block", "each", [["get", "errors", ["loc", [null, [4, 12], [4, 18]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [4, 4], [13, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/error-message/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "errors", ["loc", [null, [1, 6], [1, 12]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [15, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/fields/fld-settings/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['draggable-item'],
    attributeBindings: ['draggable'],
    draggable: "true"
  });
});
define("apem/pods/components/fields/fld-settings/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "apem/pods/components/fields/fld-settings/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "block");
          dom.setAttribute(el1, "draggable", "true");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "option", ["loc", [null, [3, 41], [3, 51]]], 0, 0, 0, 0]],
        locals: ["option"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/fields/fld-settings/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.options", ["loc", [null, [2, 10], [2, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/fields/fld-table/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['fld-table'],
    model: null,

    actions: {
      onVisibleChange: function onVisibleChange(record) {
        //  if visible is unchecked, required is unchecked and disabled
        if (record.get('visible') === true) {
          record.set('visible', false);
          record.set('required', false);
        } else {
          record.set('visible', true);
        }
        record.save();
      },

      onRequiredChange: function onRequiredChange(record) {
        if (record.get('required') === true) {
          record.set('required', false);
        } else {
          record.set('required', true);
        }
        record.save();
      }
    }
  });
});
define("apem/pods/components/fields/fld-table/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 6
            },
            "end": {
              "line": 30,
              "column": 6
            }
          },
          "moduleName": "apem/pods/components/fields/fld-table/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "fld.label", ["loc", [null, [21, 12], [21, 25]]], 0, 0, 0, 0], ["inline", "input", [], ["type", "checkbox", "class", "", "checked", ["subexpr", "@mut", [["get", "fld.visible", ["loc", [null, [24, 53], [24, 64]]], 0, 0, 0, 0]], [], [], 0, 0], "change", ["subexpr", "action", ["onVisibleChange", ["get", "fld", ["loc", [null, [24, 98], [24, 101]]], 0, 0, 0, 0]], [], ["loc", [null, [24, 72], [24, 102]]], 0, 0]], ["loc", [null, [24, 12], [24, 104]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "class", "", "checked", ["subexpr", "mut", [["get", "fld.required", ["loc", [null, [27, 58], [27, 70]]], 0, 0, 0, 0]], [], ["loc", [null, [27, 53], [27, 71]]], 0, 0], "disabled", ["subexpr", "is-equal", [["get", "fld.visible", ["loc", [null, [27, 91], [27, 102]]], 0, 0, 0, 0], false], [], ["loc", [null, [27, 81], [27, 109]]], 0, 0], "change", ["subexpr", "action", ["onRequiredChange", ["get", "fld", ["loc", [null, [27, 144], [27, 147]]], 0, 0, 0, 0]], [], ["loc", [null, [27, 117], [27, 148]]], 0, 0]], ["loc", [null, [27, 12], [27, 150]]], 0, 0]],
        locals: ["fld"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/fields/fld-table/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui table ui-table table-head");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Field Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Visible");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Required");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "table-wrap");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        dom.setAttribute(el2, "class", "ui table ui-table table-body");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tbody");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [18, 14], [18, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [18, 6], [30, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/hover-edit-field/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['hover-edit-field'],
    classNameBindings: ['isInvalid'],
    enabled: true,
    elementId: null,

    isValidatable: _ember['default'].computed('', function () {
      return typeof this.get('value') === 'undefined' && this.get('model');
    }),

    inputId: _ember['default'].computed('elementId', function () {
      return this.get('elementId') + '-tag-input';
    }),

    calcLinesOfText: function calcLinesOfText() {
      var $el = _ember['default'].$(this.get('element')).find('#' + this.get('inputId'));

      var height = $el.height();
      var lineHeight = $el.css('line-height');
      lineHeight = parseFloat(lineHeight);
      var rows = height / lineHeight;
      this.set('linesOfText', Math.round(rows));
    },

    didInsertElement: function didInsertElement() {
      this.set('elementId', _ember['default'].$(this.get('element')).attr('id'));
    },

    useTextarea: _ember['default'].computed('linesOfText', function () {
      return this.get('linesOfText') > 1;
    }),

    isInvalid: _ember['default'].computed('fieldValue', function () {
      return this.get('model.validations.attrs.' + this.get('property') + '.isInvalid');
    }),

    fieldValue: _ember['default'].computed('value', 'model', 'property', {
      get: function get() {
        if (this.get('isValidatable')) {
          return this.get('model').get(this.get('property'));
        } else {
          return this.get('value');
        }
      },
      set: function set(key, value) {
        if (this.get('isValidatable')) {
          return this.get('model').set(this.get('property'), value);
        } else {
          return this.set('value', value);
        }
      }
    }),

    actions: {
      textClick: function textClick() {
        this.calcLinesOfText();
      },

      fieldFocusedIn: function fieldFocusedIn() {
        this.calcLinesOfText();
      }
    }
  });
});
define("apem/pods/components/hover-edit-field/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/hover-edit-field/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "fieldValue", ["loc", [null, [2, 21], [2, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "linesOfText", ["loc", [null, [2, 37], [2, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "inputId", ["loc", [null, [2, 52], [2, 59]]], 0, 0, 0, 0]], [], [], 0, 0], "classNames", "form-control", "focusIn", ["subexpr", "action", ["fieldFocusedIn"], [], ["loc", [null, [2, 94], [2, 119]]], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [2, 130], [2, 139]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 4], [2, 141]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/hover-edit-field/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "fieldValue", ["loc", [null, [4, 18], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "inputId", ["loc", [null, [4, 32], [4, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "classNames", "form-control", "type", ["subexpr", "@mut", [["get", "type", ["loc", [null, [4, 71], [4, 75]]], 0, 0, 0, 0]], [], [], 0, 0], "focusIn", ["subexpr", "action", ["fieldFocusedIn"], [], ["loc", [null, [4, 84], [4, 109]]], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 120], [4, 129]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 4], [4, 131]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/hover-edit-field/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "error");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "v-get", [["get", "model", ["loc", [null, [9, 12], [9, 17]]], 0, 0, 0, 0], ["get", "property", ["loc", [null, [9, 18], [9, 26]]], 0, 0, 0, 0], "message"], [], ["loc", [null, [9, 4], [9, 38]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/hover-edit-field/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "useTextarea", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [5, 7]]]], ["block", "if", [["subexpr", "v-get", [["get", "model", ["loc", [null, [7, 13], [7, 18]]], 0, 0, 0, 0], ["get", "property", ["loc", [null, [7, 19], [7, 27]]], 0, 0, 0, 0], "isInvalid"], [], ["loc", [null, [7, 6], [7, 40]]], 0, 0]], [], 2, null, ["loc", [null, [7, 0], [11, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("apem/pods/components/infinity-loader/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "apem/pods/components/infinity-loader/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Loading Records...\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 8,
                "column": 4
              }
            },
            "moduleName": "apem/pods/components/infinity-loader/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      No more records found.\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 4
              }
            },
            "moduleName": "apem/pods/components/infinity-loader/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      Loading Records...\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 11,
              "column": 2
            }
          },
          "moduleName": "apem/pods/components/infinity-loader/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "infinityModel.reachedInfinity", ["loc", [null, [6, 10], [6, 39]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [6, 4], [10, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/infinity-loader/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "text-center");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'style');
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["attribute", "style", ["subexpr", "style-attr", ["padding", "1rem"], [], ["loc", [null, [null, null], [1, 60]]], 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "filterLoading", ["loc", [null, [3, 8], [3, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 2], [11, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('apem/pods/components/manage-password/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    store: _ember['default'].inject.service(),
    identity: _ember['default'].inject.service(),
    sessionUser: null,
    instanceModal: null,

    //Andrew, comment out the method didInsertElement if you are having troubles
    //with validation on this form while I am away.
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);

      //Custom validation rule is used because Semantic's match rule logic does not work.
      //reference of the issue on github: Validate Dropdown Values (using match[Field]) #2214
      var myModal = _ember['default'].$('#' + this.elementId + ' .manage-password-pop'); //.elementId;
      if (this.instanceModal === null) {
        this.set('instanceModal', myModal);
      }
      _ember['default'].$('#' + this.elementId + ' .manage-password-pop .managePasswords').form.settings.rules.matchFields = function (value, fieldIdentifier) {

        var form = this;
        var matchingValue;

        if (_ember['default'].$('[name="' + fieldIdentifier + '"]').length > 0) {
          matchingValue = form.context[0].value;
        }
        return matchingValue !== undefined ? value.toString() === matchingValue.toString() : false;
      };

      //add validation to form
      _ember['default'].$('#' + this.elementId + ' .manage-password-pop .managePasswords').form({
        inline: true,
        // on:'blur',
        fields: {
          mppassword: {
            identifier: 'mppassword',
            rules: [{
              type: 'empty'
            }]
          },
          mpPasswordVerify: {
            identifier: 'mpPasswordVerify',
            rules: [{
              type: 'matchFields[mppassword]',
              prompt: '{name} is set to "{value}" that is totally wrong. It should be {ruleValue}'
              // prompt : 'Passwords do not match."{value}"'
            }]
          }
        }
      });
    },

    actions: {

      openModal: function openModal() {
        var _this = this;

        this.set('serverErrors', []);

        var thisUserId = this.get('identity').get('profile').get('id');

        this.get('store').findRecord('user', thisUserId).then(function (data) {
          _this.set('sessionUser', data);
        }, function (error) {
          console.log(error);
        });

        this.instanceModal.modal({
          blurring: true
        }).modal('setting', 'closable', false).modal('show');
      },

      submitNewPassword: function submitNewPassword() {
        var _this2 = this;

        var hasErrors = _ember['default'].$('.error');

        if (hasErrors.length === 0) {
          (function () {
            var user = _this2.get('sessionUser');
            _this2.set('serverErrors', []);
            var errs = _this2.get('serverErrors');
            if (user.get('hasDirtyAttributes')) {
              (function () {
                var closeModal = _this2.closeModal;
                user.save().then(function () {
                  closeModal();
                }, function (error) {
                  errs.addObject(error);
                });
              })();
            }
          })();
        }
      },

      cancelModal: function cancelModal() {
        this.closeModal();
      }
    },

    closeModal: function closeModal() {
      // this.set('sessionUser', null);
      //clear the form
      _ember['default'].$('.managePasswords').form('clear');

      _ember['default'].$('.manage-password-pop').modal('hide');
    }

  });
});
define("apem/pods/components/manage-password/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 32,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/manage-password/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "header");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "user icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("Manage Password ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "content");
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          dom.setAttribute(el2, "class", "ui form segment managePasswords");
          dom.setAttribute(el2, "style", "padding-bottom:60px;");
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Password");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Confirm Password");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui submit button right floated green");
          dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "check icon");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Save");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui right floated button");
          dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "ban icon");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Cancel");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "validation-errors");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3, 1]);
          var element1 = dom.childAt(element0, [5]);
          var element2 = dom.childAt(element0, [7]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 2, 2);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
          morphs[3] = dom.createElementMorph(element1);
          morphs[4] = dom.createElementMorph(element2);
          morphs[5] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "sessionUser.username", ["loc", [null, [6, 63], [6, 87]]], 0, 0, 0, 0], ["inline", "input", [], ["name", "mppassword", "value", ["subexpr", "@mut", [["get", "sessionUser.password", ["loc", [null, [13, 40], [13, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "password", "autofocus", "false"], ["loc", [null, [13, 8], [13, 96]]], 0, 0], ["inline", "input", [], ["name", "mpPasswordVerify", "value", ["subexpr", "@mut", [["get", "sessionUser.passwordVerify", ["loc", [null, [18, 46], [18, 72]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "password", "autofocus", "false"], ["loc", [null, [18, 8], [18, 108]]], 0, 0], ["element", "action", ["submitNewPassword"], [], ["loc", [null, [21, 56], [21, 86]]], 0, 0], ["element", "action", ["cancelModal"], [], ["loc", [null, [22, 43], [22, 67]]], 0, 0], ["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [29, 29], [29, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [29, 6], [29, 43]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/manage-password/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "item seamless-button");
        dom.setAttribute(el1, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el2 = dom.createTextNode("\n  Manage Password\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element3);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["openModal"], [], ["loc", [null, [1, 37], [1, 59]]], 0, 0], ["block", "ui-modal", [], ["class", "ui modal manage-password-pop"], 0, null, ["loc", [null, [5, 0], [32, 13]]]], ["content", "yield", ["loc", [null, [33, 0], [33, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("apem/pods/components/new-user/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    store: _ember["default"].inject.service(),
    users: _ember["default"].inject.service(),
    userTypes: ["Admin", "User"],
    model: null,

    didRender: function didRender() {
      this._super.apply(this, arguments);
      //add validation to form
      _ember["default"].$('.new-user-form').form({
        inline: true,
        fields: {
          username: {
            identifier: 'username',
            rules: [{
              type: 'empty',
              prompt: 'Please enter a username'
            }]
          },
          password: {
            identifier: 'password',
            rules: [{
              type: 'empty'
            }]
          },
          passwordVerify: {
            identifier: 'passwordVerify',
            rules: [{
              type: 'match[password]',
              prompt: 'Passwords do not match.'
            }]
          },
          type: {
            identifier: 'type',
            rules: [{
              type: 'empty',
              prompt: 'Please select a dropdown value'
            }]
          }
        }
      });

      //ensure prevent default behavior...because semantic and ember work well
      // together on occasion.. oh and we have a separate submit logic..
      _ember["default"].$('.new-user-form').submit(function () /*e*/{
        //e.preventDefault(); usually use this, but below works best here.
        return false;
      });
    },

    actions: {

      openModal: function openModal() {
        this.set('serverErrors', []);

        var store = this.get('store'),
            newUser = store.createRecord('user');
        this.set('model', newUser);

        _ember["default"].$('.new-user-pop').modal({
          blurring: true
        }).modal('setting', 'closable', false).modal('show');
      },

      createUser: function createUser() {
        var _this = this;

        var hasErrors = _ember["default"].$('.error');

        if (hasErrors.length === 0) {
          var promise, me, closeModal;

          (function () {
            var user = _this.get('model');
            _this.set('serverErrors', []);
            var errs = _this.get('serverErrors');

            if (user.get('hasDirtyAttributes')) {
              console.log('Created User...');
              promise = user.save();
              me = _this;
              closeModal = _this.closeModal;

              promise.then(function () {
                me.get('onCreate')();
                closeModal();
              }, function (error) {
                errs.addObject(error);
              });
            }
          })();
        }
      },

      cancelModal: function cancelModal() {
        this.closeModal();
      }

    },

    closeModal: function closeModal() {
      //clear the form
      _ember["default"].$('.new-user-form').form('clear');

      _ember["default"].$('.new-user-pop').modal('hide');
    }
  });
});
define("apem/pods/components/new-user/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 31,
                  "column": 12
                },
                "end": {
                  "line": 35,
                  "column": 12
                }
              },
              "moduleName": "apem/pods/components/new-user/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "item");
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n              ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'data-value');
              morphs[1] = dom.createMorphAt(element0, 1, 1);
              return morphs;
            },
            statements: [["attribute", "data-value", ["get", "type", ["loc", [null, [32, 45], [32, 49]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "type", ["loc", [null, [33, 16], [33, 24]]], 0, 0, 0, 0]],
            locals: ["type"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 8
              },
              "end": {
                "line": 37,
                "column": 8
              }
            },
            "moduleName": "apem/pods/components/new-user/template.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("input");
            dom.setAttribute(el1, "type", "hidden");
            dom.setAttribute(el1, "name", "type");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "default text");
            var el2 = dom.createTextNode("Select User Type");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "dropdown icon");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "menu");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [7]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "userTypes", ["loc", [null, [31, 20], [31, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [31, 12], [35, 21]]]]],
          locals: ["execute", "mapper"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 52,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/new-user/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "header");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "user icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("New User");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "content");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          dom.setAttribute(el2, "class", "ui form segment new-user-form");
          dom.setAttribute(el2, "style", "padding-bottom:60px;");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("User Name");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Password");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("Confirm Password");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "field");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          var el5 = dom.createTextNode("User Type:");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui submit button right floated green");
          dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "check icon");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Save");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "ui right floated button");
          dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "ban icon");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Cancel");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" SERVER ERRORS ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "validation-errors");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3, 1]);
          var element2 = dom.childAt(element1, [9]);
          var element3 = dom.childAt(element1, [11]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]), 3, 3);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [7]), 3, 3);
          morphs[4] = dom.createElementMorph(element2);
          morphs[5] = dom.createElementMorph(element3);
          morphs[6] = dom.createMorphAt(dom.childAt(fragment, [7]), 1, 1);
          return morphs;
        },
        statements: [["inline", "input", [], ["name", "username", "value", ["subexpr", "@mut", [["get", "model.username", ["loc", [null, [11, 38], [11, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control", "type", "text"], ["loc", [null, [11, 8], [11, 87]]], 0, 0], ["inline", "input", [], ["name", "password", "value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [16, 38], [16, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "password"], ["loc", [null, [16, 8], [16, 71]]], 0, 0], ["inline", "input", [], ["name", "passwordVerify", "value", ["subexpr", "@mut", [["get", "model.passwordVerify", ["loc", [null, [21, 44], [21, 64]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "password"], ["loc", [null, [21, 8], [21, 82]]], 0, 0], ["block", "ui-dropdown", [], ["class", "ui dropdown selection", "allowAdditions", false, "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.type", ["loc", [null, [26, 96], [26, 106]]], 0, 0, 0, 0]], [], ["loc", [null, [26, 91], [26, 107]]], 0, 0]], [], ["loc", [null, [26, 83], [26, 108]]], 0, 0]], 0, null, ["loc", [null, [26, 8], [37, 24]]]], ["element", "action", ["createUser"], [], ["loc", [null, [40, 56], [40, 79]]], 0, 0], ["element", "action", ["cancelModal"], [], ["loc", [null, [41, 43], [41, 67]]], 0, 0], ["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [48, 29], [48, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [48, 6], [48, 43]]], 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 54,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/new-user/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "ui right floated small positive button sm-margin-btn");
        dom.setAttribute(el1, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "plus icon");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("New User\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element4);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["openModal"], [], ["loc", [null, [1, 69], [1, 91]]], 0, 0], ["block", "ui-modal", [], ["name", "user-invite-form", "class", "modal new-user-pop"], 0, null, ["loc", [null, [5, 0], [52, 13]]]], ["content", "yield", ["loc", [null, [53, 0], [53, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/opportunities/opt-form/component', ['exports', 'ember', 'ember-group-by'], function (exports, _ember, _emberGroupBy) {
  exports['default'] = _ember['default'].Component.extend({
    identity: _ember['default'].inject.service(),
    store: _ember['default'].inject.service(),
    tagName: 'form',
    //used addon ember-group-by to group our fields array by model attr group.
    fieldsByGroup: (0, _emberGroupBy['default'])('fields', 'group'),
    classNames: ['ui', 'form', 'opportunity-form', 'opp-table'],
    model: null,
    fields: null,
    users: null,
    quoteEvent: null,
    sampleEvent: null,
    approvalEvent: null,
    productionEvent: null,
    nonStageEvents: null,
    optStatuses: ['Backburner', 'Won', 'Lost', ''],
    optStates: ['Open', 'Closed'],
    confirmShown: false,
    //possible opportunity stages - an array used to controll and properly render the stage steps in the form
    stages: [{ 'label': 'quote', 'id': 1 }, { 'label': 'sample', 'id': 2 }, { 'label': 'approval', 'id': 3 }, { 'label': 'production', 'id': 4 }],

    // Init function
    didReceiveAttrs: function didReceiveAttrs() {
      var _this = this;

      this._super.apply(this, arguments);

      //null events which are left from previous record.
      this.set('quoteEvent', null);
      this.set('sampleEvent', null);
      this.set('approvalEvent', null);
      this.set('productionEvent', null);

      var opp = this.get('model');

      //let theEvents = opp.get('events.content');
      var otherEvents = _ember['default'].A([]);

      opp.get('events').then(function (events) {
        events.forEach(function (event) {
          var type = event.get('type');
          console.log(event);
          if (type === 'quote') {
            _this.set('quoteEvent', event);
          } else if (type === 'sample') {
            _this.set('sampleEvent', event);
          } else if (type === 'approval') {
            _this.set('approvalEvent', event);
          } else if (type === 'production') {
            _this.set('productionEvent', event);
          } else {
            //this.set('quoteEvent', event);//this is for tests in case there is no stage event
            otherEvents.pushObject(event);
          }
        });
      });

      this.set('nonStageEvents', otherEvents);
    },

    // OBSERVERS ---------------------
    //observing the table's hasDirtyAttributes to manage the delete button's disabled property
    hasNoChanges: (function () {
      var model = this.get('model');
      if (model.get('hasDirtyAttributes') || model.get('draft')) {
        return false;
      } else {
        return true;
      }
    }).property('model.hasDirtyAttributes'),

    // hasEvents: Ember.computed('model.events', 'model.events.[]', function () {
    //   console.log('hasEvents RAN!!!!');
    //   if (this.get('model.events').length > 0) {
    //     return true;
    //   }
    //   return false;
    // }).property('model.events'),

    /* This property is used by the template to disable the opportunity status Won
    button unless the opportunity has a "sales order number" and a "company name" */
    isWinDisabled: (function () {
      var m = this.get('model');
      this.manageWonSettings(m);
      return m.get('company') !== null && m.get('company') !== '' && m.get('prodSalesOrderNum') !== null && m.get('prodSalesOrderNum') !== '' ? false : true;
    }).property('model.company', 'model.prodSalesOrderNum'),

    //HOOKS ----
    didRender: function didRender() {
      this._super.apply(this, arguments);
      var myFields = this.get('fields'),
          requiredFormValidations = {},
          fieldsArray = myFields.get('content'),
          fLen = 0;

      try {
        fLen = fieldsArray.get('length');
      } catch (e) {}

      if (fLen > 0) {
        fieldsArray.forEach(function (item /*, index, enumerable*/) {
          if (item.get('required') === true) {
            var fieldName = item.get('name');
            // requiredFormValidations[fieldName] = 'empty';
            //r: for more detailed validation this structure should be used:
            requiredFormValidations[fieldName] = {
              fieldName: fieldName,
              rules: [{
                type: 'empty',
                prompt: '<span class="capitalize">' + fieldName + '</span> is required.'
              }]
            };
          }
        });
        //
        //add validation to form
        _ember['default'].$('.opportunity-form').form({
          inline: false,
          //on:'blur',
          fields: requiredFormValidations
        });

        //ensure prevent default behavior...because semantic and ember work well
        // together on occasion.. oh and we have a separate submit logic..
        _ember['default'].$('.opportunity-form').submit(function () /*e*/{
          //e.preventDefault(); usually use this, but below works best here.
          return false;
        });
      }
    },

    //METHODS

    /* This property is used by the template to disable the opportunity delete
    button unless the user is an Admin */
    disableDelete: (function () {
      console.log(this.get('identity').get('profile').get('type'));

      return this.get('identity').get('profile').type === 'Admin' ? false : true;
    }).property('identity'),

    noValidName: (function () {
      var m = this.get('model');
      return m.get('company') !== '' && m.get('company') !== null && m.get('company') !== undefined ? false : true;
    }).property('model.company'),

    manageWonSettings: function manageWonSettings(model) {
      if (!(model.get('company') !== null && model.get('company') !== '' && model.get('prodSalesOrderNum') !== null && model.get('prodSalesOrderNum') !== '')) {
        model.set('status', '');
        //  alert('Won can be assigned only if there are a Company and a Product Sales Number values.');
      }
    },

    /** This method helps us pull the model attributes because each-in only works with JSON structured objects*/
    // attributes: Ember.computed(function() {
    //   let attrNames = [];
    //   let opt = this.get('model');
    //
    //   // Get attributes
    //   opt.eachAttribute((name) => attrNames.push(name));
    //
    //   let attrs = Ember.getProperties(opt, attrNames);
    //   return attrs;
    // }),

    actions: {

      onCancelOptClick: function onCancelOptClick() {
        this.get('model').rollbackAttributes();
        this.sendAction('cancelEdit');
        // console.log('cancel opt method reached!');
      },
      onStageChange: function onStageChange(newStage) {
        this.get('model').set('stage', newStage);
      },

      onStatusChange: function onStatusChange(button) {
        var allStatusButtons = this.get('optStatuses');

        for (var statBtn in allStatusButtons) {
          if (button.value === allStatusButtons[statBtn]) {
            _ember['default'].$('#' + button.id).addClass('active');
          } else {
            _ember['default'].$('#' + button.id).removeClass('active');
          }
        }
        var mymodel = this.get('model');
        mymodel.set('status', button.value);
      },

      onStateChange: function onStateChange(button) {
        var allStatesButtons = this.get('optStates');

        for (var statBtn in allStatesButtons) {
          if (button.value === allStatesButtons[statBtn]) {
            _ember['default'].$('#' + button.id).addClass('active');
          } else {
            _ember['default'].$('#' + button.id).removeClass('active');
          }
        }
        var mymodel = this.get('model');
        mymodel.set('state', button.value);
      },

      /* Copies the current record to create a new one */
      cloneRecord: function cloneRecord() {
        var oldModel = this.get('model');
        this.sendAction('onCopy', oldModel);
      },

      onDropdownSelect: function onDropdownSelect(fieldName, selectedValue) {
        var opt = this.get('model');
        opt.set(fieldName, selectedValue);
      },

      deleteOpt: function deleteOpt() {
        var opt = this.get('model');
        this.sendAction('onOptDelete', opt);
        // console.log('delete opt method reached!');
      },

      saveDraft: function saveDraft() {
        var opt = this.get('model');
        //failsafe
        if (opt.get('company') === '' || opt.get('company') === null || opt.get('company') === undefined) {
          return;
        }
        opt.set('draft', true);
        opt.set('newRecord', false);
        // this.doSave();

        if (opt.get('hasDirtyAttributes')) {
          /*the record is no longer new at this point and copying and closing the
          detail view are allowed */
          opt.set('newRecord', false);

          /* If the userId is an object, that means someone selected
           * a new User and it's been hacked/copied over to the userId
           * temporarily so we need to process this */
          if (typeof opt.get('userId') === "object") {
            opt.set('user', opt.get('userId'));
            opt.set('userId', opt.get('user.id'));
          }
          //let events = this.get('events');

          this.sendAction('onOptSave', opt);
        }
      },

      updateRecord: function updateRecord() {
        this.doSave();
      }
    },

    doSave: function doSave() {
      _ember['default'].$('.opportunity-form').form('validate');
      var opt = this.get('model');
      opt.set('draft', false);
      var hasErrors = _ember['default'].$('.field.error');
      //form saves if there are no missing required fields, or if it's a draft.
      if (hasErrors.length === 0) {
        // Update the opportunity
        this.set('serverErrors', []);
        // let errs = this.get('serverErrors');
        // let myRouting = this.get('routing');
        if (opt.get('hasDirtyAttributes')) {
          /*the record is no longer new at this point and copying and closing the
          detail view are allowed */
          opt.set('newRecord', false);

          /* If the userId is an object, that means someone selected
           * a new User and it's been hacked/copied over to the userId
           * temporarily so we need to process this */
          if (typeof opt.get('userId') === "object") {
            opt.set('user', opt.get('userId'));
            opt.set('userId', opt.get('user.id'));
          }
          //let events = this.get('events');

          this.sendAction('onOptSave', opt);
        }
      }
    }
  });
});
define("apem/pods/components/opportunities/opt-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 59
            },
            "end": {
              "line": 5,
              "column": 84
            }
          },
          "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("-Draft");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 12,
              "column": 2
            }
          },
          "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui modal");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "confirm-submit");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("OK");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "confirm-cancel");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("Cancel");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element11 = dom.childAt(fragment, [1]);
          var element12 = dom.childAt(element11, [1]);
          var element13 = dom.childAt(element11, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element12);
          morphs[1] = dom.createElementMorph(element13);
          return morphs;
        },
        statements: [["element", "action", ["submitConfirm"], [], ["loc", [null, [9, 37], [9, 63]]], 0, 0], ["element", "action", ["cancelConfirm"], [], ["loc", [null, [10, 37], [10, 63]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 4
            },
            "end": {
              "line": 23,
              "column": 4
            }
          },
          "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" {{input type=\"button\" value=\"Delete\" class=\"ui button right floated\" click=(action \"onDeleteOptClick\")}} ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "confirm-delete", [], ["isDisabled", ["subexpr", "not-equal", [["get", "identity.profile.type", ["loc", [null, [18, 30], [18, 51]]], 0, 0, 0, 0], "Admin"], [], ["loc", [null, [18, 19], [18, 60]]], 0, 0], "title", "Confirm Delete", "recordType", "Opportunity", "message", "The selected opportunity will be deleted. Continue?", "onConfirmDelete", "deleteOpt"], ["loc", [null, [17, 6], [22, 37]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 67,
                    "column": 10
                  },
                  "end": {
                    "line": 71,
                    "column": 10
                  }
                },
                "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "item");
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n            ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element6 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createAttrMorph(element6, 'data-value');
                morphs[1] = dom.createMorphAt(element6, 1, 1);
                return morphs;
              },
              statements: [["attribute", "data-value", ["concat", [["subexpr", "map-value", [["get", "mapper", ["loc", [null, [68, 54], [68, 60]]], 0, 0, 0, 0], ["get", "user", ["loc", [null, [68, 61], [68, 65]]], 0, 0, 0, 0]], [], ["loc", [null, [68, 42], [68, 67]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "user.username", ["loc", [null, [69, 14], [69, 31]]], 0, 0, 0, 0]],
              locals: ["user"],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 60,
                  "column": 6
                },
                "end": {
                  "line": 73,
                  "column": 6
                }
              },
              "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "dropdown icon");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "default text");
              var el2 = dom.createTextNode("Select Value");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "menu");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
              return morphs;
            },
            statements: [["block", "each", [["get", "users", ["loc", [null, [67, 18], [67, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [67, 10], [71, 19]]]]],
            locals: ["execute", "mapper"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 56,
                "column": 2
              },
              "end": {
                "line": 76,
                "column": 2
              }
            },
            "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "field gap1 ");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            var el3 = dom.createTextNode("Owner");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("input");
            dom.setAttribute(el2, "type", "hidden");
            dom.setAttribute(el2, "id", "userId");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element7 = dom.childAt(fragment, [1]);
            var element8 = dom.childAt(element7, [5]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element7, 3, 3);
            morphs[1] = dom.createAttrMorph(element8, 'value');
            return morphs;
          },
          statements: [["block", "ui-dropdown", [], ["class", "fluid selection", "selected", ["subexpr", "@mut", [["get", "model.user", ["loc", [null, [62, 17], [62, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.userId", ["loc", [null, [63, 30], [63, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [63, 25], [63, 43]]], 0, 0]], [], ["loc", [null, [63, 17], [63, 44]]], 0, 0]], 0, null, ["loc", [null, [60, 6], [73, 22]]]], ["attribute", "value", ["get", "model.userId", ["loc", [null, [74, 47], [74, 59]]], 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 100,
                  "column": 8
                },
                "end": {
                  "line": 109,
                  "column": 8
                }
              },
              "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "ui-radio", [], ["name", "status", "current", ["subexpr", "@mut", [["get", "model.status", ["loc", [null, [103, 18], [103, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "isWinDisabled", ["loc", [null, [104, 19], [104, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button no-border-radius button", "label", "Won", "value", "Won", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.status", ["loc", [null, [108, 32], [108, 44]]], 0, 0, 0, 0]], [], ["loc", [null, [108, 27], [108, 45]]], 0, 0]], [], ["loc", [null, [108, 19], [108, 46]]], 0, 0]], ["loc", [null, [102, 10], [108, 48]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 99,
                "column": 6
              },
              "end": {
                "line": 110,
                "column": 6
              }
            },
            "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "ui-popup", [], ["content", "Won can be assigned only if there are a Company and a Product Sales Order Number values."], 0, null, ["loc", [null, [100, 8], [109, 21]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 110,
                "column": 6
              },
              "end": {
                "line": 118,
                "column": 6
              }
            },
            "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "ui-radio", [], ["name", "status", "current", ["subexpr", "@mut", [["get", "model.status", ["loc", [null, [112, 16], [112, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "isWinDisabled", ["loc", [null, [113, 17], [113, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Won", "value", "Won", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.status", ["loc", [null, [117, 30], [117, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [117, 25], [117, 43]]], 0, 0]], [], ["loc", [null, [117, 17], [117, 44]]], 0, 0]], ["loc", [null, [111, 8], [117, 46]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 166,
                      "column": 36
                    },
                    "end": {
                      "line": 166,
                      "column": 59
                    }
                  },
                  "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("*");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes() {
                  return [];
                },
                statements: [],
                locals: [],
                templates: []
              };
            })();
            var child1 = (function () {
              var child0 = (function () {
                var child0 = (function () {
                  return {
                    meta: {
                      "revision": "Ember@2.7.0",
                      "loc": {
                        "source": null,
                        "start": {
                          "line": 179,
                          "column": 20
                        },
                        "end": {
                          "line": 183,
                          "column": 20
                        }
                      },
                      "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                    },
                    isEmpty: false,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                      ");
                      dom.appendChild(el0, el1);
                      var el1 = dom.createElement("div");
                      dom.setAttribute(el1, "class", "item");
                      var el2 = dom.createTextNode("\n                        ");
                      dom.appendChild(el1, el2);
                      var el2 = dom.createComment("");
                      dom.appendChild(el1, el2);
                      var el2 = dom.createTextNode("\n                      ");
                      dom.appendChild(el1, el2);
                      dom.appendChild(el0, el1);
                      var el1 = dom.createTextNode("\n");
                      dom.appendChild(el0, el1);
                      return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                      var element2 = dom.childAt(fragment, [1]);
                      var morphs = new Array(2);
                      morphs[0] = dom.createAttrMorph(element2, 'data-value');
                      morphs[1] = dom.createMorphAt(element2, 1, 1);
                      return morphs;
                    },
                    statements: [["attribute", "data-value", ["concat", [["get", "item.0", ["loc", [null, [180, 54], [180, 62]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "item.0", ["loc", [null, [181, 24], [181, 36]]], 0, 0, 0, 0]],
                    locals: ["item"],
                    templates: []
                  };
                })();
                return {
                  meta: {
                    "revision": "Ember@2.7.0",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 170,
                        "column": 16
                      },
                      "end": {
                        "line": 185,
                        "column": 16
                      }
                    },
                    "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                    ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("input");
                    dom.setAttribute(el1, "type", "hidden");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n                  ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("i");
                    dom.setAttribute(el1, "class", "dropdown icon");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n                  ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("div");
                    dom.setAttribute(el1, "class", "default text");
                    var el2 = dom.createTextNode("Select Value");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n                  ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("div");
                    dom.setAttribute(el1, "class", "menu");
                    var el2 = dom.createTextNode("\n");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("                  ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var element3 = dom.childAt(fragment, [1]);
                    var morphs = new Array(3);
                    morphs[0] = dom.createAttrMorph(element3, 'name');
                    morphs[1] = dom.createElementMorph(element3);
                    morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7]), 1, 1);
                    return morphs;
                  },
                  statements: [["attribute", "name", ["get", "field.name", ["loc", [null, [175, 91], [175, 101]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "bind-attr", [], ["value", ["subexpr", "get", [["get", "model", ["loc", [null, [175, 64], [175, 69]]], 0, 0, 0, 0], ["get", "field.name", ["loc", [null, [175, 70], [175, 80]]], 0, 0, 0, 0]], [], ["loc", [null, [175, 59], [175, 81]]], 0, 0]], ["loc", [null, [175, 41], [175, 83]]], 0, 0], ["block", "each", [["get", "field.options", ["loc", [null, [179, 28], [179, 41]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [179, 20], [183, 29]]]]],
                  locals: [],
                  templates: [child0]
                };
              })();
              return {
                meta: {
                  "revision": "Ember@2.7.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 168,
                      "column": 14
                    },
                    "end": {
                      "line": 186,
                      "column": 14
                    }
                  },
                  "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment(" Drop Down Fields ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [["block", "ui-dropdown", [], ["name", ["subexpr", "@mut", [["get", "field.name", ["loc", [null, [171, 25], [171, 35]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "ui dropdown fluid selection", "selected", ["subexpr", "get", [["get", "model", ["loc", [null, [173, 34], [173, 39]]], 0, 0, 0, 0], ["get", "field.name", ["loc", [null, [173, 40], [173, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [173, 29], [173, 51]]], 0, 0], "onChange", ["subexpr", "action", ["onDropdownSelect", ["get", "field.name", ["loc", [null, [174, 56], [174, 66]]], 0, 0, 0, 0]], [], ["loc", [null, [174, 29], [174, 67]]], 0, 0]], 0, null, ["loc", [null, [170, 16], [185, 32]]]]],
                locals: [],
                templates: [child0]
              };
            })();
            var child2 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 188,
                      "column": 14
                    },
                    "end": {
                      "line": 208,
                      "column": 14
                    }
                  },
                  "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment(" Radio Options Field ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1, "class", "field gap1");
                  var el2 = dom.createTextNode("\n                  ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("div");
                  dom.setAttribute(el2, "class", "row ui buttons");
                  var el3 = dom.createTextNode("\n                    ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n                    ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n                  ");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element1 = dom.childAt(fragment, [3, 1]);
                  var morphs = new Array(2);
                  morphs[0] = dom.createMorphAt(element1, 1, 1);
                  morphs[1] = dom.createMorphAt(element1, 3, 3);
                  return morphs;
                },
                statements: [["inline", "ui-radio", [], ["name", ["subexpr", "@mut", [["get", "field.name", ["loc", [null, [193, 27], [193, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "current", ["subexpr", "@mut", [["get", "model.catalogProduct", ["loc", [null, [194, 30], [194, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Yes", "value", "true", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.catalogProduct", ["loc", [null, [198, 44], [198, 64]]], 0, 0, 0, 0]], [], ["loc", [null, [198, 39], [198, 65]]], 0, 0]], [], ["loc", [null, [198, 31], [198, 66]]], 0, 0]], ["loc", [null, [192, 20], [198, 68]]], 0, 0], ["inline", "ui-radio", [], ["name", ["subexpr", "@mut", [["get", "field.name", ["loc", [null, [200, 27], [200, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "current", ["subexpr", "@mut", [["get", "model.catalogProduct", ["loc", [null, [201, 30], [201, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "No", "value", "false", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.catalogProduct", ["loc", [null, [205, 44], [205, 64]]], 0, 0, 0, 0]], [], ["loc", [null, [205, 39], [205, 65]]], 0, 0]], [], ["loc", [null, [205, 31], [205, 66]]], 0, 0]], ["loc", [null, [199, 20], [205, 68]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child3 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 210,
                      "column": 14
                    },
                    "end": {
                      "line": 213,
                      "column": 14
                    }
                  },
                  "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment(" Standard Text Field ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                  return morphs;
                },
                statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "field.name", ["loc", [null, [212, 29], [212, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "mut", [["subexpr", "get", [["get", "model", ["loc", [null, [212, 56], [212, 61]]], 0, 0, 0, 0], ["get", "field.name", ["loc", [null, [212, 62], [212, 72]]], 0, 0, 0, 0]], [], ["loc", [null, [212, 51], [212, 73]]], 0, 0]], [], ["loc", [null, [212, 46], [212, 74]]], 0, 0], "type", "text"], ["loc", [null, [212, 16], [212, 88]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child4 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 215,
                      "column": 14
                    },
                    "end": {
                      "line": 223,
                      "column": 14
                    }
                  },
                  "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment(" Date Picker Field ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                  return morphs;
                },
                statements: [["inline", "custom-date-picker", [], ["inputClass", "cust-date-field", "btnLabel", "", "disabled", false, "date", ["subexpr", "mut", [["subexpr", "get", [["get", "model", ["loc", [null, [221, 33], [221, 38]]], 0, 0, 0, 0], ["get", "field.name", ["loc", [null, [221, 39], [221, 49]]], 0, 0, 0, 0]], [], ["loc", [null, [221, 28], [221, 50]]], 0, 0]], [], ["loc", [null, [221, 23], [221, 51]]], 0, 0], "class", "adv-search-field"], ["loc", [null, [217, 16], [222, 44]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child5 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 225,
                      "column": 14
                    },
                    "end": {
                      "line": 228,
                      "column": 14
                    }
                  },
                  "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment(" TextArea Field ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                  return morphs;
                },
                statements: [["inline", "textarea", [], ["value", ["subexpr", "mut", [["subexpr", "get", [["get", "model", ["loc", [null, [227, 43], [227, 48]]], 0, 0, 0, 0], ["get", "field.name", ["loc", [null, [227, 49], [227, 59]]], 0, 0, 0, 0]], [], ["loc", [null, [227, 38], [227, 60]]], 0, 0]], [], ["loc", [null, [227, 33], [227, 61]]], 0, 0], "rows", 3, "classNames", "form-control", "focusIn", ["subexpr", "action", [["subexpr", "mut", [["get", "model.comments", ["loc", [null, [227, 116], [227, 130]]], 0, 0, 0, 0]], [], ["loc", [null, [227, 111], [227, 131]]], 0, 0]], [], ["loc", [null, [227, 103], [227, 132]]], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [227, 143], [227, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [227, 16], [227, 154]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child6 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 230,
                      "column": 14
                    },
                    "end": {
                      "line": 234,
                      "column": 14
                    }
                  },
                  "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment(" Automated Disabled Field, Display Only based on Calculations ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("em");
                  var el2 = dom.createTextNode("Note: To update this calculated field, save the NAO form.");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n                ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 5, 5, contextualElement);
                  return morphs;
                },
                statements: [["inline", "input", [], ["disabled", true, "name", ["subexpr", "@mut", [["get", "field.name", ["loc", [null, [233, 43], [233, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "mut", [["subexpr", "get", [["get", "model", ["loc", [null, [233, 70], [233, 75]]], 0, 0, 0, 0], ["get", "field.name", ["loc", [null, [233, 76], [233, 86]]], 0, 0, 0, 0]], [], ["loc", [null, [233, 65], [233, 87]]], 0, 0]], [], ["loc", [null, [233, 60], [233, 88]]], 0, 0], "type", "text"], ["loc", [null, [233, 16], [233, 102]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 164,
                    "column": 8
                  },
                  "end": {
                    "line": 236,
                    "column": 8
                  }
                },
                "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "field column");
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("label");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("          ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n        ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element4 = dom.childAt(fragment, [1]);
                var element5 = dom.childAt(element4, [1]);
                var morphs = new Array(8);
                morphs[0] = dom.createMorphAt(element5, 0, 0);
                morphs[1] = dom.createMorphAt(element5, 1, 1);
                morphs[2] = dom.createMorphAt(element4, 3, 3);
                morphs[3] = dom.createMorphAt(element4, 5, 5);
                morphs[4] = dom.createMorphAt(element4, 7, 7);
                morphs[5] = dom.createMorphAt(element4, 9, 9);
                morphs[6] = dom.createMorphAt(element4, 11, 11);
                morphs[7] = dom.createMorphAt(element4, 13, 13);
                return morphs;
              },
              statements: [["content", "field.label", ["loc", [null, [166, 21], [166, 36]]], 0, 0, 0, 0], ["block", "if", [["get", "field.required", ["loc", [null, [166, 42], [166, 56]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [166, 36], [166, 66]]]], ["block", "if", [["subexpr", "is-equal", [["get", "field.type", ["loc", [null, [168, 30], [168, 40]]], 0, 0, 0, 0], "dropdown"], [], ["loc", [null, [168, 20], [168, 52]]], 0, 0]], [], 1, null, ["loc", [null, [168, 14], [186, 21]]]], ["block", "if", [["subexpr", "is-equal", [["get", "field.type", ["loc", [null, [188, 30], [188, 40]]], 0, 0, 0, 0], "radio"], [], ["loc", [null, [188, 20], [188, 49]]], 0, 0]], [], 2, null, ["loc", [null, [188, 14], [208, 21]]]], ["block", "if", [["subexpr", "is-equal", [["get", "field.type", ["loc", [null, [210, 30], [210, 40]]], 0, 0, 0, 0], "text"], [], ["loc", [null, [210, 20], [210, 48]]], 0, 0]], [], 3, null, ["loc", [null, [210, 14], [213, 21]]]], ["block", "if", [["subexpr", "is-equal", [["get", "field.type", ["loc", [null, [215, 30], [215, 40]]], 0, 0, 0, 0], "date"], [], ["loc", [null, [215, 20], [215, 48]]], 0, 0]], [], 4, null, ["loc", [null, [215, 14], [223, 21]]]], ["block", "if", [["subexpr", "is-equal", [["get", "field.type", ["loc", [null, [225, 30], [225, 40]]], 0, 0, 0, 0], "textarea"], [], ["loc", [null, [225, 20], [225, 52]]], 0, 0]], [], 5, null, ["loc", [null, [225, 14], [228, 21]]]], ["block", "if", [["subexpr", "is-equal", [["get", "field.type", ["loc", [null, [230, 30], [230, 40]]], 0, 0, 0, 0], "auto"], [], ["loc", [null, [230, 20], [230, 48]]], 0, 0]], [], 6, null, ["loc", [null, [230, 14], [234, 21]]]]],
              locals: [],
              templates: [child0, child1, child2, child3, child4, child5, child6]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 160,
                  "column": 6
                },
                "end": {
                  "line": 238,
                  "column": 6
                }
              },
              "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment(" we only add a form field if it is visible. ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment(" Todo: Ask what to do with form fields which were previously visible and have values. ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment(" END if field visible");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n      ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["block", "if", [["get", "field.visible", ["loc", [null, [164, 14], [164, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [164, 8], [236, 15]]]]],
            locals: ["field", "index"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 157,
                "column": 2
              },
              "end": {
                "line": 242,
                "column": 2
              }
            },
            "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h3");
            dom.setAttribute(el1, "class", "ui dividing header");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "ui two column stackable grid");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment(" END EACH field ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("END GRID");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n  ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["content", "group.value", ["loc", [null, [158, 35], [158, 50]]], 0, 0, 0, 0], ["block", "each", [["get", "group.items", ["loc", [null, [160, 14], [160, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [160, 6], [238, 15]]]]],
          locals: ["group"],
          templates: [child0]
        };
      })();
      var child4 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 248,
                  "column": 6
                },
                "end": {
                  "line": 250,
                  "column": 6
                }
              },
              "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createElement("label");
              dom.setAttribute(el2, "class", "bold capitalize");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode(" ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(": ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(dom.childAt(element0, [0]), 0, 0);
              morphs[1] = dom.createMorphAt(element0, 2, 2);
              return morphs;
            },
            statements: [["content", "evt.type", ["loc", [null, [249, 47], [249, 59]]], 0, 0, 0, 0], ["inline", "moment-format", [["get", "evt.date", ["loc", [null, [249, 86], [249, 94]]], 0, 0, 0, 0], "MMMM Do, YYYY"], [], ["loc", [null, [249, 70], [249, 112]]], 0, 0]],
            locals: ["evt"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 245,
                "column": 2
              },
              "end": {
                "line": 252,
                "column": 2
              }
            },
            "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h3");
            dom.setAttribute(el1, "class", "ui dividing header");
            var el2 = dom.createTextNode("Event Log");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "ui two column stackable grid");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "nonStageEvents", ["loc", [null, [248, 14], [248, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [248, 6], [250, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 53,
              "column": 0
            },
            "end": {
              "line": 254,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" IF ADMIN - CAN CHANGE USER RELATION ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" STEPS FIELD ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" STATUS FIELD ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field gap1 ");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("Status");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row ui buttons");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" STATE FIELD ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "field gap1");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          var el3 = dom.createTextNode("State");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row ui buttons");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" END EACH group ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element9 = dom.childAt(fragment, [11, 3]);
          var element10 = dom.childAt(fragment, [15, 3]);
          var morphs = new Array(10);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[2] = dom.createMorphAt(element9, 1, 1);
          morphs[3] = dom.createMorphAt(element9, 3, 3);
          morphs[4] = dom.createMorphAt(element9, 5, 5);
          morphs[5] = dom.createMorphAt(element9, 7, 7);
          morphs[6] = dom.createMorphAt(element10, 1, 1);
          morphs[7] = dom.createMorphAt(element10, 3, 3);
          morphs[8] = dom.createMorphAt(fragment, 17, 17, contextualElement);
          morphs[9] = dom.createMorphAt(fragment, 20, 20, contextualElement);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "is-equal", [["get", "identity.profile.type", ["loc", [null, [56, 18], [56, 39]]], 0, 0, 0, 0], "Admin"], [], ["loc", [null, [56, 8], [56, 48]]], 0, 0]], [], 0, null, ["loc", [null, [56, 2], [76, 9]]]], ["inline", "opportunities/stage-step", [], ["stageSteps", ["subexpr", "@mut", [["get", "stages", ["loc", [null, [80, 15], [80, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "opt", ["subexpr", "@mut", [["get", "model", ["loc", [null, [81, 8], [81, 13]]], 0, 0, 0, 0]], [], [], 0, 0], "stageChange", "onStageChange", "quoteEvent", ["subexpr", "@mut", [["get", "quoteEvent", ["loc", [null, [83, 15], [83, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "sampleEvent", ["subexpr", "@mut", [["get", "sampleEvent", ["loc", [null, [84, 16], [84, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "approvalEvent", ["subexpr", "@mut", [["get", "approvalEvent", ["loc", [null, [85, 18], [85, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "productionEvent", ["subexpr", "@mut", [["get", "productionEvent", ["loc", [null, [86, 20], [86, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [79, 2], [86, 37]]], 0, 0], ["inline", "ui-radio", [], ["name", "status", "current", ["subexpr", "@mut", [["get", "model.status", ["loc", [null, [93, 14], [93, 26]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Backburner", "value", "Backburner", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.status", ["loc", [null, [97, 28], [97, 40]]], 0, 0, 0, 0]], [], ["loc", [null, [97, 23], [97, 41]]], 0, 0]], [], ["loc", [null, [97, 15], [97, 42]]], 0, 0]], ["loc", [null, [92, 6], [97, 44]]], 0, 0], ["block", "if", [["get", "isWinDisabled", ["loc", [null, [99, 12], [99, 25]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [99, 6], [118, 13]]]], ["inline", "ui-radio", [], ["name", "status", "current", ["subexpr", "@mut", [["get", "model.status", ["loc", [null, [120, 16], [120, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Lost", "value", "Lost", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.status", ["loc", [null, [124, 30], [124, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [124, 25], [124, 43]]], 0, 0]], [], ["loc", [null, [124, 17], [124, 44]]], 0, 0]], ["loc", [null, [119, 6], [124, 46]]], 0, 0], ["inline", "ui-radio", [], ["name", "status", "current", ["subexpr", "@mut", [["get", "model.status", ["loc", [null, [128, 16], [128, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "None", "value", "", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.status", ["loc", [null, [132, 30], [132, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [132, 25], [132, 43]]], 0, 0]], [], ["loc", [null, [132, 17], [132, 44]]], 0, 0]], ["loc", [null, [126, 6], [132, 46]]], 0, 0], ["inline", "ui-radio", [], ["name", "state", "current", ["subexpr", "@mut", [["get", "model.state", ["loc", [null, [142, 16], [142, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Open", "value", "Open", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.state", ["loc", [null, [146, 30], [146, 41]]], 0, 0, 0, 0]], [], ["loc", [null, [146, 25], [146, 42]]], 0, 0]], [], ["loc", [null, [146, 17], [146, 43]]], 0, 0]], ["loc", [null, [140, 6], [146, 45]]], 0, 0], ["inline", "ui-radio", [], ["name", "state", "current", ["subexpr", "@mut", [["get", "model.state", ["loc", [null, [149, 16], [149, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "make-me-button button", "label", "Closed", "value", "Closed", "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.state", ["loc", [null, [153, 30], [153, 41]]], 0, 0, 0, 0]], [], ["loc", [null, [153, 25], [153, 42]]], 0, 0]], [], ["loc", [null, [153, 17], [153, 43]]], 0, 0]], ["loc", [null, [147, 6], [153, 45]]], 0, 0], ["block", "each", [["get", "fieldsByGroup", ["loc", [null, [157, 10], [157, 23]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [157, 2], [242, 11]]]], ["block", "if", [["get", "nonStageEvents", ["loc", [null, [245, 8], [245, 22]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [245, 2], [252, 9]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 254,
              "column": 0
            },
            "end": {
              "line": 256,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("Loading Fields...");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 270,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/opportunities/opt-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" <form class=\"ui form opportunity-form container\"> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" HEADER ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui header form-header-tools stackable menu no-border no-box-shadow");
        var el2 = dom.createComment("fixed");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <div class=\"form-header-tools-bg\"> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "ui left opt-detail-title");
        var el3 = dom.createTextNode("NAO #");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui right stackable menu no-border no-box-shadow");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("TOOLTIP ON DISABLED BUTTON:");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" <button class=\"ui submit button small right floated\" {{action 'updateRecord'}}>Save</button> ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class='form-heder-margin'></div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui error message");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <ul>\n{{#each-in attributes as |key value|}}\n  <div class=\"field\">\n    <label>{{key}}</label>\n    {{input type=\"text\" name=key value=value}}\n  </div>\n  {{/each-in}}</ul> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" </form> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element14 = dom.childAt(fragment, [4]);
        var element15 = dom.childAt(element14, [4]);
        var element16 = dom.childAt(element14, [8]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(element15, 1, 1);
        morphs[1] = dom.createMorphAt(element15, 3, 3);
        morphs[2] = dom.createMorphAt(element14, 6, 6);
        morphs[3] = dom.createMorphAt(element16, 1, 1);
        morphs[4] = dom.createMorphAt(element16, 5, 5);
        morphs[5] = dom.createMorphAt(element16, 9, 9);
        morphs[6] = dom.createMorphAt(element16, 11, 11);
        morphs[7] = dom.createMorphAt(element16, 13, 13);
        morphs[8] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        morphs[9] = dom.createMorphAt(fragment, 15, 15, contextualElement);
        return morphs;
      },
      statements: [["content", "model.id", ["loc", [null, [5, 46], [5, 58]]], 0, 0, 0, 0], ["block", "if", [["get", "model.draft", ["loc", [null, [5, 65], [5, 76]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [5, 59], [5, 91]]]], ["block", "if", [["get", "confirmShown", ["loc", [null, [7, 8], [7, 20]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [7, 2], [12, 9]]]], ["block", "if", [["subexpr", "is-equal", [["get", "identity.profile.type", ["loc", [null, [15, 20], [15, 41]]], 0, 0, 0, 0], "Admin"], [], ["loc", [null, [15, 10], [15, 50]]], 0, 0]], [], 2, null, ["loc", [null, [15, 4], [23, 11]]]], ["inline", "input", [], ["type", "button", "value", "Save as Draft", "class", "ui button small", "click", ["subexpr", "action", ["saveDraft"], [], ["loc", [null, [27, 10], [27, 30]]], 0, 0]], ["loc", [null, [25, 4], [27, 32]]], 0, 0], ["inline", "input", [], ["type", "button", "value", "Save", "disabled", ["subexpr", "@mut", [["get", "hasNoChanges", ["loc", [null, [32, 15], [32, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "ui submit small button", "click", ["subexpr", "action", ["updateRecord"], [], ["loc", [null, [34, 12], [34, 35]]], 0, 0]], ["loc", [null, [30, 4], [34, 37]]], 0, 0], ["inline", "input", [], ["type", "button", "value", "Copy", "disabled", ["subexpr", "@mut", [["get", "model.newRecord", ["loc", [null, [36, 48], [36, 63]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "ui submit small button ", "click", ["subexpr", "action", ["cloneRecord"], [], ["loc", [null, [38, 10], [38, 32]]], 0, 0]], ["loc", [null, [36, 4], [38, 34]]], 0, 0], ["inline", "confirm-cancel", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [41, 12], [41, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "confirmCancel", "onCancelOptClick", "title", "Reset Changes", "isDisabled", ["subexpr", "@mut", [["get", "model.newRecord", ["loc", [null, [44, 17], [44, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "message", "All unsaved changes will be lost. Continue?"], ["loc", [null, [40, 4], [45, 61]]], 0, 0], ["block", "if", [["get", "fieldsByGroup", ["loc", [null, [53, 6], [53, 19]]], 0, 0, 0, 0]], [], 3, 4, ["loc", [null, [53, 0], [256, 7]]]], ["content", "yield", ["loc", [null, [269, 0], [269, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define('apem/pods/components/opportunities/stage-step/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    store: _ember['default'].inject.service(),
    stageSteps: [],
    //current opportunity
    opt: null,
    quoteEvent: null,
    sampleEvent: null,
    approvalEvent: null,
    productionEvent: null,

    /* A basic to every component click action handler which allows us to recognise
     click event targets. We need thi because the semantic step ui triggers a click
     without regard to wether a child element is clicked or a step ui element is clicked.
     We need to know when the user clicks on the datepicker and when the user just changes
     the opt's stage attribute.*/
    click: function click(event) {
      var targetAttr = event.target.attributes;
      for (var i = 0, attLen = targetAttr.length; i < attLen; i++) {
        if (targetAttr[i].nodeValue === 'quote' || targetAttr[i].nodeValue === 'sample' || targetAttr[i].nodeValue === 'approval' || targetAttr[i].nodeValue === 'production') {
          this.onStepClick(targetAttr[i].nodeValue);
        }
      }
    },

    didRender: function didRender() {
      this._super.apply(this, arguments);
      console.log('OPT DETAIL RENDER');
      this.markSteps();
    },
    /* Called by the click action handler. */
    onStepClick: function onStepClick(value) {
      var _this = this;

      this.opt.set('stage', value);

      this.markSteps();

      var sSteps = this.stageSteps;

      var eventedStepId = sSteps.findBy('label', this.opt.get('stage')).id - 1;
      sSteps.forEach(function (item) {
        var me = _this;
        var eventName = item.label + 'Event';
        var today = window.moment(Date().toString(), 'ddd MMM DD YYYY HH:mm:ss Z').format('MM-DD-YYYY');
        var myEvt = _this.get(eventName);
        // console.log(`${item}`);
        if (item.id === eventedStepId) {
          //Remark Aug 31st Ralica M.: using the stageSteps hardcoded array,
          //we find the current step's type by looking at the label and get the
          //appropriate stage attribute from the component to asign today's date.
          if (!myEvt) {
            myEvt = _this.get('store').createRecord('event', {
              date: today,
              type: item.label,
              opportunity: _this.opt
            });
            myEvt.save().then(function (data) {
              me.set(eventName, data);
            });
          }
        } else if (item.id < eventedStepId) {
          if (!myEvt) {
            myEvt = _this.get('store').createRecord('event', {
              date: today,
              type: item.label,
              opportunity: _this.opt
            });
            myEvt.save().then(function (data) {
              me.set(eventName, data);
            });
          }
        } else if (value === 'production' && item.id === eventedStepId + 1) {
          // If this is the last stage, we also want to set the date on this stage
          if (!myEvt) {
            myEvt = _this.get('store').createRecord('event', {
              date: today,
              type: item.label,
              opportunity: _this.opt
            });
            myEvt.save().then(function (data) {
              me.set(eventName, data);
            });
          }
        } else {
          //delete anything before the clicked date
          if (myEvt) {
            _this.deleteUncheckedEvents(myEvt); //myEvt.destroyRecord();
          }
        }
      });
    },

    /* Triggered when there are leftover events in the opt which will not be used
    after the current user change to the stage step component.*/
    deleteUncheckedEvents: function deleteUncheckedEvents(event) {
      var eventName = event.get('type') + 'Event';
      this.set(eventName, null);
      event.destroyRecord();
    },

    /* A method used to manage css styles of the stage step UI*/
    markSteps: function markSteps() {
      var selectedStepId = this.stageSteps.findBy('label', this.opt.get('stage')).id;
      var sSteps = this.stageSteps;

      sSteps.forEach(function (item) {
        var step = _ember['default'].$('.' + item.label + '.step'),
            stepIcon = _ember['default'].$('.' + item.label + '-step-icn');
        // console.log(`${item}`);
        if (item.id === selectedStepId) {
          // show step as active
          step.addClass('active');
          stepIcon.addClass('hide-me');
        } else if (item.id < selectedStepId) {
          stepIcon.removeClass('hide-me');
          step.removeClass('active');
        } else {
          stepIcon.addClass('hide-me');
          step.removeClass('active');
        }
      });
    },

    actions: {
      updateStageDate: function updateStageDate(event, date) {
        var formattedDate = window.moment(date, 'YYYY-MM-DD').format('MM-DD-YYYY');
        event.set('date', formattedDate);
        event.save();
      }
    }
  });
});
define("apem/pods/components/opportunities/stage-step/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 8
            },
            "end": {
              "line": 22,
              "column": 8
            }
          },
          "moduleName": "apem/pods/components/opportunities/stage-step/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "description");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "date-picker", [], ["action", ["subexpr", "action", ["updateStageDate", ["get", "quoteEvent", ["loc", [null, [11, 47], [11, 57]]], 0, 0, 0, 0]], [], ["loc", [null, [11, 21], [11, 58]]], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "quoteEvent.date", ["loc", [null, [12, 26], [12, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "valueFormat", "MM-DD-YYYY", "format", "MM-DD-YYYY", "utc", false, "time", false, "date", ["subexpr", "@mut", [["get", "quoteEvent.date", ["loc", [null, [17, 19], [17, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "allowBlank", true, "class", "label-like-date-picker", "buttonClasses", "label-like"], ["loc", [null, [10, 12], [20, 42]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 8
            },
            "end": {
              "line": 43,
              "column": 8
            }
          },
          "moduleName": "apem/pods/components/opportunities/stage-step/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "description");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "date-picker", [], ["action", ["subexpr", "action", ["updateStageDate", ["get", "quoteEvent", ["loc", [null, [32, 47], [32, 57]]], 0, 0, 0, 0]], [], ["loc", [null, [32, 21], [32, 58]]], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "sampleEvent.date", ["loc", [null, [33, 26], [33, 42]]], 0, 0, 0, 0]], [], [], 0, 0], "valueFormat", "MM-DD-YYYY", "format", "MM-DD-YYYY", "utc", false, "time", false, "date", ["subexpr", "@mut", [["get", "sampleEvent.date", ["loc", [null, [38, 19], [38, 35]]], 0, 0, 0, 0]], [], [], 0, 0], "allowBlank", true, "class", "label-like-date-picker", "buttonClasses", "label-like"], ["loc", [null, [31, 12], [41, 42]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 8
            },
            "end": {
              "line": 65,
              "column": 8
            }
          },
          "moduleName": "apem/pods/components/opportunities/stage-step/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "description");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "date-picker", [], ["action", ["subexpr", "action", ["updateStageDate", ["get", "quoteEvent", ["loc", [null, [54, 45], [54, 55]]], 0, 0, 0, 0]], [], ["loc", [null, [54, 19], [54, 56]]], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "approvalEvent.date", ["loc", [null, [55, 24], [55, 42]]], 0, 0, 0, 0]], [], [], 0, 0], "valueFormat", "MM-DD-YYYY", "format", "MM-DD-YYYY", "utc", false, "time", false, "date", ["subexpr", "@mut", [["get", "approvalEvent.date", ["loc", [null, [60, 17], [60, 35]]], 0, 0, 0, 0]], [], [], 0, 0], "allowBlank", true, "class", "label-like-date-picker", "buttonClasses", "label-like"], ["loc", [null, [53, 10], [63, 40]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 73,
              "column": 8
            },
            "end": {
              "line": 87,
              "column": 8
            }
          },
          "moduleName": "apem/pods/components/opportunities/stage-step/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "description");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "date-picker", [], ["action", ["subexpr", "action", ["updateStageDate", ["get", "quoteEvent", ["loc", [null, [76, 47], [76, 57]]], 0, 0, 0, 0]], [], ["loc", [null, [76, 21], [76, 58]]], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "productionEvent.date", ["loc", [null, [77, 26], [77, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "valueFormat", "MM-DD-YYYY", "format", "MM-DD-YYYY", "utc", false, "time", false, "date", ["subexpr", "@mut", [["get", "productionEvent.date", ["loc", [null, [82, 19], [82, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "allowBlank", true, "class", "label-like-date-picker", "buttonClasses", "label-like"], ["loc", [null, [75, 12], [85, 42]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 92,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/opportunities/stage-step/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "field gap1 side-padded-fourteen");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("Stage");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui four top attached steps");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "quote step");
        dom.setAttribute(el3, "value", "quote");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "green check icon quote-step-icn hidden");
        dom.setAttribute(el4, "value", "quote");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        dom.setAttribute(el4, "value", "quote");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        dom.setAttribute(el5, "value", "quote");
        var el6 = dom.createTextNode("Quote");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "sample step");
        dom.setAttribute(el3, "value", "sample");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "green check icon sample-step-icn hidden");
        dom.setAttribute(el4, "value", "sample");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        dom.setAttribute(el4, "value", "sample");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        dom.setAttribute(el5, "value", "sample");
        var el6 = dom.createTextNode("Sample");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <div class=\"description\">Enter billing information</div> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "approval step");
        dom.setAttribute(el3, "value", "approval");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "green check icon approval-step-icn hidden");
        dom.setAttribute(el4, "value", "approval");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        dom.setAttribute(el4, "value", "approval");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        dom.setAttribute(el5, "value", "approval");
        var el6 = dom.createTextNode("Approval");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "production step");
        dom.setAttribute(el3, "value", "production");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "green check icon production-step-icn hidden");
        dom.setAttribute(el4, "value", "production");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        dom.setAttribute(el4, "value", "production");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        dom.setAttribute(el5, "value", "production");
        var el6 = dom.createTextNode("Production");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 3]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 3]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [7, 3]), 3, 3);
        return morphs;
      },
      statements: [["block", "if", [["get", "quoteEvent", ["loc", [null, [8, 14], [8, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [8, 8], [22, 15]]]], ["block", "if", [["get", "sampleEvent", ["loc", [null, [29, 14], [29, 25]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [29, 8], [43, 15]]]], ["block", "if", [["get", "approvalEvent", ["loc", [null, [51, 14], [51, 27]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [51, 8], [65, 15]]]], ["block", "if", [["get", "productionEvent", ["loc", [null, [73, 14], [73, 29]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [73, 8], [87, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('apem/pods/components/ui-form/ui-checkbox/component', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        attributeBindings: ['type', 'value', 'checked', 'disabled'],
        tagName: 'input',
        type: 'checkbox',
        checked: false,
        disabled: false,

        actions: {

            /*isCheckedBool: function(key, value){
                var model = this.get('model');
                 if (value === undefined) {
                    // property being used as a getter
                    return model.get('isChecked') > 0;
                } else {
                    // property being used as  setter
                    model.set('isChecked', value == true ? 1 : 0);
                    model.save();
                    return model;
                }
            }.property('model.isChecked') })*/
        }
    });
});
define("apem/pods/components/ui-form/ui-checkbox/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/ui-form/ui-checkbox/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/components/ui-form/ui-textfield/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("apem/pods/components/ui-form/ui-textfield/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/ui-form/ui-textfield/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "textarea", [], ["required", ["subexpr", "@mut", [["get", "isRequired", ["loc", [null, [3, 13], [3, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "maxlength", ["subexpr", "@mut", [["get", "allowedLength", ["loc", [null, [4, 14], [4, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [5, 10], [5, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "numberOfLines", ["loc", [null, [6, 9], [6, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "focusIn", ["subexpr", "action", ["inputGotFocus"], [], ["loc", [null, [7, 12], [7, 36]]], 0, 0], "focusOut", ["subexpr", "action", ["inputLostFocus"], [], ["loc", [null, [8, 13], [8, 38]]], 0, 0], "classNames", ["subexpr", "@mut", [["get", "inputClassNames", ["loc", [null, [9, 15], [9, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 4], [9, 32]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 19,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/ui-form/ui-textfield/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["required", ["subexpr", "@mut", [["get", "isRequired", ["loc", [null, [12, 13], [12, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "maxlength", ["subexpr", "@mut", [["get", "allowedLength", ["loc", [null, [13, 14], [13, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [14, 10], [14, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "text", "focusIn", ["subexpr", "action", ["inputGotFocus"], [], ["loc", [null, [16, 12], [16, 36]]], 0, 0], "focusOut", ["subexpr", "action", ["inputLostFocus"], [], ["loc", [null, [17, 13], [17, 38]]], 0, 0], "classNames", ["subexpr", "@mut", [["get", "inputClassNames", ["loc", [null, [18, 15], [18, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [11, 4], [18, 32]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/ui-form/ui-textfield/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "isMultiline", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [19, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('apem/pods/components/ui-layout/nav-hamburger/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    identity: _ember['default'].inject.service()
  });
});
define("apem/pods/components/ui-layout/nav-hamburger/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 63
              }
            },
            "moduleName": "apem/pods/components/ui-layout/nav-hamburger/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Home");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 6
                },
                "end": {
                  "line": 13,
                  "column": 69
                }
              },
              "moduleName": "apem/pods/components/ui-layout/nav-hamburger/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Form Management");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 6
                },
                "end": {
                  "line": 14,
                  "column": 68
                }
              },
              "moduleName": "apem/pods/components/ui-layout/nav-hamburger/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("User Management");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 15,
                "column": 4
              }
            },
            "moduleName": "apem/pods/components/ui-layout/nav-hamburger/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "header side-nav-section-header");
            var el2 = dom.createTextNode("Admin");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["block", "link-to", ["fields"], ["class", "item side-nav-item"], 0, null, ["loc", [null, [13, 6], [13, 81]]]], ["block", "link-to", ["users"], ["class", "item side-nav-item"], 1, null, ["loc", [null, [14, 6], [14, 80]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/ui-layout/nav-hamburger/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "logo-wrapper");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "assets/images/corp-logo.png");
          dom.setAttribute(el2, "class", "brand apem-logo");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "big content icon mobile-right-menu");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "ui fluid vertical navbar menu");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [5]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          morphs[2] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["block", "link-to", ["opportunities"], ["class", "item side-nav-item"], 0, null, ["loc", [null, [7, 4], [7, 75]]]], ["inline", "manage-password", [], ["mobileClass", "mobile tablet only"], ["loc", [null, [9, 4], [9, 56]]], 0, 0], ["block", "if", [["subexpr", "is-equal", [["get", "identity.profile.type", ["loc", [null, [11, 20], [11, 41]]], 0, 0, 0, 0], "Admin"], [], ["loc", [null, [11, 10], [11, 50]]], 0, 0]], [], 1, null, ["loc", [null, [11, 4], [15, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/ui-layout/nav-hamburger/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ui-dropdown", [], ["class", "ui fixed fluid navbar grid mobile tablet only row home-navbar"], 0, null, ["loc", [null, [1, 0], [18, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/ui-layout/nav-header/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['ui', 'menu', 'nav-header-menu', 'nav-header'],
    identity: _ember['default'].inject.service(),
    router: _ember['default'].inject.service("-routing"),

    //observe changes to the router
    didInsertElement: function didInsertElement() {
      var r = this.get("router");
      r.addObserver("currentRouteName", this, "onRouteChange");
    },

    //when the router is in opportunity.detail - hide the new NAO button
    "onRouteChange": function onRouteChange(router) {
      var newNAObtn = _ember['default'].$('.new-nao-btn');
      // console.log("Current route", router.get("currentRouteName"));
      if (router.get("currentRouteName") === 'opportunities.opportunity.detail') {
        newNAObtn.addClass('hide-me');
      } else {
        newNAObtn.removeClass('hide-me');
      }
    }
  });
});
define("apem/pods/components/ui-layout/nav-header/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 100
            }
          },
          "moduleName": "apem/pods/components/ui-layout/nav-header/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "plus icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("New NAO");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 78
              }
            },
            "moduleName": "apem/pods/components/ui-layout/nav-header/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "big home icon");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("Home");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "apem/pods/components/ui-layout/nav-header/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Welcome ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "ellipsis large vertical icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "right menu full-width top-z-index");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "big info circle icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" Help");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "/logout");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "big fa-sign-out icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" Logout");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "identity.profile.username", ["loc", [null, [10, 12], [10, 41]]], 0, 0, 0, 0], ["block", "link-to", ["opportunities"], ["class", "item"], 0, null, ["loc", [null, [13, 4], [13, 90]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/ui-layout/nav-header/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "bread-crumbs", [], ["tagName", "ul", "outputStyle", "foundation", "linkable", false, "crumbClass", "breadcrumb-item"], ["loc", [null, [1, 0], [5, 32]]], 0, 0], ["block", "link-to", ["opportunities.new"], ["class", "ui button green new-nao-btn"], 0, null, ["loc", [null, [7, 0], [7, 112]]]], ["block", "ui-dropdown", [], ["class", "right item simple"], 1, null, ["loc", [null, [9, 0], [17, 16]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('apem/pods/components/ui-layout/nav-sidebar/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['nav-sidebar'],
    tagName: '',
    identity: _ember['default'].inject.service()
  });
});
define("apem/pods/components/ui-layout/nav-sidebar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 8
            }
          },
          "moduleName": "apem/pods/components/ui-layout/nav-sidebar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "logo-wrapper");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "assets/images/corp-logo.png");
          dom.setAttribute(el2, "class", "apem-logo");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 11,
              "column": 63
            }
          },
          "moduleName": "apem/pods/components/ui-layout/nav-sidebar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 6
              },
              "end": {
                "line": 19,
                "column": 69
              }
            },
            "moduleName": "apem/pods/components/ui-layout/nav-sidebar/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Form Management");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 6
              },
              "end": {
                "line": 20,
                "column": 68
              }
            },
            "moduleName": "apem/pods/components/ui-layout/nav-sidebar/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("User Management");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "apem/pods/components/ui-layout/nav-sidebar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "spacer spacer-lg");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "header side-nav-section-header");
          var el2 = dom.createTextNode("Admin");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [5]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["block", "link-to", ["fields"], ["class", "item side-nav-item"], 0, null, ["loc", [null, [19, 6], [19, 81]]]], ["block", "link-to", ["users"], ["class", "item side-nav-item"], 1, null, ["loc", [null, [20, 6], [20, 80]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/ui-layout/nav-sidebar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui vertical menu visible home-sidebar ember-view sidebar left");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "spacer spacer-lg");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" {{#link-to \"opportunities\" class=\"item side-nav-item\"}}Home{{/link-to}} ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <a class=\"item side-nav-item\">Currency Rate</a>{{#link-to \"home\" class=\"item\"}}Currency Rate{{/link-to}} ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "menu");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [9]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element2, 1, 1);
        morphs[2] = dom.createMorphAt(element2, 3, 3);
        morphs[3] = dom.createMorphAt(element1, 11, 11);
        return morphs;
      },
      statements: [["block", "link-to", ["opportunities"], [], 0, null, ["loc", [null, [2, 2], [4, 20]]]], ["block", "link-to", ["opportunities"], ["class", "item side-nav-item"], 1, null, ["loc", [null, [11, 4], [11, 75]]]], ["content", "manage-password", ["loc", [null, [12, 4], [12, 23]]], 0, 0, 0, 0], ["block", "if", [["subexpr", "is-equal", [["get", "identity.profile.type", ["loc", [null, [15, 18], [15, 39]]], 0, 0, 0, 0], "Admin"], [], ["loc", [null, [15, 8], [15, 48]]], 0, 0]], [], 2, null, ["loc", [null, [15, 2], [22, 9]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('apem/pods/components/users/usr-table/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['usr-table'],
    model: null,

    init: function init() {
      this._super.apply(this, arguments);
      //a place to hold all selecter records for this table
      this.selectedItems = [];
    },

    //observing the table's selectedItems to manage the delete button's disabled property
    disableDelete: (function () {
      return this.get('selectedItems').length > 0 ? false : true;
    }).property('selectedItems.length'),

    actions: {
      didCreateUser: function didCreateUser() {
        console.log('CREATE USER event reached user table...passing up to the parent next !!!');
        this.get('didCreateUser')();
      },

      onSelection: function onSelection(record, evt) {
        var selected = evt.currentTarget.checked;
        if (selected) {
          this.get('selectedItems').addObject(record);
        } else {
          this.get('selectedItems').removeObject(record);
        }
      }
    }
  });
});
define("apem/pods/components/users/usr-table/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 10
              },
              "end": {
                "line": 25,
                "column": 10
              }
            },
            "moduleName": "apem/pods/components/users/usr-table/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "usr.username", ["loc", [null, [24, 12], [24, 28]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 10
              },
              "end": {
                "line": 30,
                "column": 10
              }
            },
            "moduleName": "apem/pods/components/users/usr-table/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "usr.type", ["loc", [null, [29, 12], [29, 24]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 10
              },
              "end": {
                "line": 35,
                "column": 10
              }
            },
            "moduleName": "apem/pods/components/users/usr-table/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "usr.numOpportunities", ["loc", [null, [34, 12], [34, 36]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 10
              },
              "end": {
                "line": 40,
                "column": 10
              }
            },
            "moduleName": "apem/pods/components/users/usr-table/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "checkbox", "class", "checkbox", "checked", ["subexpr", "@mut", [["get", "usr.active", ["loc", [null, [39, 61], [39, 71]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", true], ["loc", [null, [39, 12], [39, 87]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 4
            },
            "end": {
              "line": 44,
              "column": 4
            }
          },
          "moduleName": "apem/pods/components/users/usr-table/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "checkbox", "checked", "selected", "class", "checkbox", "disabled", false, "change", ["subexpr", "action", ["onSelection", ["get", "usr", ["loc", [null, [20, 54], [20, 57]]], 0, 0, 0, 0]], [], ["loc", [null, [20, 32], [20, 58]]], 0, 0], "checked", ["subexpr", "@mut", [["get", "usr.selected", ["loc", [null, [20, 67], [20, 79]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [19, 10], [20, 81]]], 0, 0], ["block", "link-to", ["users.user.detail", ["get", "usr", ["loc", [null, [23, 41], [23, 44]]], 0, 0, 0, 0]], ["clss", "row-link"], 0, null, ["loc", [null, [23, 10], [25, 22]]]], ["block", "link-to", ["users.user.detail", ["get", "usr", ["loc", [null, [28, 41], [28, 44]]], 0, 0, 0, 0]], ["clss", "row-link"], 1, null, ["loc", [null, [28, 10], [30, 22]]]], ["block", "link-to", ["users.user.detail", ["get", "usr", ["loc", [null, [33, 41], [33, 44]]], 0, 0, 0, 0]], ["clss", "row-link"], 2, null, ["loc", [null, [33, 10], [35, 22]]]], ["block", "link-to", ["users.user.detail", ["get", "usr", ["loc", [null, [38, 41], [38, 44]]], 0, 0, 0, 0]], ["clss", "row-link"], 3, null, ["loc", [null, [38, 10], [40, 22]]]]],
        locals: ["usr"],
        templates: [child0, child1, child2, child3]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 72,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/users/usr-table/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui compact celled definition table");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Username");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Type");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Opportunities");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Active");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tfoot");
        dom.setAttribute(el2, "class", "full-width");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "colspan", "5");
        var el5 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <div class=\"ui right floated small primary labeled icon button\">\n          <i class=\"user icon\"></i> Add User\n        </div> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [5, 1, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(element2, 5, 5);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [15, 12], [15, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 4], [44, 13]]]], ["inline", "new-user", [], ["onCreate", ["subexpr", "action", ["didCreateUser"], [], ["loc", [null, [56, 28], [56, 52]]], 0, 0], "class", "ui right floated"], ["loc", [null, [56, 8], [57, 34]]], 0, 0], ["inline", "confirm-delete", [], ["tagName", "div", "isDisabled", ["subexpr", "@mut", [["get", "disableDelete", ["loc", [null, [61, 21], [61, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "deletableRecords", ["subexpr", "@mut", [["get", "selectedItems", ["loc", [null, [62, 27], [62, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "title", "Confirm Delete", "recordType", "User", "class", "small right-confirm-btn", "message", "The selected users will be deleted. Continue?"], ["loc", [null, [59, 8], [66, 67]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/fields/field/detail/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      updateField: function updateField() {
        var _this = this;

        // Update the user
        var field = this.get('model');
        this.set('serverErrors', []);
        var errs = this.get('serverErrors');

        if (field.get('hasDirtyAttributes')) {
          console.log('Updated Field...' + field.name);
          field.save().then(function () {
            _this.transitionToRoute('fields');
          }, function (error) {
            errs.addObject(error);
          });
        }
      }
    }
  });
});
define('apem/pods/fields/field/detail/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    breadCrumb: null
  });
});
define("apem/pods/fields/field/detail/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 4
            },
            "end": {
              "line": 29,
              "column": 4
            }
          },
          "moduleName": "apem/pods/fields/field/detail/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      Cancel\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "apem/pods/fields/field/detail/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2, "class", "subtitle");
        var el3 = dom.createTextNode("Edit Field");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "validation-errors");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "details");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "username");
        var el4 = dom.createElement("strong");
        var el5 = dom.createTextNode("Field Label:");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui input ");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui input");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "password");
        var el4 = dom.createTextNode("Required:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        var el4 = dom.createTextNode("Form Value Management");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "field-settings-box");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui small button");
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      Update Field\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [7]);
        var element2 = dom.childAt(element1, [23]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [8]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [16]), 1, 1);
        morphs[4] = dom.createMorphAt(element1, 21, 21);
        morphs[5] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [6, 29], [6, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 6], [6, 43]]], 0, 0], ["content", "model.label", ["loc", [null, [12, 27], [12, 42]]], 0, 0, 0, 0], ["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "model.required", ["loc", [null, [17, 38], [17, 52]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 6], [17, 54]]], 0, 0], ["content", "model.options", ["loc", [null, [23, 6], [23, 23]]], 0, 0, 0, 0], ["block", "link-to", ["fields"], ["tagName", "div", "class", "ui small button", "activeClass", ""], 0, null, ["loc", [null, [27, 4], [29, 16]]]], ["element", "action", ["updateField"], [], ["loc", [null, [30, 33], [30, 57]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/fields/field/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    redirect: function redirect() {
      this.transitionTo('fields.field.detail');
    }
  });
});
define('apem/pods/fields/field/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('field', params.id);
    },

    afterModel: function afterModel(model) {
      this.set('breadCrumb', { title: model.get('label') });
    }
  });
});
define("apem/pods/fields/field/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/pods/fields/field/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/fields/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    breadCrumb: { title: 'Form Management' },

    model: function model() {
      return this.get('store').findAll('field');
    }
  });
});
define("apem/pods/fields/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "apem/pods/fields/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "fields/fld-table", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 25], [1, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [1, 32]]], 0, 0], ["content", "outlet", ["loc", [null, [3, 0], [3, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/pods/fields/loading/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "apem/pods/fields/loading/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui segment loading-indicator");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui active inverted dimmer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui text loader");
        var el4 = dom.createTextNode("Loading");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/fields/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("apem/pods/fields/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/pods/fields/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/opportunities/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    defaultView: 'list',
    isFiltering: false,

    pagingParams: {
      perPage: '25',
      startingPage: '1'
    },

    filterParams: {
      searchedStatus: '', //default
      searchedState: '',
      lastThirtyDays: false,
      dateEntered: '',
      startDate: '',
      endDate: '',
      estimatedProdDate: '',
      searchString: '',
      orderBy: '',
      orderDir: ''
    },

    actions: {
      showGridView: function showGridView() {
        console.log('grid view');
        this.set('defaultView', 'grid');
      },
      showListView: function showListView() {
        console.log('list view');
        this.set('defaultView', 'list');
      }
    }
  });
});
define('apem/pods/opportunities/index/route', ['exports', 'ember', 'apem/config/environment', 'ember-infinity/mixins/route'], function (exports, _ember, _apemConfigEnvironment, _emberInfinityMixinsRoute) {
  exports['default'] = _ember['default'].Route.extend(_emberInfinityMixinsRoute['default'], {
    appConfig: _apemConfigEnvironment['default'],
    totalPagesParam: "meta.total-pages",
    totalRecordsParam: "meta.total-records",
    breadCrumb: { title: 'Manage Opportunities' },

    pagingParams: {
      perPage: '25',
      startingPage: '1'
    },

    filterParams: {
      searchedStatus: '', //default
      searchedState: '',
      lastThirtyDays: false,
      dateEntered: '',
      startDate: '',
      endDate: '',
      estimatedProdDate: '',
      searchString: '',
      orderBy: '',
      orderDir: ''
    },

    fields: function fields() {
      return this.store.findAll('field');
    },

    model: function model() {
      //console.log(this.filterParams);
      var extraParams = this.get('filterParams'),
          pagingParams = this.get('pagingParams');

      if (this.get('isFiltering')) {
        return this.infinityModel("opportunity", extraParams);
      } else {
        return this.infinityModel("opportunity", pagingParams);
      }
    },

    actions: {
      // Sort the table of results by re-querying the backend
      sortTable: function sortTable(column) {
        var me = this;
        var currFilter = this.get('filterParams');

        if (currFilter === null) {
          currFilter = {
            searchedStatus: '', //default
            searchedState: '',
            lastThirtyDays: false,
            dateEntered: '',
            startDate: '',
            endDate: '',
            estimatedProdDate: '',
            searchString: '',
            orderBy: '',
            orderDir: ''
          };
          this.set('filterParams', currFilter);
          currFilter = this.get('filterParams');
        }

        currFilter.orderBy = column;
        if (currFilter.orderDir === '') {
          currFilter.orderDir = 'asc';
        } else if (currFilter.orderDir === 'asc') {
          currFilter.orderDir = 'desc';
        } else {
          currFilter.orderBy = '';
          currFilter.orderDir = '';
        }

        var currColumn = null;
        switch (column) {
          case 'id':
            currColumn = _ember['default'].$('#id_sort');
            break;
          case 'created_at':
            currColumn = _ember['default'].$('#created_at_sort');
            break;
          case 'company':
            currColumn = _ember['default'].$('#contact_name_sort');
            break;
          case 'apem_sales_person':
            currColumn = _ember['default'].$('#apem_sales_person_sort');
            break;
          case 'potential_annual_rev':
            currColumn = _ember['default'].$('#potential_annual_rev_sort');
            break;
          case 'product_type':
            currColumn = _ember['default'].$('#product_type_sort');
            break;
          case 'estimated_prod_date':
            currColumn = _ember['default'].$('#estimated_prod_date_sort');
            break;
        }

        _ember['default'].$('.sorted').each(function () {
          _ember['default'].$(this).removeClass('ascending');
          _ember['default'].$(this).removeClass('descending');

          if (_ember['default'].$(this).attr("id") === currColumn.attr("id")) {
            switch (currFilter.orderDir) {
              case '':
                break;
              case 'asc':
                _ember['default'].$(this).addClass('ascending');
                break;
              case 'desc':
                _ember['default'].$(this).addClass('descending');
                break;
            }
          }
        });

        var promisedData = this.infinityModel("opportunity", currFilter).then(function (s) {
          return s;
        });
        promisedData.then(function (data) {
          me.controller.set('model', data);
        });

        //console.log(this.controller.get('model'));
        //let newData = this.infinityModel("opportunity", currFilter);
        //console.log(newData);
        //this.set('model', newData);
        //this.controller.set('model', newData);
        //this.controller.set('filterParams', currFilter);
        //this.set('filterParams', currFilter);
        //this.refresh();
      },

      // Clear old data and then load the newly queried records.
      filterOpportunities: function filterOpportunities(params) {
        this.controller.set('filterParams', params);
        this.controller.set('isFiltering', true);
        this.set('filterParams', params);
        this.set('isFiltering', true);
        this.refresh();
        // this.infinityModel("opportunity", params);
      },

      clearSearchFilter: function clearSearchFilter() {
        this.controller.set('filterParams', null);
        this.controller.set('isFiltering', false);
        this.set('filterParams', null);
        this.set('isFiltering', true);
        this.refresh();
      },

      pullFilteredCSV: function pullFilteredCSV(params) {
        var button = _ember['default'].$('#filteredCsvBtn');
        button.addClass('loading');

        var loginURL = this.get('appConfig').APP.apiUrl;
        var paramString = Object.keys(params).map(function (key) {
          return key + '=' + params[key];
        }).join('&');
        var url = loginURL + '/api/v1/opportunities/csv' + '?' + paramString;

        _ember['default'].$.ajax({
          url: url
        }).then(function (resolve) {
          button.removeClass('loading');
          var anchor = document.createElement('a');
          anchor.href = resolve['csv-download'] + '?download';
          anchor.target = 'self';
          anchor.click();
        });
      },

      pullEntireCSV: function pullEntireCSV() {

        var button = _ember['default'].$('#csvBtn');
        button.addClass('loading');

        var loginURL = this.get('appConfig').APP.apiUrl;
        var url = loginURL + '/api/v1/opportunities/csv';

        _ember['default'].$.ajax({
          url: url
          // your other details...
        }).then(function (resolve) {
          button.removeClass('loading');
          var anchor = document.createElement('a');
          anchor.href = resolve['csv-download'] + '?download';
          anchor.target = 'self';
          anchor.click();
        });
      }
    }
  });
});

//import InfinityFilter from 'apem/mixins/infinity-filter';
define("apem/pods/opportunities/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 57,
                  "column": 16
                },
                "end": {
                  "line": 59,
                  "column": 16
                }
              },
              "moduleName": "apem/pods/opportunities/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "opp.id", ["loc", [null, [58, 18], [58, 28]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 62,
                  "column": 16
                },
                "end": {
                  "line": 64,
                  "column": 16
                }
              },
              "moduleName": "apem/pods/opportunities/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "moment-format", [["get", "opp.createdAt", ["loc", [null, [63, 34], [63, 47]]], 0, 0, 0, 0], "MM/DD/YY"], [], ["loc", [null, [63, 18], [63, 60]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 67,
                  "column": 16
                },
                "end": {
                  "line": 69,
                  "column": 16
                }
              },
              "moduleName": "apem/pods/opportunities/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "opp.company", ["loc", [null, [68, 18], [68, 33]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child3 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 72,
                  "column": 16
                },
                "end": {
                  "line": 74,
                  "column": 16
                }
              },
              "moduleName": "apem/pods/opportunities/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "opp.apemSalesPerson", ["loc", [null, [73, 18], [73, 41]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child4 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 77,
                  "column": 16
                },
                "end": {
                  "line": 79,
                  "column": 16
                }
              },
              "moduleName": "apem/pods/opportunities/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "currency-format", [["get", "opp.potentialAnnualRev", ["loc", [null, [78, 36], [78, 58]]], 0, 0, 0, 0]], [], ["loc", [null, [78, 18], [78, 60]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child5 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 82,
                  "column": 16
                },
                "end": {
                  "line": 84,
                  "column": 16
                }
              },
              "moduleName": "apem/pods/opportunities/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "opp.productType", ["loc", [null, [83, 18], [83, 37]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child6 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 88,
                    "column": 18
                  },
                  "end": {
                    "line": 90,
                    "column": 18
                  }
                },
                "moduleName": "apem/pods/opportunities/index/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "moment-format", [["get", "opp.estimatedProdDate", ["loc", [null, [89, 36], [89, 57]]], 0, 0, 0, 0], "MM/DD/YY"], [], ["loc", [null, [89, 20], [89, 70]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 87,
                  "column": 16
                },
                "end": {
                  "line": 91,
                  "column": 16
                }
              },
              "moduleName": "apem/pods/opportunities/index/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "opp.estimatedProdDate", ["loc", [null, [88, 24], [88, 45]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [88, 18], [90, 25]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 54,
                "column": 10
              },
              "end": {
                "line": 94,
                "column": 10
              }
            },
            "moduleName": "apem/pods/opportunities/index/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            dom.setAttribute(el2, "style", "width: 8%;");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(7);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
            morphs[5] = dom.createMorphAt(dom.childAt(element0, [11]), 1, 1);
            morphs[6] = dom.createMorphAt(dom.childAt(element0, [13]), 1, 1);
            return morphs;
          },
          statements: [["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [57, 62], [57, 65]]], 0, 0, 0, 0]], ["class", "row-link"], 0, null, ["loc", [null, [57, 16], [59, 28]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [62, 62], [62, 65]]], 0, 0, 0, 0]], ["class", "row-link"], 1, null, ["loc", [null, [62, 16], [64, 28]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [67, 62], [67, 65]]], 0, 0, 0, 0]], ["class", "row-link"], 2, null, ["loc", [null, [67, 16], [69, 28]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [72, 62], [72, 65]]], 0, 0, 0, 0]], ["class", "row-link"], 3, null, ["loc", [null, [72, 16], [74, 28]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [77, 62], [77, 65]]], 0, 0, 0, 0]], ["class", "row-link"], 4, null, ["loc", [null, [77, 16], [79, 28]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [82, 62], [82, 65]]], 0, 0, 0, 0]], ["class", "row-link"], 5, null, ["loc", [null, [82, 16], [84, 28]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [87, 62], [87, 65]]], 0, 0, 0, 0]], ["class", "row-link"], 6, null, ["loc", [null, [87, 16], [91, 28]]]]],
          locals: ["opp"],
          templates: [child0, child1, child2, child3, child4, child5, child6]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 0
            },
            "end": {
              "line": 102,
              "column": 0
            }
          },
          "moduleName": "apem/pods/opportunities/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1, "class", "ui table ui-table table-head sortable");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tr");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          dom.setAttribute(el4, "class", "sorted");
          dom.setAttribute(el4, "id", "id_sort");
          dom.setAttribute(el4, "style", "width: 8%;touch-action: manipulation; -ms-touch-action: manipulation;");
          var el5 = dom.createTextNode("NAO #");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          dom.setAttribute(el4, "class", "sorted");
          dom.setAttribute(el4, "id", "created_at_sort");
          dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el5 = dom.createTextNode("Date Open");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          dom.setAttribute(el4, "class", "sorted");
          dom.setAttribute(el4, "id", "contact_name_sort");
          dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el5 = dom.createTextNode("Company");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          dom.setAttribute(el4, "class", "sorted");
          dom.setAttribute(el4, "id", "apem_sales_person_sort");
          dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el5 = dom.createTextNode("Sales Person");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          dom.setAttribute(el4, "class", "sorted");
          dom.setAttribute(el4, "id", "potential_annual_rev_sort");
          dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el5 = dom.createTextNode("Revenue");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          dom.setAttribute(el4, "class", "sorted");
          dom.setAttribute(el4, "id", "product_type_sort");
          dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el5 = dom.createTextNode("Prod Type");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          dom.setAttribute(el4, "class", "sorted");
          dom.setAttribute(el4, "id", "estimated_prod_date_sort");
          dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el5 = dom.createTextNode("Est. Prod Date");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "opp-table");
          var el2 = dom.createTextNode("\n\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("table");
          dom.setAttribute(el2, "class", "ui table ui-table table-body");
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tbody");
          dom.setAttribute(el3, "class", "opp-table-body");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 1, 1]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element1, [3]);
          var element4 = dom.childAt(element1, [5]);
          var element5 = dom.childAt(element1, [7]);
          var element6 = dom.childAt(element1, [9]);
          var element7 = dom.childAt(element1, [11]);
          var element8 = dom.childAt(element1, [13]);
          var element9 = dom.childAt(fragment, [3, 1, 1]);
          var morphs = new Array(9);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createElementMorph(element3);
          morphs[2] = dom.createElementMorph(element4);
          morphs[3] = dom.createElementMorph(element5);
          morphs[4] = dom.createElementMorph(element6);
          morphs[5] = dom.createElementMorph(element7);
          morphs[6] = dom.createElementMorph(element8);
          morphs[7] = dom.createMorphAt(element9, 1, 1);
          morphs[8] = dom.createMorphAt(element9, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["sortTable", "id"], [], ["loc", [null, [37, 42], [37, 69]]], 0, 0], ["element", "action", ["sortTable", "created_at"], [], ["loc", [null, [38, 50], [38, 85]]], 0, 0], ["element", "action", ["sortTable", "company"], [], ["loc", [null, [39, 52], [39, 84]]], 0, 0], ["element", "action", ["sortTable", "apem_sales_person"], [], ["loc", [null, [40, 57], [40, 99]]], 0, 0], ["element", "action", ["sortTable", "potential_annual_rev"], [], ["loc", [null, [41, 60], [41, 105]]], 0, 0], ["element", "action", ["sortTable", "product_type"], [], ["loc", [null, [42, 52], [42, 89]]], 0, 0], ["element", "action", ["sortTable", "estimated_prod_date"], [], ["loc", [null, [43, 59], [43, 103]]], 0, 0], ["block", "each", [["get", "model", ["loc", [null, [54, 18], [54, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [54, 10], [94, 19]]]], ["inline", "infinity-loader", [], ["infinityModel", ["subexpr", "@mut", [["get", "model", ["loc", [null, [95, 42], [95, 47]]], 0, 0, 0, 0]], [], [], 0, 0], "scrollable", ".fixed-content"], ["loc", [null, [95, 10], [95, 77]]], 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 105,
            "column": 0
          }
        },
        "moduleName": "apem/pods/opportunities/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "clss", "top attached ui menu");
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" !!!!!! Uncomment the below buttons if a grid view is to be added ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("  <div class=\"ui buttons column\">\n    <button class=\"ui labeled icon button white-button {{if (is-equal defaultView 'grid') 'active'}}\" {{action 'showGridView'}}>\n      <i class=\"block layout icon\"></i>Grid\n    </button>\n    <button class=\"ui labeled icon button white-button {{if (is-equal defaultView 'list') 'active'}}\" {{action 'showListView'}}>\n      <i class=\"list layout icon\"></i>List\n    </button>\n  </div> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui meta");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  revenue\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui meta");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  deals\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 5, 5);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [5, 1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [7, 1]), 0, 0);
        morphs[3] = dom.createMorphAt(fragment, 9, 9, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 11, 11, contextualElement);
        return morphs;
      },
      statements: [["inline", "adv-search", [], ["class", "column", "filterParams", ["subexpr", "@mut", [["get", "filterParams", ["loc", [null, [14, 17], [14, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "searchUsed", ["subexpr", "@mut", [["get", "isFiltering", ["loc", [null, [15, 15], [15, 26]]], 0, 0, 0, 0]], [], [], 0, 0], "doSearch", "filterOpportunities", "clearSearchFilter", "clearSearchFilter", "pullEntireCSV", "pullEntireCSV", "pullFilteredCSV", "pullFilteredCSV"], ["loc", [null, [12, 2], [19, 39]]], 0, 0], ["inline", "currency-format", [["get", "model.meta.total-revenue", ["loc", [null, [24, 26], [24, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [24, 8], [24, 52]]], 0, 0], ["content", "model.meta.total-records", ["loc", [null, [28, 8], [28, 36]]], 0, 0, 0, 0], ["block", "if", [["subexpr", "is-equal", [["get", "defaultView", ["loc", [null, [32, 16], [32, 27]]], 0, 0, 0, 0], "list"], [], ["loc", [null, [32, 6], [32, 35]]], 0, 0]], [], 0, null, ["loc", [null, [32, 0], [102, 7]]]], ["content", "outlet", ["loc", [null, [104, 0], [104, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("apem/pods/opportunities/loading/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "apem/pods/opportunities/loading/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui segment loading-indicator");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui active inverted dimmer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui text loader");
        var el4 = dom.createTextNode("Loading");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/opportunities/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    identity: _ember['default'].inject.service(),

    redirect: function redirect() {
      var _this = this;

      //let astor = this.store;
      var newOpportunity = this.store.createRecord('opportunity'),
          ident = this.get('identity').get('profile');
      // let theUser = ident.get('profile');
      if (ident.content !== null) {
        newOpportunity.set('user', ident);
        newOpportunity.save().then(function (savedOpportunity) {
          savedOpportunity.set('newRecord', true);
          _this.transitionTo('opportunities.opportunity.detail', savedOpportunity);
        });
      } else {
        (function () {
          var theUser = _this.get('identity').get('profile').then(function () {
            newOpportunity.set('user', theUser);

            newOpportunity.save().then(function (savedOpportunity) {
              savedOpportunity.set('newRecord', true);
              _this.transitionTo('opportunities.opportunity.detail', savedOpportunity);
            });
          }, function (error) {
            console.log(error);
          });
        })();
      }
    }
  });
});
define('apem/pods/opportunities/opportunity/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      deleteOpp: function deleteOpp() {
        this.get('model').deleteRecord();
        this.transitionToRoute('opportunities');
      }
    }
  });
});
define('apem/pods/opportunities/opportunity/detail/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    identity: _ember['default'].inject.service(),
    breadCrumb: null,

    setupController: function setupController(controller, model) {
      controller.set('model', model);
      controller.set('fields', this.store.findAll('field'));
      controller.set('users', this.store.findAll('user'));
    },

    actions: {
      cancelEdit: function cancelEdit() {
        this.transitionTo('opportunities');
      },
      copyRecord: function copyRecord(oldRecord) {
        var _this = this;

        var attrs = oldRecord.toJSON();

        var newrec = this.get('store').createRecord('opportunity', attrs);
        var sessionUser = this.get('identity').get('profile');
        newrec.set('user', sessionUser);

        newrec.save().then(function (data) {
          _this.transitionTo('opportunities.opportunity.detail', data);
        }, function (error) {
          console.log(error);
        });
      },

      onDelete: function onDelete(optRecord) {
        var _this2 = this;

        this.set('serverErrors', []);
        var errs = this.get('serverErrors');
        optRecord.destroyRecord().then(function () {
          _this2.transitionTo('opportunities');
          // myRouting.transitionToRoute('opportunities');
        }, function (error) {
          errs.addObject(error);
        });
      },

      onOptSave: function onOptSave(opt) {
        var _this3 = this;

        if (opt.get('user') == null) {
          var sessionUser = this.get('identity').get('profile');
          opt.set('user', sessionUser);
        }

        opt.set('draft', false);
        console.log('Updating Opportunity...');

        opt.save().then(function () {
          _this3.transitionTo('opportunities');
          console.log('Opportunity Saved');
        }, function (error) {
          console.log(error);
        });
      }
    }
  });
});
define("apem/pods/opportunities/opportunity/detail/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "apem/pods/opportunities/opportunity/detail/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui content");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "validation-errors");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "details");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [4, 29], [4, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 6], [4, 43]]], 0, 0], ["inline", "opportunities/opt-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [9, 12], [9, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "fields", ["subexpr", "@mut", [["get", "fields", ["loc", [null, [10, 13], [10, 19]]], 0, 0, 0, 0]], [], [], 0, 0], "users", ["subexpr", "@mut", [["get", "users", ["loc", [null, [11, 12], [11, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "cancelEdit", "cancelEdit", "onOptSave", "onOptSave", "onOptDelete", "onDelete", "onCopy", "copyRecord"], ["loc", [null, [8, 4], [15, 27]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/opportunities/opportunity/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    redirect: function redirect() {
      this.transitionTo('opportunities.opportunity.detail');
    }
  });
});
define('apem/pods/opportunities/opportunity/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('opportunity', params.id);
    },

    afterModel: function afterModel(model) {
      this.set('breadCrumb', { title: "NAO # " + model.get('id') });
    }
  });
});
define("apem/pods/opportunities/opportunity/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/pods/opportunities/opportunity/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/opportunities/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("apem/pods/opportunities/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/pods/opportunities/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/page-not-found/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("apem/pods/page-not-found/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "apem/pods/page-not-found/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("whoops!\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/users/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      onUserCreated: function onUserCreated() {
        console.log('USER CREATED');
        this.send('refreshModel');
      }
    }
  });
});
define('apem/pods/users/index/route', ['exports', 'ember', 'ember-cli-pagination/remote/route-mixin'], function (exports, _ember, _emberCliPaginationRemoteRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberCliPaginationRemoteRouteMixin['default'], {
    totalPagesParam: "meta.total-pages",
    totalRecordsParam: "meta.total-records",
    perPage: 25,
    breadCrumb: { title: 'User Management' },

    model: function model(params) {
      // returns a PagedRemoteArray
      return this.findPaged('user', params);
    },
    actions: {
      refreshModel: function refreshModel() {
        this.refresh();
      }
    }
  });
});
define("apem/pods/users/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "apem/pods/users/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui meta");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\nusers\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "model.meta.total-records", ["loc", [null, [2, 6], [2, 34]]], 0, 0, 0, 0], ["inline", "users/usr-table", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [6, 24], [6, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "didCreateUser", ["subexpr", "action", ["onUserCreated"], [], ["loc", [null, [6, 44], [6, 68]]], 0, 0]], ["loc", [null, [6, 0], [6, 70]]], 0, 0], ["content", "outlet", ["loc", [null, [8, 0], [8, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/pods/users/loading/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "apem/pods/users/loading/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui segment loading-indicator");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui active inverted dimmer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui text loader");
        var el4 = dom.createTextNode("Loading");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/users/new/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('user');
    }
  });
});
define("apem/pods/users/new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 4
            },
            "end": {
              "line": 35,
              "column": 4
            }
          },
          "moduleName": "apem/pods/users/new/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "userType", ["loc", [null, [34, 8], [34, 20]]], 0, 0, 0, 0]],
        locals: ["userType"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "apem/pods/users/new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2, "class", "subtitle");
        var el3 = dom.createTextNode("New User");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "validation-errors");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "details");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "username");
        var el4 = dom.createTextNode("Username:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui input");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "password");
        var el4 = dom.createTextNode("Password:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui input");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "verify_password");
        var el4 = dom.createTextNode("Verify Password:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui input");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "user_type");
        var el4 = dom.createTextNode("User Type:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui small button");
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      Create User\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [7]);
        var element2 = dom.childAt(element1, [33]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [4]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [12]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [20]), 1, 1);
        morphs[4] = dom.createMorphAt(element1, 28, 28);
        morphs[5] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [6, 29], [6, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 6], [6, 43]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.username", ["loc", [null, [13, 20], [13, 34]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [13, 6], [13, 36]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [20, 36], [20, 50]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [20, 6], [20, 52]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "model.passwordVerify", ["loc", [null, [27, 36], [27, 56]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [27, 6], [27, 58]]], 0, 0], ["block", "power-select", [], ["class", "ui dropdown input", "onchange", ["subexpr", "action", ["selectUserType"], [], ["loc", [null, [33, 55], [33, 80]]], 0, 0], "selected", ["subexpr", "@mut", [["get", "model.type", ["loc", [null, [33, 90], [33, 100]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", "Select User Type", "options", ["subexpr", "@mut", [["get", "userTypes", ["loc", [null, [33, 140], [33, 149]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [33, 4], [35, 21]]]], ["element", "action", ["createUser"], [], ["loc", [null, [38, 33], [38, 56]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/users/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("apem/pods/users/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/pods/users/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/pods/users/user/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      deleteUser: function deleteUser() {
        this.get('model').deleteRecord();
        this.transitionToRoute('users');
      }
    }
  });
});
define('apem/pods/users/user/detail/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    breadCrumb: null,
    setupController: function setupController(controller, model) {
      controller.set('model', model);
    },
    actions: {
      selectUserType: function selectUserType(type) {

        this.get('model').set('type', type);
      },

      editUser: function editUser() {
        var _this = this;

        // Create the user
        var user = this.controller.get('model');
        this.set('serverErrors', []);
        var errs = this.get('serverErrors');

        if (user.get('hasDirtyAttributes')) {
          console.log('Created User...');
          user.save().then(function () {
            _this.transitionTo('users');
          }, function (error) {
            errs.addObject(error);
          });
        }
      }
    }
  });
});
define("apem/pods/users/user/detail/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 4
            },
            "end": {
              "line": 38,
              "column": 4
            }
          },
          "moduleName": "apem/pods/users/user/detail/template.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "default text");
          var el2 = dom.createTextNode("Select User Type");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "dropdown icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-value", "Admin");
          var el3 = dom.createTextNode("\n          Admin\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "data-value", "User");
          var el3 = dom.createTextNode("\n          User\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: ["execute", "mapper"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 2
            },
            "end": {
              "line": 41,
              "column": 81
            }
          },
          "moduleName": "apem/pods/users/user/detail/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Cancel");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "apem/pods/users/user/detail/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "ui form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2, "class", "subtitle");
        var el3 = dom.createTextNode("Edit User");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "validation-errors");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Username:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Password:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Verify Password:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "user_type");
        var el4 = dom.createTextNode("User Type:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui small button");
        dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el3 = dom.createTextNode("Edit User");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [15]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [7]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [9]), 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [11]), 3, 3);
        morphs[5] = dom.createMorphAt(element0, 13, 13);
        morphs[6] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [4, 29], [4, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 6], [4, 43]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.username", ["loc", [null, [9, 18], [9, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "text"], ["loc", [null, [9, 4], [9, 46]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [14, 34], [14, 48]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [14, 4], [14, 50]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "model.passwordVerify", ["loc", [null, [18, 34], [18, 54]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [18, 4], [18, 56]]], 0, 0], ["block", "ui-dropdown", [], ["class", "search selection", "allowAdditions", false, "selected", ["subexpr", "@mut", [["get", "model.type", ["loc", [null, [25, 34], [25, 44]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "model.type", ["loc", [null, [26, 26], [26, 36]]], 0, 0, 0, 0]], [], ["loc", [null, [26, 21], [26, 37]]], 0, 0]], [], ["loc", [null, [26, 13], [26, 38]]], 0, 0]], 0, null, ["loc", [null, [24, 4], [38, 20]]]], ["block", "link-to", ["users"], ["tagName", "div", "class", "ui small button", "activeClass", ""], 1, null, ["loc", [null, [41, 2], [41, 93]]]], ["element", "action", ["editUser"], [], ["loc", [null, [42, 31], [42, 52]]], 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('apem/pods/users/user/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    redirect: function redirect() {
      this.transitionTo('users.user.detail');
    }
  });
});
define('apem/pods/users/user/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('user', params.id);
    },

    afterModel: function afterModel(model) {
      this.set('breadCrumb', { title: model.get('username') });
    }
  });
});
define("apem/pods/users/user/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/pods/users/user/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('apem/router', ['exports', 'ember', 'apem/config/environment'], function (exports, _ember, _apemConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _apemConfigEnvironment['default'].locationType
  });

  this.IndexRoute = _ember['default'].Route.extend({
    redirect: function redirect() {
      // this redirects / to /dashboard
      this.transitionTo('opportunities');
    }
  });

  Router.map(function () {
    this.route('home', { path: '/', resetNamespace: true }, function () {

      /* Users Routes */
      this.route('users', { resetNamespace: true }, function () {
        this.route('user', { path: ':id' }, function () {
          this.route('detail', { path: 'detail' });
          // 404 it is
          this.route('page-not-found', { path: '/*wildcard' });
        });
        this.route('new', {});
      });

      /* Opportunities Routes */
      this.route('opportunities', { resetNamespace: true }, function () {
        this.route('opportunity', { path: ':id' }, function () {
          this.route('detail', { path: 'detail' });
          // 404 it is
          this.route('page-not-found', { path: '/*wildcard' });
        });
        this.route('new', {});
        // 404 it is
        this.route('page-not-found', { path: '/*wildcard' });
      });

      /* Fields Routes */
      this.route('fields', { resetNamespace: true }, function () {
        this.route('field', { path: ':id' }, function () {
          this.route('detail', { path: 'detail' });
        });
        this.route('new', {});
      });

      /* User Settings Routes */
      this.route('profile', { resetNamespace: true });

      // 404 it is
      this.route('page-not-found', { path: '/*wildcard' });
    });
  });

  _ember['default'].Router.reopen({ rootURL: '/dashboard' });

  exports['default'] = Router;
});
define('apem/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('apem/services/identity', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    store: _ember['default'].inject.service(),

    profile: _ember['default'].computed(function () {
      return this.get('store').queryRecord('profile', {});
    })
  });
});
define('apem/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _emberIntlServicesIntl) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlServicesIntl['default'];
    }
  });
});
define('apem/services/moment', ['exports', 'ember', 'apem/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _apemConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_apemConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('apem/services/uploader', ['exports', 'ember-plupload/services/uploader'], function (exports, _emberPluploadServicesUploader) {
  exports['default'] = _emberPluploadServicesUploader['default'];
});
define("apem/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/happy-splitter-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 40
          }
        },
        "moduleName": "apem/templates/components/happy-splitter-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "happy-splitter-thumb");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/infinite-scroll-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 2
              }
            },
            "moduleName": "apem/templates/components/infinite-scroll-container.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h3");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("hr");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("hr");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "container-body-text");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("hr");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [5]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            morphs[1] = dom.createAttrMorph(element0, 'src');
            morphs[2] = dom.createUnsafeMorphAt(dom.childAt(fragment, [9]), 1, 1);
            return morphs;
          },
          statements: [["content", "post.title", ["loc", [null, [4, 6], [4, 20]]], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "post.imageUrl", ["loc", [null, [7, 16], [7, 29]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "post.body", ["loc", [null, [10, 6], [10, 21]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "apem/templates/components/infinite-scroll-container.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "post.imageUrl", ["loc", [null, [2, 8], [2, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 2], [13, 9]]]]],
        locals: ["post"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "apem/templates/components/infinite-scroll-container.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [1, 8], [1, 13]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [14, 9]]]], ["inline", "infinite-scroll", [], ["scrollContainer", ["subexpr", "@mut", [["get", "scrollContainer", ["loc", [null, [15, 34], [15, 49]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [15, 0], [15, 51]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("apem/templates/components/infinite-scroll", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "apem/templates/components/infinite-scroll.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "ember-ic-you", [], ["crossedTheLine", "performInfinite", "triggerDistance", ["subexpr", "@mut", [["get", "triggerDistance", ["loc", [null, [2, 66], [2, 81]]], 0, 0, 0, 0]], [], [], 0, 0], "scrollContainer", ["subexpr", "@mut", [["get", "scrollContainer", ["loc", [null, [2, 98], [2, 113]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 2], [2, 115]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 9
          }
        },
        "moduleName": "apem/templates/components/infinite-scroll.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "infiniteScrollAvailable", ["loc", [null, [1, 6], [1, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("apem/templates/components/infinity-loader", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "apem/templates/components/infinity-loader.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "apem/templates/components/infinity-loader.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "loadedText", ["loc", [null, [5, 10], [5, 24]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "apem/templates/components/infinity-loader.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "loadingText", ["loc", [null, [7, 10], [7, 25]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "apem/templates/components/infinity-loader.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "infinityModel.reachedInfinity", ["loc", [null, [4, 8], [4, 37]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 2], [8, 9]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "apem/templates/components/infinity-loader.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [9, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("apem/templates/components/multiselect-checkboxes", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "apem/templates/components/multiselect-checkboxes.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "checkbox.label", ["loc", [null, [3, 12], [3, 26]]], 0, 0, 0, 0], ["get", "checkbox.isSelected", ["loc", [null, [3, 27], [3, 46]]], 0, 0, 0, 0], ["get", "checkbox.value", ["loc", [null, [3, 47], [3, 61]]], 0, 0, 0, 0]], [], ["loc", [null, [3, 4], [3, 63]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 2
              }
            },
            "moduleName": "apem/templates/components/multiselect-checkboxes.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(element0, 1, 1);
            morphs[1] = dom.createMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "checkbox.isSelected", ["loc", [null, [7, 40], [7, 59]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 69], [7, 77]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 8], [7, 79]]], 0, 0], ["content", "checkbox.label", ["loc", [null, [8, 8], [8, 26]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "apem/templates/components/multiselect-checkboxes.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [2, 8], [2, 16]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [11, 9]]]]],
        locals: ["checkbox"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "apem/templates/components/multiselect-checkboxes.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "checkboxes", ["loc", [null, [1, 8], [1, 18]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [12, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("apem/templates/components/page-numbers", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "apem/templates/components/page-numbers.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "arrow prev enabled-arrow");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "#");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("«");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [["element", "action", ["incrementPage", -1], [], ["loc", [null, [5, 20], [5, 49]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 11,
              "column": 4
            }
          },
          "moduleName": "apem/templates/components/page-numbers.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "arrow prev disabled");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "#");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("«");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["element", "action", ["incrementPage", -1], [], ["loc", [null, [9, 20], [9, 49]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 6
              },
              "end": {
                "line": 18,
                "column": 6
              }
            },
            "moduleName": "apem/templates/components/page-numbers.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "dots disabled");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            var el3 = dom.createTextNode("...");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 6
              },
              "end": {
                "line": 23,
                "column": 6
              }
            },
            "moduleName": "apem/templates/components/page-numbers.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "active page-number");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "item.page", ["loc", [null, [21, 13], [21, 26]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 6
              },
              "end": {
                "line": 27,
                "column": 6
              }
            },
            "moduleName": "apem/templates/components/page-numbers.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "page-number");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "href", "#");
            dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element2);
            morphs[1] = dom.createMorphAt(element2, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["pageClicked", ["get", "item.page", ["loc", [null, [25, 45], [25, 54]]], 0, 0, 0, 0]], [], ["loc", [null, [25, 22], [25, 56]]], 0, 0], ["content", "item.page", ["loc", [null, [25, 57], [25, 70]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 28,
              "column": 4
            }
          },
          "moduleName": "apem/templates/components/page-numbers.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "item.dots", ["loc", [null, [14, 12], [14, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 6], [18, 13]]]], ["block", "if", [["get", "item.current", ["loc", [null, [19, 12], [19, 24]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [19, 6], [27, 13]]]]],
        locals: ["item"],
        templates: [child0, child1, child2]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 4
            },
            "end": {
              "line": 34,
              "column": 4
            }
          },
          "moduleName": "apem/templates/components/page-numbers.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "arrow next enabled-arrow");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "#");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("»");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["element", "action", ["incrementPage", 1], [], ["loc", [null, [32, 20], [32, 48]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 4
            },
            "end": {
              "line": 38,
              "column": 4
            }
          },
          "moduleName": "apem/templates/components/page-numbers.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "arrow next disabled");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "#");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createTextNode("»");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["incrementPage", 1], [], ["loc", [null, [36, 20], [36, 48]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "apem/templates/components/page-numbers.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "pagination-centered");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "pagination");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element5, 1, 1);
        morphs[1] = dom.createMorphAt(element5, 3, 3);
        morphs[2] = dom.createMorphAt(element5, 5, 5);
        return morphs;
      },
      statements: [["block", "if", [["get", "canStepBackward", ["loc", [null, [3, 10], [3, 25]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [11, 11]]]], ["block", "each", [["get", "pageItems", ["loc", [null, [13, 12], [13, 21]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [13, 4], [28, 13]]]], ["block", "if", [["get", "canStepForward", ["loc", [null, [30, 10], [30, 24]]], 0, 0, 0, 0]], [], 3, 4, ["loc", [null, [30, 4], [38, 11]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("apem/templates/components/pl-uploader", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/templates/components/pl-uploader.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "queue", ["loc", [null, [1, 8], [1, 13]]], 0, 0, 0, 0], ["get", "dropzone", ["loc", [null, [1, 14], [1, 22]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 24]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-accordion", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-accordion.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'tabindex');
        morphs[3] = dom.createAttrMorph(element0, 'checked');
        morphs[4] = dom.createAttrMorph(element0, 'disabled');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "name", ["get", "name", ["loc", [null, [2, 14], [2, 18]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "tabindex", ["get", "tabindex", ["loc", [null, [3, 18], [3, 26]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "checked", ["subexpr", "unbound", [["get", "checked", ["loc", [null, [4, 25], [4, 32]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [4, 34]]], 0, 0], 0, 0, 0, 0], ["attribute", "disabled", ["subexpr", "unbound", [["get", "disabled", ["loc", [null, [5, 26], [5, 34]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [5, 36]]], 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [6, 7], [6, 16]]], 0, 0, 0, 0], ["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [7, 8], [7, 26]]], 0, 0]], [], ["loc", [null, [7, 0], [7, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-dimmer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "apem/templates/components/ui-dimmer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 47
          }
        },
        "moduleName": "apem/templates/components/ui-dropdown.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0], ["subexpr", "action", ["mapping"], [], ["loc", [null, [1, 27], [1, 45]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 47]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-embed", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-embed.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-nag", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-nag.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-popup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-popup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-radio.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("input");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        if (this.cachedFragment) {
          dom.repairClonedNode(element0, [], true);
        }
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element0, 'type');
        morphs[1] = dom.createAttrMorph(element0, 'name');
        morphs[2] = dom.createAttrMorph(element0, 'tabindex');
        morphs[3] = dom.createAttrMorph(element0, 'checked');
        morphs[4] = dom.createAttrMorph(element0, 'disabled');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "type", ["get", "type", ["loc", [null, [1, 14], [1, 18]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "name", ["get", "name", ["loc", [null, [2, 14], [2, 18]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "tabindex", ["get", "tabindex", ["loc", [null, [3, 18], [3, 26]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "checked", ["subexpr", "unbound", [["get", "checked", ["loc", [null, [4, 25], [4, 32]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [4, 34]]], 0, 0], 0, 0, 0, 0], ["attribute", "disabled", ["subexpr", "unbound", [["get", "disabled", ["loc", [null, [5, 26], [5, 34]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [5, 36]]], 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [6, 7], [6, 16]]], 0, 0, 0, 0], ["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [7, 8], [7, 26]]], 0, 0]], [], ["loc", [null, [7, 0], [7, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-rating", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-rating.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-shape", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-shape.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-sidebar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-sidebar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("apem/templates/components/ui-sticky", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "moduleName": "apem/templates/components/ui-sticky.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "action", ["execute"], [], ["loc", [null, [1, 8], [1, 26]]], 0, 0]], [], ["loc", [null, [1, 0], [1, 28]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('apem/utils/intl/missing-message', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = missingMessage;
  var logger = _ember['default'].Logger;

  function missingMessage(key, locales) {
    if (!locales) {
      logger.warn('ember-intl: no locale has been set. https://github.com/yahoo/ember-intl#configure-application-wide-locale');
    } else {
      logger.warn('ember-intl: translation: \'' + key + '\' on locale: \'' + locales.join(', ') + '\' was not found.');
    }

    return 'Missing translation: ' + key;
  }
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('apem/config/environment', ['ember'], function(Ember) {
  var prefix = 'apem';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("apem/app")["default"].create({"usingCors":true,"apiUrl":"http://apem.herokuapp.com","name":"apem","version":"0.0.0+eac4c68f"});
}

/* jshint ignore:end */
//# sourceMappingURL=apem.map