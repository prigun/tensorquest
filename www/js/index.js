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
        hint: "Подсказка для 1й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "3c1da4e9-6363-4de4-8975-430d3245f7cf": {
        order: 2,
        name: "Пропуск",
        hint: "Подсказка для 2й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "3ea55d85-b43c-46bf-b1b6-d628a529d837": {
        order: 3,
        name: "Пропуск",
        hint: "Подсказка для 3й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "789b28a7-1d6f-4e53-a0e5-cc47a329bce5": {
        order: 4,
        name: "Пропуск",
        hint: "Подсказка для 4й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "791a0341-dc8f-46a1-871f-e0f8498601a0": {
        order: 5,
        name: "Пропуск",
        hint: "Подсказка для 5й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "a5cd794e-2a25-4781-b4de-af79180f4d36": {
        order: 6,
        name: "Пропуск",
        hint: "Подсказка для 6й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "bb2eec62-0a88-4b13-a557-2a9c03c62c20": {
        order: 7,
        name: "Пропуск",
        hint: "Подсказка для 7й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "c5ce0178-7a74-42da-b800-5fde70ee8b11": {
        order: 8,
        name: "Пропуск",
        hint: "Подсказка для 8й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "ca8e999d-e652-4d6a-9963-ac0f29123e74": {
        order: 9,
        name: "Пропуск",
        hint: "Подсказка для 9й задачи",
        complete: false,
        floor: 2,
        time: "0,53"
    },
    "d129c998-7dcd-4a8b-ad22-95d9f274e2a9": {
        order: 10,
        name: "Пропуск",
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
    $("#btn-hint").click(function(){
        $("#hint").html("<p>" + JSON.parse(localStorage.getItem("data"))[localStorage.getItem("currentTask")].hint + "</p");
    });
    $("btn-hint")
});


$(document).on('pagebeforeshow', '#list-of-tasks', function(e){
    $("#list-of-tasks ul").html("");
    Object.keys(data).forEach(function(index){
        $("#list-of-tasks ul").html($("#list-of-tasks ul").html() + '<li data-icon='+ (data[index].complete ? "check" : "forbidden") +'>' +
            '<a href='+"#task-info-"+ data[index].order +'>'+data[index].order+ '. ' + data[index].name +'</a>' +
        '</li>');
        $("#list-of-tasks ul").listview("refresh");
    });
});
$(document).on('pagebeforeshow', '.task-info', function(e){
    var currentHash = location.hash;
    var numberTask = currentHash[currentHash.length - 1];
    console.log(numberTask);
    var currentDataObject;
    var i = 1; //first index
    Object.keys(data).forEach(function(index){
        if (i == numberTask)
        {
            currentDataObject = data[index];
        }
        i++;
    });
    console.log(currentDataObject);
});