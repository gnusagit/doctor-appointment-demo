import {JetView} from "webix-jet";
import ProfileMenuView from "views/profilemenu";
import ThemeSettingsView from "views/themesettings";

export default class ToolView extends JetView {
	config(){
		const theme = this.app.config.theme;

		return {
			view:"toolbar",
			css:theme.toolbar + " webix_shadow_small",
			height:56,
			elements:[
				{ width:4 },
				{ css:"logo" },
				{},
				{
					paddingY:7,
					rows:[
						{
							margin:8,
							cols:[
								{
									template:"<image class=\"mainphoto\" src=\"data/photos/dr_arienette_1.jpg\" title=\"Change your personal settings\">",
									width:40, borderless:true, css:"toolbar_photo",
									onClick:{
										"mainphoto":function(){
											this.$scope.profileMenu.showMenu(this.$view);
											return false;
										}
									}
								},
								{
									view:"icon", icon:"mdi mdi-settings",
									tooltip:"Open theme settings",
									click:function(){
										this.$scope.themeSettings.showPopup(this.$view);
									}
								}
							]
						}
					]
				},
				{ width:6 }
			]
		};
	}
	init(){
		this.profileMenu = this.ui(ProfileMenuView);
		this.themeSettings = this.ui(ThemeSettingsView);
	}
}
