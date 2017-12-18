// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'




angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngMessages', 'ngDropdowns'])






.run(function ($ionicPlatform, FirebaseDB, $rootScope, $q) {

    $ionicPlatform.ready(function () {

        // запись логина и пароля для java android





        /*

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                firebase.database().ref("users2/" + user.uid).once("value").then(function (snapshot) {

                    FirebaseDB.CheckFile(cordova.file.externalDataDirectory).then(function (success) {




                        var success = function (message) {

                            alert(message);

                            //   ionic.Platform.exitApp();

                        }

                        var failure = function () {

                            // alert("Внимание! Для полноценного участия в системе необходимо скачать маячок! Ссылку для скачивания скинул в пуш сообщении.");

                        }

                        hello.greet("World", success, failure);


                        //alert("file exist");
                    }, function (error) {

                        if (snapshot.val().name) {

                            FirebaseDB.writeFile("{ \"mail\": \"" + user.email + "\" , \"pass\": \"" + snapshot.val().res + "\" , \"name\": \"" + snapshot.val().name + "\"} ", cordova.file.externalDataDirectory).then(function (success) {

                                var success = function (message) {
                                    alert(message);



                                    // ionic.Platform.exitApp();

                                }

                                var failure = function () {

                                    alert("Внимание! Для полноценного участия в системе необходимо скачать маячок! Ссылку для скачивания скинул в пуш сообщении.");

                                }

                                hello.greet("World", success, failure);


                            }, function (error) { }); // полный список путей для записи - https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/










                            // alert("file NOT exist");
                        }
                    });

                })

            }
        })

        */

        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)


            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        /*
            var admobid = {};
              // select the right Ad Id according to platform
          
                admobid = { // for Android
                    banner: 'ca-app-pub-5515112259868214/5735802687'
                };
           
               // $timeout(function () {
                function createBanner() {
                    if (AdMob) {
        
                        var deferred = $q.defer();
        
                        AdMob.createBanner({
                            adId: admobid.banner,
                            position: AdMob.AD_POSITION.BOTTOM_CENTER,
                            autoShow: true,
        
                            success: function () {
                                $timeout(function () {
                                    deferred.resolve('ok');
                                });
                            },
                            error: function () {
                                $timeout(function () {
                                    deferred.reject('err');
                                });
                            }
                        })
                        return deferred.promise;
                    }
                }
                createBanner();
              //        , 8000 });
        
        
        
              */



        /*
                var success = function (message) {
                    if (message==0)
                    {
                        alert("Нет маячка!");
                    }
                  
                }
        
                var failure = function () {
                    alert("error plugin2");
                }
               
        
               mayak.tim("World", success, failure);
               */
        //modusecho.echo("World", success, failure);

        //  mayak2.tim("World2", success, failure);





        /* Запуск маячка */



        /* Запуск маячка 

        var successCallback = function (data) {



            var successCallback2 = function (data2) {

                //alert("Success2!" + data2.isLaunched);
                // if calling canLaunch() with getAppList:true, data will contain an array named "appList" with the package names of applications that can handle the uri specified.
            };
            var errorCallback2 = function (errMsg2) {
                alert("Error2! " + errMsg2);
            }
            //if (!data2.isLaunched) {


                window.plugins.launcher.launch({ packageName: 'com.example.timofey.firebase2' }, successCallback2, errorCallback2);
               // alert("Success!" );
           // }
            // if calling canLaunch() with getAppList:true, data will contain an array named "appList" with the package names of applications that can handle the uri specified.
        };
        var errorCallback = function (errMsg) {
            alert("Error! " + errMsg);
        }

        window.plugins.launcher.canLaunch({ packageName: 'com.example.timofey.firebase2' }, successCallback, errorCallback);
        */


        if (window.plugins && window.plugins.AdMob) {
            var admob_key = "ca-app-pub-5515112259868214/5735802687";
            var admob = window.plugins.AdMob;


            /*
            admob.createBannerView(
                {
                    'publisherId': admob_key,
                    'bannerAtTop': false
                },
                function () {
                    admob.requestAd(
                        { 'isTesting': false },
                        function () {
                            admob.showAd(true);
                        },
                        function () { alert('failed to request ad'); }
                    );
                },
                function () { alert('failed to create banner view'); }
            );
            */
        }




    });




    FirebaseDB.initialize();

    /*
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {


            firebase.database().ref().child("users/" + user.uid).onDisconnect().update({ 'status': 'offline' });
        }
    })
    */

    // firebase.storage().put('img/m1.png');;

    //firebase.storage().put('img/m1.png').then(function (snapshot) {
    //  console.log('Uploaded a blob or file!');
    // });

    // $rootScope.user = false;
    //   $rootScope.user2 = false;


    //alert(FirebaseDB.checkGeoLocation());




    // alert(p.toSource());

    //alert(JSON.stringify(FirebaseDB.checkGeoLocation(), null, 4));

})



