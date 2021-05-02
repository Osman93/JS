export const reducer = (state,action) => {
	switch(action.type){
		case "FETCH_SATART":
			return {...state,loading:true,data:"",error:""};
			break;

		case "FETCH_SUCCESS":
			return {...state,loading:false,data:action.payload};

			break;

		case "FETCH_ERROR":
			return {...state,loading:false,error:action.payload};

			break;
		default:
			return state;
			break;
	}
}