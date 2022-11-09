<?php

use App\Http\Controllers\AttendanceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AttendanceController::class)->group(function() {
    Route::get('attendance','index');
    Route::post('attendance','store');
});