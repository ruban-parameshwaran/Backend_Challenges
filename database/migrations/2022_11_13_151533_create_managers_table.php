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
        Schema::create('managers', function (Blueprint $table) {
            
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->string('first_name',80);
            $table->string('last_name',80);
            $table->string('email',80);
            $table->string('nic',80);
            $table->timestamps();

            $table->foreign('company_id')
                ->references('id')
                ->on('companies');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('managers');
    }
};
