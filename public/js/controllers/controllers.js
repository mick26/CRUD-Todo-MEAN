'use strict';

/* ============================================================================
Module - for the Controllers
============================================================================ */
angular.module('mongoDbApp.controllers', [])

/**
 * Controller - MainCtrl
 */
.controller('MainCtrl', function($http, $q, getTodosService,
    createTodoService, updateTodoService, deleteTodoService, $log) {

    var main =this;
    main.formData = {};

    /**
     * Get Todos
     */
    getTodosService.getTodos()
    .then(function(answer) {
        main.todos = answer;
    },
    function(error) {
        console.log("OOPS!!!! " + JSON.stringify(error));
    });

    /*
     * Create a New Todo
     */
    main.createTodo = function() {
        createTodoService.createTodo(main.formData)
        .then(function(answer) {
            main.todos = answer;
        },
        function(error) {
        	console.log("Error Creating Todo!!!! " + JSON.stringify(error));
        });
    };

    /*
     * Update a Todo
     */
    main.editTodo = function(id, txt, isDone) {
    	var updateData = {"text":txt, "done": isDone};
    	updateTodoService.updateTodo(id, updateData)
    	.then(function(answer) {
    		main.todos = answer;
    	},
    	function(error) {
    		console.log("OOPS Error Updating!!!! " + JSON.stringify(error));
    	});
    };

    /**
     * Delete a Todo
     */
    main.deleteTodo = function(id) {
        deleteTodoService.deleteTodo(id)
        .then(function(answer) {
            main.todos = answer;
        },
        function(error) {
            console.log("OOPS Error Deleting!!!! " + JSON.stringify(error));
        });
    };
});
