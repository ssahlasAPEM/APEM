<?php namespace App\Providers;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 11/16/15
 * Time: 3:32 PM
 */

use App\Core\User\Repository\UserInterface;
use App\Infrastructure\Repo\User\EloquentUserMapper;
use App\Models\User;
use Illuminate\Support\ServiceProvider;

/**
 * Class FieldServiceProvider
 * @package App\Providers
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