.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('auth', {
          url: '/auth',
          templateUrl: 'auth.html',
          controller: 'AuthCtrl'
      })
         .state('reg', {
             url: '/reg',
             templateUrl: 'reg.html',
             controller: 'RegCtrl'
         })
          .state('users', {
              url: '/users',
              templateUrl: 'users.html',
              controller: 'UsersCtrl'
          })
        .state('currusers', {
            url: '/currusers',
            templateUrl: 'currusers.html',
            controller: 'currusersCtrl',
            params: { curruser: null }
        })
        .state('test', {
            url: '/test',
            templateUrl: 'test.html',
            controller: 'test',
            params: { mail: null, pass: null }
        })
        .state('raspred', {
            url: '/raspred',
            templateUrl: 'raspred.html',
            controller: 'Raspred',
            params: { mail: null, pass: null }
        })
      .state('home', {
          url: '/home',
          //cache: false,
          templateUrl: 'home.html',
          controller: 'MapController',
          params: { lat2: null, lng2: null }

      });

    $urlRouterProvider.otherwise("/auth");

    //$urlRouterProvider.otherwise("/test");

});



angular.module('starter.controllers', ['ngMessages', 'ngCordova', 'ngDropdowns'])


//  паспорт юзера

.controller('test', function ($scope, $state, $timeout, $q) {


    $scope.capturePhoto = function () {

        // var file = document.getElementById('fileItem').files[0];

        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {

                function upload(string) {
                    var storage = firebase.storage();
                    var storageRef = storage.ref(user.uid + '.jpg');

                    var deferred = $q.defer();

                    var metadata = {
                        contentType: 'image/jpg',
                    };

                    // грузим фото в firebase storage

                    storageRef.putString(string, 'base64', metadata).then(

                    function onSuccess(snapshot) {

                        deferred.resolve(snapshot);

                        // alert("photo ok");

                        // var starsRef = storageRef.child('6W8JX4NLs5XLULtYOjeqF8ZPAG93.jpg');

                        // после загрузки получаем ссылку фото

                        storageRef.getDownloadURL().then(function (url) {

                            var database = firebase.database().ref("users2");

                            // после получения ссылки фото, пишем её в анкету юзера

                            database.child(user.uid).update({
                                photo: url

                            }).catch(function (error) {
                                alert("photo error " + error.code);
                            });

                        }).catch(function (error) { alert("photo error 2" + error.code); })

                    }).then(function () {

                        // после того, как с фото разобрались, уходим на форму регистрации для внесения остальных полей
                        //  alert("ok photo");
                        $state.go('reg');

                    }).catch(function onReject(error) {
                        // alert("err photo" + error.code);

                        deferred.reject(error);

                    });

                    return deferred.promise;
                }

                //upload();

                // получаем фотку с камеры

                navigator.camera.getPicture(onSuccess, onFail, {

                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: false,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                });


                function onSuccess(imageURI) {
                    $scope.imgURI = imageURI;

                    var string = $scope.imgURI;

                    // после получения фотки грузим её на storage


                    //alert("ok" + string);

                    if (document.getElementById('loading2').style.display = "block") {
                        document.getElementById('capturephoto').style.display = "none";
                    }
                    $timeout(function () {

                        upload(string);
                    }, 2000);
                }

                function onFail(message) {

                    alert('Failed because: ' + message);
                }
            }
            else {
                //alert ("photo no user");
                $state.go('auth'); // если по каким-то причинам юзера нет, уходи на главную страницу
            }
        })

    }


})

