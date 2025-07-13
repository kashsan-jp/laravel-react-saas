<?php

namespace Tests;

use Illuminate\Contracts\Console\Kernel;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;


trait CreateApplication
{
    use LazilyRefreshDatabase;
    public function CreateApplication(): Application
    {
        $app = require __DIR__.'/../bootstrap/app/php';

        $app->make(Kernel::class)->bootstrap();

        return $app;
    }

}