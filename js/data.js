var app = angular.module('Data', []);

app.factory('Data', function() {
    var data = 'Set Some Data';
    var selectedAgent = {};
    
    return {
        getData: function() {
            return data
        },

        setData: function(d) {
            data = d;
        },

        getTable: function() {
        	return [
        		{id: 1, name: 'Blueprint Agent', url: 'http://10.201.193.247:8080/blueprint-agent', status: 'active', scope: 'Broker', type: 'fulfillment'},
        		{id: 2, name: 'ServiceNow Agent', url: 'http://10.201.193.247:8080/servicenow-agent', status: 'active', scope: 'Broker', type: 'pre-provisioning'},
        		{id: 3, name: 'email-agent', url: 'http://10.201.193.247:8080/email-agent', status: 'inactive', scope: 'Broker', type: 'post-provisioning'}];
        },

        setAgentDetails: function(a) {
        	selectedAgent = a;
        },

        getAgentDetails: function() {
        	return selectedAgent;
        }
    }
})