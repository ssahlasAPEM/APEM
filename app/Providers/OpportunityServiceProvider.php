<?php namespace app\Providers;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:58 PM
 */

use app\Core\Opportunity\Repository\OpportunityInterface;
use app\Infrastructure\Repo\Opportunity\EloquentOpportunityMapper;
use app\Models\Opportunity;
use Illuminate\Support\ServiceProvider;

/**
 * Class OpportunityServiceProvider
 * @package app\Providers
 */
class OpportunityServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->register();
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            OpportunityInterface::class,
            function () {
                return new EloquentOpportunityMapper(new Opportunity());
            }
        );
    }
}
