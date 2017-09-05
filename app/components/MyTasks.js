'use strict';
import  React,{Component} from 'react';
import {TouchableHighlight, StyleSheet, ListView, View, Text, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MyTasks extends Component {
	constructor (props) {
		super(props);
		StatusBarIOS.setStyle('light-content');
		this.state = {
			tasksDataSource:ds.cloneWithRows(this.props.myTasks),
			loaded:false
		};		
	},
	renderTaskRow(task){
		return (
		    {/*A wrapper for making views respond properl to touches. On press down, the opacity of the wrapped view is 
		    decreased, which allows the underla color to show through, darkening or tinting the view.*/}
			<TouchableHighlight onPress={() => {this.props.navigator.push({
			                                      id:'taskBox', 
												  image:task.developer.image, 
												  name:task.developer.first_name})
												}
										}
							    style={styles.rowStyle}
                                underlayColor="#9E7CE3">
				<View style = {styles.tasksListContainer}>
					{/*StoryPointsBadge*/}
					<View style = {styles.devIconContainer}>
						<Text style={styles.rowText}>{task.storyPoints}</Text>
					</View>
					{/*taskDetails*/}
					<View style = {styles.taskDetailsContainer}>
						<View style = {styles.taskDetailsContainerWrap}>
							<View style = {styles.taskNameNdeveloperNameContainer}>
								<Text style={styles.rowText}>{task.taskName}</Text>								
							</View>
							{/*Status*/}
							<View style = {styles.StatusContainer}>
								<Text style={styles.rowText}>{task.status}</Text>					
							</View>
							{/*editIcon*/}
							<View style = {styles.editIconContainer}>
								<Icon name="edit" color='#8b4513' size={23} style={{ padding:5 }} />						
							</View>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		);
	},
	componentDidMount(){
		//fetch tasks using either fetch or dispatching an action;
	},
	render(){
		if(this.state.loaded) {
			return(
				<ListView initialListSize={6}
						  enableEmptySections={true}
						  dataSource={ this.state.tasksDataSource}
                          renderRow={(task) => {this.renderTaskRow(task)}} />
		   );
		}else{
			return (
				<Text>Retrieving tasks...</Text>
			);
		}
	};
};

const styles = StyleSheet.create({
	tasksListContainer:{
		flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
	},
	devIconContainer: {
		flex: 1,
		alignItems: "flex-start"
	},
	devImage:{
		borderRadius: 30,
		width: 60,
        height: 60
	},
	taskDetailsContainer:{
		flex: 4,
		justifyContent: "center",
		borderBottomColor: "rgba(92,94,94,0.5)",
		borderBottomWidth: 0.25
	},
	taskDetailsContainerWrap: {
		flex: 1,
		alignItems: "center",
		flexDirection: "row"
	},
	taskNameNdeveloperNameContainer:{
		alignItems: "flex-start",
		flex: 1
	},
	developerNameContainer:{
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	StatusContainer:{
		flex: 1,
		alignItems: "center"
	},
	editIconContainer:{
		flex: 1,
		alignItems: "flex-end"
	},
	rowText:{
		fontWeight:'400', 
		color:'#666', 
		fontSize:12
	}
});