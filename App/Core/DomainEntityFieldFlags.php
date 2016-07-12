<?php namespace App\Core;

/**
 * Created by Curious Minds Media.
 * User: Zachary Hamm (hamm.zachary@gmail.com)
 * Date: 12/01/15
 * Time: 03:00 PM
 */

class DomainEntityFieldFlags
{

    // READONLY - the property should only be read from the database, never
    // written to it by our mappers
    //
    // WRITEONLY - the property should be written to the database, never
    // read/displayed to the frontend by our mappers. A writeonly property
    // might appear in the POST/PATCH json object, but will never appear in the
    // GET or the response to that POST/PATCH. (For instance, a password)
    //
    // ADDITIONALPARSE - This property requires additional processing.
    // Currently only used in the response macros.
    //
    // JSON - the field should be json_encoded when storing to the backend, and
    // json_decoded when reading from the backend

    const NONE            = 0;
    const READONLY        = 1;
    const WRITEONLY       = 1 << 1;
    const ADDITIONALPARSE = 1 << 2;
    const CREATEONLY      = 1 << 3;
    const UPDATEONLY      = 1 << 4;
    const JSON            = 1 << 5;
    const SKIP            = 1 << 6; // Use this to override default fields you don't want
    const REAL_NULL       = 1 << 7;
}
