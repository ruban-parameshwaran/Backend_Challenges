<?php

namespace App\Http\Controllers;

use App\Enums\RequestType;
use App\Http\Resources\ShiftResource;
use App\Models\Shifts;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShiftController extends Controller
{
    public function index() {
        try{
            $data = DB::table('shifts')
                    ->select('shift_type','id')
                    ->get();
            $data = ShiftResource::collection($data);

            return response()->json([
                "message" => true,
                "data" => $data
            ],RequestType::CODE_201);

        }catch(Exception $e){
            return response()->json([
                "message" => false,
                "data" => $e->getMessage()
            ],$e->getCode());
        }
    }
}
