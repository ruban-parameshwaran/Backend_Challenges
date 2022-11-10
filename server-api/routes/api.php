<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ShiftController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {

    Route::controller(AttendanceController::class)->group(function () {
        Route::get('attendance', 'index');
        Route::post('attendance', 'store');
    });

    Route::controller(EmployeeController::class)->group(function () {
        Route::post('employee', 'store');
    });

    Route::controller(ShiftController::class)->group(function() {
        Route::get('shift','index');
    });

});
