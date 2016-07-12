<?php namespace App\Providers;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 11/16/15
 * Time: 3:32 PM
 */

use Illuminate\Support\ServiceProvider;
use App\Core\Field\Repository\FieldInterface;
use App\Infrastructure\Repo\Field\EloquentFieldMapper;
use App\Models\Field;

/**
 * Class FieldServiceProvider
 * @package App\Providers
 */
class FieldServiceProvider extends ServiceProvider
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
            FieldInterface::class,
            function () {
                return new EloquentFieldMapper(new Field());
            }
        );
    }
}
