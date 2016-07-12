<?php

/**
 *  A set of mappings from different service layers onto each kind of DomainEntity.
 *
 *  Top-level key is the type of DomainEntity, Account, Contact, Map, etc.
 *
 *  Second-level keys are (currently):
 *    'valueObjects'             - a mapping from the property on a DomainEntity to the Value Object required by that
 *    property
 *
 *    'jsonToDomainEntity'       - a mapping from the keys in the JSON API request to the DomainEntity's properties
 *
 *    'eloquentToDomainEntity'   - a mapping from the data returned by the Eloquent backend to the DomainEntity's
 *    properties
 *
 *    'objectDiscovery'          - a helper mapping for ObjectDiscovery services
 *
 *    'cascadeDeletes'           - A list of mapper interfaces to objects that should be deleted if they are
 *                                 related to the respective domain entity. So if we delete an Account we should
 *                                 also delete all the contacts, opportunities, journeys etc. associated with that
 *                                 account. Now free of integration references.
 *
 * NOTE: Changes to these mappings will likely require updates to the test harness.
 *
 * NOTE 2: the DomainEntity mappings now include a bit flag indicating whether or not this
 * NOTE 2: key is a readonly property, or a hidden property. Salesforce has the most
 * NOTE 2: readonly keys. But we want to hide passwords so that we don't ever
 * NOTE 2: send them to the frontend.
 *
 * NOTE 3: Do not use these names as logProperties unless you know why you want to overwrite them:
 * NOTE 3:   'method', 'service', 'userId', 'success'
 */

use App\Core\DomainEntityFieldFlags as Flags;
use App\Core\Field\Model\Field;
use App\Core\Opportunity\Model\Opportunity;
use App\Core\User\Model\User;

// Flags::NONE, Flags::READONLY and Flags::HIDDEN
return [
    // These properties are present on all Domain Entities
    'default' => [
        'valueObjects' => [],

        'jsonToDomainEntity' => [
            'created-at' => ['CreatedDate', Flags::READONLY],
            'updated-at' => ['UpdatedDate', Flags::READONLY],
        ],

        'eloquentToDomainEntity' => [
            'created_at' => ['CreatedDate', Flags::READONLY],
            'updated_at' => ['UpdatedDate', Flags::READONLY],
        ],
    ],

    User::class => [
        'valueObjects' => [],

        'jsonToDomainEntity' => [
            'username' => ['Username', Flags::NONE],
            'password' => ['Password', Flags::WRITEONLY],
        ],

        'eloquentToDomainEntity' => [
            'username' => ['Username', Flags::NONE],
            'password' => ['Password', Flags::WRITEONLY],
        ],

        'objectDiscovery'     => [],
        'responseType'        => ['user', 'users'],
        'doConcurrencyChecks' => false,
    ],

    Field::class => [
        'valueObjects' => [
        ],

        'jsonToDomainEntity' => [
            'label'    => ['Label', Flags::NONE],
            'type'     => ['Type', Flags::NONE],
            'value'    => ['Value', Flags::NONE],
            'options'  => ['Options', Flags::NONE],
            'required' => ['Required', Flags::NONE],
            'visible'  => ['Visible', Flags::NONE],
        ],

        'eloquentToDomainEntity' => [
            'label'    => ['Label', Flags::NONE],
            'type'     => ['Type', Flags::NONE],
            'value'    => ['Value', Flags::NONE],
            'options'  => ['Options', Flags::NONE],
            'required' => ['Required', Flags::NONE],
            'visible'  => ['Visible', Flags::NONE],
        ],

        'objectDiscovery' => [
            'label'    => 'Label',
            'type'     => 'Type',
            'value'    => 'Value',
            'options'  => 'Options',
            'required' => 'Required',
            'visible'  => 'Visible',
        ],

        'cascadeDeletes' => [
        ],

        'responseType'        => ['field', 'fields'],
        'doConcurrencyChecks' => false,
    ],

    Opportunity::class => [
        'valueObjects' => [],

        'jsonToDomainEntity' => [
            'name'             => ['Name', Flags::NONE],
            'description'      => ['Description', Flags::NONE],
            'comments'         => ['Comments', Flags::NONE],
            'size'             => ['Size', Flags::NONE],
            'stage'            => ['Stage', Flags::NONE],
            'forecast-percent' => ['ForecastPercent', Flags::NONE],
            'start-date'       => ['StartDate', Flags::NONE],
            'close-date'       => ['CloseDate', Flags::NONE],
            'est-close-date'   => ['EstCloseDate', Flags::NONE],
            'calc-close-date'  => ['CalcCloseDate', Flags::NONE],
            'type'             => ['Type', Flags::NONE],
            'account-id'       => ['AccountId', Flags::NONE],
        ],

        'eloquentToDomainEntity' => [
            'name'             => ['Name', Flags::NONE],
            'desc'             => ['Description', Flags::NONE],
            'comments'         => ['Comments', Flags::NONE],
            'size'             => ['Size', Flags::NONE],
            'stage'            => ['Stage', Flags::NONE],
            'forecast_percent' => ['ForecastPercent', Flags::NONE],
            'start_date'       => ['StartDate', Flags::NONE],
            'close_date'       => ['CloseDate', Flags::NONE],
            'est_close_date'   => ['EstCloseDate', Flags::NONE],
            'calc_close_date'  => ['CalcCloseDate', Flags::NONE],
            'type'             => ['Type', Flags::NONE],
            'account_id'       => ['AccountId', Flags::NONE],
        ],

        'objectDiscovery' => [
            'name'             => 'Name',
            'description'      => 'Description',
            'comments'         => 'Comments',
            'size'             => 'Size',
            'stage'            => 'Stage',
            'forecast-percent' => 'Forecast Percent',
            'start-date'       => 'Start Date',
            'close-date'       => 'Close Date',
            'est-close-date'   => 'Estimated Close Date',
            'calc-close-date'  => 'Calculated Close Date',
            'type'             => 'Type',
            'account-id'       => 'AccountId'
        ],

        'responseType'        => ['opportunity', 'opportunities'],
        'doConcurrencyChecks' => false,
    ],
];