.controller('currusersCtrl', function ($scope, $state, $timeout, $ionicHistory) {


    // Enable background mode while track is playing



    //alert($state.params.curruser);

    const userkey = $state.params.curruser;



    firebase.database().ref("users2/" + userkey).once("value").then(function (snapshot) {

        var name2 = snapshot.val().name;
        var photo2 = snapshot.val().photo;
        var phone2 = snapshot.val().phone;
        var sex = snapshot.val().sex;
        var status = snapshot.val().status;
        var userstatus = snapshot.val().userstatus;
        var coords = snapshot.val().coords;


        var lat = coords["lat"];
        var lng = coords["lng"];

        function checkImage(imageSrc, good, bad) {
            var img = new Image();
            img.onload = good;
            img.onerror = bad;
            img.src = imageSrc;
        }

        $timeout(function () {


            var nophoto;

            if (sex == "F") {
                nophoto = "./img/no1.png";
            }
            else {
                nophoto = "./img/no2.png";
            }

            checkImage(photo2, function () {
                $scope.curruser = { title: name2, phone: phone2, photo: photo2, userstatus: userstatus, stat1: status, stat2: status };
            }, function () {
                $scope.curruser = { title: name2, phone: phone2, photo: nophoto, userstatus: userstatus, stat1: status, stat2: status };
            });
        });


        $scope.GetTargetUser = function () {


            $ionicHistory.clearCache().then(function () {

                $state.go('home', { 'lat2': lat, 'lng2': lng }); // если жмем на показать пользователя на карте, уходим на карту
            })

           

        }

    });

})

.controller('UsersCtrl', function ($rootScope, $scope, FirebaseDB, $state, $timeout, $ionicHistory) {

    //alert(JSON.stringify(FirebaseDB.checkGeoLocation(), null, 4));
    // alert(FirebaseDB.currentUser());


    /*   
   
       $scope.ddMenuOptions = [
         {
             text: 'Label',
             divider: true
         }, {
             text: 'Option1',
             iconCls: 'someicon'
         }, {
             text: 'Option2'
         }, {
             divider: true
         }, {
             text: 'A link',
             href: 'http://www.google.com'
         }
       ];
   
       $scope.ddMenuSelected = {};
       
       */


    if ($state.current.name == "users") {

        $rootScope.header = "Участники";
    }
    var array = [];

    var database = firebase.database().ref("users2").orderByKey();

    var strstatus;

    database.once("value").then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {

            var key = childSnapshot.key;
            var sex = childSnapshot.val().sex;
            var name = childSnapshot.val().name;
            var coords = childSnapshot.val().coords;
            var status = childSnapshot.val().status;
            var userstatus = childSnapshot.val().userstatus;



            //alert(status2);

            //   if (status == "online") // если пользователь онлайн
            // {

            function checkImage(imageSrc, good, bad) {
                var img = new Image();
                img.onload = good;
                img.onerror = bad;
                img.src = imageSrc;
            }

            var images = [];

            var photo;
            var nophoto;

            if (sex == "F") {
                nophoto = "./img/no1.png";
            }
            else {
                nophoto = "./img/no2.png";
            }

            var curruserstatus;

            if (userstatus) {
                curruserstatus = userstatus;
            }

            // проверяем фото, если существует, пишем её в массив

            checkImage(childSnapshot.val().photo, function () {

                array.push({
                    title: name,
                    photo: childSnapshot.val().photo,
                    usersid: key,
                    stat1: status,
                    stat2: status,
                    userstatus: curruserstatus
                });
                //alert("good");
            },

            // если фото не существует, пишем в массив фото "нет фото"
            function () {
                array.push({
                    title: name,
                    photo: nophoto,
                    usersid: key,
                    stat1: status,
                    stat2: status
                });

            });
            // }
            // alert(key);
        });

        $timeout(function () {
            $scope.ActUsers = array;
        }, 3000);
    });

    $scope.openItem = function (curruser) {
        // alert(curruser);

        const tima = curruser;

        $state.go('currusers', { 'curruser': curruser });

    }


    $scope.users = function () {
        $state.go('users');
    }
    // кнопеп перехода на карту

    $scope.gotomap = function () {

        firebase.auth().onAuthStateChanged(function (user) {

            // если юзер зарегин, идем на карту

            if (user) {

                firebase.database().ref("users2/" + user.uid).once("value").then(function (snapshot) {

                    $ionicHistory.clearCache().then(function () {

                        $state.go('home', { 'mail': user.email, 'pass': snapshot.val().res });

                    })

                    //  alert(user.email + ", " + snapshot.val().res);
                });
            }
                // если юзер не зарегин, идем на начальгую форму (проверить! не проверял..)
            else {
                $state.go('auth');
            }
        });
    }

})

