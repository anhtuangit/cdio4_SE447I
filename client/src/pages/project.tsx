import React, { useState } from 'react';

interface PriceHistory {
    quarter: string;
    price: number;
}

interface Project {
    id: number;
    name: string;
    location: string;
    developer: string;
    type: string;
    price: string;
    area: string;
    status: string;
    completion: string;
    image: string;
    description: string;
    amenities: string[];
    priceHistory: PriceHistory[];
}

interface MarketNews {
    id: number;
    title: string;
    date: string;
    summary: string;
    category: string;
}

interface MarketData {
    priceIndex: {
        current: number;
        change: string;
        period: string;
    };
    transactions: {
        current: number;
        change: string;
        period: string;
    };
    inventory: {
        current: number;
        change: string;
        period: string;
    };
    avgPrice: {
        current: string;
        change: string;
        period: string;
    };
}

const Project: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('projects');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            name: "Vinhomes Grand Park",
            location: "Quận 9, TP.HCM",
            developer: "Vingroup",
            type: "Căn hộ cao cấp",
            price: "2.5 - 4.2 tỷ VNĐ",
            area: "50 - 120 m²",
            status: "Đang bán",
            completion: "2024",
            image: "https://res.cloudinary.com/brickandbatten/images/f_auto,q_auto/v1660569890/wordpress_assets/GrayBrickHouse-social-share/GrayBrickHouse-social-share.jpg?_i=AA",
            description: "Dự án căn hộ cao cấp với đầy đủ tiện ích hiện đại, giao thông thuận lợi.",
            amenities: ["Hồ bơi", "Gym", "Công viên", "Trường học", "Bệnh viện"],
            priceHistory: [
                { quarter: "Q1/2023", price: 2.2 },
                { quarter: "Q2/2023", price: 2.3 },
                { quarter: "Q3/2023", price: 2.4 },
                { quarter: "Q4/2023", price: 2.5 }
            ]
        },
        {
            id: 2,
            name: "Masteri Thảo Điền",
            location: "Quận 2, TP.HCM",
            developer: "Thảo Điền Investment",
            type: "Căn hộ luxury",
            price: "3.8 - 8.5 tỷ VNĐ",
            area: "65 - 150 m²",
            status: "Sắp mở bán",
            completion: "2025",
            image: "https://pinaywise.com/wp-content/uploads/2024/01/house-in-philippines.jpg",
            description: "Căn hộ cao cấp view sông Sài Gòn, thiết kế hiện đại châu Âu.",
            amenities: ["Sky bar", "Spa", "Tennis", "Marina", "Shopping mall"],
            priceHistory: [
                { quarter: "Q1/2023", price: 3.5 },
                { quarter: "Q2/2023", price: 3.6 },
                { quarter: "Q3/2023", price: 3.7 },
                { quarter: "Q4/2023", price: 3.8 }
            ]
        },
        {
            id: 3,
            name: "Eco Green Saigon",
            location: "Quận 7, TP.HCM",
            developer: "Xuân Mai Corp",
            type: "Căn hộ xanh",
            price: "1.8 - 3.2 tỷ VNĐ",
            area: "45 - 95 m²",
            status: "Đang bán",
            completion: "2024",
            image: "https://cdn.archilovers.com/projects/b_730_9cf4234e-95cb-1dbe-5c98-ef7081d4e887.jpg",
            description: "Dự án căn hộ thân thiện môi trường với công nghệ xanh tiên tiến.",
            amenities: ["Vườn xanh", "Năng lượng mặt trời", "Hệ thống lọc nước", "Khu vui chơi trẻ em"],
            priceHistory: [
                { quarter: "Q1/2023", price: 1.6 },
                { quarter: "Q2/2023", price: 1.7 },
                { quarter: "Q3/2023", price: 1.75 },
                { quarter: "Q4/2023", price: 1.8 }
            ]
        }
    ];

    const marketNews: MarketNews[] = [
        {
            id: 1,
            title: "Thị trường BĐS TP.HCM tăng trưởng 15% trong Q4/2023",
            date: "15/12/2023",
            summary: "Giá căn hộ tại các quận trung tâm tiếp tục tăng nhẹ, nguồn cung mới tập trung ở khu vực phía Đông.",
            category: "Thị trường"
        },
        {
            id: 2,
            title: "Xu hướng đầu tư BĐS 2024: Tập trung vào căn hộ cao cấp",
            date: "10/12/2023",
            summary: "Các chuyên gia dự báo phân khúc căn hộ cao cấp sẽ là điểm sáng của thị trường trong năm 2024.",
            category: "Đầu tư"
        },
        {
            id: 3,
            title: "Chính sách mới về thuế BĐS có hiệu lực từ 2024",
            date: "05/12/2023",
            summary: "Thuế chuyển nhượng BĐS được điều chỉnh, tạo thuận lợi cho các giao dịch hợp pháp.",
            category: "Chính sách"
        }
    ];

    const marketData: MarketData = {
        priceIndex: {
            current: 156.8,
            change: "+2.3%",
            period: "So với tháng trước"
        },
        transactions: {
            current: 1247,
            change: "+8.5%",
            period: "Giao dịch tháng 12"
        },
        inventory: {
            current: 15420,
            change: "-3.2%",
            period: "Tồn kho hiện tại"
        },
        avgPrice: {
            current: "45.2 triệu/m²",
            change: "+1.8%",
            period: "Giá trung bình"
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-sm ">
            <div className="bg-gray-400 text-white py-6 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl md:text-xl font-bold mb-4 drop-shadow-md">Dự Án Bất Động Sản</h1>
                    <p className="text-lg opacity-90 max-w-xl mx-auto">
                        Khám phá các dự án hot nhất và thông tin thị trường cập nhật
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="py-10">
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                        <button
                            className={`py-3 px-6 border-2 border-indigo-500 rounded-full font-semibold transition-all
                ${activeTab === 'projects' ? 'bg-sky-500 text-white' : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white'}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            Dự Án Nổi Bật
                        </button>
                        <button
                            className={`py-3 px-6 border-2 border-indigo-500 rounded-full font-semibold transition-all
                ${activeTab === 'market' ? 'bg-sky-500 text-white' : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white'}`}
                            onClick={() => setActiveTab('market')}
                        >
                            Thị Trường
                        </button>
                        <button
                            className={`py-3 px-6 border-2 border-indigo-500 rounded-full font-semibold transition-all
                ${activeTab === 'news' ? 'bg-sky-500 text-white' : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white'}`}
                            onClick={() => setActiveTab('news')}
                        >
                            Tin Tức
                        </button>
                    </div>
                </div>
                {activeTab === 'projects' && (
                    <section className="py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map(project => (
                                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                                    <div className="relative h-48">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase
                        ${project.status === 'Đang bán' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.name}</h3>
                                        <p className="text-gray-600 mb-2 text-sm">📍 {project.location}</p>
                                        <p className="text-gray-600 mb-4 text-sm">🏢 {project.developer}</p>

                                        <div className="space-y-2 mb-6">
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-gray-600 text-sm">Loại hình:</span>
                                                <span className="font-semibold text-gray-800 text-sm">{project.type}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-gray-600 text-sm">Giá bán:</span>
                                                <span className="font-bold text-red-600 text-sm">{project.price}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-gray-600 text-sm">Diện tích:</span>
                                                <span className="font-semibold text-gray-800 text-sm">{project.area}</span>
                                            </div>
                                            <div className="flex justify-between pb-2">
                                                <span className="text-gray-600 text-sm">Hoàn thành:</span>
                                                <span className="font-semibold text-gray-800 text-sm">{project.completion}</span>
                                            </div>
                                        </div>

                                        <button
                                            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            Xem Chi Tiết
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {activeTab === 'market' && (
                    <section className="py-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Thông Tin Thị Trường</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">Chỉ số giá</h3>
                                <div className="text-4xl font-bold text-gray-800 mb-2">{marketData.priceIndex.current}</div>
                                <div className={`font-semibold mb-1 ${marketData.priceIndex.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                                    {marketData.priceIndex.change}
                                </div>
                                <div className="text-gray-500 text-sm">{marketData.priceIndex.period}</div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">Giao dịch</h3>
                                <div className="text-4xl font-bold text-gray-800 mb-2">{marketData.transactions.current}</div>
                                <div className={`font-semibold mb-1 ${marketData.transactions.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                                    {marketData.transactions.change}
                                </div>
                                <div className="text-gray-500 text-sm">{marketData.transactions.period}</div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">Tồn kho</h3>
                                <div className="text-4xl font-bold text-gray-800 mb-2">{marketData.inventory.current}</div>
                                <div className={`font-semibold mb-1 ${marketData.inventory.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                                    {marketData.inventory.change}
                                </div>
                                <div className="text-gray-500 text-sm">{marketData.inventory.period}</div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">Giá TB</h3>
                                <div className="text-4xl font-bold text-gray-800 mb-2">{marketData.avgPrice.current}</div>
                                <div className={`font-semibold mb-1 ${marketData.avgPrice.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                                    {marketData.avgPrice.change}
                                </div>
                                <div className="text-gray-500 text-sm">{marketData.avgPrice.period}</div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Phân Tích Thị Trường Q4/2023</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-indigo-500 mb-4">🔥 Xu hướng nổi bật</h4>
                                    <ul className="space-y-3">
                                        <li className="pb-3 border-b border-gray-100 text-gray-700">Căn hộ cao cấp tại khu vực phía Đông TP.HCM tăng giá 3-5%</li>
                                        <li className="pb-3 border-b border-gray-100 text-gray-700">Nhà phố, biệt thự tại các tỉnh lân cận được quan tâm nhiều</li>
                                        <li className="text-gray-700">Bất động sản công nghiệp tiếp tục khan hiếm nguồn cung</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-indigo-500 mb-4">📊 Dự báo 2024</h4>
                                    <ul className="space-y-3">
                                        <li className="pb-3 border-b border-gray-100 text-gray-700">Giá BĐS dự kiến tăng 5-8% so với năm 2023</li>
                                        <li className="pb-3 border-b border-gray-100 text-gray-700">Nguồn cung mới tập trung ở phân khúc trung cấp</li>
                                        <li className="text-gray-700">Thị trường cho thuê sẽ phục hồi mạnh mẽ</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-indigo-500 mb-4">💡 Khuyến nghị đầu tư</h4>
                                    <ul className="space-y-3">
                                        <li className="pb-3 border-b border-gray-100 text-gray-700">Ưu tiên các dự án có vị trí đắc địa, giao thông thuận lợi</li>
                                        <li className="pb-3 border-b border-gray-100 text-gray-700">Chú ý đến pháp lý và tiến độ xây dựng</li>
                                        <li className="text-gray-700">Đa dạng hóa danh mục đầu tư theo khu vực</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeTab === 'news' && (
                    <section className="py-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Tin Tức Bất Động Sản</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {marketNews.map(news => (
                                <article key={news.id} className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="px-3 py-1 bg-indigo-500 text-white text-xs font-semibold rounded">
                                            {news.category}
                                        </span>
                                        <span className="text-gray-500 text-sm">{news.date}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-snug">{news.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{news.summary}</p>
                                    <button className="px-4 py-2 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-colors">
                                        Đọc thêm
                                    </button>
                                </article>
                            ))}
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-8">💰 Mẹo Đầu Tư Thông Minh</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                                    <h4 className="text-lg font-semibold text-green-600 mb-3">1. Nghiên cứu kỹ thị trường</h4>
                                    <p className="text-gray-700 text-sm">Tìm hiểu giá cả, xu hướng và quy hoạch khu vực trước khi đầu tư.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                                    <h4 className="text-lg font-semibold text-green-600 mb-3">2. Kiểm tra pháp lý</h4>
                                    <p className="text-gray-700 text-sm">Đảm bảo dự án có đầy đủ giấy phép và không có tranh chấp.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                                    <h4 className="text-lg font-semibold text-green-600 mb-3">3. Đánh giá tiềm năng</h4>
                                    <p className="text-gray-700 text-sm">Xem xét khả năng tăng giá và thanh khoản trong tương lai.</p>
                                </div>
                                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                                    <h4 className="text-lg font-semibold text-green-600 mb-3">4. Quản lý rủi ro</h4>
                                    <p className="text-gray-700 text-sm">Không đầu tư quá 30% tài sản vào bất động sản.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800">{selectedProject.name}</h2>
                            <button
                                className="text-3xl text-gray-500 hover:text-gray-700"
                                onClick={() => setSelectedProject(null)}
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.description}</p>

                                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Tiện ích nổi bật:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.amenities.map((amenity, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded"
                                            >
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Biến động giá theo quý:</h4>
                                    <div className="bg-gray-50 p-4 rounded-lg h-40 flex items-end justify-between">
                                        {selectedProject.priceHistory.map((item, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div
                                                    className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t w-12"
                                                    style={{ height: `${item.price * 20}px` }}
                                                ></div>
                                                <div className="text-xs font-semibold text-gray-600 mt-2">{item.quarter}</div>
                                                <div className="text-sm font-bold text-gray-800">{item.price}B</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;