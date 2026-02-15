import React, { useState } from 'react';
import { Upload, MessageCircle, Sparkles, Loader2 } from 'lucide-react';
import { db } from '../firebase';
import { ref, push, set } from 'firebase/database';

const Home = () => {
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleUpload = () => {
        setAnalyzing(true);
        setResult(null);

        // 분석 애니메이션 시뮬레이션
        setTimeout(() => {
            setAnalyzing(false);
            setResult({
                message: "주인님! 지금 너무 신나서 같이 뛰고 싶어요! 꼬리를 이렇게 흔들고 있잖아요~ 산책 가주면 안 될까요?",
                action: "함께 가벼운 산책을 가거나 공놀이를 해주면 좋아할 거예요.",
                confidence: 95
            });

            // 히스토리에 저장 (Firebase 실시간 데이터베이스)
            const historyRef = ref(db, 'history');
            const newLogRef = push(historyRef);
            set(newLogRef, {
                id: Date.now(),
                date: new Date().toLocaleString(),
                message: "신남 & 산책 요청",
                detail: "주인님! 지금 너무 신나서 같이 뛰고 싶어요!"
            });
        }, 3000);
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <header className="mb-8">
                <h2 className="text-3xl font-bold text-stone-800">지금 기분이 어때?</h2>
                <p className="text-stone-500">강아지의 행동이나 소리를 들려주세요.</p>
            </header>

            {!analyzing && !result && (
                <div
                    onClick={handleUpload}
                    className="border-4 border-dashed border-brand-yellow rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-yellow-50 transition-colors"
                >
                    <div className="bg-brand-yellow p-4 rounded-full mb-4">
                        <Upload size={48} className="text-stone-800" />
                    </div>
                    <p className="text-lg font-bold text-stone-700 text-center">
                        영상이나 소리 파일 업로드<br />
                        <span className="text-sm font-normal text-stone-500">(또는 여기를 클릭해서 샘플 분석하기)</span>
                    </p>
                </div>
            )}

            {analyzing && (
                <div className="flex flex-col items-center justify-center p-12 space-y-4">
                    <Loader2 size={64} className="text-brand-orange animate-spin" />
                    <p className="text-xl font-bold text-brand-orange animate-pulse">멍스퍼가 분석 중이에요...</p>
                    <p className="text-stone-500 text-center">영상을 꼼꼼히 살펴보고 있어요!<br />잠시만 기다려주세요.</p>
                </div>
            )}

            {result && (
                <div className="glass-card rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-brand-orange p-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles size={24} />
                            <span className="font-bold">번역 결과</span>
                        </div>
                        <p className="text-2xl font-black leading-tight italic">
                            "{result.message}"
                        </p>
                    </div>
                    <div className="p-6 bg-white space-y-4">
                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-stone-800 mb-1">
                                <MessageCircle size={18} className="text-brand-orange" />
                                보호자님 가이트
                            </h4>
                            <p className="text-stone-600 leading-relaxed">
                                {result.action}
                            </p>
                        </div>
                        <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-sm">
                            <span className="text-stone-400 text-xs">신체 언어 분석 기반</span>
                            <button
                                onClick={() => setResult(null)}
                                className="text-brand-orange font-bold hover:underline"
                            >
                                다시 분석하기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