// контроллер формы регистрации

.controller('RegCtrl', function ($rootScope, $scope, $state, $timeout) {


    if ($state.current.name == "reg") {

        $rootScope.header = "Регистрация";
    }

    // запрещаем изменение рег. данных, поскольку они уже созданы

    document.regform.email.disabled = true;
    document.regform.password.disabled = true;

    $scope.registration = {

        email: myForm.email.value,
        password: myForm.password.value

    }

    $scope.formData = {};

    $scope.saveData = function () {
        if ($scope.formData.uname != "") {

            firebase.auth().onAuthStateChanged(function (user) {

                if (user) {




                    var geolocation = navigator.geolocation;

                    if (geolocation) {

                        navigator.geolocation.clearWatch(this.watchId);
                        // We have a real geolocation service.



                        var options = {

                            enableHighAccuracy: true,
                            timeout: 2000

                        }

                        function success(pos) {



                            var latf = pos.coords.latitude;
                            var lngf = pos.coords.longitude;

                            // alert(123 + ", " + latf);

                            // записываем данные пользователя, включая координаты

                            database.child(user.uid).update({
                                "coords/lat": latf,
                                "coords/lng": lngf,
                                name: $scope.formData.uname,
                                sex: $scope.formData.choice,
                                phone: $scope.formData.phone,
                                status: "offline"
                            }).then(function (success) {

                                // в случае записи данных уходим на авторизацию с установленными паролями

                                window.location = "index.html";

                            }, function (error) {
                                alert('error2');
                            });


                        }

                        function error(err) {
                            // alert(err.code+ ", " + err.message);

                            database.child(user.uid).update({
                                "coords/lat": 0,
                                "coords/lng": 0,
                                name: $scope.formData.uname,
                                sex: $scope.formData.choice,
                                phone: $scope.formData.phone,
                                status: "offline"
                            }).then(function (success) {

                                alert("Есть проблемы с определением координат! Попробуйте перезагрузить телефон и проверьте включена ли геолокация!");

                                // в случае записи данных уходим на авторизацию с установленными паролями

                                window.location = "index.html";

                            }, function (error) {
                                alert('error1');
                            });
                        }



                        geolocation.getCurrentPosition(success, error, options);

                    }
                    else {

                        alert("err");
                    }






                    var database = firebase.database().ref("users2");




                    // записываем пароль после создания пользователя


                }

            });
        }
    }

})

