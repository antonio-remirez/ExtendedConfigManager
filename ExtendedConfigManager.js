define([
    'dojo/_base/declare',
		'dojo/_base/lang',
		'dojo/request/xhr'
], function(declare, lang, xhr){
	
	var instance = null, clazz;

	clazz = declare(null, {
        
		extendedConfigFile: "libs/ExtendedConfigManager.json",
		extendedConfig: null,
		
		constructor: function(){
			xhr(this.extendedConfigFile, {handleAs: 'json'}).then(lang.hitch(this, function(extendedConfig){
				this.extendedConfig = extendedConfig;
			}));
		},
		
		extendConfig: function(config){
			return Object.assign(config, this.extendedConfig);
		}
		
    });
	
	clazz.getInstance = function () {
		if(instance === null) {
		  instance = new clazz();
		}
		return instance;
	};

	return clazz;
});