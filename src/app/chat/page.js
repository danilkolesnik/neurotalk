
const Chat = () => {
    return (
        <div className="flex-1 h-screen flex">
            <div className="w-1/3 border-r border-gray-700 overflow-y-auto bg-gray-800">
                <div className="p-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">Чаты</h2>
                <ul>
                    <li className="mb-2">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors">
                        <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle text-indigo-400">
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold text-gray-100">Анна</div>
                            <div className="text-sm text-gray-400 truncate">Привет! Как дела?</div>
                        </div>
                        <div className="bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">2</div>
                        </div>
                    </button>
                    </li>
                    <li className="mb-2">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors">
                        <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle text-indigo-400">
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold text-gray-100">Иван</div>
                            <div className="text-sm text-gray-400 truncate">Спасибо за информацию</div>
                        </div>
                        </div>
                    </button>
                    </li>
                    <li className="mb-2">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors">
                        <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle text-indigo-400">
                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <div className="font-semibold text-gray-100">Мария</div>
                            <div className="text-sm text-gray-400 truncate">Когда встречаемся?</div>
                        </div>
                        <div className="bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">1</div>
                        </div>
                    </button>
                    </li>
                </ul>
                </div>
            </div>
                
            <div className="flex-1 flex flex-col bg-gray-900">
                <div className="flex-1 p-4 overflow-y-auto">
                
                <div className="mb-4 text-left">
                    <div className="inline-block p-3 rounded-lg bg-gray-800 text-gray-100">Привет! Как я могу вам помочь?</div>
                </div>
                <div className="mb-4 text-right">
                    <div className="inline-block p-3 rounded-lg bg-indigo-600 text-white">У меня вопрос по вашему продукту</div>
                </div>
                <div className="mb-4 text-left">
                    <div className="inline-block p-3 rounded-lg bg-gray-800 text-gray-100">Конечно, я буду рад ответить на ваши вопросы. Что именно вас интересует?</div>
                </div>
                </div>
                <div className="p-4 bg-gray-800 border-t border-gray-700">
                <div className="flex items-center justify-end mb-2">
                    <div className="text-gray-400 text-sm">1 ответ = 1 токен</div>
                </div>
                <div className="flex items-center">
                    <button className="text-gray-400 hover:text-indigo-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                    </button>
                    <button className="text-gray-400 hover:text-indigo-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l8.57-8.57A4 4 0 118 8.84l-8.59 8.57a2 2 0 012.83-2.83l8.49-8.48"></path>
                    </svg>
                    </button>
                    <input placeholder="Введите сообщение..." className="flex-1 p-2 rounded-md border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600" type="text" defaultValue="" />
                    <button disabled className="ml-2 bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
                        <path d="M22 2l-7 20-4-9-9-4"></path>
                        <path d="M22 2L11 13"></path>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;