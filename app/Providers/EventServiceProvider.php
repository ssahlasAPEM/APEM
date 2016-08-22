<?php namespace app\Providers;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 08/13/16
 * Time: 3:32 PM
 */

use app\Core\Event\Repository\EventInterface;
use app\Infrastructure\Repo\Event\EloquentEventMapper;
use app\Models\Event;
use Illuminate\Support\ServiceProvider;

/**
 * Class EventServiceProvider
 * @package app\Providers
 */
class EventServiceProvider extends ServiceProvider
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
            EventInterface::class,
            function () {
                return new EloquentEventMapper(new Event());
            }
        );
    }
}
