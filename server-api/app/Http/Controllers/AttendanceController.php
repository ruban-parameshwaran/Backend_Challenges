<?php

namespace App\Http\Controllers;

use App\Enums\RequestType;
use App\Http\Resources\AttendanceResource;
use App\Imports\AttendaceImport;
use App\Models\Attendance;
use App\Services\AttendanceService;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class AttendanceController extends Controller
{

    public function __construct(private AttendanceService $attService)
    {
        $this->attService = $attService;
    }

    public function index()
    {
        try {
            $data = $this->attService->index();
            $data = AttendanceResource::collection($data);
            return response()->json([
                "message" => true,
                "data" => $data
            ], RequestType::CODE_201);
        } catch (Exception $e) {
            return response()->json([
                "message" => false,
                "data" => $e->getMessage()
            ], $e->getCode());
        }
    }

    public function store(Request $request)
    {
        try {
              Excel::import(new AttendaceImport, $request->file('img_path'));
              return response()->json([
                  "message" => true
              ], RequestType::CODE_201);

        } catch (Exception $e) {
            return response()->json([
                "message" => false,
                "data" => $e->getMessage()
            ], $e->getCode());
        }
    }
}
