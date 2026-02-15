import React from 'react';
import { LogOut, Dog, Settings, ChevronRight } from 'lucide-react';

const Profile = ({ onLogout }) => {
    return (
        <div className="p-6 max-w-2xl mx-auto">
            <header className="mb-8">
                <h2 className="text-3xl font-bold text-stone-800">내 정보 설정</h2>
                <p className="text-stone-500">보호자님과 반려견의 정보</p>
            </header>

            <div className="bg-white rounded-3xl p-6 shadow-sm mb-6 border border-stone-100">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-100">
                    <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center shrink-0 overflow-hidden border-2 border-brand-orange">
                        <img
                            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=200"
                            alt="보유 강아지"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-stone-800">멍멍이 보호자님</h3>
                        <p className="text-stone-400 text-sm">alsdalsa@gmail.com</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <section>
                        <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4">반려견 프로필</h4>
                        <div className="bg-brand-stone p-4 rounded-2xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Dog className="text-brand-orange" />
                                <div>
                                    <p className="font-bold text-stone-800">해피 (Happy)</p>
                                    <p className="text-xs text-stone-500">골든 리트리버 · 2살</p>
                                </div>
                            </div>
                            <button className="text-xs font-bold text-brand-orange hover:underline">수정</button>
                        </div>
                    </section>

                    <section className="space-y-2">
                        <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">계정 설정</h4>
                        <button className="w-full flex items-center justify-between p-4 bg-white border border-stone-100 rounded-2xl hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <Settings size={20} className="text-stone-400" />
                                <span className="font-medium text-stone-700">알림 설정</span>
                            </div>
                            <ChevronRight size={18} className="text-stone-300" />
                        </button>
                    </section>
                </div>
            </div>

            <button
                onClick={() => {
                    localStorage.removeItem('woof-sper-session');
                    window.location.reload();
                }}
                className="w-full flex items-center justify-center gap-2 p-4 text-red-500 font-bold border-2 border-red-50 rounded-2xl hover:bg-red-50 transition-colors"
            >
                <LogOut size={20} />
                로그아웃
            </button>
        </div>
    );
};

export default Profile;
