<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TestCase extends Illuminate\Foundation\Testing\TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost';

    protected $headers = [
        'CONTENT_TYPE' => 'application/vnd.api+json',
        'HTTP_X-Requested-With' => 'XMLHttpRequest'
    ];

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        $app = require __DIR__.'/../bootstrap/app.php';

        $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $app;
    }

    public function setUp()
    {
        parent::setUp();

        $credentials = [
            'username' => 'TestHarness',
            'password' => 'X9Z2gPd9',
        ];

        Auth::attempt($credentials, true);
    }

    public function tearDown()
    {
        parent::tearDown();
    }
}
