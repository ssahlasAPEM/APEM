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

use app\Core\DomainEntityFieldFlags as Flags;
use app\Core\Event\Model\Event;
use app\Core\Field\Model\Field;
use app\Core\Opportunity\Model\Opportunity;
use app\Core\User\Model\User;

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
            'username'          => ['Username', Flags::NONE],
            'type'              => ['Type', Flags::NONE],
            'active'            => ['Active', Flags::NONE],
            'num-opportunities' => ['NumOpportunities', Flags::READONLY],
            'last-login'        => ['LastLogin', Flags::READONLY],
            'password'          => ['Password', Flags::WRITEONLY],
        ],

        'eloquentToDomainEntity' => [
            'username'   => ['Username', Flags::NONE],
            'type'       => ['Type', Flags::NONE],
            'active'     => ['Active', Flags::NONE],
            'last_login' => ['LastLogin', Flags::READONLY],
            'password'   => ['Password', Flags::WRITEONLY],
        ],

        'objectDiscovery' => [],
        'responseType'    => ['user', 'users'],
    ],

    Field::class => [
        'valueObjects' => [],

        'jsonToDomainEntity' => [
            'label'    => ['Label', Flags::READONLY],
            'name'     => ['Name', Flags::READONLY],
            'type'     => ['Type', Flags::READONLY],
            'group'    => ['Group', Flags::READONLY],
            'value'    => ['Value', Flags::READONLY],
            'options'  => ['Options', Flags::JSON | Flags::READONLY],
            'required' => ['Required', Flags::NONE],
            'visible'  => ['Visible', Flags::NONE],
        ],

        'eloquentToDomainEntity' => [
            'label'    => ['Label', Flags::READONLY],
            'name'     => ['Name', Flags::READONLY],
            'type'     => ['Type', Flags::READONLY],
            'group'    => ['Group', Flags::READONLY],
            'value'    => ['Value', Flags::READONLY],
            'options'  => ['Options', Flags::JSON | Flags::READONLY],
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

        'responseType' => ['field', 'fields'],
    ],

    Event::class => [
        'valueObjects' => [],

        'jsonToDomainEntity' => [
            'type'          => ['Type', Flags::NONE],
            'date'           => ['Date', Flags::NONE],
            'opportunity-id' => ['OpportunityId', Flags::NONE]
        ],

        'eloquentToDomainEntity' => [
            'type'          => ['Type', Flags::NONE],
            'date'           => ['Date', Flags::NONE],
            'opportunity_id' => ['OpportunityId', Flags::NONE]
        ],

        'objectDiscovery' => [
            'type'           => 'Type',
            'date'           => 'Date',
            'opportunity-id' => 'OpportunityId'
        ],

        'cascadeDeletes' => [
        ],

        'responseType' => ['event', 'events'],
    ],

    Opportunity::class => [
        'valueObjects' => [],

        'jsonToDomainEntity' => [
            'draft'                   => ['Draft', Flags::NONE],
            'status'                  => ['Status', Flags::NONE],
            'stage'                   => ['Stage', Flags::NONE],
            'company'                 => ['Company', Flags::NONE],
            'address'                 => ['Address', Flags::NONE],
            'city'                    => ['City', Flags::NONE],
            'state-county'            => ['StateCounty', Flags::NONE],
            'mail-code'               => ['MailCode', Flags::NONE],
            'country'                 => ['Country', Flags::NONE],
            'contact-name'            => ['ContactName', Flags::NONE],
            'contact-title'           => ['ContactTitle', Flags::NONE],
            'contact-phone'           => ['ContactPhone', Flags::NONE],
            'contact-email'           => ['ContactEmail', Flags::NONE],
            'sales-rep-agent'         => ['SalesRepAgent', Flags::NONE],
            'distributor'             => ['Distributor', Flags::NONE],
            'apem-sales-person'       => ['ApemSalesPerson', Flags::NONE],
            'sra-sales-rep'           => ['SraSalesRep', Flags::NONE],
            'distributor-salesperson' => ['DistributorSalesperson', Flags::NONE],
            'industry'                => ['Industry', Flags::NONE],
            'application'             => ['Application', Flags::NONE],
            'reason-for-opp'          => ['ReasonForOpp', Flags::NONE],
            'function'                => ['Function', Flags::NONE],
            'catalog-part-num'        => ['CatalogPartNum', Flags::NONE],
            'customer-part-num'       => ['CustomerPartNum', Flags::NONE],
            'product-type'            => ['ProductType', Flags::NONE],
            'product-series'          => ['ProductSeries', Flags::NONE],
            'apem-part-num'           => ['ApemPartNum', Flags::NONE],
            'brief-description'       => ['BriefDescription', Flags::NONE],
            'extended-description'    => ['ExtendedDescription', Flags::NONE],
            'current-supplier'        => ['CurrentSupplier', Flags::NONE],
            'competitors'             => ['Competitors', Flags::NONE],
            'year1-sales-vol'         => ['Year1SalesVol', Flags::NONE],
            'year2-sales-vol'         => ['Year2SalesVol', Flags::NONE],
            'year3-sales-vol'         => ['Year3SalesVol', Flags::NONE],
            'currency'                => ['Currency', Flags::NONE],
            'target-sales-price'      => ['TargetSalesPrice', Flags::NONE],
            'potential-annual-rev'    => ['PotentialAnnualRev', Flags::NONE],
            'probability-of-win'      => ['ProbabilityOfWin', Flags::NONE],
            'expected-value'          => ['ExpectedValue', Flags::NONE],
            'quote-date'              => ['QuoteDate', Flags::NONE],
            'sample-date'             => ['SampleDate', Flags::NONE],
            'approval-date'           => ['ApprovalDate', Flags::NONE],
            'date-rcvd-prod-order'    => ['DateRcvdProdOrder', Flags::NONE],
            'prod-sales-order-num'    => ['ProdSalesOrderNum', Flags::NONE],
            'reason-for-win'          => ['ReasonForWin', Flags::NONE],
            'date-lost'               => ['DateLost', Flags::NONE],
            'lost-to-whom'            => ['LostToWhom', Flags::NONE],
            'reason-for-loss'         => ['ReasonForLoss', Flags::NONE],
            'comment-field'           => ['CommentField', Flags::NONE],
            'user-id'                 => ['UserId', Flags::NONE],
        ],

        'eloquentToDomainEntity' => [
            'draft'                   => ['Draft', Flags::NONE],
            'status'                  => ['Status', Flags::NONE],
            'stage'                   => ['Stage', Flags::NONE],
            'company'                 => ['Company', Flags::NONE],
            'address'                 => ['Address', Flags::NONE],
            'city'                    => ['City', Flags::NONE],
            'state_county'            => ['StateCounty', Flags::NONE],
            'mail_code'               => ['MailCode', Flags::NONE],
            'country'                 => ['Country', Flags::NONE],
            'contact_name'            => ['ContactName', Flags::NONE],
            'contact_title'           => ['ContactTitle', Flags::NONE],
            'contact_phone'           => ['ContactPhone', Flags::NONE],
            'contact_email'           => ['ContactEmail', Flags::NONE],
            'sales_rep_agent'         => ['SalesRepAgent', Flags::NONE],
            'distributor'             => ['Distributor', Flags::NONE],
            'apem_sales_person'       => ['ApemSalesPerson', Flags::NONE],
            'sra_sales_rep'           => ['SraSalesRep', Flags::NONE],
            'distributor_salesperson' => ['DistributorSalesperson', Flags::NONE],
            'industry'                => ['Industry', Flags::NONE],
            'application'             => ['Application', Flags::NONE],
            'reason_for_opp'          => ['ReasonForOpp', Flags::NONE],
            'function'                => ['Function', Flags::NONE],
            'catalog_part_num'        => ['CatalogPartNum', Flags::NONE],
            'customer_part_num'       => ['CustomerPartNum', Flags::NONE],
            'product_type'            => ['ProductType', Flags::NONE],
            'product_series'          => ['ProductSeries', Flags::NONE],
            'apem_part_num'           => ['ApemPartNum', Flags::NONE],
            'brief_description'       => ['BriefDescription', Flags::NONE],
            'extended_description'    => ['ExtendedDescription', Flags::NONE],
            'current_supplier'        => ['CurrentSupplier', Flags::NONE],
            'competitors'             => ['Competitors', Flags::NONE],
            'year1_sales_vol'         => ['Year1SalesVol', Flags::NONE],
            'year2_sales_vol'         => ['Year2SalesVol', Flags::NONE],
            'year3_sales_vol'         => ['Year3SalesVol', Flags::NONE],
            'currency'                => ['Currency', Flags::NONE],
            'target_sales_price'      => ['TargetSalesPrice', Flags::NONE],
            'potential_annual_rev'    => ['PotentialAnnualRev', Flags::NONE],
            'probability_of_win'      => ['ProbabilityOfWin', Flags::NONE],
            'expected_value'          => ['ExpectedValue', Flags::NONE],
            'quote_date'              => ['QuoteDate', Flags::NONE],
            'sample_date'             => ['SampleDate', Flags::NONE],
            'approval_date'           => ['ApprovalDate', Flags::NONE],
            'date_rcvd_prod_order'    => ['DateRcvdProdOrder', Flags::NONE],
            'prod_sales_order_num'    => ['ProdSalesOrderNum', Flags::NONE],
            'reason_for_win'          => ['ReasonForWin', Flags::NONE],
            'date_lost'               => ['DateLost', Flags::NONE],
            'lost_to_whom'            => ['LostToWhom', Flags::NONE],
            'reason_for_loss'         => ['ReasonForLoss', Flags::NONE],
            'comment_field'           => ['CommentField', Flags::NONE],
            'user_id'                 => ['UserId', Flags::NONE],
        ],

        'objectDiscovery' => [
            'draft'                   => 'Draft',
            'status'                  => 'Status',
            'stage'                   => 'Stage',
            'company'                 => 'Company',
            'address'                 => 'Address',
            'city'                    => 'City',
            'state-county'            => 'StateCounty',
            'mail-code'               => 'MailCode',
            'country'                 => 'Country',
            'contact-name'            => 'ContactName',
            'contact-title'           => 'ContactTitle',
            'contact-phone'           => 'ContactPhone',
            'contact-email'           => 'ContactEmail',
            'sales-rep-agent'         => 'SalesRepAgent',
            'distributor'             => 'Distributor',
            'apem-sales-person'       => 'ApemSalesPerson',
            'sra-sales-rep'           => 'SraSalesRep',
            'distributor-salesperson' => 'DistributorSalesperson',
            'industry'                => 'Industry',
            'application'             => 'Application',
            'reason-for-opp'          => 'ReasonForOpp',
            'function'                => 'Function',
            'catalog-part-num'        => 'CatalogPartNum',
            'customer-part-num'       => 'CustomerPartNum',
            'product-type'            => 'ProductType',
            'product-series'          => 'ProductSeries',
            'apem-part-num'           => 'ApemPartNum',
            'brief-description'       => 'BriefDescription',
            'extended-description'    => 'ExtendedDescription',
            'current-supplier'        => 'CurrentSupplier',
            'competitors'             => 'Competitors',
            'year1-sales-vol'         => 'Year1SalesVol',
            'year2-sales-vol'         => 'Year2SalesVol',
            'year3-sales-vol'         => 'Year3SalesVol',
            'currency'                => 'Currency',
            'target-sales-price'      => 'TargetSalesPrice',
            'potential-annual-rev'    => 'PotentialAnnualRev',
            'probability-of-win'      => 'ProbabilityOfWin',
            'expected-value'          => 'ExpectedValue',
            'quote-date'              => 'QuoteDate',
            'sample-date'             => 'Sample Date',
            'approval-date'           => 'Approval Date',
            'date-rcvd-prod-order'    => 'DateRcvdProdOrder',
            'prod-sales-order-num'    => 'ProdSalesOrderNum',
            'reason-for-win'          => 'ReasonForWin',
            'date-lost'               => 'DateLost',
            'lost-to-whom'            => 'LostToWhom',
            'reason-for-loss'         => 'ReasonForLoss',
            'comment-field'           => 'CommentField',
            'user-id'                 => 'UserId',
        ],

        'responseType' => ['opportunity', 'opportunities'],
    ],
];
