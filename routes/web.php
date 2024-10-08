<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Main');
})->name('main');

// get coffeeco inside coffeeco folder
Route::get('/coffeeco', function () {
    return Inertia::render('CoffeeCo/CoffeeCo');
})->name('coffeeco');

// get checkout inside coffeeco folder
Route::get('/coffeeco/checkout', function () {
    return Inertia::render('CoffeeCo/Checkout');
})->name('checkout');


Route::get('/coffeeco/products', function () {
    return Inertia::render('CoffeeCo/Products');
})->name('products');

// locations
Route::get('/coffeeco/locations', function () {
    return Inertia::render('CoffeeCo/Locations');
})->name('locations');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
