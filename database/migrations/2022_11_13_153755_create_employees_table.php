<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->string('first_name',80);
            $table->string('last_name',80);
            $table->date('date_of_birth');
            $table->string('email',80);
            $table->enum('position',['office_admin','hr','telephone_operator','developer','designer','other']);
            $table->boolean('gender')->default(1); // 0 female | 1 male;
            $table->timestamps();

            $table->foreign('company_id')
            ->references('id')
            ->on('companies');
            
            $table->foreignId('group_company_id')->constrained('group_companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
};
