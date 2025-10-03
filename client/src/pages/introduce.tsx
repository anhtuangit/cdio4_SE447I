import React from 'react';

const Introduce: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Về Bất Động Sản Việt</h1>
                    <p className="text-xl opacity-90 max-w-xl mx-auto">
                        Nền tảng trung gian mua bán bất động sản hàng đầu Việt Nam
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Intro Section */}
                <section className="py-16">
                    <div className="container mx-auto">
                        <h2 className="text-4xl text-gray-800 text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
                            Chúng tôi là ai?
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg leading-relaxed text-gray-600 mb-6 text-center">
                                Bất Động Sản Việt là nền tảng công nghệ hàng đầu trong lĩnh vực bất động sản tại Việt Nam.
                                Chúng tôi kết nối người mua, người bán và các chuyên gia bất động sản thông qua một hệ thống
                                minh bạch, an toàn và hiệu quả.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-600 mb-6 text-center">
                                Với hơn 5 năm kinh nghiệm trong ngành, chúng tôi đã hỗ trợ hàng nghìn giao dịch thành công
                                và xây dựng được niềm tin vững chắc từ cộng đồng người dùng.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16">
                    <div className="container mx-auto">
                        <h2 className="text-4xl text-gray-800 text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
                            Dịch vụ của chúng tôi
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                            <div className="bg-white p-8 rounded-xl shadow-md text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                                <div className="text-5xl mb-4">🏠</div>
                                <h3 className="text-xl text-gray-800 mb-4 font-semibold">Mua bán nhà đất</h3>
                                <p className="text-gray-600 leading-relaxed">Kết nối trực tiếp người mua và người bán với hàng nghìn tin đăng chất lượng được kiểm duyệt kỹ lưỡng.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                                <div className="text-5xl mb-4">🏢</div>
                                <h3 className="text-xl text-gray-800 mb-4 font-semibold">Cho thuê bất động sản</h3>
                                <p className="text-gray-600 leading-relaxed">Tìm kiếm và đăng tin cho thuê các loại hình bất động sản từ căn hộ, nhà riêng đến văn phòng, mặt bằng.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                                <div className="text-5xl mb-4">📊</div>
                                <h3 className="text-xl text-gray-800 mb-4 font-semibold">Tư vấn đầu tư</h3>
                                <p className="text-gray-600 leading-relaxed">Cung cấp thông tin thị trường, phân tích giá cả và xu hướng để hỗ trợ quyết định đầu tư.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-xl text-gray-800 mb-4 font-semibold">Thẩm định pháp lý</h3>
                                <p className="text-gray-600 leading-relaxed">Kiểm tra và xác minh tính pháp lý của bất động sản trước khi giao dịch.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Section */}
                <section className="py-16">
                    <div className="bg-white rounded-xl shadow-md p-10 my-10">
                        <h2 className="text-4xl text-gray-800 text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:rounded">
                            Các vấn đề thường gặp khi mua bán bất động sản
                        </h2>

                        <div className="mb-12 pb-8 border-b border-gray-200">
                            <h3 className="text-2xl text-red-500 mb-6 font-semibold">1. Thông tin không minh bạch</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2">
                                    <p className="mb-4 leading-relaxed"><span className="font-semibold text-gray-800">Vấn đề:</span> Nhiều tin đăng thiếu thông tin chi tiết, hình ảnh không rõ ràng, giá cả không chính xác.</p>
                                    <p className="mb-2 font-semibold text-gray-800">Giải pháp của chúng tôi:</p>
                                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                                        <li className="mb-2">Yêu cầu xác minh thông tin người đăng</li>
                                        <li className="mb-2">Kiểm duyệt nội dung trước khi đăng tải</li>
                                        <li className="mb-2">Hệ thống đánh giá và phản hồi từ người dùng</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                                    <h4 className="text-lg text-green-600 mb-4 font-semibold">Thống kê</h4>
                                    <p className="font-semibold text-gray-800 mb-2">95% tin đăng được xác minh</p>
                                    <p className="font-semibold text-gray-800">4.8/5 điểm đánh giá độ tin cậy</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 pb-8 border-b border-gray-200">
                            <h3 className="text-2xl text-red-500 mb-6 font-semibold">2. Rủi ro pháp lý</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2">
                                    <p className="mb-4 leading-relaxed"><span className="font-semibold text-gray-800">Vấn đề:</span> Tranh chấp về quyền sở hữu, giấy tờ không đầy đủ, vi phạm quy hoạch.</p>
                                    <p className="mb-2 font-semibold text-gray-800">Giải pháp của chúng tôi:</p>
                                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                                        <li className="mb-2">Dịch vụ thẩm định pháp lý miễn phí</li>
                                        <li className="mb-2">Đội ngũ luật sư chuyên ngành tư vấn</li>
                                        <li className="mb-2">Bảo hiểm giao dịch cho các hợp đồng lớn</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                                    <h4 className="text-lg text-green-600 mb-4 font-semibold">Cam kết</h4>
                                    <p className="font-semibold text-gray-800 mb-2">100% giao dịch được thẩm định</p>
                                    <p className="font-semibold text-gray-800">Bảo hiểm lên đến 1 tỷ VNĐ</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 pb-8 border-b border-gray-200">
                            <h3 className="text-2xl text-red-500 mb-6 font-semibold">3. Giá cả không hợp lý</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2">
                                    <p className="mb-4 leading-relaxed"><span className="font-semibold text-gray-800">Vấn đề:</span> Giá đăng cao hơn thị trường, thiếu thông tin so sánh giá khu vực.</p>
                                    <p className="mb-2 font-semibold text-gray-800">Giải pháp của chúng tôi:</p>
                                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                                        <li className="mb-2">Công cụ định giá tự động dựa trên AI</li>
                                        <li className="mb-2">Báo cáo giá thị trường theo khu vực</li>
                                        <li className="mb-2">Lịch sử biến động giá chi tiết</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                                    <h4 className="text-lg text-green-600 mb-4 font-semibold">Độ chính xác</h4>
                                    <p className="font-semibold text-gray-800 mb-2">92% giá đăng sát thị trường</p>
                                    <p className="font-semibold text-gray-800">Cập nhật giá hàng tuần</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl text-red-500 mb-6 font-semibold">4. Khó khăn trong thương lượng</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2">
                                    <p className="mb-4 leading-relaxed"><span className="font-semibold text-gray-800">Vấn đề:</span> Thiếu kỹ năng đàm phán, không hiểu rõ quy trình giao dịch.</p>
                                    <p className="mb-2 font-semibold text-gray-800">Giải pháp của chúng tôi:</p>
                                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                                        <li className="mb-2">Hỗ trợ môi giới chuyên nghiệp</li>
                                        <li className="mb-2">Hướng dẫn quy trình giao dịch chi tiết</li>
                                        <li className="mb-2">Dịch vụ đàm phán thay mặt</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                                    <h4 className="text-lg text-green-600 mb-4 font-semibold">Hiệu quả</h4>
                                    <p className="font-semibold text-gray-800 mb-2">85% giao dịch thành công</p>
                                    <p className="font-semibold text-gray-800">Tiết kiệm 15% chi phí trung bình</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16">
                    <div className="bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-xl p-10 my-10">
                        <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-white after:rounded">
                            Tại sao chọn Bất Động Sản Việt?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                            <div className="bg-white bg-opacity-10 p-8 rounded-xl text-center">
                                <h3 className="text-xl mb-4 font-semibold">🛡️ An toàn & Bảo mật</h3>
                                <p className="leading-relaxed">Hệ thống bảo mật đa lớp, mã hóa thông tin cá nhân và giao dịch.</p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-8 rounded-xl text-center">
                                <h3 className="text-xl mb-4 font-semibold">⚡ Nhanh chóng & Hiệu quả</h3>
                                <p className="leading-relaxed">Tìm kiếm thông minh, kết nối trực tiếp, xử lý giao dịch nhanh chóng.</p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-8 rounded-xl text-center">
                                <h3 className="text-xl mb-4 font-semibold">💰 Minh bạch chi phí</h3>
                                <p className="leading-relaxed">Không phí ẩn, mức phí cạnh tranh, nhiều gói dịch vụ linh hoạt.</p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-8 rounded-xl text-center">
                                <h3 className="text-xl mb-4 font-semibold">🎯 Chính xác cao</h3>
                                <p className="leading-relaxed">AI hỗ trợ định giá, phân tích thị trường chính xác và cập nhật.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16">
                    <div className="bg-gray-800 text-white rounded-xl p-10 my-10">
                        <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500 after:rounded">
                            Liên hệ với chúng tôi
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
                                <h3 className="text-xl text-blue-400 mb-4 font-semibold">📞 Hotline</h3>
                                <p className="leading-relaxed">1900 1234 (24/7)</p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
                                <h3 className="text-xl text-blue-400 mb-4 font-semibold">📧 Email</h3>
                                <p className="leading-relaxed">support@batdongsanviet.com</p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
                                <h3 className="text-xl text-blue-400 mb-4 font-semibold">🏢 Văn phòng</h3>
                                <p className="leading-relaxed">123 Nguyễn Huệ, Quận 1, TP.HCM</p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-xl text-center">
                                <h3 className="text-xl text-blue-400 mb-4 font-semibold">⏰ Giờ làm việc</h3>
                                <p className="leading-relaxed">T2-T6: 8:00-18:00<br />T7-CN: 8:00-17:00</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Introduce;