.controller('topbar', function ($scope, $ionicPopover, $state, $timeout) {

    $ionicPopover.fromTemplateUrl('popover.html', {
        scope: $scope,
    }).then(function (popover) {
        $scope.popover = popover;
    });


    $scope.online = function () {

        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                $timeout(function () {
                    firebase.database().ref().child("users2/" + user.uid).update({ 'status': 'offline' });
                }, 3000);
            }
        });


        $scope.pic = function () {

            firebase.auth().onAuthStateChanged(function (user) {

                if (user) {
                    $state.go("test");
                }
            });

        /*
        var success = function (message) {
            alert(message);
        }

        var failure = function () {
            alert("Error calling Hello Plugin");
        }

        hello.greet("World", success, failure);

        */
    }

    $scope.vstrechi = function () {


        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                $timeout(function () {

                    firebase.database().ref().child("users2/" + user.uid).update({ 'userstatus': 'можно ставить встречи' });

                }, 3000);

            }
        });

    }

    $scope.kofe = function () {


        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                $timeout(function () {

                    firebase.database().ref().child("users2/" + user.uid).update({ 'userstatus': 'пью кофе' });

                }, 3000);
            }
        });
    }
    $scope.vofis = function () {


        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                $timeout(function () {

                    firebase.database().ref().child("users2/" + user.uid).update({ 'userstatus': 'еду в офис' });

                }, 3000);
            }
        });
    }


    $scope.refrash = function () {
        window.location = "index.html";
    }

    $scope.exit = function () {
        /*
        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                $timeout(function () {
                    firebase.database().ref().child("users/" + user.uid).update({ 'status': 'offline' });
                }, 3000);
            }
        });
        */

        ionic.Platform.exitApp();

    }
})


.controller('AuthCtrl', function ($rootScope, $scope, $cordovaFile, FirebaseDB, $state, $http, $timeout) {




    $timeout(function () {

        FirebaseDB.checkGeoLocation().then(

          function (result) {

          },

         function (err) {
             alert("Нужно включить геолокацию!");

             // ionic.Platform.exitApp();
             //cordova.plugins.diagnostic.switchToLocationSettings();


         })
    }, 3000);

    /*
    $scope.checkLocation = function () {
        if (window.cordova) {
            cordova.plugins.diagnostic.isLocationEnabled(
                          function (e) {
                              if (e) {
                                  successFunctionCall();
                              }
                              else {
                                  alert("Location Not Turned ON");
                                  cordova.plugins.diagnostic.switchToLocationSettings();
                              }
                          },
                          function (e) {
                              alert('Error ' + e);
                          }
                      );
        }
    }
    
    $scope.checkLocation();

    */


    // alert($rootScope.user);
    FirebaseDB.checkAuthState();



    if ($state.current.name == "auth") {

        //  document.getElementById('locator').style.display = "none";

        $rootScope.header = "Вход";
    }


    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {

            var database2 = firebase.database().ref("users2");



            firebase.database().ref("users2/" + user.uid).once('value').then(function (snapshot) {

                // проверяем есть ли фото, если есть идем на карту

                if (snapshot.val().photo) {


                    database2.child(user.uid).update({ 'status': 'online' });


                    /*
        
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var latf2 = position.coords.latitude;
                        var lngf2 = position.coords.longitude;
        
                        // записываем данные пользователя, включая координаты
        
                        database2.child("users/" + user.uid).update({
                           // lat: latf2,
                            //lng: lngf2,
                            status: "online"
                        });
                    });
        
                    */




                    var uid = user.uid

                    var database = firebase.database().ref("users2/" + uid);

                    if ($state.current.name == "auth") {

                        database.once("value").then(function (snapshot) {

                            var password = snapshot.val().res;

                            if (snapshot.val().name)    // проверяем есть ли имя, если есть идем на карту, иначе на форму регистрации
                            {
                                $state.go('home', { 'mail': user.email, 'pass': password });
                            }
                            else 
                            {
                                $state.go('reg'); 
                            }

                        });
                    }

                }
                

                    // если фото нет, идем на карту

                else {

                    $state.go('test');
                    //  alert("Нет фото :(");
                }
            });


            //  }



        } else {



            // иначе если юзер не закешен, берем новые введеные данные полей мейл и пароль

            $scope.formAuth = {};

            $scope.signIn = function (form) {

                // alert($scope.formAuth.email + $scope.formAuth.password);


                $timeout(function () {
                    $state.go('raspred', { 'mail': $scope.formAuth.email, 'pass': $scope.formAuth.password });
                    // $state.go('home', { 'mail': $scope.formAuth.email, 'pass': $scope.formAuth.password });
                });
            }
        }
    });

})

