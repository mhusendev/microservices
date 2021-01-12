<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Produk extends Model
{ 

	public $timestamps = false;
   
    protected $table='produk';
    protected $primaryKey ="id";
}