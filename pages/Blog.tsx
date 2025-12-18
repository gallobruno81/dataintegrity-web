import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Button } from '../components/Button';

// Mock Data for Blog Posts
const POSTS = [
    {
        id: 1,
        title: "Why 'Silent Errors' in NSPB Are More Dangerous Than Crashes",
        excerpt: "Most finance teams worry about system downtime. They should be worrying about the formula that calculates revenue incorrectly but runs perfectly.",
        category: "Technical Strategy",
        author: "Senior Consultant",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "The Hidden Cost of 'Quick Fixes' in NetSuite Implementations",
        excerpt: "How temporary workarounds become permanent technical debt that slows down your close cycle and breaks integrations.",
        category: "NetSuite Core",
        author: "Architecture Team",
        date: "Sep 28, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Optimizing Workforce Planning: Logic vs. input",
        excerpt: "Is your model slow because of the data volume or the calculation script? A deep dive into efficient FIX statements.",
        category: "NSPB Performance",
        author: "Performance Expert",
        date: "Sep 15, 2024",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    }
];

export const Blog: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Knowledge Base</span>
                    <h1 className="font-display text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Insights for the Modern <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Office of Finance</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Technical deep dives, strategy guides, and best practices for Oracle NSPB and NetSuite environments.
                    </p>
                </div>

                {/* Featured Post (First one) */}
                <div className="mb-20 animate-fade-in-up [animation-delay:200ms]">
                    <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 border border-slate-100 flex flex-col md:flex-row h-full md:h-[500px]">
                        <div className="md:w-1/2 h-64 md:h-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src={POSTS[0].image} alt={POSTS[0].title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-sm font-medium mb-6">
                                <span className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full border border-brand-100">{POSTS[0].category}</span>
                                <span className="text-slate-400 flex items-center"><Calendar size={14} className="mr-2" /> {POSTS[0].date}</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-brand-600 transition-colors">
                                {POSTS[0].title}
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {POSTS[0].excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                        <User size={18} />
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-bold text-slate-900">{POSTS[0].author}</div>
                                        <div className="text-slate-500">{POSTS[0].readTime}</div>
                                    </div>
                                </div>
                                <Button variant="outline" className="rounded-full group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600">
                                    Read Article <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid for other posts */}
                <div className="grid md:grid-cols-2 gap-10 animate-fade-in-up [animation-delay:400ms]">
                    {POSTS.slice(1).map((post) => (
                        <div key={post.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-white/90 backdrop-blur-md text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">{post.category}</span>
                                </div>
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-4">
                                    <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 mb-6 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-900">{post.author}</span>
                                    <span className="text-brand-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform cursor-pointer">
                                        Read <ArrowRight size={16} className="ml-1" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Signup (Optional, keeps layout balanced) */}
                <div className="mt-24 bg-brand-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden animate-fade-in-up [animation-delay:600ms]">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Stay ahead of the curve.</h3>
                        <p className="text-blue-100 text-lg mb-10">
                            Join high-performing finance teams receiving our monthly digest on NSPB optimization and NetSuite best practices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 px-6 py-4 rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-400 text-slate-900"
                            />
                            <Button variant="primary" className="bg-brand-500 hover:bg-brand-400 text-white border-none py-4 px-8">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                    {/* Background Effects */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent-600/30 rounded-full blur-3xl"></div>
                </div>

            </div>
        </div>
    );
};
