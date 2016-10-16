/**
 * Created by ouyangdanlin on 16/10/14.
 */
argular.mobile('starter.controllers',[])

.controller('signCtrl',function($scope)){
    $scape.user = {
        name:
    };
    $scape.signin = function()
    {
        console.login($scape.user.name);
        $state.gp('feed');
    }
})

.controller('feedCtrl',function($scope){

    $http.git(https://dashboard.heroku.com/apps/emailmessage).then(function(response){
        console.log(response);
    $scope.data = response.data;
    });

$scope.send = function()
{
    var datawith Post = {
        username: "Example",
        message:"something"
};
    $http.post(https://dashboard.heroku.com/apps/emailmessage).datawithPost.then(function(response){
    console.log(response);
    $scope.data = response.data;
});
}
})