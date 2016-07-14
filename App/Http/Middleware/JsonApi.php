<?php namespace App\Http\Middleware;

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 7/11/16
 * Time: 4:38 PM
 */

use Closure;
use Illuminate\Support\Facades\Auth;

/**
 * Class JsonApi
 * @package App\Http\Middleware
 */
class JsonApi
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     * @param  string|null              $guard
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->guest()) {
            if ($request->ajax() || $request->wantsJson()) {
                //$error = $this->makeJsonError('Not Authorized.');

                //return response()->json($error, 401);
            } else {
                //return redirect()->guest('/');
            }
        }

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
