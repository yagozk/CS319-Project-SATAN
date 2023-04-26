import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            // console.log(JSON.stringify(prev));
            // console.log(response.data.accessToken);
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.accessToken,
                user: response.data.username
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;


// import axios from '../api/axios';
// import useAuth from './useAuth';

// const useRefreshToken = () => {
//     const { setAuth } = useAuth();

//     const refresh = async () => {
//         let key = localStorage.getItem("base64key");
//         console.log("HWWWAHH: "+ key);
//         // const response = await axios.get("/auth/signin",
//         //     {
//         //         headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${key}` },
//         //         withCredentials: true
//         //     }
//         // );
        
//         let storageRoles = JSON.parse(localStorage.getItem("roles"));
//         let storageToken = localStorage.getItem("accessToken");
//         setAuth(prev => {
//             // console.log(JSON.stringify(prev));
//             // console.log(response.data.accessToken);
//             return {
//                 ...prev,
//                 roles: storageRoles,
//                 accessToken: storageToken
//             }
//         });
//         return storageToken;
//     }
//     return refresh;
// };

// export default useRefreshToken;