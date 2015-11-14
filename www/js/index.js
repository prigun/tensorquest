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

if (!localStorage.getItem("currentTask")) {
    localStorage.setItem("currentTask", "32976937-8ec6-442d-bec0-84594c6f1f7f");
}

window.addEventListener("load", function() {
    $("#btn-hint").click(function(){
        $("#hint").html("<p>" + data[localStorage.getItem("currentTask")].hint + "</p");
    })
});

var data = {
    "32976937-8ec6-442d-bec0-84594c6f1f7f": {
        order: 1,
        name: "Пропуск",
        hint: "Подсказка для 1й задачи"
    },
    "3c1da4e9-6363-4de4-8975-430d3245f7cf": {
        order: 2,
        name: "Пропуск",
        hint: "Подсказка для 2й задачи",
    },
    "3ea55d85-b43c-46bf-b1b6-d628a529d837": {
        order: 3,
        name: "Пропуск",
        hint: "Подсказка для 3й задачи",
    },
    "789b28a7-1d6f-4e53-a0e5-cc47a329bce5": {
        order: 4,
        name: "Пропуск",
        hint: "Подсказка для 4й задачи",
    },
    "791a0341-dc8f-46a1-871f-e0f8498601a0": {
        order: 5,
        name: "Пропуск",
        hint: "Подсказка для 5й задачи",
    },
    "a5cd794e-2a25-4781-b4de-af79180f4d36": {
        order: 6,
        name: "Пропуск",
        hint: "Подсказка для 6й задачи",
    },
    "bb2eec62-0a88-4b13-a557-2a9c03c62c20": {
        order: 7,
        name: "Пропуск",
        hint: "Подсказка для 7й задачи",
    },
    "c5ce0178-7a74-42da-b800-5fde70ee8b11": {
        order: 8,
        name: "Пропуск",
        hint: "Подсказка для 8й задачи",
    },
    "ca8e999d-e652-4d6a-9963-ac0f29123e74": {
        order: 9,
        name: "Пропуск",
        hint: "Подсказка для 9й задачи",
    },
    "d129c998-7dcd-4a8b-ad22-95d9f274e2a9": {
        order: 10,
        name: "Пропуск",
        hint: "Подсказка для 10й задачи",
    },
};
$(document).on('pagebeforeshow', '#list_of_tasks', function(e){
    data.each(function(index){

    })
});