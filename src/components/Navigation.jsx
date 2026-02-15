import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, User } from 'lucide-react';

const Navigation = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-stone-200 px-6 py-3 z-50">
            <div className="max-w-md mx-auto flex justify-between items-center">
                <NavLink
                    to="/"
                    className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-brand-orange' : 'text-stone-400'}`}
                >
                    <Home size={24} />
                    <span className="text-[10px] font-bold">홈</span>
                </NavLink>

                <NavLink
                    to="/analyze"
                    className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-brand-orange' : 'text-stone-400'}`}
                >
                    <Search size={24} />
                    <span className="text-[10px] font-bold">AI분석</span>
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-brand-orange' : 'text-stone-400'}`}
                >
                    <User size={24} />
                    <span className="text-[10px] font-bold">프로필</span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navigation;
