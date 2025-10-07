import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiEye, FiPlusCircle, FiUser, FiPhone, FiMail, FiMapPin, FiCalendar } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineDashboard } from 'react-icons/ai';

interface UserProfile {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
    joinDate: string;
}

interface RealEstateListing {
    id: string;
    title: string;
    address: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    description: string;
    thumbnailUrl: string;
    createdAt: string;
    status: 'active' | 'pending' | 'rejected' | 'sold';
}

const Profile: React.FC = () => {
    // State for user profile
    const [userProfile, setUserProfile] = useState<UserProfile>({
        id: '123456',
        fullName: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phone: '0912345678',
        address: 'Quận 1, TP. Hồ Chí Minh',
        avatar: '',
        joinDate: '20/07/2024',
    });

    // State for real estate listings
    const [listings, setListings] = useState<RealEstateListing[]>([
        {
            id: '1',
            title: 'Căn hộ chung cư cao cấp Vinhomes Central Park',
            address: 'Bình Thạnh, TP. Hồ Chí Minh',
            price: 3500000000,
            area: 85,
            bedrooms: 2,
            bathrooms: 2,
            description: 'Căn hộ 2 phòng ngủ view sông, nội thất cao cấp',
            thumbnailUrl: '/listing1.jpg',
            createdAt: '15/09/2025',
            status: 'active',
        },
        {
            id: '2',
            title: 'Nhà phố liền kề khu đô thị mới',
            address: 'Quận 9, TP. Hồ Chí Minh',
            price: 6800000000,
            area: 120,
            bedrooms: 3,
            bathrooms: 3,
            description: 'Nhà phố 1 trệt 2 lầu, thiết kế hiện đại, đầy đủ tiện nghi',
            thumbnailUrl: '/listing2.jpg',
            createdAt: '10/08/2025',
            status: 'pending',
        },
        {
            id: '3',
            title: 'Đất nền khu dân cư hiện hữu',
            address: 'Thủ Đức, TP. Hồ Chí Minh',
            price: 2800000000,
            area: 100,
            bedrooms: 0,
            bathrooms: 0,
            description: 'Lô đất vuông vức, đường 12m, gần trường học và chợ',
            thumbnailUrl: '/listing3.jpg',
            createdAt: '05/09/2025',
            status: 'sold',
        },
    ]);

    // State for profile editing
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [editedProfile, setEditedProfile] = useState<UserProfile>(userProfile);

    // State for active tab
    const [activeTab, setActiveTab] = useState<'listings' | 'profile'>('profile');

    // Format currency to VND
    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Handle profile edit
    const handleProfileEdit = () => {
        setIsEditingProfile(true);
        setEditedProfile(userProfile);
    };

    // Handle profile update
    const handleProfileUpdate = () => {
        setUserProfile(editedProfile);
        setIsEditingProfile(false);
        // Here you would typically make an API call to update the profile
        alert('Thông tin cá nhân đã được cập nhật');
    };

    // Handle profile field change
    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedProfile({ ...editedProfile, [name]: value });
    };

    // Handle delete listing
    const handleDeleteListing = (id: string) => {
        // Confirm before deleting
        if (window.confirm('Bạn có chắc chắn muốn xóa tin đăng này?')) {
            setListings(listings.filter(listing => listing.id !== id));
            // Here you would typically make an API call to delete the listing
            alert('Tin đăng đã được xóa');
        }
    };

    // Get status badge color
    const getStatusBadgeColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'rejected':
                return 'bg-red-100 text-red-800';
            case 'sold':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Get status text in Vietnamese
    const getStatusText = (status: string) => {
        switch (status) {
            case 'active':
                return 'Đang hiển thị';
            case 'pending':
                return 'Chờ duyệt';
            case 'rejected':
                return 'Bị từ chối';
            case 'sold':
                return 'Đã bán';
            default:
                return status;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Trang cá nhân</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Xin chào, {userProfile.fullName}</span>
                        <img src={userProfile.avatar} alt="Avatar" className="h-10 w-10 rounded-full object-cover" />
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    {/* Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'profile'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <FiUser className="inline mr-2" />
                                Thông tin cá nhân
                            </button>
                            <button
                                onClick={() => setActiveTab('listings')}
                                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'listings'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <AiOutlineHome className="inline mr-2" />
                                Quản lý tin đăng
                            </button>
                        </nav>
                    </div>

                    {/* Profile Information */}
                    {activeTab === 'profile' && (
                        <div className="px-4 py-5 sm:px-6">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Thông tin cá nhân</h3>
                                {!isEditingProfile && (
                                    <button
                                        onClick={handleProfileEdit}
                                        className="ml-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <FiEdit className="mr-1" /> Chỉnh sửa
                                    </button>
                                )}
                            </div>

                            <div className="mt-6 border-t border-gray-200">
                                <dl className="divide-y divide-gray-200">
                                    {isEditingProfile ? (
                                        // Edit mode
                                        <div className="py-6">
                                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                                        Họ và tên
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            id="fullName"
                                                            value={editedProfile.fullName}
                                                            onChange={handleProfileChange}
                                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                        Email
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            value={editedProfile.email}
                                                            onChange={handleProfileChange}
                                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                        Số điện thoại
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            id="phone"
                                                            value={editedProfile.phone}
                                                            onChange={handleProfileChange}
                                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                        Địa chỉ
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            id="address"
                                                            value={editedProfile.address}
                                                            onChange={handleProfileChange}
                                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-6 flex justify-end space-x-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsEditingProfile(false)}
                                                        className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                    >
                                                        Hủy
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={handleProfileUpdate}
                                                        className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                    >
                                                        Lưu thông tin
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex py-4">
                                                <div className="mr-6">
                                                    <img
                                                        src={userProfile.avatar}
                                                        alt="Avatar"
                                                        className="h-24 w-24 rounded-full object-cover border-4 border-white shadow"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-xl font-bold">{userProfile.fullName}</h2>
                                                    <p className="text-sm text-gray-500 mt-1 flex items-center">
                                                        <FiCalendar className="mr-1" /> Tham gia từ: {userProfile.joinDate}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                                    <FiMail className="mr-2" /> Email
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.email}</dd>
                                            </div>

                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                                    <FiPhone className="mr-2" /> Số điện thoại
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.phone}</dd>
                                            </div>

                                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                                    <FiMapPin className="mr-2" /> Địa chỉ
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.address}</dd>
                                            </div>
                                        </>
                                    )}
                                </dl>
                            </div>
                        </div>
                    )}

                    {/* Listings Management */}
                    {activeTab === 'listings' && (
                        <div className="px-4 py-5 sm:px-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Quản lý tin đăng của tôi</h3>
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <FiPlusCircle className="mr-2" /> Đăng tin mới
                                </button>
                            </div>

                            {/* Dashboard */}
                            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                                <AiOutlineDashboard className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Tổng tin đăng</dt>
                                                    <dd className="text-lg font-semibold text-gray-900">{listings.length}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                                <AiOutlineDashboard className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Đang hiển thị</dt>
                                                    <dd className="text-lg font-semibold text-gray-900">
                                                        {listings.filter(listing => listing.status === 'active').length}
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                                <AiOutlineDashboard className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Chờ duyệt</dt>
                                                    <dd className="text-lg font-semibold text-gray-900">
                                                        {listings.filter(listing => listing.status === 'pending').length}
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                                <AiOutlineDashboard className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Đã bán</dt>
                                                    <dd className="text-lg font-semibold text-gray-900">
                                                        {listings.filter(listing => listing.status === 'sold').length}
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Listings Table */}
                            <div className="mt-8 flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Tin đăng
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Giá
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Diện tích
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Ngày đăng
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Trạng thái
                                                        </th>
                                                        <th scope="col" className="relative px-6 py-3">
                                                            <span className="sr-only">Thao tác</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {listings.map(listing => (
                                                        <tr key={listing.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="flex items-center">
                                                                    <div className="flex-shrink-0 h-10 w-10">
                                                                        <img
                                                                            className="h-10 w-10 rounded-md object-cover"
                                                                            src={listing.thumbnailUrl}
                                                                            alt={listing.title}
                                                                        />
                                                                    </div>
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                                                                        <div className="text-sm text-gray-500">{listing.address}</div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-900 font-medium">
                                                                    {formatCurrency(listing.price)}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-900">{listing.area} m²</div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {listing.createdAt}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span
                                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(
                                                                        listing.status
                                                                    )}`}
                                                                >
                                                                    {getStatusText(listing.status)}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <div className="flex justify-end space-x-2">
                                                                    <button className="text-blue-600 hover:text-blue-900">
                                                                        <FiEye className="h-5 w-5" title="Xem chi tiết" />
                                                                    </button>
                                                                    <button className="text-indigo-600 hover:text-indigo-900">
                                                                        <FiEdit className="h-5 w-5" title="Chỉnh sửa" />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteListing(listing.id)}
                                                                        className="text-red-600 hover:text-red-900"
                                                                    >
                                                                        <FiTrash2 className="h-5 w-5" title="Xóa tin" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Profile;