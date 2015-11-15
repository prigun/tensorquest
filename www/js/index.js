/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


var data = {
    "32976937-8ec6-442d-bec0-84594c6f1f7f": {
        order: 1,
        name: "Пропуск",
        hint: "",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "3c1da4e9-6363-4de4-8975-430d3245f7cf": {
        order: 2,
        name: "Ребус",
        hint: "Подсказка для 2й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "3ea55d85-b43c-46bf-b1b6-d628a529d837": {
        order: 3,
        name: "Найти место по звуку",
        hint: "Подсказка для 3й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "789b28a7-1d6f-4e53-a0e5-cc47a329bce5": {
        order: 4,
        name: "Посмотрите видео",
        hint: "Подсказка для 4й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "791a0341-dc8f-46a1-871f-e0f8498601a0": {
        order: 5,
        name: "Код в шахматах",
        hint: "Подсказка для 5й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "a5cd794e-2a25-4781-b4de-af79180f4d36": {
        order: 6,
        name: "Комната с летающими людьми",
        hint: "Подсказка для 6й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "bb2eec62-0a88-4b13-a557-2a9c03c62c20": {
        order: 7,
        name: "Найти печку",
        hint: "Подсказка для 7й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "c5ce0178-7a74-42da-b800-5fde70ee8b11": {
        order: 8,
        name: "И снова прослушайте",
        hint: "Подсказка для 8й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "ca8e999d-e652-4d6a-9963-ac0f29123e74": {
        order: 9,
        name: "Найти обезьянку",
        hint: "Подсказка для 9й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "d129c998-7dcd-4a8b-ad22-95d9f274e2a9": {
        order: 10,
        name: "Финал",
        hint: "Подсказка для 10й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    }
};

if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(data));
}

if (!localStorage.getItem("currentTask")) {
    localStorage.setItem("currentTask", "32976937-8ec6-442d-bec0-84594c6f1f7f");
}

window.addEventListener("load", function() {
    $("#btn-play").click(function(){
        if (!localStorage.getItem("taskStartTime")) {
            localStorage.setItem("taskStartTime", +new Date());
        }
        if (!localStorage.getItem("hinted")) {
            $("#btn-hint").addClass("ui-state-disabled");
        }
    });

    $("#btn-newgame").click(function(){
        localStorage.clear();
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem("taskStartTime", +new Date());
        localStorage.setItem("currentTask", "32976937-8ec6-442d-bec0-84594c6f1f7f");
    })
});

$("#btn-play").click(function() {
    var currentTask_num = data[localStorage.getItem("currentTask")].order;
    if (currentTask_num>1) {
        $.mobile.changePage("#task"+currentTask_num);
        return false;
    }
    return true;
});

$(document).on('pagebeforeshow', '#home', function(e){
    $("#btn-newgame").hide();
    if (localStorage.getItem("taskStartTime")) {
        $("#btn-play").html('Продолжить');
        $("#btn-newgame").show();
    }
});

$(document).on('pagebeforeshow', '#list-of-tasks', function(e){
    $("#list-of-tasks-ul").html("");
    var data = JSON.parse(localStorage.getItem("data"));
    Object.keys(data).forEach(function(index){
        if (index == localStorage.getItem("currentTask"))
        {
            $("#list-of-tasks-ul").html($("#list-of-tasks ul").html() + '<li data-icon="recycle">' +
                '<a href='+"#task"+ (data[index].order - 1 == 0 ? "" : data[index].order)+'>'+data[index].order+ '. ' + data[index].name +'</a>' +
                '</li>');
        }
        else {
            $("#list-of-tasks-ul").html($("#list-of-tasks ul").html() + '<li data-icon='+ (data[index].complete ? "check" : "") +'>' +
                '<a href='+"#task"+ (data[index].complete ? (data[index].order - 1 == 0 ? "" : data[index].order) : "32") +'>'+data[index].order+ '. ' + data[index].name +'</a>' +
                '</li>');
        }
    });
    $("#list-of-tasks-ul").listview("refresh");
});
$(document).on('pagebeforeshow', '.main-task', function(e){
    var currentHash = location.hash;
    currentHash = currentHash.substring(1);
    var numberTask = currentHash[currentHash.length - 1];
    if (isNaN(numberTask))
    {
        numberTask = 0;
    }
    numberTask++;
    console.log(numberTask);
    var currentDataObject;
    var i = 1; //first index
    var data = JSON.parse(localStorage.getItem("data"));
    Object.keys(data).forEach(function(index){
        if (i == numberTask)
        {
            currentDataObject = data[index];
        }
        i++;
    });
    if (currentDataObject.complete)
    {
        $("#" + currentHash + " .prop__time span").text(currentDataObject.time);
        $("#" + currentHash + " .prop__floor span").text(currentDataObject.floor);
    }
    else
    {
        $("#" + currentHash + " .prop__time").css("display", "none");
        $("#" + currentHash + " .prop__floor").css("display", "none");
    }
});

