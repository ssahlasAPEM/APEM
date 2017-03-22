<?php namespace app\Core\Opportunity\Model;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:34 PM
 */

use app\Core\DomainEntity;
use app\Core\Event\Model\Event;
use app\Exceptions\InvalidRequestException;
use app\Models\User;
use app\Models\Event AS EventModel;
use DateTime;

/**
 * Class Opportunity
 * @package app\Core\Opportunity\Model
 */
class Opportunity extends DomainEntity
{

    private $userId;
    private $userName;
    private $draft;
    private $state;
    private $status;
    private $stage;
    private $company;
    private $address;
    private $city;
    private $stateCounty;
    private $mailCode;
    private $country;
    private $contactName;
    private $contactTitle;
    private $contactPhone;
    private $contactEmail;
    private $salesRepAgent;
    private $distributor;
    private $apemSalesPerson;
    private $sraSalesRep;
    private $distSalesperson;
    private $industry;
    private $application;
    private $reasonForOpp;
    private $function;
    private $catalogProduct;
    private $catalogPartNum;
    private $customerPartNum;
    private $productType;
    private $productSeries;
    private $apemPartNum;
    private $briefDescription;
    private $extendedDescription;
    private $currentSupplier;
    private $competitors;
    private $year1SalesVol;
    private $year2SalesVol;
    private $year3SalesVol;
    private $currency;
    private $targetSalesPrice;
    private $potentialAnnualRev;
    private $probabilityOfWin;
    private $expectedValue;
    private $quoteDate;
    private $sampleDate;
    private $approvalDate;
    private $dateRcvdProdOrder;
    private $estimatedProdDate;
    private $prodSalesOrderNum;
    private $reasonForWin;
    private $dateLost;
    private $lostToWhom;
    private $reasonForLoss;
    private $commentField;

    /**
     * DomainEntity constructor.
     *
     * @param null $dbId
     */
    public function __construct($dbId = null)
    {
        parent::__construct($dbId);

        $events = EventModel::where('opportunity_id','=',$dbId)->get();
        foreach($events as $event) {
            switch($event->type) {
                case 'quote':
                    $this->setQuoteDate($event->date);
                case 'sample':
                    $this->setSampleDate($event->date);
                case 'approval':
                    $this->setApprovalDate($event->date);
                default:
                    $this->setDateRcvdProdOrder($event->date);
            }
        }
    }

