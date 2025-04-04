import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaShare, FaStar } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import './CrowdfundingDetail.css';
import { toast } from 'react-hot-toast';

const CrowdfundingDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState('recent');
    const [isFavorited, setIsFavorited] = useState(false);
    const [campaign, setCampaign] = useState({
        title: "Street Training",
        description: "We are raising money for the people in the street to have a good training opportunity.",
        target: 35000,
        raised: 16900,
        deadline: "23rd March, 2025",
        createdBy: "Raihan Khan",
        creatorImage: "/Images/testimonial.png",
        donors: [
            { id: 1, name: "Abuka Henry", amount: 199.00, date: "23rd January, 2023", image: "/Images/testimonial.png" },
            { id: 2, name: "Abuka Henry", amount: 199.00, date: "23rd January, 2023", image: "/Images/testimonial.png" },
            { id: 3, name: "Abuka Henry", amount: 199.00, date: "23rd January, 2023", image: "/Images/testimonial.png" },
            { id: 4, name: "Abuka Henry", amount: 199.00, date: "23rd January, 2023", image: "/Images/testimonial.png" },
            { id: 5, name: "Abuka Henry", amount: 199.00, date: "23rd January, 2023", image: "/Images/testimonial.png" },
            { id: 6, name: "Abuka Henry", amount: 199.00, date: "23rd January, 2023", image: "/Images/testimonial.png" },
            { id: 7, name: "Abuka Henry", amount: 199.00, date: "23rd January, 2023", image: "/Images/testimonial.png" },
            { id: 8, name: "Abuka Henry", amount: 199.00, date: "23rd January, 2023", image: "/Images/testimonial.png" }
        ]
    });

    const [otherCampaigns] = useState([
        {
            id: 1,
            title: "Holiday Picnic",
            raised: 16900,
            target: 35000,
            deadline: "23rd March, 2025",
            createdBy: "Raihan Khan",
            creatorImage: "/Images/testimonial.png",
            image: "/Images/blogcard.jpg"
        },
        {
            id: 2,
            title: "Holiday Picnic",
            raised: 16900,
            target: 35000,
            deadline: "23rd March, 2025",
            createdBy: "Raihan Khan",
            creatorImage: "/Images/testimonial.png",
            image: "/Images/blogcard.jpg"
        },
        {
            id: 3,
            title: "Holiday Picnic",
            raised: 16900,
            target: 35000,
            deadline: "23rd March, 2025",
            createdBy: "Raihan Khan",
            creatorImage: "/Images/testimonial.png",
            image: "/Images/blogcard.jpg"
        }
    ]);

    useEffect(() => {
        const fetchCampaignDetails = async () => {
            try {
                setLoading(true);
                // Simulated API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                // In real implementation, fetch campaign details here
                setLoading(false);
            } catch (err) {
                setError('Failed to load campaign details');
                setLoading(false);
            }
        };

        fetchCampaignDetails();
    }, [id]);

    const calculateProgress = (raised, target) => {
        return Math.round((raised / target) * 100);
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: campaign.title,
                    text: campaign.description,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                toast.success('Link copied to clipboard!');
            }
        } catch (error) {
            toast.error('Failed to share campaign');
        }
    };

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
        toast.success(isFavorited ? 'Removed from favorites' : 'Added to favorites');
    };

    const handleSortChange = () => {
        const newSortBy = sortBy === 'recent' ? 'highest' : 'recent';
        setSortBy(newSortBy);

        const sortedDonors = [...campaign.donors].sort((a, b) => {
            if (newSortBy === 'highest') {
                return b.amount - a.amount;
            }
            // Sort by date for recent
            return new Date(b.date) - new Date(a.date);
        });

        setCampaign(prev => ({ ...prev, donors: sortedDonors }));
    };

    const handleContribute = () => {
        // Navigate to contribution page
        navigate(`/crowdfunding/${id}/contribute`);
    };

    if (loading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <img src="/Images/loader.svg" alt="loading..." className="w-[60px] h-[60px]" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-red-500">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-[#00FFB2] text-black rounded-lg"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[#0E0F13] text-white font-sen">
            {/* Background Gradient */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <img
                    src="/Images/crowd.svg"
                    alt=""
                    className="absolute w-full h-full object-cover"
                    style={{
                        opacity: '0.4',
                        mixBlendMode: 'normal',
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-6">
                {/* Back Button */}
                <Link to="/home" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
                    • Back
                </Link>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* Campaign Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070"
                            alt="Campaign"
                            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                        />
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <button
                                onClick={handleShare}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C5FF32] flex items-center justify-center hover:opacity-90 transition-opacity"
                            >
                                <FaShare className="text-lg md:text-xl text-black" />
                            </button>
                            <button
                                onClick={handleFavorite}
                                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-all ${isFavorited ? 'bg-[#00FFB2]' : 'bg-[#C5FF32]'
                                    }`}
                            >
                                <FaStar className="text-lg md:text-xl text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Campaign Title and Description */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">{campaign.title}</h1>
                        <p className="text-gray-400 text-sm md:text-base">{campaign.description}</p>
                    </div>

                    {/* Campaign Stats and Progress */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="text-2xl md:text-3xl font-bold">${campaign.raised.toLocaleString()}</div>
                                <div className="text-gray-400 text-xs md:text-sm">raised</div>
                            </div>
                            <div className="text-right">
                                <div className="text-gray-400 text-xs md:text-sm">Target</div>
                                <div className="text-lg md:text-xl">${campaign.target.toLocaleString()}</div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#00FFB2] transition-all duration-300 ease-in-out"
                                style={{ width: `${calculateProgress(campaign.raised, campaign.target)}%` }}
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></div>
                            </div>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm text-gray-400">
                            <span>{calculateProgress(campaign.raised, campaign.target)}%</span>
                            <span>Deadline: {campaign.deadline}</span>
                        </div>
                    </div>

                    {/* Created By and Contribute Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
                        <div className="flex items-center gap-2">
                            <img src={campaign.creatorImage} alt={campaign.createdBy} className="w-6 h-6 rounded-full object-cover" />
                            <span className="text-gray-400 text-sm">Created by</span>
                            <span className="text-sm">{campaign.createdBy}</span>
                        </div>
                        <button
                            onClick={handleContribute}
                            className="w-full sm:w-auto px-8 py-2 bg-[#00FFB2] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Contribute now
                        </button>
                    </div>

                    {/* Donors and Other Crowdfundings Side by Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Donors Section */}
                        <div className="lg:col-span-7">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold">Donors</h2>
                                <button
                                    onClick={handleSortChange}
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {sortBy === 'highest' ? 'Highest' : 'Recent'}
                                    <BiChevronDown className="text-xl" />
                                </button>
                            </div>
                            <div className="space-y-3">
                                {campaign.donors.map((donor) => (
                                    <div key={donor.id} className="flex items-center justify-between bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:bg-[#1A1A1A]/90 transition-all duration-300">
                                        <div className="flex items-center gap-3">
                                            <img src={donor.image} alt={donor.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-white/10" />
                                            <div>
                                                <p className="font-medium text-sm md:text-base text-white/90">{donor.name}</p>
                                                <p className="text-xs md:text-sm text-white/60">{donor.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs md:text-sm text-white/60">Amount Donated</p>
                                            <p className="font-medium text-sm md:text-base text-white/90">$ {donor.amount}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Other Crowdfundings Section */}
                        <div className="lg:col-span-5">
                            <h2 className="text-xl font-bold mb-6">Other Crowdfundings</h2>
                            <div className="space-y-3">
                                {otherCampaigns.map((campaign) => (
                                    <div
                                        key={campaign.id}
                                        onClick={() => navigate(`/crowdfunding/${campaign.id}`)}
                                        className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/5 rounded-xl p-4 space-y-3 cursor-pointer hover:bg-[#1A1A1A]/90 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src={campaign.image} alt={campaign.title} className="w-12 h-12 rounded-lg object-cover border border-white/10" />
                                            <h3 className="font-medium text-sm md:text-base text-white/90">{campaign.title}</h3>
                                        </div>
                                        <div>
                                            <div className="text-xs md:text-sm text-white/60">
                                                ${campaign.raised.toLocaleString()} raised
                                            </div>
                                            <div className="relative h-1 bg-[#1A1A1A] rounded-full overflow-hidden mt-2">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-[#00FFB2] transition-all duration-300 ease-in-out"
                                                    style={{ width: `${calculateProgress(campaign.raised, campaign.target)}%` }}
                                                >
                                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-xs md:text-sm mt-1">
                                                <span className="text-white/60">Target</span>
                                                <span className="text-white/60">${campaign.target.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs md:text-sm text-white/60">
                                            <div className="flex items-center gap-2">
                                                <img src={campaign.creatorImage} alt={campaign.createdBy} className="w-4 h-4 rounded-full object-cover border border-white/10" />
                                                <span>{campaign.createdBy}</span>
                                            </div>
                                            <span>{campaign.deadline}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrowdfundingDetail;
