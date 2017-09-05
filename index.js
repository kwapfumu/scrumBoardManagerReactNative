'use strict';
import  React,{Component} from 'react';
import {AppRegistry, StyleSheet, Text,ListView,Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fetch } from 'fetch';
import ReleaseBacklog from './app/Components/ReleaseBacklog';
import CurrentSprint from './app/Components/CurrentSprint';
import MyTasks from './app/Components/MyTasks';

const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2});

export default class ScrumBoardManager extends Component {
	constructor (props) {
		super(props);
		StatusBarIOS.setStyle('light-content');
				
	},
	
	renderScene(route, navigator) {
		const {state,actions} = this.props;
		
		switch(route.id){
			case 'home': return (
				<HomeAndroid  {...this.props}
                              name={route.name}
				              navigator={navigator}
                              />
			);			
			case 'currentSprint':return(
				<CurrentSprint {...this.props}
							   name={route.name}
						       navigator={navigator}
                               />
			);
			case 'myTasks':return(
				<MyTasks {...this.props}
				         name={route.name}
				         navigator={navigator}
                         />
			);
			case 'releaseBacklog':return(
				<ReleaseBacklog {...this.props}
				                name={route.name}
				                navigator={navigator}
                                />
			);
			case 'taskBox':return(
				<TaskBox {...this.props}
				         name={route.name}
						 type={route.type}
				         navigator={navigator}
                         />
			);
			default return (
				<HomeAndroid  {...this.props}
							  name={route.name}
                              navigator={navigator}
                              />
			);
		};        
    },

    configureScene(route, routeStack) {
		const routeId = route.id;
		if(routeId === 'contactselection') {
			return Navigator.SceneConfigs.FloatFromBottom
		} else {
			return Navigator.SceneConfigs.FloatFromRight
		};
	},
	render () {
		return (
			<View style={{ flex:1 }}>
				<Navigator style={{ flex:1 }}
                           ref={'NAV'}
                           initialRoute={{ id: 'home', name: 'home' }} {/*The route object can contain any attribute that 
						   you need to pass to the screen components.*/}
                           renderScene={this.renderScene.bind(this)}
                           configureScene={this.configureScene.bind(this)} />
			</View>			
		);
	};
};
const styles = StyleSheet.create({});