    /**
 * @return mixed
 */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * @param mixed $userId
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;
    }

    /**
     * @return mixed
     */
    public function getUserName()
    {
        $user = User::where('id','=',$this->userId)->first();
        $this->userName = $user->username;
        return $this->userName;
    }
    public function setUserName()
    {
        $user = User::where('id','=',$this->userId)->first();
        $this->userName = $user->username;
    }

    /**
     * @return mixed
     */
    public function getDraft()
    {
        return $this->draft;
    }

    /**
     * @param mixed $draft
     */
    public function setDraft($draft)
    {
        $this->draft = $draft;
    }

    /**
     * @return mixed
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * @param mixed $state
     */
    public function setState($state)
    {
        $this->state = $state;
    }

    /**
     * @return mixed
     */
    public function getCompany()
    {
        return $this->company;
    }

    /**
     * @param mixed $company
     */
    public function setCompany($company)
    {
        $this->company = $company;
    }

    /**
     * @return mixed
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param mixed $address
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /**
     * @return mixed
     */
    public function getStateCounty()
    {
        return $this->stateCounty;
    }

    /**
     * @param mixed $stateCounty
     */
    public function setStateCounty($stateCounty)
    {
        $this->stateCounty = $stateCounty;
    }

    /**
     * @return mixed
     */
    public function getMailCode()
    {
        return $this->mailCode;
    }

    /**
     * @param mixed $mailCode
     */
    public function setMailCode($mailCode)
    {
        $this->mailCode = $mailCode;
    }

    /**
     * @return mixed
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * @param mixed $country
     */
    public function setCountry($country)
    {
        $this->country = $country;
    }

    /**
     * @return mixed
     */
    public function getContactName()
    {
        return $this->contactName;
    }

    /**
     * @param mixed $contactName
     */
    public function setContactName($contactName)
    {
        $this->contactName = $contactName;
    }

    /**
     * @return mixed
     */
    public function getContactTitle()
    {
        return $this->contactTitle;
    }

    /**
     * @param mixed $contactTitle
     */
    public function setContactTitle($contactTitle)
    {
        $this->contactTitle = $contactTitle;
    }

    /**
     * @return mixed
     */
    public function getContactPhone()
    {
        return $this->contactPhone;
    }

    /**
     * @param mixed $contactPhone
     */
    public function setContactPhone($contactPhone)
    {
        $this->contactPhone = $contactPhone;
    }

    /**
     * @return mixed
     */
    public function getContactEmail()
    {
        return $this->contactEmail;
    }

    /**
     * @param mixed $contactEmail
     */
    public function setContactEmail($contactEmail)
    {
        $this->contactEmail = $contactEmail;
    }

    /**
     * @return mixed
     */
    public function getSalesRepAgent()
    {
        return $this->salesRepAgent;
    }

    /**
     * @param mixed $salesRepAgent
     */
    public function setSalesRepAgent($salesRepAgent)
    {
        $this->salesRepAgent = $salesRepAgent;
    }

    /**
     * @return mixed
     */
    public function getDistributor()
    {
        return $this->distributor;
    }

    /**
     * @param mixed $distributor
     */
    public function setDistributor($distributor)
    {
        $this->distributor = $distributor;
    }

    /**
     * @return mixed
     */
    public function getApemSalesPerson()
    {
        return $this->apemSalesPerson;
    }

    /**
     * @param mixed $apemSalesPerson
     */
    public function setApemSalesPerson($apemSalesPerson)
    {
        $this->apemSalesPerson = $apemSalesPerson;
    }

    /**
     * @return mixed
     */
    public function getSraSalesRep()
    {
        return $this->sraSalesRep;
    }

    /**
     * @param mixed $sraSalesRep
     */
    public function setSraSalesRep($sraSalesRep)
    {
        $this->sraSalesRep = $sraSalesRep;
    }

    /**
     * @return mixed
     */
    public function getDistributorSalesperson()
    {
        return $this->distSalesperson;
    }

    /**
     * @param mixed $distSalesperson
     */
    public function setDistributorSalesperson($distSalesperson)
    {
        $this->distSalesperson = $distSalesperson;
    }

    /**
     * @return mixed
     */
    public function getIndustry()
    {
        return $this->industry;
    }

    /**
     * @param mixed $industry
     */
    public function setIndustry($industry)
    {
        $this->industry = $industry;
    }

    /**
     * @return mixed
     */
    public function getApplication()
    {
        return $this->application;
    }

    /**
     * @param mixed $application
     */
    public function setApplication($application)
    {
        $this->application = $application;
    }

    /**
     * @return mixed
     */
    public function getReasonForOpp()
    {
        return $this->reasonForOpp;
    }

    /**
     * @param mixed $reasonForOpp
     */
    public function setReasonForOpp($reasonForOpp)
    {
        $this->reasonForOpp = $reasonForOpp;
    }

    /**
     * @return mixed
     */
    public function getFunction()
    {
        return $this->function;
    }

    /**
     * @param mixed $function
     */
    public function setFunction($function)
    {
        $this->function = $function;
    }

    /**
     * @return mixed
     */
    public function getCatalogProduct()
    {
        return $this->catalogProduct;
    }

    /**
     * @param mixed $catalogProduct
     */
    public function setCatalogProduct($catalogProduct)
    {
        $this->catalogProduct = $catalogProduct;
    }

    /**
     * @return mixed
     */
    public function getCatalogPartNum()
    {
        return $this->catalogPartNum;
    }

    /**
     * @param mixed $catalogPartNum
     */
    public function setCatalogPartNum($catalogPartNum)
    {
        $this->catalogPartNum = $catalogPartNum;
    }

    /**
     * @return mixed
     */
    public function getCustomerPartNum()
    {
        return $this->customerPartNum;
    }

    /**
     * @param mixed $customerPartNum
     */
    public function setCustomerPartNum($customerPartNum)
    {
        $this->customerPartNum = $customerPartNum;
    }

    /**
     * @return mixed
     */
    public function getProductType()
    {
        return $this->productType;
    }

    /**
     * @param mixed $productType
     */
    public function setProductType($productType)
    {
        $this->productType = $productType;
    }

    /**
     * @return mixed
     */
    public function getProductSeries()
    {
        return $this->productSeries;
    }

    /**
     * @param mixed $productSeries
     */
    public function setProductSeries($productSeries)
    {
        $this->productSeries = $productSeries;
    }

    /**
     * @return mixed
     */
    public function getApemPartNum()
    {
        return $this->apemPartNum;
    }

    /**
     * @param mixed $apemPartNum
     */
    public function setApemPartNum($apemPartNum)
    {
        $this->apemPartNum = $apemPartNum;
    }

    /**
     * @return mixed
     */
    public function getBriefDescription()
    {
        return $this->briefDescription;
    }

    /**
     * @param mixed $briefDescription
     */
    public function setBriefDescription($briefDescription)
    {
        $this->briefDescription = $briefDescription;
    }

    /**
     * @return mixed
     */
    public function getExtendedDescription()
    {
        return $this->extendedDescription;
    }

    /**
     * @param mixed $extendedDescription
     */
    public function setExtendedDescription($extendedDescription)
    {
        $this->extendedDescription = $extendedDescription;
    }

    /**
     * @return mixed
     */
    public function getCurrentSupplier()
    {
        return $this->currentSupplier;
    }

    /**
     * @param mixed $currentSupplier
     */
    public function setCurrentSupplier($currentSupplier)
    {
        $this->currentSupplier = $currentSupplier;
    }

    /**
     * @return mixed
     */
    public function getCompetitors()
    {
        return $this->competitors;
    }

    /**
     * @param mixed $competitors
     */
    public function setCompetitors($competitors)
    {
        $this->competitors = $competitors;
    }

    /**
     * @return mixed
     */
    public function getYear1SalesVol()
    {
        return $this->year1SalesVol;
    }

    /**
     * @param mixed $year1SalesVol
     */
    public function setYear1SalesVol($year1SalesVol)
    {
        $this->year1SalesVol = $year1SalesVol;
    }

    /**
     * @return mixed
     */
    public function getYear2SalesVol()
    {
        return $this->year2SalesVol;
    }

    /**
     * @param mixed $year2SalesVol
     */
    public function setYear2SalesVol($year2SalesVol)
    {
        $this->year2SalesVol = $year2SalesVol;
    }

    /**
     * @return mixed
     */
    public function getYear3SalesVol()
    {
        return $this->year3SalesVol;
    }

    /**
     * @param mixed $year3SalesVol
     */
    public function setYear3SalesVol($year3SalesVol)
    {
        $this->year3SalesVol = $year3SalesVol;
    }

    /**
     * @return mixed
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * @param mixed $currency
     */
    public function setCurrency($currency)
    {
        $this->currency = $currency;
    }

    /**
     * @return mixed
     */
    public function getTargetSalesPrice()
    {
        return $this->targetSalesPrice;
    }

    /**
     * @param mixed $targetSalesPrice
     */
    public function setTargetSalesPrice($targetSalesPrice)
    {
        $this->targetSalesPrice = $targetSalesPrice;
    }

    /**
     * @return mixed
     */
    public function getPotentialAnnualRev()
    {
        return $this->potentialAnnualRev;
    }

    /**
     * @param mixed $potentialAnnualRev
     */
    public function setPotentialAnnualRev($potentialAnnualRev)
    {
        $this->potentialAnnualRev = $potentialAnnualRev;
    }

    /**
     * @return mixed
     */
    public function getProbabilityOfWin()
    {
        return $this->probabilityOfWin;
    }

    /**
     * @param mixed $probabilityOfWin
     */
    public function setProbabilityOfWin($probabilityOfWin)
    {
        $this->probabilityOfWin = $probabilityOfWin;
    }

    /**
     * @return mixed
     */
    public function getExpectedValue()
    {
        return $this->expectedValue;
    }

    /**
     * @param mixed $expectedValue
     */
    public function setExpectedValue($expectedValue)
    {
        $this->expectedValue = $expectedValue;
    }

    /**
     * @return mixed
     */
    public function getQuoteDate()
    {
        $event = EventModel::where('opportunity_id','=',$dbId)->where('type','=','quote')->first();
        if($event->date) {
            return $event->date;
        } else {
            return null;
        }
    }

    /**
     * @param mixed $quoteDate
     */
    public function setQuoteDate($quoteDate)
    {
        $this->quoteDate = $quoteDate;
    }

    /**
     * @return mixed
     */
    public function getSampleDate()
    {
        $event = EventModel::where('opportunity_id','=',$dbId)->where('type','=','sample')->first();
        if($event->date) {
            return $event->date;
        } else {
            return null;
        }
    }

    /**
     * @param mixed $sampleDate
     */
    public function setSampleDate($sampleDate)
    {
        $this->sampleDate = $sampleDate;
    }

    /**
     * @return mixed
     */
    public function getApprovalDate()
    {
        $event = EventModel::where('opportunity_id','=',$dbId)->where('type','=','approval')->first();
        if($event->date) {
            return $event->date;
        } else {
            return null;
        }
    }

    /**
     * @param mixed $approvalDate
     */
    public function setApprovalDate($approvalDate)
    {
        $this->approvalDate = $approvalDate;
    }

    /**
     * @return mixed
     */
    public function getDateRcvdProdOrder()
    {
        $event = EventModel::where('opportunity_id','=',$dbId)->where('type','=','production')->first();
        if($event->date) {
            return $event->date;
        } else {
            return null;
        }
    }

    /**
     * @param mixed $dateRcvdProdOrder
     */
    public function setDateRcvdProdOrder($dateRcvdProdOrder)
    {
        $this->dateRcvdProdOrder = $dateRcvdProdOrder;
    }

    /**
     * @return mixed
     */
    public function getEstimatedProdDate()
    {
        return $this->estimatedProdDate;
    }

    /**
     * @param mixed $estimatedProdDate
     */
    public function setEstimatedProdDate($estimatedProdDate)
    {
        if(request()->method() == 'GET') {
            if($estimatedProdDate != null) {
                $this->estimatedProdDate = DateTime::createFromFormat('Y-m-d', $estimatedProdDate)->format('m/d/Y');
            }
        } else {
            $this->estimatedProdDate = $estimatedProdDate;
        }
    }

    /**
     * @return mixed
     */
    public function getProdSalesOrderNum()
    {
        return $this->prodSalesOrderNum;
    }

    /**
     * @param mixed $prodSalesOrderNum
     */
    public function setProdSalesOrderNum($prodSalesOrderNum)
    {
        $this->prodSalesOrderNum = $prodSalesOrderNum;
    }

    /**
     * @return mixed
     */
    public function getReasonForWin()
    {
        return $this->reasonForWin;
    }

    /**
     * @param mixed $reasonForWin
     */
    public function setReasonForWin($reasonForWin)
    {
        $this->reasonForWin = $reasonForWin;
    }

    /**
     * @return mixed
     */
    public function getDateLost()
    {
        return $this->dateLost;
    }

    /**
     * @param mixed $dateLost
     */
    public function setDateLost($dateLost)
    {
        if(request()->method() == 'GET') {
            if($dateLost != null) {
                $this->dateLost = DateTime::createFromFormat('Y-m-d', $dateLost)->format('m/d/Y');
            }
        } else {
            $this->dateLost = $dateLost;
        }
    }

    /**
     * @return mixed
     */
    public function getLostToWhom()
    {
        return $this->lostToWhom;
    }

    /**
     * @param mixed $lostToWhom
     */
    public function setLostToWhom($lostToWhom)
    {
        $this->lostToWhom = $lostToWhom;
    }

    /**
     * @return mixed
     */
    public function getReasonForLoss()
    {
        return $this->reasonForLoss;
    }

    /**
     * @param mixed $reasonForLoss
     */
    public function setReasonForLoss($reasonForLoss)
    {
        $this->reasonForLoss = $reasonForLoss;
    }

    /**
     * @return mixed
     */
    public function getCommentField()
    {
        return $this->commentField;
    }

    /**
     * @param mixed $commentField
     */
    public function setCommentField($commentField)
    {
        $this->commentField = $commentField;
    }

    /**
     * @return mixed
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param mixed $status
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }

    /**
     * @return mixed
     */
    public function getStage()
    {
        return $this->stage;
    }

    /**
     * @param mixed $stage
     */
    public function setStage($stage)
    {
        $this->stage = $stage;
    }


    /**
     * @param      $relatedClass
     * @param      $limit
     * @param      $page
     *
     * @return mixed
     * @throws InvalidRequestException
     */
    public function getRelated($relatedClass, $limit, $page)
    {
        switch ($relatedClass) {
            case Event::class:
                $finder = self::getFinder($relatedClass);
                break;
            default:
                throw new InvalidRequestException("NAO Opportunity not related to " . $relatedClass);
        }

        if ($limit !== null && $page !== null) {
            return $finder->findByOpportunityIdPaginated($this->getId(), $limit, $page);
        }

        return $finder->findByOpportunityId($this->getId());
    }
}
