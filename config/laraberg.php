<?php
    return [
        /*
        |--------------------------------------------------------------------------
        | API Routes
        |--------------------------------------------------------------------------
        */
        'use_package_routes' => TRUE,
        'middlewares'        => [],
        'prefix'             => 'laraberg',
        /*
        |--------------------------------------------------------------------------
        | Embed settings
        |--------------------------------------------------------------------------
        */
        'embed'              => [
            'maxwidth'  => 1200,
            'maxheight' => 1200,
            'cache'     => [
                'enabled'  => FALSE,
                'duration' => 86400,
            ],
        ],
    ];