$(document).on('pagebeforeshow', '.task-info', function(e){
    var currentHash = location.hash;
    currentHash = currentHash.substring(1);
    var numberTask = currentHash[currentHash.length - 1];
    console.log(numberTask);
    var currentDataObject;
    var i = 1; //first index
    var data = JSON.parse(localStorage.getItem("data"));
    Object.keys(data).forEach(function(index){
        if (i == numberTask)
        {
            currentDataObject = data[index];
        }
        i++;
    });
    if (currentDataObject.complete)
    {
        $("#" + currentHash + " .prop__time span").text(currentDataObject.time);
        $("#" + currentHash + " .prop__floor span").text(currentDataObject.floor);
    }
    else
    {
        $("#" + currentHash + " .prop__time").css("display", "none");
        $("#" + currentHash + " .prop__floor").css("display", "none");
    }
});

function addTask(num) {
    $(document).on('pagebeforeshow', '#task'+num, function (e) {
        setInterval(function(){
            if (localStorage.getItem("taskStartTime") && +new Date() - localStorage.getItem("taskStartTime") > 5000) {
                $("#btn-hint"+num).removeClass("ui-state-disabled");
                localStorage.setItem("hinted", true);
            }
        }, 200);
    });
}

addTask("");
for (var i = 2; i<=10; i++) {
    addTask(i);
}

function scan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled)
            {
                if(result.format == "QR_CODE")
                {

                    var data = JSON.parse(localStorage.getItem("data"));
                    var numberTask = data[localStorage.getItem("currentTask")].order+1;

                    if (localStorage.getItem("currentTask") === result.text) {
                        data[localStorage.getItem("currentTask")].complete = true;
                        data[localStorage.getItem("currentTask")].time =  +new Date() - localStorage.getItem("taskStartTime");
                        localStorage.setItem("taskStartTime", +new Date());
                        $.mobile.changePage("#task"+numberTask);
                        for (var key in data) {
                            if (data[key].order == numberTask)
                            {
                                localStorage.setItem("currentTask", key);
                            }
                        }
                        $( "#success_popup" ).popup("open");
                    }
                    else
                    {
                        $( "#fail_popup" ).popup("open");
                    }
                    localStorage.setItem("data", JSON.stringify(data));
                }

            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}

$(document).on('pagebeforeshow', '#current-floor-plan', function(e) {
    var currentFloorNumber = window.localStorage.getItem("curentSelectedFloorPlanPage");
    var finalSvgObjectElement = "<img id='current-floor-svg' style='height: 700px;' src='img/" + currentFloorNumber + ".svg'></img>";
    $("#current-floor-number").text(currentFloorNumber + "-этаж:");
    $("#panzoom").empty().append(finalSvgObjectElement);
});

$(document).ready(function (){
    $('#panzoom').panzoom({
        $zoomIn: $(".zoom-in"),
        $zoomOut: $(".zoom-out"),
        $reset: $(".reset")
    });
    var areas = $("#navigation-map").children();
    for (var i = 0; i < areas.length; i++) {
        var currentArea = areas[i];
        $(currentArea).bind("click", function () {
            window.localStorage.setItem("curentSelectedFloorPlanPage", $(this).attr('page-number'));
            var nextPage = "#current-floor-plan";
            $.mobile.changePage(nextPage, {
                transition: 'slide'
            });
        });
    }
    $('.map').maphilight({
        fillColor: '09FF11',
        fillOpacity: 0.4
    });
});
$(document).ready(function() {
    $("#task2 .task-info__answer-button button").click(function(){
        var val = $(this).parent().parent().find(".task-info__input input").val();
        if (/программист/i.test(val)) {
            $(this).parent().parent().find("p").text("Найдите ваш QR - код на 2м этаже рядом с железным человеком.");
            $(this).parent().parent().find(".task-info__photo").css("display", "none");
        }
    });
});

function currentTask() {
    var currentTask_num = data[localStorage.getItem("currentTask")].order;
    if (currentTask_num == 1) {
        currentTask_num = '';
    }
    $.mobile.changePage("#task"+currentTask_num);
}

$( function() {
    $( "#success_popup" ).enhanceWithin().popup();
    $( "#fail_popup" ).enhanceWithin().popup();
});