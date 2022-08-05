/* eslint-disable default-case */
export default function reducer(state,action){
    switch (action.type){
        case "CURRENT_USER":
            return {...state,user:action.payload};
        case "GET_ALL_SONGS":
            return {...state,songs:action.payload};
        case "GET_ALL_USERS":
            return {...state,users:action.payload};    
        case "CREATE_ONE_SONG":
            return {...state,song:[...state.song,action.payload]};
        case "DELETE_ONE_SONG":
            return {...state,
                songs: state.songs.filter((song)=>song.id !== action.payload._id)};
        case "DELETE_ONE_USER":
            return {...state,
                users: state.user.filter((user)=>user.id !== action.payload._id)};
        default:
            return state;
            
    }
}