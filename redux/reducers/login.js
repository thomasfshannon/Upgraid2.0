"use strict";

import axios from 'axios';


var userInitialState = {
	user_data:{},
	profile_data:null,
  goals:[],
  userList:[],
  filteredUsers:[],
};

export default function(state = userInitialState, action) {
    switch(action.type) {

    	case 'LOGIN': 

    		return {...state}

	  	case 'PROFILE':
        
	  		return {...state,profile_data:action.payload.data[0],goals:action.payload.data[0].user.goal_set}

      case 'GRAB_USERS':
        
        return {...state,userList:action.payload}

      case 'FILTERED_USERS':
      
        return {...state,filteredUsers:action.payload}

      case 'UPDATE_GOALS':
      console.log('at update',action.payload,action.payload.id)

        var goalList = state.goals.map(obj=>{
          if(obj.id===action.payload.data.id) {
            obj.completed = action.payload.data.completed;
          }
          return obj;

        });

        console.log(goalList)
        return {...state,goals:goalList}

        
      case 'SAVE_PROFILE':

           return {
           	...state,
           	user_data:action.payload} 
           
              
        default:
            return state;
            
    }
}

