<?php namespace app\Providers;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 11/16/15
 * Time: 3:32 PM
 */

use app\Core\User\Repository\UserInterface;
use app\Infrastructure\Repo\User\EloquentUserMapper;
use app\Models\User;
use Illuminate\Support\ServiceProvider;

/**
 * Class FieldServiceProvider
 * @package app\Providers
 */
class UserServiceProvider extends ServiceProvider
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
            UserInterface::class,
            function () {
                return new EloquentUserMapper(new User());
            }
        );
    }
}
