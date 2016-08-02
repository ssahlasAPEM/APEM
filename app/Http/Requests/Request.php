<?php namespace app\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;

/**
 * Class Request
 * @package app\Http\Requests
 */
abstract class Request extends FormRequest
{

    /**
     * Get the proper failed validation response for the request.
     *
     * @param  array $errors
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function response(array $errors)
    {
        $jsonError = ['errors' => [[
            'title'  => 'X-Requested-With header not set',
            'status' => '400'
        ]]];

        if ($this->ajax()) {
            return new JsonResponse($errors, 400);
        }

        return new JsonResponse($jsonError, 400);
    }

    /**
     * @param Validator $validator
     *
     * @return array
     */
    public function formatErrors(Validator $validator)
    {
        $errors = [];

        $messageBag = parent::formatErrors($validator);
        foreach ($messageBag as $field => $error) {
            $pointer  = '/' . str_replace('.', '/', $field);
            $errors[] = [
                'title'  => 'Invalid request',
                'detail' => $error[0],
                'source' => ['pointer' => $pointer]
            ];
        }

        return ['errors' => $errors];
    }

    /**
     * @return bool
     */
    public function isJson()
    {
        return Str::contains($this->header('CONTENT_TYPE'), '/vnd.api+json');
    }
}
