import React from 'react';

const Login = ({ onLogin }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-brand-stone">
            <div className="mb-8">
                <h1 className="text-5xl font-black text-brand-orange mb-2">멍스퍼</h1>
                <p className="text-stone-600 font-medium italic">"강아지의 마음, 이제 목소리로 들으세요."</p>
            </div>

            <div className="w-64 h-64 mb-8 relative rounded-full overflow-hidden border-4 border-brand-yellow shadow-xl mx-auto">
                <img
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800"
                    alt="귀여운 강아지"
                    className="w-full h-full object-cover"
                />
            </div>

            <button
                onClick={onLogin}
                className="btn-primary text-xl w-full max-w-xs mx-auto block"
            >
                바로 시작하기
            </button>

            <p className="mt-6 text-sm text-stone-400">
                별도의 가입 없이 즉시 체험해볼 수 있어요!
            </p>
        </div>
    );
};

export default Login;
