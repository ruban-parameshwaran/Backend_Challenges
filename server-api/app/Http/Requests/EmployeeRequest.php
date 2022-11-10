<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "name" => "required|max:80",
            "position" =>"required",
            "address" => "required|max:150",
            "telephone" => 'required|digits:10',
            "emp_id" => "",
            "checkin" => "",
            "checkin" => ""
        ];
    }
}
