<?php

/**
 * Created by Curious Minds Media.
 * User: Andrew Engstrom (andrew@curiousm.com)
 * Date: 11/25/15
 * Time: 3:07 PM
 */
class UserControllerTest extends TestCase
{

    public $id;

    public function setUp()
    {
        parent::setUp();
        $user     = new \app\Models\User;
        $testUser = $user->first();
        $this->id = $testUser->id;
    }

    public function testUserRequests()
    {
        // Index Request
        $response = $this->call('GET', 'api/v1/users', ['per_page' => '5', 'page' => '1'], [], [], ['CONTENT_TYPE' => 'application/vnd.api+json', 'HTTP_X-Requested-With' => 'XMLHttpRequest']);
        $this->assertEquals(200, $response->status());

        // Index Search Request
        $response = $this->call('GET', 'api/v1/users', ['name' => 'andrew', 'per_page' => '2', 'page' => '1'], [], [], ['CONTENT_TYPE' => 'application/vnd.api+json', 'HTTP_X-Requested-With' => 'XMLHttpRequest']);
        $this->assertEquals(200, $response->status());

        // Show Request
        $response = $this->call('GET', 'api/v1/users/' . $this->id, [], [], [], ['CONTENT_TYPE' => 'application/vnd.api+json', 'HTTP_X-Requested-With' => 'XMLHttpRequest']);
        $this->assertEquals(200, $response->status());

        // Show Not Found Request
        $response = $this->call('GET', 'api/v1/users/31337', [], [], [], ['CONTENT_TYPE' => 'application/vnd.api+json', 'HTTP_X-Requested-With' => 'XMLHttpRequest']);
        $this->assertEquals(404, $response->status());

        // User Create and Update Requests
        $attributes = [
            'username' => 'testusername',
            'password' => 'testpassword',
            'active'   => true,
            'type'     => 'User'
        ];
        $data       = [
            'type'       => 'user',
            'attributes' => $attributes
        ];
        $obj        = [
            'data' => $data
        ];

        // Create request
        $responseCreate = $this->call('POST', 'api/v1/users', [], [], [], ['CONTENT_TYPE' => 'application/vnd.api+json', 'HTTP_X-Requested-With' => 'XMLHttpRequest'], $json = json_encode($obj));
        $this->assertEquals(200, $responseCreate->status());

        // Update request
        $createData   = json_decode($responseCreate->content(), true);
        $createDataId = $createData['data']['id'];

        $attributes = [
            'username' => 'testusernameEDIT',
            'password' => 'testpassword',
            'active'   => true,
            'type'     => 'User'
        ];
        $data       = [
            'type'       => 'user',
            'id'         => $createDataId,
            'attributes' => $attributes
        ];
        $obj        = [
            'data' => $data
        ];

        $responseUpdate = $this->call('PATCH', 'api/v1/users/' . $createDataId, [], [], [], ['CONTENT_TYPE' => 'application/vnd.api+json', 'HTTP_X-Requested-With' => 'XMLHttpRequest'], $json = json_encode($obj));
        $this->assertEquals(200, $responseUpdate->status());
    }
}
