<?php namespace App\Http\Middleware;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:38 PM
 */

use Closure;

/**
 * Class JsonApi
 * @package App\Http\Middleware
 */
class JsonApi
{

    /**
     * The Security implementation
     *
     * @var Security
     */
    private $security;

    /**
     * JsonApiMiddleware constructor.
     *
     * @param SecurityServiceInterface $security
     */
    public function __construct( /* $security */ )
    {

        //$this->security = $security;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /*
        if ($this->security->check() || env('APP_ENV') == 'testing') {
            return $next($request);
        }

        $error = $this->makeJsonError('Not Authorized.');

        return response()->json($error, 401);
        */

        return $next($request);
    }

    /**
     * @param        $title
     * @param string $details
     *
     * @return array
     */
    protected function makeJsonError($title, $details = "")
    {
        $error                    = ['errors' => []];
        $error['errors']['title'] = $title;
        if (!empty($details)) {
            $error['errors']['details'] = $details;
        }

        return $error;
    }
}
