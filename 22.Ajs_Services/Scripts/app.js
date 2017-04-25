var app = angular.module("myApp",[]);
app.service("mathService", function()
	{
		var result;
		this.sum= function(x,y)
		{
			result=x+y;
			return result;
		}
		this.product=function(x,y)
		{
			result=x*y;
			return result;
		}
	});
app.factory("factoryMathService",function()
	{
		var factobj={};
		factobj.divide=function(x,y)
		{
			factobj=x/y;
			return factobj;
		};
		return factobj;
	});
app.controller("modController",function($scope,mathService,factoryMathService)
	{
		$scope.x;
		$scope.y;
		$scope.Output;
		$scope.fn_sum= function()
		{
			$scope.Output=mathService.sum($scope.x,$scope.y);
		};
		$scope.fn_product= function ()
		{
			$scope.Output= mathService.product($scope.x,$scope.y);
		}
		$scope.fn_division= function()
		{
			$scope.Output= factoryMathService.divide($scope.x,$scope.y);
		};

	});