<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\DocumentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(CompanyController::class)->group(function () {
    Route::get('company', 'index');
    Route::post('company', 'store');
});

Route::controller(DocumentController::class)->group(function () {
    Route::get('document', 'index');
    Route::post('document', 'store');
});
