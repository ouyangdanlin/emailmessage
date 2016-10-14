/**
 * Created by ouyangdanlin on 16/10/14.
 */
argular.mobile('starter.controllers',[])

.controller('signCtrl',function($scape)){
    $scape.user = {
        name:
    };
    $scape.signin = function()
    {
        console.login($scape.user.name);
        $state.gp('feed');
    }
})

.controller('feedCtrl',function($scape))