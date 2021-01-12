<?php
 
namespace App\Http\Controllers;
 use Illuminate\Support\Facades\Hash;
use App\Models\Produk;
use Illuminate\Http\Request;
class ProdukController extends Controller
{


	 public function __construct()
    {
        $this->middleware("login");
    }
    
    public function index()
    {
        return response()->json(Produk::all(),200);
    }
  public function getid($id){
  	$check = Produk::firstWhere('id',$id);

  	return response()->json($check,200);
  }
    public function simpanproduk(Request $request){

		$insert = new produk;
		$insert->nama_produk = $request->nama_produk;
		$insert->jenis = $request->jenis;
		$insert->qty = $request->qty;
		$insert->create_by= $request->create_by;
		$insert->save();
		return response([
			'status'=>'ok',
			'pesan'=>'data berhasil masuk',
			'data'=>$insert
		],200);
	}

	public function deleteProduk($id){
		$check = Produk::firstWhere('id',$id);
		if ($check) {
			Produk::destroy($id);
			return response([
				'status'=>'OK',
				'pesan'=>'data berhasil dihapus'

			],200);
			# code...
		} else{
			return response([
				'status'=>'Not Found',
				'pesan'=>'Data gagal dihapus'

			],404);
		}
	}

	public function updateProduk(Request $request,$id){

		$cek = Produk::firstWhere('id',$id);
		if ($cek) {
			$data= Produk::find($id);
			$data->nama_produk = $request->nama_produk;
			$data->jenis = $request->jenis;
			$data->qty = $request->qty;
		    $data->create_by = $request->create_by;
			$data->save();
			return response([
				'status'=>'OK',
				'pesan'=>'data berhasil Diubah'

			],200);
			# code...
		}
		else{
		   return response([
				'status'=>'Not Found',
				'pesan'=>'data  tidak ada'

			],404);
		}
	}

}