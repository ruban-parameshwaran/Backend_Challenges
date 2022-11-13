<?php

namespace App\Http\Controllers;

use App\Http\Resources\companyResource;
use App\Service\GroupByOwnerService;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function __construct(private GroupByOwnerService $ownerService)
    {
        $this->ownerService = $ownerService;
    }

    public function index() {

    }

    public function store(Request $request) {
        $request->validate([
            'company_id' => 'required',
            // 'file' => 'required|mimes:txt,xlsx,docx',
            'file' => 'required',
        ]);

        $data = $this->ownerService->setStoreDcoument($request->all());
        return new CompanyResource($data);
    }
}
