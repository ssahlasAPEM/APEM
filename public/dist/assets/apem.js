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
    var formatted = parseFloat(params, 10).toFixed(2);

    return '$' + formatted;
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
define('apem/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('apem/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
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
    draft: _emberData['default'].attr('boolean', { defaultValue: false }),
    status: _emberData['default'].attr('string', { defaultValue: null }),
    stage: _emberData['default'].attr('string', { defaultValue: 'quote' }),
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
    catalogProduct: _emberData['default'].attr('string', { defaultValue: null }),
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
    updatedAt: _emberData['default'].attr('string', { defaultValue: null })
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
        dom.setAttribute(el1, "class", "ui-main pusher");
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
        dom.setAttribute(el2, "class", "ui-content");
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

    actions: {
      onSearchClick: function onSearchClick() {
        //todo write search quesry here ?
      }
    }
  });

  // import layout from '../templates/components/infinity-loader';
  // import infinityLoader from 'ember-infinity/components/infinity-loader';
  //
  // export default infinityLoader.extend({
  //   layout: layout
  // });
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
                "line": 10,
                "column": 2
              },
              "end": {
                "line": 52,
                "column": 2
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
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "dropdown icon");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "menu adv-search-menu");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "ui field");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "item fake-item");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "ui field gap1");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "menu-label");
            var el4 = dom.createTextNode("Date Entered");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "ui field gap1");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "menu-label");
            var el4 = dom.createTextNode("Date Range");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
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
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "ui field gap1");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3, "class", "menu-label ");
            var el4 = dom.createTextNode("Estimated Production Date");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
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
            dom.setAttribute(el3, "class", "ui buttons gap1");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("button");
            dom.setAttribute(el4, "class", "ui button");
            dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
            var el5 = dom.createTextNode("Won");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("button");
            dom.setAttribute(el4, "class", "ui button");
            dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
            var el5 = dom.createTextNode("Lost");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("button");
            dom.setAttribute(el4, "class", "ui button");
            dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
            var el5 = dom.createTextNode("Backburner");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
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
            var el4 = dom.createElement("button");
            dom.setAttribute(el4, "class", "ui button");
            dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
            var el5 = dom.createTextNode("Open");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("button");
            dom.setAttribute(el4, "class", "ui button");
            dom.setAttribute(el4, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
            var el5 = dom.createTextNode("Closed");
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
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [3]);
            var element1 = dom.childAt(element0, [5]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
            morphs[2] = dom.createMorphAt(element1, 4, 4);
            morphs[3] = dom.createMorphAt(element1, 6, 6);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 4, 4);
            return morphs;
          },
          statements: [["inline", "ui-checkbox", [], ["label", "New (last 30 days)", "checked", true, "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "checked", ["loc", [null, [15, 84], [15, 91]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 79], [15, 92]]], 0, 0]], [], ["loc", [null, [15, 71], [15, 93]]], 0, 0]], ["loc", [null, [15, 8], [15, 95]]], 0, 0], ["inline", "custom-date-picker", [], ["btnLabel", ""], ["loc", [null, [21, 8], [21, 42]]], 0, 0], ["inline", "custom-date-picker", [], ["btnLabel", "Start"], ["loc", [null, [25, 8], [25, 47]]], 0, 0], ["inline", "custom-date-picker", [], ["btnLabel", "End", "class", "gap1"], ["loc", [null, [26, 8], [26, 58]]], 0, 0], ["inline", "custom-date-picker", [], ["btnLabel", ""], ["loc", [null, [30, 8], [30, 42]]], 0, 0]],
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
              "line": 53,
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
          var el2 = dom.createElement("input");
          dom.setAttribute(el2, "class", "prompt search advanced-search");
          dom.setAttribute(el2, "type", "text");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n  ");
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
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "button", "value", "Search", "class", "ui button adv-search-btn", "click", ["subexpr", "action", ["onSearchClick"], [], ["loc", [null, [8, 78], [8, 102]]], 0, 0]], ["loc", [null, [8, 2], [8, 104]]], 0, 0], ["block", "ui-dropdown", [], ["class", "ui floating dropdown icon button adv-search-dropdown"], 0, null, ["loc", [null, [10, 2], [52, 18]]]]],
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
        "moduleName": "apem/pods/components/adv-search/template.hbs"
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
      statements: [["block", "ui-search", [], ["class", "advanced-search-component"], 0, null, ["loc", [null, [1, 0], [53, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/confirm-delete/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    users: _ember['default'].inject.service(),

    recordType: '',

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
        dom.setAttribute(el2, "class", "trash icon");
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
      statements: [["attribute", "class", ["concat", ["ui right floated small button ", ["subexpr", "if", [["get", "isDisabled", ["loc", [null, [1, 50], [1, 60]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [1, 45], [1, 73]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["openConfirmation"], [], ["loc", [null, [1, 75], [1, 104]]], 0, 0], ["content", "recordType", ["loc", [null, [2, 35], [2, 49]]], 0, 0, 0, 0], ["block", "ui-modal", [], ["name", "confirm-delete", "class", "modal confirm-delete-modal"], 0, null, ["loc", [null, [5, 0], [14, 13]]]], ["content", "yield", ["loc", [null, [15, 0], [15, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/custom-date-picker/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    attributeBindings: ['btnLabel'],
    classNameBindings: ['class'],
    className: 'custom-date-picker',
    actions: {
      updateDate: function updateDate() {},
      openDatepicker: function openDatepicker() {
        this.$(".date-picker__button").click();
      }
    }
  });
});
define("apem/pods/components/custom-date-picker/template", ["exports"], function (exports) {
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "date-picker", [], ["action", ["subexpr", "action", ["updateDate"], [], ["loc", [null, [1, 21], [1, 42]]], 0, 0], "placeholder", "", "buttonClasses", "date-picker-btn"], ["loc", [null, [1, 0], [1, 91]]], 0, 0], ["element", "action", ["openDatepicker"], [], ["loc", [null, [2, 46], [2, 73]]], 0, 0], ["content", "btnLabel", ["loc", [null, [3, 2], [3, 14]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
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
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
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
          var el1 = dom.createTextNode("      ");
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
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
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
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "fld.label", ["loc", [null, [16, 10], [16, 23]]], 0, 0, 0, 0], ["inline", "input", [], ["type", "checkbox", "class", "", "checked", ["subexpr", "@mut", [["get", "fld.visible", ["loc", [null, [19, 51], [19, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "change", ["subexpr", "action", ["onVisibleChange", ["get", "fld", ["loc", [null, [19, 96], [19, 99]]], 0, 0, 0, 0]], [], ["loc", [null, [19, 70], [19, 100]]], 0, 0]], ["loc", [null, [19, 10], [19, 102]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "class", "", "checked", ["subexpr", "mut", [["get", "fld.required", ["loc", [null, [22, 56], [22, 68]]], 0, 0, 0, 0]], [], ["loc", [null, [22, 51], [22, 69]]], 0, 0], "disabled", ["subexpr", "is-equal", [["get", "fld.visible", ["loc", [null, [22, 89], [22, 100]]], 0, 0, 0, 0], false], [], ["loc", [null, [22, 79], [22, 107]]], 0, 0], "change", ["subexpr", "action", ["onRequiredChange", ["get", "fld", ["loc", [null, [22, 142], [22, 145]]], 0, 0, 0, 0]], [], ["loc", [null, [22, 115], [22, 146]]], 0, 0]], ["loc", [null, [22, 10], [22, 148]]], 0, 0]],
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
            "line": 30,
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
        dom.setAttribute(el1, "class", "ui table ui-table");
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
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [13, 12], [13, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [13, 4], [25, 13]]]]],
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
        on: 'blur',
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
          dom.setAttribute(el3, "class", "ui button right floated green");
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
        statements: [["content", "sessionUser.username", ["loc", [null, [6, 63], [6, 87]]], 0, 0, 0, 0], ["inline", "input", [], ["name", "mppassword", "value", ["subexpr", "@mut", [["get", "sessionUser.password", ["loc", [null, [13, 40], [13, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "password"], ["loc", [null, [13, 8], [13, 79]]], 0, 0], ["inline", "input", [], ["name", "mpPasswordVerify", "value", ["subexpr", "@mut", [["get", "sessionUser.passwordVerify", ["loc", [null, [18, 46], [18, 72]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "password"], ["loc", [null, [18, 8], [18, 90]]], 0, 0], ["element", "action", ["submitNewPassword"], [], ["loc", [null, [21, 49], [21, 79]]], 0, 0], ["element", "action", ["cancelModal"], [], ["loc", [null, [22, 43], [22, 67]]], 0, 0], ["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [29, 29], [29, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [29, 6], [29, 43]]], 0, 0]],
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
define('apem/pods/components/opportunities/opp-table/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['opp-table'],
    model: null,

    init: function init() {
      this._super.apply(this, arguments);
    }
  });
});
define("apem/pods/components/opportunities/opp-table/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 10
              },
              "end": {
                "line": 18,
                "column": 10
              }
            },
            "moduleName": "apem/pods/components/opportunities/opp-table/template.hbs"
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
          statements: [["content", "opp.id", ["loc", [null, [17, 12], [17, 22]]], 0, 0, 0, 0]],
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
                "line": 21,
                "column": 10
              },
              "end": {
                "line": 23,
                "column": 10
              }
            },
            "moduleName": "apem/pods/components/opportunities/opp-table/template.hbs"
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
          statements: [["content", "opp.apemSalesPerson", ["loc", [null, [22, 12], [22, 35]]], 0, 0, 0, 0]],
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
                "line": 26,
                "column": 10
              },
              "end": {
                "line": 28,
                "column": 10
              }
            },
            "moduleName": "apem/pods/components/opportunities/opp-table/template.hbs"
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
          statements: [["inline", "currency-format", [["get", "opp.potentialAnnualRev", ["loc", [null, [27, 30], [27, 52]]], 0, 0, 0, 0]], [], ["loc", [null, [27, 12], [27, 54]]], 0, 0]],
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
                "line": 31,
                "column": 10
              },
              "end": {
                "line": 33,
                "column": 10
              }
            },
            "moduleName": "apem/pods/components/opportunities/opp-table/template.hbs"
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
          statements: [["content", "opp.productType", ["loc", [null, [32, 12], [32, 31]]], 0, 0, 0, 0]],
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
              "line": 36,
              "column": 4
            }
          },
          "moduleName": "apem/pods/components/opportunities/opp-table/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
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
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
          return morphs;
        },
        statements: [["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [16, 56], [16, 59]]], 0, 0, 0, 0]], ["class", "row-link"], 0, null, ["loc", [null, [16, 10], [18, 22]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [21, 56], [21, 59]]], 0, 0, 0, 0]], ["class", "row-link"], 1, null, ["loc", [null, [21, 10], [23, 22]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [26, 56], [26, 59]]], 0, 0, 0, 0]], ["class", "row-link"], 2, null, ["loc", [null, [26, 10], [28, 22]]]], ["block", "link-to", ["opportunities.opportunity.detail", ["get", "opp", ["loc", [null, [31, 56], [31, 59]]], 0, 0, 0, 0]], ["class", "row-link"], 3, null, ["loc", [null, [31, 10], [33, 22]]]]],
        locals: ["opp"],
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
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "apem/pods/components/opportunities/opp-table/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "ui table ui-table");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("NAO #");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Sales Person");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Revenue");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Prod Type");
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [13, 12], [13, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [13, 4], [36, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('apem/pods/components/opportunities/opt-form/component', ['exports', 'ember', 'ember-group-by'], function (exports, _ember, _emberGroupBy) {
  exports['default'] = _ember['default'].Component.extend({
    identity: _ember['default'].inject.service(),
    // routing: Ember.inject.service('-routing'),

    //used addon ember-group-by to group our fields array by model attr group.
    fieldsByGroup: (0, _emberGroupBy['default'])('fields', 'group'),
    classNames: ['opp-table'],
    model: null,
    fields: null,

    //possible opportunity stages - an array used to controll and properly render the stage steps in the form
    stages: [{ 'label': 'quote', 'id': 1 }, { 'label': 'sample', 'id': 2 }, { 'label': 'approval', 'id': 3 }, { 'label': 'production', 'id': 4 }],

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
            requiredFormValidations[fieldName] = 'empty';
            //r: for more detailed validation this structure should be used:
            // {
            //   identifier:fieldName,
            //   rules:[
            //     {
            //       type:'empty',
            //       prompt:'Please enter a ' + fieldName
            //     }
            //   ]
            // }
            // );
          }
        });

        //add validation to form
        _ember['default'].$('.opportunity-form').form({
          inline: false,
          on: 'blur',
          fields: requiredFormValidations
        });

        //ensure prevent default behavior...because semantic and ember work well together on occasion..
        _ember['default'].$('.opportunity-form').submit(function () /*e*/{
          //e.preventDefault(); usually use this, but below works best here.
          return false;
        });
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
      onDropdownSelect: function onDropdownSelect(fieldName, selectedValue) {
        var opt = this.get('model');
        opt.set(fieldName, selectedValue);
      },

      deleteOpt: function deleteOpt() {
        var opt = this.get('model');
        this.sendAction('onOptDelete', opt);
        // console.log('delete opt method reached!');
      },

      onCancelOptClick: function onCancelOptClick() {
        console.log('cancel opt method reached!');
      },

      saveDraft: function saveDraft() {
        var opt = this.get('model');
        opt.set('draft', true);
        this.doSave();
      },

      updateRecord: function updateRecord() {
        this.doSave();
      }
    },

    doSave: function doSave() {
      var _this = this;

      //Ember.$('.opportunity-form').form('validate');
      var opt = this.get('model');
      var hasErrors = _ember['default'].$('.field.error');
      //form saves if there are no missing required fields, or if it's a draft.
      if (hasErrors.length === 0 || opt.get('draft') === true) {
        (function () {
          // Update the opportunity
          _this.set('serverErrors', []);
          var errs = _this.get('serverErrors'),
              sessionUser = _this.get('identity').get('profile');
          // let myRouting = this.get('routing');
          if (opt.get('hasDirtyAttributes')) {
            opt.set('user', sessionUser);

            console.log('Updating Opportunity...');

            opt.save().then(function () {
              _this.sendAction('onOptSave');
              console.log('Opportunity Saved');
            }, function (error) {
              errs.addObject(error);
            });
          }
        })();
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
              "column": 6
            },
            "end": {
              "line": 12,
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
          var el1 = dom.createComment(" {{input type=\"button\" value=\"Delete\" class=\"ui button right floated\" click=(action \"onDeleteOptClick\")}} ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
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
        statements: [["inline", "confirm-delete", [], ["isDisabled", ["subexpr", "@mut", [["get", "disableDelete", ["loc", [null, [7, 36], [7, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "title", "Confirm Delete", "recordType", "Opportunity", "message", "The selected opportunity will be deleted. Continue?", "onConfirmDelete", "deleteOpt"], ["loc", [null, [7, 8], [11, 40]]], 0, 0]],
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
              "line": 21,
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
          var el1 = dom.createTextNode("        Cancel\n");
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
        var child0 = (function () {
          var child0 = (function () {
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
                          "column": 20
                        },
                        "end": {
                          "line": 61,
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
                      var element0 = dom.childAt(fragment, [1]);
                      var morphs = new Array(2);
                      morphs[0] = dom.createAttrMorph(element0, 'data-value');
                      morphs[1] = dom.createMorphAt(element0, 1, 1);
                      return morphs;
                    },
                    statements: [["attribute", "data-value", ["concat", [["get", "item", ["loc", [null, [58, 54], [58, 58]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "item", ["loc", [null, [59, 24], [59, 32]]], 0, 0, 0, 0]],
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
                        "line": 53,
                        "column": 16
                      },
                      "end": {
                        "line": 63,
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
                    var el1 = dom.createTextNode("                  ");
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
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
                    return morphs;
                  },
                  statements: [["block", "each", [["get", "field.options", ["loc", [null, [57, 28], [57, 41]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [57, 20], [61, 29]]]]],
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
                      "line": 52,
                      "column": 14
                    },
                    "end": {
                      "line": 64,
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
                statements: [["block", "ui-dropdown", [], ["class", "fluid selection", "selected", ["subexpr", "@mut", [["get", "field.value", ["loc", [null, [53, 64], [53, 75]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", ["onDropdownSelect", ["get", "field.name", ["loc", [null, [53, 112], [53, 122]]], 0, 0, 0, 0]], [], ["loc", [null, [53, 85], [53, 123]]], 0, 0]], 0, null, ["loc", [null, [53, 16], [63, 32]]]]],
                locals: [],
                templates: [child0]
              };
            })();
            var child1 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 64,
                      "column": 14
                    },
                    "end": {
                      "line": 66,
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
                statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "field.name", ["loc", [null, [65, 29], [65, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "mut", [["subexpr", "get", [["get", "model", ["loc", [null, [65, 56], [65, 61]]], 0, 0, 0, 0], ["get", "field.name", ["loc", [null, [65, 62], [65, 72]]], 0, 0, 0, 0]], [], ["loc", [null, [65, 51], [65, 73]]], 0, 0]], [], ["loc", [null, [65, 46], [65, 74]]], 0, 0], "type", "text"], ["loc", [null, [65, 16], [65, 88]]], 0, 0]],
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
                    "line": 49,
                    "column": 10
                  },
                  "end": {
                    "line": 68,
                    "column": 10
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
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "field");
                var el2 = dom.createTextNode("\n              ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("label");
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("            ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n          ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element1 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
                morphs[1] = dom.createMorphAt(element1, 3, 3);
                return morphs;
              },
              statements: [["content", "field.label", ["loc", [null, [51, 21], [51, 36]]], 0, 0, 0, 0], ["block", "if", [["subexpr", "is-equal", [["get", "field.type", ["loc", [null, [52, 30], [52, 40]]], 0, 0, 0, 0], "dropdown"], [], ["loc", [null, [52, 20], [52, 52]]], 0, 0]], [], 0, 1, ["loc", [null, [52, 14], [66, 21]]]]],
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
                  "line": 46,
                  "column": 8
                },
                "end": {
                  "line": 69,
                  "column": 8
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
              var el1 = dom.createComment(" we only add a form field if it is visible. ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment(" Todo: Ask what to do with form fields which were previously visible and have values. ");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment(" END if field visible");
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
            statements: [["block", "if", [["get", "field.visible", ["loc", [null, [49, 16], [49, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [49, 10], [68, 17]]]]],
            locals: ["field"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 4
              },
              "end": {
                "line": 71,
                "column": 4
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
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h3");
            dom.setAttribute(el1, "class", "ui dividing header");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["content", "group.value", ["loc", [null, [44, 37], [44, 52]]], 0, 0, 0, 0], ["block", "each", [["get", "group.items", ["loc", [null, [46, 16], [46, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [46, 8], [69, 17]]]]],
          locals: ["group"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 2
            },
            "end": {
              "line": 72,
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
        statements: [["block", "each", [["get", "fieldsByGroup", ["loc", [null, [43, 12], [43, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [43, 4], [71, 13]]]]],
        locals: [],
        templates: [child0]
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
              "column": 2
            },
            "end": {
              "line": 74,
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
            "line": 85,
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
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "ui form opportunity-form");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" HEADER ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "top attached header");
        var el3 = dom.createComment("fixed");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3, "class", "ui left floated header");
        var el4 = dom.createTextNode("NAO #");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" <button class=\"ui submit button small right floated\" {{action 'updateRecord'}}>Save</button> ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui error message");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" STEPS FIELD ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" STATUS FIELD ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "field gap1");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("Status");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui buttons status-group-btns");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <ul>\n{{#each-in attributes as |key value|}}\n    <div class=\"field\">\n      <label>{{key}}</label>\n      {{input type=\"text\" name=key value=value}}\n    </div>\n    {{/each-in}}  </ul> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(element2, [3]);
        var element4 = dom.childAt(element2, [11, 3]);
        var morphs = new Array(11);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [2]), 1, 1);
        morphs[1] = dom.createMorphAt(element3, 4, 4);
        morphs[2] = dom.createMorphAt(element3, 6, 6);
        morphs[3] = dom.createMorphAt(element3, 10, 10);
        morphs[4] = dom.createMorphAt(element3, 12, 12);
        morphs[5] = dom.createMorphAt(element2, 7, 7);
        morphs[6] = dom.createMorphAt(element4, 1, 1);
        morphs[7] = dom.createMorphAt(element4, 3, 3);
        morphs[8] = dom.createMorphAt(element4, 5, 5);
        morphs[9] = dom.createMorphAt(element2, 13, 13);
        morphs[10] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "model.id", ["loc", [null, [4, 44], [4, 56]]], 0, 0, 0, 0], ["block", "if", [["subexpr", "is-equal", [["get", "identity.profile.type", ["loc", [null, [5, 22], [5, 43]]], 0, 0, 0, 0], "Admin"], [], ["loc", [null, [5, 12], [5, 52]]], 0, 0]], [], 0, null, ["loc", [null, [5, 6], [12, 13]]]], ["inline", "input", [], ["type", "button", "value", "Save as Draft", "class", "ui button small right floated", "click", ["subexpr", "action", ["saveDraft"], [], ["loc", [null, [15, 94], [15, 114]]], 0, 0]], ["loc", [null, [15, 6], [15, 116]]], 0, 0], ["inline", "input", [], ["type", "button", "value", "Save", "class", "ui submit button small right floated", "click", ["subexpr", "action", ["updateRecord"], [], ["loc", [null, [17, 92], [17, 115]]], 0, 0]], ["loc", [null, [17, 6], [17, 117]]], 0, 0], ["block", "link-to", ["opportunities"], ["tagName", "div", "class", "ui small button right floated", "activeClass", "", "click", ["subexpr", "action", ["onCancelOptClick"], [], ["loc", [null, [19, 106], [19, 133]]], 0, 0]], 1, null, ["loc", [null, [19, 6], [21, 18]]]], ["inline", "opportunities/stage-step", [], ["stageSteps", ["subexpr", "@mut", [["get", "stages", ["loc", [null, [30, 40], [30, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "opt", ["subexpr", "@mut", [["get", "model", ["loc", [null, [30, 51], [30, 56]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [30, 2], [30, 58]]], 0, 0], ["inline", "input", [], ["type", "button", "name", "status", "value", "Backburner", "class", "ui button", "click", ["subexpr", "action", [["subexpr", "mut", [["get", "model.status", ["loc", [null, [36, 98], [36, 110]]], 0, 0, 0, 0]], [], ["loc", [null, [36, 93], [36, 111]]], 0, 0]], ["value", "target.value"], ["loc", [null, [36, 85], [36, 133]]], 0, 0]], ["loc", [null, [36, 6], [36, 136]]], 0, 0], ["inline", "input", [], ["type", "button", "name", "status", "value", "Won", "class", "ui button", "click", ["subexpr", "action", [["subexpr", "mut", [["get", "model.status", ["loc", [null, [37, 91], [37, 103]]], 0, 0, 0, 0]], [], ["loc", [null, [37, 86], [37, 104]]], 0, 0]], ["value", "target.value"], ["loc", [null, [37, 78], [37, 126]]], 0, 0]], ["loc", [null, [37, 6], [37, 129]]], 0, 0], ["inline", "input", [], ["type", "button", "name", "status", "value", "Lost", "class", "ui button", "click", ["subexpr", "action", [["subexpr", "mut", [["get", "model.status", ["loc", [null, [38, 92], [38, 104]]], 0, 0, 0, 0]], [], ["loc", [null, [38, 87], [38, 105]]], 0, 0]], ["value", "target.value"], ["loc", [null, [38, 79], [38, 127]]], 0, 0]], ["loc", [null, [38, 6], [38, 130]]], 0, 0], ["block", "if", [["get", "fieldsByGroup", ["loc", [null, [42, 8], [42, 21]]], 0, 0, 0, 0]], [], 2, 3, ["loc", [null, [42, 2], [74, 9]]]], ["content", "yield", ["loc", [null, [84, 0], [84, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('apem/pods/components/opportunities/stage-step/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    stageSteps: [],
    //current opportunity
    opt: null,

    didRender: function didRender() {
      this._super.apply(this, arguments);
      console.log('OPT DETAIL RENDER');
      this.markSteps();
    },

    actions: {
      onStepClick: function onStepClick(value) {
        this.opt.set('stage', value);
        this.markSteps();
      }
    },

    markSteps: function markSteps() {
      var selectedStepId = this.stageSteps.findBy('label', this.opt.get('stage')).id;
      var sSteps = this.stageSteps;
      // debugger;
      sSteps.forEach(function (item) {
        // console.log(`${item}`);
        if (item.id === selectedStepId) {
          // show step as active
          _ember['default'].$('.' + item.label + '.step').addClass('active');
          _ember['default'].$('.' + item.label + '-step-icn').addClass('hide-me');
        } else if (item.id < selectedStepId) {
          _ember['default'].$('.' + item.label + '-step-icn').removeClass('hide-me');
          _ember['default'].$('.' + item.label + '.step').removeClass('active');
          // show step as checked
          // Ember.$('.'+item.label+'-step')
        } else {
            _ember['default'].$('.' + item.label + '-step-icn').addClass('hide-me');
            _ember['default'].$('.' + item.label + '.step').removeClass('active');
          }
      });
    }
  });
});
define("apem/pods/components/opportunities/stage-step/template", ["exports"], function (exports) {
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
            "line": 32,
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
        dom.setAttribute(el1, "class", "field gap1");
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
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "green check icon quote-step-icn hidden");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("Quote");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <div class=\"description\">Choose your shipping options</div> ");
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
        dom.setAttribute(el3, "class", "sample step");
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "green check icon sample-step-icn hidden");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("Sample");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
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
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "green check icon approval-step-icn hidden");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("Approval");
        dom.appendChild(el5, el6);
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
        dom.setAttribute(el3, "class", "production step");
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "green check icon production-step-icn hidden");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("Production");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
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
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element0, [5]);
        var element4 = dom.childAt(element0, [7]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createElementMorph(element3);
        morphs[3] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [["element", "action", ["onStepClick", "quote"], [], ["loc", [null, [4, 28], [4, 60]]], 0, 0], ["element", "action", ["onStepClick", "sample"], [], ["loc", [null, [11, 29], [11, 62]]], 0, 0], ["element", "action", ["onStepClick", "approval"], [], ["loc", [null, [18, 31], [18, 66]]], 0, 0], ["element", "action", ["onStepClick", "production"], [], ["loc", [null, [24, 33], [24, 70]]], 0, 0]],
      locals: [],
      templates: []
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
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "header side-nav-section-header");
          var el3 = dom.createTextNode("Home");
          dom.appendChild(el2, el3);
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
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 3, 3);
          morphs[1] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["inline", "manage-password", [], ["mobileClass", "mobile tablet only"], ["loc", [null, [9, 4], [9, 56]]], 0, 0], ["block", "if", [["subexpr", "is-equal", [["get", "identity.profile.type", ["loc", [null, [11, 20], [11, 41]]], 0, 0, 0, 0], "Admin"], [], ["loc", [null, [11, 10], [11, 50]]], 0, 0]], [], 0, null, ["loc", [null, [11, 4], [15, 11]]]]],
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
    classNames: ['nav-header'],
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
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 92
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
              "line": 20,
              "column": 4
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" <div class=\"ui simple dropdown\"> ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        Welcome, ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "ellipsis large vertical icon");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "menu full-width top-z-index");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "/dashboard");
          dom.setAttribute(el2, "class", "item");
          dom.setAttribute(el2, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "big home icon");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" Home");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
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
          var el2 = dom.createTextNode("\n        ");
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
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["content", "identity.profile.username", ["loc", [null, [13, 17], [13, 46]]], 0, 0, 0, 0]],
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
            "line": 23,
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui stackable menu nav-header-menu");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "vertically fitted item");
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
        dom.setAttribute(el2, "class", "item new-nao-btn");
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
        dom.setAttribute(el2, "class", "right item");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" </div> ");
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
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        return morphs;
      },
      statements: [["inline", "bread-crumbs", [], ["tagName", "ul", "outputStyle", "foundation", "linkable", false, "crumbClass", "breadcrumb-item"], ["loc", [null, [3, 4], [3, 102]]], 0, 0], ["block", "link-to", ["opportunities.new"], ["class", "ui button green"], 0, null, ["loc", [null, [7, 4], [7, 104]]]], ["block", "ui-dropdown", [], ["class", "ui simple dropdown secondary-header-dropdown-item"], 1, null, ["loc", [null, [11, 4], [20, 20]]]]],
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
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "logo-wrapper");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/images/corp-logo.png");
        dom.setAttribute(el3, "class", "apem-logo");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "spacer spacer-lg");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header side-nav-section-header");
        var el3 = dom.createTextNode("Home");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
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
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [11]), 1, 1);
        morphs[1] = dom.createMorphAt(element1, 13, 13);
        return morphs;
      },
      statements: [["content", "manage-password", ["loc", [null, [12, 4], [12, 23]]], 0, 0, 0, 0], ["block", "if", [["subexpr", "is-equal", [["get", "identity.profile.type", ["loc", [null, [15, 18], [15, 39]]], 0, 0, 0, 0], "Admin"], [], ["loc", [null, [15, 8], [15, 48]]], 0, 0]], [], 0, null, ["loc", [null, [15, 2], [22, 9]]]]],
      locals: [],
      templates: [child0]
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
            "line": 62,
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
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4, "colspan", "4");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
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
        var element2 = dom.childAt(element1, [5, 1, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[1] = dom.createMorphAt(element2, 1, 1);
        morphs[2] = dom.createMorphAt(element2, 3, 3);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [15, 12], [15, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 4], [44, 13]]]], ["inline", "new-user", [], ["onCreate", ["subexpr", "action", ["didCreateUser"], [], ["loc", [null, [52, 28], [52, 52]]], 0, 0]], ["loc", [null, [52, 8], [52, 54]]], 0, 0], ["inline", "confirm-delete", [], ["isDisabled", ["subexpr", "@mut", [["get", "disableDelete", ["loc", [null, [54, 36], [54, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "deletableRecords", ["subexpr", "@mut", [["get", "selectedItems", ["loc", [null, [54, 67], [54, 80]]], 0, 0, 0, 0]], [], [], 0, 0], "title", "Confirm Delete", "recordType", "User", "message", "The selected users will be deleted. Continue?"], ["loc", [null, [54, 8], [57, 67]]], 0, 0]],
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
define('apem/pods/opportunities/index/route', ['exports', 'ember', 'ember-cli-pagination/remote/route-mixin'], function (exports, _ember, _emberCliPaginationRemoteRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberCliPaginationRemoteRouteMixin['default'], {
    totalPagesParam: "meta.total-pages",
    totalRecordsParam: "meta.total-records",
    perPage: 25,
    breadCrumb: { title: 'Manage Opportunities' },

    model: function model(params) {
      return _ember['default'].RSVP.hash({
        fields: this.store.findAll('field'),
        opportunities: this.findPaged('opportunity', params)
      });
    },
    setupController: function setupController(controller, models) {
      controller.set('fields', models.fields);
      controller.set('opportunities', models.opportunities);
    }
  });
});
define("apem/pods/opportunities/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 0
            },
            "end": {
              "line": 22,
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
        statements: [["inline", "opportunities/opp-table", [], ["model", ["subexpr", "@mut", [["get", "opportunities", ["loc", [null, [21, 34], [21, 47]]], 0, 0, 0, 0]], [], [], 0, 0], "fields", ["subexpr", "@mut", [["get", "fields", ["loc", [null, [21, 55], [21, 61]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [21, 2], [21, 63]]], 0, 0]],
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
              "line": 24,
              "column": 0
            },
            "end": {
              "line": 26,
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
          var el1 = dom.createTextNode(" Grid mockup\n");
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
            "line": 29,
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
        var el2 = dom.createTextNode("\ndeals\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "clss", "top attached ui menu");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "ui buttons column");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "block layout icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("Grid\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4, "class", "list layout icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("List\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 0, 0);
        morphs[1] = dom.createAttrMorph(element2, 'class');
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createAttrMorph(element3, 'class');
        morphs[4] = dom.createElementMorph(element3);
        morphs[5] = dom.createMorphAt(element0, 3, 3);
        morphs[6] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[7] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[8] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["content", "opportunities.meta.total-records", ["loc", [null, [2, 6], [2, 42]]], 0, 0, 0, 0], ["attribute", "class", ["concat", ["ui labeled icon button white-button ", ["subexpr", "if", [["subexpr", "is-equal", [["get", "defaultView", ["loc", [null, [8, 70], [8, 81]]], 0, 0, 0, 0], "grid"], [], ["loc", [null, [8, 60], [8, 89]]], 0, 0], "active"], [], ["loc", [null, [8, 55], [8, 100]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["showGridView"], [], ["loc", [null, [8, 102], [8, 127]]], 0, 0], ["attribute", "class", ["concat", ["ui labeled icon button white-button ", ["subexpr", "if", [["subexpr", "is-equal", [["get", "defaultView", ["loc", [null, [11, 70], [11, 81]]], 0, 0, 0, 0], "list"], [], ["loc", [null, [11, 60], [11, 89]]], 0, 0], "active"], [], ["loc", [null, [11, 55], [11, 100]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["showListView"], [], ["loc", [null, [11, 102], [11, 127]]], 0, 0], ["inline", "adv-search", [], ["class", "column inline-block center aligned"], ["loc", [null, [16, 2], [16, 59]]], 0, 0], ["block", "if", [["subexpr", "is-equal", [["get", "defaultView", ["loc", [null, [20, 16], [20, 27]]], 0, 0, 0, 0], "list"], [], ["loc", [null, [20, 6], [20, 35]]], 0, 0]], [], 0, null, ["loc", [null, [20, 0], [22, 7]]]], ["block", "if", [["subexpr", "is-equal", [["get", "defaultView", ["loc", [null, [24, 16], [24, 27]]], 0, 0, 0, 0], "grid"], [], ["loc", [null, [24, 6], [24, 35]]], 0, 0]], [], 1, null, ["loc", [null, [24, 0], [26, 7]]]], ["content", "outlet", ["loc", [null, [28, 0], [28, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
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

      var newOpportunity = this.store.createRecord('opportunity'),
          ident = this.get('identity');
      var theUser = ident.get('profile');

      if (ident) {
        newOpportunity.set('user', theUser);

        newOpportunity.save().then(function (savedOpportunity) {
          _this.transitionTo('opportunities.opportunity.detail', savedOpportunity);
        });
      } else {
        theUser = this.get('identity').get('profile').then(function () {
          newOpportunity.set('user', theUser);

          newOpportunity.save().then(function (savedOpportunity) {
            _this.transitionTo('opportunities.opportunity.detail', savedOpportunity);
          });
        }, function (error) {
          console.log(error);
        });
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
    breadCrumb: null,

    setupController: function setupController(controller, model) {
      controller.set('model', model);
      controller.set('fields', this.store.findAll('field'));
    },

    actions: {
      onDelete: function onDelete(optRecord) {
        var _this = this;

        this.set('serverErrors', []);
        var errs = this.get('serverErrors');
        optRecord.destroyRecord().then(function () {
          _this.transitionTo('opportunities');
          // myRouting.transitionToRoute('opportunities');
        }, function (error) {
          errs.addObject(error);
        });
      },
      onOptSave: function onOptSave() {
        this.transitionTo('opportunities');
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
            "line": 11,
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
      statements: [["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [4, 29], [4, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 6], [4, 43]]], 0, 0], ["inline", "opportunities/opt-form", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [8, 35], [8, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "fields", ["subexpr", "@mut", [["get", "fields", ["loc", [null, [8, 48], [8, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "onOptSave", "onOptSave", "onOptDelete", "onDelete"], ["loc", [null, [8, 4], [8, 101]]], 0, 0]],
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
define("apem/pods/users/new/controller", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    userTypes: ["Admin", "User"],
    actions: {
      selectUserType: function selectUserType(type) {
        this.get('model').set('type', type);
      },
      createUser: function createUser() {
        var _this = this;

        // Create the user
        var user = this.get('model');
        this.set('serverErrors', []);
        var errs = this.get('serverErrors');

        if (user.get('hasDirtyAttributes')) {
          console.log('Created User...');
          user.save().then(function () {
            _this.transitionToRoute('users');
          }, function (error) {
            errs.addObject(error);
          });
        }
      }
    }
  });
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
define("apem/pods/users/user/detail/controller", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    userTypes: ["Admin", "User"],
    actions: {
      selectUserType: function selectUserType(type) {
        this.get('model').set('type', type);
      },
      updateUser: function updateUser() {
        var _this = this;

        // Update the user
        var user = this.get('model');
        this.set('serverErrors', []);
        var errs = this.get('serverErrors');

        if (user.get('hasDirtyAttributes')) {
          console.log('Updated User...');
          user.save().then(function () {
            _this.transitionToRoute('users');
          }, function (error) {
            errs.addObject(error);
          });
        }
      }
    }
  });
});
define('apem/pods/users/user/detail/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    breadCrumb: null
  });
});
define("apem/pods/users/user/detail/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.0",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 8
              },
              "end": {
                "line": 41,
                "column": 8
              }
            },
            "moduleName": "apem/pods/users/user/detail/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
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
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'data-value');
            morphs[1] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "data-value", ["get", "type", ["loc", [null, [38, 41], [38, 45]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "type", ["loc", [null, [39, 12], [39, 20]]], 0, 0, 0, 0]],
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
              "line": 33,
              "column": 4
            },
            "end": {
              "line": 43,
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
          var el1 = dom.createTextNode("      ");
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
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
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
        statements: [["block", "each", [["get", "userTypes", ["loc", [null, [37, 16], [37, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [37, 8], [41, 17]]]]],
        locals: ["execute", "mapper"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.0",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 4
            },
            "end": {
              "line": 48,
              "column": 4
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
            "line": 55,
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2, "class", "subtitle");
        var el3 = dom.createTextNode("Edit User");
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
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "ui small button");
        dom.setAttribute(el3, "style", "touch-action: manipulation; -ms-touch-action: manipulation;");
        var el4 = dom.createTextNode("\n      Edit User\n    ");
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
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [7]);
        var element3 = dom.childAt(element2, [35]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [4]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [12]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [20]), 1, 1);
        morphs[4] = dom.createMorphAt(element2, 28, 28);
        morphs[5] = dom.createMorphAt(element2, 33, 33);
        morphs[6] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [["inline", "error-message", [], ["errors", ["subexpr", "@mut", [["get", "serverErrors", ["loc", [null, [6, 29], [6, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 6], [6, 43]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.username", ["loc", [null, [13, 20], [13, 34]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [13, 6], [13, 36]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [20, 36], [20, 50]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [20, 6], [20, 52]]], 0, 0], ["inline", "input", [], ["type", "password", "value", ["subexpr", "@mut", [["get", "model.passwordVerify", ["loc", [null, [27, 36], [27, 56]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [27, 6], [27, 58]]], 0, 0], ["block", "ui-dropdown", [], ["class", "search selection", "allowAdditions", false, "selected", ["subexpr", "@mut", [["get", "model.type", ["loc", [null, [33, 74], [33, 84]]], 0, 0, 0, 0]], [], [], 0, 0], "onChange", ["subexpr", "action", [["subexpr", "mut", [["get", "selectUserType", ["loc", [null, [33, 107], [33, 121]]], 0, 0, 0, 0]], [], ["loc", [null, [33, 102], [33, 122]]], 0, 0]], [], ["loc", [null, [33, 94], [33, 123]]], 0, 0]], 0, null, ["loc", [null, [33, 4], [43, 20]]]], ["block", "link-to", ["users"], ["tagName", "div", "class", "ui small button", "activeClass", ""], 1, null, ["loc", [null, [46, 4], [48, 16]]]], ["element", "action", ["updateUser"], [], ["loc", [null, [49, 33], [49, 56]]], 0, 0]],
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
  require("apem/app")["default"].create({"usingCors":true,"apiUrl":"http://apem.herokuapp.com","name":"apem","version":"0.0.0+8a256088"});
}

/* jshint ignore:end */
//# sourceMappingURL=apem.map