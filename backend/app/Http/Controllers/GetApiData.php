<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class GetApiData extends Controller
{
     public function Index()
    {
        $response = Http::get('https://api.github.com/users/mansi-1999-coder/repos');//jaydipkanpariya
         $data= json_decode($response->body(), true);
      
        if($data){
          return  $this->getDataByName($data[1]['full_name']);
         //  $this->getDataById($data[1]['id']);
        }
       
    } 
    public function getDataByName($name)
    {
        $ans= array();
        $response = Http::get('https://api.github.com/repos/mansi-1999-coder/Medical-Shop/commits');//jaydipkanpariya
        $data = json_decode($response->body(), true);
       if($data)
            foreach ($data as $key => $value) {
               array_push($ans,array('message' => $value["commit"]["message"],'date' =>$value["commit"]["committer"]["date"]));   
             }
         $ans = array_slice($ans, 0, 10);
         return $ans;
    }
 /* public function getDataById($id)
    {
        $getBranch = array();
        $urls=array();
        $commits=array();
          $response = Http::get('https://api.github.com/repositories/'.$id.'/branches');
            $branches= json_decode($response->body(), true);
            if($branches)
              foreach ($branches as $key => $value) {
                    array_push($getBranch,$value);
              }
            
           if($getBranch){
                foreach ($getBranch as $key => $value) {
                      array_push($urls,$value['commit']['url']);
                }
            }
            if($urls)
            {
                foreach ($urls as $key => $value) {
                  $response = Http::get($value);
                  array_push($commits, json_decode($response->body(), true));
                }
            }
            if($commits)
            {
                $commits = array_reverse($commits, true);
                foreach ($commits as $key => $value) {
                    echo $value["commit"]["message"]."\t\t\t\t\t\t";
                    echo $value["commit"]["committer"]["date"];
             }
        }
    }*/
}
