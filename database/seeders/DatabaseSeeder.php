<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Package;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       User::factory()->create([
        'name' => 'Kashsan',
        'email' => 'kashsan_jp@yahoo.co.jp',
        'password' => bcrypt('8131kash')
       ]);

       Feature::create([
        'image' => 'https://img.icons8.com/?size=100&id=63650&format=png&color=000000',
        'route_name' => 'feature1.index',
        'name' => 'Calculate Sum',
        'description' => 'Calculate sum of two numbers',
        'required_credits' => 1,
        'active' => true,
       ]);

       Feature::create([
        'image' => 'https://img.icons8.com/?size=100&id=12386&format=png&color=000000',
        'route_name' => 'feature2.index',
        'name' => 'Calculate Difference',
        'description' => 'Calculate difference of two numbers',
        'required_credits' => 3,
        'active' => true,
       ]);

       Package::create([
        'name' => 'Basic',
        'price' => 5,
        'credits' => 20,
       ]);
       Package::create([
        'name' => 'Silver',
        'price' => 20,
        'credits' => 100,
       ]);
       Package::create([
        'name' => 'Gold',
        'price' => 50,
        'credits' => 500,
       ]);
    }
}
