import { Zap } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-800 dark:bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Zap className="w-6 h-6 text-teal-400" />
                        <span className="font-semibold">StateChain Reporter</span>
                        <span className="text-sm text-gray-300 dark:text-gray-400">v2.0</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
                        <a href="#" className="hover:text-teal-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-teal-300 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-teal-300 transition-colors">Smart Contract</a>
                        <a href="#" className="hover:text-teal-300 transition-colors">Government Portal</a>
                        <span className="text-gray-300 dark:text-gray-400">© 2025 StateChain. All rights reserved.</span>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-blue-700 dark:border-slate-700">
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-300 dark:text-gray-400">
                        <span>🔗 Sepolia Ethereum</span>
                        <span>•</span>
                        <span>⚡ Gas Fee: Optimal</span>
                        <span>•</span>
                        <span>🔒 End-to-End Encrypted</span>
                        <span>•</span>
                        <span>🏛️ Government Verified</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer