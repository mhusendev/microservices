<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('produk')->delete();
        $item = app()->make('App\Models\Produk');
        $item->fill([
          'nama_produk' => 'Iphone 11 pro ',
          'jenis' => 'Handphone',
          'qty' => 8,
          'create_by' => 'Muhammad Husen',
       
        ]);
        $item->save();
    }
}