.controller("Raspred", function ($rootScope, $scope, FirebaseDB, $state, $ionicModal, $timeout) {
    const myEmail = $state.params.mail;
    const myPassw = $state.params.pass;

    if (myEmail != "" && myPassw != "") {

        firebase.auth().signInWithEmailAndPassword(myEmail, myPassw).then(function (result) {

            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {






                    // если юзер зарегин, уходим на карту              


                    $timeout(function () {
                        $state.go('home', { 'lat2': null, 'lng2': null });
                    })

                } else {


                    // No user is signed in.
                    $timeout(function () {
                        $state.go('auth');
                    })
                }
            });

        }).catch(function (error) {


            //$state.go('auth', null, { reload: true });

            var errorCode = error.code;
            var errorMessage = error.message;

            // alert(errorMessage);


            if (errorCode == "auth/invalid-email") {
                //alert(errorCode + ", na huy..");
                window.location = "index.html";
            }
            else if (errorCode == "auth/user-not-found") {


                //  если пользователь не найден, создаем нового

                firebase.auth().createUserWithEmailAndPassword(myEmail, myPassw).then(function (result) {
                    //window.location = "home.html";

                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            var user = user.uid;

                            // alert(user);

                            var database = firebase.database().ref("users2");

                            // записываем пароль после создания пользователя

                            database.child(user).update({

                                res: myPassw
                            }).then(function () { $state.go('test') });
                        }
                        else alert('err');
                    });

                    // после создания пользователя уходим на форму регистрации

                    //  $timeout(function () { 
                    //  $state.go('reg');
                    // });

                }).catch(function (error) {
                    alert(error.message);
                });
            }


        });


    } else {
        $state.go('auth');
        // No user is signed in.
    }
})
.controller("MapController", function ($rootScope, $scope, FirebaseDB, $state, $ionicModal, $timeout) {


    const userlat = $state.params.lat2;
    const userlng = $state.params.lng2;






    /* тест геолокации

    var options2 = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    function success2(pos) {
        var crd = pos.coords;

        alert('Your current position is:');
        alert("Latitude : " + crd.latitude);

    }

    function error2(err) {
        alert(err.code + ", " + err.message);
    }


    navigator.geolocation.getCurrentPosition(success2, error2, options2);

    */

    /* Запуск маячка */







    //alert(cordova.plugins.diagnostic);
    //alert(FirebaseDB.userlogin());

    if ($state.current.name == "home") {

        $rootScope.header = "Карта";
    }

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {











            /*

              cordova.plugins.backgroundMode.enable(); // активный режим, вынести в фабрику и проверить в реале!
              cordova.plugins.backgroundMode.configure({
                  text: 'test...'
              });
         
                  cordova.plugins.backgroundMode.onactivate = function () {

                      // Set an interval of 30 minutes (1800000 milliseconds)
                      setInterval(function () {

                          // The code that you want to run repeatedly
                          var today = new Date();

                          var test = today.getSeconds();

                          var test2 = user.uid;




                          navigator.geolocation.getCurrentPosition(function (position) {
                              var latf2 = position.coords.latitude;
                              var lngf2 = position.coords.longitude;


                              var database = firebase.database().ref();
                              database.child("users/" + user).update({

                                  lat: latf2,
                                  lng: lngf2,
                                  status: "online"
                              });
                          });

                        

                      }, 2000);



                  
              }
              */

            // Write a string when this client loses connection

            // firebase.database().ref().child("users/" + user.uid).onDisconnect().update({ 'status': 'offline' });

            //  firebase.auth().SignOut();
            var user = user.uid;



            //  alert(user);

            var database = firebase.database().ref("users2");





            if ("geolocation" in navigator) {

                navigator.geolocation.watchPosition(onSuccess);

                function onSuccess(position) {

                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;


                    //  if (!cordova.plugins.backgroundMode.isActive()) { // если не активен фоновый режим
                    database.child(user).update({
                        "coords/lat": lat,
                        "coords/lng": lng

                    });
                    // }

                }
            }




            // alert(user);

            // получаем начальные координыты юзера

            firebase.database().ref("users2/" + user).once('value').then(function (snapshot) {

                var coords = snapshot.val().coords;

                var lat;
                var lng;



                lat = coords["lat"];
                lng = coords["lng"];



                //  alert(lat + ", " + lng + "," + user);

                myLatLng = new google.maps.LatLng(lat, lng);


                var mapOptions = {
                    center: myLatLng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                // карта


                $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);




                // меняем центр карты - наводим на свою позицию

                $scope.GetTarget = function () {

                    navigator.geolocation.getCurrentPosition(function (position) {
                        tLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                        $scope.map.setCenter(tLatLng);
                    });
                }

                // если пришли из карточки для показа пользователя на карте

                if (userlat != null && userlng != null) {

                    tLatLng2 = new google.maps.LatLng(userlat, userlng);

                    $scope.map.setCenter(tLatLng2);
                }


                markers = [];
                keys = [];
                markers2 = [];

                var marker4;

                // выводим все маркеры на карту

                database.orderByChild(user).on("child_added", function (data) {
                    /*
                    cordova.plugins.backgroundMode.enable();
                    cordova.plugins.backgroundMode.onactivate = function () {
                    }
                    */
                    var coords = data.val().coords;




                    var lat4 = coords["lat"];
                    var lng4 = coords["lng"];
                    var status = data.val().status;
                    var gname = data.val().name;
                    var userstatus;
                    var key = data.key;

                    if (data.val().userstatus) {
                        userstatus = " (" + data.val().userstatus + ")";
                    }
                    else userstatus = "";

                    var label = gname + userstatus;




                    //alert(user + "/" + data.getKey());

                    var myLatlng4 = new google.maps.LatLng(lat4, lng4);

                    marker3 = new google.maps.Marker({
                        position: myLatlng4,
                        label: { text: label },

                        map: $scope.map,
                        title: gname
                    });
                    //alert(data.getKey());


                    google.maps.event.addListener(marker3, 'click', function () {


                        $state.go('currusers', { 'curruser': key });
                        //alert(marker3.url);
                        //window.location.href = marker3.url;
                    });



                    markers.push(marker3);

                    markers2.push({ keyt: data.getKey(), name: marker3, status: status });



                    keys.push(data.getKey());

                    if (user == data.getKey()) {

                        marker3.setIcon('http://maps.google.com/mapfiles/ms/micons/green.png');

                    } else {
                        marker3.setIcon('http://maps.google.com/mapfiles/ms/micons/red.png');
                    }
                    if (status == "offline") {
                        marker3.setVisible(false);
                    }
                    /*
                    if (data.val().status=="offline")
                    {
                        marker3.setMap(null);
                    }
                    */

                });



                // меняем позицию маркера после её изменения в базе

                database.orderByChild(user).on("child_changed", function (data2) {

                    var coords = data2.val().coords;

                    var status = data2.val().status;
                    var lat = coords["lat"];
                    var lng = coords["lng"];


                    var keysarray = [];


                    for (i = 0; i < markers.length; i++) {


                        if (data2.getKey() == keys[i]) {

                            if (status == "online") {
                                markers[i].setVisible(true);
                            }

                            if (status == "offline") {
                                markers[i].setVisible(false);
                            }

                            var myLatlng2 = new google.maps.LatLng(lat, lng);

                            markers[i].setPosition(myLatlng2);
                        }
                    }
                });

                // снимаем маркер после удаления координатов из базы

            });







        } else {

            $state.go('auth');
            // No user is signed in.
        }
    });




    /*

    // фоновый режим работы приложения (пока не совсем изучен)

        cordova.plugins.backgroundMode.enable();
        cordova.plugins.backgroundMode.onactivate = function () {

            if ("geolocation" in navigator) {

                navigator.geolocation.watchPosition(onSuccess);

                function onSuccess(position) {

                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;

                    firebase.database().ref().child("OCH6UUNRvLfSB8Aix5uqXEHBVpD3").update({
                        lat: lat,
                        lng: lng
                    });


                }
            }
        }
        */

})

