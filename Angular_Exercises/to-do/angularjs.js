let myApp = angular.module('ToDo',[]);

myApp.controller('FormCtrl',function($scope){
    $scope.tasks = [];
    $scope.completed = 0;


    $scope.addTodo = function(){
        $scope.tasks.push({title: $scope.title, completed: false});
        $scope.title = "";
    }


    $scope.clearCompleted = function(){
        $scope.completed = 0;
        $scope.tasks = $scope.tasks.filter((item)=>{
            return !item.completed;
        })
    }


    $scope.removeTask = (idx)=>{
        // console.log(idx);
        $scope.tasks.splice(idx,1);
    }

    $scope.taskStatusChange = (idx)=>{
        $scope.tasks[idx].completed = !$scope.tasks[idx].completed;
        if($scope.tasks[idx].completed){
            $scope.completed++;
        }
        else{
            $scope.completed--;
        }
        $scope.tasks.sort((a,b)=>{
            return Number(a.completed)- Number(b.completed);
        })
    }
});