<?php

namespace App\Http\Resources;

use App\Models\Employee;
use Illuminate\Http\Resources\Json\JsonResource;

class AttendanceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "employee" =>  $this->employee,
            "checkin" =>  $this->checkin,
            "checkout" =>  $this->checkout,
            "total_working_hours" =>  $this->total_working_hours,
        ];
    }
}
