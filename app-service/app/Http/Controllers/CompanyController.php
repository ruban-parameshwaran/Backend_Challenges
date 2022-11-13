<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompanyResource;
use Illuminate\Http\Request;
use App\Service\GroupByOwnerService;

class CompanyController extends Controller
{
    public function __construct(private GroupByOwnerService $ownerService)
    {
        $this->ownerService = $ownerService;
    }

    public function index() {
        $data = $this->ownerService->getGroupByOwnersDocuments();
        return CompanyResource::collection($data);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|max:120|unique:companies',
        ]);
        
        $data = $this->ownerService->setStoreCompany($request->all());
        return new CompanyResource($data);
    }
}
