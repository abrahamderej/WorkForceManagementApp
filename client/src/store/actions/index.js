export const loginAction = () => {
    return{
        type: 'LOGIN'
    };
};;

export const setUserProfile = (user) =>{
    console.log("usr data in action "+ user);
    return {
        type: "SETUSER",
        payload: user
    }
};