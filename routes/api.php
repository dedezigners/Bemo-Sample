<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CardController;
use App\Http\Controllers\ColumnController;

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

Route::apiResource('column', ColumnController::class);
Route::apiResource('card', CardController::class);
Route::post('card/{card}/position', [CardController::class, 'updatePosition']);
Route::post('removed/{card}', [CardController::class, 'remvoedCard']);
Route::post('added/{card}', [CardController::class, 'addedCard']);