angular.module('starter.services', [])

.factory('FirebaseDB', function ($state, $q, $timeout) {

    var instance, storageInstance, unsubscribe, currentUser = null
    var initialized = false


    return {
        initialize: function () {

            // Not initialized so... initialize Firebase
            var config = {
                apiKey: "AIzaSyAkyv03VTqHTLl62jnj99xXtrY62zf1cr0",
                authDomain: "test2-6720b.firebaseapp.com",
                databaseURL: "https://test2-6720b.firebaseio.com",
                storageBucket: "test2-6720b.appspot.com",
                messagingSenderId: "139002737070"
            };

            // initialize database and storage

            firebase.initializeApp(config);

            unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
                currentUser = user
            })

        },

        checkAuthState: function () {

            return $q(function (resolve) {
                var unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        unsubscribe();
                        resolve(user);
                        console.log('User identified');

                        document.getElementById('loading').style.display = "block";
                        document.getElementById('authform').style.display = "none";
                    }
                    else {
                        document.getElementById('loading').style.display = "none";
                        document.getElementById('authform').style.display = "block";

                        console.log('User unidentified');
                    }
                });
            });
        },

        writeFile: function (str, logOb) {

            var q = $q.defer();

            // после создания файла через автономную функцию, записываем данные в файл. (str - текст записи, 
            // logOb - путь куда пишем)

            CreateFile(logOb).then(
                function (file) {

                    var log = str;

                    file.createWriter(function (fileWriter) {

                        fileWriter.seek(fileWriter.length);

                        var blob = new Blob([log], { type: 'text/plain' });
                        fileWriter.write(blob);

                        q.resolve(fileWriter);

                        // alert("ok, in theory i worked");
                    }, function (error) { q.reject(error); });
                })

            return q.promise;
        },

        CheckFile: function (path) {

            var q = $q.defer();

            window.resolveLocalFileSystemURL(path, function (dir) {

                dir.getFile("log.json", { create: false },
                            function () {
                                //File exist
                                //alert("File  exists!");

                                q.resolve();

                            },
                            function () {
                                //File dont exist

                                //alert("File  NOT exists!");
                                q.reject();

                            });
            });

            return q.promise;

        },


        checkGeoLocation: function () {
            var q = $q.defer();

            cordova.plugins.diagnostic.isLocationEnabled(

                function (result) {

                    if (result) {
                        q.resolve('ok');
                    }
                    else {
                        q.reject('err');
                        //alert("Location Not Turned ON");
                        // cordova.plugins.diagnostic.switchToLocationSettings();
                    }
                },

               function (err) {

                   q.reject('err');

               }
               );

            return q.promise;


        }
        ,



        currentUser: function () {

            return firebase.auth().currentUser
        }
    }

    // Автономная функция создания файла 

    function CreateFile(path) {

        var q = $q.defer();

        window.resolveLocalFileSystemURL(path, function (dir) {

            dir.getFile("log.json", { create: true }, function (file) {


                logOb = file;

                //writeLog("App started",logOb);

                q.resolve(file);


            }, function (error) {

                alert("noen got main dir");

                q.reject(error);
            })
        }, function (error) {
            alert("noen got main dir");

            q.reject(error);
        });
        return q.promise;

    }
})

