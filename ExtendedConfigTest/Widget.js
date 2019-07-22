define(['dojo/_base/declare', 
		'jimu/BaseWidget', 
		'libs/ExtendedConfigManager', 
		'dojo/_base/lang'],
  function(declare, BaseWidget, ExtendedConfigManager, lang) {

    return declare([BaseWidget], {
      
		baseClass: 'jimu-widget-customwidget',
		name: 'ExtendedConfigTest',
		widgetOnlyConfig: null,
		
		postMixInProperties: function()
		{
			this.widgetOnlyConfig = Object.assign({}, this.config);
			this.config = ExtendedConfigManager.getInstance().extendConfig(this.config);
		},

		postCreate: function() 
		{
			this.preconfig.innerHTML = "Configuración del widget: " + JSON.stringify(this.widgetOnlyConfig);
			this.postconfig.innerHTML = "Configuración extendida: " + JSON.stringify(this.config);
		}
		
    });
  });
