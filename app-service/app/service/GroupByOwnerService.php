<?php

namespace App\Service;

use App\Models\Company;
use App\Models\Document;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GroupByOwnerService {

    public function getGroupByOwnersDocuments() {
        return Company::with('document')->get();
    }

    public function setStoreCompany($data){
        return Company::create([
            'name' => $data['name']
        ]);
    }

    public function setStoreDcoument($data){

        $doc_name = $data['file']->getClientOriginalName();
        $doc_exe = $data['file']->getClientOriginalExtension();
        $doc_path = $data['file']->getRealPath();
        return Document::create([
            'doc_name' => $doc_name,
            'doc_path' => $doc_exe,
            'doc_extension' => $doc_path,
            'company_id' => $data['company_id']
        ]);
    }

}