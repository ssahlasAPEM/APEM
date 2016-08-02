<?php namespace App\Providers;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 3:58 PM
 */

use App\Core\Opportunity\Repository\OpportunityInterface;
use App\Infrastructure\Repo\Opportunity\EloquentOpportunityMapper;
use App\Models\Opportunity;
use Illuminate\Support\ServiceProvider;

/**
 * Class OpportunityServiceProvider
 * @package App\Providers
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
