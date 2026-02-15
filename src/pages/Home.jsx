import React, { useState, useEffect } from 'react';
import { History as HistoryIcon, Clock, ChevronRight } from 'lucide-react';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

const Home = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const historyRef = ref(db, 'history');
        const unsubscribe = onValue(historyRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // 객체를 배열로 변환하고 최신순으로 정렬
                const historyList = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                })).reverse();
                setHistory(historyList);
            } else {
                setHistory([]);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-stone-800">기록 보관소</h2>
                    <p className="text-stone-500">우리 아이의 마음 기록들</p>
                </div>
                <div className="bg-brand-yellow/20 p-3 rounded-2xl">
                    <HistoryIcon className="text-brand-orange" size={28} />
                </div>
            </header>

            {history.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-stone-200">
                    <p className="text-stone-400">심리 분석 기록이 아직 없어요.<br />분석을 시작해보세요!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {history.map((item) => (
                        <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-stone-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="bg-brand-stone p-3 rounded-2xl shrink-0">
                                <Clock className="text-stone-400" size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-bold text-stone-800 truncate">{item.message}</h4>
                                    <span className="text-[10px] text-stone-400 whitespace-nowrap ml-2">{item.date}</span>
                                </div>
                                <p className="text-sm text-stone-500 truncate italic">"{item.detail}"</p>
                            </div>
                            <ChevronRight className="text-stone-300" size={20} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
