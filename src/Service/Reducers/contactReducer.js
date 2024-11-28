const initialState = {
    contacts: [],
    loading: false, 
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetchContacts":
            return {
                ...state,
                contacts: Array.isArray(action.payload) ? action.payload : [],
                loading: false, 
            };
        
        case "set_Loading":
            return {
                ...state,
                loading: action.payload, 
            };
        
        case "addContact":
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        
        case "editContact":
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
            };

        case "removeContact":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };
        
        default:
            return state;
    }
};

export default contactReducer;
