'use client';

const Auth = () => {

    const handleInstagramLogin = () => {
        const clientId = '1247032136528863';
        const redirectUri = 'https://pq6wqffh-3000.euw.devtunnels.ms';
        // const redirectUri = 'http://localhost:3000/';
        // const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

        // const instagramAuthUrl = `https://www.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=instagram_business_basic&response_type=code`;
        const instagramAuthUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${clientId}&redirect_uri=${redirectUri}/&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish`
        window.location.href = instagramAuthUrl;
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="p-8 bg-white     rounded-lg shadow-xl max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-black mb-6">NeuroTalk</h1>
                <p className="text-gray-700 text-center font-bold mb-8">
                    Войдите с помощью вашего аккаунта Instagram, чтобы начать использовать NeuroTalk
                </p>
                <button 
                    onClick={handleInstagramLogin}
                    className="w-full flex font-bold items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 
                    text-white rounded-md hover:from-purple-700 hover:to-pink-600 focus:outline-none 
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                    disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-instagram w-5 h-5 mr-2">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    Войти через Instagram
                </button>
            </div>
        </div>
    );
};

export default Auth;