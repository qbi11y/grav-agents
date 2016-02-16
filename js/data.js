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
        		{id: 1, name: 'Agent 1 Name', url: 'agentURL', status: 'active', scope: 'scope', type: 'fulfillment'},
        		{id: 2, name: 'Agent 2 Name', url: 'agentURL', status: 'active', scope: 'scope', type: 'pre-provisioning'},
        		{id: 3, name: 'Agent 3 Name', url: 'agentURL', status: 'inactive', scope: 'scope', type: 'post-provisioning'}];
        },

        setAgentDetails: function(a) {
        	selectedAgent = a;
        },

        getAgentDetails: function() {
        	return selectedAgent;
        }
    }
})