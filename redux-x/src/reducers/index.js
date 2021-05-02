import { EKLE , TEMIZLE , ISARETLE } from "../actions";
const INITIAL_STATE = {
  liste: [
  		{ id: 1, baslik: "Alisveris Yap", tamamlandi: false },
    	{ id: 2, baslik: "Fatura ode", tamamlandi: true }
   ]
};

export const reducers = (state = INITIAL_STATE , action) => {
	switch(action.type){
		case EKLE:
			return {
				...state,
				liste: [...state.liste,{
					id:state.liste.length + 1,
					baslik:action.payload,
					tamamlandi:false
				}]
			};
			break;
		case ISARETLE:
			return {
				...state,
				liste:state.liste.map((item) => 
						(item.id === action.payload) ? 
						{...item,tamamlandi:!item.tamamlandi}
						: item
					) 
				
			};
			break;

		case TEMIZLE:
			return {
				...state,
				liste:state.liste.filter((item) => item.tamamlandi === false)
			}
			break;
	}
	return state;
}