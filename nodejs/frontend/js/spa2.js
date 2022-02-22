var meetings = angular.module("meetings", ["ngRoute"]);
//router config
meetings.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "./taskPages/today.html",
      controller: "todayCtrl",
    })
    .when("/player", {
      templateUrl: "./std_page/meetingsplayer.html",
      controller: "empCtrl",
    })
    .when("/search", {
      templateUrl: "./std_page/searchMeetingsplayer.html",
      controller: "searchCtrl",
    })
    .when("/addplayer", {
      templateUrl: "./std_page/addMeetingsplayerForm.html",
      controller: "addCtrl",
    });
});

//controllers
meetings.controller("meetingCtrl", ($rootScope) => {
  $rootScope.emp = 0;
});

meetings.controller("todayCtrl", function ($scope, $rootScope) {
  $rootScope.var = "Todays meetings";
  $rootScope.emp = 0;
  $scope.message = "No meetings for today!";
});
meetings.controller("empCtrl", function ($rootScope, $scope, $http, $location) {
  $rootScope.var = "Student Details";
  $rootScope.emp = 0;
  //retrieve JSON file
  $http.get("http://localhost:8100/player").success(function (response) {
    $rootScope.players = response;
    console.log("PMS_AM player Table retrieved.");
  });
  //POST request to remove player
  $rootScope.removeEmp = function (id, name) {
    $http.post("/Removeplayer", { id: id, name: name }).success(() => {
      $location.path("/");
    });
  };
  //POST request to update player
  $rootScope.updateEmp = function (emp) {
    $rootScope.emp = emp;
    $location.path("/addplayer");
  };
});
meetings.controller(
  "searchCtrl",
  function ($scope, $rootScope, $http, $location) {
    $rootScope.var = "Search Student";
    $scope.message = "Search Student by STD_ID:";

    //retrieve JSON file
    $http.get("http://localhost:8100/player").success(function (response) {
      $rootScope.players = response;
      console.log("empJSON retrieved.");
    });

    search_name = document.getElementById("search_name");
    search_name.addEventListener("keyup", () => {
      if (search_name.value.trim() == "") {
        document.getElementById("search_table").style.display = "none";
      } else {
        document.getElementById("search_table").style.display = "table";
      }
    });
  }
);
meetings.controller("addCtrl", function ($rootScope, $scope) {
  if ($rootScope.emp === 0) {
    $rootScope.var = "Add Student";
    $scope.formAction = "/Addplayer";
  } else {
    $rootScope.var = "Update player";
    $scope.formAction = "/Updateplayer";
  }
});
