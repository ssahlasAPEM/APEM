<?php

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/8/16
 * Time: 1:00 PM
 */

use Illuminate\Database\Seeder;

class FieldSeeder extends Seeder
{

    public function run()
    {

        $fields = [
            [
                'label'    => 'Company',
                'name'     => 'company',
                'type'     => 'text',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Address',
                'name'     => 'address',
                'type'     => 'text',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'City',
                'name'     => 'city',
                'type'     => 'text',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'State/County',
                'name'     => 'stateCounty',
                'type'     => 'dropdown',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Mail Code',
                'name'     => 'mailCode',
                'type'     => 'text',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Country',
                'name'     => 'country',
                'type'     => 'dropdown',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Contact Name',
                'name'     => 'contactName',
                'type'     => 'text',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Contact Title',
                'name'     => 'contactTitle',
                'type'     => 'text',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Contact Phone',
                'name'     => 'contactPhone',
                'type'     => 'text',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Contact Email',
                'name'     => 'contactEmail',
                'type'     => 'text',
                'group'    => 'Customer OEM',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Sales Rep Agent',
                'name'     => 'salesRepAgent',
                'type'     => 'dropdown',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Distributor',
                'name'     => 'distributor',
                'type'     => 'dropdown',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'APEM Sales Person',
                'name'     => 'apemSalesPerson',
                'type'     => 'dropdown',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'SRA Sales Rep',
                'name'     => 'sraSalesRep',
                'type'     => 'text',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Distributor Salesperson',
                'name'     => 'distributorSalesperson',
                'type'     => 'text',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Industry',
                'name'     => 'industry',
                'type'     => 'dropdown',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Application',
                'name'     => 'application',
                'type'     => 'text',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Reason for Opp',
                'name'     => 'reasonForOpp',
                'type'     => 'dropdown',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Function',
                'name'     => 'function',
                'type'     => 'text',
                'group'    => 'Sales Channel',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Catalog Product',
                'name'     => 'catalogProduct',
                'type'     => 'radio',
                'group'    => 'Product Description',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Catalog Part Number',
                'name'     => 'catalogPartNum',
                'type'     => 'text',
                'group'    => 'Product Description',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Customer Part Number',
                'name'     => 'customerPartNum',
                'type'     => 'text',
                'group'    => 'Product Description',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Product Type',
                'name'     => 'productType',
                'type'     => 'dropdown',
                'group'    => 'Product Description',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Product Series',
                'name'     => 'productSeries',
                'type'     => 'dropdown',
                'group'    => 'Product Description',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'APEM Part Number',
                'name'     => 'apemPartNumber',
                'type'     => 'text',
                'group'    => 'Product Description',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Brief Description',
                'name'     => 'briefDescription',
                'type'     => 'text',
                'group'    => 'Product Description',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Extended Description',
                'name'     => 'extendedDescription',
                'type'     => 'text',
                'group'    => 'Product Description',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Current Supplier',
                'name'     => 'currentSupplier',
                'type'     => 'dropdown',
                'group'    => 'Competitors',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Competitors',
                'name'     => 'competitors',
                'type'     => 'dropdown',
                'group'    => 'Competitors',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Year 1 Sales Volume',
                'name'     => 'year1SalesVol',
                'type'     => 'text',
                'group'    => 'Estimated Value',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Year 2 Sales Volume',
                'name'     => 'year2SalesVol',
                'type'     => 'text',
                'group'    => 'Estimated Value',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Year 3 Sales Volume',
                'name'     => 'year3SalesVol',
                'type'     => 'text',
                'group'    => 'Estimated Value',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Currency',
                'name'     => 'currency',
                'type'     => 'text',
                'group'    => 'Estimated Value',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Target Sales Price',
                'name'     => 'targetSalesPrice',
                'type'     => 'text',
                'group'    => 'Estimated Value',
                'value'    => null,
                'options'  => null,
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Potential Annual Revenue',
                'name'     => 'potentialAnnualRev',
                'type'     => 'auto',
                'group'    => 'Estimated Value',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Probability of Win',
                'name'     => 'probabilityOfWin',
                'type'     => 'dropdown',
                'group'    => 'Estimated Value',
                'value'    => null,
                'options'  => json_encode(['0%','25%','50%','75%','100%']),
                'required' => true,
                'visible'  => true
            ],
            [
                'label'    => 'Expected Value',
                'name'     => 'expectedValue',
                'type'     => 'auto',
                'group'    => 'Estimated Value',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Quote Date',
                'name'     => 'quoteDate',
                'type'     => 'date',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Sample Date',
                'name'     => 'sampleDate',
                'type'     => 'date',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Approval Date',
                'name'     => 'approvalDate',
                'type'     => 'date',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Date Rcvd Prod Order',
                'name'     => 'dateRcvdProdOrder',
                'type'     => 'date',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Prod Sales Order Number',
                'name'     => 'prodSalesOrderNum',
                'type'     => 'text',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Reason for Win',
                'name'     => 'reasonForWin',
                'type'     => 'dropdown',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'DateLost',
                'name'     => 'dateLost',
                'type'     => 'date',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Lost to Whom',
                'name'     => 'lostToWhom',
                'type'     => 'dropdown',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Reason for Loss',
                'name'     => 'reasonForLoss',
                'type'     => 'dropdown',
                'group'    => 'Milestones',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ],
            [
                'label'    => 'Comment Field',
                'name'     => 'commentField',
                'type'     => 'textarea',
                'group'    => 'Comments',
                'value'    => null,
                'options'  => null,
                'required' => false,
                'visible'  => true
            ]
        ];

        DB::table('fields')->delete();

        foreach ($fields as $field) {
            $newField           = new \app\Models\Field();
            $newField->label    = $field['label'];
            $newField->name     = $field['name'];
            $newField->type     = $field['type'];
            $newField->group    = $field['group'];
            $newField->value    = $field['value'];
            $newField->options  = $field['options'];
            $newField->required = $field['required'];
            $newField->visible  = $field['visible'];
            $newField->save();
        }
    }

}
