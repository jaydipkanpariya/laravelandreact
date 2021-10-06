<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $user;
    public function __construct()
    {
        $this->user = "bootstarp";
    }
    public function index()
    {
        $response = Http::get('https://api.github.com/users/'.$this->user.'/repos');//jaydipkanpariya
        $data= json_decode($response->body(), true);
        $ans= array();
        $i=1;
        if(isset($data[0]["name"]))
        {
            foreach ($data as $key => $value) {
            
                array_push($ans,array('id'=>$i,'repo' => $value["name"]));   
                $i++;
            }
        }
         return $ans;
    }
    public function getDataByName($name)
    {
        $ans= array();
        $response = Http::get('https://api.github.com/repos/'.$this->user.'/'.$name.'/commits');//jaydipkanpariya
        $data = json_decode($response->body(), true);
        if(isset($data[0]["commit"]))
        {
              $i=1;
            foreach ($data as $key => $value) 
             {
                   array_push($ans,array('id'=>$i,'message' => $value["commit"]["message"],'date' =>$value["commit"]["committer"]["date"]));   
                   $i++;
             }
            $ans = array_slice($ans, 0, 10);
         }
         $ans = array_slice($ans, 0, 10);
         return $ans;
    }
   
   
}
